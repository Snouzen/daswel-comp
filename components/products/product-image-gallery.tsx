"use client";

import * as React from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { Play, Box, ChevronLeft, ChevronRight } from "lucide-react";

interface ProductImageGalleryProps {
  product: Product;
}

export function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const images = React.useMemo(() => {
    return product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  }, [product.gallery, product.image]);

  const [currentIndex, setCurrentIndex] = React.useState<number>(0);
  const [isPaused, setIsPaused] = React.useState<boolean>(false);

  // Auto-slide setiap 5 detik (pause saat mouse hover)
  React.useEffect(() => {
    if (images.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  // Navigasi keyboard (ArrowLeft & ArrowRight)
  React.useEffect(() => {
    if (images.length <= 1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Abaikan jika fokus sedang berada di input atau textarea
      const targetTag = (e.target as HTMLElement)?.tagName?.toLowerCase();
      if (targetTag === "input" || targetTag === "textarea") return;

      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [images.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const selectedImage = images[currentIndex] || images[0];

  return (
    <div
      className="space-y-4"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Main Image Display */}
      <div className="relative rounded-3xl border bg-muted overflow-hidden h-80 sm:h-[460px] shadow-sm group select-none">
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

        {product.featured && (
          <span className="absolute top-5 left-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md z-10">
            Produk Unggulan
          </span>
        )}

        {/* Counter Badge */}
        {images.length > 1 && (
          <span className="absolute top-5 right-5 rounded-full bg-black/60 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white shadow-md z-10 border border-white/10">
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
  );
}

