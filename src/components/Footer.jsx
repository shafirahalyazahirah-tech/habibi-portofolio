import React from 'react';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="py-10 bg-white text-zinc-500 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-zinc-900">{personalInfo.name}</span>
            <span>•</span>
            <span>{personalInfo.headline}</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-zinc-900 transition-colors">
              Tentang
            </a>
            <a href="#stats" className="hover:text-zinc-900 transition-colors">
              Metrik
            </a>
            <a href="#experience" className="hover:text-zinc-900 transition-colors">
              Pengalaman
            </a>
            <a href="#skills" className="hover:text-zinc-900 transition-colors">
              Keahlian
            </a>
            <a href="#portfolio" className="hover:text-zinc-900 transition-colors">
              Studi Kasus
            </a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">
              Kontak
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-zinc-400">
          <p>© {CURRENT_YEAR} {personalInfo.name}. All rights reserved.</p>
          <p>
            React • Vite • Tailwind CSS • Vercel Ready
          </p>
        </div>
      </div>
    </footer>
  );
}
