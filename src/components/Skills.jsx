import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="skills" className="py-20 sm:py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-left">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
            Kompetensi Terpadu
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mt-1">
            Keahlian Teknis & Pemasaran
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2">
            Kombinasi kemampuan rekayasa web modern dengan strategi konversi pemasaran berbayar (Technical Marketer).
          </p>

          {/* Simple Tab Filters */}
          <div className="mt-6 inline-flex p-1 rounded-lg bg-zinc-200/70 text-xs font-medium">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'all'
                  ? 'bg-white text-zinc-900 shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Semua Keahlian
            </button>
            <button
              onClick={() => setActiveTab('technical')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'technical'
                  ? 'bg-white text-zinc-900 shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Technical Stack
            </button>
            <button
              onClick={() => setActiveTab('marketing')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                activeTab === 'marketing'
                  ? 'bg-white text-zinc-900 shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              Marketing & Growth
            </button>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Technical Stack */}
          {(activeTab === 'all' || activeTab === 'technical') && (
            <div className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-7 shadow-xs">
              <div className="pb-4 mb-5 border-b border-zinc-100">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold block">
                  {skillsData.technical.label}
                </span>
                <h3 className="text-lg font-bold text-zinc-900 mt-0.5">
                  {skillsData.technical.category}
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  {skillsData.technical.description}
                </p>
              </div>

              <div className="space-y-4">
                {skillsData.technical.items.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-zinc-900">{skill.name}</span>
                      <span className="text-xs font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
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
          )}

          {/* Marketing & Growth */}
          {(activeTab === 'all' || activeTab === 'marketing') && (
            <div className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-7 shadow-xs">
              <div className="pb-4 mb-5 border-b border-zinc-100">
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-600 font-semibold block">
                  {skillsData.marketing.label}
                </span>
                <h3 className="text-lg font-bold text-zinc-900 mt-0.5">
                  {skillsData.marketing.category}
                </h3>
                <p className="text-xs text-zinc-500 mt-1">
                  {skillsData.marketing.description}
                </p>
              </div>

              <div className="space-y-4">
                {skillsData.marketing.items.map((skill, idx) => (
                  <div key={idx} className="group">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-semibold text-zinc-900">{skill.name}</span>
                      <span className="text-xs font-mono text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
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
          )}
        </div>
      </div>
    </section>
  );
}
