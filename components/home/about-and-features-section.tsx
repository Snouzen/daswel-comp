"use client";

import { motion } from "framer-motion";
import { companyData } from "@/data/company";
import {
  ShieldCheck,
  Zap,
  Award,
  Clock,
  CheckCircle,
  Truck,
  Wrench,
  Target,
  Headset,
  Tag,
  Settings,
  BadgeCheck,
  Heart,
  Handshake,
  Users,
  Crown,
  TrendingUp,
} from "lucide-react";

const whyChooseUs = [
  {
    icon: Headset,
    title: "Customer Service",
    description:
      "Silakan menghubungi CS kami kapan saja untuk mendapatkan penawaran terbaik serta konsultasi spesifikasi produk langsung dari tim Customer Service profesional kami.",
  },
  {
    icon: Tag,
    title: "Harga Kompetitif",
    description:
      "Karena kami pabriknya langsung, harga yang Anda dapatkan dijamin lebih kompetitif dibandingkan penawaran lain untuk produk dengan kualitas dan spesifikasi yang sama.",
  },
  {
    icon: Settings,
    title: "After Sales",
    description:
      "Tim After Sales kami menjamin seluruh keluhan dari customer akan segera teratasi — ini cara kami membangun kepercayaan dan loyalitas jangka panjang.",
  },
  {
    icon: BadgeCheck,
    title: "Jaminan Garansi",
    description:
      "Garansi kami berikan kepada seluruh customer sebagai wujud apresiasi atas kepercayaan Anda. Setiap produk yang dianggap cacat produksi akan kami tukar dengan yang baru.",
  },
];

const companyValues = [
  {
    icon: Heart,
    title: "Integritas",
    description:
      "Bangun kepercayaan dengan kejujuran, tanggung jawab, serta perbuatan.",
  },
  {
    icon: Handshake,
    title: "Komitmen",
    description:
      "Menjunjung tinggi nilai-nilai yang disepakati dan bertanggung jawab dengan sepenuh hati.",
  },
  {
    icon: Users,
    title: "Kerja Tim",
    description:
      "Semangat saling menghormati untuk mencapai hasil akhir terbaik.",
  },
  {
    icon: Crown,
    title: "Kepemimpinan",
    description:
      "Menyatukan dan memotivasi untuk mencapai target perusahaan.",
  },
  {
    icon: TrendingUp,
    title: "Peningkatan Terus Menerus",
    description:
      "Berkomitmen untuk terus melakukan perbaikan dalam pekerjaan, bagi diri sendiri, unit kerja, dan perusahaan.",
  },
];

const specialistPoints = [
  "Kami adalah spesialis Self Loading Mixer dan Mixer Pump terpercaya di Indonesia.",
  "Tenaga profesional 24 jam dengan pemahaman spesifikasi produk secara menyeluruh yang siap membantu memaksimalkan kinerja setiap unit.",
  "Produk kami yang sudah digunakan di proyek-proyek seluruh Indonesia sejak tahun 2021.",
];

const pillars = [
  "Integritas dan transparansi dalam setiap kemitraan bisnis.",
  "Pengembangan teknologi ramah lingkungan beremisi rendah.",
  "Fokus pada peningkatan produktivitas dan return of investment (ROI) klien.",
];

export function AboutAndFeaturesSection() {
  return (
    <div className="space-y-24">
      {/* Bagian Tentang Perusahaan */}
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

      {/* Bagian Spesialis | Perfeksionis */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Spesialis Perfeksionis Daswel">
        <div className="rounded-3xl border bg-gradient-to-br from-primary/5 via-card to-secondary/5 p-8 sm:p-12 lg:p-16 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-5"
            >
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Why Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                  Spesialis <span className="text-primary">|</span> Perfeksionis
                </h2>
              </div>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                Dengan pengalaman bertahun-tahun di industri mesin konstruksi dan pengolahan beton, {companyData.name} hadir sebagai mitra terpercaya yang mengutamakan keahlian mendalam dan komitmen tanpa kompromi.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ul className="space-y-5" role="list">
                {specialistPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-sm sm:text-base text-foreground leading-relaxed font-medium">
                      {point}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bagian Kenapa Memilih Kami (4 Kartu) */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Kenapa Memilih Daswel">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Kenapa Memilih Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Keunggulan yang Membedakan {companyData.name}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Kami tidak hanya menjual alat berat dan mesin beton, tetapi memberikan solusi menyeluruh mulai dari konsultasi, harga langsung pabrik, layanan purna jual, hingga jaminan garansi penuh.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-2xl border bg-card p-7 shadow-sm hover:shadow-lg transition-all hover:border-primary/40 space-y-4 group"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="font-bold text-lg text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bagian Nilai-Nilai Perusahaan Kami */}
      <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Nilai-Nilai Perusahaan">
        <div className="rounded-3xl border bg-card/60 p-8 sm:p-12 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Fondasi Perusahaan
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Nilai-Nilai Perusahaan Kami
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Lima pilar yang menjadi landasan setiap langkah {companyData.name} dalam melayani mitra industri di seluruh Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {companyValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="rounded-2xl border bg-background p-6 shadow-sm hover:shadow-md transition-all hover:border-primary/40 text-center space-y-3 group"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-base text-foreground">{value.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

