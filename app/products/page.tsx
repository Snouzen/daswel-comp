import type { Metadata } from "next";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";
import { ProductGrid } from "@/components/products/product-grid";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  ShieldCheck,
  Zap,
  Award,
  Wrench,
  Headphones,
  SlidersHorizontal,
} from "lucide-react";

const productAdvantages = [
  {
    icon: ShieldCheck,
    title: "Standar Mutu ISO & Keamanan Global",
    description:
      "Semua mesin dan komponen diproduksi mengikuti standar sertifikasi ISO 9001 dengan pengujian ketat sebelum pengiriman.",
  },
  {
    icon: Zap,
    title: "Efisiensi Konsumsi Energi",
    description:
      "Motor industri presisi dan sistem kontrol cerdas mengurangi konsumsi daya listrik operasional hingga 25%.",
  },
  {
    icon: Award,
    title: "Garansi Resmi Komprehensif",
    description:
      "Jaminan perlindungan purna jual hingga 2 tahun mencakup servis berkala, konsultasi teknis, dan proteksi komponen utama.",
  },
  {
    icon: Wrench,
    title: "Ketersediaan Suku Cadang Asli",
    description:
      "Gudang suku cadang orisinal terintegrasi memastikan ketersediaan suku cadang pengganti siap kirim kapan pun diperlukan.",
  },
  {
    icon: Headphones,
    title: "Pendampingan Instalasi & Commissioning",
    description:
      "Tim teknisi tersertifikasi siap mendampingi pemasangan di lokasi serta memberikan pelatihan operasional bagi staf pabrik.",
  },
  {
    icon: SlidersHorizontal,
    title: "Kustomisasi Fleksibel Sesuai Kebutuhan",
    description:
      "Konfigurasi dan spesifikasi unit dapat dimodifikasi secara spesifik menyesuaikan layout dan kapasitas lini produksi Anda.",
  },
];

export const metadata: Metadata = {
  title: "Katalog Alat Berat & Mesin Beton",
  description:
    "Jelajahi lini produk Backhoe Loader, Concrete Mixer with Pump, Rough Terrain Forklift 4x4, dan Self Loading Mixer berstandar internasional dari Daswel Company.",
  keywords: [
    "alat berat",
    "backhoe loader",
    "concrete mixer with pump",
    "rough terrain forklift 4x4",
    "self loading mixer",
    "mobile batching plant",
    "Daswel Company",
  ],
  alternates: {
    canonical: "https://daswel.com/products",
  },
  openGraph: {
    title: `Produk & Alat Berat Industri | ${companyData.name}`,
    description:
      "Katalog resmi alat berat konstruksi, mobile batching plant, dan forklift segala medan Daswel Company di Indonesia.",
    url: "https://daswel.com/products",
    siteName: companyData.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://daswel.com/images/Content/3.%20Product/Product%20Images/Backhoe%20Loader/Backhoe%20Loader%20(1).jpeg",
        width: 1200,
        height: 630,
        alt: `Katalog Alat Berat - ${companyData.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Produk & Alat Berat Industri | ${companyData.name}`,
    description:
      "Katalog resmi alat berat konstruksi, mobile batching plant, dan forklift segala medan Daswel Company.",
    images: [
      "https://daswel.com/images/Content/3.%20Product/Product%20Images/Backhoe%20Loader/Backhoe%20Loader%20(1).jpeg",
    ],
  },
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16">
      {/* Page Header */}
      <header className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <span>Katalog Resmi Daswel</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Alat Berat & Mesin Konstruksi
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Peralatan konstruksi dan pengolahan beton berkualitas tinggi dengan efisiensi prima, ketahanan mesin teruji, serta jaminan ketersediaan suku cadang dan servis purna jual di Indonesia.
        </p>
      </header>

      {/* Interactive Products Grid with Search & Filters */}
      <section aria-label="Katalog Produk Interaktif">
        <ProductGrid products={productsData} />
      </section>

      {/* Alasan Memilih Produk Kami */}
      <section
        className="rounded-3xl border bg-card/60 p-8 sm:p-12 space-y-10 shadow-sm"
        aria-label="Alasan Memilih Produk Kami"
      >
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <span>Keunggulan Produk</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Alasan Memilih Peralatan {companyData.name}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Komitmen kami adalah menghadirkan ketahanan mesin industri terbaik dengan dukungan teknis purna jual tanpa kompromi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productAdvantages.map((adv, idx) => {
            const Icon = adv.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border bg-background/80 p-6 shadow-sm hover:border-primary/40 hover:shadow-md transition-all space-y-3"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-base text-foreground">{adv.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {adv.description}
                </p>
              </div>
            );
          })}
        </div>
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
