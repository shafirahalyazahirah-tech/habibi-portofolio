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
            Pengalaman Kerja Kronologis (2020 - Sekarang)
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 leading-relaxed">
            Rekam jejak karir profesional berkesinambungan yang memadukan keahlian teknis perangkat lunak, kepemimpinan sales lapangan, dan akuntabilitas pertumbuhan bisnis.
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
                          {point.split('batualamhalfabarokah.com')[0]}
                          <a
                            href="https://batualamhalfabarokah.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-blue-600 hover:underline inline-flex items-center gap-0.5"
                          >
                            batualamhalfabarokah.com
                            <ExternalLink className="w-3 h-3" />
                          </a>
                          {point.split('batualamhalfabarokah.com')[1]}
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

        {/* Education Section Header */}
        <div className="mt-16 max-w-3xl mb-8 text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight">
            Riwayat Pendidikan
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 leading-relaxed">
            Fondasi akademik yang membangun kompetensi teknis dan kemampuan analitis.
          </p>
        </div>

        {/* Education Cards - Same layout as Experience */}
        <div className="space-y-6 max-w-4xl text-left">
          {educationData.map((edu, index) => (
            <div
              key={edu.id}
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
                      {edu.degree}
                    </h3>
                  </div>
                  <div className="text-sm font-semibold text-blue-600 mt-1 pl-8">
                    {edu.institution}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 pl-8 sm:pl-0 mt-1 sm:mt-0">
                  <span className="inline-flex items-center gap-1 bg-white border border-zinc-200 px-2 py-0.5 rounded">
                    <Calendar className="w-3 h-3 text-zinc-400" />
                    {edu.period}
                  </span>
                  <span className="bg-zinc-200/80 text-zinc-700 px-2 py-0.5 rounded text-[11px] font-semibold">
                    {edu.status}
                  </span>
                </div>
              </div>

              {/* Scope & Type */}
              <div className="mt-3 flex items-center gap-2 text-xs text-zinc-500 font-medium">
                <GraduationCap className="w-3.5 h-3.5 text-zinc-400" />
                <span>{edu.concentration}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-zinc-400" />
                  Tasikmalaya, Jawa Barat
                </span>
              </div>

              {/* Highlights List */}
              <div className="mt-4 space-y-2.5">
                {edu.highlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-5 pt-3 border-t border-zinc-200 flex flex-wrap gap-1.5">
                {['Manajemen Informatika', 'Web Development', 'Algoritma & Struktur Data', 'Desain Grafis', 'Presentasi & Negosiasi', 'Kerja Industri (Magang)'].map((tag, idx) => (
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
      </div>
    </section>
  );
}
