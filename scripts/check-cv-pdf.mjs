// Self-check: the CV PDF must contain real, extractable text (ATS-readable), not images.
// Run: npm run check:cv
import { inflateSync } from 'node:zlib';
import { writeFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { buildCvPdf } from '../src/utils/cvPdf.js';
import { profile, experience, certificates } from '../src/data/portfolioData.js';

const pdf = buildCvPdf();
const captured = { bytes: Buffer.from(pdf.output('arraybuffer')), pages: pdf.getNumberOfPages() };

// Pull text drawn with Tj operators out of every (compressed) content stream.
const raw = captured.bytes.toString('latin1');
let text = '';
for (const m of raw.matchAll(/stream\r?\n([\s\S]*?)\r?\nendstream/g)) {
  let body;
  try {
    body = inflateSync(Buffer.from(m[1], 'latin1')).toString('latin1');
  } catch {
    body = m[1];
  }
  for (const t of body.matchAll(/\(((?:\\.|[^\\)])*)\)\s*Tj/g)) text += t[1].replace(/\\(.)/g, '$1') + '\n';
}

assert.ok(!/\/Subtype\s*\/Image/.test(raw), 'PDF must not embed images');
assert.ok(captured.pages >= 1 && captured.pages <= 3, `unexpected page count ${captured.pages}`);
const flat = text.replace(/\n/g, ' ');
for (const needle of [profile.name, profile.email, 'PENGALAMAN KERJA', 'SERTIFIKASI', experience.at(-1).company.split(' ')[0], certificates[0].credentialId]) {
  assert.ok(flat.includes(needle), `missing text in PDF: ${needle}`);
}
if (process.argv[2]) writeFileSync(process.argv[2], captured.bytes);
console.log(`OK: ${captured.pages} halaman, ${captured.bytes.length} byte, ${text.length} karakter teks`);
