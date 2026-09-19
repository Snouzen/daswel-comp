# PRD — Company Profile Digital

## 1. Ringkasan
Membangun website **company profile** statis (tanpa database) untuk memperkenalkan
perusahaan, produk, dan berita kepada calon pelanggan. Website dioptimalkan penuh
untuk SEO agar mudah ditemukan di Google, responsif di semua ukuran layar, dan cepat
diakses. Seluruh konten bersifat statis dan di-render di build time.

## 2. Tujuan
- Menyediakan profil perusahaan yang kredibel sebagai wajah digital resmi.
- Menampilkan produk dan berita perusahaan secara terstruktur.
- Memaksimalkan visibilitas di mesin pencari (SEO teknis + on-page).
- Memudahkan calon pelanggan menghubungi perusahaan (kontak & WhatsApp).

## 3. Target Pengguna
- **Calon pelanggan / klien** — mencari informasi produk, kredibilitas, dan kontak.
- **Mitra bisnis & investor** — mencari profil resmi dan berita perusahaan.
- **Pengunjung dari hasil pencarian Google** — datang dari halaman produk/berita.
- **Tim internal perusahaan** — mengelola konten statis dan citra merek.

## 4. Ruang Lingkup Halaman
1. **Beranda** — sambutan utama, sorotan produk, alasan memilih kami, kabar terbaru.
2. **Produk** — daftar produk + halaman detail produk.
3. **Berita** — daftar berita + halaman detail berita (baca selengkapnya, berita lainnya).
4. **Galeri Foto** — kumpulan foto dengan tampilan foto besar dan keterangan.
5. **Kontak** — info kontak & alamat, jam layanan, lokasi perusahaan (peta), tombol WhatsApp.
6. **Halaman statis lain** — Tentang Perusahaan (dapat digabung ke Beranda).

## 5. Navigasi
Navbar global berisi: **Logo (Home)**, **Product**, **News**, **Contact Us**.
Footer memuat navigasi sekunder, info kontak, dan identitas resmi perusahaan.

## 6. Kebutuhan Fungsional
### Beranda
- Hero/sambutan utama (headline + h1).
- Sorotan produk (highlight beberapa produk unggulan).
- Bagian alasan memilih kami.
- Cuplikan kabar terbaru.
- CTA menuju produk & kontak.

### Produk
- Grid daftar produk dengan gambar, nama, dan deskripsi singkat.
- Halaman detail produk (deskripsi lengkap, gambar, CTA tanya produk / hubungi kami).
- CTA WhatsApp untuk tanya produk.

### Berita
- Daftar berita dengan judul, tanggal, thumbnail, ringkasan.
- Halaman detail berita + tautan berita lainnya.

### Galeri Foto
- Kumpulan foto (grid), tampilan foto besar, dan keterangan foto.

### Kontak
- Info kontak & alamat, jam layanan, dan lokasi perusahaan (embed peta).
- Tombol WhatsApp (deep link) dan ajakan menghubungi kami.

## 7. Kebutuhan Non-Fungsional (SEO & Kualitas)
- **Metadata & Open Graph komprehensif**: setiap halaman punya `title`, `description`,
  `canonical`, `openGraph`, dan `twitter` tags (Next.js Metadata API).
- **JSON-LD Structured Data (Schema.org)**: skema `Organization`/`LocalBusiness` di
  `app/layout.tsx` root.
- **Sitemap & Robots otomatis**: `app/sitemap.ts` dan `app/robots.ts` agar peta situs
  selalu tersinkron saat ada halaman baru.
- **Semantic HTML**: satu `h1` per halaman, hierarki `h2`/`h3` disiplin, tag
  `<header> <main> <section> <footer> <nav>`.
- **Optimasi aset & font**: `next/font` (Inter / Plus Jakarta Sans) self-hosting,
  tanpa request render-blocking ke Google Fonts.
- **Performa & media**: `next/image` untuk format/kompresi gambar; gambar ringan.
- **Responsif**: tampilan menyesuaikan layar (mobile-first).
- **Animasi halus** menggunakan Framer Motion tanpa mengganggu performa.
- **Konsistensi tipografi** di seluruh halaman.

## 8. Tech Stack
- **Framework**: Next.js App Router, statis (`output: 'export'`, SSG).
- **Styling & UI**: Tailwind CSS + shadcn/ui.
- **Animasi**: Framer Motion.
- **SEO/Meta**: Next.js Metadata API.
- **Gambar**: `next/image` (bawaan).
- **Deployment**: Vercel.

## 9. Batasan
- **Konten statis, tanpa database** dan tanpa CMS — konten di-hardcode/di-generate saat build.
- Tidak ada autentikasi, akun pengguna, atau form submission ke backend.
- Tidak ada fitur dinamis yang butuh server runtime (konsekuensi `output: 'export'`).

## 10. Kriteria Sukses
- Semua halaman terindeks dengan metadata & structured data valid.
- Skor performa & SEO tinggi (Lighthouse).
- Navigasi dan konten dapat diakses lancar di mobile & desktop.
- Jalur kontak (WhatsApp / info kontak) mudah dijangkau dari setiap halaman.

## 11. Di Luar Ruang Lingkup
- CMS / panel admin.
- E-commerce (keranjang, pembayaran).
- Blog multi-penulis dengan komentar.
- Autentikasi & area member.