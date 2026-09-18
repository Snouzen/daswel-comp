import type { Metadata } from "next";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";
import { ProductGrid } from "@/components/products/product-grid";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

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

      {/* Interactive Products Grid with Search & Filters */}
      <section aria-label="Katalog Produk Interaktif">
        <ProductGrid products={productsData} />
      </section>

      {/* Bottom Consultation Banner */}
      <section className="rounded-3xl border bg-muted/40 p-8 sm:p-12 text-center space-y-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
          Butuh Kustomisasi Spesifikasi Khusus?
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
          Tim rekayasa teknis {companyData.name} siap merancang penyesuaian mesin sesuai dengan kapasitas dan tata letak pabrik Anda.
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
