// Single source of truth for the website and the CV PDF.
// Every claim here should be something the owner can back up when asked.

export const profile = {
  name: 'Habibi Nurrohman',
  role: 'Founder Hanucazari Digital',
  headline: 'Web Developer & Digital Marketer',
  intro:
    'Saya membangun website, aplikasi kasir, dan sistem pencatatan untuk usaha lokal, lalu membantu usaha itu mendapat pembeli lewat iklan dan WhatsApp.',
  about: [
    'Saya lulusan Manajemen Informatika Politeknik LP3I dan sudah bekerja sejak 2020: memimpin tim sales lapangan, mengurus operasional showroom, mengawasi proyek pemasangan batu alam, sampai memegang iklan dan website untuk bisnis keluarga.',
    'Dari situ saya belajar bahwa usaha kecil jarang butuh teknologi yang rumit. Mereka butuh pencatatan yang rapi, halaman yang bisa ditemukan di Google, dan alur WhatsApp yang menutup penjualan. Itu yang sekarang saya kerjakan lewat Hanucazari Digital.',
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
    title: 'Website katalog dan mesin pencari prospek',
    summary:
      'Toko batu alam di Tasikmalaya yang sebelumnya hanya mengandalkan pembeli datang langsung. Saya membangun website katalog lengkap dengan halaman produk, artikel, halaman kampanye iklan, formulir konsultasi, dan panel admin untuk mengelola semuanya.',
    result: 'Bersama kampanye Meta Ads yang saya jalankan, omzet toko naik sekitar 150%.',
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
      'Nota penjualan sebelumnya ditulis tangan dan stok sering selisih. Sistem ini mencatat nota, penawaran harga, piutang pelanggan, buku kas tunai dan bank, lalu menyusun laporan harian dan bulanan yang bisa diunduh ke Excel.',
    result: 'Dipakai setiap hari oleh pemilik dan admin toko.',
    stack: ['Laravel 13', 'MySQL', 'Tailwind CSS'],
    note: 'Aplikasi internal, tidak dibuka untuk publik.',
  },
  {
    id: 'teh-lia',
    client: 'Teh Lia, Dadaha',
    year: '2026',
    kind: 'Aplikasi kasir',
    title: 'Kasir dan stok untuk kios makanan',
    summary:
      'Aplikasi kasir untuk kios cemilan: transaksi di layar sentuh, buka dan tutup shift, pengelolaan menu, stok bahan, dan laporan penjualan per hari.',
    result: 'Berjalan di kios sejak Oktober 2026.',
    stack: ['Laravel 13', 'Sanctum', 'React 19', 'Zustand'],
    link: { href: 'https://cemilansigaiia.my.id', label: 'cemilansigaiia.my.id' },
  },
  {
    id: 'tsy-bag',
    client: 'TSY Bag',
    year: '2026',
    kind: 'Landing page',
    title: 'Halaman penjualan produsen tas',
    summary:
      'Produsen tas di Tasikmalaya yang ramai di marketplace dan live streaming, tapi belum punya halaman sendiri. Saya menyusun naskah penjualan dan membangun halaman yang mengarahkan pembeli ke WhatsApp dan toko resminya.',
    stack: ['React', 'Vite', 'Tailwind CSS', 'Vercel'],
    link: { href: 'https://tsybag.vercel.app', label: 'tsybag.vercel.app' },
  },
  {
    id: 'ks-motor',
    client: 'KS Motor Tasikmalaya',
    year: '2024 - 2025',
    kind: 'Iklan dan penjualan',
    title: 'Iklan mobil bekas yang berujung ke showroom',
    summary:
      'Penjualan dari kanal digital mentok di 5 unit per bulan karena banyak penanya yang tidak serius. Saya menjalankan Meta Ads dengan anggaran sekitar Rp 3 juta per bulan, membuat video inspeksi unit, dan menyusun skrip WhatsApp untuk menyaring calon pembeli sebelum diajak survei.',
    result: 'Penjualan dari kanal digital naik dari maksimal 5 unit menjadi 13 unit per bulan.',
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
      'Menyusun identitas merek, paket layanan, dan platform web studio.',
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
      'Menjalankan Meta Ads berbasis WhatsApp dan memproduksi video produk sendiri; omzet toko naik sekitar 150%.',
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
      'Menaikkan penjualan mobil bekas dari kanal digital dari maksimal 5 menjadi 13 unit per bulan dengan anggaran Meta Ads sekitar Rp 3 juta per bulan.',
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
      'Membangun website company profile dengan Laravel.',
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
      'Memeriksa kelengkapan STNK, BPKB, dan faktur sebelum serah terima unit.',
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
      'Memimpin 2 tim sales lapangan (10+ orang) untuk penjualan door-to-door IndiHome dan mengawasi target bulanan.',
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
    items: ['Meta Ads (Facebook dan Instagram)', 'Google Analytics 4', 'Google Tag Manager', 'Google Search Console', 'SEO on-page'],
  },
  {
    id: 'sales',
    group: 'Penjualan',
    items: ['Closing via WhatsApp', 'Kualifikasi prospek', 'Penjualan konsultatif', 'Memimpin tim sales lapangan'],
  },
  {
    id: 'ops',
    group: 'Operasional dan konten',
    items: ['Penyusunan SOP', 'Pengawasan proyek lapangan', 'Administrasi dan kas', 'Video produk (CapCut)'],
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
