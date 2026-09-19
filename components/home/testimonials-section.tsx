"use client";

import { motion } from "framer-motion";
import { testimonialsData } from "@/data/testimonials";
import { Star, MessageSquareQuote, Check, Building2 } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section
      className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="testimonials-heading"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
          <MessageSquareQuote className="h-4 w-4" />
          <span>Suara Kepuasan Mitra</span>
        </div>
        <h2
          id="testimonials-heading"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
        >
          Testimonial Klien
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Pengalaman langsung dari kontraktor, pengawas lapangan, dan pimpinan
          proyek infrastruktur di berbagai wilayah Indonesia bersama unit mesin
          Daswell.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {testimonialsData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="flex flex-col justify-between rounded-2xl border bg-card/70 hover:bg-card p-6 sm:p-7 shadow-xs hover:shadow-md transition-all duration-300 hover:border-primary/40 group"
          >
            {/* Top: Stars & Project Tag */}
            <div className="space-y-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1" aria-label="Rating 5 Bintang">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="inline-flex items-center rounded-full bg-primary/10 border border-primary/20 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                  {item.project}
                </span>
              </div>

              {/* Quote Content / Bullets */}
              {item.bullets && item.bullets.length > 0 ? (
                <div className="space-y-2.5 pt-1">
                  {item.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-sm text-foreground/90">
                      <div className="h-4 w-4 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </div>
                      <span className="leading-relaxed font-medium">{bullet}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-sm sm:text-[15px] text-foreground/90 leading-relaxed font-normal italic">
                  &ldquo;{item.content}&rdquo;
                </p>
              )}
            </div>

            {/* Bottom: Client Profile & Company */}
            <div className="pt-6 mt-6 border-t border-border/60 flex items-center gap-3.5">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 shrink-0 font-bold text-xs uppercase group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Building2 className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-foreground truncate">
                  {item.company}
                </h3>
                <p className="text-xs text-muted-foreground truncate">
                  {item.author
                    ? `${item.author}${item.role ? ` • ${item.role}` : ""}`
                    : item.project}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
