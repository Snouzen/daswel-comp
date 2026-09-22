"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import { MessageSquare, PhoneCall, Check, ArrowRight, Sparkles } from "lucide-react";

export function CtaSection() {
  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-950 via-slate-900 to-zinc-950 text-white p-8 sm:p-14 lg:p-16 border border-border/40 shadow-2xl"
      >
        {/* Decorative ambient lighting */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(245,31,31,0.18),rgba(0,0,0,0))] pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center space-y-6 sm:space-y-7">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary backdrop-blur-md shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Konsultasi Teknis & Penawaran Resmi</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Siap Mengoptimalkan Efisiensi Proyek Anda Bersama{" "}
            <span className="text-primary">Daya Maestro Wellindo</span>?
          </h2>

          {/* Subtitle */}
          <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto font-normal">
            Diskusikan spesifikasi armada alat berat, estimasi kapasitas beton, hingga ketersediaan unit langsung bersama tim teknisi ahli {companyData.name}. Dapatkan penawaran harga terbaik langsung dari pabrik.
          </p>

          {/* Value Badges */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-medium text-zinc-300 pt-1">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-xs">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Check className="h-3 w-3 stroke-[3]" />
              </div>
              <span>Respon Cepat & Ramah</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-xs">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Check className="h-3 w-3 stroke-[3]" />
              </div>
              <span>Konsultasi Teknis Gratis</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-xs">
              <div className="flex h-4 w-4 items-center justify-center rounded-full bg-primary/20 text-primary">
                <Check className="h-3 w-3 stroke-[3]" />
              </div>
              <span>Penawaran Resmi & Transparan</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              className="gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold shadow-xl shadow-emerald-950/40 text-sm sm:text-base px-7 py-6 rounded-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <a href={companyData.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-5 w-5 fill-white text-white" />
                Hubungi via WhatsApp Sekarang
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-white/20 bg-white/5 hover:bg-white/15 text-white hover:text-white font-semibold text-sm sm:text-base px-7 py-6 rounded-xl backdrop-blur-md transition-all duration-300"
            >
              <Link href="/contact">
                <PhoneCall className="h-4 w-4 text-primary" />
                Informasi Kontak Lengkap
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Operational Hours */}
          <div className="pt-2 text-xs text-zinc-400">
            Jam Operasional: <span className="text-zinc-200 font-medium">{companyData.operatingHours}</span> • WhatsApp aktif melayani seluruh Indonesia
          </div>
        </div>
      </motion.div>
    </section>
  );
}
