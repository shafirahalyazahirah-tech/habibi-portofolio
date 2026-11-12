Status: SUDAH DITERAPKAN di lokal (2026-11-12, belum push/deploy)

# Audit dan Usulan Pembaruan Copywriting Portofolio Habibi Nurrohman

Tanggal audit: 12 November 2026
Target proyek: `HANUCAZARI/website habibi` (tampilan aktif lokal di `http://localhost:4321/`, commit `ef777fc`)
Kerangka kerja: Skill `copywriting` + keselarasan fakta dengan `HANUCAZARI/Hanucazari New Versi/06_Kontrol/14_Register_Klaim_dan_Bukti.md`, `01_Brand_dan_Positioning.md`, `12_Panduan_Suara_dan_Copy.md`, serta `HANUCAZARI/Hanucazari Website Baru/`.

> Catatan penting: Dokumen ini hanya berisi audit dan usulan naskah. **Source code belum diubah.** Sesuai alur kerja skill `copywriting` (Phase 2 — Copy Brief Lock), tinjau dan konfirmasi dulu Bagian 1 (Copy Brief) dan Bagian 5 (Keputusan Owner) sebelum kalimat pengganti dipasang ke kode.

---

## Ringkasan Eksekutif (Temuan Utama)

Audit terhadap seluruh file teks portofolio (`index.html`, `src/data/portfolioData.js`, `src/components/*.jsx`, `src/utils/cvPdf.js`) menemukan **4 masalah utama** yang perlu diperbarui sebelum portofolio disebar ke klien atau rekruter:

1. **Konflik sinyal di Hero (Above the Fold):** Halaman menyasar dua pembaca sekaligus (pemilik usaha dan rekruter), namun tombol utama (`btn-primary`) di `Header.jsx` dan `Hero.jsx` justru `Unduh CV (PDF)` dan baris status menulis `"terbuka untuk tawaran kerja"`. Bagi calon klien Hanucazari, sinyal ini membuat pemilik situs terlihat sedang fokus mencari kerja, bukan siap melayani proyek.
2. **Ketidaksinkronan klaim angka dengan website Hanucazari:** Klaim `+150%` omzet Halfa (`K01`), `5 menjadi 13 unit/bulan` KS Motor (`K02`), dan `"Dipakai setiap hari"` sistem keuangan Halfa (`K04`) masih berstatus **Perlu bukti** di `14_Register_Klaim_dan_Bukti.md`. Di situs baru `Hanucazari Website Baru/src/content/studi-kasus/halfa-barokah.md`, angka tersebut sengaja ditahan, sedangkan di portofolio pribadi masih tampil sebagai fakta.
3. **Dua sertifikat Google sudah habis masa berlaku (Okt 2026):** Per 12 November 2026, `Google Analytics Certification` dan `Grow Offline Sales Certification` (`expires: 'Okt 2026'`) di `Certificates.jsx` dan `cvPdf.js` masih tampil aktif dengan ikon centang hijau (`text-live`) dan tulisan `"berlaku Okt 2025 sampai Okt 2026"`. Di `Hanucazari Website Baru/src/pages/tentang.astro`, keduanya sudah dilepas sesuai `K09`.
4. **Metadata SEO terpotong di Google dan istilah teknis kurang presisi:** Tag `<title>` sepanjang **79 karakter** (batas ideal maksimal 60 karakter) dan `<meta name="description">` sepanjang **205 karakter** (batas ideal 150–160 karakter). Selain itu muncul istilah seperti `"mesin pencari prospek"` (terdengar seperti alat scraper) dan `TSY Bag` (landing page statis) diletakkan di bawah judul `"Sistem yang sedang berjalan"`.

---

## 1. Copy Brief & Asumsi (Phase 1 & 2 — Copy Brief Lock)

Sebelum kalimat pengganti dikunci, berikut ringkasan brief sebagai dasar penulisan semua bagian:

### Copy Brief Summary
- **Tujuan halaman:** Memperkenalkan Habibi Nurrohman secara kredibel kepada dua jalur pembaca tanpa saling melemahkan — meyakinkan pemilik usaha untuk berkonsultasi ke WhatsApp/Hanucazari, sekaligus memudahkan rekruter menilai kecocokan peran dan mengunduh CV ATS.
- **Target audiens:**
  1. **Pemilik usaha / calon klien jasa (Jalur A):** Pemilik usaha di Tasikmalaya/Priangan Timur (batu alam, otomotif, fashion, kuliner/F&B, kontraktor, travel) yang masih mencatat manual atau iklannya belum menghasilkan chat serius. Bahasa yang dipakai: pembeli, chat WA, nota, stok, rapi, tanpa jargon teknis.
  2. **Rekruter / Hiring Manager (Jalur B):** Pencari kandidat posisi Full-Stack Web Developer, Performance Marketer, atau Digital Growth/Operations yang menilai bukti kontribusi riil, stack teknologi, periode kerja jelas, dan CV ATS yang rapi.
- **Proposisi nilai inti (Core Value Proposition):** Developer sekaligus marketer yang membangun sistemnya langsung dari pengalaman lapangan sejak 2020 (sales lapangan, admin showroom, pengawas proyek batu alam, iklan toko) — bukan sekadar membuat tampilan, tetapi alat kerja yang terhubung ke nota, stok, dan chat pembeli.
- **CTA Utama & Sekunder (Usulan perubahan prioritas):**
  - Jika portofolio dipakai sebagai **profil founder/konsultan** (Rekomendasi): CTA Utama = `Lihat portofolio` / `Konsultasi lewat WhatsApp`, CTA Sekunder = `Unduh CV (PDF)` (untuk rekruter).
  - Jika portofolio tetap **seimbang dua jalur** di Hero: CTA Utama (`btn-primary`) = `Lihat portofolio` (netral untuk kedua audiens!), lalu dua jalur aksi (`Diskusi proyek` vs `Unduh CV (PDF)`) dibedakan rapi.
- **Konteks trafik & kesadaran (Traffic & Awareness):** Pengunjung umumnya datang dari link bio Instagram (`@hbibinrhmnn` / `@hanucazari.id`), LinkedIn (`in/hbibinrhmn`), lamaran kerja, atau rujukan langsung (**solution-aware / product-aware**: sudah tahu butuh pembuat web/iklan atau kandidat kerja, tinggal mencari bukti kecocokan dan kepercayaan).

### Asumsi Eksplisit (Wajib Dikonfirmasi Owner)
1. **Arah prioritas portofolio (`ASUMSI`):** Situs ini diposisikan utamanya sebagai **profil profesional Founder Hanucazari Digital** yang tetap membuka pintu bagi tawaran kerja/kolaborasi tertentu — bukan halaman pencari kerja penuh waktu yang berpotensi membuat calon klien ragu soal ketersediaan layanan agensi.
2. **Status klaim `K01`, `K02`, `K04`, `K11` (`ASUMSI`):** Sebelum bukti omzet/penjualan terlampir di `06_Kontrol/bukti/`, naskah publik diutamakan memakai fakta proses/output yang sudah ada buktinya di workspace (atau ditandai `[PERLU BUKTI: Kxx]` apabila owner ingin tetap mempertahankan angkanya dengan melampirkan bukti).
3. **Sertifikat Google (`ASUMSI`):** Karena per 12 Nov 2026 belum ada pembaruan sertifikat Google Analytics & Grow Offline Sales, diasumsikan keduanya belum diperpanjang.
4. **Periode Hanucazari Digital (`ASUMSI`):** Tertulis `'2026 - Sekarang'` di `portfolioData.js:95` (catatan Claude di `COLLABORATION_LOG.md:174` menyebut ini tebakan dari tanggal aset brand), perlu bulan mulai pasti dari owner (`[ISI OWNER]`).

> **Gerbang Konfirmasi Copy Brief (Skill `copywriting`):**
> Apakah ringkasan brief dan keempat asumsi di atas sudah sesuai dengan tujuan yang lu mau, bree? Mohon koreksi atau pilih opsi di Bagian 5 sebelum usulan naskah di bawah dipasang ke kode.

---

## 2. Audit Kepatuhan Fakta & Register Klaim

Tabel berikut membandingkan isi teks portofolio saat ini terhadap dokumen fakta di workspace (`14_Register_Klaim_dan_Bukti.md`, `01_Brand_dan_Positioning.md`, `Hanucazari Website Baru/`, dan `COLLABORATION_LOG.md`).

| Lokasi di Kode | Teks / Fakta Saat Ini | Status di Workspace | Masalah & Penyesuaian Wajib |
|---|---|---|---|
| `portfolioData.js:38,112` & `cvPdf.js:80` | `omzet toko naik sekitar 150%` (Halfa Barokah) | **Perlu bukti (`K01`)**; di `Hanucazari Website Baru` tidak ditampilkan | Bertentangan dengan situs Hanucazari. Pilih: lengkapi bukti periode + izin keluarga, atau ganti ke fakta output riil (katalog produk, artikel SEO, formulir konsultasi WA, kampanye Meta Ads). |
| `portfolioData.js:85,123` & `cvPdf.js:81` | `naik dari maksimal 5 unit menjadi 13 unit per bulan` (KS Motor) | **Perlu bukti (`K02`)** | Butuh rekap bulanan / pernyataan pemilik showroom + izin tulis nama KS Motor, atau ganti narasi proses kualifikasi lead + produksi video inspeksi. |
| `portfolioData.js:49-50` & `cvPdf.js:80` | `stok sering selisih` & `Dipakai setiap hari` (Keuangan Halfa) | **Perlu bukti (`K04`)** | Kalimat ringkasan tidak menjelaskan modul stok; status `"setiap hari"` butuh bukti tangkapan layar/konfirmasi pemakaian harian. |
| `portfolioData.js:73` | `ramai di marketplace dan live streaming` (TSY Bag) | **Perlu bukti (`K11`)** | Klaim `"ramai"` belum ada datanya di workspace; di `14_Register_Klaim_dan_Bukti.md:31` dilarang mengklaim data marketplace klien tanpa bukti & izin. |
| `portfolioData.js:213-231` & `Certificates.jsx:34,38` | Google Analytics & Grow Offline Sales (`expires: 'Okt 2026'`, ikon hijau `text-live`) | **Kedaluwarsa (`K09`)**; sudah dilepas di `tentang.astro` | Hari ini 12 Nov 2026. Menampilkan badge hijau + `"berlaku ... sampai Okt 2026"` menipu pembaca. Wajib diberi label berakhir/kedaluwarsa atau diturunkan sementara. |
| `portfolioData.js:95` | `Hanucazari Digital`: `'2026 - Sekarang'` | Tebakan Claude (`COLLABORATION_LOG.md:174`) | Verifikasi bulan mulai pasti (mis. `Jul 2026 - Sekarang` atau `[ISI OWNER]`) agar tidak terasa mengambang di mata rekruter. |
| `Hero.jsx:54` & `portfolioData.js:67-76` | `TSY Bag` masuk di blok `Sistem yang sedang berjalan` | **Fakta (`K06`)**: TSY Bag adalah landing page statis | Landing page statis lebih tepat disebut `"Proyek yang aktif tayang"` atau dipisahkan labelnya dari aplikasi kasir/katalog dinamis. |
| `portfolioData.js:35` | `Website katalog dan mesin pencari prospek` | **Fakta**: website katalog Laravel dengan form konsultasi WA | Istilah `"mesin pencari prospek"` ambigu (terdengar seperti scraper/search engine). Ganti dengan bahasa yang jelas untuk pemilik usaha & rekruter. |
| `README.md` (proyek) | Menjelaskan fitur lama (modal CV, `html2pdf`, Laravel 11, statistik `+150%`/`+160%`) | Usang (`COLLABORATION_LOG.md:174`) | Tidak tampil ke publik, tetapi perlu disinkronkan setelah revisi copy final disetujui. |

---

## 3. Daftar Pembaruan Copywriting Per Bagian

### 3.1. Metadata SEO & Pratinjau Tautan (`index.html`)

| Elemen & Baris | Teks Sekarang (FAKTA) | Masalah (Skill `copywriting` & SEO) | Usulan Pengganti (REKOMENDASI) |
|---|---|---|---|
| `<title>` (`index.html:6`) | `Habibi Nurrohman \| Web Developer & Digital Marketer, Founder Hanucazari Digital` (**79 kar**) | Kepanjangan (>60 kar), terpotong di hasil pencarian Google dan memadatkan dua peran sekaligus tanpa fokus hasil. | **Opsi A (51 kar):** `Habibi Nurrohman \| Web Developer & Digital Marketer`<br>**Opsi B (50 kar, berorientasi hasil):** `Habibi Nurrohman \| Website, Aplikasi & Iklan Usaha` |
| `<meta name="description">` (`index.html:7`) | `Habibi Nurrohman membangun website, aplikasi kasir, dan sistem pencatatan untuk usaha lokal di Tasikmalaya, lalu membantu usaha itu mendapat pembeli lewat iklan dan WhatsApp. Lihat portofolio dan unduh CV.` (**205 kar**) | Terlalu panjang (>155–160 kar) sehingga terpotong elipsis di Google; menyamakan produk internal & agensi dalam satu kalimat panjang. | **Opsi A (150 kar — seimbang klien & rekruter):** `Portofolio Habibi Nurrohman (Founder Hanucazari Digital). Membangun website, aplikasi kasir, sistem keuangan, dan Meta Ads untuk usaha di Tasikmalaya.`<br>**Opsi B (131 kar — fokus rekruter & ringkas):** `Web Developer & Digital Marketer di Tasikmalaya. Lihat portofolio website, kasir, sistem toko, sertifikasi resmi, dan unduh CV ATS.` |
| `og:description` (`index.html:16`) | `Website, aplikasi kasir, dan sistem pencatatan untuk usaha lokal, plus iklan yang mendatangkan pembeli.` (**103 kar**) | Hanya mengulang fitur; tidak ada ajakan melihat bukti nyata atau CV saat tautan dibagikan di WhatsApp/LinkedIn. | `Website, aplikasi kasir, dan iklan digital untuk usaha lokal. Lihat portofolio nyata dan unduh CV ATS.` (**102 kar**) |

- **Anotasi prinsip:** *Clarity over cleverness* dan pemotongan kata pas panjang SERP (`<= 60` kar untuk title, `<= 155` kar untuk meta description; dihitung lewat skrip Node).

---

### 3.2. Header & Navigasi Atas (`src/components/Header.jsx`)

| Elemen & Baris | Teks Sekarang | Masalah | Usulan Pengganti |
|---|---|---|---|
| Tombol kanan desktop (`Header.jsx:45`) | `<DownloadCvButton label="Unduh CV" />` (gaya `btn-primary` gelap menonjol) | Di halaman paling atas (sticky), satu-satunya tombol utama hanya melayani rekruter. Calon klien pemilik usaha tidak punya jalan pintas langsung ke konsultasi di header. | **Opsi A (Ramah dua audiens):** Ganti tombol header kanan menjadi tautan `#kontak` berlabel **`Hubungi`** atau **`Konsultasi / CV`** (mengantar ke 2 kartu jalur di bawah), sementara tombol `Unduh CV` tetap menonjol di Hero/Kontak.<br>**Opsi B (Jika fokus rekruter):** Pertahankan `Unduh CV`, tetapi ubah gaya di header menjadi `btn-secondary` agar tidak mendominasi tombol portofolio. |

- **Anotasi prinsip:** *One page, balanced primary navigation* — navigasi atas harus netral melayani seluruh segmen pengunjung, bukan hanya satu segmen.

---

### 3.3. Bagian Hero / Above the Fold (`src/components/Hero.jsx` & `src/data/portfolioData.js`)

**Teks Sekarang (`Hero.jsx:12-39` & `portfolioData.js:5-14`):**
- Label atas (`profile.role`): `Founder Hanucazari Digital`
- H1 (`profile.name`): `Habibi Nurrohman`
- Sub-judul (`profile.headline`): `Web Developer & Digital Marketer`
- Paragraf intro (`profile.intro`): `Saya membangun website, aplikasi kasir, dan sistem pencatatan untuk usaha lokal, lalu membantu usaha itu mendapat pembeli lewat iklan dan WhatsApp.`
- Tombol 1 (`btn-secondary`): `Lihat portofolio`
- Tombol 2 (`btn-primary`): `Unduh CV (PDF)`
- Status (`profile.availability`): `Menerima proyek baru dan terbuka untuk tawaran kerja.`

**Masalah Copywriting:**
1. **`profile.headline` masih berupa label jabatan, bukan proposisi nilai berbasis hasil.** Pembaca tidak langsung tahu apa bedanya Habibi dengan ratusan web developer atau advertiser lain.
2. **Hierarki visual tombol terbalik.** Tombol paling kontras (`btn-primary`) adalah `Unduh CV (PDF)`, sedangkan `Lihat portofolio` memakai gaya sekunder (`btn-secondary`). Pengunjung yang belum percaya tidak akan langsung mengunduh CV sebelum melihat bukti kerja dulu.
3. **`profile.availability` mencampur dua sinyal yang bertabrakan.** `"terbuka untuk tawaran kerja"` di samping `"Founder Hanucazari Digital"` bisa membuat calon klien ragu apakah proyek mereka akan terbengkalai jika Habibi diterima bekerja kantoran.
4. **Pengulangan kalimat.** Paragraf `profile.intro` hampir identik kata demi kata dengan meta description dan ringkasan `portfolioData.js`.

**Alternatif Headline (`profile.headline`) — Pilih salah satu sesuai fokus:**
1. **Opsi A (Outcome-focused untuk pemilik usaha + rekruter — Direkomendasikan):**
   `Membangun Website, Sistem Kasir, dan Iklan yang Dipakai Usaha Nyata`
   - *Rasional:* Menjawab langsung *Feature -> Benefit -> Outcome* (bukan sekadar jabatan, tapi hasil nyata yang sudah dipakai usaha). Cocok dengan `12_Panduan_Suara_dan_Copy.md` (bahasa membumi, bebas jargon).
2. **Opsi B (Bridging lapangan & teknis — Pembeda kuat dari Hanucazari `01_Brand_dan_Positioning.md`):**
   `Web Developer & Digital Marketer dengan Pengalaman Sales dan Operasional`
   - *Rasional:* Langsung membedakan Habibi untuk rekruter maupun pemilik usaha: paham kode sekaligus paham cara jualan di lapangan.
3. **Opsi C (Ringkas & profesional — Paling aman untuk posisi full-time/remote):**
   `Full-Stack Web Developer & Performance Marketer`
   - *Rasional:* Memakai kata kunci yang dicari HRD/rekruter teknis, sambil tetap menyebut sisi pemasaran.

**Alternatif Intro (`profile.intro`) — 2 kalimat maksimum:**
- **Opsi A (Aktif, spesifik, berurutan):**
  `Sejak 2020 saya bekerja langsung di penjualan, operasional showroom, dan pengawasan proyek sebelum membangun sistem digital. Kini saya membuat website katalog, aplikasi kasir dan keuangan, serta kampanye Meta Ads agar usaha kecil punya pencatatan rapi dan alur pembeli lewat WhatsApp.`
- **Opsi B (Lebih pendek — 1 kalimat padat):**
  `Berawal dari sales lapangan dan operasional usaha sejak 2020, saya membangun website, aplikasi kasir, dan sistem keuangan dengan Laravel & React serta iklan Meta yang mengarahkan calon pembeli ke WhatsApp.`

**Alternatif CTA Above the Fold:**
- **Opsi 1 (Bukti dulu, baru aksi — Direkomendasikan untuk semua audiens):**
  - Primary CTA (`btn-primary`): `Lihat portofolio nyata` (scroll ke `#portofolio`)
  - Secondary CTA (`btn-secondary`): `Diskusi proyek` (scroll ke `#kontak` atau langsung WA) + tautan teks/sekunder `Unduh CV (PDF)`
  - *Rasional:* Pengunjung melihat karya nyata sebelum diminta mengambil keputusan (mengontak atau mengunduh CV).
- **Opsi 2 (Jika prioritas utama mencari kerja/rekruter):**
  - Primary CTA (`btn-primary`): `Lihat portofolio`
  - Secondary CTA (`btn-secondary`): `Unduh CV (PDF)`
  - *Rasional:* Tetap membalik hierarki agar `Lihat portofolio` lebih menonjol sebagai gerbang bukti, sementara `Unduh CV` mudah diakses di sebelahnya.

**Alternatif Status Ketersediaan (`profile.availability`):**
- **Opsi A (Utamakan klien usaha / proyek):** `Menerima proyek website, sistem usaha, dan kolaborasi kerja jarak jauh.`
- **Opsi B (Jelas dua jalur tanpa terlihat putus asa mencari kerja):** `Tersedia untuk proyek usaha (Hanucazari Digital) dan peran profesional terpilih.`

- **Anotasi prinsip:** *Outcomes over features*, *Clear CTA hierarchy*, dan *Specificity over vagueness* (menghilangkan kesan bingung antara founder agensi vs pencari kerja).

---

### 3.4. Blok "Sistem yang sedang berjalan" (`src/components/Hero.jsx:53-69`)

| Elemen & Baris | Teks Sekarang | Masalah | Usulan Pengganti |
|---|---|---|---|
| Judul blok (`Hero.jsx:54`) | `Sistem yang sedang berjalan` | Memasukkan `TSY Bag` (halaman penjualan statis) ke dalam label "Sistem" terasa kurang tepat secara teknis maupun bisnis. | **Opsi A:** `Proyek aktif yang bisa dicek langsung`<br>**Opsi B:** `Sedang tayang & dipakai` |
| Kartu 1 (`portfolioData.js:35`) | `Batu Alam Halfa Barokah` / `Website katalog dan mesin pencari prospek` | `"mesin pencari prospek"` berisiko disalahpahami sebagai software bot/crawler. | `Website katalog dan konsultasi WhatsApp` |
| Kartu 2 (`portfolioData.js:59`) | `Teh Lia, Dadaha` / `Kasir dan stok untuk kios makanan` | Sudah cukup jelas; bisa sedikit lebih menggambarkan hasil pemakaian. | `Aplikasi kasir dan stok harian kios makanan` (atau tetap `Kasir dan stok untuk kios makanan`) |
| Kartu 3 (`portfolioData.js:71`) | `TSY Bag` / `Halaman penjualan produsen tas` | Deskriptif, tapi tidak menyebut arah tujuannya (pembelian langsung ke WA & toko resmi). | `Halaman penjualan langsung ke WhatsApp & toko resmi` |

---

### 3.5. Bagian `#portofolio` (`src/components/Work.jsx` & `src/data/portfolioData.js:29-88`)

**Intro Bagian (`Work.jsx:10`):**
- **Sekarang:** `Aplikasi dan kampanye yang saya bangun atau jalankan sendiri, untuk usaha nyata di Tasikmalaya.`
- **Masalah:** Kata `"dijalankan sendiri"` kurang presisi jika di beberapa proyek memakai workflow dibantu agen AI (seperti tercatat di `00_BACA_DULU.md:17`), dan belum membedakan peran sebagai pengembang, pengelola usaha keluarga (`Halfa`), atau karyawan (`KS Motor`).
- **Usulan Pengganti:** `Website, aplikasi internal, dan kampanye iklan yang saya rancang dan kelola untuk usaha nyata di Tasikmalaya.`

**Revisi Per Item Proyek (Menyamakan pola: Konteks Masalah -> Yang Dibangun -> Hasil/Status Terverifikasi):**

1. **`halfa-web` (Batu Alam Halfa Barokah — Website)**
   - **Teks sekarang (`portfolioData.js:35-38`):**
     - `title`: `Website katalog dan mesin pencari prospek`
     - `summary`: `Toko batu alam di Tasikmalaya yang sebelumnya hanya mengandalkan pembeli datang langsung. Saya membangun website katalog lengkap dengan halaman produk, artikel, halaman kampanye iklan, formulir konsultasi, dan panel admin untuk mengelola semuanya.`
     - `result`: `Bersama kampanye Meta Ads yang saya jalankan, omzet toko naik sekitar 150%.`
   - **Masalah:** (a) `"mesin pencari prospek"` membingungkan; (b) `+150%` berstatus **Perlu bukti (`K01`)** dan bertentangan dengan `Hanucazari Website Baru/src/content/studi-kasus/halfa-barokah.md`; (c) tidak menyebut peran resmi sebagai bagian dari usaha keluarga (`14_Register_Klaim_dan_Bukti.md:53,59`).
   - **Usulan Pengganti:**
     - `title`: `Website katalog produk dan formulir konsultasi WhatsApp`
     - `summary`: `Usaha batu alam keluarga yang sebelumnya hanya mengandalkan pembeli datang ke toko. Saya membangun website katalog 90+ produk, artikel edukasi, halaman kampanye iklan, panel admin internal, serta menghubungkannya dengan kampanye Meta Ads.` *(Cek jumlah produk katalog aktif di database/log: tercatat 92 produk di `COLLABORATION_LOG.md:18,29` — boleh ditulis `92 produk` agar lebih spesifik).*
     - `result` **(Jika bukti K01 belum dilampirkan — Rekomendasi jujur):** `Website tayang aktif di batualamhalfabarokah.com bersama kampanye iklan Meta ke WhatsApp. [PERLU BUKTI K01: cantumkan data pertumbuhan omzet & periode setelah dokumen pendukung siap]`
     - `result` **(Jika bukti K01 sudah disiapkan owner):** `Bersama kampanye Meta Ads (periode [ISI OWNER]), omzet toko naik sekitar 150%.`

2. **`halfa-keuangan` (Batu Alam Halfa Barokah — Aplikasi internal)**
   - **Teks sekarang (`portfolioData.js:47-50`):**
     - `title`: `Sistem penjualan dan keuangan toko`
     - `summary`: `Nota penjualan sebelumnya ditulis tangan dan stok sering selisih. Sistem ini mencatat nota, penawaran harga, piutang pelanggan, buku kas tunai dan bank, lalu menyusun laporan harian dan bulanan yang bisa diunduh ke Excel.`
     - `result`: `Dipakai setiap hari oleh pemilik dan admin toko.`
   - **Masalah:** (a) Klaim `"stok sering selisih"` tidak berlanjut ke penjelasan fitur stok di kalimat berikutnya; (b) `"Dipakai setiap hari"` berstatus **Perlu bukti (`K04`)**.
   - **Usulan Pengganti:**
     - `summary`: `Sebelumnya nota penjualan ditulis tangan sehingga rekap piutang dan kas harian harus dihitung ulang manual. Sistem ini menangani pembuatan nota, penawaran harga (RAB), pemantauan piutang pelanggan, pencatatan buku kas tunai dan bank, hingga ekspor laporan harian/bulanan ke Excel.`
     - `result`: `Berjalan untuk pencatatan operasional internal toko. [PERLU BUKTI K04: konfirmasi & tangkapan layar ter-sensor bila ingin menulis "dipakai setiap hari"]`

3. **`teh-lia` (Teh Lia, Dadaha — Aplikasi kasir)**
   - **Teks sekarang (`portfolioData.js:59-62`):**
     - `title`: `Kasir dan stok untuk kios makanan`
     - `summary`: `Aplikasi kasir untuk kios cemilan: transaksi di layar sentuh, buka dan tutup shift, pengelolaan menu, stok bahan, dan laporan penjualan per hari.`
     - `result`: `Berjalan di kios sejak Oktober 2026.`
   - **Masalah:** Secara fakta sudah aman (`K08: Boleh`), namun masih berupa daftar fitur. Lebih kuat jika menjelaskan masalah kios sebelum pakai aplikasi (*Benefit -> Outcome*).
   - **Usulan Pengganti:**
     - `summary`: `Kios makanan membutuhkan pencatatan transaksi cepat tanpa bergantung hitung manual akhir shift. Saya membangun aplikasi kasir layar sentuh lengkap dengan buka-tutup shift, pemotongan stok otomatis, pengaturan menu/toping, serta laporan omzet harian dan laba kotor untuk pemilik.`
     - `result`: `Aktif digunakan di gerai Dadaha sejak Oktober 2026.` *(Pastikan konfirmasi berkala ke klien per catatan `K08`).*

4. **`tsy-bag` (TSY Bag — Landing page)**
   - **Teks sekarang (`portfolioData.js:71-75`):**
     - `title`: `Halaman penjualan produsen tas`
     - `summary`: `Produsen tas di Tasikmalaya yang ramai di marketplace dan live streaming, tapi belum punya halaman sendiri. Saya menyusun naskah penjualan dan membangun halaman yang mengarahkan pembeli ke WhatsApp dan toko resminya.`
     - *(Tidak punya field `result`/status)*
   - **Masalah:** (a) Kata `"ramai di marketplace dan live streaming"` menyentuh `K11` (`Perlu bukti`) bila tidak ada bukti yang bisa ditunjukkan; (b) tidak ada keterangan penutup (`result` / status) seperti 4 proyek lain sehingga strukturnya terasa terpotong.
   - **Usulan Pengganti:**
     - `title`: `Halaman penjualan (landing page) produsen tas`
     - `summary`: `Produsen tas di Tasikmalaya yang sebelumnya hanya mengandalkan kanal marketplace dan belum memiliki halaman rujukan sendiri. Saya menulis naskah penawaran dan membangun landing page yang merangkum keunggulan produk serta mengarahkan calon pembeli ke WhatsApp dan toko resminya.`
     - `result`: `Tayang aktif di tsybag.vercel.app sebagai etalase resmi klien.` *(Jujur, sesuai `K06`, tanpa mengarang angka penjualan).*

5. **`ks-motor` (KS Motor Tasikmalaya — Iklan dan penjualan)**
   - **Teks sekarang (`portfolioData.js:82-85`):**
     - `title`: `Iklan mobil bekas yang berujung ke showroom`
     - `summary`: `Penjualan dari kanal digital mentok di 5 unit per bulan karena banyak penanya yang tidak serius. Saya menjalankan Meta Ads dengan anggaran sekitar Rp 3 juta per bulan, membuat video inspeksi unit, dan menyusun skrip WhatsApp untuk menyaring calon pembeli sebelum diajak survei.`
     - `result`: `Penjualan dari kanal digital naik dari maksimal 5 unit menjadi 13 unit per bulan.`
   - **Masalah:** (a) Angka `5 -> 13 unit/bulan` berstatus **Perlu bukti (`K02`)** dan belum ada pernyataan tertulis izin menyebut nama KS Motor; (b) Di `Work.jsx` kartu ini bercampur dengan proyek klien/aplikasi tanpa keterangan bahwa ini riwayat kerja sebagai karyawan (`14_Register_Klaim_dan_Bukti.md:53,62`: KS Motor harus diposisikan jelas sebagai riwayat kerja karyawan, bukan klien Hanucazari).
   - **Usulan Pengganti:**
     - `kind`: `Riwayat kerja · Iklan & penjualan` (agar pembaca langsung tahu ini pengalaman kerja penuh waktu, bukan proyek agensi).
     - `summary`: `Banyak calon pembeli dari media sosial hanya bertanya harga tanpa niat datang ke showroom. Selama bertugas sebagai Digital Marketing Specialist, saya mengelola iklan Meta Ads (anggaran sekitar Rp 3 juta/bulan), memproduksi video inspeksi unit (mesin, interior, surat), dan menyusun alur kualifikasi chat WhatsApp sebelum menjadwalkan survei.`
     - `result` **(Jika K02 belum ada bukti/izin):** `Sistem penyaringan chat membantu tim showroom fokus melayani calon pembeli yang siap survei unit. [PERLU BUKTI K02: lampirkan rekap bulanan + izin nama KS Motor untuk menampilkan angka 5 menjadi 13 unit]`

---

### 3.6. Bagian `#pengalaman` (`src/components/Experience.jsx` & `src/data/portfolioData.js:10-13, 90-175`)

| Elemen & Baris | Teks Sekarang | Masalah | Usulan Pengganti |
|---|---|---|---|
| Intro bagian (`Experience.jsx:6`) | `Bekerja sejak 2020, dari sales lapangan sampai membangun sistem.` | Cukup bagus (`K20: Boleh`), tapi kata `"membangun sistem"` agak kaku/teknis untuk pemilik usaha. | `Bekerja sejak 2020: dari sales lapangan, showroom otomotif, hingga membangun website dan sistem usaha.` |
| Paragraf 2 `profile.about` (`portfolioData.js:12`) | `Dari situ saya belajar bahwa usaha kecil jarang butuh teknologi yang rumit. Mereka butuh pencatatan yang rapi, halaman yang bisa ditemukan di Google, dan alur WhatsApp yang menutup penjualan. Itu yang sekarang saya kerjakan lewat Hanucazari Digital.` | Kalimat pembukanya kuat sekali, tetapi kalimat penutup hanya menyebut Hanucazari tanpa menyambungkan dengan kesiapan kerja profesional. | `Dari situ saya belajar bahwa usaha jarang butuh teknologi yang rumit. Yang dibutuhkan adalah pencatatan rapi, halaman yang mudah ditemukan di Google, dan alur WhatsApp yang membantu penjualan — itulah pendekatan yang saya bawa di Hanucazari Digital maupun saat berkolaborasi dalam tim.` |
| `Hanucazari Digital` (`portfolioData.js:95-101`) | `period: '2026 - Sekarang'`<br>Poin 3: `Menyusun identitas merek, paket layanan, dan platform web studio.` | 1) Bulan mulai belum pasti (`COLLABORATION_LOG.md:174`).<br>2) Poin 3 terlalu internal (website studio belum live di `hanucazari.id`), tidak memberi nilai bukti ke klien atau rekruter. | `period: '[ISI OWNER: mis. Jul 2026] - Sekarang'`<br>Ganti poin 3 menjadi: `Menyusun standar brief, dokumentasi serah terima, dan paket layanan terukur untuk website, aplikasi kasir, dan pengelolaan iklan usaha.` |
| `Halfa Barokah` (`portfolioData.js:112`) | `Menjalankan Meta Ads berbasis WhatsApp dan memproduksi video produk sendiri; omzet toko naik sekitar 150%.` | Mengandung klaim `K01` yang masih Perlu bukti. | `Menjalankan kampanye Meta Ads (Click-to-WhatsApp) dan memproduksi konten video produk untuk mendatangkan konsultasi calon pembeli.` *(Tambahkan angka hanya setelah bukti K01 lengkap).* |
| `KS Motor` (`portfolioData.js:123`) | `Menaikkan penjualan mobil bekas dari kanal digital dari maksimal 5 menjadi 13 unit per bulan...` | Mengandung klaim `K02` yang masih Perlu bukti. | `Mengelola kampanye Meta Ads showroom dengan anggaran sekitar Rp 3 juta/bulan untuk mendatangkan calon pembeli serius ke WhatsApp.` *(Tambahkan angka 5->13 unit setelah bukti K02 lengkap).* |
| `PT Santri Niaga` (`portfolioData.js:146-148`) | `Membangun website company profile dengan Laravel.` | Terlalu singkat; tidak menjelaskan fitur atau manfaat website tersebut. | `Membangun website company profile biro umroh berbasis Laravel untuk menampilkan informasi paket perjalanan dan formulir kontak jamaah.` |
| `Taskindo Motor` (`portfolioData.js:158-160`) | 3 poin aktivitas kas/dokumen/konten tanpa penghubung ke ketelitian atau alur kerja. | Masih murni *feature/duty* administratif. | Pertajam poin 2 menjadi: `Memeriksa kelengkapan dokumen legalitas unit (STNK, BPKB, faktur) sebelum serah terima untuk mencegah selisih administrasi.` |
| `PT Ainiyah Indomitra` (`portfolioData.js:170-172`) | `Memimpin 2 tim sales lapangan (10+ orang) untuk penjualan door-to-door IndiHome dan mengawasi target bulanan.` | Sudah cukup kuat; kata `10+ orang` sebaiknya konsisten angkanya jika tahu jumlah pastinya, dan jelaskan dampak pelatihannya. | `Memimpin 2 tim sales lapangan ([ISI OWNER atau biarkan 10+ orang]) untuk penjualan door-to-door layanan IndiHome serta mengevaluasi pencapaian target harian dan bulanan.` |

---

### 3.7. Bagian `#skill` & Pendidikan (`src/components/Skills.jsx` & `src/data/portfolioData.js:177-208`)

| Elemen & Baris | Teks Sekarang | Masalah | Usulan Pengganti |
|---|---|---|---|
| Intro `#skill` (`Skills.jsx:7`) | `Yang saya pakai sehari-hari, bukan sekadar pernah dicoba.` | Kalimatnya jujur dan tegas, tetapi belum memberi gambaran bagaimana 4 kelompok skill ini saling terhubung. | `Alat dan keahlian yang dipakai langsung di proyek nyata — menggabungkan sisi teknis aplikasi, pemasaran iklan, dan alur penjualan.` |
| Item `marketing` (`portfolioData.js:186`) | `'Meta Ads (Facebook dan Instagram)', 'Google Analytics 4', 'Google Tag Manager', 'Google Search Console', 'SEO on-page'` | `SEO on-page` terlalu sempit dibanding pekerjaan riil (juga mengerjakan audit SEO teknis, schema JSON-LD, sitemap). Selain itu `Meta Conversions API` (yang dikerjakan di Halfa) bernilai tinggi bagi rekruter performance marketing. | Perbarui menjadi: `'Meta Ads & Meta Conversions API (CAPI)', 'Google Analytics 4 & Tag Manager', 'Google Search Console', 'SEO Teknis & On-Page'` *(Pastikan CAPI dikonfirmasi karena pernah ditangani di proyek Halfa).* |
| Item `ops` (`portfolioData.js:196`) | `'Video produk (CapCut)'` | Mereduksi peran ke sekadar aplikasi edit video (`CapCut`), padahal juga menyusun naskah hook iklan dan produksi video lapangan. | `'Produksi & editing video iklan produk (CapCut)'` |
| `Pendidikan` (`portfolioData.js:206`) | `'Tugas akhir dan magang di bidang digitalisasi proses bisnis.'` | Terlalu umum (*vagueness*), kurang meyakinkan rekruter fresh-tech/operations. | `[ISI OWNER: sebutkan judul/topik tugas akhir atau tempat magang nyatanya, mis. "Membangun sistem ... saat magang di ..."]` (jika tidak ingin menyebut spesifik, pertahankan kalimat sekarang). |

---

### 3.8. Bagian `#sertifikasi` (`src/components/Certificates.jsx` & `src/data/portfolioData.js:211-278`)

| Elemen & Baris | Teks Sekarang | Masalah (Kritis) | Usulan Pengganti |
|---|---|---|---|
| Intro (`Certificates.jsx:28`) | `Klik untuk melihat sertifikat aslinya.` | Terlalu mekanis ("klik"), tidak memberi konteks verifikasi kredensial. | `Bukti pelatihan dan sertifikasi resmi yang dapat diperiksa langsung lampirannya.` |
| Item Google Analytics & Grow Offline Sales (`portfolioData.js:213-231` & `Certificates.jsx:34,38`) | Ikon centang hijau (`text-live`) + teks `berlaku Okt 2025 sampai Okt 2026` | **Kredibilitas terganggu (`K09`):** Tanggal sekarang 12 November 2026. Masa berlaku Oktober 2026 sudah lewat, tetapi ikon masih hijau aktif dan memakai kata `"berlaku"`. Di website baru Hanucazari (`tentang.astro`), dua item ini sudah dilepas. | **Opsi A (Direkomendasikan — ikuti `tentang.astro`):** Sembunyikan dua sertifikat Google yang habis masa berlakunya dari daftar utama sampai ujian perpanjangan di Google Skillshop selesai diambil.<br>**Opsi B (Jika tetap ditampilkan sebagai riwayat):** Ubah teks status menjadi `Masa berlaku: Okt 2025 – Okt 2026 (berakhir; jadwal perpanjangan)` dan gunakan ikon abu netral (bukan centang hijau `text-live`). |

---

### 3.9. Bagian `#kontak` & Footer (`src/components/Contact.jsx`, `src/components/Footer.jsx`)

| Elemen & Baris | Teks Sekarang | Masalah | Usulan Pengganti |
|---|---|---|---|
| Intro `#kontak` (`Contact.jsx:17`) | `Pilih jalur yang sesuai dengan keperluan Anda.` | Kaku dan terasa seperti menu call center. | `Pilih jalur komunikasi sesuai kebutuhan Anda.` |
| Deskripsi Pemilik Usaha (`Contact.jsx:21-24`) | `Ceritakan usaha Anda dan apa yang ingin dibenahi: website, kasir, pencatatan, atau iklan. Saya bantu petakan mana yang perlu dikerjakan lebih dulu.` | Sudah ramah, tetapi belum ada **risk reduction** (bahwa obrolan awal gratis/tanpa komitmen) dan belum menyebut jam respons sesuai standar Hanucazari (`site.json:22-23`). | `Ceritakan kondisi usaha Anda saat ini — apakah soal website, kasir, pencatatan keuangan, atau iklan. Kita mulai dari obrolan awal 15 menit gratis via WhatsApp untuk memetakan prioritas yang paling mendesak (Senin–Sabtu, dibalas maksimal 1 hari kerja).` |
| Teks tombol & pra-isi WA Pemilik Usaha (`Contact.jsx:26,32`) | Tombol: `Diskusi lewat WhatsApp`<br>Pesan WA: `Halo Habibi, saya punya usaha dan ingin konsultasi soal website atau sistem.` | 1) Pesan pra-isi WA melupakan kata `iklan`, padahal di atasnya ditawarkan.<br>2) Di `12_Panduan_Suara_dan_Copy.md:23`, standar nama tombol WA Hanucazari adalah `Chat di WhatsApp`. | Tombol: **`Chat di WhatsApp`** (atau `Konsultasi lewat WhatsApp`)<br>Pesan WA: `Halo Habibi, saya punya usaha dan ingin konsultasi soal website, sistem, atau iklan digital.` |
| Deskripsi Rekruter (`Contact.jsx:38-41`) | `CV dalam format PDF berisi teks asli, jadi bisa dibaca sistem ATS. Undangan wawancara bisa langsung dikirim lewat email.` | Terlalu membicarakan teknis PDF (`berisi teks asli`). Rekruter lebih peduli kelengkapan CV & kecepatan penjadwalan. | `Unduh CV ringkas dua halaman dalam format PDF ramah ATS. Untuk penjadwalan wawancara atau kebutuhan peran spesifik, silakan kirim detail posisi lewat email.` |
| Subjek Email Rekruter (`Contact.jsx:44`) | `'Undangan wawancara'` | Terlalu singkat; berisiko bercampur di kotak masuk. | `'Undangan Wawancara / Peluang Kerja — [Nama Perusahaan]'` |
| Pesan WA daftar kanal bawah (`Contact.jsx:8`) | `'Halo Habibi, saya ingin berdiskusi.'` | Terlalu generik. | `'Halo Habibi, saya melihat portofolio Anda dan ingin berdiskusi.'` |
| Footer (`Footer.jsx:10-12`) | `© 2026 Habibi Nurrohman. Kota Tasikmalaya, Jawa Barat.` | Kosong tanpa pengingat identitas Hanucazari Digital. | `© 2026 Habibi Nurrohman · Founder Hanucazari Digital · Kota Tasikmalaya, Jawa Barat.` |

---

### 3.10. Sinkronisasi Generator CV PDF ATS (`src/utils/cvPdf.js`)

Jika perubahan pada poin 3.1–3.9 disetujui, file `src/utils/cvPdf.js` wajib ikut diselaraskan pada 3 titik:
1. **Baris 73 (Sub-judul PDF):** Saat ini memakai `${profile.headline} | ${profile.role}`. Jika `profile.headline` diubah menjadi kalimat panjang (Opsi A di 3.3), PDF header sebaiknya tetap memakai label jabatan singkat **`Web Developer & Digital Marketer | Founder Hanucazari Digital`** agar terbaca rapi oleh parser ATS (jadi pisahkan antara `profile.jobTitle` singkat untuk ATS/JSON-LD vs `profile.heroHeadline` untuk web!).
2. **Baris 78–82 (`RINGKASAN` PDF):** Saat ini masih mengulang teks hardcoded `yang dipakai usaha lokal setiap hari` (`K04`) dan `(omzet toko batu alam naik sekitar 150%; penjualan mobil bekas digital dari 5 menjadi 13 unit per bulan)` (`K01`/`K02`). Wajib disinkronkan dengan keputusan bukti `K01/K02/K04`.
3. **Baris 105–111 (`SERTIFIKASI` PDF):** Jika Google Analytics & Grow Offline Sales dilepas atau ditandai berakhir (`K09`), daftar pada `cvPdf.js` harus mengikuti keputusan yang sama agar isi web dan isi PDF tetap konsisten.

---

## 4. Panduan Pengujian Copy (Testability Guidance)

Agar perubahan copywriting dapat dievaluasi berdasarkan perilaku nyata (bukan tebakan):
1. **A/B Test 1 — Headline Hero (Job Title vs Outcome):**
   - *Varian Kontrol:* `Web Developer & Digital Marketer`
   - *Varian Uji:* `Membangun Website, Sistem Kasir, dan Iklan yang Dipakai Usaha Nyata`
   - *Indikator:* Rasio klik tombol CTA di Hero (`Lihat portofolio` vs `Unduh CV` vs klik WhatsApp di `#kontak`) dalam periode minimal 30 kunjungan per varian.
2. **A/B Test 2 — Urutan & Label CTA Utama Hero:**
   - *Varian Kontrol:* `Unduh CV (PDF)` (`btn-primary`) + `Lihat portofolio` (`btn-secondary`)
   - *Varian Uji:* `Lihat portofolio nyata` (`btn-primary`) + `Unduh CV (PDF)` (`btn-secondary`)
   - *Hipotesis:* Menjadikan `Lihat portofolio nyata` sebagai tombol primer meningkatkan persentase pengunjung yang menggulir ke studi kasus sebelum memutuskan menghubungi WA atau mengunduh CV.
3. **Catatan Pengukuran Nyata:** Jangan menganggap jumlah klik tombol `Unduh CV` atau klik `wa.me` sebagai konversi bisnis final; ukur keberhasilan sebenarnya dari **jumlah chat WhatsApp masuk yang relevan** dan **jumlah email/undangan wawancara rekruter**.

---

## 5. Keputusan yang Dibutuhkan Sebelum Mengubah Source Code

Mohon Owner pilih opsi di bawah ini agar perubahan kode (nantinya lewat permintaan ke Claude atau eksekusi atas izin Owner) langsung tuntas tanpa bolak-balik:

| No | Pertanyaan Keputusan | Pilihan |
|---|---|---|
| 1 | **Arah utama Hero (`Hero.jsx` & `Header.jsx`)** | **A.** Prioritas calon klien/proyek (tombol primer `Lihat portofolio nyata` + status fokus melayani usaha & kolaborasi terpilih)<br>**B.** Seimbang dua jalur (tombol primer `Lihat portofolio`, sekunder `Unduh CV`, header mengarah ke `#kontak`)<br>**C.** Prioritas mencari kerja (tetap pertahankan penekanan `Unduh CV`) |
| 2 | **Klaim angka `K01` (+150% Halfa), `K02` (5→13 unit KS Motor), dan `K04` ("dipakai harian")** | **A.** Tahan dulu dari publik (samakan dengan `Hanucazari Website Baru` memakai fakta output riil sampai dokumen bukti disiapkan)<br>**B.** Pertahankan angka dengan melampirkan bukti data + periode + izin tertulis ke `06_Kontrol/bukti/` |
| 3 | **Dua sertifikat Google yang habis Oktober 2026 (`K09`)** | **A.** Lepas sementara dari tampilan utama & CV PDF sampai diperbarui di Google Skillshop (seperti di `Hanucazari Website Baru`)<br>**B.** Tetap tampilkan dengan status jujur `Masa berlaku berakhir Okt 2026` dan ikon netral (bukan hijau) |
| 4 | **Fakta pelengkap yang masih kosong (`[ISI OWNER]`)** | (a) Bulan mulai **Hanucazari Digital** (`portfolioData.js:95`)<br>(b) Topik spesifik **Tugas Akhir / Magang LP3I** (`portfolioData.js:206`, opsional)<br>(c) Konfirmasi jumlah produk katalog **Halfa Barokah** (`92 produk` atau dibulatkan `90+ produk`) dan penggunaan **Meta CAPI** di daftar skill |
