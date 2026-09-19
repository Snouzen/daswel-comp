import type { Metadata } from "next";
import { companyData } from "@/data/company";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfoSection } from "@/components/contact/contact-info-section";
import { DepartmentsSection } from "@/components/contact/departments-section";
import { OperatingHoursSection } from "@/components/contact/operating-hours-section";
import { CompanyMap } from "@/components/contact/company-map";
import { WhatsAppClickButton } from "@/components/contact/whatsapp-click-button";
import { MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak Resmi & Lokasi Kantor",
  description:
    "Hubungi Daswel Company untuk konsultasi teknis peralatan alat berat, permintaan penawaran harga resmi, layanan purna jual, atau kunjungi kantor kami.",
  keywords: [
    "kontak daswel",
    "alamat daswel company",
    "nomor telepon daswel",
    "whatsapp daswel",
    "distributor alat berat jakarta",
    "layanan purna jual alat berat",
    "quotation harga alat berat",
    "lokasi kantor daswel",
  ],
  alternates: {
    canonical: "https://daswel.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Kontak Resmi & Lokasi Kantor | ${companyData.name}`,
    description:
      "Informasi kontak lengkap, alamat kantor resmi, jam layanan konsultasi, dan direct WhatsApp Daswel Company.",
    url: "https://daswel.com/contact",
    siteName: companyData.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://daswel.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: `Kontak Resmi & Lokasi Kantor - ${companyData.name}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Kontak Resmi & Lokasi Kantor | ${companyData.name}`,
    description:
      "Hubungi tim teknis dan representatif resmi Daswel Company untuk kebutuhan alat berat dan mesin industri.",
    images: ["https://daswel.com/images/logo.png"],
  },
};

export default function ContactPage() {
  // Comprehensive Schema.org Structured Data (LocalBusiness & ContactPage)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ContactPage"],
    name: companyData.name,
    description: companyData.description,
    image: "https://daswel.com/images/logo.png",
    telephone: companyData.phone,
    email: companyData.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Industri Raya No. 45, Kawasan Industri",
      addressLocality: "Jakarta",
      addressRegion: "DKI Jakarta",
      postalCode: "14450",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -6.2088,
      longitude: 106.8456,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:30",
        closes: "14:00",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: companyData.phone,
        contactType: "customer service",
        availableLanguage: ["Indonesian", "English"],
      },
      {
        "@type": "ContactPoint",
        telephone: companyData.phone,
        contactType: "sales",
        availableLanguage: ["Indonesian", "English"],
      },
    ],
    url: "https://daswel.com/contact",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12 sm:space-y-16">
        {/* Page Header */}
        <header className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Saluran Komunikasi Resmi</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Hubungi Tim Kami
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Kami siap membantu kebutuhan spesifikasi unit alat berat, penawaran harga resmi, dan dukungan purna jual untuk seluruh mitra bisnis di Indonesia.
          </p>
          <div className="pt-2">
            <WhatsAppClickButton size="md" showPulse>
              Chat WhatsApp Langsung (Sekali Klik)
            </WhatsAppClickButton>
          </div>
        </header>

        {/* Primary Contact Cards & Address Section */}
        <ContactInfoSection />

        {/* Department Contacts & Direct Consultation Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6">
            <DepartmentsSection />
          </div>
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
        </div>

        {/* Weekly Operating Hours Section */}
        <OperatingHoursSection />

        {/* Company Location Map Section */}
        <CompanyMap />
      </div>
    </>
  );
}
