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
    id: "news-mining-expo-2025",
    slug: "mining-expo-2025",
    title: "Mining Expo 2025",
    publishedAt: "2025-09-12",
    excerpt:
      "Sorotan keikutsertaan Daswell Indonesia dalam ajang Mining Expo 2025, memamerkan keandalan peralatan mesin berat dan genset industri tugas berat.",
    content:
      "Pada perhelatan Mining Expo 2025 di JIExpo Kemayoran, Daswell Indonesia memperkenalkan serangkaian produk peralatan berat dan genset heavy-duty berkapasitas besar yang dirancang khusus untuk memenuhi standar keselamatan kerja dan keandalan operasional ekstrem di sektor pertambangan Indonesia.",
    paragraphs: [
      "Sektor pertambangan menuntut standar peralatan dengan ketahanan tinggi dan ketersediaan pasokan daya tanpa henti 24/7. Dalam Mining Expo 2025, Daswell Indonesia menghadirkan genset berkapasitas 500kVA hingga 1000kVA serta solusi filtrasi industri yang teruji di medan kerja berat.",
      "Tim rekayasa teknis Daswell Indonesia berkesempatan berdiskusi mendalam dengan puluhan pimpinan perusahaan tambang terkemuka mengenai efisiensi konsumsi bahan bakar dan integrasi sistem telematika pemantauan mesin jarak jauh.",
      "Antusiasme yang tinggi selama expo membuktikan bahwa solusi permesinan Daswell dipercaya sebagai pilar penggerak operasional industri pertambangan nasional yang andal dan aman.",
    ],
    author: "Tim Media Daswell",
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
  {
    id: "news-inagritech-2025",
    slug: "inagritech-2025",
    title: "Inagritech 2025",
    publishedAt: "2025-08-28",
    excerpt:
      "Kehadiran Daswell Indonesia di Inagritech 2025 menghadirkan inovasi mekanisasi dan teknologi manufaktur terdepan untuk sektor pertanian dan industri pengolahan.",
    content:
      "Daswell Indonesia turut berpartisipasi dalam pameran internasional Inagritech 2025 yang diselenggarakan di Jakarta International Expo. Melalui ajang bergengsi ini, Daswell memamerkan berbagai portofolio mesin industri mutakhir, genset bertenaga tinggi, serta solusi otomasi yang ramah lingkungan dan efisien energi guna mendukung modernisasi rantai pasok industri nasional.",
    paragraphs: [
      "Inagritech 2025 menjadi wadah kolaborasi penting bagi para pelaku industri agrikultur, manufaktur pengolahan, dan rekayasa mesin di kawasan Asia Tenggara. Keikutsertaan Daswell Indonesia menegaskan komitmen berkelanjutan dalam menyediakan peralatan industri berdaya tahan tinggi dengan efisiensi energi terbaik di kelasnya.",
      "Sepanjang pameran, booth Daswell Indonesia ramai dikunjungi oleh delegasi perusahaan agribisnis, kontraktor pabrik, dan mitra industri yang ingin melihat langsung demonstrasi unit mesin penggerak presisi serta genset heavy-duty ramah emisi.",
      "Dengan keberhasilan partisipasi ini, Daswell Indonesia siap memperkuat dukungan purna jual, ketersediaan suku cadang resmi, serta layanan pendampingan teknis bagi seluruh mitra di seluruh pelosok tanah air.",
    ],
    author: "Tim Media Daswell",
    image: "/images/Inagritech 2025/Inagritech (5).jpeg",
    video: "/images/Inagritech 2025/Video Inagritech 2025.mp4",
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
    id: "news-mining-expo-2024",
    slug: "mining-expo-2024",
    title: "Mining Expo 2024",
    publishedAt: "2024-09-14",
    excerpt:
      "Sorotan kehadiran Daswell Indonesia pada ajang Mining Expo September 2024 di JIExpo Kemayoran, memamerkan armada mesin konstruksi, forklift 4x4, dan teknologi batching plant terdepan.",
    content:
      "Daswell Indonesia kembali hadir dalam pameran pertambangan terbesar di Asia Tenggara, Mining Expo 2024 di JIExpo Kemayoran, Jakarta. Ajang ini dimanfaatkan untuk memperkenalkan inovasi terkini peralatan konstruksi dan penanganan material berat, termasuk Self Loading Mixer berkapasitas besar dan Rough Terrain Forklift 4x4.",
    paragraphs: [
      "Mining Expo 2024 menjadi magnet bagi para pelaku industri tambang mineral dan batubara di kawasan regional. Booth Daswell menampilkan armada mesin modern dengan durabilitas tinggi yang siap beroperasi pada kondisi medan tambang yang menantang.",
      "Pengunjung dari berbagai korporasi tambang nasional mendapatkan penjelasan teknis langsung mengenai sistem penggerak empat roda (4x4), kabin ber-AC dengan sistem pemantauan multi-kamera, serta efisiensi konsumsi bahan bakar dari unit armada Daswell.",
      "Keikutsertaan berkelanjutan ini membuktikan pengakuan dan kepercayaan para pelaku industri terhadap keandalan produk dan dukungan purna jual Daswell di Indonesia.",
    ],
    author: "Tim Media Daswell",
    image:
      "/images/Content/Artikel/Mining Expo 2024/Mining Expo September 2024/Exhibition (1).jpeg",
    video:
      "/images/Content/Artikel/Mining Expo 2024/Mining Expo September 2024/Mining Expo 2024.mp4",
    category: "Pameran & Ekshibisi",
    gallery: [
      "/images/Content/Artikel/Mining Expo 2024/Mining Expo September 2024/Exhibition (1).jpeg",
      "/images/Content/Artikel/Mining Expo 2024/Mining Expo September 2024/Exhibition (2).jpeg",
      "/images/Content/Artikel/Mining Expo 2024/Mining Expo September 2024/Exhibition (3).jpeg",
      "/images/Content/Artikel/Mining Expo 2024/Mining Expo September 2024/Mining Expo 2024 (2).jpeg",
      "/images/Content/Artikel/Mining Expo 2024/Mining Expo September 2024/Mining Expo 2024 (4).jpeg",
      "/images/Content/Artikel/Mining Expo 2024/Mining Expo September 2024/Mining Expo 2024 (7).jpeg",
      "/images/Content/Artikel/Mining Expo 2024/Mining Expo September 2024/Mining Expo sep 2024 (1).jpeg",
      "/images/Content/Artikel/Mining Expo 2024/Mining Expo September 2024/Mining Expo sep 2024 (2).jpeg",
    ],
  },
  {
    id: "news-sawit-indonesia-expo-2024",
    slug: "sawit-indonesia-expo-2024",
    title: "Sawit Indonesia Expo 2024",
    publishedAt: "2024-08-10",
    excerpt:
      "Dokumentasi partisipasi Daswell Indonesia pada Sawit Indonesia Expo 2024 di Pekanbaru, memperkenalkan Backhoe Loader untuk efisiensi pembuatan parit dan jalan perkebunan kelapa sawit.",
    content:
      "Daswell Indonesia berpartisipasi aktif dalam perhelatan akbar Sawit Indonesia Expo (SIEXPO) 2024 yang diselenggarakan pada 8-10 Agustus 2024 di Pekanbaru, Riau. Ajang bergengsi ini menjadi momentum penting bagi Daswell untuk menampilkan keandalan unit Backhoe Loader multifungsi yang dirancang untuk mendukung operasional perkebunan kelapa sawit.",
    paragraphs: [
      "Sawit Indonesia Expo 2024 mempertemukan para pemangku kepentingan industri kelapa sawit dari seluruh penjuru tanah air. Dalam kesempatan ini, booth Daswell Indonesia disambut antusias oleh pimpinan perkebunan, manajer operasional kebun, serta kontraktor agrikultur.",
      "Keunggulan unit Backhoe Loader Daswell yang memadukan fungsi Wheel Loader dan Excavator menjadi solusi ideal dalam penggalian parit drainase berukuran besar untuk mengalirkan air perkebunan saat musim hujan, sekaligus pemeliharaan akses jalan kebun sawit yang terpencil.",
      "Melalui partisipasi di SIEXPO 2024, Daswell Indonesia kembali mempertegas komitmennya dalam mendukung mekanisasi perkebunan kelapa sawit nasional yang efisien, handal, dan berdaya saing tinggi.",
    ],
    author: "Tim Media Daswell",
    image:
      "/images/Content/Artikel/Sawit Indonesia Expo 8 Agustus 2024 - 10 Agustus 2024/Siexpo 2024.jpeg",
    video:
      "/images/Content/Artikel/Sawit Indonesia Expo 8 Agustus 2024 - 10 Agustus 2024/WhatsApp Video 2025-03-26 at 13.21.12.mp4",
    category: "Pameran & Ekshibisi",
    gallery: [
      "/images/Content/Artikel/Sawit Indonesia Expo 8 Agustus 2024 - 10 Agustus 2024/Siexpo 2024.jpeg",
      "/images/Content/Artikel/Sawit Indonesia Expo 8 Agustus 2024 - 10 Agustus 2024/WhatsApp Image 2025-03-26 at 13.21.11.jpeg",
      "/images/Content/Artikel/Sawit Indonesia Expo 8 Agustus 2024 - 10 Agustus 2024/WhatsApp Image 2025-03-26 at 13.21.14 (1).jpeg",
      "/images/Content/Artikel/Sawit Indonesia Expo 8 Agustus 2024 - 10 Agustus 2024/WhatsApp Image 2025-03-26 at 13.21.14 (2).jpeg",
      "/images/Content/Artikel/Sawit Indonesia Expo 8 Agustus 2024 - 10 Agustus 2024/WhatsApp Image 2025-03-26 at 13.21.15.jpeg",
      "/images/Content/Artikel/Sawit Indonesia Expo 8 Agustus 2024 - 10 Agustus 2024/WhatsApp Image 2025-03-26 at 13.21.15 (1).jpeg",
    ],
  },
  {
    id: "news-mining-expo-2023",
    slug: "mining-expo-2023",
    title: "Mining Expo 2023",
    publishedAt: "2023-09-16",
    excerpt:
      "Liputan keikutsertaan Daswell Indonesia di Mining Expo 2023, memperkuat komitmen sebagai penyedia solusi mobile batching plant dan mesin beton berstandar global.",
    content:
      "Pada ajang Mining Expo 2023, Daswell Indonesia menghadirkan solusi terintegrasi mesin pengolah beton dan mobile batching plant. Kehadiran Daswell menjadi daya tarik tersendiri bagi kontraktor infrastruktur dan pelaku tambang yang membutuhkan kecepatan dan fleksibilitas pencampuran beton langsung di lokasi proyek.",
    paragraphs: [
      "Mining Expo 2023 menjadi momentum strategis bagi Daswell dalam memperluas jangkauan kemitraan dengan sektor tambang dan infrastruktur berat nasional.",
      "Unit Self Loading Mixer dan Concrete Mixer with Pump yang dipamerkan menarik minat tinggi berkat kemampuan produksi beton segar langsung di medan kerja ekstrem dengan efisiensi biaya transportasi yang signifikan.",
      "Melalui pameran ini, Daswell Indonesia terus mempertegas posisinya sebagai mitra andal penyedia alat berat berkualitas tinggi dengan layanan purna jual yang sigap.",
    ],
    author: "Tim Media Daswell",
    image:
      "/images/Content/Artikel/Mining Expo 2023/mining-expo-2023-01.jpg",
    video:
      "/images/Content/Artikel/Mining Expo 2023/WhatsApp Video 2025-03-19 at 17.47.10.mp4",
    category: "Pameran & Ekshibisi",
    gallery: [
      "/images/Content/Artikel/Mining Expo 2023/mining-expo-2023-01.jpg",
    ],
  },
  {
    id: "news-mining-expo-2022",
    slug: "mining-expo-2022",
    title: "Mining Expo 2022",
    publishedAt: "2022-09-17",
    excerpt:
      "Dokumentasi partisipasi Daswell Indonesia di ajang Mining Expo 2022, langkah awal pengenalan lini armada mobile batching plant di panggung pertambangan nasional.",
    content:
      "Mining Expo 2022 menjadi tonggak penting bagi Daswell Indonesia dalam memperkenalkan produk-produk mesin konstruksi dan pengolah beton berkualitas internasional kepada pasar pertambangan dan konstruksi berat di Indonesia.",
    paragraphs: [
      "Keikutsertaan di Mining Expo 2022 membuka peluang kemitraan baru dengan para kontraktor proyek infrastruktur nasional yang mencari alternatif batching plant fleksibel dan hemat biaya mobilisasi.",
      "Booth Daswell Indonesia ramai dikunjungi para delegasi yang antusias mempelajari keunggulan spesifikasi mesin, sistem transmisi gandar ganda, serta efisiensi operasional unit.",
      "Pameran ini menjadi pijakan kokoh bagi ekspansi Daswell Indonesia dalam melayani proyek-proyek infrastruktur di seluruh pelosok nusantara.",
    ],
    author: "Tim Media Daswell",
    image:
      "/images/Content/Artikel/Mining Expo 2022/mining-expo-2022-01.jpg",
    category: "Pameran & Ekshibisi",
    gallery: [
      "/images/Content/Artikel/Mining Expo 2022/mining-expo-2022-01.jpg",
      "/images/Content/Artikel/Mining Expo 2022/mining-expo-2022-02.jpg",
      "/images/Content/Artikel/Mining Expo 2022/mining-expo-2022-03.jpg",
      "/images/Content/Artikel/Mining Expo 2022/mining-expo-2022-04.jpg",
      "/images/Content/Artikel/Mining Expo 2022/mining-expo-2022-07.jpg",
      "/images/Content/Artikel/Mining Expo 2022/mining-expo-2022-10.jpg",
    ],
  },
];
