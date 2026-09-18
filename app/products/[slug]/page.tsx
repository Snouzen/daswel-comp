import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import { Box, Check, MessageSquare, ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) return { title: "Produk Tidak Ditemukan" };

  return {
    title: `${product.name} — Spesifikasi & Penawaran Resmi`,
    description: product.description,
    alternates: {
      canonical: `https://daswel.com/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | ${companyData.name}`,
      description: product.shortDescription,
      url: `https://daswel.com/products/${product.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${companyData.name}`,
      description: product.shortDescription,
    },
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);
  if (!product) {
    notFound();
  }

  const productWaUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
    `Halo ${companyData.name}, saya ingin konsultasi dan meminta surat penawaran harga resmi untuk produk ${product.name}.`
  )}`;

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      <Link
        href="/products"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Kembali ke Katalog Produk
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Visual Box */}
        <div className="lg:col-span-6 rounded-3xl border bg-gradient-to-br from-muted to-muted/60 h-80 sm:h-[450px] flex flex-col items-center justify-center p-8 text-center shadow-sm">
          <Box className="h-24 w-24 text-primary/70 mb-4" />
          <span className="text-lg font-bold text-foreground">{product.name}</span>
          <span className="text-xs text-muted-foreground mt-1">Standar Manufaktur ISO 9001</span>
        </div>

        {/* Info Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
              {product.name}
            </h1>
          </div>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            {product.description}
          </p>

          {/* Spesifikasi Teknis */}
          <div className="rounded-2xl border bg-card p-6 space-y-4 shadow-sm">
            <h2 className="font-bold text-base text-foreground">Spesifikasi Teknis Lengkap</h2>
            <div className="divide-y text-sm">
              {Object.entries(product.specifications).map(([key, val]) => (
                <div key={key} className="py-2.5 flex justify-between items-center text-muted-foreground">
                  <span className="font-medium text-foreground flex items-center gap-2">
                    <Check className="h-4 w-4 text-primary shrink-0" />
                    {key}
                  </span>
                  <span className="font-semibold text-foreground/90">{val}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Button asChild size="lg" className="gap-2 shadow-md font-semibold">
              <a href={productWaUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-4 w-4" />
                Minta Penawaran Harga WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Hubungi Tim Kami</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
