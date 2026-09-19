export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  content: string;
  paragraphs?: string[];
  author: string;
  image: string;
  video?: string;
  category: string;
  gallery?: string[];
}

export const newsData: NewsItem[] = [
  {
    id: "news-inagritech-2025",
    slug: "inagritech-2025",
    title: "Inagritech 2025",
    publishedAt: "2025-08-28",
    excerpt:
      "Kehadiran Daswel Company di Inagritech 2025 menghadirkan inovasi mekanisasi dan teknologi manufaktur terdepan untuk sektor pertanian dan industri pengolahan.",
    content:
      "Daswel Company turut berpartisipasi dalam pameran internasional Inagritech 2025 yang diselenggarakan di Jakarta International Expo. Melalui ajang bergengsi ini, Daswel memamerkan berbagai portofolio mesin industri mutakhir, genset bertenaga tinggi, serta solusi otomasi yang ramah lingkungan dan efisien energi guna mendukung modernisasi rantai pasok industri nasional.",
    paragraphs: [
      "Inagritech 2025 menjadi wadah kolaborasi penting bagi para pelaku industri agrikultur, manufaktur pengolahan, dan rekayasa mesin di kawasan Asia Tenggara. Keikutsertaan Daswel Company menegaskan komitmen berkelanjutan dalam menyediakan peralatan industri berdaya tahan tinggi dengan efisiensi energi terbaik di kelasnya.",
      "Sepanjang pameran, booth Daswel Company ramai dikunjungi oleh delegasi perusahaan agribisnis, kontraktor pabrik, dan mitra industri yang ingin melihat langsung demonstrasi unit mesin penggerak presisi serta genset heavy-duty ramah emisi.",
      "Dengan keberhasilan partisipasi ini, Daswel Company siap memperkuat dukungan purna jual, ketersediaan suku cadang resmi, serta layanan pendampingan teknis bagi seluruh mitra di seluruh pelosok tanah air.",
    ],
    author: "Tim Media Daswel",
    image: "/images/Inagritech 2025/Inagritech (1).jpeg",
    video: "/images/Inagritech 2025/Inagritech.mp4",
    category: "Pameran & Ekshibisi",
    gallery: [
      "/images/Inagritech 2025/Inagritech (1).jpeg",
      "/images/Inagritech 2025/Inagritech (2).jpeg",
      "/images/Inagritech 2025/Inagritech (4).jpeg",
      "/images/Inagritech 2025/Inagritech (5).jpeg",
      "/images/Inagritech 2025/Inagritech (7).jpeg",
      "/images/Inagritech 2025/Inagritech (11).jpeg",
    ],
  },
  {
    id: "news-mining-expo-2025",
    slug: "mining-expo-2025",
    title: "Mining Expo 2025",
    publishedAt: "2025-09-12",
    excerpt:
      "Sorotan keikutsertaan Daswel Company dalam ajang Mining Expo 2025, memamerkan keandalan peralatan mesin berat dan genset industri tugas berat.",
    content:
      "Pada perhelatan Mining Expo 2025 di JIExpo Kemayoran, Daswel Company memperkenalkan serangkaian produk peralatan berat dan genset heavy-duty berkapasitas besar yang dirancang khusus untuk memenuhi standar keselamatan kerja dan keandalan operasional ekstrem di sektor pertambangan Indonesia.",
    paragraphs: [
      "Sektor pertambangan menuntut standar peralatan dengan ketahanan tinggi dan ketersediaan pasokan daya tanpa henti 24/7. Dalam Mining Expo 2025, Daswel Company menghadirkan genset berkapasitas 500kVA hingga 1000kVA serta solusi filtrasi industri yang teruji di medan kerja berat.",
      "Tim rekayasa teknis Daswel Company berkesempatan berdiskusi mendalam dengan puluhan pimpinan perusahaan tambang terkemuka mengenai efisiensi konsumsi bahan bakar dan integrasi sistem telematika pemantauan mesin jarak jauh.",
      "Antusiasme yang tinggi selama expo membuktikan bahwa solusi permesinan Daswel dipercaya sebagai pilar penggerak operasional industri pertambangan nasional yang andal dan aman.",
    ],
    author: "Tim Media Daswel",
    image: "/images/Mining Expo 2025/thumbnail.jpeg",
    category: "Pameran & Ekshibisi",
    gallery: [
      "/images/Mining Expo 2025/thumbnail.jpeg",
      "/images/Mining Expo 2025/Mining Expo 2025 (9).jpeg",
      "/images/Mining Expo 2025/Mining Expo 2025 (10).jpeg",
      "/images/Mining Expo 2025/Mining Expo 2025 (11).jpeg",
      "/images/Mining Expo 2025/Mining Expo 2025 (12).jpeg",
      "/images/Mining Expo 2025/Mining Expo 2025 (15).jpeg",
    ],
  },
];
