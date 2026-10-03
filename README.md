# Portfolio & Interactive CV - Habibi Nurrohman

Website portofolio / CV interaktif dan responsif (**Mobile-First**) yang dirancang khusus untuk **Habibi Nurrohman**, seorang **Digital Growth & Operations Specialist | Technical Marketer**.

Desain difokuskan pada **tingkat konversi (conversion-focused)**, minimalis, modern, dan menonjolkan pencapaian berbasis data (*data-driven achievements*).

---

## 🚀 Tech Stack

- **Framework & Build Tool:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/) (dengan custom fail-safe SVG untuk icon brand)
- **Deployment Target:** [Vercel](https://vercel.com/) (Static Single Page Application, Zero-Config)

---

## ✨ Fitur & Struktur Komponen

1. **Sticky Header & Responsive Navigation:**
   - Logo HN dengan status badge *"Open to Projects"* (indikator pulse hijau).
   - Menu navigasi cepat (*Beranda, Pengalaman, Keahlian, Studi Kasus, Kontak*).
   - Tombol langsung WhatsApp di header desktop & mobile.
   - Hamburger menu responsif dengan slide down halus untuk perangkat mobile.

2. **Hero Section (Header):**
   - Nama: **Habibi Nurrohman**
   - Headline Utama: **Digital Growth & Operations Specialist | Technical Marketer**
   - Sub-headline: *"Membantu bisnis skala lokal dan high-ticket bertumbuh melalui ekosistem digital terintegrasi (Web Development) dan pemasaran berbasis data (Performance Marketing)."*
   - CTA Primary: **"Hubungi Saya via WhatsApp"** (menghubungkan langsung ke WhatsApp 0817-7680-0129 dengan pesan pembuka sopan).
   - CTA Secondary: **"Lihat Studi Kasus"** (smooth scroll ke bagian portofolio).
   - Console Mockup Widget: Visualisasi metrik bisnis *live-feel* yang memadukan kode dan performa bisnis.

3. **Statistik Ringkas (Social Proof Bar):**
   - **100% Peningkatan Omset** (Bisnis Batu Alam lokal).
   - **5-13 Unit Closing/Bulan** (Showroom KS Motor).
   - **4+ Tahun Pengalaman** (Web Development & Marketing).

4. **Experience Section (Track Record Profesional):**
   - **Digital Growth & Operations Lead @ Batu Alam Halfa Barokah** (Jan 2026 - Sekarang)
     - Peningkatan omset ~100% (dari Rp 50-70 juta menjadi Rp 130 juta/bulan).
     - Pembangunan ekosistem web khusus (`batualamhalfabarokah.com`) & aplikasi kasir/operasional internal.
     - Pengelolaan kampanye Meta Ads (WhatsApp Conversion).
   - **Digital Marketing Specialist @ KS Motor Tasikmalaya** (Jun 2024 - Mei 2025)
     - Penjualan 5-13 unit mobil bekas per bulan secara konsisten.
     - Pengelolaan budget Meta Ads Rp 3 juta/bulan untuk konversi high-ticket.
     - Optimalisasi saluran WhatsApp & kualifikasi prospek survei showroom.

5. **Skills Section (Interactive Filter & Categories):**
   - Filter interaktif: *Semua*, *Technical Stack*, dan *Marketing & Growth*.
   - **Technical Stack:** React, Tailwind CSS, Laravel, AI-Assisted Workflow (Cursor/Claude), cPanel, REST API, Git.
   - **Marketing & Growth:** Meta Ads, Google Analytics 4, Tag Manager, Copywriting, WhatsApp Closing, Bisnis Operasional, CPL Optimization.

6. **Featured Projects (Studi Kasus Lengkap):**
   - **Studi Kasus 1:** *Digitalisasi Bisnis Batu Alam Lokal (Halfa Barokah)* — Tantangan, Solusi, Hasil Lonjakan Omset Rp 130 Juta/Bulan, Tech Tags & tombol diskusi WhatsApp.
   - **Studi Kasus 2:** *Periklanan Otomotif High-Ticket (KS Motor)* — Tantangan penjualan mobil bekas, Solusi Meta Ads Rp 3 Jt/Bln, Hasil 5-13 closing/bulan, Tech Tags & tombol diskusi strategi.

7. **Footer & Contact Section (High-Conversion Closing):**
   - Pesan penutup: *"Terbuka untuk diskusi proyek paruh waktu atau konsultasi strategi digital."*
   - Pemilih Topik Diskusi Cepat (*Web & Sistem*, *Meta Ads*, *Konsultasi Growth*) yang otomatis menyesuaikan pesan WhatsApp.
   - Tombol CTA WhatsApp Utama berukuran besar.
   - Saluran kontak lengkap (WhatsApp, Email, LinkedIn, GitHub) dengan fitur **1-Click Copy ke Clipboard** beserta toast alert.

8. **Floating WhatsApp Button:**
   - Tombol mengambang di pojok kanan bawah untuk memastikan pengunjung selalu memiliki akses 1-tap menghubungi Habibi.

---

## 🛠️ Cara Menjalankan di Lokal (Development)

Pastikan Node.js (v18+) sudah terpasang di komputer Anda.

```bash
# 1. Masuk ke folder proyek
cd "d:\Habibi\website habibi"

# 2. Pasang dependensi (jika belum)
npm install

# 3. Jalankan server lokal
npm run dev
```

Buka browser dan akses alamat yang tertera (biasanya `http://localhost:5173`).

---

## 📦 Cara Build Proyek

Untuk memverifikasi atau menghasilkan file statis siap produksi:

```bash
npm run build
```

Hasil build berada di dalam folder `dist/`.

---

## 🌐 Panduan Deploy Gratis ke Vercel

Proyek ini telah dikonfigurasi dengan file `vercel.json` dan siap di-deploy langsung secara gratis:

### Opsi A: Deploy via GitHub & Vercel Dashboard (Paling Direkomendasikan)
1. Buat repository baru di GitHub (misal: `portfolio-habibi`).
2. Push source code proyek ini ke repository GitHub Anda:
   ```bash
   git init
   git add .
   git commit -m "feat: initial interactive portfolio Habibi Nurrohman"
   git branch -M main
   git remote add origin https://github.com/<username-anda>/portfolio-habibi.git
   git push -u origin main
   ```
3. Buka dashboard [Vercel](https://vercel.com/) dan login (bisa menggunakan akun GitHub).
4. Klik tombol **"Add New..."** -> **"Project"**.
5. Pilih repository `portfolio-habibi` yang baru saja di-push.
6. Vercel akan otomatis mendeteksi konfigurasi:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
7. Klik **"Deploy"**. Dalam hitungan detik website sudah online dan Anda mendapatkan URL gratis (misal: `https://portfolio-habibi.vercel.app`).

### Opsi B: Deploy via Vercel CLI
```bash
# Install Vercel CLI global (jika belum)
npm i -g vercel

# Login dan deploy
vercel
```

---

## 📝 Lisensi & Hak Cipta
© 2026 Habibi Nurrohman. All rights reserved.
