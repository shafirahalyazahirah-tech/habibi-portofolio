import { jsPDF } from 'jspdf';
import { profile, experience, projects, skills, education, certificates } from '../data/portfolioData.js';

// A4 CV written as real text (single column, standard headings, built-in Helvetica)
// so ATS parsers and recruiters can select, search, and copy every line.
const M = 16; // page margin, mm
const W = 210 - M * 2;
const TOP = 16;
const BOTTOM = 297 - 14;
const INK = [20, 33, 61];
const MUTED = [75, 85, 99];

const stripUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

export function buildCvPdf() {
  const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
  pdf.setProperties({ title: `CV ${profile.name}`, author: profile.name, subject: profile.headline });
  let y = TOP;

  const ensure = (h) => {
    if (y + h > BOTTOM) {
      pdf.addPage();
      y = TOP;
    }
  };
  const setType = (size, style, color) => {
    pdf.setFont('helvetica', style);
    pdf.setFontSize(size);
    pdf.setTextColor(...color);
  };
  const lineHeight = (size) => size * 0.43;
  const write = (text, { size = 9.5, style = 'normal', color = INK, after = 0.8 } = {}) => {
    setType(size, style, color);
    for (const line of pdf.splitTextToSize(text, W)) {
      ensure(lineHeight(size));
      pdf.text(line, M, y);
      y += lineHeight(size);
    }
    y += after;
  };
  const bullet = (text) => {
    setType(9.5, 'normal', INK);
    const lines = pdf.splitTextToSize(text, W - 4);
    lines.forEach((line, i) => {
      ensure(lineHeight(9.5));
      if (i === 0) pdf.text('-', M + 0.5, y);
      pdf.text(line, M + 4, y);
      y += lineHeight(9.5);
    });
    y += 0.6;
  };
  const heading = (title) => {
    ensure(16); // keep a heading with at least its first entry
    y += 3;
    setType(11, 'bold', INK);
    pdf.text(title, M, y);
    y += 1.6;
    pdf.setDrawColor(...INK);
    pdf.setLineWidth(0.25);
    pdf.line(M, y, M + W, y);
    y += 4.6;
  };
  // Title, then its date/meta on its own line: parsers read them as separate fields
  // instead of gluing a right-aligned date onto the title.
  const entry = (title, meta) => {
    ensure(12);
    write(title, { size: 10, style: 'bold', after: 0.3 });
    write(meta, { size: 9, color: MUTED, after: 0.8 });
  };

  // Header
  write(profile.name, { size: 20, style: 'bold', after: 1.6 });
  write(`${profile.headline} | ${profile.role}`, { size: 11, color: MUTED, after: 1.2 });
  write([profile.location, profile.phoneDisplay, profile.email].join(' | '), { size: 9, color: MUTED, after: 0.4 });
  write([stripUrl(profile.linkedin), stripUrl(profile.site)].join(' | '), { size: 9, color: MUTED, after: 0 });

  heading('RINGKASAN');
  write(
    `${profile.headline} di Tasikmalaya dengan pengalaman kerja sejak 2020 di bidang penjualan, operasional, pemasaran digital, dan pengembangan web. ` +
      'Membangun website katalog, aplikasi kasir, dan sistem keuangan yang dipakai usaha lokal setiap hari, serta menjalankan Meta Ads yang menaikkan penjualan ' +
      '(omzet toko batu alam naik sekitar 150%; penjualan mobil bekas digital dari 5 menjadi 13 unit per bulan). Lulusan A.Md.Kom. Manajemen Informatika, Politeknik LP3I.'
  );

  heading('PENGALAMAN KERJA');
  experience.forEach((job) => {
    entry(`${job.role}, ${job.company}`, `${job.period} | ${job.location}`);
    job.points.forEach(bullet);
    y += 1.6;
  });

  heading('PROYEK PILIHAN');
  projects.forEach((p) => {
    const where = p.link ? ` | ${p.link.label}` : '';
    entry(`${p.title} (${p.client})`, `${p.year} | ${p.stack.join(', ')}${where}`);
    write(p.result ? `${p.summary} ${p.result}` : p.summary, { after: 2 });
  });

  heading('SKILL');
  skills.forEach((s) => write(`${s.group}: ${s.items.join(', ')}`, { after: 1 }));

  heading('PENDIDIKAN');
  entry(`${education.degree}, ${education.school}`, education.period);
  education.points.forEach(bullet);

  heading('SERTIFIKASI');
  certificates
    .filter((c) => c.kind === 'cert')
    .forEach((c) => {
      const dates = c.expires ? `${c.issued} - ${c.expires}` : c.issued;
      entry(`${c.name}, ${c.issuer}`, `${dates} | ID kredensial: ${c.credentialId}`);
    });

  return pdf;
}

export function downloadCvPdf() {
  buildCvPdf().save(`CV_${profile.name.replace(/\s+/g, '_')}.pdf`);
}
