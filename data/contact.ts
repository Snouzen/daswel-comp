export interface ContactDepartment {
  id: string;
  name: string;
  description: string;
  email: string;
  phone: string;
  whatsappMessage: string;
}

export interface QuickInquiry {
  id: string;
  label: string;
  description: string;
  prefilledText: string;
}

export const contactDepartments: ContactDepartment[] = [
  {
    id: "dept-sales",
    name: "Penjualan & Penawaran Unit",
    description:
      "Konsultasi pemilihan unit alat berat, katalog spesifikasi teknis, dan permintaan surat penawaran harga resmi (quotation).",
    email: "sales@daswel.com",
    phone: "+62 21 555-0199 ext 1",
    whatsappMessage:
      "Halo Tim Sales Daswel, saya ingin konsultasi mengenai unit alat berat dan meminta surat penawaran harga resmi.",
  },
  {
    id: "dept-technical",
    name: "Dukungan Teknis & Suku Cadang",
    description:
      "Layanan purna jual, inspeksi berkala, ketersediaan suku cadang original, dan pemeliharaan teknis di lapangan.",
    email: "service@daswel.com",
    phone: "+62 21 555-0199 ext 2",
    whatsappMessage:
      "Halo Tim Teknis Daswel, saya membutuhkan informasi layanan purna jual, servis berkala, dan suku cadang unit.",
  },
  {
    id: "dept-partnership",
    name: "Kemitraan & Distribusi",
    description:
      "Peluang kerjasama keagenan daerah, kerjasama kontraktor proyek skala nasional, dan program kemitraan industri.",
    email: "partner@daswel.com",
    phone: "+62 21 555-0199 ext 3",
    whatsappMessage:
      "Halo Manajemen Daswel, saya tertarik untuk mendiskusikan potensi kemitraan dan kerjasama bisnis strategis.",
  },
];

export const quickInquiries: QuickInquiry[] = [
  {
    id: "inq-catalog",
    label: "Katalog & Spesifikasi",
    description: "Unduh brosur teknis lengkap produk",
    prefilledText:
      "Halo Daswel, saya ingin meminta katalog dan brosur spesifikasi unit alat berat.",
  },
  {
    id: "inq-quote",
    label: "Permintaan Penawaran",
    description: "Dapatkan harga resmi dan diskon unit",
    prefilledText:
      "Halo Daswel, saya ingin meminta surat penawaran harga (quotation) resmi untuk unit proyek kami.",
  },
  {
    id: "inq-demo",
    label: "Jadwal Demo / Survei Unit",
    description: "Kunjungi workshop dan lihat unit langsung",
    prefilledText:
      "Halo Daswel, saya ingin menjadwalkan kunjungan untuk melihat langsung demo unit di lokasi Anda.",
  },
  {
    id: "inq-service",
    label: "Garansi & Spare Parts",
    description: "Konsultasi teknis dan ketersediaan part",
    prefilledText:
      "Halo Daswel, saya membutuhkan informasi garansi dan ketersediaan suku cadang alat berat.",
  },
];
