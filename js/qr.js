/* QR Code generator, vanilla JavaScript, no libraries, no APIs */
(function (global) {
  'use strict';

  var EXP = new Array(512);
  var LOG = new Array(256);

  (function initGF() {
    var x = 1;
    for (var i = 0; i < 255; i++) {
      EXP[i] = x;
      LOG[x] = i;
      x <<= 1;
      if (x & 256) x ^= 0x11d;
    }
    for (var j = 255; j < 512; j++) EXP[j] = EXP[j - 255];
  })();

  function gfMul(a, b) {
    if (!a || !b) return 0;
    return EXP[LOG[a] + LOG[b]];
  }

  function rsEncode(data, ecCount) {
    var gen = [1];
    for (var i = 0; i < ecCount; i++) {
      var next = new Array(gen.length + 1);
      for (var k = 0; k < next.length; k++) next[k] = 0;
      for (var j = 0; j < gen.length; j++) {
        next[j] ^= gfMul(gen[j], EXP[i]);
        next[j + 1] ^= gen[j];
      }
      gen = next;
    }
    var rec = new Array(ecCount);
    for (i = 0; i < ecCount; i++) rec[i] = 0;
    for (i = 0; i < data.length; i++) {
      var factor = data[i] ^ rec[0];
      for (j = 0; j < ecCount - 1; j++) rec[j] = rec[j + 1];
      rec[ecCount - 1] = 0;
      if (factor) {
        for (j = 0; j < ecCount; j++) rec[j] ^= gfMul(gen[j + 1], factor);
      }
    }
    return rec;
  }

  var TOTAL_CW = [0, 26, 44, 70, 100, 134, 172];
  var EC_PER_BLOCK = [0, 10, 16, 26, 18, 24, 16];
  var EC_BLOCKS = [0, 1, 1, 1, 2, 2, 4];
  var ALIGN_POS = [0, 0, 18, 22, 26, 30, 34];
  var REMAINDER = [0, 0, 7, 7, 7, 7, 7];

  function BitBuffer() {
    this.bits = [];
  }
  BitBuffer.prototype.put = function (val, len) {
    for (var i = len - 1; i >= 0; i--) this.bits.push((val >>> i) & 1);
  };
  BitBuffer.prototype.putBits = function (arr) {
    for (var i = 0; i < arr.length; i++) this.bits.push(arr[i]);
  };

  function chooseVersion(byteLen) {
    for (var v = 1; v <= 6; v++) {
      var dataCW = TOTAL_CW[v] - EC_PER_BLOCK[v] * EC_BLOCKS[v];
      var capacity = Math.floor((dataCW * 8 - 12) / 8);
      if (byteLen <= capacity) return v;
    }
    throw new Error('Text too long for QR');
  }

  function bytesOf(text) {
    var out = [];
    for (var i = 0; i < text.length; i++) {
      var c = text.charCodeAt(i);
      if (c < 128) out.push(c);
      else {
        var encoded = unescape(encodeURIComponent(text.charAt(i)));
        for (var j = 0; j < encoded.length; j++) out.push(encoded.charCodeAt(j));
      }
    }
    return out;
  }

  function buildData(text, version) {
    var bytes = bytesOf(text);
    var dataCW = TOTAL_CW[version] - EC_PER_BLOCK[version] * EC_BLOCKS[version];
    var buf = new BitBuffer();
    buf.put(0x4, 4);
    buf.put(bytes.length, 8);
    for (var i = 0; i < bytes.length; i++) buf.put(bytes[i], 8);
    var maxBits = dataCW * 8;
    var term = Math.min(4, maxBits - buf.bits.length);
    buf.put(0, term);
    while (buf.bits.length % 8) buf.bits.push(0);
    var pad = [0xec, 0x11];
    var pi = 0;
    while (buf.bits.length < maxBits) {
      buf.put(pad[pi % 2], 8);
      pi++;
    }
    var data = [];
    for (i = 0; i < buf.bits.length; i += 8) {
      var b = 0;
      for (var j = 0; j < 8; j++) b = (b << 1) | buf.bits[i + j];
      data.push(b);
    }
    return data;
  }

  function interleave(data, version) {
    var blocks = EC_BLOCKS[version];
    var ecCount = EC_PER_BLOCK[version];
    var dataPer = data.length / blocks;
    var dataBlocks = [];
    var ecBlocks = [];
    for (var i = 0; i < blocks; i++) {
      var slice = data.slice(i * dataPer, (i + 1) * dataPer);
      dataBlocks.push(slice);
      ecBlocks.push(rsEncode(slice, ecCount));
    }
    var out = [];
    for (var d = 0; d < dataPer; d++) {
      for (i = 0; i < blocks; i++) out.push(dataBlocks[i][d]);
    }
    for (var e = 0; e < ecCount; e++) {
      for (i = 0; i < blocks; i++) out.push(ecBlocks[i][e]);
    }
    return out;
  }

  function makeMatrix(size) {
    var m = new Array(size);
    for (var y = 0; y < size; y++) {
      m[y] = new Array(size);
      for (var x = 0; x < size; x++) m[y][x] = null;
    }
    return m;
  }

  function placeFinder(m, x, y) {
    for (var dy = -1; dy <= 7; dy++) {
      for (var dx = -1; dx <= 7; dx++) {
        var xx = x + dx;
        var yy = y + dy;
        if (xx < 0 || yy < 0 || xx >= m.length || yy >= m.length) continue;
        var dark = dx >= 0 && dx <= 6 && dy >= 0 && dy <= 6 &&
          (dx === 0 || dx === 6 || dy === 0 || dy === 6 || (dx >= 2 && dx <= 4 && dy >= 2 && dy <= 4));
        m[yy][xx] = dark;
      }
    }
  }

  function placeTiming(m) {
    for (var i = 8; i < m.length - 8; i++) {
      m[6][i] = i % 2 === 0;
      m[i][6] = i % 2 === 0;
    }
  }

  function placeAlignment(m, version) {
    if (version < 2) return;
    var pos = [6, ALIGN_POS[version]];
    for (var i = 0; i < pos.length; i++) {
      for (var j = 0; j < pos.length; j++) {
        var cx = pos[i];
        var cy = pos[j];
        if (m[cy][cx] !== null) continue;
        for (var dy = -2; dy <= 2; dy++) {
          for (var dx = -2; dx <= 2; dx++) {
            m[cy + dy][cx + dx] = Math.max(Math.abs(dx), Math.abs(dy)) !== 1;
          }
        }
      }
    }
  }

  function placeDarkModule(m, version) {
    m[4 * version + 9][8] = true;
  }

  function reserveFormat(m) {
    var n = m.length;
    for (var i = 0; i < 9; i++) {
      if (m[8][i] === null) m[8][i] = false;
      if (m[i][8] === null) m[i][8] = false;
    }
    for (i = 0; i < 8; i++) {
      if (m[8][n - 1 - i] === null) m[8][n - 1 - i] = false;
      if (m[n - 1 - i][8] === null) m[n - 1 - i][8] = false;
    }
  }

  function maskFn(id, x, y) {
    switch (id) {
      case 0: return (x + y) % 2 === 0;
      case 1: return y % 2 === 0;
      case 2: return x % 3 === 0;
      case 3: return (x + y) % 3 === 0;
      case 4: return (Math.floor(y / 2) + Math.floor(x / 3)) % 2 === 0;
      case 5: return (x * y) % 2 + (x * y) % 3 === 0;
      case 6: return ((x * y) % 2 + (x * y) % 3) % 2 === 0;
      case 7: return ((x + y) % 2 + (x * y) % 3) % 2 === 0;
    }
  }

  function placeData(m, bits, mask) {
    var n = m.length;
    var dir = -1;
    var y = n - 1;
    var i = 0;
    for (var x = n - 1; x > 0; x -= 2) {
      if (x === 6) x--;
      for (;;) {
        for (var dx = 0; dx < 2; dx++) {
          var xx = x - dx;
          if (m[y][xx] === null) {
            var dark = i < bits.length ? bits[i] === 1 : false;
            if (maskFn(mask, xx, y)) dark = !dark;
            m[y][xx] = dark;
            i++;
          }
        }
        y += dir;
        if (y < 0 || y >= n) {
          y -= dir;
          dir = -dir;
          break;
        }
      }
    }
  }

  function formatBits(mask) {
    var data = (0 << 3) | mask;
    var rem = data << 10;
    for (var i = 14; i >= 10; i--) {
      if ((rem >>> i) & 1) rem ^= 0x537 << (i - 10);
    }
    return ((data << 10) | rem) ^ 0x5412;
  }

  function placeFormat(m, mask) {
    var bits = formatBits(mask);
    var n = m.length;
    for (var i = 0; i < 15; i++) {
      var dark = ((bits >> i) & 1) === 1;
      if (i < 6) m[i][8] = dark;
      else if (i < 8) m[i + 1][8] = dark;
      else m[n - 15 + i][8] = dark;
      if (i < 8) m[8][n - 1 - i] = dark;
      else if (i < 9) m[8][15 - i] = dark;
      else m[8][14 - i] = dark;
    }
  }

  function cloneMatrix(m) {
    return m.map(function (row) { return row.slice(); });
  }

  function penalty(m) {
    var n = m.length;
    var score = 0;
    var x, y, run, dark;

    function linePenalty(get) {
      var s = 0;
      for (var a = 0; a < n; a++) {
        run = 1;
        for (var b = 1; b < n; b++) {
          if (get(a, b) === get(a, b - 1)) run++;
          else {
            if (run >= 5) s += 3 + (run - 5);
            run = 1;
          }
        }
        if (run >= 5) s += 3 + (run - 5);
      }
      return s;
    }

    score += linePenalty(function (r, c) { return m[r][c]; });
    score += linePenalty(function (c, r) { return m[r][c]; });

    for (y = 0; y < n - 1; y++) {
      for (x = 0; x < n - 1; x++) {
        if (m[y][x] === m[y][x + 1] && m[y][x] === m[y + 1][x] && m[y][x] === m[y + 1][x + 1]) score += 3;
      }
    }

    function finderPenalty(get) {
      var s = 0;
      for (var a = 0; a < n; a++) {
        var row = [];
        for (var b = 0; b < n; b++) row.push(get(a, b) ? 1 : 0);
        var str = row.join('');
        var patterns = ['10111010000', '00001011101'];
        for (var p = 0; p < patterns.length; p++) {
          var idx = 0;
          while ((idx = str.indexOf(patterns[p], idx)) !== -1) {
            s += 40;
            idx++;
          }
        }
      }
      return s;
    }
    score += finderPenalty(function (r, c) { return m[r][c]; });
    score += finderPenalty(function (c, r) { return m[r][c]; });

    dark = 0;
    for (y = 0; y < n; y++) for (x = 0; x < n; x++) if (m[y][x]) dark++;
    var percent = (dark * 100) / (n * n);
    score += Math.floor(Math.abs(percent - 50) / 5) * 10;
    return score;
  }

  function encodeQR(text) {
    var version = chooseVersion(bytesOf(text).length);
    var data = interleave(buildData(text, version), version);
    var bits = [];
    for (var i = 0; i < data.length; i++) {
      for (var b = 7; b >= 0; b--) bits.push((data[i] >> b) & 1);
    }
    for (i = 0; i < REMAINDER[version]; i++) bits.push(0);

    var size = 17 + 4 * version;
    var best = null;
    var bestScore = Infinity;
    for (var mask = 0; mask < 8; mask++) {
      var m = makeMatrix(size);
      placeFinder(m, 0, 0);
      placeFinder(m, size - 7, 0);
      placeFinder(m, 0, size - 7);
      placeAlignment(m, version);
      placeTiming(m);
      placeDarkModule(m, version);
      reserveFormat(m);
      placeData(m, bits, mask);
      placeFormat(m, mask);
      var score = penalty(m);
      if (score < bestScore) {
        bestScore = score;
        best = m;
      }
    }
    return best;
  }

  function createQRSvg(text, label) {
    var m = encodeQR(text);
    var n = m.length;
    var q = 2;
    var dim = n + q * 2;
    var parts = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + dim + ' ' + dim + '" width="48" height="48" role="img" aria-label="' + label + '">'];
    parts.push('<rect width="' + dim + '" height="' + dim + '" fill="#ffffff"/>');
    for (var y = 0; y < n; y++) {
      for (var x = 0; x < n; x++) {
        if (m[y][x]) parts.push('<rect x="' + (x + q) + '" y="' + (y + q) + '" width="1" height="1" fill="#000000"/>');
      }
    }
    parts.push('</svg>');
    return parts.join('');
  }

  global.createQRSvg = createQRSvg;
})(window);
