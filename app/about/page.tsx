import type { Metadata } from "next";
import Image from "next/image";
import { companyData } from "@/data/company";
import { AboutCompanySection } from "@/components/about/about-company-section";
import { AboutAndFeaturesSection } from "@/components/home/about-and-features-section";
import { CtaSection } from "@/components/home/cta-section";
import { Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami — Profil Perusahaan, Prinsip & Keunggulan",
  description:
    "Kenali Daswel Company: mitra terpercaya penyedia alat berat industri, Self Loading Mixer, dan Mixer Pump dengan komitmen keunggulan manufaktur dan layanan purna jual terbaik di Indonesia.",
  keywords: [
    "tentang daswel",
    "profil daswel company",
    "spesialis self loading mixer",
    "spesialis mixer pump",
    "distributor alat berat indonesia",
    "nilai perusahaan daswel",
    "kenapa memilih daswel",
  ],
  alternates: {
    canonical: "https://daswel.com/about",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Tentang Kami — Profil Perusahaan & Keunggulan | ${companyData.name}`,
    description:
      "Kenali dedikasi, prinsip keunggulan, serta komitmen Daswel Company dalam menyediakan solusi alat berat dan mesin beton terbaik di Indonesia.",
    url: "https://daswel.com/about",
    siteName: companyData.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://daswel.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: `Tentang Kami - ${companyData.name}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Tentang Kami | ${companyData.name}`,
    description:
      "Dedikasi untuk keunggulan manufaktur, integritas, dan keandalan operasional alat berat Daswel Company.",
    images: ["https://daswel.com/images/logo.png"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: `Tentang Kami - ${companyData.name}`,
    description:
      "Profil lengkap, dedikasi industri, prinsip kerja, dan keunggulan kompetitif Daswel Company.",
    url: "https://daswel.com/about",
    mainEntity: {
      "@type": "Organization",
      name: companyData.name,
      url: "https://daswel.com",
      logo: "https://daswel.com/images/logo.png",
      description: companyData.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: companyData.address,
        addressCountry: "ID",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col space-y-20 sm:space-y-24 py-10 sm:py-16">
        {/* Page Header Hero Banner */}
        <header className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-border/50 shadow-xl min-h-[380px] sm:min-h-[440px] flex items-center p-6 sm:p-12 lg:p-16">
            {/* Background Image with priority loading */}
            <Image
              src="/images/daswell-bg-img.png"
              alt={`Latar Belakang Profil ${companyData.name}`}
              fill
              priority
              className="object-cover object-[center_right] sm:object-center"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />

            {/* Gradient Overlays for optimal readability across mobile and desktop */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/35 sm:from-black/90 sm:via-black/70 sm:to-black/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent sm:hidden" />

            {/* Content Container */}
            <div className="relative z-10 max-w-2xl space-y-4 text-white">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/40 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md shadow-sm">
                <Building2 className="h-3.5 w-3.5 text-primary" />
                <span>Profil Perusahaan</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
                Tentang {companyData.name}
              </h1>
              <p className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed drop-shadow font-normal max-w-xl">
                Membangun fondasi masa depan industri dengan dedikasi teknik terdepan, integritas kemitraan, dan solusi peralatan konstruksi berstandar global.
              </p>
            </div>
          </div>
        </header>

        {/* Section 1: Tentang Perusahaan (Dedikasi, Prinsip Utama, & Statistik) */}
        <AboutCompanySection />

        {/* Section 2: Why Us (Spesialis | Perfeksionis, Kenapa Memilih Kami, & Nilai-Nilai Perusahaan) */}
        <AboutAndFeaturesSection />

        {/* CTA Hubungi Kami */}
        <CtaSection />
      </div>
    </>
  );
}
