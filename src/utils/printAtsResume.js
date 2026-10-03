import { personalInfo, experienceData, educationData, executiveResume } from '../data/portfolioData';

/**
 * Generates clean, strictly formatted, industry-standard ATS CV HTML.
 * Engineered for exact 2-page A4 dimensions with zero overflow, zero emojis,
 * and zero browser print headers/footers (via @page margin: 0).
 */
export function generateAtsHtml() {
  return `<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <title>CV_${personalInfo.name.replace(/\s+/g, '_')}_ATS</title>
  <style>
    @page {
      size: A4 portrait;
      margin: 0 !important;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    html, body {
      width: 210mm;
      margin: 0 !important;
      padding: 0 !important;
      background: #ffffff !important;
      color: #0f172a !important;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 8.8pt;
      line-height: 1.35;
    }

    /* Strict A4 Page Container */
    .cv-page {
      width: 210mm;
      height: 297mm;
      max-height: 297mm;
      padding: 15mm 16mm 12mm 16mm;
      margin: 0 auto;
      box-sizing: border-box;
      background: #ffffff;
      page-break-after: always;
      break-after: page;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      overflow: hidden;
    }

    .cv-page:last-child {
      page-break-after: avoid;
      break-after: avoid;
    }

    /* Minimalist Header */
    .header {
      text-align: center;
      padding-bottom: 7px;
      border-bottom: 1.5px solid #0f172a;
      margin-bottom: 9px;
    }

    .name {
      font-size: 19pt;
      font-weight: 800;
      letter-spacing: -0.4px;
      color: #0f172a;
      text-transform: uppercase;
      line-height: 1.1;
    }

    .role {
      font-size: 9.5pt;
      font-weight: 600;
      color: #1d4ed8;
      margin-top: 3px;
      margin-bottom: 5px;
      letter-spacing: 0.2px;
    }

    .contact-row {
      font-size: 8pt;
      color: #475569;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 6px;
    }

    .contact-row span {
      display: inline-block;
    }

    .contact-row a {
      color: #475569;
      text-decoration: none;
    }

    .sep {
      color: #94a3b8;
      font-size: 7.5pt;
    }

    /* Section Styles */
    .section {
      margin-bottom: 8.5px;
    }

    .section-title {
      font-size: 9pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #0f172a;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 2px;
      margin-bottom: 5px;
    }

    /* Summary */
    .summary-text {
      font-size: 8.2pt;
      color: #334155;
      line-height: 1.4;
      text-align: justify;
    }

    /* Skills Table */
    .skills-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 8.2pt;
    }

    .skills-table td {
      padding: 2px 0;
      vertical-align: top;
    }

    .skill-cat {
      width: 28%;
      font-weight: 700;
      color: #0f172a;
    }

    .skill-val {
      width: 72%;
      color: #334155;
      line-height: 1.35;
    }

    /* Experience Items */
    .job {
      margin-bottom: 7px;
    }

    .job:last-child {
      margin-bottom: 0;
    }

    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 1px;
    }

    .job-title-group {
      display: flex;
      align-items: baseline;
      gap: 5px;
    }

    .job-role {
      font-size: 9pt;
      font-weight: 700;
      color: #0f172a;
    }

    .job-company {
      font-size: 8.5pt;
      font-weight: 600;
      color: #1d4ed8;
    }

    .job-period {
      font-size: 7.8pt;
      font-weight: 600;
      color: #475569;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }

    .job-scope {
      font-size: 7.8pt;
      color: #64748b;
      margin-bottom: 2px;
    }

    .job-bullets {
      margin-left: 13px;
      margin-top: 1.5px;
    }

    .job-bullets li {
      font-size: 8.1pt;
      color: #334155;
      margin-bottom: 1.5px;
      line-height: 1.32;
    }

    .job-tags {
      font-size: 7.5pt;
      color: #64748b;
      margin-top: 1.5px;
      margin-left: 13px;
    }

    /* Education */
    .edu-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 1px;
    }

    .edu-degree {
      font-size: 8.8pt;
      font-weight: 700;
      color: #0f172a;
    }

    .edu-school {
      font-size: 8.4pt;
      color: #1d4ed8;
      font-weight: 600;
    }

    .edu-period {
      font-size: 7.8pt;
      color: #475569;
      font-family: ui-monospace, SFMono-Regular, monospace;
    }

    .edu-note {
      font-size: 7.8pt;
      color: #64748b;
      margin-top: 1px;
    }
  </style>
</head>
<body>
  <!-- ==================== HALAMAN 1 (A4) ==================== -->
  <div class="cv-page">
    <!-- Header -->
    <header class="header">
      <h1 class="name">${personalInfo.name}</h1>
      <p class="role">${personalInfo.headline}</p>
      <div class="contact-row">
        <span>${personalInfo.location}</span>
        <span class="sep">•</span>
        <span>${personalInfo.phoneFormatted}</span>
        <span class="sep">•</span>
        <span>${personalInfo.email}</span>
        <span class="sep">•</span>
        <span><a href="${personalInfo.linkedin}">linkedin.com/in/hbibinrhmn</a></span>
      </div>
    </header>

    <!-- Ringkasan Eksekutif -->
    <section class="section">
      <h2 class="section-title">Ringkasan Eksekutif / Professional Summary</h2>
      <p class="summary-text">${executiveResume.summary}</p>
    </section>

    <!-- Kompetensi Inti -->
    <section class="section">
      <h2 class="section-title">Kompetensi Kunci & Matriks Keahlian</h2>
      <table class="skills-table">
        <tbody>
          <tr>
            <td class="skill-cat">Web Development & IT:</td>
            <td class="skill-val">React, Tailwind CSS, Vite, Laravel 11, cPanel / Shared Hosting, Vercel, AntiGravity/Cursor</td>
          </tr>
          <tr>
            <td class="skill-cat">Performance Marketing:</td>
            <td class="skill-val">Meta Ads (Traffic & WhatsApp Conversion), GA4, Google Tag Manager (GTM), Google Search Console (GSC)</td>
          </tr>
          <tr>
            <td class="skill-cat">Sales & Closing Funnel:</td>
            <td class="skill-val">High-Ticket Sales Closing via WhatsApp, Direct B2C Canvassing, Kualifikasi Prospek, Negosiasi Konsultatif</td>
          </tr>
          <tr>
            <td class="skill-cat">Operasional & Media:</td>
            <td class="skill-val">Penyusunan SOP Kasir & Inventaris Gudang, Supervisi Lapangan (3.000 m²), Produksi Video Iklan (CapCut)</td>
          </tr>
        </tbody>
      </table>
    </section>

    <!-- Riwayat Pengalaman Kerja (Posisi 1 & 2) -->
    <section class="section" style="margin-bottom: 0;">
      <h2 class="section-title">Pengalaman Kerja Profesional (Track Record Kronologis)</h2>

      <!-- Posisi 1: Halfa Barokah -->
      <article class="job">
        <div class="job-header">
          <div class="job-title-group">
            <span class="job-role">${experienceData[0].role}</span>
            <span class="sep">•</span>
            <span class="job-company">${experienceData[0].company}</span>
          </div>
          <span class="job-period">${experienceData[0].period}</span>
        </div>
        <div class="job-scope">${experienceData[0].location} | ${experienceData[0].type}</div>
        <ul class="job-bullets">
          ${experienceData[0].highlights.map((h) => `<li>${h}</li>`).join('')}
        </ul>
        <div class="job-tags">Keahlian: ${experienceData[0].tags.join(', ')}</div>
      </article>

      <!-- Posisi 2: KS Motor -->
      <article class="job" style="margin-top: 7px;">
        <div class="job-header">
          <div class="job-title-group">
            <span class="job-role">${experienceData[1].role}</span>
            <span class="sep">•</span>
            <span class="job-company">${experienceData[1].company}</span>
          </div>
          <span class="job-period">${experienceData[1].period}</span>
        </div>
        <div class="job-scope">${experienceData[1].location} | ${experienceData[1].type}</div>
        <ul class="job-bullets">
          ${experienceData[1].highlights.map((h) => `<li>${h}</li>`).join('')}
        </ul>
        <div class="job-tags">Keahlian: ${experienceData[1].tags.join(', ')}</div>
      </article>
    </section>
  </div>

  <!-- ==================== HALAMAN 2 (A4) ==================== -->
  <div class="cv-page">
    <section class="section">
      <h2 class="section-title">Pengalaman Kerja Profesional (Lanjutan)</h2>

      <!-- Posisi 3: Proyek Mako TNI -->
      <article class="job">
        <div class="job-header">
          <div class="job-title-group">
            <span class="job-role">${experienceData[2].role}</span>
            <span class="sep">•</span>
            <span class="job-company">${experienceData[2].company}</span>
          </div>
          <span class="job-period">${experienceData[2].period}</span>
        </div>
        <div class="job-scope">${experienceData[2].location} | ${experienceData[2].type}</div>
        <ul class="job-bullets">
          ${experienceData[2].highlights.map((h) => `<li>${h}</li>`).join('')}
        </ul>
        <div class="job-tags">Keahlian: ${experienceData[2].tags.join(', ')}</div>
      </article>

      <!-- Posisi 4: PT Santri Niaga -->
      <article class="job" style="margin-top: 7px;">
        <div class="job-header">
          <div class="job-title-group">
            <span class="job-role">${experienceData[3].role}</span>
            <span class="sep">•</span>
            <span class="job-company">${experienceData[3].company}</span>
          </div>
          <span class="job-period">${experienceData[3].period}</span>
        </div>
        <div class="job-scope">${experienceData[3].location} | ${experienceData[3].type}</div>
        <ul class="job-bullets">
          ${experienceData[3].highlights.map((h) => `<li>${h}</li>`).join('')}
        </ul>
        <div class="job-tags">Keahlian: ${experienceData[3].tags.join(', ')}</div>
      </article>

      <!-- Posisi 5: Taskindo Motor -->
      <article class="job" style="margin-top: 7px;">
        <div class="job-header">
          <div class="job-title-group">
            <span class="job-role">${experienceData[4].role}</span>
            <span class="sep">•</span>
            <span class="job-company">${experienceData[4].company}</span>
          </div>
          <span class="job-period">${experienceData[4].period}</span>
        </div>
        <div class="job-scope">${experienceData[4].location} | ${experienceData[4].type}</div>
        <ul class="job-bullets">
          ${experienceData[4].highlights.map((h) => `<li>${h}</li>`).join('')}
        </ul>
        <div class="job-tags">Keahlian: ${experienceData[4].tags.join(', ')}</div>
      </article>

      <!-- Posisi 6: IndiHome PT Ainiyah / Infomedia -->
      <article class="job" style="margin-top: 7px;">
        <div class="job-header">
          <div class="job-title-group">
            <span class="job-role">${experienceData[5].role}</span>
            <span class="sep">•</span>
            <span class="job-company">${experienceData[5].company}</span>
          </div>
          <span class="job-period">${experienceData[5].period}</span>
        </div>
        <div class="job-scope">${experienceData[5].location} | ${experienceData[5].type}</div>
        <ul class="job-bullets">
          ${experienceData[5].highlights.map((h) => `<li>${h}</li>`).join('')}
        </ul>
        <div class="job-tags">Keahlian: ${experienceData[5].tags.join(', ')}</div>
      </article>
    </section>

    <!-- Riwayat Pendidikan -->
    <section class="section" style="margin-top: 6px;">
      <h2 class="section-title">Riwayat Pendidikan</h2>
      <div class="edu-row">
        <div>
          <span class="edu-degree">${educationData[0].degree}</span>
          <span class="sep">•</span>
          <span class="edu-school">${educationData[0].institution}</span>
        </div>
        <span class="edu-period">${educationData[0].period} (${educationData[0].status})</span>
      </div>
      <p class="edu-note">${educationData[0].highlights[0]}</p>
    </section>
  </div>
</body>
</html>`;
}

/**
 * Triggers pure, isolated A4 PDF printing using a hidden iframe.
 * Uses @page margin: 0 to suppress Chrome/Edge automatic URL headers and footers.
 */
export function printAtsResume() {
  const iframeId = 'ats-print-isolated-frame';
  let iframe = document.getElementById(iframeId);

  if (iframe) {
    iframe.remove();
  }

  iframe = document.createElement('iframe');
  iframe.id = iframeId;
  iframe.setAttribute('style', 'position:fixed;right:0;bottom:0;width:0;height:0;border:none;z-index:-999;');
  document.body.appendChild(iframe);

  const doc = iframe.contentWindow.document;
  doc.open();
  doc.write(generateAtsHtml());
  doc.close();

  // Give brief moment for rendering, then trigger print dialog
  setTimeout(() => {
    try {
      iframe.contentWindow.focus();
      iframe.contentWindow.print();
    } catch (err) {
      console.error('Print iframe error:', err);
      const newTab = window.open('', '_blank');
      if (newTab) {
        newTab.document.write(generateAtsHtml());
        newTab.document.close();
        newTab.focus();
        setTimeout(() => newTab.print(), 350);
      }
    }
  }, 250);
}
