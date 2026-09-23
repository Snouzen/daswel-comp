"use client";

import { motion } from "framer-motion";
import { companyData } from "@/data/company";
import { MapPin, Clock, Phone, Mail, Navigation, ExternalLink, CheckCircle2 } from "lucide-react";

export function ContactInfoSection() {
  const cards = [
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Alamat Kantor & Workshop",
      primaryText: companyData.address,
      badge: "Kantor Pusat & Stockyard",
      action: {
        label: "Petunjuk Arah (Peta)",
        href: "#map-section",
        isExternal: false,
      },
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Jam Operasional",
      primaryText: companyData.operatingHours,
      badge: "Senin - Sabtu Aktif",
      subText: "Tim teknis dan layanan WhatsApp siap merespon cepat pada jam operasional.",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Telepon Resmi",
      primaryText: companyData.phone,
      badge: "Hotline Layanan",
      action: {
        label: "Hubungi via Telepon",
        href: `tel:${companyData.phone}`,
        isExternal: false,
      },
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Korespondensi",
      primaryText: companyData.email,
      badge: "Resmi Perusahaan",
      action: {
        label: "Kirim Pesan Email",
        href: `mailto:${companyData.email}`,
        isExternal: false,
      },
    },
  ];

  return (
    <section aria-label="Informasi Kontak dan Alamat Resmi" className="space-y-6">
      <div className="space-y-1">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Informasi Kontak & Titik Layanan
        </h2>
        <p className="text-sm text-muted-foreground">
          Akses saluran komunikasi langsung dan alamat fisik fasilitas operasional {companyData.name}.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            className="rounded-2xl border bg-card p-6 shadow-sm flex flex-col justify-between space-y-4 hover:border-primary/40 hover:shadow-md transition-all duration-300"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  {card.icon}
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="h-3 w-3" />
                  {card.badge}
                </span>
              </div>

              <h3 className="font-bold text-base text-foreground">
                {card.title}
              </h3>

              <div className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {card.action && card.action.href.startsWith("tel:") ? (
                  <a
                    href={card.action.href}
                    className="font-medium text-foreground hover:text-primary transition-colors text-base"
                  >
                    {card.primaryText}
                  </a>
                ) : card.action && card.action.href.startsWith("mailto:") ? (
                  <a
                    href={card.action.href}
                    className="font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {card.primaryText}
                  </a>
                ) : (
                  <address className="not-italic">{card.primaryText}</address>
                )}
              </div>

              {card.subText && (
                <p className="text-xs text-muted-foreground/80 leading-relaxed pt-1">
                  {card.subText}
                </p>
              )}
            </div>

            {card.action && (
              <div className="pt-2 border-t">
                <a
                  href={card.action.href}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>{card.action.label}</span>
                  <Navigation className="h-3 w-3" />
                </a>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
