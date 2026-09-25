/**
 * Update technical skills list on page 2 of Agon-Mustafaj-CV.pdf
 */
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const pdfPath = path.join(__dirname, '..', 'assets', 'Agon-Mustafaj-CV.pdf');
const pdf = fs.readFileSync(pdfPath);
const latin = pdf.toString('latin1');

const BULLET = '\u0095';
const ENDASH = '\u0096';

function toHex(str) {
  return Buffer.from(str, 'latin1').toString('hex');
}

function block(x, y, text) {
  return (
    '/DeviceRGB cs\n' +
    '0.06666666666666667 0.06666666666666667 0.06666666666666667 scn\n' +
    'q\n' +
    '1 0 0 -1 0 841.89 cm\n' +
    'BT\n' +
    '1 0 0 1 ' + x + ' ' + y + ' Tm\n' +
    '/F3 9.5 Tf\n' +
    '[<' + toHex(BULLET + '  ' + text) + '> 0] TJ\n' +
    'ET\n' +
    'Q'
  );
}

// Left column technical skills
const left = [
  'Search Engine Optimization (SEO)',
  'Technical, On-Page & Off-Page SEO',
  'Front-End Development (HTML/CSS/JS)',
  'Back-End & Full-Stack Development',
  'Java, C#, ASP.NET Core, PHP, Laravel',
  'APIs, MySQL, Git & OOP',
  'Digital Marketing & Content Strategy',
  'Marketing Analytics & Competitive Analysis'
];

// Right column technical skills (above Professional Skills at y=480.7675)
const right = [
  'WordPress, Web Design & UI/UX',
  'Google Analytics & Social Media Marketing',
  'Power BI, SQL, Excel & Python',
  'CCNA Networking & Cybersecurity',
  'DevOps Principles & Software Development',
  'Angular, Bootstrap & Responsive Design'
];

const leftStart = 559.9625;
const rightStart = 561.909;
const step = 13.5;

const parts = [];
left.forEach(function (s, i) {
  const y = Math.round((leftStart - i * step) * 10000) / 10000;
  parts.push(block(54, y, s));
});
right.forEach(function (s, i) {
  const y = Math.round((rightStart - i * step) * 10000) / 10000;
  parts.push(block(309.64, y, s));
});
const replacement = parts.join('\n');

let out = '';
let i = 0;
let patched = 0;

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
    const startNeedle = '1 0 0 1 54 559.9625 Tm';
    const endNeedle = '1 0 0 1 309.64 480.7675 Tm';
    if (text.includes(startNeedle) && text.includes(endNeedle)) {
      const tmIdx = text.indexOf(startNeedle);
      const blockStart = text.lastIndexOf('/DeviceRGB cs', tmIdx);
      const endIdx = text.indexOf(endNeedle);
      const endBlock = text.lastIndexOf('/DeviceRGB cs', endIdx);
      text = text.slice(0, blockStart) + replacement + '\n' + text.slice(endBlock);
      patched += 1;
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

if (!patched) {
  console.error('Did not patch skills stream');
  process.exit(1);
}

const rebuilt = rebuildXref(out);
fs.writeFileSync(pdfPath, Buffer.from(rebuilt, 'latin1'));
console.log('Patched skills. Bytes:', rebuilt.length);

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
