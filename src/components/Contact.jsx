import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Copy, Check, FileText, MapPin, Clock } from 'lucide-react';
import profilePhoto from '../assets/habibi-profile.jpg';
import { personalInfo } from '../data/portfolioData';

// Custom clean SVGs for Instagram, Facebook, and LinkedIn for build safety
const InstagramIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const FacebookIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const LinkedinIcon = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.92 0-1.66.74-1.66 1.66s.74 1.66 1.66 1.66 1.66-.74 1.66-1.66-.74-1.66-1.66-1.66z"/>
  </svg>
);

export default function Contact({ onOpenResume }) {
  const [copiedType, setCopiedType] = useState(null);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  const waUrl = `https://wa.me/${personalInfo.phone}?text=${encodeURIComponent(
    'Halo Habibi, saya melihat portofolio Anda dan tertarik mendiskusikan peluang proyek / strategi pertumbuhan digital.'
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 text-left">
          <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">
            Inisiasi Kolaborasi
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight mt-1">
            Siap Berdiskusi & Mengakselerasi Pertumbuhan
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 mt-2 leading-relaxed">
            Terbuka untuk konsultasi strategi digital, implementasi website & sistem internal, proyek paruh waktu asinkronus, serta peran strategis Digital Growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start text-left">
          {/* Main Direct Action Card */}
          <div className="lg:col-span-7 bg-zinc-50 rounded-xl border border-zinc-200 p-6 sm:p-8">
            <div className="flex items-center gap-3.5 pb-6 border-b border-zinc-200">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-zinc-200 border border-zinc-300 flex-shrink-0">
                <img
                  src={profilePhoto}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-zinc-900 leading-tight">
                  {personalInfo.name}
                </h3>
                <p className="text-xs text-blue-600 font-medium">
                  {personalInfo.headline}
                </p>
              </div>
            </div>

            <div className="py-6 space-y-4 text-xs sm:text-sm text-zinc-600 leading-relaxed">
              <p>
                Saya bekerja secara <strong>asinkronus penuh</strong> dengan dokumentasi terstruktur dan eksekusi presisi. Komunikasi harian dilakukan via pesan tertulis dan pembaruan hasil terukur, memastikan efisiensi waktu kerja maksimal.
              </p>
              <div className="p-3.5 rounded-lg bg-white border border-zinc-200 flex items-start gap-2.5 text-xs text-zinc-600">
                <Clock className="w-4 h-4 text-zinc-400 mt-0.5 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-zinc-900 block">Fokus Waktu Kerja (Deep Work):</span>
                  Fleksibel & asinkronus, diprioritaskan pada sesi malam (19.30 – 22.30 WIB) dan subuh untuk pengembangan kode & pengelolaan kampanye iklan.
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-2xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Mulai Diskusi via WhatsApp</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-semibold text-zinc-700 hover:text-zinc-900 bg-white hover:bg-zinc-100 border border-zinc-200 rounded-lg transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-zinc-500" />
                <span>Buka Ringkasan CV (ATS)</span>
              </button>
            </div>
          </div>

          {/* Quick Contact & Social Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* WhatsApp Card */}
            <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-white border border-zinc-200 text-emerald-600">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-500 block">WhatsApp / Telepon</span>
                  <span className="text-xs font-semibold text-zinc-900 font-mono">
                    {personalInfo.phoneFormatted}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.phone, 'phone')}
                className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-white rounded border border-transparent hover:border-zinc-200 transition-colors cursor-pointer"
                title="Salin nomor WhatsApp"
              >
                {copiedType === 'phone' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Email Card */}
            <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-white border border-zinc-200 text-blue-600">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-500 block">Email Resmi</span>
                  <span className="text-xs font-semibold text-zinc-900 font-mono">
                    {personalInfo.email}
                  </span>
                </div>
              </div>
              <button
                onClick={() => handleCopy(personalInfo.email, 'email')}
                className="p-1.5 text-zinc-500 hover:text-zinc-900 hover:bg-white rounded border border-transparent hover:border-zinc-200 transition-colors cursor-pointer"
                title="Salin alamat email"
              >
                {copiedType === 'email' ? (
                  <Check className="w-4 h-4 text-emerald-600" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded bg-white border border-zinc-200 text-zinc-600">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] text-zinc-500 block">Domisili</span>
                  <span className="text-xs font-semibold text-zinc-900">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Network Card */}
            <div className="p-4 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-zinc-500 block">Jejaring Sosial</span>
                <span className="text-xs font-semibold text-zinc-900">
                  Instagram • Facebook • LinkedIn
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <a
                  href={personalInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-zinc-600 hover:text-pink-600 hover:bg-white rounded transition-colors"
                  aria-label="Instagram Personal"
                  title="Instagram: @hbibinrhmnn"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.instagramBrand}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-zinc-600 hover:text-pink-600 hover:bg-white rounded transition-colors font-mono text-[11px] font-bold"
                  aria-label="Instagram Brand Hanucazari"
                  title="Instagram Brand: @hanucazari.id"
                >
                  HZ
                </a>
                <a
                  href={personalInfo.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-zinc-600 hover:text-blue-600 hover:bg-white rounded transition-colors"
                  aria-label="Facebook"
                  title="Facebook: Habibi Nurrohman"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 text-zinc-600 hover:text-blue-700 hover:bg-white rounded transition-colors"
                  aria-label="LinkedIn"
                  title="LinkedIn: Habibi Nurrohman"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
