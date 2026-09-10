const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const pdfPath = path.join(__dirname, '..', 'assets', 'Agon-Mustafaj-CV.pdf');
const latin = fs.readFileSync(pdfPath).toString('latin1');

const oldTm = '1 0 0 1 461.01 566.7945 Tm';
const newTm = '1 0 0 1 438.78 566.7945 Tm';

let replaced = 0;
let out = '';
let i = 0;

while (i < latin.length) {
  const streamIdx = latin.indexOf('stream', i);
  if (streamIdx === -1) { out += latin.slice(i); break; }

  const header = latin.slice(i, streamIdx + 6);
  let p = streamIdx + 6;
  const cr = latin[p] === '\r'; if (cr) p++;
  const lf = latin[p] === '\n'; if (lf) p++;
  const end = latin.indexOf('endstream', p);
  if (end === -1) { out += latin.slice(i); break; }

  const raw = Buffer.from(latin.slice(p, end), 'latin1');
  let next = header + (cr ? '\r' : '') + (lf ? '\n' : '');

  try {
    let text = zlib.inflateSync(raw).toString('latin1');
    if (text.includes(oldTm)) {
      text = text.split(oldTm).join(newTm);
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

  out += next + 'endstream';
  i = end + 'endstream'.length;
}

if (!replaced) {
  console.error('Tm line not found');
  process.exit(1);
}

// Rebuild xref offsets
const xrefPos = out.indexOf('xref');
const body = out.slice(0, xrefPos);
const objs = [];
const re = /(\d+) 0 obj/g;
let m;
while ((m = re.exec(body))) objs.push({ num: parseInt(m[1], 10), offset: m.index });
const max = Math.max.apply(null, objs.map(o => o.num));
const table = [];
objs.forEach(o => { table[o.num] = o.offset; });

let xref = 'xref\n0 ' + (max + 1) + '\n0000000000 65535 f \n';
for (let n = 1; n <= max; n++) {
  const off = table[n];
  xref += off == null ? '0000000000 65535 f \n' : String(off).padStart(10, '0') + ' 00000 n \n';
}
const trailerMatch = out.slice(xrefPos).match(/trailer[\s\S]*?startxref/);
const trailer = trailerMatch ? trailerMatch[0].replace(/startxref\s*$/, '') : 'trailer\n<< /Size ' + (max + 1) + ' >>\n';
const rebuilt = body + xref + trailer + 'startxref\n' + body.length + '\n%%EOF\n';

fs.writeFileSync(pdfPath, Buffer.from(rebuilt, 'latin1'));
console.log('Shifted', replaced, 'stream(s). Bytes:', rebuilt.length);
