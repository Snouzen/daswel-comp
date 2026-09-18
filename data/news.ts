export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  publishedAt: string;
  excerpt: string;
  content: string;
  author: string;
  image: string;
  category: string;
}

export const newsData: NewsItem[] = [
  {
    id: "news-1",
    slug: "ekspansi-fasilitas-manufaktur-terbaru-2026",
    title: "Daswel Company Resmikan Fasilitas Produksi Ramah Lingkungan Baru",
    publishedAt: "2026-08-15",
    excerpt: "Langkah strategis memperluas kapasitas manufaktur nasional dengan teknologi beremisi karbon rendah.",
    content:
      "Dalam upaya memperkuat rantai pasok industri dalam negeri, Daswel Company secara resmi mengoperasikan fasilitas produksi ramah lingkungan terbaru yang mengusung standar efisiensi energi industri 4.0.",
    author: "Tim Humas Daswel",
    image: "/images/news-1.jpg",
    category: "Korporasi",
  },
  {
    id: "news-2",
    slug: "inovasi-efisiensi-energi-peralatan-industri",
    title: "Mengoptimalkan Efisiensi Energi pada Operasional Pabrik Skala Besar",
    publishedAt: "2026-07-28",
    excerpt: "Panduan dan riset terkini mengenai penghematan biaya listrik industri hingga 30% menggunakan teknologi pintar.",
    content:
      "Efisiensi energi menjadi fokus krusial bagi manajemen industri modern. Artikel ini mengulas implementasi teknologi terbaru yang mampu menekan konsumsi energi sekaligus menjaga performa mesin tetap prima.",
    author: "Divisi R&D Daswel",
    image: "/images/news-2.jpg",
    category: "Wawasan Industri",
  },
];
