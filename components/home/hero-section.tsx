"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[720px] sm:min-h-[800px] lg:min-h-[880px] flex flex-col justify-between">
      {/* Background Image & Atmospheric Overlays */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <Image
          src="/images/hero-bg.jpeg"
          alt="Armada Unit Mesin Beton & Alat Berat Daya Maestro Wellindo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-bottom"
        />
        {/* Top atmospheric fade: blends with navbar and ensures 100% crisp text readability in the sky zone */}
        <div className="absolute inset-x-0 top-0 h-[65%] bg-gradient-to-b from-background/95 via-background/70 via-45% to-transparent" />
        {/* Bottom smooth fade: transitions gracefully from machinery floor into the next section */}
        <div className="absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Main Hero Content (Centered in the upper sky zone) */}
      <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 lg:pt-24 pb-72 sm:pb-84 lg:pb-[420px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          {/* Official Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-4 py-1.5 text-xs font-semibold text-primary backdrop-blur-md shadow-xs">
            <span className="inline-block h-2 w-2 rounded-full bg-primary animate-pulse" />
            <span>Wajah Digital Resmi Daya Maestro Wellindo</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl leading-tight">
            Daya Maestro <span className="text-primary">Wellindo</span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg lg:text-xl text-foreground/90 leading-relaxed font-semibold sm:font-bold">
            Daya Maestro Wellindo telah menjadi pilihan pertama dalam Self Loading Mixer di Indonesia dan terus berkomitmen membantu pembangunan infrastruktur di seluruh penjuru negeri, khususnya area terpencil dengan akses jalan yang sulit dijangkau.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button asChild size="lg" className="gap-2 shadow-lg shadow-primary/20 hover:shadow-xl transition-all">
              <Link href="/products">
                Jelajahi Produk
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="gap-2 bg-background/80 backdrop-blur-md border-border/80 hover:bg-background shadow-xs"
            >
              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="h-4 w-4 text-primary" />
                Hubungi via WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

