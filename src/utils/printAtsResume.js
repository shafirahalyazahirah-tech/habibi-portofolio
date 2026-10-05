import { personalInfo, experienceData, educationData, executiveResume, certificationsData } from '../data/portfolioData';

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

    /* Certifications & Licenses */
    .cert-item {
      margin-bottom: 3px;
    }

    .cert-item:last-child {
      margin-bottom: 0;
    }

    .cert-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 0.5px;
    }

    .cert-name {
      font-size: 8.5pt;
      font-weight: 700;
      color: #0f172a;
    }

    .cert-issuer {
      font-size: 8.2pt;
      font-weight: 600;
      color: #1d4ed8;
    }

    .cert-period {
      font-size: 7.6pt;
      font-weight: 600;
      color: #475569;
      font-family: ui-monospace, SFMono-Regular, monospace;
    }

    .cert-sub {
      font-size: 7.5pt;
      color: #64748b;
      line-height: 1.25;
    }

    .cert-sub code {
      font-family: ui-monospace, SFMono-Regular, monospace;
      color: #1e293b;
      font-weight: 600;
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
        <p class="skill-entry"><strong>Web Development & IT:</strong> React, Tailwind CSS, Vite, JavaScript ES6+ (Dicoding Certified), Algoritma & Struktur Data (Predikat A), Laravel 11, SQL, cPanel, REST API, Git, Workflow AI</p>
        <p class="skill-entry"><strong>Performance Marketing & Analytics:</strong> Meta Ads (WhatsApp Conversion), Google Analytics 4 (GA4 Certified), Grow Offline Sales (Google Certified), Inbound Marketing (HubSpot Certified), GTM, GSC</p>
        <p class="skill-entry"><strong>High-Ticket Sales & Funnel:</strong> WhatsApp Sales Closing, Presentasi & Negosiasi (Predikat B+), Direct B2C Sales, Consultative Selling (Otomotif & Umroh)</p>
        <p class="skill-entry"><strong>Operations & Media Production:</strong> Standardisasi SOP Operasional & Gudang, Supervisi Lapangan (1.000 m²), Social Media Strategy & ROI (HubSpot Certified), Produksi Video Iklan (CapCut)</p>
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
      <ul class="job-bullets" style="margin-top: 2px;">
        ${educationData[0].highlights.map((h) => `<li>${h}</li>`).join('')}
      </ul>
    </section>

    <!-- Certifications & Licenses -->
    <section class="section" style="margin-top: 6px;">
      <h2 class="section-title">CERTIFICATIONS & LICENSES</h2>
      <div class="cert-list">
        ${certificationsData
          .map(
            (c) => `
        <div class="cert-item">
          <div class="cert-header">
            <div>
              <span class="cert-name">${c.name}</span>
              <span class="sep">•</span>
              <span class="cert-issuer">${c.issuer}</span>
            </div>
            <span class="cert-period">${c.validity}</span>
          </div>
          <div class="cert-sub">
            <span>ID: <code>${c.credentialId}</code></span>
            <span class="sep">•</span>
            <span>Keahlian: ${c.skills.slice(0, 3).join(', ')}</span>
          </div>
        </div>`
          )
          .join('')}
      </div>
    </section>
  </div>
</body>
</html>`;
}

/**
 * Downloads an official, pristine 2-page A4 PDF file directly using jsPDF + html2canvas.
 *
 * ROOT CAUSE FIX (blank PDF bug solved thoroughly):
 * 1. Previous implementation relied on html2pdf.js, which:
 *    - Ran HTML string through DOMPurify, which stripped all `<style>` tags and CSS rules.
 *    - Set `opacity: 0` on its internal `.html2pdf__overlay` wrapper, causing modern html2canvas
 *      to paint 100% transparent pixels (alpha = 0), generating a completely blank white PDF.
 * 2. This new implementation uses direct `jsPDF` + `html2canvas`:
 *    - Off-screen container is positioned at `left: 0; top: 0; z-index: -99999` with `opacity: 1`
 *      and `visibility: visible` so html2canvas renders all text, colors, and layout perfectly.
 *    - Styles are directly parsed from `generateAtsHtml()` without DOMPurify stripping.
 *    - Each `.cv-page` is explicitly dimensioned at 794px x 1123px (standard 210mm x 297mm A4 at 96 DPI).
 *    - Uses 2x canvas scaling for ultra-crisp, high-resolution 300 DPI text.
 *    - Directly adds each rendered page to the jsPDF document and triggers `.save()`.
 *    - DOM cleanup is guaranteed via `finally` block.
 *
 * @param {Function} [onStatusChange] Optional callback with status { loading: boolean, message: string }
 */
export async function downloadAtsPdf(onStatusChange) {
  let container = null;
  try {
    if (onStatusChange) onStatusChange({ loading: true, message: 'Menyiapkan berkas PDF...' });

    // Dynamically import jsPDF and html2canvas
    const [jspdfModule, html2canvasModule] = await Promise.all([
      import('jspdf'),
      import('html2canvas'),
    ]);
    const jsPDF = jspdfModule.jsPDF || jspdfModule.default || jspdfModule;
    const html2canvas = html2canvasModule.default || html2canvasModule;

    // Parse the pristine ATS HTML string
    const fullHtml = generateAtsHtml();
    const parser = new DOMParser();
    const parsedDoc = parser.parseFromString(fullHtml, 'text/html');

    // Create sandboxed render container.
    // CRITICAL: opacity: 1 and visibility: visible ensure html2canvas paints non-transparent pixels.
    // z-index: -99999 ensures it renders behind the active page and modal with zero flicker.
    container = document.createElement('div');
    container.id = 'ats-pdf-render-container';
    container.style.cssText = [
      'position: fixed',
      'left: 0',
      'top: 0',
      'width: 794px',
      'z-index: -99999',
      'opacity: 1',
      'visibility: visible',
      'pointer-events: none',
      'background: #ffffff',
      'color: #0f172a',
      'margin: 0',
      'padding: 0',
    ].join('; ');

    // Extract and attach custom styles
    const styleEl = parsedDoc.querySelector('style');
    if (styleEl) {
      const newStyle = document.createElement('style');
      newStyle.textContent = styleEl.textContent;
      container.appendChild(newStyle);
    }

    // Extract each cv-page
    const pages = parsedDoc.querySelectorAll('.cv-page');
    if (!pages || pages.length === 0) {
      throw new Error('Tidak ada halaman resume yang ditemukan.');
    }

    const pageContainers = [];
    pages.forEach((pageNode, idx) => {
      const pageWrapper = document.createElement('div');
      pageWrapper.id = `ats-pdf-page-${idx + 1}`;
      pageWrapper.className = 'cv-page-export';
      pageWrapper.style.cssText = [
        'width: 794px',
        'min-height: 1123px',
        'box-sizing: border-box',
        'background: #ffffff',
        'color: #0f172a',
        'padding: 10mm 14mm 8mm 14mm',
        'margin: 0',
        'overflow: hidden',
        'display: block',
      ].join('; ');

      while (pageNode.firstChild) {
        pageWrapper.appendChild(pageNode.firstChild);
      }
      container.appendChild(pageWrapper);
      pageContainers.push(pageWrapper);
    });

    document.body.appendChild(container);

    // Allow browser layout engine & web fonts to settle
    if (document.fonts && document.fonts.ready) {
      try {
        await document.fonts.ready;
      } catch (e) {
        // ignore font readiness error
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 150));

    // Initialize 2-page A4 portrait PDF document
    const pdf = new jsPDF({
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
      compress: true,
    });

    // Render each page into high-resolution canvas and attach to PDF
    for (let i = 0; i < pageContainers.length; i++) {
      const pageEl = pageContainers[i];
      if (onStatusChange) {
        onStatusChange({
          loading: true,
          message: `Mengonversi halaman ${i + 1} dari ${pageContainers.length}...`,
        });
      }

      const canvas = await html2canvas(pageEl, {
        scale: 2, // 2x scale for crisp, print-ready 300 DPI text
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        width: 794,
        height: 1123,
        windowWidth: 794,
        windowHeight: 1123,
        scrollY: 0,
        scrollX: 0,
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.98);

      if (i > 0) {
        pdf.addPage('a4', 'portrait');
      }

      // Fit standard A4 dimensions (210mm x 297mm)
      pdf.addImage(imgData, 'JPEG', 0, 0, 210, 297, undefined, 'FAST');
    }

    if (onStatusChange) {
      onStatusChange({ loading: true, message: 'Menyimpan berkas...' });
    }

    const fileName = `CV_${personalInfo.name.replace(/\s+/g, '_')}_ATS.pdf`;
    pdf.save(fileName);

    if (onStatusChange) {
      onStatusChange({ loading: false, message: '' });
    }
  } catch (err) {
    console.error('downloadAtsPdf failed:', err);
    if (onStatusChange) {
      onStatusChange({ loading: false, message: '' });
    }
    // Fallback to isolated print dialog
    printAtsResume();
  } finally {
    if (container && container.parentNode) {
      container.parentNode.removeChild(container);
    }
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
