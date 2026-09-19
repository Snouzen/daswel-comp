export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
  video?: string;
  category: string;
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
    author: "Tim Media Daswel",
    image: "/images/Inagritech 2025/Inagritech (1).jpeg",
    video: "/images/Inagritech 2025/Inagritech.mp4",
    category: "Pameran & Ekshibisi",
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
    author: "Tim Media Daswel",
    image: "/images/Mining Expo 2025/thumbnail.jpeg",
    category: "Pameran & Ekshibisi",
  },
];
