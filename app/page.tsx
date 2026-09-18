import { HeroSection } from "@/components/home/hero-section";
import { AboutAndFeaturesSection } from "@/components/home/about-and-features-section";
import { FeaturedProductsSection } from "@/components/home/featured-products-section";
import { LatestNewsSection } from "@/components/home/latest-news-section";
import { CtaSection } from "@/components/home/cta-section";

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
