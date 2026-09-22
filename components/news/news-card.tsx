"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { NewsItem } from "@/data/news";
import { Calendar, User, ArrowUpRight, Video, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NewsCardProps {
  article: NewsItem;
  delay?: number;
}

export function NewsCard({ article, delay = 0 }: NewsCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay }}
      className="flex flex-col rounded-3xl border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all hover:border-primary/40 group"
    >
      {/* Visual Media Header / Thumbnail */}
      <Link
        href={`/news/${article.slug}`}
        className="relative h-60 sm:h-72 w-full overflow-hidden bg-muted/40 block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        {article.image ? (
          <>
            <Image
              src={article.image}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50" />
          </>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-muted/30 text-muted-foreground/40 gap-2.5 p-6 text-center border-b group-hover:bg-muted/50 transition-colors">
            <div className="p-3.5 rounded-2xl bg-muted/80 text-muted-foreground/50 group-hover:text-primary transition-colors">
              <ImageIcon className="h-8 w-8 stroke-[1.5]" />
            </div>
            <span className="text-xs font-medium tracking-wide text-muted-foreground/60">
              Foto Belum Tersedia
            </span>
          </div>
        )}
        <div className="absolute top-4 left-4 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
            {article.category}
          </span>
          {article.video && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-white shadow-sm">
              <Video className="h-3 w-3 text-primary" />
              <span>Video Dokumentasi</span>
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
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
            <Link href={`/news/${article.slug}`}>
              {article.title}
            </Link>
          </h2>

          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-3">
            {article.excerpt}
          </p>

          <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed bg-muted/40 p-4 rounded-2xl border line-clamp-3">
            {article.content}
          </p>
        </div>

        <div className="pt-3 border-t flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {article.video ? "Tersedia Video Dokumentasi" : article.image ? "Dokumentasi Foto Pameran" : "Artikel DMW"}
          </span>
          <Button asChild variant="ghost" className="gap-1.5 p-0 text-primary hover:bg-transparent hover:underline font-semibold text-sm">
            <Link href={`/news/${article.slug}`}>
              <span>Baca Selengkapnya</span>
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
