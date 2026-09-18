import type { Metadata } from "next";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Building2,
  Send,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Kontak Resmi & Lokasi Kantor",
  description:
    "Hubungi Daswel Company untuk konsultasi teknis, penawaran harga mesin manufaktur, layanan purna jual, atau kunjungi lokasi kantor kami.",
  alternates: {
    canonical: "https://daswel.com/contact",
  },
  openGraph: {
    title: `Kontak Resmi & Lokasi Kantor | ${companyData.name}`,
    description:
      "Informasi kontak lengkap, alamat kantor resmi, jam layanan konsultasi, dan direct WhatsApp.",
    url: "https://daswel.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: `Kontak Resmi & Lokasi Kantor | ${companyData.name}`,
    description:
      "Hubungi tim teknis dan representatif resmi Daswel Company.",
  },
};

export default function ContactPage() {
  return (
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
          Kami siap membantu kebutuhan spesifikasi peralatan pabrik, penawaran harga khusus, dan dukungan purna jual untuk mitra bisnis di seluruh Indonesia.
        </p>
      </header>

      {/* Contact Information & WhatsApp Box */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Info Cards Column */}
        <section aria-label="Detail Kontak" className="lg:col-span-7 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Alamat */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <h2 className="font-bold text-base text-foreground">Alamat Kantor & Pabrik</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {companyData.address}
              </p>
            </div>

            {/* Jam Operasional */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <h2 className="font-bold text-base text-foreground">Jam Layanan</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {companyData.operatingHours}
              </p>
              <p className="text-xs text-primary font-medium">
                Respon cepat di jam kerja operasional
              </p>
            </div>

            {/* Telepon */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Phone className="h-5 w-5" />
              </div>
              <h2 className="font-bold text-base text-foreground">Telepon Kantor</h2>
              <p className="text-sm text-muted-foreground">
                <a href={`tel:${companyData.phone}`} className="hover:text-primary transition-colors">
                  {companyData.phone}
                </a>
              </p>
            </div>

            {/* Email */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm space-y-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="font-bold text-base text-foreground">Email Korespondensi</h2>
              <p className="text-sm text-muted-foreground">
                <a href={`mailto:${companyData.email}`} className="hover:text-primary transition-colors">
                  {companyData.email}
                </a>
              </p>
            </div>
          </div>

          {/* Quick WhatsApp Preset Inquiries */}
          <div className="rounded-2xl border bg-primary/5 p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              Konsultasi Langsung via WhatsApp
            </h2>
            <p className="text-sm text-muted-foreground">
              Pilih topik pembicaraan Anda untuk langsung terhubung dengan staf spesialis terkait:
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <Button asChild variant="outline" size="sm" className="gap-2 bg-card hover:border-primary">
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                    "Halo Daswel, saya ingin bertanya tentang katalog mesin manufaktur."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="h-3.5 w-3.5 text-primary" />
                  Katalog Mesin
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="gap-2 bg-card hover:border-primary">
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                    "Halo Daswel, saya ingin meminta surat penawaran harga resmi (quotation)."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="h-3.5 w-3.5 text-primary" />
                  Permintaan Quotation
                </a>
              </Button>
              <Button asChild variant="outline" size="sm" className="gap-2 bg-card hover:border-primary">
                <a
                  href={`https://wa.me/6281234567890?text=${encodeURIComponent(
                    "Halo Daswel, saya membutuhkan informasi layanan purna jual / garansi."
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="h-3.5 w-3.5 text-primary" />
                  Layanan Garansi & Servis
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* WhatsApp Highlight Box */}
        <section aria-label="WhatsApp Callout" className="lg:col-span-5">
          <div className="rounded-3xl border bg-card p-8 shadow-sm space-y-6 h-full flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-500/10 text-green-600">
                <MessageSquare className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">
                Respon Cepat via WhatsApp
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Saluran tercepat untuk mendapatkan informasi ketersediaan unit, katalog brosur teknis PDF, dan jadwal survei lapangan ke pabrik kami.
              </p>
              <div className="p-4 rounded-xl bg-muted/40 border text-xs text-muted-foreground space-y-1">
                <div className="font-semibold text-foreground">Nomor WhatsApp Resmi:</div>
                <div className="text-sm font-bold text-primary">{companyData.whatsapp}</div>
              </div>
            </div>

            <Button asChild size="lg" className="w-full gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md py-6">
              <a href={companyData.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-5 w-5" />
                Mulai Percakapan WhatsApp
              </a>
            </Button>
          </div>
        </section>
      </div>

      {/* Google Maps Location */}
      <section aria-label="Peta Lokasi Perusahaan" className="space-y-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <Building2 className="h-5 w-5 text-primary" />
            Lokasi Perusahaan
          </h2>
          <p className="text-sm text-muted-foreground">
            Kunjungi kantor pusat dan fasilitas demonstrasi mesin kami di lokasi strategis berikut:
          </p>
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
  );
}
