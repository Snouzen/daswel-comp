import type { Metadata } from "next";
import { companyData } from "@/data/company";
import { contactDepartments, quickInquiries } from "@/data/contact";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfoSection } from "@/components/contact/contact-info-section";
import { WhatsAppClickButton } from "@/components/contact/whatsapp-click-button";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Building2,
  Send,
  Headphones,
  Wrench,
  Briefcase,
  ExternalLink,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak Resmi & Lokasi Kantor",
  description:
    "Hubungi Daswel Company untuk konsultasi teknis peralatan alat berat, permintaan penawaran harga resmi, layanan purna jual, atau kunjungi kantor kami.",
  alternates: {
    canonical: "https://daswel.com/contact",
  },
  openGraph: {
    title: `Kontak Resmi & Lokasi Kantor | ${companyData.name}`,
    description:
      "Informasi kontak lengkap, alamat kantor resmi, jam layanan konsultasi, dan direct WhatsApp Daswel Company.",
    url: "https://daswel.com/contact",
    siteName: companyData.name,
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Kontak Resmi & Lokasi Kantor | ${companyData.name}`,
    description:
      "Hubungi tim teknis dan representatif resmi Daswel Company untuk kebutuhan alat berat dan mesin industri.",
  },
};

export default function ContactPage() {
  const cleanWhatsAppNumber = companyData.whatsapp.replace(/\D/g, "");

  const departmentIcons = [
    <Headphones key="sales" className="h-5 w-5 text-primary" />,
    <Wrench key="tech" className="h-5 w-5 text-primary" />,
    <Briefcase key="partner" className="h-5 w-5 text-primary" />,
  ];

  // LocalBusiness Structured Data (Schema.org)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
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

        {/* Google Maps Location Embed */}
        <section id="map-section" aria-label="Peta Lokasi Perusahaan" className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Lokasi Kantor & Fasilitas Workshop
              </h2>
              <p className="text-sm text-muted-foreground">
                Kunjungi kantor pusat kami di lokasi strategis berikut:
              </p>
            </div>
            <Button asChild variant="outline" size="sm" className="gap-1.5 self-start sm:self-auto">
              <a
                href="https://maps.google.com/?q=Jakarta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </Button>
          </div>

          <div className="overflow-hidden rounded-3xl border shadow-sm aspect-[16/9] sm:aspect-[21/9] w-full bg-muted">
            <iframe
              src={companyData.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Peta Lokasi ${companyData.name}`}
              className="w-full h-full"
            />
          </div>
        </section>
      </div>
    </>
  );
}
