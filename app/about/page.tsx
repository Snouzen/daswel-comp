import type { Metadata } from "next";
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
        {/* Page Header */}
        <header className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Building2 className="h-3.5 w-3.5" />
              <span>Profil Perusahaan</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Tentang {companyData.name}
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              Membangun fondasi masa depan industri dengan dedikasi teknik terdepan, integritas kemitraan, dan solusi peralatan konstruksi berstandar global.
            </p>
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
