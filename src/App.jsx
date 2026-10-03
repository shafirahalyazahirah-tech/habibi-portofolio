import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Award,
  BarChart3,
  Building2,
  Check,
  CheckCircle2,
  Code2,
  Copy,
  ExternalLink,
  Globe,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  Sparkles,
  Target,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();


// Custom SVG Icons for GitHub & LinkedIn to guarantee 100% build reliability
const GithubIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const LinkedinIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

// Format WhatsApp link with custom message
const getWhatsAppUrl = (customText = '') => {
  const phone = '6281776800129';
  const defaultText = 'Halo Habibi, saya melihat portofolio Anda dan ingin berdiskusi mengenai proyek / strategi digital.';
  const message = encodeURIComponent(customText || defaultText);
  return `https://wa.me/${phone}?text=${message}`;
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedType, setCopiedType] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('web-system');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const navLinks = [
    { label: 'Beranda', href: '#home' },
    { label: 'Pengalaman', href: '#experience' },
    { label: 'Keahlian', href: '#skills' },
    { label: 'Studi Kasus', href: '#portfolio' },
    { label: 'Kontak', href: '#contact' },
  ];

  const quickTopics = [
    {
      id: 'web-system',
      title: 'Digitalisasi Web & Sistem Internal',
      description: 'Membangun ekosistem web cepat, aplikasi operasional/kasir, dan integrasi data.',
      waText: 'Halo Habibi, saya tertarik untuk konsultasi pembuatan Website / Sistem Operasional Internal untuk bisnis saya.',
    },
    {
      id: 'meta-ads',
      title: 'Optimasi Meta Ads & High-Ticket Leads',
      description: 'Menekan CPL, menaikkan konversi WhatsApp leads, dan strategi copywriting berorientasi ROI.',
      waText: 'Halo Habibi, saya ingin mendiskusikan strategi periklanan Meta Ads dan optimasi funnel WhatsApp bisnis saya.',
    },
    {
      id: 'consulting',
      title: 'Konsultasi Digital Growth & Operasional',
      description: 'Audit proses bisnis, digitalisasi alur kerja, dan strategi peningkatan omset berbasis data.',
      waText: 'Halo Habibi, saya ingin berkonsultasi mengenai strategi Digital Growth dan efisiensi operasional bisnis.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. STICKY HEADER & NAVBAR
      ───────────────────────────────────────────────────────────── */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
            : 'bg-white/80 backdrop-blur-sm border-b border-slate-200/50 py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Personal Brand */}
          <a
            href="#home"
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              HN
            </div>
            <div>
              <div className="font-bold text-slate-900 tracking-tight flex items-center gap-2">
                Habibi Nurrohman
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1"></span>
                  Open to Projects
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">Digital Growth & Technical Marketer</p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-100/80 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-sm hover:shadow-md hover:shadow-blue-600/20 transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center p-2 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
              aria-label="Kontak WhatsApp"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-4 pt-3 pb-5 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Navigasi Halaman</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse mr-1"></span>
                Tersedia untuk Proyek
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* ─────────────────────────────────────────────────────────────
            2. HERO SECTION
        ───────────────────────────────────────────────────────────── */}
        <section
          id="home"
          className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60"
        >
          {/* Subtle Ambient Background Gradients */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-tr from-blue-100/40 via-indigo-100/30 to-transparent blur-3xl pointer-events-none -z-10" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Headline & Action Buttons */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {/* Persona Status Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>Technical Marketer & Operations Specialist</span>
                </div>

                {/* Name & Headline */}
                <div className="space-y-3">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    Habibi Nurrohman
                  </h1>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900 bg-clip-text text-transparent">
                    Digital Growth & Operations Specialist | Technical Marketer
                  </h2>
                </div>

                {/* Sub-headline */}
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                  Membantu bisnis skala lokal dan high-ticket bertumbuh melalui ekosistem digital terintegrasi{' '}
                  <span className="font-semibold text-slate-800">(Web Development)</span> dan pemasaran berbasis data{' '}
                  <span className="font-semibold text-slate-800">(Performance Marketing)</span>.
                </p>

                {/* CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                  {/* CTA 1 Primary: WhatsApp */}
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl shadow-lg shadow-blue-600/25 transition-all duration-200 group"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    <span>Hubungi Saya via WhatsApp</span>
                  </a>

                  {/* CTA 2 Secondary: Lihat Studi Kasus */}
                  <a
                    href="#portfolio"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-700 hover:text-blue-600 bg-white hover:bg-slate-50 border border-slate-300 hover:border-blue-300 rounded-xl shadow-sm transition-all duration-200 group"
                  >
                    <span>Lihat Studi Kasus</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </a>
                </div>

                {/* Quick Trust Badges */}
                <div className="pt-4 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Full-Stack & Ads Synergized</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Direct WhatsApp Funnel</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Proven Revenue Impact</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Card / Growth Dashboard Mockup */}
              <div className="lg:col-span-5">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  {/* Backdrop glow */}
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-20 transition duration-1000 group-hover:opacity-100"></div>

                  <div className="relative bg-white rounded-2xl border border-slate-200/90 shadow-xl overflow-hidden">
                    {/* Top Console Bar */}
                    <div className="px-5 py-3.5 bg-slate-900 text-slate-200 flex items-center justify-between border-b border-slate-800">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                        <span className="ml-2 font-mono text-xs text-slate-400 font-semibold">growth-engine.ts</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        OPTIMIZED
                      </div>
                    </div>

                    {/* Console Metric Body */}
                    <div className="p-6 space-y-5">
                      {/* Metric 1 */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-blue-200 transition-colors">
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-medium">
                          <span className="flex items-center gap-1.5">
                            <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
                            Pertumbuhan Omset (Batu Alam Halfa Barokah)
                          </span>
                          <span className="font-bold text-emerald-600">+100% Growth</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold text-slate-900">Rp 130 Juta/Bln</span>
                          <span className="text-xs text-slate-400 line-through">Rp 50-70 Jt</span>
                        </div>
                        <div className="mt-2 w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-blue-600 h-1.5 rounded-full w-full"></div>
                        </div>
                      </div>

                      {/* Metric 2 */}
                      <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 hover:border-blue-200 transition-colors">
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-1 font-medium">
                          <span className="flex items-center gap-1.5">
                            <Target className="w-3.5 h-3.5 text-indigo-600" />
                            Closing Otomotif High-Ticket (KS Motor)
                          </span>
                          <span className="font-bold text-blue-600">Konsisten</span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold text-slate-900">5 - 13 Unit / Bulan</span>
                          <span className="text-xs text-slate-500 font-medium">Budget: Rp 3 Jt/Bln</span>
                        </div>
                        <div className="mt-2 w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-indigo-600 h-1.5 rounded-full w-5/6"></div>
                        </div>
                      </div>

                      {/* Stack Pills Snapshot */}
                      <div className="pt-1">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2">
                          Ekosistem Integrasi Teknis
                        </p>
                        <div className="flex flex-wrap gap-1.5 font-mono text-[11px]">
                          <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200 font-semibold">
                            React
                          </span>
                          <span className="px-2 py-0.5 rounded bg-sky-50 text-sky-700 border border-sky-200 font-semibold">
                            Tailwind CSS
                          </span>
                          <span className="px-2 py-0.5 rounded bg-red-50 text-red-700 border border-red-200 font-semibold">
                            Laravel
                          </span>
                          <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200 font-semibold">
                            Meta Ads (CAPI)
                          </span>
                          <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 font-semibold">
                            WhatsApp Funnel
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            3. SOCIAL PROOF BAR (STATISTIK RINGKAS)
        ───────────────────────────────────────────────────────────── */}
        <section id="stats" className="relative -mt-6 sm:-mt-8 z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-5 sm:p-7 md:p-8">
            <div className="text-center md:text-left mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Track Record Berbasis Data</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  Pencapaian Nyata di Lapangan (Real Business Metrics)
                </h3>
              </div>
              <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full w-fit mx-auto md:mx-0">
                Data Terverifikasi • 2024 - Sekarang
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-100">
              {/* Stat 1 */}
              <div className="pt-4 md:pt-0 md:px-4 first:px-0 text-center md:text-left group">
                <div className="inline-flex p-3 rounded-xl bg-blue-50 text-blue-600 mb-3 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-blue-600">
                  100% Peningkatan Omset
                </div>
                <p className="font-semibold text-slate-800 text-sm mt-1">Bisnis Batu Alam Lokal</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Skalasi pendapatan dari Rp 50-70 juta menjadi Rp 130 juta/bulan lewat digitalisasi sistem & Meta Ads.
                </p>
              </div>

              {/* Stat 2 */}
              <div className="pt-6 md:pt-0 md:px-4 text-center md:text-left group">
                <div className="inline-flex p-3 rounded-xl bg-indigo-50 text-indigo-600 mb-3 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                  <Award className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-indigo-900">
                  5-13 Unit Closing/Bulan
                </div>
                <p className="font-semibold text-slate-800 text-sm mt-1">Showroom KS Motor</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Konversi penjualan konsisten mobil bekas high-ticket dengan efisiensi budget iklan Rp 3 juta/bulan.
                </p>
              </div>

              {/* Stat 3 */}
              <div className="pt-6 md:pt-0 md:pl-4 text-center md:text-left group">
                <div className="inline-flex p-3 rounded-xl bg-amber-50 text-amber-600 mb-3 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all duration-300">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight text-slate-900">
                  4+ Tahun Pengalaman
                </div>
                <p className="font-semibold text-slate-800 text-sm mt-1">Web Dev & Marketing</p>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Sinergi rekayasa frontend modern, otomatisasi sistem operasional, dan kampanye digital performa tinggi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            4. EXPERIENCE SECTION (TIMELINE / GRID CARDS)
        ───────────────────────────────────────────────────────────── */}
        <section id="experience" className="py-20 sm:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Pengalaman Profesional
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Rekam Jejak & Pengalaman Kerja
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Pengalaman langsung memegang kendali pertumbuhan, operasional sistem, dan efisiensi belanja iklan dengan
                tanggung jawab penuh terhadap hasil bisnis.
              </p>
            </div>

            {/* Experience Cards */}
            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Experience 1: Batu Alam Halfa Barokah */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-blue-600"></div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                        Jan 2026 - Sekarang
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Peran Aktif
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2 group-hover:text-blue-600 transition-colors">
                      Digital Growth & Operations Lead
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-slate-700 flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-4 h-4 text-blue-600" />
                      Batu Alam Halfa Barokah
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-slate-400 font-mono">Bisnis Skala Lokal</span>
                    <div className="text-sm font-bold text-emerald-600">+100% Omset Scaling</div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="mt-5 space-y-3.5">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">Meningkatkan omset bisnis lokal hingga ~100%</strong> (dari
                      kisaran Rp 50-70 juta menjadi <strong className="text-emerald-700">Rp 130 juta/bulan</strong>).
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">Membangun ekosistem web khusus</strong> (
                      <a
                        href="https://batualamhalfabarokah.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-semibold underline underline-offset-2 hover:text-blue-800"
                      >
                        batualamhalfabarokah.com
                      </a>
                      ) & <strong className="text-slate-900">aplikasi operasional internal</strong> untuk digitalisasi kasir,
                      stok barang, dan pencatatan order.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">Mengelola kampanye Meta Ads (WhatsApp Conversion)</strong> dengan
                      budget efisien dan copywriting terarah ke calon pembeli lokal maupun kontraktor proyek.
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                    Web Development
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                    Sistem Kasir Internal
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                    Meta Ads (WhatsApp Funnel)
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                    Operasional & Finansial
                  </span>
                </div>
              </div>

              {/* Experience 2: KS Motor Tasikmalaya */}
              <div className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-2 h-full bg-indigo-900"></div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-5 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-800 border border-indigo-200">
                        Jun 2024 - Mei 2025
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        1 Tahun Penuh
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-2 group-hover:text-indigo-900 transition-colors">
                      Digital Marketing Specialist
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-slate-700 flex items-center gap-1.5 mt-0.5">
                      <Building2 className="w-4 h-4 text-indigo-700" />
                      KS Motor Tasikmalaya
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-xs text-slate-400 font-mono">High-Ticket Automotive</span>
                    <div className="text-sm font-bold text-blue-600">5-13 Unit Closing/Bln</div>
                  </div>
                </div>

                {/* Bullet Points */}
                <div className="mt-5 space-y-3.5">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">
                        Menghasilkan penjualan 5-13 unit mobil bekas per bulan secara konsisten
                      </strong>{' '}
                      melalui sistem funnel prospek digital.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">Mengelola budget Meta Ads Rp 3 juta/bulan</strong> untuk konversi
                      produk high-ticket dengan efisiensi Cost Per Lead (CPL) tinggi.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-fail-0 w-5 h-5 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">Optimalisasi saluran komunikasi WhatsApp</strong> dan edukasi
                      prospek (leads) hingga tercipta janji temu dan survei unit langsung di showroom.
                    </p>
                  </div>
                </div>

                {/* Tags */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                    High-Ticket Sales
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                    Meta Ads (FB & IG)
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                    WhatsApp Closing Script
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 font-medium">
                    Lead Qualification
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            5. SKILLS SECTION (PILLS & GRID ICONS)
        ───────────────────────────────────────────────────────────── */}
        <section id="skills" className="py-20 sm:py-24 bg-white border-y border-slate-200/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Kompetensi Utama
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Keahlian Teknis & Pemasaran
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Perpaduan keahlian teknologi rekayasa web modern dengan strategi pertumbuhan bisnis dan efisiensi konversi.
              </p>

              {/* Interactive Category Filter Pills */}
              <div className="mt-7 inline-flex p-1 bg-slate-100 rounded-xl border border-slate-200">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                    activeCategory === 'all'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Semua Keahlian
                </button>
                <button
                  onClick={() => setActiveCategory('tech')}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                    activeCategory === 'tech'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Technical Stack
                </button>
                <button
                  onClick={() => setActiveCategory('marketing')}
                  className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                    activeCategory === 'marketing'
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  Marketing & Growth
                </button>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Category 1: Technical Stack */}
              {(activeCategory === 'all' || activeCategory === 'tech') && (
                <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                          <Code2 className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900">Technical Stack</h3>
                          <p className="text-xs text-slate-500 font-medium">Rekayasa Web, Frontend & Integrasi Sistem</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                        IT & Development
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                      Membangun antarmuka pengguna interaktif, sistem internal yang cepat, dan alur kerja koding modern
                      berbantuan AI untuk produktivitas maksimal.
                    </p>

                    {/* Skill Cards / Pills */}
                    <div className="space-y-3">
                      {/* React */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900">React</span>
                          <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                            SPA & Component Architecture
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Pembuatan aplikasi web interaktif, component-driven, State & Hook lifecycle.
                        </p>
                      </div>

                      {/* Tailwind CSS */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900">Tailwind CSS</span>
                          <span className="text-[11px] font-medium text-sky-600 bg-sky-50 px-2 py-0.5 rounded">
                            Mobile-First & Modern UI
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Desain responsif, clean aesthetic, layout grid/flexbox berkecepatan load tinggi.
                        </p>
                      </div>

                      {/* Laravel */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900">Laravel</span>
                          <span className="text-[11px] font-medium text-rose-600 bg-rose-50 px-2 py-0.5 rounded">
                            Backend MVC & Database
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Struktur arsitektur backend, manajemen database relasional, logika kasir & REST API.
                        </p>
                      </div>

                      {/* AI-Assisted Workflow */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900">
                            AI-Assisted Workflow (Cursor/Claude)
                          </span>
                          <span className="text-[11px] font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded">
                            High-Efficiency Dev
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Akselerasi prototyping, refactoring kode, penyelesaian bug secara cepat dan terarah.
                        </p>
                      </div>

                      {/* cPanel */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-blue-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900">cPanel</span>
                          <span className="text-[11px] font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded">
                            Hosting & Web Ops
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Manajemen DNS, konfigurasi database MySQL, domain, sertifikat SSL, dan deployment web.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200/70 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <span className="font-semibold text-slate-600">Teknologi Pelengkap:</span>
                    <span className="px-2 py-0.5 bg-white rounded border border-slate-200">Git / GitHub</span>
                    <span className="px-2 py-0.5 bg-white rounded border border-slate-200">Vite</span>
                    <span className="px-2 py-0.5 bg-white rounded border border-slate-200">RESTful API</span>
                  </div>
                </div>
              )}

              {/* Category 2: Marketing & Growth */}
              {(activeCategory === 'all' || activeCategory === 'marketing') && (
                <div className="bg-slate-50/80 rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                          <BarChart3 className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg sm:text-xl font-bold text-slate-900">Marketing & Growth</h3>
                          <p className="text-xs text-slate-500 font-medium">Performa Iklan, Analitik & Konversi</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">
                        Growth & Revenue
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 mb-6 leading-relaxed">
                      Menghubungkan traffic digital dengan hasil transaksi nyata melalui penargetan akurat, funnel WhatsApp
                      teruji, dan optimasi operasional.
                    </p>

                    {/* Skill Cards / Pills */}
                    <div className="space-y-3">
                      {/* Meta Ads */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900">Meta Ads</span>
                          <span className="text-[11px] font-medium text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded">
                            FB & IG Conversion
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Setup Pixel, Custom Audience, A/B Testing materi iklan, dan WhatsApp Conversion Campaigns.
                        </p>
                      </div>

                      {/* Google Analytics 4 */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900">Google Analytics 4</span>
                          <span className="text-[11px] font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
                            User Behavior Tracking
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Analisis alur kunjungan web, event tracking, bounce rate, dan evaluasi sumber traffic.
                        </p>
                      </div>

                      {/* Tag Manager */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900">Tag Manager</span>
                          <span className="text-[11px] font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                            GTM Triggers & Pixels
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Deployment tag konversi tanpa menyentuh kode inti, button click tracking, dan data layer.
                        </p>
                      </div>

                      {/* Copywriting */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900">Copywriting</span>
                          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            Direct-Response
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Penyusunan headline iklan persuasif, formulasi penawaran produk bernilai tinggi, dan sales angle.
                        </p>
                      </div>

                      {/* WhatsApp Closing */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900">WhatsApp Closing</span>
                          <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            Lead Nurturing & CRM
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Standardisasi skrip chat respon cepat, teknik follow-up prospek dingin, dan penjadwalan transaksi.
                        </p>
                      </div>

                      {/* Bisnis Operasional */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-sm text-slate-900">Bisnis Operasional</span>
                          <span className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2 py-0.5 rounded">
                            SOP & Workflow
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">
                          Penyelarasan alur pesanan dari chat ke gudang/lapangan, kontrol kasir, dan akurasi inventaris.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-200/70 flex flex-wrap items-center gap-1.5 text-xs text-slate-500 font-mono">
                    <span className="font-semibold text-slate-600">Fokus Metrik:</span>
                    <span className="px-2 py-0.5 bg-white rounded border border-slate-200">CPL Optimization</span>
                    <span className="px-2 py-0.5 bg-white rounded border border-slate-200">Conversion Rate</span>
                    <span className="px-2 py-0.5 bg-white rounded border border-slate-200">High-Ticket ROI</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            6. FEATURED PROJECTS (PORTFOLIO SECTION)
        ───────────────────────────────────────────────────────────── */}
        <section id="portfolio" className="py-20 sm:py-24 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Studi Kasus Unggulan
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Featured Projects & Studi Kasus
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
                Dua studi kasus terperinci yang menggambarkan bagaimana solusi teknologi terpadu dan strategi pemasaran
                berbasis data membuahkan hasil nyata bagi bisnis.
              </p>
            </div>

            {/* Case Studies Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
              {/* Studi Kasus 1: Digitalisasi Bisnis Batu Alam Lokal */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                {/* Header Banner */}
                <div className="p-6 sm:p-8 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200">
                      <Globe className="w-3.5 h-3.5" />
                      Studi Kasus 1 • Web & Operations
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-400">Halfa Barokah</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    Digitalisasi Bisnis Batu Alam Lokal
                  </h3>

                  {/* Impact Highlight Box */}
                  <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-700 mb-1">
                      Hasil Utama (Business Impact)
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-blue-900 leading-snug">
                      Lonjakan omset hingga Rp 130 Juta/Bulan
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Transformasi dari manual ke sistem digital (Website Resmi + Sistem Kasir Internal terintegrasi).
                    </p>
                  </div>
                </div>

                {/* Challenge & Solution details */}
                <div className="px-6 sm:px-8 space-y-4 text-sm text-slate-700 flex-grow">
                  {/* Tantangan */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 mb-2 text-rose-600">
                      <Target className="w-4 h-4" />
                      Tantangan Bisnis
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                      Pencatatan penjualan dan stok barang masih dilakukan secara manual di buku nota. Omset stagnan di
                      angka Rp 50 - 70 Juta/bulan karena jangkauan pemasaran terbatas hanya pada konsumen yang melintas di
                      depan toko fisik.
                    </p>
                  </div>

                  {/* Solusi */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 mb-2 text-blue-600">
                      <Zap className="w-4 h-4" />
                      Solusi yang Diterapkan
                    </h4>
                    <ul className="text-xs sm:text-sm space-y-1.5 text-slate-600 list-disc list-inside">
                      <li>
                        Membangun website resmi cepat & profesional:{' '}
                        <a
                          href="https://batualamhalfabarokah.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-blue-600 hover:underline inline-flex items-center gap-0.5"
                        >
                          batualamhalfabarokah.com
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </li>
                      <li>Mengembangkan sistem kasir & pencatatan operasional internal untuk kontrol stok real-time.</li>
                      <li>
                        Menjalankan Meta Ads bertarget langsung ke kontak WhatsApp dengan penawaran katalog lengkap.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tags & Action Button */}
                <div className="p-6 sm:p-8 pt-4">
                  <div className="mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                      Teknologi & Instrumen
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-xs">
                      <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 font-medium">
                        React
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-sky-50 text-sky-700 border border-sky-200 font-medium">
                        Tailwind CSS
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">Laravel</span>
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">cPanel</span>
                      <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium">
                        Meta Ads
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                        WhatsApp Funnel
                      </span>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl(
                      'Halo Habibi, saya tertarik mendiskusikan studi kasus digitalisasi web & sistem operasional seperti di Batu Alam Halfa Barokah.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 border border-blue-200 rounded-xl transition-all duration-200"
                  >
                    <span>Diskusi Solusi Serupa</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Studi Kasus 2: Periklanan Otomotif High-Ticket (KS Motor) */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
                {/* Header Banner */}
                <div className="p-6 sm:p-8 pb-4">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-800 border border-indigo-200">
                      <Target className="w-3.5 h-3.5" />
                      Studi Kasus 2 • High-Ticket Ads
                    </span>
                    <span className="text-xs font-mono font-medium text-slate-400">KS Motor Tasikmalaya</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-indigo-900 transition-colors">
                    Periklanan Otomotif High-Ticket (KS Motor)
                  </h3>

                  {/* Impact Highlight Box */}
                  <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-indigo-800 mb-1">
                      Hasil Utama (Business Impact)
                    </div>
                    <div className="text-lg sm:text-xl font-extrabold text-indigo-950 leading-snug">
                      5-13 Unit Mobil Closing / Bulan
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1">
                      Mengonversi traffic digital menjadi kunjungan fisik ke showroom dengan CPL rendah dan budget terukur Rp
                      3 Jt/Bln.
                    </p>
                  </div>
                </div>

                {/* Challenge & Solution details */}
                <div className="px-6 sm:px-8 space-y-4 text-sm text-slate-700 flex-grow">
                  {/* Tantangan */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 mb-2 text-rose-600">
                      <Target className="w-4 h-4" />
                      Tantangan Bisnis
                    </h4>
                    <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                      Mobil bekas adalah barang high-ticket dengan nilai ratusan juta rupiah yang menuntut tingkat
                      kepercayaan tinggi. Menjual secara online berisiko menghasilkan banyak pesan tanya-tanya tanpa
                      niat beli serius bila kualifikasi tidak dilakukan secara ketat.
                    </p>
                  </div>

                  {/* Solusi */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider flex items-center gap-1.5 mb-2 text-indigo-700">
                      <Zap className="w-4 h-4" />
                      Solusi yang Diterapkan
                    </h4>
                    <ul className="text-xs sm:text-sm space-y-1.5 text-slate-600 list-disc list-inside">
                      <li>
                        Memaksimalkan anggaran efisien Rp 3 juta/bulan dengan penargetan demografi wilayah Jawa Barat yang
                        presisi.
                      </li>
                      <li>
                        Membuat materi iklan video inspeksi kondisi mobil dan transparansi harga untuk memangkas keraguan
                        pembeli.
                      </li>
                      <li>
                        Menerapkan SOP balasan WhatsApp terstruktur guna menyaring calon pembeli siap survei unit ke showroom.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Tags & Action Button */}
                <div className="p-6 sm:p-8 pt-4">
                  <div className="mb-4">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                      Teknologi & Instrumen
                    </span>
                    <div className="flex flex-wrap gap-1.5 text-xs">
                      <span className="px-2.5 py-0.5 rounded-md bg-indigo-50 text-indigo-700 border border-indigo-200 font-medium">
                        Meta Ads (FB & IG)
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                        High-Ticket Funnel
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                        WhatsApp Closing Script
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-50 text-amber-700 border border-amber-200 font-medium">
                        Direct-Response Copy
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium">
                        Low CPL Optimization
                      </span>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppUrl(
                      'Halo Habibi, saya tertarik mendiskusikan strategi Meta Ads & High-Ticket Funnel seperti di KS Motor.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-indigo-900 hover:text-white bg-indigo-50 hover:bg-indigo-900 border border-indigo-200 rounded-xl transition-all duration-200"
                  >
                    <span>Diskusi Strategi High-Ticket</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            7. FOOTER & CONTACT SECTION
        ───────────────────────────────────────────────────────────── */}
        <section id="contact" className="py-20 sm:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Primary Conversion Box */}
            <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 sm:p-12 md:p-14 text-white shadow-2xl relative overflow-hidden">
              {/* Background ambient ring */}
              <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none"></div>

              <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  Konsultasi & Kerja Sama
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight">
                  Siap Mengakselerasi Pertumbuhan Digital Bisnis Anda?
                </h2>

                {/* Mandated Closing statement */}
                <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium leading-relaxed">
                  &ldquo;Terbuka untuk diskusi proyek paruh waktu atau konsultasi strategi digital.&rdquo;
                </p>

                {/* Interactive Topic Selector */}
                <div className="pt-2 pb-2 text-left">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 text-center mb-3">
                    Pilih Topik Diskusi WhatsApp Anda:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {quickTopics.map((topic) => (
                      <button
                        key={topic.id}
                        type="button"
                        onClick={() => setSelectedTopic(topic.id)}
                        className={`p-3.5 rounded-xl border text-left transition-all ${
                          selectedTopic === topic.id
                            ? 'bg-blue-600/30 border-blue-400 text-white ring-2 ring-blue-500/50'
                            : 'bg-slate-800/60 border-slate-700/80 text-slate-300 hover:bg-slate-800 hover:text-white'
                        }`}
                      >
                        <div className="font-semibold text-xs sm:text-sm text-white mb-1 flex items-center justify-between">
                          {topic.title}
                          {selectedTopic === topic.id && <Check className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />}
                        </div>
                        <p className="text-[11px] text-slate-300 leading-snug">{topic.description}</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Big Primary WhatsApp Button */}
                <div className="pt-4">
                  {(() => {
                    const currentTopic = quickTopics.find((t) => t.id === selectedTopic) || quickTopics[0];
                    return (
                      <a
                        href={getWhatsAppUrl(currentTopic.waText)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-95 rounded-2xl shadow-xl shadow-blue-600/30 hover:shadow-blue-500/50 transition-all duration-200 group"
                      >
                        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        <span>Hubungi Saya via WhatsApp Sekarang</span>
                      </a>
                    );
                  })()}
                  <p className="text-xs text-slate-400 mt-2.5">
                    Respon cepat dalam jam kerja • Nomor: <strong className="text-slate-200">0817-7680-0129</strong>
                  </p>
                </div>

                {/* Direct Contact Cards & Quick Copy */}
                <div className="pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                  {/* WhatsApp Direct */}
                  <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/70 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400 font-medium">WhatsApp / Telp</div>
                        <div className="text-xs font-bold text-white">0817-7680-0129</div>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard('081776800129', 'phone')}
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                      title="Salin Nomor WhatsApp"
                      aria-label="Salin Nomor WhatsApp"
                    >
                      {copiedType === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Email */}
                  <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/70 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400 font-medium">Email Profesional</div>
                        <a
                          href="mailto:habibinurrohman.work@gmail.com"
                          className="text-xs font-bold text-white hover:underline truncate max-w-[140px] sm:max-w-none block"
                        >
                          habibinurrohman.work@gmail.com
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard('habibinurrohman.work@gmail.com', 'email')}
                      className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                      title="Salin Email"
                      aria-label="Salin Email"
                    >
                      {copiedType === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Social Profile Links */}
                  <div className="p-4 rounded-xl bg-slate-800/70 border border-slate-700/70 flex items-center justify-between sm:col-span-2 lg:col-span-1">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                        <Globe className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] text-slate-400 font-medium">Jejaring Sosial</div>
                        <div className="text-xs font-bold text-white">LinkedIn & GitHub</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <a
                        href="https://linkedin.com/in/habibi-nurrohman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                        aria-label="Profil LinkedIn Habibi Nurrohman"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                      <a
                        href="https://github.com/habibinurrohman"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded-lg transition-colors"
                        aria-label="Profil GitHub Habibi Nurrohman"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Copied Toast Alert */}
                {copiedType && (
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs animate-in fade-in">
                    <Check className="w-3.5 h-3.5" />
                    <span>
                      {copiedType === 'phone' ? 'Nomor WhatsApp' : 'Alamat Email'} berhasil disalin ke clipboard!
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ─────────────────────────────────────────────────────────────
          8. FOOTER BAR
      ───────────────────────────────────────────────────────────── */}
      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 text-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                HN
              </div>
              <span className="font-semibold text-slate-200">Habibi Nurrohman</span>
              <span className="text-slate-500">•</span>
              <span>Portfolio & CV Interaktif</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#home" className="hover:text-white transition-colors">
                Beranda
              </a>
              <a href="#experience" className="hover:text-white transition-colors">
                Pengalaman
              </a>
              <a href="#skills" className="hover:text-white transition-colors">
                Keahlian
              </a>
              <a href="#portfolio" className="hover:text-white transition-colors">
                Studi Kasus
              </a>
              <a href="#contact" className="hover:text-white transition-colors">
                Kontak
              </a>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-400">
            <p>© {CURRENT_YEAR} Habibi Nurrohman. All rights reserved.</p>
            <p className="flex items-center gap-1.5">
              <span>Dibangun dengan React, Vite & Tailwind CSS</span>
              <span>•</span>
              <span className="text-emerald-400">Siap Deploy di Vercel</span>
            </p>
          </div>
        </div>
      </footer>

      {/* ─────────────────────────────────────────────────────────────
          9. FLOATING WHATSAPP BUTTON (CONVERSION OPTIMIZED)
      ───────────────────────────────────────────────────────────── */}
      <aside aria-label="Kontak Cepat WhatsApp" className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-xl hover:shadow-emerald-600/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
          aria-label="Chat WhatsApp Langsung"
        >
          <span className="hidden sm:inline-block text-xs font-semibold max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap">
            Chat WhatsApp
          </span>
          <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        </a>
      </aside>
    </div>
  );
}
