import type { Metadata } from "next";
import { companyData } from "@/data/company";
import { contactDepartments, quickInquiries } from "@/data/contact";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfoSection } from "@/components/contact/contact-info-section";
import { OperatingHoursSection } from "@/components/contact/operating-hours-section";
import { CompanyMap } from "@/components/contact/company-map";
import { WhatsAppClickButton } from "@/components/contact/whatsapp-click-button";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Send,
  Headphones,
  Wrench,
  Briefcase,
} from "lucide-react";

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
  const cleanWhatsAppNumber = companyData.whatsapp.replace(/\D/g, "");

  const departmentIcons = [
    <Headphones key="sales" className="h-5 w-5 text-primary" />,
    <Wrench key="tech" className="h-5 w-5 text-primary" />,
    <Briefcase key="partner" className="h-5 w-5 text-primary" />,
  ];

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
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-14">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Department Directory & Presets */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                Departemen & Spesialis Layanan
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Hubungi langsung divisi yang sesuai dengan keperluan bisnis Anda untuk penanganan yang lebih terarah.
              </p>
            </div>

            <div className="space-y-4">
              {contactDepartments.map((dept, idx) => (
                <div
                  key={dept.id}
                  className="rounded-2xl border bg-card p-5 shadow-sm space-y-3 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-primary/10">
                        {departmentIcons[idx % departmentIcons.length]}
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-foreground">
                          {dept.name}
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {dept.phone} • {dept.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {dept.description}
                  </p>

                  <Button asChild variant="outline" size="sm" className="w-full gap-2 text-xs">
                    <a
                      href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(dept.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Send className="h-3.5 w-3.5 text-primary" />
                      Hubungi {dept.name} via WhatsApp
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            {/* Quick Consultation Preset Topics */}
            <div className="rounded-2xl border bg-muted/40 p-6 space-y-4">
              <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-primary" />
                Pilihan Pertanyaan Cepat WhatsApp
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {quickInquiries.map((inquiry) => (
                  <Button
                    key={inquiry.id}
                    asChild
                    variant="outline"
                    size="sm"
                    className="justify-start text-left h-auto py-2.5 px-3 bg-card hover:border-primary"
                  >
                    <a
                      href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(inquiry.prefilledText)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="space-y-0.5">
                        <div className="font-semibold text-xs text-foreground">
                          {inquiry.label}
                        </div>
                        <div className="text-[11px] text-muted-foreground truncate">
                          {inquiry.description}
                        </div>
                      </div>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Consultation Form */}
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
