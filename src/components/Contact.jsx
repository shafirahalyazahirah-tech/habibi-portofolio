import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Copy, Check } from 'lucide-react';
import profilePhoto from '../assets/habibi-profile.jpg';
import { personalInfo } from '../data/portfolioData';

// Custom clean SVGs for GitHub and LinkedIn for build safety
const GithubIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export default function Contact() {
  const [copiedType, setCopiedType] = useState(null);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const defaultWaText = encodeURIComponent(
    'Halo Habibi, saya ingin mendiskusikan peluang proyek / konsultasi strategi digital untuk bisnis saya.'
  );

  return (
    <section id="contact" className="py-20 sm:py-24 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Executive Portrait Anchor */}
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-zinc-300 mx-auto mb-4 bg-zinc-200">
          <img
            src={profilePhoto}
            alt={personalInfo.name}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
          Kolaborasi & Konsultasi
        </p>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 tracking-tight mt-1">
          Mari Bangun Pertumbuhan Digital Bersama
        </h2>

        {/* Mandated Closing statement */}
        <p className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto mt-3 leading-relaxed">
          &ldquo;Terbuka untuk diskusi proyek paruh waktu atau konsultasi strategi digital.&rdquo;
        </p>

        {/* Big WhatsApp CTA Button */}
        <div className="mt-8">
          <a
            href={`https://wa.me/${personalInfo.phone}?text=${defaultWaText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-xs transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Hubungi Saya via WhatsApp</span>
          </a>
          <p className="text-xs text-zinc-500 mt-2">
            Respon langsung dalam hari kerja • Nomor: {personalInfo.phoneFormatted}
          </p>
        </div>

        {/* Direct Channels Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {/* WhatsApp Card */}
          <div className="p-4 rounded-lg bg-white border border-zinc-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-zinc-600" />
              <div>
                <span className="text-[11px] text-zinc-500 block">WhatsApp</span>
                <span className="text-xs font-semibold text-zinc-900">{personalInfo.phoneFormatted}</span>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
              className="p-1 text-zinc-400 hover:text-zinc-700 rounded"
              title="Salin nomor"
              aria-label="Salin nomor WhatsApp"
            >
              {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Email Card */}
          <div className="p-4 rounded-lg bg-white border border-zinc-200 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-zinc-600" />
              <div>
                <span className="text-[11px] text-zinc-500 block">Email</span>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs font-semibold text-zinc-900 hover:underline truncate max-w-[150px] block"
                >
                  {personalInfo.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => copyToClipboard(personalInfo.email, 'email')}
              className="p-1 text-zinc-400 hover:text-zinc-700 rounded"
              title="Salin email"
              aria-label="Salin alamat email"
            >
              {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* LinkedIn & GitHub Card */}
          <div className="p-4 rounded-lg bg-white border border-zinc-200 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-zinc-500 block">Jejaring</span>
              <span className="text-xs font-semibold text-zinc-900">LinkedIn & GitHub</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {copiedType && (
          <p className="mt-3 text-xs text-emerald-600 font-medium">
            Tersalin ke clipboard!
          </p>
        )}
      </div>
    </section>
  );
}
