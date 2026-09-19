"use client";

import * as React from "react";
import Image from "next/image";
import { Product } from "@/data/products";
import { Play, Box } from "lucide-react";

interface ProductImageGalleryProps {
  product: Product;
}

export function ProductImageGallery({ product }: ProductImageGalleryProps) {
  const images =
    product.gallery && product.gallery.length > 0 ? product.gallery : [product.image];
  const [selectedImage, setSelectedImage] = React.useState<string>(images[0]);

  return (
    <div className="space-y-4">
      {/* Main Image Display */}
      <div className="relative rounded-3xl border bg-muted overflow-hidden h-80 sm:h-[460px] shadow-sm group">
        {selectedImage ? (
          <Image
            src={selectedImage}
            alt={product.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-muted/60">
            <Box className="h-14 w-14 text-muted-foreground" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 pointer-events-none" />

        {product.featured && (
          <span className="absolute top-5 left-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md z-10">
            Produk Unggulan
          </span>
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
            const isSelected = selectedImage === img;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedImage(img)}
                className={`relative h-20 w-24 shrink-0 rounded-2xl overflow-hidden border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isSelected
                    ? "border-primary shadow-md ring-2 ring-primary/30 scale-105"
                    : "border-transparent opacity-70 hover:opacity-100 hover:border-muted-foreground/30"
                }`}
                aria-label={`Pilih foto produk ke-${idx + 1}`}
              >
                <Image
                  src={img}
                  alt={`${product.name} foto ${idx + 1}`}
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
