import React, { useState } from 'react';
import { MessageCircle, Mail, Phone, Copy, Check } from 'lucide-react';
import profilePhoto from '../assets/habibi-profile.jpg';
import { personalInfo } from '../data/portfolioData';

// Custom clean SVGs for Instagram, Facebook, and LinkedIn
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

          {/* Jejaring Sosial: Instagram, Facebook, LinkedIn */}
          <div className="p-4 rounded-lg bg-white border border-zinc-200 flex items-center justify-between">
            <div>
              <span className="text-[11px] text-zinc-500 block">Jejaring Sosial</span>
              <span className="text-xs font-semibold text-zinc-900">Instagram • Facebook • LinkedIn</span>
            </div>
            <div className="flex items-center gap-1.5">
              <a
                href={personalInfo.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-zinc-600 hover:text-pink-600 hover:bg-zinc-100 rounded transition-colors"
                aria-label="Instagram"
                title="Instagram: @hbibinrhmnn"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-zinc-600 hover:text-blue-600 hover:bg-zinc-100 rounded transition-colors"
                aria-label="Facebook"
                title="Facebook: Habibi Nurrohman"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 text-zinc-600 hover:text-blue-700 hover:bg-zinc-100 rounded transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn: Habibi Nurrohman"
              >
                <LinkedinIcon className="w-4 h-4" />
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
