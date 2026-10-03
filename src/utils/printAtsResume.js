import { personalInfo, experienceData, educationData, executiveResume } from '../data/portfolioData';

/**
 * Generates clean, strictly formatted, industry-standard ATS CV HTML.
 * Designed to fit standard A4 paper (2 pages) with zero overflow and zero web clutter.
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
      margin: 12mm 15mm 12mm 15mm;
    }
    
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      color: #0f172a;
      background: #ffffff;
      font-size: 9pt;
      line-height: 1.38;
      width: 100%;
    }

    .cv-wrapper {
      width: 100%;
      margin: 0 auto;
    }

    /* Header */
    .header {
      text-align: center;
      padding-bottom: 8px;
      border-bottom: 2px solid #0f172a;
      margin-bottom: 10px;
    }

    .name {
      font-size: 20pt;
      font-weight: 800;
      letter-spacing: -0.5px;
      color: #0f172a;
      text-transform: uppercase;
      line-height: 1.1;
    }

    .role {
      font-size: 10pt;
      font-weight: 600;
      color: #2563eb;
      margin-top: 4px;
      margin-bottom: 6px;
    }

    .contact-row {
      font-size: 8.5pt;
      color: #475569;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 12px;
    }

    .contact-row span {
      display: inline-flex;
      align-items: center;
    }

    .contact-row a {
      color: #475569;
      text-decoration: none;
    }

    /* Section Styles */
    .section {
      margin-bottom: 10px;
    }

    .section-title {
      font-size: 9.5pt;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.8px;
      color: #0f172a;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 2px;
      margin-bottom: 6px;
    }

    /* Summary */
    .summary-text {
      font-size: 8.5pt;
      color: #334155;
      line-height: 1.45;
      text-align: justify;
    }

    /* Core Competencies Grid */
    .skills-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 8.5pt;
    }

    .skills-table td {
      padding: 2.5px 0;
      vertical-align: top;
    }

    .skill-cat {
      width: 32%;
      font-weight: 700;
      color: #0f172a;
    }

    .skill-val {
      width: 68%;
      color: #334155;
    }

    /* Experience Items */
    .job {
      margin-bottom: 8px;
      page-break-inside: avoid;
      break-inside: avoid;
    }

    .job-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 1.5px;
    }

    .job-title-group {
      display: flex;
      align-items: baseline;
      gap: 6px;
    }

    .job-role {
      font-size: 9.5pt;
      font-weight: 700;
      color: #0f172a;
    }

    .job-company {
      font-size: 9pt;
      font-weight: 600;
      color: #2563eb;
    }

    .job-period {
      font-size: 8pt;
      font-weight: 600;
      color: #475569;
      font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
    }

    .job-scope {
      font-size: 8pt;
      color: #64748b;
      font-style: italic;
      margin-bottom: 2px;
    }

    .job-bullets {
      margin-left: 14px;
      margin-top: 2px;
    }

    .job-bullets li {
      font-size: 8.5pt;
      color: #334155;
      margin-bottom: 2px;
      line-height: 1.35;
    }

    .job-tags {
      font-size: 7.5pt;
      color: #64748b;
      margin-top: 2px;
      margin-left: 14px;
    }

    /* Page break helper */
    .page-break-before {
      page-break-before: always;
      break-before: page;
    }

    /* Education */
    .edu-row {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 2px;
    }

    .edu-degree {
      font-size: 9pt;
      font-weight: 700;
      color: #0f172a;
    }

    .edu-school {
      font-size: 8.5pt;
      color: #2563eb;
      font-weight: 600;
    }

    .edu-period {
      font-size: 8pt;
      color: #475569;
      font-family: ui-monospace, SFMono-Regular, monospace;
    }

    .edu-note {
      font-size: 8pt;
      color: #64748b;
      margin-top: 1px;
    }
  </style>
</head>
<body>
  <div class="cv-wrapper">
    <!-- Header -->
    <header class="header">
      <h1 class="name">${personalInfo.name}</h1>
      <p class="role">${personalInfo.headline}</p>
      <div class="contact-row">
        <span>📍 ${personalInfo.location}</span>
        <span>📞 ${personalInfo.phoneFormatted}</span>
        <span>✉️ ${personalInfo.email}</span>
        <span>🌐 <a href="${personalInfo.linkedin}">linkedin.com/in/hbibinrhmn</a></span>
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

    <!-- Riwayat Pengalaman Kerja (Halaman 1: Top 2 Roles) -->
    <section class="section">
      <h2 class="section-title">Pengalaman Kerja Profesional (Track Record Kronologis)</h2>

      <!-- Role 1: Halfa Barokah -->
      <article class="job">
        <div class="job-header">
          <div class="job-title-group">
            <span class="job-role">${experienceData[0].role}</span>
            <span>•</span>
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

      <!-- Role 2: KS Motor -->
      <article class="job">
        <div class="job-header">
          <div class="job-title-group">
            <span class="job-role">${experienceData[1].role}</span>
            <span>•</span>
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

    <!-- Halaman 2: Page Break untuk menjaga kerapihan A4 -->
    <div class="page-break-before"></div>

    <!-- Riwayat Pengalaman Lanjutan (Roles 3-6) -->
    <section class="section">
      <h2 class="section-title">Pengalaman Kerja Profesional (Lanjutan)</h2>

      <!-- Role 3: Proyek Mako TNI -->
      <article class="job">
        <div class="job-header">
          <div class="job-title-group">
            <span class="job-role">${experienceData[2].role}</span>
            <span>•</span>
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

      <!-- Role 4: PT Santri Niaga -->
      <article class="job">
        <div class="job-header">
          <div class="job-title-group">
            <span class="job-role">${experienceData[3].role}</span>
            <span>•</span>
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

      <!-- Role 5: Taskindo Motor -->
      <article class="job">
        <div class="job-header">
          <div class="job-title-group">
            <span class="job-role">${experienceData[4].role}</span>
            <span>•</span>
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

      <!-- Role 6: IndiHome -->
      <article class="job">
        <div class="job-header">
          <div class="job-title-group">
            <span class="job-role">${experienceData[5].role}</span>
            <span>•</span>
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
    <section class="section">
      <h2 class="section-title">Riwayat Pendidikan</h2>
      <div class="edu-row">
        <div>
          <span class="edu-degree">${educationData[0].degree}</span>
          <span>•</span>
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
 * Eliminates website DOM bleeding (11 pages), eliminates navbar/footer, and isolates standard A4 layout.
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
      // Fallback to opening printable tab if iframe printing blocked
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
