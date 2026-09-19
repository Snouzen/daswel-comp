"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { galleryCategories, type GalleryItem, type GalleryCategory } from "@/data/gallery";
import { companyData } from "@/data/company";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  MapPin,
  Calendar,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("Semua");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const filteredItems =
    selectedCategory === "Semua"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const activePhoto =
    activePhotoIndex !== null ? filteredItems[activePhotoIndex] : null;

  const handleNext = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) =>
        prev !== null ? (prev + 1) % filteredItems.length : null
      );
    }
  }, [activePhotoIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex !== null) {
      setActivePhotoIndex((prev) =>
        prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
      );
    }
  }, [activePhotoIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setActivePhotoIndex(null);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activePhotoIndex === null) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activePhotoIndex, handleClose, handleNext, handlePrev]);

  // Lock body scroll when modal open
  useEffect(() => {
    if (activePhotoIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activePhotoIndex]);

  return (
    <div className="space-y-8">
      {/* Category Filter Navigation */}
      <div className="flex flex-wrap items-center gap-2">
        {galleryCategories.map((category) => {
          const isActive = selectedCategory === category;
          const count =
            category === "Semua"
              ? items.length
              : items.filter((i) => i.category === category).length;

          return (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setActivePhotoIndex(null);
              }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-105"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive
                    ? "bg-white/20 text-white font-bold"
                    : "bg-background/80 text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Gallery Items Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence>
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="group cursor-pointer rounded-2xl overflow-hidden border bg-card text-card-foreground shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              onClick={() => setActivePhotoIndex(index)}
            >
              {/* Photo Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={`${item.title} - ${item.description}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-black/50 backdrop-blur-sm px-2.5 py-1 rounded-md">
                    <Maximize2 className="h-3.5 w-3.5" />
                    Lihat Foto Besar
                  </span>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-background/90 text-foreground backdrop-blur-md px-2.5 py-1 rounded-full shadow-sm border">
                    <Layers className="h-3 w-3 text-primary" />
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Photo Information */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-1.5">
                  <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-muted-foreground pt-2 border-t">
                  {item.location ? (
                    <span className="inline-flex items-center gap-1 truncate max-w-[180px]">
                      <MapPin className="h-3 w-3 text-primary shrink-0" />
                      <span className="truncate">{item.location}</span>
                    </span>
                  ) : (
                    <span>Daswel Heavy Equipment</span>
                  )}
                  {item.date && (
                    <span className="inline-flex items-center gap-1 shrink-0">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal (Tampilan Foto Besar & Keterangan) */}
      <AnimatePresence>
        {activePhoto && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Pratinjau foto ${activePhoto.title}`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
            onClick={handleClose}
          >
            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-5xl w-full max-h-[92vh] flex flex-col rounded-2xl bg-card border overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b bg-card/95 backdrop-blur shrink-0">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary shrink-0">
                    {activePhoto.category}
                  </span>
                  <h2 className="text-base sm:text-lg font-bold text-foreground truncate">
                    {activePhoto.title}
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground mr-2 hidden sm:inline">
                    {activePhotoIndex! + 1} / {filteredItems.length}
                  </span>
                  <button
                    onClick={handleClose}
                    className="p-2 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                    aria-label="Tutup jendela pratinjau"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Large Image View */}
              <div className="relative flex-1 min-h-[350px] sm:min-h-[480px] bg-black/95 flex items-center justify-center overflow-hidden">
                <Image
                  src={activePhoto.image}
                  alt={`${activePhoto.title} - ${activePhoto.description}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />

                {/* Prev & Next Controls */}
                {filteredItems.length > 1 && (
                  <>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrev();
                      }}
                      className="absolute left-3 sm:left-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-primary transition-all duration-200 backdrop-blur-sm shadow-lg hover:scale-110"
                      aria-label="Foto sebelumnya"
                    >
                      <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNext();
                      }}
                      className="absolute right-3 sm:right-4 p-2.5 rounded-full bg-black/60 text-white hover:bg-primary transition-all duration-200 backdrop-blur-sm shadow-lg hover:scale-110"
                      aria-label="Foto selanjutnya"
                    >
                      <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </button>
                  </>
                )}
              </div>

              {/* Modal Footer / Information */}
              <div className="px-6 py-4 border-t bg-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shrink-0">
                <div className="space-y-1 max-w-2xl">
                  <p className="text-sm text-foreground font-medium">
                    {activePhoto.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    {activePhoto.location && (
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-primary" />
                        {activePhoto.location}
                      </span>
                    )}
                    {activePhoto.date && (
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Tahun {activePhoto.date}
                      </span>
                    )}
                  </div>
                </div>

                {/* Consultation / Purchase Inquiry Button */}
                <Button asChild size="sm" className="gap-2 shrink-0 w-full sm:w-auto">
                  <a
                    href={`https://wa.me/${companyData.whatsapp}?text=${encodeURIComponent(
                      `Halo ${companyData.name}, saya tertarik dengan unit ${activePhoto.title} yang saya lihat di Galeri Foto. Bisakah saya mendapatkan informasi spesifikasi & penawaran harganya?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Tanya Unit Ini
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
