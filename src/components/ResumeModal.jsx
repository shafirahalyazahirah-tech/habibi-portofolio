import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Printer, FileText, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { personalInfo, experienceData, educationData, executiveResume } from '../data/portfolioData';
import { printAtsResume } from '../utils/printAtsResume';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getResumePlainText = () => {
    return `============================================================
CURRICULUM VITAE / EXECUTIVE RESUME (ATS COMPLIANT)
============================================================
Nama: ${personalInfo.name}
Role: ${personalInfo.headline}
Domisili: ${personalInfo.location}
WhatsApp/Telepon: ${personalInfo.phoneFormatted}
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}

------------------------------------------------------------
RINGKASAN EKSEKUTIF
------------------------------------------------------------
${executiveResume.summary}

------------------------------------------------------------
KOMPETENSI UTAMA & TEKNIS
------------------------------------------------------------
${executiveResume.coreCompetencies.map((c) => `• ${c}`).join('\n')}

------------------------------------------------------------
RIWAYAT PENGALAMAN KERJA (CHRONOLOGICAL TIMELINE)
------------------------------------------------------------
${experienceData
  .map(
    (exp, idx) => `
${idx + 1}. ${exp.role} | ${exp.company}
   Periode: ${exp.period} (${exp.status})
   Lokasi: ${exp.location}
   Fokus: ${exp.type}
   Pencapaian:
   ${exp.highlights.map((h) => `• ${h}`).join('\n   ')}
   Keahlian Terkait: ${exp.tags.join(', ')}
`
  )
  .join('')}

------------------------------------------------------------
RIWAYAT PENDIDIKAN
------------------------------------------------------------
${educationData
  .map(
    (edu) => `
• ${edu.degree}
  Institusi: ${edu.institution} (${edu.period})
  Status: ${edu.status}
  Catatan: ${edu.highlights[0]}
`
  )
  .join('')}
============================================================
Dokumen resmi disiapkan untuk evaluasi perekrut & mitra bisnis.
`;
  };

  const handleCopyText = () => {
    const textContent = getResumePlainText();
    navigator.clipboard.writeText(textContent.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadText = () => {
    try {
      const element = document.createElement('a');
      const file = new Blob([getResumePlainText()], { type: 'text/plain;charset=utf-8' });
      element.href = URL.createObjectURL(file);
      element.download = `CV_${personalInfo.name.replace(/\s+/g, '_')}_ATS.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    } catch (err) {
      console.error('Download error:', err);
    }
  };

  const handlePrint = () => {
    printAtsResume();
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-5 sm:px-6 py-4 border-b border-zinc-200 bg-zinc-50 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-blue-50 text-blue-600 border border-blue-200">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-900 leading-tight">
                Curriculum Vitae (Format Standar ATS A4)
              </h3>
              <p className="text-[11px] text-zinc-500">
                Format 2 Halaman A4 bersih • 100% Bebas elemen web luar
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-700 bg-white hover:bg-zinc-100 border border-zinc-200 rounded-md transition-colors cursor-pointer"
              title="Salin teks lengkap resume"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-medium">Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-500" />
                  <span>Salin Teks</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-700 bg-white hover:bg-zinc-100 border border-zinc-200 rounded-md transition-colors cursor-pointer"
              title="Unduh format teks dokumen"
            >
              <Download className="w-3.5 h-3.5 text-zinc-500" />
              <span className="hidden sm:inline">Unduh TXT</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors shadow-2xs cursor-pointer"
              title="Cetak atau Simpan sebagai PDF A4 Standar"
            >
              <Printer className="w-3.5 h-3.5 text-white" />
              <span>Cetak / PDF (A4)</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200 rounded-md transition-colors cursor-pointer"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content: ATS Clean Paper Preview */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-left text-zinc-900 text-xs sm:text-sm bg-white font-sans">
          {/* Paper Header */}
          <div className="text-center pb-5 border-b-2 border-zinc-900">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-zinc-900">
              {personalInfo.name}
            </h1>
            <p className="text-xs sm:text-sm font-semibold text-blue-600 mt-1">
              {personalInfo.headline}
            </p>
            <div className="mt-3 flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-zinc-600 font-medium">
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                {personalInfo.location}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-zinc-400" />
                {personalInfo.phoneFormatted}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-zinc-400" />
                {personalInfo.email}
              </span>
              <span>•</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline inline-flex items-center gap-0.5"
              >
                LinkedIn Profile
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Section: Ringkasan Eksekutif */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
              Ringkasan Eksekutif / Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed text-justify">
              {executiveResume.summary}
            </p>
          </div>

          {/* Section: Kompetensi Inti */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
              Kompetensi Kunci & Matriks Keahlian
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700">
              {executiveResume.coreCompetencies.map((comp, idx) => (
                <div key={idx} className="flex items-start gap-2 p-1.5 rounded bg-zinc-50 border border-zinc-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <span className="leading-tight">{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Pengalaman Kerja Kronologis */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-3 font-mono">
              Riwayat Pengalaman Kerja Profesional (2020 – Sekarang)
            </h2>

            <div className="space-y-4">
              {experienceData.map((exp, index) => (
                <div key={exp.id} className="pb-3 border-b border-zinc-100 last:border-0 last:pb-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <div>
                      <span className="font-bold text-zinc-900 text-sm">
                        {index + 1}. {exp.role}
                      </span>
                      <span className="text-zinc-400 mx-1.5">•</span>
                      <span className="font-semibold text-blue-600 text-xs sm:text-sm">
                        {exp.company}
                      </span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 whitespace-nowrap">
                      {exp.period} ({exp.status})
                    </span>
                  </div>

                  <p className="text-[11px] text-zinc-500 italic mt-0.5">
                    {exp.location} — {exp.type}
                  </p>

                  <ul className="mt-2 space-y-1.5 text-xs text-zinc-700 list-disc list-inside">
                    {exp.highlights.map((point, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-2 flex flex-wrap gap-1 text-[11px] font-mono text-zinc-500">
                    <span className="text-zinc-400">Keahlian:</span>
                    {exp.tags.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Riwayat Pendidikan */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-zinc-900 border-b border-zinc-300 pb-1 mb-2 font-mono">
              Riwayat Pendidikan
            </h2>
            {educationData.map((edu) => (
              <div key={edu.id} className="text-xs text-zinc-700">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                  <div>
                    <span className="font-bold text-zinc-900 text-sm">{edu.degree}</span>
                    <span className="text-zinc-400 mx-1.5">•</span>
                    <span className="font-semibold text-blue-600">{edu.institution}</span>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">{edu.period} ({edu.status})</span>
                </div>
                <p className="text-xs text-zinc-600 mt-1">{edu.highlights[0]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-5 sm:px-6 py-3.5 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between text-xs text-zinc-500 flex-shrink-0">
          <span>Standar ATS Industri • Siap Simpan sebagai PDF A4</span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak / PDF (A4)</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 text-xs font-semibold text-zinc-700 hover:text-zinc-900 bg-white hover:bg-zinc-100 border border-zinc-200 rounded-md transition-colors cursor-pointer"
            >
              Tutup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
