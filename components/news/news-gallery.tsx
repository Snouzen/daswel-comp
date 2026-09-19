"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

interface NewsGalleryProps {
  title: string;
  gallery: string[];
}

export function NewsGallery({ title, gallery }: NewsGalleryProps) {
  if (!gallery || gallery.length === 0) return null;

  return (
    <section aria-label="Galeri Foto Pameran" className="space-y-6 pt-8 border-t">
      <div className="flex items-center gap-2.5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <ImageIcon className="h-5 w-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-foreground">
            Dokumentasi Foto Kegiatan Pameran
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Galeri visual gerai dan partisipasi aktif dalam ajang {title}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {gallery.map((imgSrc, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
            className="relative h-60 rounded-2xl border overflow-hidden bg-muted group shadow-sm hover:shadow-lg transition-all hover:border-primary/40"
          >
            <Image
              src={imgSrc}
              alt={`Dokumentasi ${title} foto #${idx + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-xs text-white font-medium">Foto #{idx + 1} — {title}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
