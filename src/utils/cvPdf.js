import { jsPDF } from 'jspdf';
import { profile, experience, projects, skills, education, certificates } from '../data/portfolioData.js';

// A4 CV written as real text (single column, standard headings, built-in Helvetica)
// so ATS parsers and recruiters can select, search, and copy every line.
const M = 15; // page margin, mm
const W = 210 - M * 2;
const TOP = 14;
const BOTTOM = 297 - 12;
const INK = [20, 33, 61];
const MUTED = [75, 85, 99];

const stripUrl = (url) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '');

export function buildCvPdf() {
  const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
  const pdfRoleLabel = profile.jobTitle || profile.headline;
  pdf.setProperties({ title: `CV ${profile.name}`, author: profile.name, subject: pdfRoleLabel });
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
  const lineHeight = (size) => size * 0.41;
  const write = (text, { size = 9.5, style = 'normal', color = INK, after = 0.7 } = {}) => {
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
    y += 0.5;
  };
  const heading = (title) => {
    ensure(15); // keep a heading with at least its first entry
    y += 2.2;
    setType(11, 'bold', INK);
    pdf.text(title, M, y);
    y += 1.5;
    pdf.setDrawColor(...INK);
    pdf.setLineWidth(0.25);
    pdf.line(M, y, M + W, y);
    y += 4.2;
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
  write(`${pdfRoleLabel} | ${profile.role}`, { size: 11, color: MUTED, after: 1.2 });
  write([profile.location, profile.phoneDisplay, profile.email].join(' | '), { size: 9, color: MUTED, after: 0.4 });
  write([stripUrl(profile.linkedin), stripUrl(profile.site)].join(' | '), { size: 9, color: MUTED, after: 0 });

  heading('RINGKASAN');
  write(
    `${pdfRoleLabel} di Tasikmalaya dengan pengalaman kerja sejak 2020 di bidang penjualan, operasional showroom, pengawasan proyek, pemasaran digital, dan pengembangan web. ` +
      'Membangun website katalog, aplikasi kasir, dan sistem pencatatan keuangan untuk usaha lokal, serta menjalankan kampanye Meta Ads yang mengarahkan calon pembeli ke WhatsApp. ' +
      'Lulusan A.Md.Kom. Manajemen Informatika, Politeknik LP3I.'
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
    write(p.result ? `${p.summary} ${p.result}` : p.summary, { after: 1.5 });
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
      const dates = c.expired
        ? `Masa berlaku: ${c.issued} - ${c.expires} (berakhir; jadwal perpanjangan)`
        : c.expires
          ? `${c.issued} - ${c.expires}`
          : c.issued;
      entry(`${c.name}, ${c.issuer}`, `${dates} | ID kredensial: ${c.credentialId}`);
    });

  return pdf;
}

export function downloadCvPdf() {
  buildCvPdf().save(`CV_${profile.name.replace(/\s+/g, '_')}.pdf`);
}
