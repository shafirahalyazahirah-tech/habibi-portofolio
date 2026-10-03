import { personalInfo, experienceData, educationData, executiveResume } from '../data/portfolioData';

/**
 * Generates clean, strictly formatted, industry-standard ATS CV HTML.
 * Engineered for exact 2-page A4 dimensions with zero overflow, zero emojis,
 * and zero browser print headers/footers.
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
      margin: 8mm 10mm;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    html, body {
      width: 100%;
      margin: 0 !important;
      padding: 0 !important;
      background: #ffffff !important;
      color: #0f172a !important;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      font-size: 8.8pt;
      line-height: 1.35;
    }

    /* A4 Page Container: height: auto to prevent mobile Safari 4-page overflow */
    .cv-page {
      width: 210mm;
      max-width: 100%;
      margin: 0 auto;
      padding: 10mm 14mm 8mm 14mm;
      box-sizing: border-box;
      background: #ffffff;
      page-break-after: always;
      break-after: page;
      display: block;
    }

    .cv-page:last-child {
      page-break-after: avoid;
      break-after: avoid;
    }

    .html2pdf__page-break {
      height: 0;
      page-break-after: always;
      break-after: page;
    }

    .job, .section, .edu-row, .header {
      page-break-inside: avoid;
      break-inside: avoid;
    }

    @media print {
      body {
        width: 100% !important;
      }
      .cv-page {
        width: 100% !important;
        max-width: 100% !important;
        padding: 2mm 2mm 4mm 2mm !important;
        margin: 0 !important;
        page-break-after: always !important;
        break-after: page !important;
      }
      .cv-page:last-child {
        page-break-after: avoid !important;
        break-after: avoid !important;
      }
      .html2pdf__page-break {
        display: none !important;
      }
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

    /* Skills (Linear ATS Container) */
    .skills-container {
      font-size: 8.1pt;
      color: #334155;
      line-height: 1.36;
    }

    .skill-entry {
      margin-bottom: 2.5px;
    }

    .skill-entry:last-child {
      margin-bottom: 0;
    }

    .skill-entry strong {
      color: #0f172a;
      font-weight: 700;
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
        <span class="sep">•</span>
        <span><a href="${personalInfo.portfolioUrl}">habibi-nurrohman-portfolio.vercel.app</a></span>
      </div>
    </header>

    <!-- Professional Summary -->
    <section class="section">
      <h2 class="section-title">PROFESSIONAL SUMMARY</h2>
      <p class="summary-text">${executiveResume.summary}</p>
    </section>

    <!-- Core Competencies & Technical Skills -->
    <section class="section">
      <h2 class="section-title">CORE COMPETENCIES & TECHNICAL SKILLS</h2>
      <div class="skills-container">
        <p class="skill-entry"><strong>Web Development & IT:</strong> React, Tailwind CSS, Vite, Laravel 11, cPanel / Shared Hosting, Vercel, REST API, Git, Workflow Akselerasi AI (AntiGravity/Cursor)</p>
        <p class="skill-entry"><strong>Performance Marketing & Analytics:</strong> Meta Ads (Traffic & WhatsApp Conversion), Google Analytics 4 (GA4), Google Tag Manager (GTM), Google Search Console (GSC)</p>
        <p class="skill-entry"><strong>Sales & Funnel Operations:</strong> High-Ticket Closing via WhatsApp, Direct B2C Sales & Canvassing, Kualifikasi Prospek Cepat, Negosiasi Konsultatif</p>
        <p class="skill-entry"><strong>Operations & Media Production:</strong> Penyusunan SOP Kasir & Inventaris Gudang, Supervisi Lapangan Institusional (3.000 m²), Produksi Video Iklan (CapCut)</p>
      </div>
    </section>

    <!-- Professional Experience (Page 1) -->
    <section class="section" style="margin-bottom: 0;">
      <h2 class="section-title">PROFESSIONAL EXPERIENCE</h2>

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

  <div class="html2pdf__page-break"></div>

  <!-- ==================== HALAMAN 2 (A4) ==================== -->
  <div class="cv-page">
    <section class="section">
      <h2 class="section-title">PROFESSIONAL EXPERIENCE (CONTINUED)</h2>

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
      <h2 class="section-title">EDUCATION</h2>
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
 * Downloads an official, pristine 2-page A4 PDF file directly using html2pdf.js.
 * Completely eliminates Safari iOS AirPrint URL headers, timestamps, and 4-page fragmentation.
 *
 * @param {Function} [onStatusChange] Optional callback with status { loading: boolean, message: string }
 */
export async function downloadAtsPdf(onStatusChange) {
  try {
    if (onStatusChange) onStatusChange({ loading: true, message: 'Menyiapkan berkas PDF...' });

    const html2pdfModule = await import('html2pdf.js');
    const html2pdf = html2pdfModule.default || html2pdfModule;

    // Temporary off-screen container strictly sized for A4 rendering
    const renderContainer = document.createElement('div');
    renderContainer.id = 'ats-pdf-render-root';
    renderContainer.setAttribute(
      'style',
      'position: fixed; left: 0; top: 0; width: 210mm; opacity: 0; pointer-events: none; z-index: -9999; background: #ffffff;'
    );

    const fullHtml = generateAtsHtml();
    const bodyMatch = fullHtml.match(/<body>([\s\S]*?)<\/body>/i);
    const styleMatch = fullHtml.match(/<style>([\s\S]*?)<\/style>/i);

    renderContainer.innerHTML = `
      <style>
        ${styleMatch ? styleMatch[1] : ''}
        #ats-pdf-render-root {
          width: 210mm !important;
          background: #ffffff !important;
          color: #0f172a !important;
        }
        .cv-page {
          width: 210mm !important;
          max-width: 210mm !important;
          padding: 12mm 15mm 10mm 15mm !important;
          box-sizing: border-box !important;
          background: #ffffff !important;
        }
      </style>
      <div>${bodyMatch ? bodyMatch[1] : ''}</div>
    `;

    document.body.appendChild(renderContainer);

    const opt = {
      margin: 0,
      filename: `CV_${personalInfo.name.replace(/\s+/g, '_')}_ATS.pdf`,
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        logging: false,
        letterRendering: true,
        scrollY: 0,
        windowWidth: 794
      },
      jsPDF: {
        unit: 'mm',
        format: 'a4',
        orientation: 'portrait'
      },
      pagebreak: {
        mode: ['css', 'legacy']
      }
    };

    if (onStatusChange) onStatusChange({ loading: true, message: 'Mengonversi ke PDF A4...' });
    await html2pdf().set(opt).from(renderContainer).save();
    renderContainer.remove();

    if (onStatusChange) onStatusChange({ loading: false, message: '' });
  } catch (err) {
    console.error('downloadAtsPdf failed:', err);
    if (onStatusChange) onStatusChange({ loading: false, message: '' });
    // Fallback to browser print dialog
    printAtsResume();
  }
}

/**
 * Triggers pure, isolated A4 PDF printing.
 * Uses media print styles to avoid 4-page overflow on mobile Safari.
 */
export function printAtsResume() {
  const isMobile = typeof navigator !== 'undefined' && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // On iOS Safari / mobile browsers, direct window open avoids hidden iframe print blocking
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.open();
      printWindow.document.write(generateAtsHtml());
      printWindow.document.close();
      setTimeout(() => {
        printWindow.focus();
        printWindow.print();
      }, 350);
      return;
    }
  }

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
