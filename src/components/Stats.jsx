import React from 'react';
import { statsData } from '../data/portfolioData';

export default function Stats() {
  return (
    <section id="stats" className="py-16 sm:py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-left">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
            Rekam Jejak Berbasis Data
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight mt-1">
            Pencapaian Nyata di Lapangan
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {statsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-zinc-200 p-6 sm:p-7 shadow-xs hover:border-zinc-300 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
                {item.value}
              </div>
              <div className="text-sm font-semibold text-blue-600 mt-1">
                {item.metric}
              </div>
              <div className="text-xs font-semibold text-zinc-800 mt-2">
                {item.company}
              </div>
              <p className="text-xs text-zinc-500 mt-1.5 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
