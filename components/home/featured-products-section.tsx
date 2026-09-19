"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, Check, Sparkles, Box } from "lucide-react";

export function FeaturedProductsSection() {
  const featuredProducts = productsData.filter((p) => p.featured);

  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Katalog Pilihan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Sorotan Produk Unggulan
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            Alat berat konstruksi, mobile batching plant, dan forklift segala medan dengan performa teruji untuk proyek industri berat.
          </p>
        </div>
        <Button asChild variant="outline" className="gap-2 shrink-0">
          <Link href="/products">
            Katalog Lengkap <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProducts.map((product, idx) => {
          const specEntries = Object.entries(product.specifications).slice(0, 2);
          const productWaUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
            `Halo ${companyData.name}, saya ingin konsultasi dan meminta penawaran harga untuk ${product.name}.`
          )}`;

          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex flex-col rounded-2xl border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all hover:border-primary/40 group"
            >
              {/* Image / Graphic Area */}
              <Link
                href={`/products/${product.slug}`}
                className="relative h-56 bg-muted overflow-hidden block"
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
                    <Box className="h-8 w-8 text-muted-foreground" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1 rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground shadow-sm">
                    Unggulan
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    <Link href={`/products/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                    {product.shortDescription}
                  </p>

                  {/* Spesifikasi Kunci */}
                  <div className="pt-2 border-t space-y-1.5 text-xs text-muted-foreground">
                    {specEntries.map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <span className="flex items-center gap-1.5 font-medium text-foreground">
                          <Check className="h-3 w-3 text-primary" />
                          {key}:
                        </span>
                        <span className="font-semibold text-foreground/90">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-2">
                  <Button asChild variant="secondary" className="w-full font-medium">
                    <Link href={`/products/${product.slug}`}>
                      Lihat Spesifikasi Lengkap
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="w-full gap-2 text-xs">
                    <a href={productWaUrl} target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="h-3.5 w-3.5 text-primary" />
                      Tanya Harga Produk Ini
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
