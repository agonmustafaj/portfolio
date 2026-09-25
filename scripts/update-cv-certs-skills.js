/**
 * Update Agon-Mustafaj-CV.pdf certifications + technical skills.
 * Adds four Semrush certificates and refreshes the skills list.
 */
const fs = require('fs');
const zlib = require('zlib');
const path = require('path');

const pdfPath = path.join(__dirname, '..', 'assets', 'Agon-Mustafaj-CV.pdf');
const pdf = fs.readFileSync(pdfPath);
const latin = pdf.toString('latin1');

const BULLET = '\u0095';
const EMDASH = '\u0097';
const MIDDOT = '\u00b7';
const ENDASH = '\u0096';

function toHex(str) {
  return Buffer.from(str, 'latin1').toString('hex');
}

function tj(str) {
  return '[<' + toHex(str) + '> 0] TJ';
}

function block(color, x, y, font, size, text) {
  return (
    '/DeviceRGB cs\n' +
    color + ' scn\n' +
    'q\n' +
    '1 0 0 -1 0 841.89 cm\n' +
    'BT\n' +
    '1 0 0 1 ' + x + ' ' + y + ' Tm\n' +
    '/' + font + ' ' + size + ' Tf\n' +
    tj(text) + '\n' +
    'ET\n' +
    'Q'
  );
}

const DARK = '0.06666666666666667 0.06666666666666667 0.06666666666666667';
const GRAY = '0.26666666666666666 0.26666666666666666 0.26666666666666666';

const certs = [
  ['AI Search Operating System ' + EMDASH + ' Semrush', 'Issued September 2026'],
  ['On-Page SEO and AI Search Essentials with Semrush', 'Issued September 2026'],
  ['SEO Essentials with Semrush ' + EMDASH + ' Semrush', 'Issued September 2026'],
  ['SEO Toolkit Crash Course ' + EMDASH + ' Semrush', 'Issued September 2026'],
  ['Ahrefs Marketing Platform Certification ' + EMDASH + ' Ahrefs', 'Issued 26 August 2026 ' + MIDDOT + ' Valid until 26 August 2027'],
  ['Search Engine Optimization and Content Marketing ' + EMDASH + ' IBM / Coursera', 'Certificate ID: G1X8E26TPLD1'],
  ['Python for Data Science, AI & Development ' + EMDASH + ' IBM / Coursera', 'Certificate ID: DHJBPUFMXBCR'],
  ['DevOps Prerequisite Course ' + EMDASH + ' KodeKloud / Coursera', 'Certificate ID: CJKIXKGKMLSR'],
  ['Extract, Transform and Load Data in Power BI ' + EMDASH + ' Microsoft / Coursera', 'Certificate ID: P46JI89DQH0G'],
  ['Preparing Data for Analysis with Microsoft Excel ' + EMDASH + ' Microsoft / Coursera', 'Certificate ID: F89YPV04R699'],
  ['Palo Alto Networks Cybersecurity Foundation ' + EMDASH + ' Palo Alto / Coursera', 'Certificate ID: WEKSDPR7Q473'],
  ['CCNA: Networking Basics ' + EMDASH + ' Logical Operations / Coursera', 'Certificate ID: OBAQU4FVUCZO'],
  ['CCNA: Wireless Networking and IP Services ' + EMDASH + ' Logical Operations / Coursera', 'Certificate ID: 77HGFUFSKXUZ'],
  ['Data Analytics and Artificial Intelligence ' + EMDASH + ' KREN & World Bank', 'Certificate of Attendance']
];

const START_Y = 484.5624;
const STEP = 19.8;
let certBlocks = [];
for (let i = 0; i < certs.length; i++) {
  const y = Math.round((START_Y - i * STEP) * 10000) / 10000;
  const y2 = Math.round((y - 10.2) * 10000) / 10000;
  certBlocks.push(block(DARK, 54, y, 'F3', 9.4, BULLET + '  ' + certs[i][0]));
  certBlocks.push(block(GRAY, 66, y2, 'F4', 8.6, certs[i][1]));
}
const newCertSection = certBlocks.join('\n');

const skills = [
  'Search Engine Optimization (SEO) ' + ENDASH + ' On-Page, Off-Page & Technical',
  'Front-End Development (HTML, CSS, JavaScript)',
  'Back-End & Full-Stack Development (Java, C#, ASP.NET, PHP, Laravel)',
  'APIs, MySQL, Relational Databases, Git, OOP',
  'Digital Marketing, Content Strategy & Social Media Marketing',
  'Marketing Analytics, Competitive Analysis & Google Analytics',
  'WordPress & Web Design / UI/UX',
  'Power BI (ETL, Data Modeling, Dashboards)',
  'Python for Data Science & AI, SQL & Excel',
  'CCNA Networking & Cybersecurity Fundamentals',
  'DevOps Principles & Software Development',
  'Project Management, Leadership & Problem Solving'
];

let skillBlocks = [];
const skillStart = 520.5;
const skillStep = 14.2;
for (let i = 0; i < skills.length; i++) {
  const y = Math.round((skillStart - i * skillStep) * 10000) / 10000;
  skillBlocks.push(block(DARK, 54, y, 'F3', 10, BULLET + '  ' + skills[i]));
}
const newSkillsSection = skillBlocks.join('\n');

function replaceBetween(text, startMarker, endMarker, replacement) {
  const start = text.indexOf(startMarker);
  if (start === -1) throw new Error('Start marker not found: ' + startMarker.slice(0, 40));
  const end = text.indexOf(endMarker, start);
  if (end === -1) throw new Error('End marker not found');
  return text.slice(0, start) + replacement + text.slice(end);
}

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
    let changed = false;

    // Page 1: replace from first Ahrefs cert entry through last Attendance entry (before page number)
    if (text.includes('Ahrefs Marketing') || text.includes('416872656673204d61726b')) {
      const startNeedle = '1 0 0 1 54 484.5624 Tm';
      const endNeedle = '1 0 0 1 295.39 25.853 Tm';
      if (text.includes(startNeedle) && text.includes(endNeedle)) {
        // Back up to the color/setup before the Tm for the first cert
        const tmIdx = text.indexOf(startNeedle);
        let blockStart = text.lastIndexOf('/DeviceRGB cs', tmIdx);
        text = text.slice(0, blockStart) + newCertSection + '\n' + text.slice(text.indexOf(endNeedle));
        changed = true;
      }
    }

    // Page 2: replace Technical Skills bullets through Professional Skills header
    if (text.includes('Technical Skills') || text.includes('546563686e6963616c20536b696c6c73') || text.includes('5465')) {
      // Find first technical skill bullet after Skills section
      const techTitleHex = '5465'; // start of Technical
      // Use decoded approach: find Tm for first skill bullet currently at known pattern
      const firstSkill = text.indexOf('[<95202053656172636820456e67696e65204f7074696d697a6174696f6e');
      const altFirst = text.indexOf('Search Engine Optimization');
      const skillHexStart = firstSkill !== -1
        ? text.lastIndexOf('/DeviceRGB cs', firstSkill)
        : -1;

      // Professional Skills header hex: "Professional Skills" -> look for Pr ofessional
      const profIdx = text.indexOf('[<5072>');
      // More reliable: find "Professional Skills" hex pieces
      let profBlock = -1;
      const re = /1 0 0 1 54 ([\d.]+) Tm\n\/F2 13 Tf\n\[<5072>/g;
      let m;
      while ((m = re.exec(text))) {
        profBlock = text.lastIndexOf('/DeviceRGB cs', m.index);
      }

      if (skillHexStart !== -1 && profBlock !== -1 && skillHexStart < profBlock) {
        text = text.slice(0, skillHexStart) + newSkillsSection + '\n' + text.slice(profBlock);
        changed = true;
      }
    }

    if (changed) {
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

if (patched < 1) {
  console.error('Did not patch any CV streams');
  process.exit(1);
}

const rebuilt = rebuildXref(out);
fs.writeFileSync(pdfPath, Buffer.from(rebuilt, 'latin1'));
console.log('Patched', patched, 'stream(s). Bytes:', rebuilt.length);

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
