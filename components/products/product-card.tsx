"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/data/products";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import { Box, Check, ArrowRight } from "lucide-react";
import { ProductWhatsAppButton } from "@/components/products/product-whatsapp-button";

interface ProductCardProps {
  product: Product;
  delay?: number;
}

export function ProductCard({ product, delay = 0 }: ProductCardProps) {
  const specEntries = Object.entries(product.specifications).slice(0, 3);

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
        className="relative h-60 bg-muted overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary block"
        aria-label={`Lihat detail produk ${product.name}`}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center bg-muted/60">
            <Box className="h-10 w-10 text-muted-foreground" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {product.featured && (
          <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md z-10">
            Produk Unggulan
          </span>
        )}
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
          <ProductWhatsAppButton
            productName={product.name}
            variant="outline"
            size="sm"
            label="Tanya Harga via WhatsApp"
            className="w-full text-xs font-medium"
          />
        </div>
      </div>
    </motion.article>
  );
}
