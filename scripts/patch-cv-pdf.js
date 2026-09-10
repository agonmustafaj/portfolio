const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const pdfPath = path.join(__dirname, '..', 'assets', 'Agon-Mustafaj-CV.pdf');
const pdf = fs.readFileSync(pdfPath);
const latin = pdf.toString('latin1');

const oldHex = '4d6179203230323620962050726573656e74'; // May 2026 – Present
const newHex = '4d617920323032362096203233204a756c792032303236'; // May 2026 – 23 July 2026

let replaced = 0;
let out = '';
let i = 0;

while (i < latin.length) {
  const streamIdx = latin.indexOf('stream', i);
  if (streamIdx === -1) {
    out += latin.slice(i);
    break;
  }

  const dictStart = latin.lastIndexOf('<<', streamIdx);
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
    const inflated = zlib.inflateSync(raw);
    let text = inflated.toString('latin1');
    if (text.includes(oldHex)) {
      text = text.split(oldHex).join(newHex);
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
  console.error('Did not find May 2026 – Present in PDF streams');
  process.exit(1);
}

// Rebuild xref for a simple PDF
const rebuilt = rebuildXref(out);
fs.writeFileSync(pdfPath, Buffer.from(rebuilt, 'latin1'));
console.log('Patched', replaced, 'stream(s). Bytes:', rebuilt.length);

function rebuildXref(src) {
  const offsets = [0];
  const re = /(\d+) 0 obj/g;
  let m;
  const objs = [];
  while ((m = re.exec(src))) {
    objs.push({ num: parseInt(m[1], 10), offset: m.index });
  }
  const xrefPos = src.indexOf('xref');
  const startxref = src.lastIndexOf('startxref');
  if (xrefPos === -1 || startxref === -1) return src;

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
  let trailer = trailerMatch ? trailerMatch[0].replace(/startxref/, '') : 'trailer\n<< /Size ' + (max + 1) + ' >>\n';
  const newPdf = body + xref + trailer + 'startxref\n' + body.length + '\n%%EOF\n';
  return newPdf;
}
