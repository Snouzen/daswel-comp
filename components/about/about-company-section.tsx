"use client";

import { motion } from "framer-motion";
import { companyData } from "@/data/company";
import { CheckCircle2, Compass, History, Sparkles } from "lucide-react";

const missions = [
  "Menyediakan jasa dan produk konstruksi bermutu tinggi secara profesional dan berkesinambungan.",
  "Meningkatkan kualitas dan kapasitas layanan purna jual secara berkelanjutan.",
];

const milestones = [
  { value: "1986", label: "Awal Berdiri Global", desc: "Bermula inovasi dari China" },
  { value: "80+", label: "Negara Terjangkau", desc: "Asia, Afrika, Eropa, Amerika & Oceania" },
  { value: "2021", label: "Hadir di Jakarta", desc: "Melayani proyek seluruh Indonesia" },
  { value: "No. 1", label: "Pilihan Utama", desc: "Self Loading Mixer di medan terpencil" },
];

export function AboutCompanySection() {
  return (
    <div className="space-y-12">
      {/* Bagian Profil & Visi Misi */}
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
                  Pilihan Pertama Solusi Beton & Alat Berat di Indonesia
                </h2>
              </div>

              <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
                {companyData.name} telah menjadi pilihan pertama dalam Self Loading Mixer di Indonesia dan terus berkomitmen membantu pembangunan infrastruktur di seluruh penjuru negeri, khususnya area terpencil dengan akses jalan yang sulit dijangkau.
              </p>

              {/* Visi & Misi Ringkas */}
              <div className="pt-2 space-y-4">
                <div className="rounded-2xl border bg-background/80 p-4 sm:p-5 space-y-1.5">
                  <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                    <Compass className="h-4 w-4" />
                    <span>Visi Perusahaan</span>
                  </div>
                  <p className="text-foreground font-bold text-base sm:text-lg">
                    Spesialis <span className="text-primary">|</span> Perfeksionis
                  </p>
                </div>

                <div className="space-y-2.5">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-primary" />
                    Misi Kami:
                  </h3>
                  <ul className="space-y-2">
                    {missions.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm sm:text-base text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Statistik & Milestone Sejarah */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-5 grid grid-cols-2 gap-4"
            >
              {milestones.map((item, idx) => (
                <div key={idx} className="rounded-2xl border bg-background p-6 shadow-sm text-center space-y-1.5 hover:border-primary/40 transition-colors">
                  <div className="text-3xl sm:text-4xl font-extrabold text-primary">{item.value}</div>
                  <div className="text-xs sm:text-sm font-semibold text-foreground">{item.label}</div>
                  <p className="text-[11px] text-muted-foreground leading-tight">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bagian Sejarah (History) */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Sejarah Perjalanan Daswel">
        <div className="rounded-3xl border bg-gradient-to-br from-card via-card to-primary/5 p-8 sm:p-12 shadow-sm space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary">
            <History className="h-4 w-4" />
            <span>Sejarah Perusahaan (History)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            Jejak Langkah & Inovasi Global Sejak 1986
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2 text-muted-foreground text-sm sm:text-base leading-relaxed">
            <p>
              Bermula dari China pada tahun <strong>1986</strong>, {companyData.name} terus berinovasi menyediakan peralatan konstruksi bermutu tinggi guna menyokong pembangunan infrastruktur di berbagai medan ekstrem. Hingga kini, Daswell telah beroperasi dan dipercaya di lebih dari <strong>80 negara</strong> di benua Asia, Afrika, Eropa, Amerika, hingga Oceania.
            </p>
            <p>
              Didirikan resmi di Jakarta sejak <strong>2021</strong>, Daswell terus mengokohkan posisinya sebagai pilihan nomor satu untuk Self Loading Mixer dan armada peralatan konstruksi tangguh lainnya di Indonesia, siap mendampingi proyek Anda hingga ke pelosok daerah.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

