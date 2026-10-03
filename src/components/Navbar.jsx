import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import profilePhoto from '../assets/habibi-profile.jpg';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ scrolled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Tentang', href: '#about' },
    { label: 'Metrik', href: '#stats' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Studi Kasus', href: '#portfolio' },
    { label: 'Kontak', href: '#contact' },
  ];

  const waUrl = `https://wa.me/${personalInfo.phone}?text=${encodeURIComponent(
    'Halo Habibi, saya melihat portofolio Anda dan ingin berdiskusi mengenai proyek / strategi bisnis digital.'
  )}`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-zinc-200 py-3 shadow-xs'
          : 'bg-white/80 backdrop-blur-sm border-b border-zinc-100 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand & Mini Profile */}
          <a
            href="#about"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border border-zinc-200 bg-zinc-100 flex-shrink-0 group-hover:border-zinc-400 transition-colors">
              <img
                src={profilePhoto}
                alt={personalInfo.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-900 tracking-tight leading-none flex items-center gap-2">
                {personalInfo.name}
              </div>
              <p className="text-[12px] text-zinc-500 font-normal mt-0.5">
                Technical Marketer & Operations
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Direct CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-zinc-900 bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 rounded-md border border-zinc-200 transition-colors"
            >
              <span>Konsultasi WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 text-xs font-medium text-zinc-900 bg-zinc-100 border border-zinc-200 rounded-md"
            >
              WhatsApp
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-md"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-zinc-100 mt-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
              >
                <span>Hubungi via WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
