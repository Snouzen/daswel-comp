"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { newsData } from "@/data/news";
import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper, Calendar, User } from "lucide-react";

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
            Ikuti perkembangan terkini seputar inovasi manufaktur, siaran pers resmi, dan wawasan operasional industri.
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
          <motion.article
            key={news.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            className="rounded-2xl border bg-card p-6 sm:p-8 shadow-sm hover:shadow-md transition-all hover:border-primary/40 flex flex-col justify-between space-y-5 group"
          >
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 font-semibold text-primary">
                  {news.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3.5 w-3.5" />
                  {news.publishedAt}
                </span>
                <span className="flex items-center gap-1">
                  <User className="h-3.5 w-3.5" />
                  {news.author}
                </span>
              </div>

              <h3 className="font-bold text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors leading-snug">
                <Link href="/news">{news.title}</Link>
              </h3>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {news.excerpt}
              </p>
            </div>

            <div className="pt-2 border-t flex items-center justify-between">
              <Link
                href="/news"
                className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 hover:gap-2.5 transition-all group-hover:underline"
              >
                <span>Baca Selengkapnya</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
