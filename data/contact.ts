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

export interface DaySchedule {
  day: string;
  hours: string;
  status: "open" | "limited" | "closed";
  statusText: string;
}

export const weeklySchedule: DaySchedule[] = [
  {
    day: "Senin",
    hours: "08:00 - 17:00 WIB",
    status: "open",
    statusText: "Buka Normal",
  },
  {
    day: "Selasa",
    hours: "08:00 - 17:00 WIB",
    status: "open",
    statusText: "Buka Normal",
  },
  {
    day: "Rabu",
    hours: "08:00 - 17:00 WIB",
    status: "open",
    statusText: "Buka Normal",
  },
  {
    day: "Kamis",
    hours: "08:00 - 17:00 WIB",
    status: "open",
    statusText: "Buka Normal",
  },
  {
    day: "Jumat",
    hours: "08:00 - 17:00 WIB",
    status: "open",
    statusText: "Buka Normal",
  },
  {
    day: "Sabtu",
    hours: "08:30 - 14:00 WIB",
    status: "limited",
    statusText: "Janji Temu / Terbatas",
  },
  {
    day: "Minggu & Hari Libur",
    hours: "Tutup (WhatsApp Aktif)",
    status: "closed",
    statusText: "Tutup Operasional",
  },
];

export const contactDepartments: ContactDepartment[] = [
  {
    id: "dept-sales",
    name: "Penjualan & Penawaran Unit",
    description:
      "Konsultasi pemilihan unit alat berat, katalog spesifikasi teknis, dan permintaan surat penawaran harga resmi (quotation).",
    email: "ptdayamaestrowellindo@gmail.com",
    phone: "+62 822 3315 4255",
    whatsappMessage:
      "Halo Tim Sales Daya Maestro Wellindo, saya ingin konsultasi mengenai unit alat berat dan meminta surat penawaran harga resmi.",
  },
  {
    id: "dept-technical",
    name: "Dukungan Teknis & Suku Cadang",
    description:
      "Layanan purna jual, inspeksi berkala, ketersediaan suku cadang original, dan pemeliharaan teknis di lapangan.",
    email: "ptdayamaestrowellindo@gmail.com",
    phone: "+62 822 3315 4255",
    whatsappMessage:
      "Halo Tim Teknis Daya Maestro Wellindo, saya membutuhkan informasi layanan purna jual, servis berkala, dan suku cadang unit.",
  },
  {
    id: "dept-partnership",
    name: "Kemitraan & Distribusi",
    description:
      "Peluang kerjasama keagenan daerah, kerjasama kontraktor proyek skala nasional, dan program kemitraan industri.",
    email: "ptdayamaestrowellindo@gmail.com",
    phone: "+62 822 3315 4255",
    whatsappMessage:
      "Halo Manajemen Daya Maestro Wellindo, saya tertarik untuk mendiskusikan potensi kemitraan dan kerjasama bisnis strategis.",
  },
];

export const quickInquiries: QuickInquiry[] = [
  {
    id: "inq-catalog",
    label: "Katalog & Spesifikasi",
    description: "Unduh brosur teknis lengkap produk",
    prefilledText:
      "Halo Daya Maestro Wellindo, saya ingin meminta katalog dan brosur spesifikasi unit alat berat.",
  },
  {
    id: "inq-quote",
    label: "Permintaan Penawaran",
    description: "Dapatkan harga resmi dan diskon unit",
    prefilledText:
      "Halo Daya Maestro Wellindo, saya ingin meminta surat penawaran harga (quotation) resmi untuk unit proyek kami.",
  },
  {
    id: "inq-demo",
    label: "Jadwal Demo / Survei Unit",
    description: "Kunjungi workshop dan lihat unit langsung",
    prefilledText:
      "Halo Daya Maestro Wellindo, saya ingin menjadwalkan kunjungan untuk melihat langsung demo unit di lokasi Anda.",
  },
  {
    id: "inq-service",
    label: "Garansi & Spare Parts",
    description: "Konsultasi teknis dan ketersediaan part",
    prefilledText:
      "Halo Daya Maestro Wellindo, saya membutuhkan informasi garansi dan ketersediaan suku cadang alat berat.",
  },
];
