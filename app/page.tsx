import type { Metadata } from "next";
import { companyData } from "@/data/company";
import { HeroSection } from "@/components/home/hero-section";
import { AboutAndFeaturesSection } from "@/components/home/about-and-features-section";
import { FeaturedProductsSection } from "@/components/home/featured-products-section";
import { IndustrialNeedsSection } from "@/components/home/industrial-needs-section";
import { LatestNewsSection } from "@/components/home/latest-news-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { ClientLogosSection } from "@/components/home/client-logos-section";
import { CtaSection } from "@/components/home/cta-section";

export const metadata: Metadata = {
  title: `${companyData.name} — ${companyData.tagline}`,
  description: companyData.description,
  alternates: {
    canonical: "https://daswel.com",
  },
  openGraph: {
    title: `${companyData.name} — ${companyData.tagline}`,
    description: companyData.description,
    url: "https://daswel.com",
    siteName: companyData.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://daswel.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: `${companyData.name} — ${companyData.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyData.name} — ${companyData.tagline}`,
    description: companyData.description,
    images: ["https://daswel.com/images/logo.png"],
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col space-y-24 pb-16">
      {/* Sambutan Utama (Hero) */}
      <HeroSection />

      {/* Sorotan Produk */}
      <FeaturedProductsSection />

      {/* Kebutuhan Industri / Solusi Proyek */}
      <IndustrialNeedsSection />

      {/* Kabar Terbaru */}
      <LatestNewsSection />

      {/* Tentang Perusahaan & Keunggulan (termasuk Fondasi Perusahaan) */}
      <AboutAndFeaturesSection />

      {/* Testimonial Klien */}
      <TestimonialsSection />

      {/* Logo Cloud Klien & Mitra */}
      <ClientLogosSection />

      {/* Hubungi Kami / CTA WhatsApp */}
      <CtaSection />
    </div>
  );
}
