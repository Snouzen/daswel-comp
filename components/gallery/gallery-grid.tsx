"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryCategories, type GalleryItem, type GalleryCategory } from "@/data/gallery";
import { GalleryCard } from "@/components/gallery/gallery-card";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";

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
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => setActivePhotoIndex(index)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal (Tampilan Foto Besar) */}
      <GalleryLightbox
        item={activePhoto}
        currentIndex={activePhotoIndex ?? 0}
        totalItems={filteredItems.length}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
