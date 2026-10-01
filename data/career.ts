import { companyData } from "@/data/company";

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  education: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  postedDate: string;
  closingDate?: string;
  status: "active" | "closed";
}

export const careerDepartments = [
  "Semua",
  "Sales & Komersial",
  "Teknis & After Sales",
  "Marketing & Komunikasi",
] as const;

export type CareerDepartment = (typeof careerDepartments)[number];

export const jobPostings: JobPosting[] = [
  {
    id: "heavy-equipment-sales-executive",
    title: "Heavy Equipment Technical Sales Executive",
    department: "Sales & Komersial",
    type: "Penuh Waktu (Full-Time)",
    location: "Tangerang (Head Office) & Mobilitas Proyek Jabodetabek",
    experience: "Min. 2 Tahun (Industri Alat Berat / Konstruksi)",
    education: "D3 / S1 Semua Jurusan (Teknik / Manajemen Bisnis lebih disukai)",
    overview:
      "Bertanggung jawab membangun kemitraan B2B strategis dengan kontraktor BUMN/swasta, penyedia jasa konstruksi, perusahaan tambang, dan pabrik precast untuk penjualan unit Self Loading Concrete Mixer, Concrete Pump, Backhoe Loader, dan Forklift 4x4.",
    responsibilities: [
      "Mengidentifikasi peluang proyek konstruksi baru dan membangun relasi B2B dengan kontraktor serta pembuat keputusan pengadaan.",
      "Melakukan presentasi teknis solusi alat berat DMW dan memberikan rekomendasi model unit yang efisien sesuai skala proyek mitra.",
      "Menyusun proposal komersial, negosiasi kontrak penjualan, dan memfasilitasi proses serah terima unit secara profesional.",
      "Menjaga hubungan jangka panjang (*after-sales relationship*) dengan key client guna memastikan kepuasan dan repeat order.",
      "Memetakan perkembangan pasar alat berat, kebutuhan industri beton, serta tren proyek infrastruktur di wilayah binaan.",
    ],
    requirements: [
      "Pendidikan minimal D3/S1 di bidang Teknik Mesin, Teknik Sipil, Manajemen, atau bidang terkait.",
      "Pengalaman kerja minimal 2 tahun di bidang penjualan B2B alat berat, mesin industri, kendaraan komersial, atau bahan bangunan proyek.",
      "Memiliki pemahaman fungsional mengenai cara kerja alat berat konstruksi (mixer beton, concrete pump, atau heavy vehicles).",
      "Memiliki keterampilan komunikasi persuasif, negosiasi tingkat lanjut, dan orientasi kuat pada pencapaian target penjualan.",
      "Memiliki kendaraan pribadi dan SIM A/C aktif, serta bersedia melakukan kunjungan dinas ke lokasi mitra kerja.",
    ],
    benefits: [
      "Gaji pokok kompetitif bulanan.",
      "Skema komisi penjualan progresif tanpa batas (*uncapped sales incentive*).",
      "Tunjangan transportasi, operasional dinas, dan komunikasi.",
      "Pelatihan komprehensif produk (*product knowledge*) langsung dari tim teknisi ahli DMW.",
      "BPJS Kesehatan dan BPJS Ketenagakerjaan.",
      "Jenjang karir terbuka di perusahaan distributor alat berat yang terus berekspansi.",
    ],
    postedDate: "2026-09-25",
    closingDate: "2026-11-30",
    status: "active",
  },
  {
    id: "field-service-commissioning-technician",
    title: "Field Service & Commissioning Technician (Alat Berat)",
    department: "Teknis & After Sales",
    type: "Penuh Waktu (Full-Time)",
    location: "Tangerang (Workshop) & Siap Dinas On-site ke Seluruh Indonesia",
    experience: "Min. 2 Tahun (Mekanik Alat Berat / Mesin Diesel)",
    education: "SMK Teknik Mesin / Otomotif / Alat Berat atau D3 Teknik Mesin/Elektro",
    overview:
      "Bertanggung jawab dalam proses Pre-Delivery Inspection (PDI), pengujian operasional (commissioning) alat berat baru di lokasi proyek, pemeliharaan berkala, penanganan masalah teknis (troubleshooting sistem hidrolik & diesel), serta memimpin pelatihan operator klien di lapangan.",
    responsibilities: [
      "Melaksanakan inspeksi kelayakan unit (PDI) di gudang perakitan Tangerang sebelum unit dikirim ke lokasi proyek mitra.",
      "Melakukan instalasi awal dan commissioning unit di lapangan bersama operator kontraktor di berbagai provinsi.",
      "Memandu sesi pelatihan operator (Training Content) mencakup pengoperasian aman, pemeliharaan preventif harian, dan standar K3.",
      "Mendiagnosis dan menangani gangguan teknis (*troubleshooting*) pada mesin diesel, sistem transmisi hidrolik, dan kelistrikan 24V.",
      "Membuat laporan teknis servis lapangan berkala serta merekomendasikan penggantian suku cadang resmi tepat waktu.",
    ],
    requirements: [
      "Pendidikan minimal SMK Jurusan Alat Berat / Teknik Otomotif / Mesin atau D3 Teknik.",
      "Pengalaman minimal 2 tahun sebagai mekanik lapangan alat berat (Self Loading Mixer, Forklift, Excavator, Backhoe, atau Genset Industri).",
      "Menguasai pembacaan diagram hidrolik, sistem pendingin, pemipaan beton, serta sistem kelistrikan dasar alat berat.",
      "Mampu bekerja dengan disiplin tinggi, memprioritaskan keselamatan kerja (K3), dan mampu bekerja mandiri di remote area.",
      "Bersedia ditugaskan dinas luar kota/pulau sesuai penempatan unit proyek (Sumatera, Kalimantan, Sulawesi, Bali, Nusa Tenggara, hingga Papua).",
    ],
    benefits: [
      "Gaji pokok kompetitif sesuai pengalaman teknis.",
      "Uang saku harian dinas luar kota (*daily travel allowance*) di atas rata-rata industri.",
      "Akomodasi, tiket perjalanan dinas, dan transportasi lapangan ditanggung 100% oleh perusahaan.",
      "Peralatan servis standar industri dan Alat Pelindung Diri (APD) lengkap.",
      "BPJS Kesehatan dan BPJS Ketenagakerjaan.",
      "Sertifikasi dan pelatihan peningkatan keahlian sistem hidrolik alat berat.",
    ],
    postedDate: "2026-09-22",
    closingDate: "2026-11-30",
    status: "active",
  },
  {
    id: "digital-marketing-content-specialist",
    title: "Digital Marketing & Creative Content Specialist",
    department: "Marketing & Komunikasi",
    type: "Penuh Waktu (Full-Time)",
    location: "Tangerang (Head Office Pergudangan Eraprima)",
    experience: "Min. 1-2 Tahun (Digital Marketing B2B / Content Production)",
    education: "D3 / S1 Komunikasi, Desain Komunikasi Visual (DKV), Pemasaran, atau setara",
    overview:
      "Bertanggung jawab merancang strategi konten digital, memproduksi dokumentasi video/foto operasional alat berat di lapangan, mengelola sosial media (YouTube, TikTok, Instagram, LinkedIn), serta mengoptimalkan kampanye digital untuk menjangkau pengusaha konstruksi di seluruh Indonesia.",
    responsibilities: [
      "Merancang konsep, merekam, dan mengedit konten video beresolusi tinggi (short video & edukasi komprehensif) seputar demonstrasi unit alat berat.",
      "Mengelola dan menjadwalkan publikasi berkala di saluran media sosial resmi Daya Maestro Wellindo.",
      "Menyusun materi visual promosi digital (brosur interaktif, infografis spesifikasi, flyer pameran, dan presentasi profil).",
      "Mengelola kampanye iklan digital berbayar (Meta Ads & Google Ads) berkoordinasi dengan tim penjualan B2B.",
      "Menganalisis performa konten melalui analitik digital dan menyusun rekomendasi strategi konten bulanan.",
    ],
    requirements: [
      "Pendidikan minimal D3/S1 di bidang Komunikasi, DKV, Multimedia, Pemasaran Digital, atau pengalaman setara.",
      "Pengalaman minimal 1-2 tahun dalam pembuatan konten digital (portofolio video/desain wajib dilampirkan).",
      "Mahir mengoperasikan software editing video & desain grafis (Adobe Premiere, CapCut, Photoshop, Illustrator, atau Figma).",
      "Memiliki rasa estetika visual yang baik, memahami tren konten B2B industri, dan komunikatif dalam menyusun narasi/copywriting.",
      "Antusias mempelajari dunia alat berat serta bersedia sesekali meliput unit beroperasi di area proyek atau pameran alat berat.",
    ],
    benefits: [
      "Gaji pokok kompetitif sesuai keahlian & portofolio kreatif.",
      "Fasilitas perlengkapan dokumentasi dan perangkat kerja kreatif.",
      "Lingkungan kerja kreatif yang dinamis dan terbuka terhadap inovasi konten baru.",
      "Kesempatan meliput event pameran industri nasional (seperti Mining Indonesia, Konstruksi Indonesia).",
      "BPJS Kesehatan dan BPJS Ketenagakerjaan.",
    ],
    postedDate: "2026-09-20",
    closingDate: "2026-11-30",
    status: "active",
  },
];

/**
 * Generate Direct Gmail Web Compose URL
 * Format resmi: https://mail.google.com/mail/?view=cm&fs=1&to=...&su=...&body=...
 */
export function generateGmailApplyUrl(jobTitle: string): string {
  const subject = `Lamaran Pekerjaan: ${jobTitle} - [Nama Lengkap Anda]`;
  const body = `Yth. Tim HR & Rekrutmen PT Daya Maestro Wellindo,

Perkenalkan, saya [Nama Lengkap Anda]. Melalui email ini, saya bermaksud untuk mengajukan surat lamaran kerja dan Curriculum Vitae (CV) untuk posisi:

📌 Posisi yang Dilamar: ${jobTitle}
🏢 Perusahaan: PT Daya Maestro Wellindo

Ringkasan Singkat Profil Saya:
- Nama Lengkap: [Nama Anda]
- Nomor HP / WhatsApp: [Nomor Kontak Aktif]
- Kota Domisili: [Domisili Anda]
- Pendidikan Terakhir: [Jurusan & Universitas/Sekolah]
- Pengalaman Kerja Terakhir: [Pengalaman Singkat Anda]

Bersama email ini, saya lampirkan dokumen pendukung:
1. Curriculum Vitae (CV) Terbaru
2. Ijazah / Sertifikat Keahlian / Portofolio Kerja

Besar harapan saya untuk memperoleh kesempatan wawancara agar dapat menjelaskan lebih mendalam mengenai kualifikasi dan kontribusi yang dapat saya berikan untuk perkembangan PT Daya Maestro Wellindo.

Terima kasih atas waktu, perhatian, dan kesempatan yang Bapak/Ibu berikan.

Hormat saya,
[Nama Lengkap Anda]
[Nomor Telepon]`;

  return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    companyData.email
  )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Generate Native Mailto URL for native email clients (Outlook, Apple Mail, Thunderbird, etc.)
 */
export function generateMailtoApplyUrl(jobTitle: string): string {
  const subject = `Lamaran Pekerjaan: ${jobTitle} - [Nama Lengkap Anda]`;
  const body = `Yth. Tim HR PT Daya Maestro Wellindo,

Saya bermaksud melamar untuk posisi: ${jobTitle}.
Terlampir CV terbaru dan dokumen pendukung saya.

Kontak Saya:
Nama: [Nama Lengkap]
No. HP: [Nomor HP]
Domisili: [Kota]

Terima kasih.`;

  return `mailto:${encodeURIComponent(companyData.email)}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}
