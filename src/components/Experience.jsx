import React from 'react';
import { ExternalLink, Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import { experienceData, educationData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
            Pengalaman Kerja Kronologis (2020 – Sekarang)
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 leading-relaxed">
            Rekam jejak konsisten tanpa celah (gap-free timeline) yang membuktikan keahlian teknis perangkat lunak, ketangguhan sales lapangan, dan akuntabilitas pertumbuhan bisnis.
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-6 max-w-4xl text-left">
          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className="bg-zinc-50 rounded-xl border border-zinc-200 p-6 sm:p-7 hover:border-zinc-300 transition-colors relative"
            >
              {/* Header Box */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-4 border-b border-zinc-200">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold font-mono flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900">
                      {item.role}
                    </h3>
                  </div>
                  <div className="text-sm font-semibold text-blue-600 mt-1 pl-8">
                    {item.company}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 pl-8 sm:pl-0 mt-1 sm:mt-0">
                  <span className="inline-flex items-center gap-1 bg-white border border-zinc-200 px-2 py-0.5 rounded">
                    <Calendar className="w-3 h-3 text-zinc-400" />
                    {item.period}
                  </span>
                  <span className="bg-zinc-200/80 text-zinc-700 px-2 py-0.5 rounded text-[11px] font-semibold">
                    {item.status}
                  </span>
                </div>
              </div>

              {/* Scope & Type */}
              <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500 font-medium">
                <Briefcase className="w-3.5 h-3.5 text-zinc-400" />
                <span>{item.type}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                  {item.location}
                </span>
              </div>

              {/* Highlights List */}
              <div className="mt-4 space-y-2.5">
                {item.highlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      {point.includes('batualamhalfabarokah.com') ? (
                        <>
                          Membangun ekosistem website katalog resmi (
                          <a
                            href="https://batualamhalfabarokah.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-600 hover:underline inline-flex items-center gap-0.5"
                          >
                            batualamhalfabarokah.com
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          ) dan merancang aplikasi pencatatan operasional internal untuk kontrol kasir serta stok gudang.
                        </>
                      ) : (
                        point
                      )}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-5 pt-3 border-t border-zinc-200 flex flex-wrap gap-1.5">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-white border border-zinc-200 text-zinc-600 font-mono text-[11px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education Foundation Card */}
        <div className="mt-12 max-w-4xl text-left">
          <div className="p-6 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 flex-shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold block">
                  Fondasi Akademik & Rekayasa Perangkat Lunak
                </span>
                <h4 className="text-base font-bold text-zinc-900 mt-0.5">
                  {educationData[0].degree}
                </h4>
                <p className="text-xs text-zinc-600 mt-0.5">
                  {educationData[0].institution} • {educationData[0].period} ({educationData[0].status})
                </p>
                <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
                  {educationData[0].highlights[0]}
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-zinc-500 bg-white border border-zinc-200 px-2.5 py-1 rounded flex-shrink-0">
              Lulusan 2022
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
