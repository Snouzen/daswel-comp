import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { newsData } from "@/data/news";
import { companyData } from "@/data/company";
import {
  Calendar,
  User,
  ArrowRight,
  Newspaper,
  ArrowUpRight,
  Video,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Berita & Liputan Dokumentasi Pameran",
  description:
    "Ikuti publikasi resmi, dokumentasi video pameran industri, Inagritech 2025, dan Mining Expo 2025 dari Daswel Company.",
  alternates: {
    canonical: "https://daswel.com/news",
  },
  openGraph: {
    title: `Berita & Dokumentasi Ekshibisi | ${companyData.name}`,
    description:
      "Dokumentasi kehadiran Daswel Company di Inagritech 2025 dan Mining Expo 2025 serta inovasi peralatan manufaktur terbaru.",
    url: "https://daswel.com/news",
    siteName: companyData.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://daswel.com/images/Mining Expo 2025/thumbnail.jpeg",
        width: 1200,
        height: 630,
        alt: `Dokumentasi Pameran Industri - ${companyData.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Berita & Dokumentasi Ekshibisi | ${companyData.name}`,
    description:
      "Dokumentasi video Inagritech 2025 dan foto pameran Mining Expo 2025 Daswel Company.",
    images: ["https://daswel.com/images/Mining Expo 2025/thumbnail.jpeg"],
  },
};

export default function NewsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Page Header */}
      <header className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Newspaper className="h-3.5 w-3.5" />
          <span>Publikasi & Dokumentasi</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Kabar & Liputan Pameran
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Dokumentasi resmi kehadiran {companyData.name} dalam pameran teknologi manufaktur, mekanisasi pertanian, dan industri pertambangan nasional.
        </p>
      </header>

      {/* News Articles Grid */}
      <section aria-label="Daftar Artikel Berita" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsData.map((article) => (
          <article
            key={article.id}
            className="flex flex-col rounded-3xl border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all hover:border-primary/40 group"
          >
            {/* Visual Header / Thumbnail (Video or Image) */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-muted">
              {article.video ? (
                <video
                  src={article.video}
                  poster={article.image}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
              <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                  {article.category}
                </span>
                {article.video && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/70 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
                    <Video className="h-3 w-3 text-primary" />
                    <span>Video Dokumentasi</span>
                  </span>
                )}
              </div>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3.5">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-primary" />
                    {article.publishedAt}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5 text-primary" />
                    {article.author}
                  </span>
                </div>

                <h2 className="font-bold text-2xl text-foreground group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h2>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>

                {/* Article Body Preview */}
                <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed bg-muted/40 p-4 rounded-2xl border">
                  {article.content}
                </p>
              </div>

              <div className="pt-2 border-t flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  {article.video ? "Dilengkapi Video Dokumentasi" : "Galeri Foto Ekshibisi"}
                </span>
                <Button asChild variant="ghost" className="gap-1.5 p-0 text-primary hover:bg-transparent hover:underline font-semibold text-sm">
                  <Link href="/contact">
                    <span>Konsultasi Liputan</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* Consultation Banner */}
      <section className="rounded-3xl border bg-primary/5 p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <h2 className="text-2xl font-bold text-foreground">
            Ingin Mengajukan Pertanyaan Pers atau Kerjasama?
          </h2>
          <p className="text-sm text-muted-foreground">
            Hubungi perwakilan humas dan komunikasi eksternal {companyData.name}.
          </p>
        </div>
        <Button asChild className="gap-2 shrink-0">
          <Link href="/contact">
            Hubungi Humas <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
