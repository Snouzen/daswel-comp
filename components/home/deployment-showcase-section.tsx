"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  deploymentsData,
  deploymentCategories,
  type DeploymentCategory,
} from "@/data/deployments";
import {
  MapPin,
  HardHat,
  ChevronRight,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Building,
  Fuel,
  Palmtree,
  Factory,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/ui/counter";

export function DeploymentShowcaseSection() {
  const [selectedCategory, setSelectedCategory] =
    React.useState<DeploymentCategory>("Semua");

  // Filter untuk showcase kartu di halaman utama (ambil 6 teratas, dahulukan featured)
  const showcaseProjects = React.useMemo(() => {
    let list =
      selectedCategory === "Semua"
        ? deploymentsData
        : deploymentsData.filter((d) => d.category === selectedCategory);

    const featured = list.filter((p) => p.featured);
    const nonFeatured = list.filter((p) => !p.featured);
    return [...featured, ...nonFeatured].slice(0, 6);
  }, [selectedCategory]);

  const getSectorIcon = (sector: string) => {
    switch (sector) {
      case "Infrastruktur & Transportasi":
        return <Building className="h-3.5 w-3.5" />;
      case "Pertambangan & Energi":
        return <Fuel className="h-3.5 w-3.5" />;
      case "Pariwisata & Resort":
        return <Palmtree className="h-3.5 w-3.5" />;
      case "Industri & Precast":
        return <Factory className="h-3.5 w-3.5" />;
      default:
        return <HardHat className="h-3.5 w-3.5" />;
    }
  };

  return (
    <section
      className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12"
      aria-label="Sebaran Proyek dan Deployment"
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold text-primary">
            <HardHat className="h-3.5 w-3.5" />
            <span>Rekam Jejak Lapangan & Bukti Operasional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Sebaran Proyek &amp; Deployment
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Unit alat berat Daya Maestro Wellindo telah dipercaya dan teruji
            beroperasi di lebih dari <span className="font-semibold text-foreground">70+ titik proyek strategis</span> di seluruh Indonesia hingga Timor Leste—mulai dari pembangunan infrastruktur IKN, tol Trans Sumatera, tambang Freeport Timika &amp; Pertamina, hingga proyek perhotelan dan precast.
          </p>
        </div>

        <Button
          asChild
          variant="outline"
          className="rounded-full px-5 py-2.5 font-semibold shrink-0 border-primary/30 hover:bg-primary/10 text-primary self-start md:self-auto gap-2"
        >
          <Link href="/deployments">
            <Layers className="h-4 w-4" />
            <span>Lihat Direktori &amp; Training</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {/* Key Metric Stats Banner with Smooth Count-Up Animation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-muted/40 border">
        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-extrabold text-primary">
            <CountUp value={70} suffix="+" />
          </div>
          <div className="text-xs sm:text-sm font-medium text-foreground">
            Titik Proyek Nyata
          </div>
          <div className="text-xs text-muted-foreground">
            Infrastruktur, Tambang &amp; Industri
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-extrabold text-foreground">
            <CountUp value={25} suffix="+" />
          </div>
          <div className="text-xs sm:text-sm font-medium text-foreground">
            Wilayah &amp; Provinsi
          </div>
          <div className="text-xs text-muted-foreground">
            Sumatera s/d Papua &amp; Timor Leste
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-extrabold text-foreground">
            <CountUp value={5} suffix=" Lini" />
          </div>
          <div className="text-xs sm:text-sm font-medium text-foreground">
            Lini Alat Berat
          </div>
          <div className="text-xs text-muted-foreground">
            Mixer, Pump, Forklift, Loader
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
            <CountUp value={100} suffix="%" />
          </div>
          <div className="text-xs sm:text-sm font-medium text-foreground">
            Dukungan Lapangan
          </div>
          <div className="text-xs text-muted-foreground">
            Teknisi &amp; Garansi Resmi 1 Tahun
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        {deploymentCategories.map((category) => {
          const isActive = selectedCategory === category;
          const count =
            category === "Semua"
              ? deploymentsData.length
              : deploymentsData.filter((d) => d.category === category).length;

          return (
            <button
              key={category}
              type="button"
              suppressHydrationWarning
              onClick={() => setSelectedCategory(category)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                isActive
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              <span>{category}</span>
              <span
                className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive
                    ? "bg-black/20 text-white"
                    : "bg-background text-muted-foreground"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Featured Projects Grid Showcase */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <AnimatePresence mode="popLayout">
          {showcaseProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25, delay: idx * 0.04 }}
              className="flex flex-col rounded-3xl border bg-card overflow-hidden shadow-sm hover:shadow-xl transition-all group"
            >
              {/* Photo Area */}
              <div className="relative h-56 sm:h-64 bg-muted overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.location}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Badges on Image */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-semibold text-white border border-white/10">
                    {getSectorIcon(project.sector)}
                    <span>{project.sector}</span>
                  </span>
                  {project.featured && (
                    <span className="rounded-full bg-primary/90 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-primary-foreground uppercase tracking-wider">
                      Unggulan
                    </span>
                  )}
                </div>

                {/* Location on image bottom */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-white/90 text-xs font-semibold">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground font-medium bg-muted/60 px-2.5 py-1 rounded-lg">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                    <span>Unit: {project.productName}</span>
                  </div>
                </div>

                <div className="pt-2 border-t flex items-center justify-between">
                  <Link
                    href={`/products/${project.productSlugs[0]}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                  >
                    <span>Spesifikasi Unit</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>

                  <Link
                    href="/deployments"
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Detail Proyek
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {/* Bottom CTA Directing to Dedicated Deployments Page */}
      <div className="text-center pt-4">
        <p className="text-sm text-muted-foreground mb-4">
          Menampilkan {showcaseProjects.length} proyek unggulan dari total{" "}
          <strong className="text-foreground">{deploymentsData.length} proyek</strong> terdaftar di seluruh Indonesia dan Timor Leste.
        </p>
        <Button
          asChild
          className="rounded-full px-8 py-3.5 text-sm font-bold gap-2 shadow-lg"
        >
          <Link href="/deployments">
            <Layers className="h-4 w-4" />
            <span>Buka Direktori Lengkap Deployment, Training &amp; After Sales</span>
            <ChevronRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
