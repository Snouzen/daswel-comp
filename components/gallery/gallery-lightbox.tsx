"use client";

import { useEffect, useCallback, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { GalleryItem } from "@/data/gallery";
import { companyData } from "@/data/company";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  MapPin,
  Calendar,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryLightboxProps {
  item: GalleryItem | null;
  currentIndex: number;
  totalItems: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  onSelectIndex?: (index: number) => void;
}

export function GalleryLightbox({
  item,
  currentIndex,
  totalItems,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance in px
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onNext();
    } else if (isRightSwipe) {
      onPrev();
    }
  };

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!item) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    },
    [item, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (item) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  return (
    <AnimatePresence>
      {item && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Tampilan foto besar ${item.title}`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-2 sm:p-6"
          onClick={onClose}
        >
          {/* Main Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 10 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-5xl w-full max-h-[95vh] flex flex-col rounded-2xl bg-card border border-border/80 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {/* Header Bar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3 border-b bg-card/95 backdrop-blur shrink-0">
              <div className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary shrink-0">
                  <Layers className="h-3 w-3" />
                  {item.category}
                </span>
                <h2 className="text-sm sm:text-lg font-bold text-foreground truncate">
                  {item.title}
                </h2>
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <span className="text-xs font-medium text-muted-foreground px-2 py-0.5 rounded-md bg-muted/70">
                  {currentIndex + 1} / {totalItems}
                </span>
                <button
                  onClick={onClose}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Tutup jendela pratinjau foto (Esc)"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Big Photo Stage with Next/Prev Buttons */}
            <div className="relative flex-1 min-h-[340px] sm:min-h-[500px] bg-black flex items-center justify-center select-none overflow-hidden group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  className="relative w-full h-full min-h-[340px] sm:min-h-[500px]"
                >
                  <Image
                    src={item.image}
                    alt={`${item.title} - ${item.description}`}
                    fill
                    sizes="(max-width: 1280px) 100vw, 1200px"
                    className="object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls (Prev / Next) */}
              {totalItems > 1 && (
                <>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onPrev();
                    }}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-primary text-white transition-all duration-200 backdrop-blur-md shadow-xl hover:scale-110 active:scale-95 z-10"
                    aria-label="Foto sebelumnya (Panah Kiri / Geser Kanan)"
                    title="Foto sebelumnya (Panah Kiri)"
                  >
                    <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onNext();
                    }}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-primary text-white transition-all duration-200 backdrop-blur-md shadow-xl hover:scale-110 active:scale-95 z-10"
                    aria-label="Foto berikutnya (Panah Kanan / Geser Kiri)"
                    title="Foto berikutnya (Panah Kanan)"
                  >
                    <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </>
              )}
            </div>

            {/* Bottom Caption & Action Footer */}
            <div className="px-4 sm:px-6 py-3.5 border-t bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 shrink-0">
              <div className="space-y-1 max-w-2xl">
                <p className="text-xs sm:text-sm text-foreground leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-muted-foreground">
                  {item.location && (
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5 text-primary" />
                      {item.location}
                    </span>
                  )}
                  {item.date && (
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                      Tahun {item.date}
                    </span>
                  )}
                </div>
              </div>

              {/* Inquiry Action */}
              <Button asChild size="sm" className="gap-2 shrink-0 w-full sm:w-auto shadow-md">
                <a
                  href={`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
                    `Halo ${companyData.name}, saya melihat unit ${item.title} (${item.category}) di Galeri Foto website Anda. Mohon info ketersediaan stok, spesifikasi, dan penawaran harganya.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Konsultasi Unit Ini
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
