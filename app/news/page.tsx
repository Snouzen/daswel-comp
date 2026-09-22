import type { Metadata } from "next";
import Link from "next/link";
import { newsData } from "@/data/news";
import { companyData } from "@/data/company";
import { Newspaper, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NewsCard } from "@/components/news/news-card";

export const metadata: Metadata = {
  title: "Berita & Publikasi Perusahaan",
  description:
    `Ikuti publikasi resmi, kabar terbaru, dan siaran pers dari ${companyData.name}.`,
  alternates: {
    canonical: "https://daswel.com/news",
  },
  openGraph: {
    title: `Berita & Publikasi | ${companyData.name}`,
    description:
      `Publikasi resmi, kabar terbaru, dan siaran pers dari ${companyData.name}.`,
    url: "https://daswel.com/news",
    siteName: companyData.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://daswel.com/images/full-logo.png",
        width: 1200,
        height: 630,
        alt: `Berita & Publikasi - ${companyData.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Berita & Publikasi | ${companyData.name}`,
    description:
      `Publikasi resmi dan siaran pers ${companyData.name}.`,
    images: ["https://daswel.com/images/full-logo.png"],
  },
};

export default function NewsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Page Header */}
      <header className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <Newspaper className="h-3.5 w-3.5" />
          <span>Publikasi & Kabar</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Berita & Publikasi
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Publikasi resmi, kabar aktivitas armada, dan siaran pers {companyData.name}.
        </p>
      </header>

      {/* News Articles Grid */}
      <section aria-label="Daftar Artikel Berita" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {newsData.map((article, idx) => (
          <NewsCard key={article.id} article={article} delay={idx * 0.1} />
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
