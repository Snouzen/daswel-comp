import type { Metadata } from "next";
import Link from "next/link";
import { galleryData } from "@/data/gallery";
import { companyData } from "@/data/company";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { Camera, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Galeri Foto Unit & Peralatan Industri",
  description:
    "Dokumentasi foto produk alat berat resmi Daswel Company: Backhoe Loader, Concrete Mixer with Pump, Rough Terrain Forklift 4x4, Self Loading Mixer 3.5, dan Self Loading Mixer 4.",
  keywords: [
    "galeri alat berat",
    "foto backhoe loader",
    "foto concrete mixer with pump",
    "foto rough terrain forklift 4x4",
    "foto self loading mixer",
    "daswel company",
    "peralatan konstruksi indonesia",
  ],
  alternates: {
    canonical: "https://daswel.com/gallery",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Galeri Foto Unit & Peralatan Industri | ${companyData.name}`,
    description:
      "Dokumentasi foto produk alat berat resmi Daswel: Backhoe Loader, Concrete Mixer with Pump, Rough Terrain Forklift 4x4, dan Self Loading Mixer.",
    url: "https://daswel.com/gallery",
    siteName: companyData.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://daswel.com/images/Content/3. Product/Product Images/Backhoe Loader/Backhoe Loader (1).jpeg",
        width: 1200,
        height: 800,
        alt: `Dokumentasi Foto Alat Berat - ${companyData.name}`,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Galeri Foto Unit & Peralatan Industri | ${companyData.name}`,
    description:
      "Dokumentasi foto produk alat berat resmi Daswel: Backhoe Loader, Concrete Mixer with Pump, Rough Terrain Forklift 4x4, dan Self Loading Mixer.",
    images: [
      "https://daswel.com/images/Content/3. Product/Product Images/Backhoe Loader/Backhoe Loader (1).jpeg",
    ],
  },
};

export default function GalleryPage() {
  // Structured data for Search Engines (ImageGallery schema)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: `Galeri Foto Unit & Peralatan Industri - ${companyData.name}`,
    description:
      "Dokumentasi visual unit operasional alat berat Daswel Company: Backhoe Loader, Concrete Mixer with Pump, Rough Terrain Forklift 4x4, Self Loading Mixer 3.5, dan Self Loading Mixer 4.",
    url: "https://daswel.com/gallery",
    publisher: {
      "@type": "Organization",
      name: companyData.name,
      url: "https://daswel.com",
      logo: "https://daswel.com/images/logo.png",
    },
    hasPart: galleryData.slice(0, 10).map((item) => ({
      "@type": "ImageObject",
      name: item.title,
      caption: item.description,
      contentUrl: `https://daswel.com${encodeURI(item.image)}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        {/* Page Header */}
        <header className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Camera className="h-3.5 w-3.5" />
            <span>Dokumentasi Visual & Galeri Produk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Galeri Foto Unit & Peralatan Industri
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Koleksi foto dokumentasi unit alat berat {companyData.name} dalam berbagai sudut kerja, uji lapangan, dan perakitan teknis. Klik pada foto untuk melihat tampilan besar beserta keterangannya.
          </p>
        </header>

        {/* Gallery Grid with Category Filters & Lightbox */}
        <section aria-label="Koleksi Galeri Foto Produk">
          <GalleryGrid items={galleryData} />
        </section>

        {/* WhatsApp & Consultation CTA Section */}
        <section className="rounded-3xl border bg-gradient-to-r from-primary/10 via-primary/5 to-background p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              Tertarik dengan Salah Satu Unit di Galeri?
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-xl">
              Dapatkan penawaran harga resmi, katalog spesifikasi teknis lengkap, dan jadwal inspeksi unit langsung bersama tim spesialis {companyData.name}.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Button asChild size="lg" className="gap-2">
              <a
                href={`https://wa.me/${companyData.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                  `Halo ${companyData.name}, saya melihat galeri foto unit Anda dan ingin menanyakan ketersediaan serta penawaran harga alat berat.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                Konsultasi WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <Link href="/products">
                Lihat Katalog Produk <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </>
  );
}
