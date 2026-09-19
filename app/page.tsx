import type { Metadata } from "next";
import { companyData } from "@/data/company";
import { HeroSection } from "@/components/home/hero-section";
import { AboutAndFeaturesSection } from "@/components/home/about-and-features-section";
import { FeaturedProductsSection } from "@/components/home/featured-products-section";
import { LatestNewsSection } from "@/components/home/latest-news-section";
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

      {/* Tentang Perusahaan & Keunggulan */}
      <AboutAndFeaturesSection />

      {/* Sorotan Produk */}
      <FeaturedProductsSection />

      {/* Kabar Terbaru */}
      <LatestNewsSection />

      {/* Hubungi Kami / CTA WhatsApp */}
      <CtaSection />
    </div>
  );
}
