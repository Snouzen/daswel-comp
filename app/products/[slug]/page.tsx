import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";
import { ProductCard } from "@/components/products/product-card";
import { ProductWhatsAppButton } from "@/components/products/product-whatsapp-button";
import { Button } from "@/components/ui/button";
import {
  Box,
  Check,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Wrench,
  ChevronRight,
} from "lucide-react";

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
    keywords: [
      product.name,
      product.category,
      "spesifikasi mesin",
      "alat industri",
      companyData.name,
    ],
    alternates: {
      canonical: `https://daswel.com/products/${product.slug}`,
    },
    openGraph: {
      title: `${product.name} | ${companyData.name}`,
      description: product.shortDescription,
      url: `https://daswel.com/products/${product.slug}`,
      siteName: companyData.name,
      locale: "id_ID",
      type: "website",
      images: [
        {
          url: `https://daswel.com${product.image}`,
          width: 1200,
          height: 630,
          alt: `${product.name} - ${companyData.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${companyData.name}`,
      description: product.shortDescription,
      images: [`https://daswel.com${product.image}`],
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

  const otherProducts = productsData.filter((p) => p.slug !== slug).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    category: product.category,
    brand: {
      "@type": "Brand",
      name: companyData.name,
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "IDR",
      price: "0",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "Hubungi sales untuk penawaran resmi",
      },
    },
  };

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs Navigation */}
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex items-center gap-1.5 flex-wrap">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li>
            <Link href="/products" className="hover:text-foreground transition-colors">
              Product
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li className="font-semibold text-foreground truncate max-w-xs" aria-current="page">
            {product.name}
          </li>
        </ol>
      </nav>

      {/* Product Hero Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Visual Box */}
        <div className="lg:col-span-6 rounded-3xl border bg-gradient-to-br from-muted to-muted/60 h-80 sm:h-[460px] flex flex-col items-center justify-center p-8 text-center shadow-sm relative overflow-hidden">
          {product.featured && (
            <span className="absolute top-5 left-5 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
              Produk Unggulan
            </span>
          )}
          <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-background/90 text-primary shadow-md mb-4">
            <Box className="h-14 w-14" />
          </div>
          <span className="text-lg font-bold text-foreground">{product.name}</span>
          <span className="text-xs text-muted-foreground mt-1">Standar Mutu ISO 9001:2015</span>
        </div>

        {/* Info Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-2.5">
            <span className="text-xs font-bold text-primary uppercase tracking-wider">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
              {product.name}
            </h1>
          </div>

          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            {product.description}
          </p>

          {/* Quick Value Points */}
          <div className="grid grid-cols-2 gap-3 py-1">
            <div className="flex items-center gap-2 text-xs font-medium text-foreground bg-muted/40 p-2.5 rounded-xl border">
              <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
              <span>Garansi Penuh 2 Tahun</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-foreground bg-muted/40 p-2.5 rounded-xl border">
              <Zap className="h-4 w-4 text-primary shrink-0" />
              <span>Teknologi Hemat Energi</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-foreground bg-muted/40 p-2.5 rounded-xl border">
              <Wrench className="h-4 w-4 text-primary shrink-0" />
              <span>Layanan Purna Jual Resmi</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-medium text-foreground bg-muted/40 p-2.5 rounded-xl border">
              <Check className="h-4 w-4 text-primary shrink-0" />
              <span>Suku Cadang Terjamin</span>
            </div>
          </div>

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

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            <ProductWhatsAppButton
              productName={product.name}
              size="lg"
              variant="default"
              label="Minta Penawaran Harga WhatsApp"
              className="shadow-md font-semibold px-6 py-6 text-sm sm:text-base"
            />
            <Button asChild variant="outline" size="lg" className="px-6 py-6 text-sm sm:text-base">
              <Link href="/contact">Hubungi Kantor Pusat</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Related Products Section */}
      {otherProducts.length > 0 && (
        <section className="pt-10 border-t space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Peralatan Industri Terkait Lainnya
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                Kombinasikan dengan solusi mesin manufaktur dan pembangkit daya lainnya dari kami.
              </p>
            </div>
            <Button asChild variant="outline" size="sm">
              <Link href="/products">Lihat Semua Produk</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
