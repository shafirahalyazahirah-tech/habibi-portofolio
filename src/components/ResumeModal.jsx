import React, { useState } from 'react';
import { X, Copy, Check, Printer, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo, experienceData, educationData, executiveResume } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const textContent = `
============================================================
CURRICULUM VITAE / EXECUTIVE RESUME
============================================================
Nama: ${personalInfo.name}
Role: ${personalInfo.headline}
Domisili: ${personalInfo.location}
WhatsApp/Telepon: ${personalInfo.phoneFormatted}
Email: ${personalInfo.email}
LinkedIn: ${personalInfo.linkedin}

RINGKASAN EKSEKUTIF:
${executiveResume.summary}

KOMPETENSI UTAMA:
${executiveResume.coreCompetencies.map((c) => `• ${c}`).join('\n')}

RIWAYAT PENGALAMAN KERJA (CHRONOLOGICAL TIMELINE):
${experienceData
  .map(
    (exp) => `
1. ${exp.role} | ${exp.company}
   Periode: ${exp.period} (${exp.status})
   Fokus: ${exp.type}
   Pencapaian:
   ${exp.highlights.map((h) => `• ${h}`).join('\n   ')}
`
  )
  .join('')}

RIWAYAT PENDIDIKAN:
${educationData
  .map(
    (edu) => `
• ${edu.degree} - ${edu.institution} (${edu.period})
  Status: ${edu.status}
`
  )
  .join('')}
============================================================
`;

    navigator.clipboard.writeText(textContent.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-zinc-200 overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-zinc-200 bg-zinc-50 flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-blue-50 text-blue-600 border border-blue-200">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-zinc-900 leading-tight">
                Ringkasan Eksekutif & CV (ATS Ready)
              </h3>
              <p className="text-[11px] text-zinc-500">
                Format lengkap rekam jejak karir profesional Habibi Nurrohman
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-700 bg-white hover:bg-zinc-100 border border-zinc-200 rounded-md transition-colors"
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
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-zinc-700 bg-white hover:bg-zinc-100 border border-zinc-200 rounded-md transition-colors hidden sm:inline-flex"
              title="Cetak atau Simpan sebagai PDF"
            >
              <Printer className="w-3.5 h-3.5 text-zinc-500" />
              <span>Cetak / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-zinc-400 hover:text-zinc-700 hover:bg-zinc-200 rounded-md transition-colors"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-left text-zinc-800 text-xs sm:text-sm">
          {/* Header Info */}
          <div className="pb-6 border-b border-zinc-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-zinc-900">{personalInfo.name}</h1>
                <p className="text-sm font-semibold text-blue-600 mt-0.5">{personalInfo.headline}</p>
              </div>
              <div className="text-xs text-zinc-500 space-y-0.5 sm:text-right font-mono">
                <p className="flex items-center sm:justify-end gap-1">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                  <span>{personalInfo.location}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1">
                  <Phone className="w-3 h-3 text-zinc-400" />
                  <span>{personalInfo.phoneFormatted}</span>
                </p>
                <p className="flex items-center sm:justify-end gap-1">
                  <Mail className="w-3 h-3 text-zinc-400" />
                  <span>{personalInfo.email}</span>
                </p>
              </div>
            </div>

            <div className="mt-4 p-3.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs leading-relaxed text-zinc-700">
              <span className="font-semibold text-zinc-900 block mb-1">Profil Profesional:</span>
              {executiveResume.summary}
            </div>
          </div>

          {/* Core Competencies */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-900">
              Kompetensi Kunci & Kemampuan Teknis
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-700">
              {executiveResume.coreCompetencies.map((comp, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2 rounded bg-zinc-50 border border-zinc-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                  <span>{comp}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Complete Chronological Work Experience */}
          <div className="space-y-4 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-900">
              Riwayat Pengalaman Kerja Teruji (2020 – Sekarang)
            </h4>

            <div className="space-y-4">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-lg bg-white border border-zinc-200 shadow-2xs">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-2 border-b border-zinc-100">
                    <div>
                      <h5 className="font-bold text-zinc-900 text-sm">{exp.role}</h5>
                      <p className="text-xs font-semibold text-blue-600">{exp.company} • <span className="font-normal text-zinc-500">{exp.location}</span></p>
                    </div>
                    <span className="text-xs font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="mt-2.5 space-y-1.5 text-xs text-zinc-600 list-disc list-inside">
                    {exp.highlights.map((point, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 pt-2 border-t border-zinc-100 flex flex-wrap gap-1 text-[11px] font-mono text-zinc-500">
                    {exp.tags.map((t, idx) => (
                      <span key={idx} className="px-1.5 py-0.5 rounded bg-zinc-100">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-zinc-900">
              Riwayat Pendidikan
            </h4>
            {educationData.map((edu) => (
              <div key={edu.id} className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <div>
                    <h5 className="font-bold text-zinc-900 text-sm">{edu.degree}</h5>
                    <p className="text-xs font-medium text-zinc-600">{edu.institution}</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500">{edu.period} • {edu.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-zinc-200 bg-zinc-50 flex items-center justify-between text-xs text-zinc-500 flex-shrink-0">
          <span>Siap dievaluasi oleh Recruiter & Mitra Bisnis</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-zinc-700 hover:text-zinc-900 bg-white hover:bg-zinc-100 border border-zinc-200 rounded-md transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
}
