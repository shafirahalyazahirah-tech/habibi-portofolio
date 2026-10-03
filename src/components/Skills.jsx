import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

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
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
            Matriks Kompetensi Terpadu
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mt-1">
            4 Pilar Keahlian: Dari Kode Hingga Closing
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2">
            Kombinasi langka yang memadukan rekayasa perangkat lunak, perolehan traffic tertarget, ketangguhan sales, dan pengorganisasian operasional bisnis.
          </p>

          {/* Tab Filter Buttons */}
          <div className="mt-6 flex flex-wrap gap-1.5 p-1 rounded-lg bg-zinc-200/70 text-xs font-medium">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3 py-1.5 rounded-md transition-colors cursor-pointer ${
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
      </div>
    </section>
  );
}
