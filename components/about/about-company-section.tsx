"use client";

import { motion } from "framer-motion";
import { companyData } from "@/data/company";
import { CheckCircle, Target } from "lucide-react";

const pillars = [
  "Integritas dan transparansi dalam setiap kemitraan bisnis.",
  "Pengembangan teknologi ramah lingkungan beremisi rendah.",
  "Fokus pada peningkatan produktivitas dan return of investment (ROI) klien.",
];

export function AboutCompanySection() {
  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl border bg-card/60 p-8 sm:p-12 lg:p-16 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Teks Cerita & Visi */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Tentang {companyData.name}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Dedikasi untuk Keunggulan Manufaktur & Keandalan Operasional
              </h2>
            </div>

            <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
              Sejak awal berdiri, {companyData.name} berkomitmen menjadi mitra strategis sektor industri dan manufaktur. Kami memadukan keahlian teknik mendalam dengan standar kontrol kualitas internasional guna menyediakan mesin yang tahan lama, aman, dan efisien.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-base font-semibold text-foreground flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                Prinsip Utama Kami:
              </h3>
              <ul className="space-y-2.5">
                {pillars.map((pillar, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                    <span>{pillar}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Statistik & Identitas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            <div className="rounded-2xl border bg-background p-6 shadow-sm text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary">99.8%</div>
              <div className="text-xs sm:text-sm font-medium text-foreground">Uptime Keandalan Mesin</div>
              <p className="text-[11px] text-muted-foreground">Tingkat operasional stabil teruji</p>
            </div>

            <div className="rounded-2xl border bg-background p-6 shadow-sm text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary">500+</div>
              <div className="text-xs sm:text-sm font-medium text-foreground">Proyek Terselesaikan</div>
              <p className="text-[11px] text-muted-foreground">Dipercaya industri manufaktur</p>
            </div>

            <div className="rounded-2xl border bg-background p-6 shadow-sm text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary">24/7</div>
              <div className="text-xs sm:text-sm font-medium text-foreground">Dukungan Siaga</div>
              <p className="text-[11px] text-muted-foreground">Bantuan teknisi darurat</p>
            </div>

            <div className="rounded-2xl border bg-background p-6 shadow-sm text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-extrabold text-primary">100%</div>
              <div className="text-xs sm:text-sm font-medium text-foreground">Garansi Resmi</div>
              <p className="text-[11px] text-muted-foreground">Perlindungan purna jual penuh</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
