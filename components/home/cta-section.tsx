"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import { MessageSquare, PhoneCall, Clock, CheckCircle2, ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-primary text-primary-foreground p-8 sm:p-14 lg:p-16 shadow-xl"
      >
        {/* Decorative background glow */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-black/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-foreground/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
            <Clock className="h-3.5 w-3.5" />
            Layanan Konsultasi Cepat
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Siap Tingkatkan Produktivitas & Efisiensi Pabrik Anda?
          </h2>

          <p className="text-primary-foreground/90 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            Diskusikan kebutuhan spesifikasi mesin dan peralatan industri Anda langsung bersama konsultan teknis {companyData.name}. Dapatkan penawaran harga resmi dan rekomendasi terbaik.
          </p>

          {/* Value Badges */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium text-primary-foreground/90 pt-2">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" /> Respon Cepat & Ramah
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" /> Konsultasi Teknis Gratis
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4" /> Penawaran Resmi & Transparan
            </span>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="gap-2.5 shadow-lg text-sm sm:text-base font-semibold px-6 py-6"
            >
              <a href={companyData.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-5 w-5 text-green-600" />
                Hubungi via WhatsApp Sekarang
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground hover:text-primary gap-2 text-sm sm:text-base px-6 py-6"
            >
              <Link href="/contact">
                <PhoneCall className="h-4 w-4" />
                Informasi Kontak Lengkap
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="pt-2 text-xs text-primary-foreground/75">
            Jam operasional: {companyData.operatingHours} • WhatsApp aktif setiap hari kerja
          </div>
        </div>
      </motion.div>
    </section>
  );
}
