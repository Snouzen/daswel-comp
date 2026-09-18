"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, CheckCircle2, Factory, Users, Award } from "lucide-react";

const stats = [
  { icon: Factory, label: "Pengalaman Industri", value: "10+ Tahun" },
  { icon: Users, label: "Mitra Perusahaan", value: "500+" },
  { icon: Award, label: "Sertifikasi Mutu", value: "ISO 9001" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 via-background to-background py-16 sm:py-24 lg:py-28">
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-primary/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
              <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
              Wajah Digital Resmi {companyData.name}
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-tight">
              {companyData.name} — <span className="text-primary">{companyData.tagline}</span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {companyData.description}
            </p>

            {/* Quick value highlights */}
            <div className="flex flex-wrap gap-y-2 gap-x-6 text-sm text-foreground/80 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>Teknologi Ramah Lingkungan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>Garansi Resmi & Suku Cadang</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                <span>Respon Cepat Layanan Purna Jual</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Button asChild size="lg" className="gap-2 shadow-md">
                <Link href="/products">
                  Jelajahi Produk
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="gap-2">
                <a
                  href={companyData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium"
                >
                  <MessageSquare className="h-4 w-4 text-primary" />
                  Hubungi via WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          {/* Visual Column / Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-2xl border bg-card/80 p-6 sm:p-8 shadow-xl backdrop-blur-sm space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                  Komitmen Mutu
                </span>
                <h2 className="text-xl font-bold text-foreground">
                  Keandalan Terpercaya untuk Skala Industri
                </h2>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Menghadirkan solusi mesin produksi, pembangkit daya, dan filtrasi berstandar internasional yang dirancang untuk efisiensi jangka panjang.
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 border-t pt-5">
                {stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <div key={idx} className="text-center space-y-1">
                      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="text-lg font-bold text-foreground">{stat.value}</div>
                      <div className="text-[11px] text-muted-foreground leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="rounded-lg bg-muted/60 p-3.5 text-xs text-muted-foreground flex items-center justify-between">
                <span>Jam Layanan Konsultasi:</span>
                <span className="font-semibold text-foreground">{companyData.operatingHours}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
