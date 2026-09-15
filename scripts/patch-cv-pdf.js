const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const pdfPath = path.join(__dirname, '..', 'assets', 'Agon-Mustafaj-CV.pdf');
const pdf = fs.readFileSync(pdfPath);
const latin = pdf.toString('latin1');

function toHex(str) {
  return Buffer.from(str, 'latin1').toString('hex');
}

const ENDASH = '\u0096';
const oldTitle = '[<4a> 15 <756e696f722053454f209620496e746572> 15 <6e73686970> 0] TJ';
const newTitle = '[<' + toHex('SEO Expert') + '> 0] TJ';

const companyBlock =
  '1 0 0 1 54 585.7945 Tm\n' +
  '/F4 10 Tf\n' +
  '[<4e6f> 10 <76616c61622053454f20> 18 <4167> 10 <656e6379> 55 <2c20507269736874696eeb20284f6e2d7369746529> 0] TJ';

const internTitleHex = toHex('Junior SEO' + ENDASH + ' Intern');
const internDateHex = toHex('July 2026' + ENDASH + ' September 2026');

// Intern sits where company was; company moves down; Member+ shift further
const inserted =
  '1 0 0 1 54 585.7945 Tm\n' +
  '/F2 10.5 Tf\n' +
  '[<' + internTitleHex + '> 0] TJ\n' +
  'ET\n' +
  'Q\n' +
  '/DeviceRGB cs\n' +
  '0.06666666666666667 0.06666666666666667 0.06666666666666667 scn\n' +
  'q\n' +
  '1 0 0 -1 0 841.89 cm\n' +
  'BT\n' +
  '1 0 0 1 422.2 586.136 Tm\n' +
  '/F3 10 Tf\n' +
  '[<' + internDateHex + '> 0] TJ\n' +
  'ET\n' +
  'Q\n' +
  '/DeviceRGB cs\n' +
  '0.26666666666666666 0.26666666666666666 0.26666666666666666 scn\n' +
  'q\n' +
  '1 0 0 -1 0 841.89 cm\n' +
  'BT\n' +
  '1 0 0 1 54 572.7945 Tm\n' +
  '/F4 10 Tf\n' +
  '[<4e6f> 10 <76616c61622053454f20> 18 <4167> 10 <656e6379> 55 <2c20507269736874696eeb20284f6e2d7369746529> 0] TJ';

const SHIFT = 16;
const SHIFT_MAX_Y = 567;
const SHIFT_MIN_Y = 200;

let replaced = 0;
let out = '';
let i = 0;

while (i < latin.length) {
  const streamIdx = latin.indexOf('stream', i);
  if (streamIdx === -1) {
    out += latin.slice(i);
    break;
  }

  const header = latin.slice(i, streamIdx + 6);
  let p = streamIdx + 6;
  const cr = latin[p] === '\r';
  if (cr) p++;
  const lf = latin[p] === '\n';
  if (lf) p++;
  const end = latin.indexOf('endstream', p);
  if (end === -1) {
    out += latin.slice(i);
    break;
  }

  const raw = Buffer.from(latin.slice(p, end), 'latin1');
  let next = header + (cr ? '\r' : '') + (lf ? '\n' : '');

  try {
    let text = zlib.inflateSync(raw).toString('latin1');
    let changed = false;

    if (text.includes(oldTitle)) {
      text = text.split(oldTitle).join(newTitle);
      changed = true;
    }
    if (text.includes(companyBlock) && !text.includes(internTitleHex)) {
      text = text.split(companyBlock).join(inserted);
      changed = true;
    }

    if (changed) {
      text = text.replace(/1 0 0 1 ([\d.]+) ([\d.]+) Tm/g, function (full, x, yStr) {
        const y = parseFloat(yStr);
        if (y <= SHIFT_MAX_Y && y >= SHIFT_MIN_Y) {
          const ny = Math.round((y - SHIFT) * 10000) / 10000;
          return '1 0 0 1 ' + x + ' ' + ny + ' Tm';
        }
        return full;
      });
      replaced += 1;
      const compressed = zlib.deflateSync(Buffer.from(text, 'latin1'), { level: 9 });
      const newHeader = header.replace(/\/Length\s+\d+/, '/Length ' + compressed.length);
      next = newHeader + (cr ? '\r' : '') + (lf ? '\n' : '') + compressed.toString('latin1');
    } else {
      next += raw.toString('latin1');
    }
  } catch (e) {
    next += raw.toString('latin1');
  }

  out += next + latin.slice(end, end + 'endstream'.length);
  i = end + 'endstream'.length;
}

if (!replaced) {
  console.error('Did not patch CV experience block');
  process.exit(1);
}

const rebuilt = rebuildXref(out);
fs.writeFileSync(pdfPath, Buffer.from(rebuilt, 'latin1'));
console.log('Patched', replaced, 'stream(s). Bytes:', rebuilt.length);

function rebuildXref(src) {
  const re = /(\d+) 0 obj/g;
  let m;
  const objs = [];
  while ((m = re.exec(src))) {
    objs.push({ num: parseInt(m[1], 10), offset: m.index });
  }
  const xrefPos = src.indexOf('xref');
  if (xrefPos === -1 || src.lastIndexOf('startxref') === -1) return src;

  const body = src.slice(0, xrefPos);
  const max = Math.max.apply(null, objs.map(function (o) { return o.num; }));
  const table = [];
  for (let n = 1; n <= max; n++) table[n] = null;
  objs.forEach(function (o) { table[o.num] = o.offset; });

  let xref = 'xref\n0 ' + (max + 1) + '\n';
  xref += '0000000000 65535 f \n';
  for (let n = 1; n <= max; n++) {
    const off = table[n];
    if (off == null) xref += '0000000000 65535 f \n';
    else xref += String(off).padStart(10, '0') + ' 00000 n \n';
  }

  const trailerMatch = src.slice(xrefPos).match(/trailer[\s\S]*?startxref/);
  const trailer = trailerMatch ? trailerMatch[0].replace(/startxref/, '') : 'trailer\n<< /Size ' + (max + 1) + ' >>\n';
  return body + xref + trailer + 'startxref\n' + body.length + '\n%%EOF\n';
}
