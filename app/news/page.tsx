import type { Metadata } from "next";
import Link from "next/link";
import { newsData } from "@/data/news";
import { companyData } from "@/data/company";
import { Calendar, User, ArrowRight, Newspaper, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Berita & Kabar Terbaru Perusahaan",
  description:
    "Ikuti publikasi resmi, inovasi teknologi manufaktur, siaran pers, dan wawasan industri terbaru dari Daswel Company.",
  alternates: {
    canonical: "https://daswel.com/news",
  },
  openGraph: {
    title: `Berita & Publikasi Resmi | ${companyData.name}`,
    description:
      "Kabar terkini seputar aktivitas korporasi, riset efisiensi energi, dan teknologi peralatan industri.",
    url: "https://daswel.com/news",
  },
  twitter: {
    card: "summary_large_image",
    title: `Berita & Publikasi Resmi | ${companyData.name}`,
    description:
      "Wawasan industri dan berita perkembangan teknologi manufaktur terkini.",
  },
};

export default function NewsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Page Header */}
      <header className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Newspaper className="h-3.5 w-3.5" />
          <span>Publikasi Resmi</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Kabar & Wawasan Industri
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Menyajikan informasi terbaru terkait inovasi mesin manufaktur, riset efisiensi operasional, dan perkembangan bisnis {companyData.name}.
        </p>
      </header>

      {/* News Articles Grid */}
      <section aria-label="Daftar Artikel Berita" className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {newsData.map((article) => (
          <article
            key={article.id}
            className="flex flex-col rounded-3xl border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all hover:border-primary/40 group"
          >
            {/* Visual Header / Thumbnail */}
            <div className="relative h-60 bg-gradient-to-br from-muted to-muted/60 flex flex-col items-center justify-center p-6 text-center">
              <span className="absolute top-4 left-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
                {article.category}
              </span>
              <Newspaper className="h-12 w-12 text-primary/60 group-hover:scale-110 transition-transform" />
              <span className="mt-3 text-xs text-muted-foreground">
                Thumbnail Artikel: {article.title}
              </span>
            </div>

            {/* Article Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {article.publishedAt}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
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
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed bg-muted/30 p-4 rounded-xl border">
                  {article.content}
                </p>
              </div>

              <div className="pt-2 border-t flex items-center justify-between">
                <Button asChild variant="ghost" className="gap-2 p-0 text-primary hover:bg-transparent hover:underline font-semibold">
                  <Link href={`#`}>
                    <span>Baca Selengkapnya</span>
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
