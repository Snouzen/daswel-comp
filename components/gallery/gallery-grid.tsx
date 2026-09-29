"use client";

import { useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  galleryCategories,
  type GalleryItem,
  type GalleryCategory,
} from "@/data/gallery";
import {
  deploymentsData,
  deploymentCategories,
  type DeploymentCategory,
} from "@/data/deployments";
import { GalleryCard } from "@/components/gallery/gallery-card";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import { Camera, HardHat, MapPin } from "lucide-react";

interface GalleryGridProps {
  items: GalleryItem[];
}

export function GalleryGrid({ items }: GalleryGridProps) {
  // Mode switcher: "unit" vs "deployment"
  const [viewMode, setViewMode] = useState<"unit" | "deployment">("unit");
  const [selectedUnitCategory, setSelectedUnitCategory] =
    useState<GalleryCategory>("Semua");
  const [selectedDepCategory, setSelectedDepCategory] =
    useState<DeploymentCategory>("Semua");
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<number>(0);

  // Ubah deploymentsData menjadi format GalleryItem yang kompatibel dengan GalleryCard dan Lightbox
  const deploymentGalleryItems: GalleryItem[] = useMemo(() => {
    return deploymentsData.map((d) => ({
      id: d.id,
      title: d.title,
      category:
        d.category === "Self Loading Mixer"
          ? "Self Loading Mixer 3.5"
          : d.category,
      description: `Dokumentasi unit ${d.productName} yang beroperasi pada ${d.title} di ${d.location} (${d.sector}).`,
      image: d.image,
      date: "2024-2025",
      location: d.location,
    }));
  }, []);

  // Filter items berdasarkan viewMode dan kategori yang aktif
  const currentItems: GalleryItem[] = useMemo(() => {
    if (viewMode === "unit") {
      return selectedUnitCategory === "Semua"
        ? items
        : items.filter((item) => item.category === selectedUnitCategory);
    } else {
      if (selectedDepCategory === "Semua") {
        return deploymentGalleryItems;
      }
      return deploymentGalleryItems.filter((item) => {
        const rawDep = deploymentsData.find((d) => d.id === item.id);
        return rawDep && rawDep.category === selectedDepCategory;
      });
    }
  }, [
    viewMode,
    selectedUnitCategory,
    selectedDepCategory,
    items,
    deploymentGalleryItems,
  ]);

  const activePhoto =
    activePhotoIndex !== null ? currentItems[activePhotoIndex] : null;

  const handleNext = useCallback(() => {
    if (activePhotoIndex !== null) {
      setSlideDirection(1);
      setActivePhotoIndex((prev) =>
        prev !== null ? (prev + 1) % currentItems.length : null
      );
    }
  }, [activePhotoIndex, currentItems.length]);

  const handlePrev = useCallback(() => {
    if (activePhotoIndex !== null) {
      setSlideDirection(-1);
      setActivePhotoIndex((prev) =>
        prev !== null ? (prev - 1 + currentItems.length) % currentItems.length : null
      );
    }
  }, [activePhotoIndex, currentItems.length]);

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
      {/* Top View Mode Switcher: Galeri Unit vs Sebaran Proyek & Deployment */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-2 rounded-2xl bg-muted/50 border max-w-2xl">
        <button
          type="button"
          suppressHydrationWarning
          onClick={() => {
            setViewMode("unit");
            setActivePhotoIndex(null);
          }}
          className={`flex-1 flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            viewMode === "unit"
              ? "bg-background text-foreground shadow-sm border"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Camera className="h-4 w-4 text-primary" />
          <span>Galeri Fisik Unit ({items.length})</span>
        </button>

        <button
          type="button"
          suppressHydrationWarning
          onClick={() => {
            setViewMode("deployment");
            setActivePhotoIndex(null);
          }}
          className={`flex-1 flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
            viewMode === "deployment"
              ? "bg-background text-foreground shadow-sm border"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <HardHat className="h-4 w-4 text-primary" />
          <span>Sebaran Proyek &amp; Deployment ({deploymentsData.length})</span>
        </button>
      </div>

      {/* Animated Category Filter Navigation */}
      <div className="flex flex-wrap items-center gap-2">
        {viewMode === "unit" ? (
          // Kategori Unit
          galleryCategories.map((category) => {
            const isActive = selectedUnitCategory === category;
            const count =
              category === "Semua"
                ? items.length
                : items.filter((i) => i.category === category).length;

            return (
              <button
                key={category}
                type="button"
                suppressHydrationWarning
                onClick={() => {
                  setSelectedUnitCategory(category);
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
          })
        ) : (
          // Kategori Deployment
          deploymentCategories.map((category) => {
            const isActive = selectedDepCategory === category;
            const count =
              category === "Semua"
                ? deploymentsData.length
                : deploymentsData.filter((d) => d.category === category).length;

            return (
              <button
                key={category}
                type="button"
                suppressHydrationWarning
                onClick={() => {
                  setSelectedDepCategory(category);
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
          })
        )}
      </div>

      {/* Info Banner when in Deployment Mode */}
      {viewMode === "deployment" && (
        <div className="p-4 rounded-2xl bg-primary/5 border border-primary/15 flex items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground">
          <div className="flex items-center gap-2.5">
            <MapPin className="h-4 w-4 text-primary shrink-0" />
            <span>
              Menampilkan dokumentasi riil unit yang beroperasi di berbagai proyek lapangan (Jalan, Tol, Tambang, Gedung, dan Precast).
            </span>
          </div>
          <span className="font-semibold text-foreground whitespace-nowrap hidden md:inline-block">
            {currentItems.length} Dokumentasi Proyek
          </span>
        </div>
      )}

      {/* Gallery Items Grid with Smooth Layout Animation */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
      >
        <AnimatePresence mode="popLayout">
          {currentItems.map((item, index) => (
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
        totalItems={currentItems.length}
        direction={slideDirection}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </div>
  );
}

