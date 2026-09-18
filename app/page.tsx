import Link from "next/link";
import { newsData } from "@/data/news";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import { HeroSection } from "@/components/home/hero-section";
import { AboutAndFeaturesSection } from "@/components/home/about-and-features-section";
import { FeaturedProductsSection } from "@/components/home/featured-products-section";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  const latestNews = newsData.slice(0, 2);

  return (
    <div className="flex flex-col space-y-24 pb-16">
      {/* Sambutan Utama (Hero) */}
      <HeroSection />

      {/* Tentang Perusahaan & Keunggulan */}
      <AboutAndFeaturesSection />

      {/* Sorotan Produk */}
      <FeaturedProductsSection />

      {/* Kabar Terbaru */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Kabar Terbaru
            </h2>
            <p className="text-muted-foreground">
              Informasi terkini seputar inovasi, rilis, dan aktivitas perusahaan.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/news" className="gap-2">
              Semua Berita <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestNews.map((news) => (
            <article
              key={news.id}
              className="rounded-xl border bg-card p-6 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                  <span>{news.category}</span>
                  <span>•</span>
                  <span>{news.publishedAt}</span>
                </div>
                <h3 className="font-semibold text-xl text-foreground hover:text-primary transition-colors">
                  <Link href="/news">{news.title}</Link>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {news.excerpt}
                </p>
              </div>
              <Link
                href="/news"
                className="text-sm font-semibold text-primary inline-flex items-center gap-1 hover:underline"
              >
                Baca Selengkapnya <ArrowRight className="h-3 w-3" />
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Hubungi Kami / CTA WhatsApp */}
      <CtaSection />
    </div>
  );
}
