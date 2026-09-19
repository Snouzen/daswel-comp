"use client";

import Link from "next/link";
import { newsData } from "@/data/news";
import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper } from "lucide-react";
import { NewsCard } from "@/components/news/news-card";

export function LatestNewsSection() {
  const latestNews = newsData.slice(0, 2);

  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Newspaper className="h-3.5 w-3.5" />
            <span>Kabar & Publikasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Berita & Aktivitas Perusahaan
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            Ikuti liputan pameran industri internasional, siaran pers resmi, dan wawasan operasional industri manufaktur.
          </p>
        </div>
        <Button asChild variant="outline" className="gap-2 shrink-0">
          <Link href="/news">
            Semua Berita <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* News Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {latestNews.map((news, idx) => (
          <NewsCard key={news.id} article={news} delay={idx * 0.1} />
        ))}
      </div>
    </section>
  );
}
