import type { Metadata } from "next";
import Link from "next/link";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import { Box, Check, MessageSquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Katalog Produk & Peralatan Manufaktur",
  description:
    "Jelajahi lini produk mesin industri, genset heavy-duty, dan sistem filtrasi udara berkualitas tinggi berstandar ISO dari Daswel Company.",
  alternates: {
    canonical: "https://daswel.com/products",
  },
  openGraph: {
    title: `Produk & Peralatan Industri | ${companyData.name}`,
    description:
      "Temukan mesin industri dan peralatan manufaktur berkinerja tinggi untuk menunjang produktivitas pabrik Anda.",
    url: "https://daswel.com/products",
  },
  twitter: {
    card: "summary_large_image",
    title: `Produk & Peralatan Industri | ${companyData.name}`,
    description:
      "Peralatan manufaktur efisiensi energi dengan garansi resmi dan dukungan teknis penuh.",
  },
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
      {/* Page Header */}
      <header className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <span>Katalog Resmi</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Produk & Peralatan Industri
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Seluruh mesin dan peralatan dirancang dengan teknologi presisi tinggi, efisiensi konsumsi daya, serta jaminan ketersediaan suku cadang resmi.
        </p>
      </header>

      {/* Products Grid */}
      <section aria-label="Daftar Produk" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map((product) => {
          const specEntries = Object.entries(product.specifications);
          const productWaUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(
            `Halo ${companyData.name}, saya ingin meminta penawaran harga dan spesifikasi teknis untuk ${product.name}.`
          )}`;

          return (
            <article
              key={product.id}
              className="flex flex-col rounded-2xl border bg-card overflow-hidden shadow-sm hover:shadow-lg transition-all hover:border-primary/40 group"
            >
              {/* Product Visual Area */}
              <div className="relative h-56 bg-gradient-to-br from-muted to-muted/50 flex flex-col items-center justify-center p-6 text-center">
                {product.featured && (
                  <span className="absolute top-3 left-3 rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground shadow-sm">
                    Unggulan
                  </span>
                )}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-background/90 text-primary shadow-sm group-hover:scale-110 transition-transform">
                  <Box className="h-8 w-8" />
                </div>
                <span className="mt-3 text-xs font-medium text-muted-foreground">
                  Foto Unit {product.name}
                </span>
              </div>

              {/* Product Information */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h2 className="font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>

                  {/* Spesifikasi Lengkap */}
                  <div className="pt-3 border-t space-y-2 text-xs">
                    <span className="font-semibold text-foreground uppercase tracking-wider block text-[11px]">
                      Spesifikasi Utama:
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

                {/* WhatsApp Action */}
                <div className="space-y-2 pt-2">
                  <Button asChild className="w-full gap-2 font-medium">
                    <a href={productWaUrl} target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="h-4 w-4" />
                      Konsultasi & Tanya Harga
                    </a>
                  </Button>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* Bottom Consultation Banner */}
      <section className="rounded-3xl border bg-muted/40 p-8 sm:p-12 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          Butuh Kustomisasi Spesifikasi Khusus?
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
          Tim rekayasa teknis {companyData.name} siap merancang penyesuaian mesin sesuai dengan kapasitas dan ruang pabrik Anda.
        </p>
        <div className="pt-2">
          <Button asChild size="lg" variant="default" className="gap-2">
            <a href={companyData.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-4 w-4" />
              Hubungi Tim Teknis Kami
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
