"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import { Box, Check, MessageSquare, ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const specEntries = Object.entries(product.specifications).slice(0, 3);
  const productWaUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
    `Halo ${companyData.name}, saya ingin meminta surat penawaran harga resmi dan ketersediaan unit untuk ${product.name}.`
  )}`;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3, delay }}
      className="flex flex-col rounded-3xl border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all hover:border-primary/40 group"
    >
      {/* Visual Header / Thumbnail Link */}
      <Link
        href={`/products/${product.slug}`}
        className="relative h-56 bg-gradient-to-br from-muted to-muted/60 flex flex-col items-center justify-center p-6 text-center overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-label={`Lihat detail produk ${product.name}`}
      >
        {product.featured && (
          <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
            Produk Unggulan
          </span>
        )}
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background/90 text-primary shadow-sm group-hover:scale-110 transition-transform">
          <Box className="h-8 w-8" />
        </div>
        <span className="mt-3 text-xs font-semibold text-foreground/80">
          {product.name}
        </span>
      </Link>

      {/* Body Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              {product.category}
            </span>
            <span className="text-[11px] font-medium text-muted-foreground">
              ID: {product.id}
            </span>
          </div>

          <h2 className="font-bold text-xl sm:text-2xl text-foreground group-hover:text-primary transition-colors leading-snug">
            <Link href={`/products/${product.slug}`} className="hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">
              {product.name}
            </Link>
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>

          {/* Spesifikasi Kunci */}
          <div className="pt-3 border-t space-y-2 text-xs">
            <span className="font-semibold text-foreground uppercase tracking-wider block text-[11px]">
              Ringkasan Spesifikasi:
            </span>
            {specEntries.map(([key, value]) => (
              <div key={key} className="flex items-center justify-between text-muted-foreground">
                <span className="flex items-center gap-1.5 font-medium text-foreground">
                  <Check className="h-3 w-3 text-primary shrink-0" />
                  {key}:
                </span>
                <span className="font-semibold text-foreground/90">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 pt-2">
          <Button asChild variant="secondary" className="w-full gap-2 font-semibold">
            <Link href={`/products/${product.slug}`}>
              Detail & Spesifikasi Lengkap
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="w-full gap-2 text-xs font-medium">
            <a href={productWaUrl} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-3.5 w-3.5 text-primary" />
              Tanya Harga via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
