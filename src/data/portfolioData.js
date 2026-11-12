// Single source of truth for the website and the CV PDF.
// Every claim here should be something the owner can back up when asked.

export const profile = {
  name: 'Habibi Nurrohman',
  role: 'Founder Hanucazari Digital',
  jobTitle: 'Web Developer & Digital Marketer',
  headline: 'Web Developer & Digital Marketer dengan Pengalaman Sales dan Operasional',
  intro:
    'Sejak 2020 saya bekerja langsung di penjualan, operasional showroom, dan pengawasan proyek sebelum membangun sistem digital. Kini saya membuat website katalog, aplikasi dan keuangan, serta kampanye Meta Ads agar usaha kecil punya pencatatan rapi dan alur pembeli lewat WhatsApp.',
  about: [
    'Saya lulusan Manajemen Informatika Politeknik LP3I yang sudah bekerja sejak 2020: memimpin tim sales lapangan, mengurus operasional showroom, mengawasi proyek pemasangan batu alam, hingga membangun website, sistem internal, dan iklan untuk usaha lokal.',
    'Dari situ saya belajar bahwa usaha jarang butuh teknologi yang rumit. Yang dibutuhkan adalah pencatatan rapi, halaman yang mudah ditemukan di Google, dan alur WhatsApp yang membantu penjualan — itulah pendekatan yang saya bawa di Hanucazari Digital maupun saat berkolaborasi dalam tim.',
  ],
  availability: 'Menerima proyek baru dan terbuka untuk tawaran kerja.',
  location: 'Kota Tasikmalaya, Jawa Barat',
  phone: '6281776800129',
  phoneDisplay: '+62 817-7680-0129',
  email: 'habibinr29@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hbibinrhmn/',
  instagram: 'https://www.instagram.com/hbibinrhmnn/',
  hanucazariInstagram: 'https://www.instagram.com/hanucazari.id/',
  site: 'https://habibi-nurrohman-portfolio.vercel.app',
  photo: '/habibi-profile.webp',
};

export const waLink = (text) => `https://wa.me/${profile.phone}?text=${encodeURIComponent(text)}`;

// Work the owner built or ran. `kind` separates software from marketing work.
export const projects = [
  {
    id: 'halfa-web',
    client: 'Batu Alam Halfa Barokah',
    year: '2026',
    kind: 'Website',
    title: 'Website katalog produk dan formulir konsultasi WhatsApp',
    summary:
      'Toko batu alam di Tasikmalaya yang sebelumnya hanya mengandalkan pembeli datang langsung. Saya membangun website katalog produk, artikel edukasi, halaman kampanye iklan, panel admin internal, serta menghubungkannya dengan kampanye Meta Ads dan Google Ads.',
    result:
      'Website tayang aktif dan terhubung dengan kampanye iklan Meta serta Google Ads untuk mengarahkan calon pembeli ke konsultasi WhatsApp.',
    stack: ['Laravel 12', 'Blade', 'Tailwind CSS', 'Alpine.js', 'MySQL'],
    link: { href: 'https://batualamhalfabarokah.com', label: 'batualamhalfabarokah.com' },
  },
  {
    id: 'halfa-keuangan',
    client: 'Batu Alam Halfa Barokah',
    year: '2026',
    kind: 'Aplikasi internal',
    title: 'Sistem penjualan dan keuangan toko',
    summary:
      'Sebelumnya nota penjualan ditulis tangan sehingga rekap piutang dan kas harian harus dihitung ulang manual. Sistem ini menangani pembuatan nota, penawaran harga (RAB), pemantauan piutang pelanggan, pencatatan buku kas tunai dan bank, hingga ekspor laporan harian/bulanan ke Excel.',
    result: 'Berjalan untuk pencatatan operasional internal toko.',
    stack: ['Laravel 13', 'MySQL', 'Tailwind CSS'],
    note: 'Aplikasi internal, tidak dibuka untuk publik.',
  },
  {
    id: 'teh-lia',
    client: 'Cemilan Sigaiia',
    year: '2026',
    kind: 'Aplikasi kasir',
    title: 'Kasir dan stok untuk kios makanan',
    summary:
      'Kios makanan membutuhkan pencatatan transaksi cepat tanpa bergantung hitung manual akhir shift. Saya membangun aplikasi kasir layar sentuh lengkap dengan buka-tutup shift, pemotongan stok otomatis, pengaturan menu/toping, serta laporan omzet harian dan laba kotor untuk pemilik.',
    result: 'Aktif digunakan di gerai Dadaha sejak Oktober 2026.',
    stack: ['Laravel 13', 'Sanctum', 'React 19', 'Zustand'],
    note: 'Aplikasi internal, tidak dibuka untuk publik.',
  },
  {
    id: 'tsy-bag',
    client: 'TSY Bag',
    year: '2026',
    kind: 'Landing page',
    title: 'Halaman penjualan (landing page) produsen tas',
    summary:
      'Produsen tas di Tasikmalaya yang sebelumnya hanya mengandalkan kanal marketplace dan belum memiliki halaman rujukan sendiri. Saya menulis naskah penawaran dan membangun landing page yang merangkum keunggulan produk serta mengarahkan calon pembeli ke WhatsApp dan toko resminya.',
    result:
      'Memberi jalur penawaran mandiri di luar marketplace yang langsung menghubungkan calon pembeli ke WhatsApp dan toko resmi.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    link: { href: 'https://tsybag.vercel.app', label: 'tsybag.vercel.app' },
  },
  {
    id: 'ks-motor',
    client: 'KS Motor Tasikmalaya',
    year: '2024 - 2025',
    kind: 'Riwayat kerja · Iklan & penjualan',
    title: 'Iklan mobil bekas yang berujung ke showroom',
    summary:
      'Banyak calon pembeli dari media sosial hanya bertanya harga tanpa niat datang ke showroom. Selama bertugas sebagai Digital Marketing Specialist, saya mengelola iklan Meta Ads (anggaran sekitar Rp 3 juta/bulan), memproduksi video inspeksi unit (mesin, interior, surat), dan menyusun alur kualifikasi chat WhatsApp sebelum menjadwalkan survei.',
    result:
      'Video inspeksi dan alur kualifikasi WhatsApp membuat calon pembeli yang dijadwalkan survei sudah paham kondisi unit dan kisaran harganya sejak awal.',
    stack: ['Meta Ads', 'WhatsApp', 'CapCut'],
  },
];

export const experience = [
  {
    id: 'hanucazari',
    role: 'Founder & Web Developer',
    company: 'Hanucazari Digital',
    period: '2026 - Sekarang',
    location: 'Tasikmalaya',
    points: [
      'Membangun dan merawat aplikasi untuk klien usaha lokal: kasir dan stok kios makanan (Laravel 13 dan React 19) serta landing page produsen tas (React dan Vite).',
      'Menangani proyek dari wawancara kebutuhan, perancangan, pengembangan, hingga deploy ke cPanel dan Vercel.',
      'Menyusun standar brief, dokumentasi serah terima, dan paket layanan terukur untuk website, aplikasi kasir, dan pengelolaan iklan usaha.',
    ],
  },
  {
    id: 'halfa',
    role: 'Digital Growth & Operations Lead',
    company: 'Batu Alam Halfa Barokah',
    period: 'Jan 2026 - Sekarang',
    location: 'Tasikmalaya',
    points: [
      'Membangun website katalog batualamhalfabarokah.com dengan Laravel, Tailwind CSS, dan MySQL, termasuk panel admin untuk produk, artikel, dan prospek.',
      'Membangun sistem penjualan dan keuangan internal yang menggantikan nota tulis tangan: nota, penawaran, piutang, kas, dan laporan.',
      'Menjalankan kampanye Meta Ads (Click-to-WhatsApp) dan memproduksi konten video produk untuk mendatangkan konsultasi calon pembeli.',
      'Menyusun SOP penanganan prospek WhatsApp dan koordinasi pengiriman pesanan.',
    ],
  },
  {
    id: 'ksmotor',
    role: 'Digital Marketing Specialist',
    company: 'KS Motor Tasikmalaya',
    period: 'Jun 2024 - Mei 2025',
    location: 'Tasikmalaya',
    points: [
      'Mengelola kampanye Meta Ads showroom dengan anggaran sekitar Rp 3 juta/bulan untuk mendatangkan calon pembeli serius ke WhatsApp.',
      'Menyusun skrip kualifikasi WhatsApp untuk menyaring calon pembeli serius sebelum diajak survei ke showroom.',
      'Memproduksi video inspeksi unit: kondisi mesin, interior, dan kelengkapan surat.',
    ],
  },
  {
    id: 'mako-tni',
    role: 'Site Supervisor (kontrak)',
    company: 'Proyek Mako TNI Kota Banjar',
    period: 'Des 2023 - Apr 2024',
    location: 'Kota Banjar',
    points: [
      'Mengawasi pemasangan batu alam seluas 1.000 meter persegi dan distribusi material harian dari gudang ke lokasi.',
      'Mengatur pembagian tugas mandor dan tenaga kerja lapangan; proyek diserahterimakan tepat waktu.',
    ],
  },
  {
    id: 'santri-niaga',
    role: 'Marketing & Web Administrator',
    company: 'PT Santri Niaga (biro umroh)',
    period: 'Apr 2023 - Nov 2023',
    location: 'Tasikmalaya',
    points: [
      'Membangun website company profile biro umroh berbasis Laravel untuk menampilkan informasi paket perjalanan dan formulir kontak jamaah.',
      'Menutup penjualan 4 paket umroh melalui konsultasi langsung dengan keluarga calon jamaah.',
      'Mengelola media sosial dan menyusun template balasan serta SOP tindak lanjut calon jamaah.',
    ],
  },
  {
    id: 'taskindo',
    role: 'Admin Operasional & Media Sosial',
    company: 'Taskindo Motor',
    period: 'Feb 2022 - Des 2022',
    location: 'Tasikmalaya',
    points: [
      'Mengelola administrasi transaksi harian, kas kecil, dan uang muka showroom.',
      'Memeriksa kelengkapan dokumen legalitas unit (STNK, BPKB, faktur) sebelum serah terima untuk mencegah selisih administrasi.',
      'Memotret, mengedit, dan menjadwalkan konten stok mobil di media sosial.',
    ],
  },
  {
    id: 'indihome',
    role: 'Area Sales Manager',
    company: 'PT Ainiyah Indomitra Sejahtera (mitra PT Infomedia Nusantara, IndiHome)',
    period: 'Agu 2020 - Jan 2022',
    location: 'Tasikmalaya',
    points: [
      'Memimpin 2 tim sales lapangan (10+ orang) untuk penjualan door-to-door layanan IndiHome serta mengevaluasi pencapaian target harian dan bulanan.',
      'Melatih teknik canvassing, negosiasi, dan penanganan keberatan pelanggan.',
      'Menyusun laporan produktivitas harian dan berkoordinasi dengan teknisi pemasangan.',
    ],
  },
];

export const skills = [
  {
    id: 'web',
    group: 'Pengembangan web',
    items: ['Laravel dan PHP', 'React dan Vite', 'JavaScript', 'Tailwind CSS', 'MySQL', 'REST API', 'Git', 'cPanel dan Vercel'],
  },
  {
    id: 'marketing',
    group: 'Pemasaran digital',
    items: ['Meta Ads & Meta Conversions API (CAPI)', 'Google Analytics 4 & Tag Manager', 'Google Search Console', 'SEO Teknis & On-Page'],
  },
  {
    id: 'sales',
    group: 'Penjualan',
    items: ['Closing via WhatsApp', 'Kualifikasi prospek', 'Penjualan konsultatif', 'Memimpin tim sales lapangan'],
  },
  {
    id: 'ops',
    group: 'Operasional dan konten',
    items: ['Penyusunan SOP', 'Pengawasan proyek lapangan', 'Administrasi dan kas', 'Produksi & editing video iklan produk (CapCut)'],
  },
];

export const education = {
  degree: 'Ahli Madya Komputer (A.Md.Kom.), Manajemen Informatika',
  school: 'Politeknik LP3I',
  period: '2019 - 2022',
  points: [
    'Nilai A untuk Algoritma dan Struktur Data serta Komputer Terapan.',
    'Tugas akhir dan magang di bidang digitalisasi proses bisnis.',
  ],
};

// `kind: 'cert'` = certification with a credential; `kind: 'event'` = seminar or workshop attendance.
export const certificates = [
  {
    id: 'google-analytics',
    kind: 'cert',
    name: 'Google Analytics Certification',
    issuer: 'Google',
    issued: 'Okt 2025',
    expires: 'Okt 2026',
    expired: true,
    credentialId: '163022780',
    image: '/certificates/cert-google-analytics.jpg',
  },
  {
    id: 'google-offline-sales',
    kind: 'cert',
    name: 'Grow Offline Sales Certification',
    issuer: 'Google',
    issued: 'Okt 2025',
    expires: 'Okt 2026',
    expired: true,
    credentialId: '163507187',
    image: '/certificates/cert-google-offline-sales.jpg',
  },
  {
    id: 'hubspot-digital-marketing',
    kind: 'cert',
    name: 'Digital Marketing Certified',
    issuer: 'HubSpot Academy',
    issued: 'Nov 2025',
    expires: 'Des 2026',
    credentialId: '5a9223bcd3b549d484e9f3d9362e3419',
    image: '/certificates/cert-hubspot-digital-marketing.png',
  },
  {
    id: 'hubspot-social-media',
    kind: 'cert',
    name: 'Social Media Certified',
    issuer: 'HubSpot Academy',
    issued: 'Nov 2025',
    expires: 'Des 2027',
    credentialId: '45793ae5088d4e55afeed5883d2de275',
    image: '/certificates/cert-hubspot-social-media.png',
  },
  {
    id: 'dicoding-javascript',
    kind: 'cert',
    name: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    issued: 'Okt 2022',
    credentialId: '2VX31G853ZYQ',
    verifyUrl: 'https://www.dicoding.com/certificates/2VX31G853ZYQ',
    image: '/certificates/cert-dicoding-javascript.png',
  },
  {
    id: 'dicoding-game-design',
    kind: 'event',
    name: 'Sharing Session Game Design',
    issuer: 'Dicoding x Game Developer Batam',
    issued: 'Okt 2022',
    image: '/certificates/cert-dicoding-game-design.png',
  },
  {
    id: 'lp3i-agility',
    kind: 'event',
    name: 'Seminar Nasional Agility Transformation of Millennials',
    issuer: 'Politeknik LP3I',
    issued: 'Apr 2021',
    image: '/certificates/cert-lp3i-agility.jpg',
  },
];
