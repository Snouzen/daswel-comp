"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/data/products";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import { Box, Check, MessageSquare, ArrowRight, Search, SlidersHorizontal } from "lucide-react";

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("Semua");
  const [searchQuery, setSearchQuery] = React.useState<string>("");

  const categories = ["Semua", ...Array.from(new Set(products.map((p) => p.category)))];

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "Semua" || product.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10">
      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between border-b pb-6">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
                  isSelected
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/70 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari mesin / produk..."
            className="w-full rounded-full border bg-background pl-10 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
            aria-label="Cari nama atau spesifikasi produk"
          />
        </div>
      </div>

      {/* Product Cards Grid */}
      <AnimatePresence mode="popLayout">
        {filteredProducts.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="rounded-2xl border border-dashed p-12 text-center space-y-3"
          >
            <SlidersHorizontal className="h-8 w-8 mx-auto text-muted-foreground" />
            <h3 className="font-semibold text-lg text-foreground">Tidak Ada Produk yang Sesuai</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Tidak ditemukan produk untuk kategori &quot;{selectedCategory}&quot; dengan kata kunci pencarian tersebut.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedCategory("Semua");
                setSearchQuery("");
              }}
            >
              Reset Filter
            </Button>
          </motion.div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => {
              const specEntries = Object.entries(product.specifications).slice(0, 3);
              const productWaUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
                `Halo ${companyData.name}, saya ingin meminta surat penawaran harga resmi dan ketersediaan unit untuk ${product.name}.`
              )}`;

              return (
                <motion.article
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col rounded-3xl border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all hover:border-primary/40 group"
                >
                  {/* Visual Header */}
                  <div className="relative h-56 bg-gradient-to-br from-muted to-muted/60 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
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
                  </div>

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
                        <Link href={`/products/${product.slug}`}>
                          {product.name}
                        </Link>
                      </h2>

                      <p className="text-sm text-muted-foreground leading-relaxed">
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
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
