import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projectsData, personalInfo } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 text-left">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
            Studi Kasus Nyata
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mt-1">
            Featured Projects & Rekam Solusi
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2">
            Bagaimana pendekatan teknis yang presisi dan strategi pemasaran berbasis data menyelesaikan hambatan riil dan melipatgandakan omset bisnis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-50 rounded-xl border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-300 transition-colors"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between text-xs text-zinc-500 pb-3 border-b border-zinc-200">
                  <span className="font-mono">{project.category}</span>
                  <span className="font-semibold text-zinc-700">{project.company}</span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 mt-4">
                  {project.title}
                </h3>

                {/* Outcome Box */}
                <div className="mt-4 p-4 rounded-lg bg-white border border-zinc-200">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold block">
                    Hasil Utama (Verified Outcome)
                  </span>
                  <div className="text-lg font-bold text-zinc-900 mt-0.5">
                    {project.result}
                  </div>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    {project.resultDetail}
                  </p>
                </div>

                {/* Challenge & Solution */}
                <div className="mt-5 space-y-4 text-xs text-zinc-600 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-zinc-900 uppercase tracking-wider text-[11px] mb-1">
                      Tantangan
                    </h4>
                    <p>{project.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-zinc-900 uppercase tracking-wider text-[11px] mb-1">
                      Solusi yang Diterapkan
                    </h4>
                    <p>{project.solution}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Tags & Action */}
              <div className="mt-8 pt-4 border-t border-zinc-200">
                <div className="flex flex-wrap gap-1.5 mb-5 text-[11px] font-mono text-zinc-600">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white border border-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href={`https://wa.me/${personalInfo.phone}?text=${encodeURIComponent(
                    `Halo Habibi, saya tertarik mendiskusikan studi kasus: "${project.title}".`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-zinc-900 bg-white hover:bg-zinc-100 border border-zinc-200 rounded-lg transition-colors"
                >
                  <span>Konsultasi Proyek Serupa via WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
