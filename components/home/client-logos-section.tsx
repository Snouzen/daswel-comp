"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

interface ClientLogo {
  name: string;
  logo: string;
  description?: string;
}

const clientLogos: ClientLogo[] = [
  {
    name: "Pertamina",
    logo: "/images/Content/6. Client Logo/pertamina-logo.png",
    description: "BUMN Energi & Migas Nasional",
  },
  {
    name: "Kementerian PUPR",
    logo: "/images/Content/6. Client Logo/logo-pupr.png",
    description: "Kementerian Pekerjaan Umum dan Perumahan Rakyat",
  },
  {
    name: "Dinas Perhubungan (Dishub)",
    logo: "/images/Content/6. Client Logo/Logo Dishub.png",
    description: "Instansi Transportasi & Perhubungan",
  },
  {
    name: "Adaro Minerals Indonesia Tbk",
    logo:
      "/images/Content/6. Client Logo/Logo-Adaro-Minerals-Adaro-Minerals-Indoensia-Tbk.png",
    description: "Korporasi Tambang & Mineral Nasional",
  },
  {
    name: "PT. Cahaya Putri Agung",
    logo: "/images/Content/6. Client Logo/cpa1.png",
    description: "Kontraktor Proyek Tol Sicincin",
  },
  {
    name: "PT. Cipta Ecoenergi",
    logo: "/images/Content/6. Client Logo/CRE-Logo.png",
    description: "Proyek Perkebunan Sawit Samarinda",
  },
  {
    name: "PT. Bintang Selatan Agung",
    logo: "/images/Content/6. Client Logo/Logo PT. Bintang Selatan Agung.jpg",
    description: "Mitra Proyek Pertamina",
  },
  {
    name: "PT. Lancar Abadi Konstruksi",
    logo:
      "/images/Content/6. Client Logo/Logo PT. Lancar Abadi Konstruksi.jpeg",
    description: "Proyek Resort & Hotel Bali",
  },
  {
    name: "PT. Mukti Jaya Lestari",
    logo: "/images/Content/6. Client Logo/Logo PT. Mukti Jaya Lestari.jpeg",
    description: "Mitra Proyek Energi & Infrastruktur",
  },
  {
    name: "CV. Papua Anugerah Sentosa",
    logo:
      "/images/Content/6. Client Logo/Logo CV. Papua Anugerah Sentosa.jpg",
    description: "Kontraktor Pembangunan RSUD Papua",
  },
  {
    name: "PT. Energi Perkasa Abadi",
    logo: "/images/Content/6. Client Logo/energi-perkasa-abadi-logo.png",
    description: "Proyek Jalan Muara Teweh",
  },
  {
    name: "PT. Esprezza Cipta Griya",
    logo: "/images/Content/6. Client Logo/esprezza-logo.png",
    description: "Proyek Pelabuhan Jailolo Maluku",
  },
];

export function ClientLogosSection() {
  return (
    <section
      className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="client-logos-heading"
    >
      <div className="rounded-3xl border bg-card/40 p-8 sm:p-12 lg:p-14 shadow-xs">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Handshake className="h-4 w-4" />
            <span>Kemitraan & Kepercayaan Mitra</span>
          </div>
          <h2
            id="client-logos-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground"
          >
            Dipercaya oleh Berbagai Korporasi & Instansi
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Armada alat berat dan mobile batching plant Daya Maestro Wellindo telah menjadi
            tulang punggung berbagai proyek strategis BUMN, instansi
            pemerintah, dan kontraktor swasta di seluruh Indonesia.
          </p>
        </div>

        {/* Logo Cloud Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
          {clientLogos.map((client, idx) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.03 }}
              className="group relative flex flex-col items-center justify-center rounded-2xl border border-border/70 bg-white dark:bg-card/90 p-4 sm:p-5 h-28 sm:h-32 transition-all duration-300 hover:border-primary/40 hover:shadow-md"
              title={`${client.name}${client.description ? ` — ${client.description}` : ""}`}
            >
              <div className="relative h-14 w-full max-w-[130px] flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={`Logo ${client.name}`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  className="object-contain filter grayscale opacity-70 contrast-125 group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100 group-hover:scale-105 transition-all duration-300"
                />
              </div>
              <span className="mt-2 text-[11px] font-medium text-muted-foreground group-hover:text-foreground text-center truncate max-w-full transition-colors">
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
