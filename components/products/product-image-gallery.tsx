"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/data/products";
import { Play, Box, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

interface ProductImageGalleryProps {
  product: Product;
}

export function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const images = React.useMemo(() => {
    return product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  }, [product.gallery, product.image]);

  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [isPaused, setIsPaused] = React.useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  // Auto-slide setiap 5 detik saat modal tertutup (pause saat mouse hover)
  React.useEffect(() => {
    if (images.length <= 1 || isPaused || isModalOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isPaused, isModalOpen]);

  // Lock body scroll saat modal fullscreen terbuka
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  // Navigasi keyboard (ArrowLeft, ArrowRight, Escape)
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const targetTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (targetTag === "input" || targetTag === "textarea") return;

      if (e.key === "Escape" && isModalOpen) {
        setIsModalOpen(false);
      } else if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length, isModalOpen]);

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const selectedImage = images[currentIndex] || images[0];

  return (
    <>
      <div
        className="space-y-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Main Image Display (Clickable for Fullscreen) */}
        <div
          onClick={() => setIsModalOpen(true)}
          className="relative rounded-3xl border bg-muted overflow-hidden h-80 sm:h-[460px] shadow-sm group select-none cursor-zoom-in"
          title="Klik untuk melihat foto dalam ukuran penuh"
        >
          {selectedImage ? (
            <Image
              key={selectedImage}
              src={selectedImage}
              alt={`${product.name} foto ${currentIndex + 1}`}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-muted/60">
              <Box className="h-14 w-14 text-muted-foreground" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70 pointer-events-none" />

          {/* Badges on top left */}
          <div className="absolute top-5 left-5 flex items-center gap-2 z-10 pointer-events-none">
            {product.featured && (
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                Produk Unggulan
              </span>
            )}
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white shadow-md border border-white/10 group-hover:bg-primary transition-colors">
              <Maximize2 className="h-3 w-3" />
              <span>Klik Perbesar</span>
            </span>
          </div>

          {/* Counter Badge */}
          {images.length > 1 && (
            <span className="absolute top-5 right-5 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white shadow-md z-10 border border-white/10 pointer-events-none">
              {currentIndex + 1} / {images.length}
            </span>
          )}

          {/* Arrow Buttons (Next / Prev) */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Foto Sebelumnya"
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20 focus:opacity-100"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Foto Selanjutnya"
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20 focus:opacity-100"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          {/* Bottom watermark / video button */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white z-10">
            <span className="text-xs font-medium bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              Foto Unit Resmi
            </span>
            {product.youtubeUrl && (
              <a
                href={product.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-semibold bg-red-600 hover:bg-red-700 text-white px-3.5 py-1.5 rounded-full shadow-lg transition-all hover:scale-105"
              >
                <Play className="h-3 w-3 fill-current" />
                <span>Video Demonstrasi</span>
              </a>
            )}
          </div>
        </div>

        {/* Thumbnails Row */}
        {images.length > 1 && (
          <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 scrollbar-thin">
            {images.map((img, idx) => {
              const isSelected = currentIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative h-20 w-24 shrink-0 rounded-2xl overflow-hidden border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                    isSelected
                      ? "border-primary shadow-md ring-2 ring-primary/30 scale-105"
                      : "border-transparent opacity-60 hover:opacity-100 hover:border-muted-foreground/30"
                  }`}
                  aria-label={`Pilih foto produk ke-${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Fullscreen Pop-out Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={`Tampilan Penuh Foto ${product.name}`}
          >
            {/* Modal Top Bar */}
            <div
              className="flex items-center justify-between text-white z-10 w-full max-w-7xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-0.5">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-wide">
                  {product.name}
                </h3>
                <p className="text-xs text-white/70">
                  Foto {currentIndex + 1} dari {images.length}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden sm:inline-block text-xs text-white/50">
                  Tekan <kbd className="px-2 py-0.5 rounded bg-white/10 font-mono text-[11px] text-white">ESC</kbd> untuk menutup
                </span>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Tutup Tampilan Penuh"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/10"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>

            {/* Modal Center: Large Image with Nav Buttons */}
            <div
              className="relative flex-1 flex items-center justify-center my-2 sm:my-4 w-full max-w-7xl mx-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev Button */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Foto Sebelumnya"
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105"
                >
                  <ChevronLeft className="h-7 w-7 sm:h-8 sm:w-8" />
                </button>
              )}

              {/* Main Fullscreen Image Container */}
              <div className="relative w-full h-[60vh] sm:h-[72vh] max-w-5xl rounded-2xl overflow-hidden">
                {selectedImage && (
                  <Image
                    key={selectedImage}
                    src={selectedImage}
                    alt={`${product.name} tampilan penuh ${currentIndex + 1}`}
                    fill
                    priority
                    sizes="100vw"
                    className="object-contain"
                  />
                )}
              </div>

              {/* Next Button */}
              {images.length > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Foto Selanjutnya"
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105"
                >
                  <ChevronRight className="h-7 w-7 sm:h-8 sm:w-8" />
                </button>
              )}
            </div>

            {/* Modal Bottom: Thumbnails Row */}
            <div
              className="w-full max-w-7xl mx-auto z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {images.length > 1 && (
                <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-1 max-w-2xl mx-auto scrollbar-thin">
                  {images.map((img, idx) => {
                    const isSelected = currentIndex === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentIndex(idx)}
                        className={`relative h-14 w-16 sm:h-16 sm:w-20 shrink-0 rounded-xl overflow-hidden border-2 transition-all ${
                          isSelected
                            ? "border-primary ring-2 ring-primary/40 scale-105 opacity-100"
                            : "border-white/20 opacity-50 hover:opacity-90"
                        }`}
                        aria-label={`Lompat ke foto ke-${idx + 1}`}
                      >
                        <Image
                          src={img}
                          alt={`${product.name} thumbnail ${idx + 1}`}
                          fill
                          sizes="80px"
                          className="object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
