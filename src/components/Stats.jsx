import React from 'react';
import { statsData } from '../data/portfolioData';

export default function Stats() {
  return (
    <section className="py-12 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-6">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
            Rekam Angka & Verifikasi Lapangan
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          {statsData.map((stat) => (
            <div
              key={stat.id}
              className="p-5 rounded-xl bg-white border border-zinc-200 shadow-2xs hover:border-zinc-300 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight font-mono">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded">
                    Verified
                  </span>
                </div>
                <div className="text-sm font-bold text-zinc-800 mt-2">
                  {stat.metric}
                </div>
                <div className="text-xs font-medium text-blue-600">
                  {stat.company}
                </div>
              </div>
              <p className="text-xs text-zinc-500 mt-3 pt-3 border-t border-zinc-100 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
