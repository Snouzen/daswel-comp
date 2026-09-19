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
  const [slideDirection, setSlideDirection] = useState<number>(0);

  const filteredItems =
    selectedCategory === "Semua"
      ? items
      : items.filter((item) => item.category === selectedCategory);

  const activePhoto =
    activePhotoIndex !== null ? filteredItems[activePhotoIndex] : null;

  const handleNext = useCallback(() => {
    if (activePhotoIndex !== null) {
      setSlideDirection(1);
      setActivePhotoIndex((prev) =>
        prev !== null ? (prev + 1) % filteredItems.length : null
      );
    }
  }, [activePhotoIndex, filteredItems.length]);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex !== null) {
      setSlideDirection(-1);
      setActivePhotoIndex((prev) =>
        prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
      );
    }
  }, [activePhotoIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setActivePhotoIndex(null);
    setSlideDirection(0);
  }, []);

  const handleOpenPhoto = (index: number) => {
    setSlideDirection(0);
    setActivePhotoIndex(index);
  };

  return (
    <div className="space-y-8">
      {/* Animated Category Filter Navigation with Framer Motion layoutId */}
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
              className={`relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors duration-200 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                isActive
                  ? "text-primary-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeCategoryPill"
                  className="absolute inset-0 rounded-full bg-primary shadow-md shadow-primary/25 -z-10"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span>{category}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full transition-colors ${
                  isActive
                    ? "bg-white/20 text-white font-bold"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Gallery Items Grid with Smooth Layout Animation */}
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
              onClick={() => handleOpenPhoto(index)}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal with Framer Motion Transitions */}
      <GalleryLightbox
        item={activePhoto}
        currentIndex={activePhotoIndex ?? 0}
        totalItems={filteredItems.length}
        direction={slideDirection}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}
