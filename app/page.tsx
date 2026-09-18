import Link from "next/link";
import { companyData } from "@/data/company";
import { productsData } from "@/data/products";
import { newsData } from "@/data/news";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Award,
  Clock,
  MessageSquare,
} from "lucide-react";

import { HeroSection } from "@/components/home/hero-section";
import { AboutAndFeaturesSection } from "@/components/home/about-and-features-section";

export default function HomePage() {
  const featuredProducts = productsData.filter((p) => p.featured);
  const latestNews = newsData.slice(0, 2);

  return (
    <div className="flex flex-col space-y-24 pb-16">
      {/* Sambutan Utama (Hero) */}
      <HeroSection />

      {/* Tentang Perusahaan & Keunggulan */}
      <AboutAndFeaturesSection />

      {/* Sorotan Produk */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              Produk Unggulan
            </h2>
            <p className="text-muted-foreground">
              Solusi peralatan manufaktur dan industri pilihan utama mitra kami.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/products" className="gap-2">
              Semua Produk <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col rounded-xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 bg-muted flex items-center justify-center text-muted-foreground text-sm font-medium">
                {product.name} Image Placeholder
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-semibold text-lg text-foreground">{product.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>
                <Button asChild variant="secondary" className="w-full">
                  <Link href={`/products`}>Detail Produk</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

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

      {/* CTA Section */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-primary text-primary-foreground p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Siap Tingkatkan Efisiensi Bisnis Anda Bersama Kami?
          </h2>
          <p className="max-w-2xl mx-auto text-primary-foreground/90 text-sm sm:text-base">
            Hubungi perwakilan teknis kami untuk konsultasi spesifikasi mesin, penawaran harga, dan solusi terbaik untuk industri Anda.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <a href={companyData.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-4 w-4" />
                Chat via WhatsApp Sekarang
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Link href="/contact">Informasi Kontak Lengkap</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
