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

/**
 * Data Artikel & Publikasi Daya Maestro Wellindo (DMW).
 * Catatan: Foto dan konten dikosongkan sementara menggunakan placeholder Lorem Ipsum.
 * UI Card & Halaman Detail tetap dipertahankan agar ketika materi artikel resmi dari DMW sudah siap,
 * pengelola cukup mengisi judul, deskripsi, dan path foto di sini.
 */
export const newsData: NewsItem[] = [
  {
    id: "news-dmw-1",
    slug: "artikel-dmw-1",
    title: "Lorem Ipsum Dolor Sit Amet",
    publishedAt: "Segera Hadir",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    paragraphs: [
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    ],
    author: "Admin DMW",
    image: "",
    category: "Artikel DMW",
    gallery: [],
  },
  {
    id: "news-dmw-2",
    slug: "artikel-dmw-2",
    title: "Consectetur Adipiscing Elit Sed Do",
    publishedAt: "Segera Hadir",
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure.",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    paragraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    author: "Admin DMW",
    image: "",
    category: "Artikel DMW",
    gallery: [],
  },
  {
    id: "news-dmw-3",
    slug: "artikel-dmw-3",
    title: "Tempor Incididunt Ut Labore Et Dolore",
    publishedAt: "Segera Hadir",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    paragraphs: [
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
      "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    ],
    author: "Admin DMW",
    image: "",
    category: "Artikel DMW",
    gallery: [],
  },
];
