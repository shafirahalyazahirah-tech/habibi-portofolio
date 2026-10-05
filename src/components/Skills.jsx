import React, { useState } from 'react';
import { CheckCircle2, Eye, ExternalLink, X, ShieldCheck } from 'lucide-react';
import { skillsData, certificationsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');
  const [previewCert, setPreviewCert] = useState(null);

  const filterTabs = [
    { id: 'all', label: 'Semua Pilar' },
    { id: 'web-it', label: 'Web & IT' },
    { id: 'marketing-analytics', label: 'Performance Marketing' },
    { id: 'sales-funnel', label: 'High-Ticket Sales' },
    { id: 'ops-content', label: 'Operasional & Media' },
  ];

  const visiblePillars =
    activeTab === 'all'
      ? skillsData.pillars
      : skillsData.pillars.filter((p) => p.id === activeTab);

  return (
    <section id="skills" className="py-20 sm:py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
            4 Pilar Keahlian: Dari Kode Hingga Closing
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2">
            Integrasi terarah antara rekayasa perangkat lunak, perolehan traffic tertarget, eksekusi penjualan langsung, dan tata kelola operasional bisnis.
          </p>

          {/* Tab Filter Buttons */}
          <div className="mt-6 flex flex-wrap gap-1.5 p-1 rounded-lg bg-zinc-200/70 text-xs font-medium">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-md transition-all active:scale-[0.97] cursor-pointer ${
                  activeTab === tab.id
                    ? 'bg-white text-zinc-900 shadow-xs font-semibold'
                    : 'text-zinc-600 hover:text-zinc-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {visiblePillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-7 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="pb-4 mb-4 border-b border-zinc-100">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold block">
                    {pillar.label}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 mt-0.5">
                    {pillar.category}
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">
                    {pillar.description}
                  </p>
                </div>

                <div className="space-y-3.5">
                  {pillar.items.map((skill, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center justify-between text-xs sm:text-sm">
                        <span className="font-semibold text-zinc-900">{skill.name}</span>
                        <span className="text-[11px] font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Certifications & Credentials Showcase */}
        <div className="mt-16 pt-12 border-t border-zinc-200/80 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Kredensial Resmi Terverifikasi</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight mt-1">
                Sertifikasi Industri: Dicoding, Google, HubSpot &amp; LP3I
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 mt-1.5 max-w-2xl">
                Sertifikasi standar industri yang memvalidasi kompetensi rekayasa pemrograman web (JavaScript), analitik data kuantitatif, strategi inbound digital marketing, dan kepemimpinan adaptif.
              </p>
            </div>
            <div className="text-xs font-mono text-zinc-500 bg-white border border-zinc-200 px-3 py-1.5 rounded-lg shrink-0">
              {certificationsData.length} Lisensi Aktif &amp; Terverifikasi
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="group bg-white rounded-xl border border-zinc-200 hover:border-blue-500/50 p-5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-blue-50 text-blue-700 font-semibold border border-blue-100">
                      {cert.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Valid</span>
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-zinc-900 mt-3 group-hover:text-blue-600 transition-colors leading-snug">
                    {cert.name}
                  </h4>

                  <p className="text-xs text-zinc-500 mt-1.5 line-clamp-2 leading-relaxed">
                    {cert.description}
                  </p>

                  <div className="mt-3 pt-3 border-t border-zinc-100 space-y-1 text-[11px] text-zinc-600">
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">Masa Berlaku:</span>
                      <span className="font-medium text-zinc-800">{cert.issueDate} - {cert.expiryDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-zinc-400">ID Kredensial:</span>
                      <code className="text-[10px] font-mono bg-zinc-100 px-1.5 py-0.5 rounded text-zinc-700">{cert.credentialId}</code>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {cert.skills.map((s, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400 font-mono">
                    {cert.category}
                  </span>
                  <div className="flex items-center gap-2.5">
                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
                        title="Verifikasi resmi di Dicoding"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>Verifikasi</span>
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => setPreviewCert(cert)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Lihat Asli</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox Certificate Preview Modal */}
      {previewCert && (
        <div
          className="fixed inset-0 z-60 bg-zinc-950/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setPreviewCert(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-zinc-200 flex flex-col max-h-[90vh] animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-5 py-3.5 bg-zinc-900 text-white flex items-center justify-between">
              <div>
                <h4 className="font-bold text-sm text-zinc-100">{previewCert.name}</h4>
                <p className="text-xs text-zinc-400 mt-0.5">{previewCert.issuer} • ID: {previewCert.credentialId}</p>
              </div>
              <button
                type="button"
                onClick={() => setPreviewCert(null)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-zinc-800 transition-colors cursor-pointer"
                title="Tutup Pratinjau"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-4 bg-zinc-100 flex items-center justify-center overflow-auto flex-1">
              <img
                src={previewCert.imageUrl}
                alt={previewCert.name}
                className="max-w-full max-h-[65vh] object-contain rounded-lg shadow-md border border-zinc-200 bg-white"
              />
            </div>
            <div className="px-5 py-3 bg-zinc-50 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-600">
              <span>Masa Berlaku: <strong className="text-zinc-800">{previewCert.issueDate} - {previewCert.expiryDate}</strong></span>
              <div className="flex items-center gap-3">
                {previewCert.verifyUrl && (
                  <a
                    href={previewCert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
                  >
                    <span>Verifikasi Resmi</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <a
                  href={previewCert.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700 hover:underline"
                >
                  <span>Buka Ukuran Penuh</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
