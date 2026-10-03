import React from 'react';
import { ArrowDown, MessageCircle, CheckCircle2 } from 'lucide-react';
import profilePhoto from '../assets/habibi-profile.jpg';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const waUrl = `https://wa.me/${personalInfo.phone}?text=${encodeURIComponent(
    'Halo Habibi, saya melihat portofolio Anda dan ingin berdiskusi mengenai proyek atau strategi digital.'
  )}`;

  return (
    <section id="about" className="pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-zinc-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Executive Narrative */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-700 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Tersedia untuk Konsultasi & Kolaborasi Proyek</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-blue-600">
                {personalInfo.headline}
              </p>
            </div>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-zinc-600 leading-relaxed font-normal">
              {personalInfo.subheadline}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-lg shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Hubungi Saya via WhatsApp</span>
              </a>

              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-zinc-700 hover:text-zinc-900 bg-zinc-100 hover:bg-zinc-200 active:bg-zinc-300 border border-zinc-200 rounded-lg transition-colors"
              >
                <span>Lihat Studi Kasus</span>
                <ArrowDown className="w-4 h-4 text-zinc-500" />
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-4 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-zinc-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Web Dev & Internal Apps</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Meta Ads WhatsApp Funnel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Data-Driven ROI Focus</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Studio Portrait */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm sm:max-w-md">
              <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-3 sm:p-4 shadow-sm">
                {/* Photo Frame */}
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] bg-zinc-200">
                  <img
                    src={profilePhoto}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/20 to-transparent p-4 text-white">
                    <p className="text-base font-semibold leading-tight text-white">{personalInfo.name}</p>
                    <p className="text-xs text-zinc-300 mt-0.5">Digital Growth & Operations Lead</p>
                  </div>
                </div>

                {/* Direct Verification Metrics Under Photo */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-left">
                  <div className="p-3 rounded-lg bg-white border border-zinc-200">
                    <span className="text-[11px] font-medium text-zinc-500 block">Batu Alam Halfa</span>
                    <span className="text-base font-bold text-zinc-900 block mt-0.5">+100% Omset</span>
                    <span className="text-[11px] text-emerald-600 font-medium">Rp 130 Jt/Bulan</span>
                  </div>

                  <div className="p-3 rounded-lg bg-white border border-zinc-200">
                    <span className="text-[11px] font-medium text-zinc-500 block">Showroom KS Motor</span>
                    <span className="text-base font-bold text-zinc-900 block mt-0.5">5–13 Closing</span>
                    <span className="text-[11px] text-blue-600 font-medium">Unit Mobil / Bulan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
