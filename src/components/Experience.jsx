import React from 'react';
import { ExternalLink } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 text-left">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
            Track Record Profesional
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mt-1">
            Pengalaman & Peran Kunci
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2">
            Bertanggung jawab langsung terhadap arsitektur web, otomatisasi operasional internal, dan pengelolaan anggaran iklan berbayar dengan akuntabilitas hasil bisnis.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl">
          {experienceData.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-50 rounded-xl border border-zinc-200 p-6 sm:p-8 hover:border-zinc-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-4 border-b border-zinc-200">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-zinc-900">
                    {item.role}
                  </h3>
                  <div className="text-sm font-semibold text-blue-600 mt-0.5">
                    {item.company}
                  </div>
                </div>
                <div className="text-xs font-mono text-zinc-500">
                  {item.period}
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {item.highlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 flex-shrink-0" />
                    <p className="text-sm text-zinc-700 leading-relaxed">
                      {point.includes('batualamhalfabarokah.com') ? (
                        <>
                          Membangun ekosistem web khusus (
                          <a
                            href="https://batualamhalfabarokah.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-600 hover:underline inline-flex items-center gap-0.5"
                          >
                            batualamhalfabarokah.com
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          ) & aplikasi operasional internal untuk kontrol kasir dan stok barang.
                        </>
                      ) : (
                        point
                      )}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200 flex flex-wrap gap-2 text-xs">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-white border border-zinc-200 text-zinc-600 font-mono text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
