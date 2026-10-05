import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projectsData, personalInfo } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="portfolio" className="py-20 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
            Rekam Solusi & Transformasi Bisnis (P-A-R)
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2">
            Studi kasus implementasi sistem web, periklanan digital berbasis data, dan standardisasi alur operasional dalam memecahkan tantangan bisnis nyata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-50 rounded-xl border border-zinc-200 p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-300 transition-colors shadow-2xs"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between text-xs text-zinc-500 pb-3 border-b border-zinc-200">
                  <span className="font-mono text-zinc-500 font-medium">{project.category}</span>
                  <span className="font-semibold text-zinc-800">{project.company}</span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 mt-4 leading-snug">
                  {project.title}
                </h3>

                {/* Outcome Box */}
                <div className="mt-4 p-4 rounded-lg bg-white border border-zinc-200">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Hasil Terverifikasi (Verified Outcome)</span>
                  </div>
                  <div className="text-lg font-bold text-zinc-900 mt-1">
                    {project.result}
                  </div>
                  <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                    {project.resultDetail}
                  </p>
                </div>

                {/* Problem, Action, Result Narrative */}
                <div className="mt-5 space-y-4 text-xs text-zinc-600 leading-relaxed">
                  <div>
                    <h4 className="font-semibold text-zinc-900 uppercase tracking-wider text-[11px] mb-1">
                      1. Tantangan Bisnis (Problem)
                    </h4>
                    <p>{project.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-zinc-900 uppercase tracking-wider text-[11px] mb-1">
                      2. Tindakan & Rekayasa Solusi (Action)
                    </h4>
                    <p>{project.action}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-zinc-900 uppercase tracking-wider text-[11px] mb-1">
                      3. Dampak & Pertumbuhan (Impact)
                    </h4>
                    <p>{project.impact}</p>
                  </div>
                </div>
              </div>

              {/* Bottom Tags & WhatsApp Action */}
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
                  className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-zinc-900 bg-white hover:bg-zinc-100 active:scale-[0.98] border border-zinc-200 rounded-lg transition-all"
                >
                  <span>Konsultasi Solusi Serupa via WhatsApp</span>
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
