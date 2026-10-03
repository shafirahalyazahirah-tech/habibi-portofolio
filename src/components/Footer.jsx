import React from 'react';
import { personalInfo } from '../data/portfolioData';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer({ onOpenResume }) {
  return (
    <footer className="py-12 bg-white text-zinc-600 text-xs text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-200">
          <div>
            <span className="text-sm font-bold text-zinc-900 block">
              {personalInfo.name}
            </span>
            <p className="text-xs text-zinc-500 mt-0.5">
              {personalInfo.headline} • {personalInfo.location}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-zinc-600 text-xs">
            <a href="#about" className="hover:text-zinc-900 transition-colors">
              Tentang
            </a>
            <a href="#experience" className="hover:text-zinc-900 transition-colors">
              Karir & Timeline
            </a>
            <a href="#portfolio" className="hover:text-zinc-900 transition-colors">
              Studi Kasus
            </a>
            <a href="#skills" className="hover:text-zinc-900 transition-colors">
              Keahlian
            </a>
            <a href="#contact" className="hover:text-zinc-900 transition-colors">
              Kontak
            </a>
            <button
              onClick={onOpenResume}
              className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer"
            >
              Ringkasan CV (ATS)
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400">
          <p>© {CURRENT_YEAR} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-4 text-zinc-500 font-medium">
            <a
              href={personalInfo.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              Instagram
            </a>
            <a
              href={personalInfo.instagramBrand}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              @hanucazari.id
            </a>
            <a
              href={personalInfo.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              Facebook
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
