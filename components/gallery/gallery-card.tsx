"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { GalleryItem } from "@/data/gallery";
import { Maximize2, Layers, MapPin, Calendar } from "lucide-react";

interface GalleryCardProps {
  item: GalleryItem;
  index: number;
  onClick: () => void;
}

export function GalleryCard({ item, index, onClick }: GalleryCardProps) {
  return (
    <motion.figure
      layout
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.4) }}
      className="group cursor-pointer rounded-2xl overflow-hidden border bg-card text-card-foreground shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary m-0"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      aria-label={`Lihat detail foto ${item.title} - ${item.category}`}
    >
      {/* Responsive Next/Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
        <Image
          src={item.image}
          alt={`${item.title} (${item.category}) - ${item.description}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading={index < 6 ? "eager" : "lazy"}
          priority={index < 3}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />

        {/* Dark Gradient Overlay with Action Hint */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-md">
            <Maximize2 className="h-3.5 w-3.5" />
            Tampilkan Foto Penuh
          </span>
        </div>

        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold bg-background/90 text-foreground backdrop-blur-md px-3 py-1 rounded-full shadow-sm border">
            <Layers className="h-3 w-3 text-primary" />
            {item.category}
          </span>
        </div>
      </div>

      {/* Semantic Figcaption (Keterangan Foto di Grid) */}
      <figcaption className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1.5">
          <h3 className="font-bold text-base sm:text-lg text-foreground group-hover:text-primary transition-colors line-clamp-1">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {item.description}
          </p>
        </div>

        <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t">
          {item.location ? (
            <span className="inline-flex items-center gap-1.5 truncate max-w-[190px]">
              <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
              <span className="truncate">{item.location}</span>
            </span>
          ) : (
            <span>Daswel Heavy Equipment</span>
          )}
          {item.date && (
            <span className="inline-flex items-center gap-1 shrink-0 font-medium">
              <Calendar className="h-3.5 w-3.5" />
              {item.date}
            </span>
          )}
        </div>
      </figcaption>
    </motion.figure>
  );
}
