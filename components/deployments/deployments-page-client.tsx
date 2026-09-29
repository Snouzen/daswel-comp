"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { companyData } from "@/data/company";
import {
  deploymentsData,
  deploymentCategories,
  type DeploymentCategory,
  type DeploymentProject,
} from "@/data/deployments";
import {
  MapPin,
  HardHat,
  Wrench,
  GraduationCap,
  Layers,
  Search,
  CheckCircle2,
  ChevronRight,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Building,
  Fuel,
  Palmtree,
  Factory,
  ShieldCheck,
  Clock,
  Warehouse,
  Truck,
  Video,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountUp } from "@/components/ui/counter";

export function DeploymentsPageClient() {
  const [activeTab, setActiveTab] = React.useState<
    "deployment" | "training" | "aftersales"
  >("deployment");

  const [searchQuery, setSearchQuery] = React.useState<string>("");

  // State Accordion per produk (urutan ke-1 'Self Loading Mixer' default terbuka, produk lainnya default tertutup)
  const [openAccordions, setOpenAccordions] = React.useState<
    Record<string, boolean>
  >({
    "Self Loading Mixer": true,
    "Concrete Mixer with Pump": false,
    "Backhoe Loader": false,
    "Rough Terrain Forklift 4x4": false,
  });

  const toggleAccordion = (category: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const cleanPhone = companyData.whatsapp.replace(/\D/g, "");

  // Kelompokkan proyek per kategori produk
  const productsGrouping = React.useMemo(() => {
    const groups: {
      category: DeploymentCategory;
      name: string;
      slug: string;
      tagline: string;
      image: string;
      projects: DeploymentProject[];
    }[] = [
      {
        category: "Self Loading Mixer",
        name: "Self Loading Concrete Mixer (3.5 m³ & 4.0 m³)",
        slug: "self-loading-mixer-3-5",
        tagline:
          "Mobile batching plant mandiri 4x4 untuk pengecoran jalan, gedung, jembatan, dan area terpencil.",
        image:
          "/images/Content/7. After Sales/1. Training/Self Loading Mixer/Self Loading Mixer 10.jpeg",
        projects: deploymentsData.filter(
          (d) => d.category === "Self Loading Mixer"
        ),
      },
      {
        category: "Concrete Mixer with Pump",
        name: "Concrete Mixer with Pump (DMP-50)",
        slug: "concrete-mixer-with-pump",
        tagline:
          "Mesin pengolah beton terintegrasi pompa diesel bertekanan tinggi hingga 200m mendatar / 50m vertikal.",
        image:
          "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/Concrete Mixer with Pump 1.jpeg",
        projects: deploymentsData.filter(
          (d) => d.category === "Concrete Mixer with Pump"
        ),
      },
      {
        category: "Backhoe Loader",
        name: "Backhoe Loader Multifungsi (DBL3E)",
        slug: "backhoe-loader",
        tagline:
          "Alat berat serbaguna kombinasi Wheel Loader (1 m³), Excavator (0.3 m³), dan Bulldozer.",
        image:
          "/images/Content/7. After Sales/1. Training/Backhoe Loader/Backhoe Loader 1.jpg",
        projects: deploymentsData.filter((d) => d.category === "Backhoe Loader"),
      },
      {
        category: "Rough Terrain Forklift 4x4",
        name: "Rough Terrain Forklift 4x4 (HRTF-35)",
        slug: "rough-terrain-forklift-4x4",
        tagline:
          "Forklift segala medan 3.5 ton berpenggerak 4WD untuk pergudangan ekstrem dan pabrik berat.",
        image:
          "/images/Content/7. After Sales/1. Training/Forklift/Forklift.jpeg",
        projects: deploymentsData.filter(
          (d) => d.category === "Rough Terrain Forklift 4x4"
        ),
      },
    ];

    return groups;
  }, []);

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
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li className="font-semibold text-foreground" aria-current="page">
            Deployment, Training &amp; After Sales
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-4xl space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold text-primary">
          <HardHat className="h-3.5 w-3.5" />
          <span>Komitmen Total: Operasional, Edukasi &amp; Purna Jual</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
          Sebaran Proyek, Training &amp; After Sales
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Daya Maestro Wellindo tidak hanya menyediakan unit alat berat berkualitas
          tinggi, tetapi juga mendampingi setiap mitra secara menyeluruh: mulai
          dari pengiriman unit ke medan proyek (Deployment), pelatihan operator di
          lapangan (Training), hingga jaminan ketersediaan suku cadang resmi dan
          teknisi servis (After Sales).
        </p>
      </header>

      {/* Metric Counter Banner with Smooth CountUp Animation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-muted/40 border">
        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-extrabold text-primary">
            <CountUp value={70} suffix="+" />
          </div>
          <div className="text-xs sm:text-sm font-semibold text-foreground">
            Titik Proyek Nyata
          </div>
          <div className="text-xs text-muted-foreground">
            Terverifikasi di seluruh Indonesia
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-extrabold text-foreground">
            <CountUp value={25} suffix="+" />
          </div>
          <div className="text-xs sm:text-sm font-semibold text-foreground">
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
          <div className="text-xs sm:text-sm font-semibold text-foreground">
            Lini Alat Berat DMW
          </div>
          <div className="text-xs text-muted-foreground">
            Mixer, Pump, Forklift, Backhoe
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 dark:text-emerald-400">
            <CountUp value={100} suffix="%" />
          </div>
          <div className="text-xs sm:text-sm font-semibold text-foreground">
            Dukungan Lapangan
          </div>
          <div className="text-xs text-muted-foreground">
            Garansi 1 Tahun &amp; Teknisi Onsite
          </div>
        </div>
      </div>

      {/* Main 3 Pillars Navigation Tabs */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 p-2 rounded-2xl bg-muted/50 border">
        <button
          type="button"
          suppressHydrationWarning
          onClick={() => setActiveTab("deployment")}
          className={`w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "deployment"
              ? "bg-background text-primary shadow-sm border"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Truck className="h-4 w-4" />
          <span>1. Sebaran Proyek &amp; Deployment</span>
        </button>

        <button
          type="button"
          suppressHydrationWarning
          onClick={() => setActiveTab("training")}
          className={`w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "training"
              ? "bg-background text-primary shadow-sm border"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <GraduationCap className="h-4 w-4" />
          <span>2. Pelatihan Operator (Training)</span>
        </button>

        <button
          type="button"
          suppressHydrationWarning
          onClick={() => setActiveTab("aftersales")}
          className={`w-full sm:w-auto flex-1 flex items-center justify-center gap-2.5 py-3 px-5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
            activeTab === "aftersales"
              ? "bg-background text-primary shadow-sm border"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Wrench className="h-4 w-4" />
          <span>3. Layanan Purna Jual (After Sales)</span>
        </button>
      </div>

      {/* TAB CONTENT 1: SEBARAN PROYEK & DEPLOYMENT (Organized by Product Description as requested) */}
      {activeTab === "deployment" && (
        <section className="space-y-12" aria-label="Sebaran Proyek per Produk">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Rekam Jejak Deployment Berdasarkan Lini Produk
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base">
              Setiap lini produk alat berat Daya Maestro Wellindo memiliki riwayat
              operasional nyata di lapangan. Berikut rincian titik proyek, lokasi,
              dan sektor industri untuk masing-masing unit:
            </p>
          </div>

          {/* Quick Search within Deployment */}
          <div className="relative max-w-xl">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              suppressHydrationWarning
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari kota, provinsi, atau proyek (cth: Penajam, Bali, Freeport, Tol)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          {/* 4 Dedicated Product Deployment Cards */}
          <div className="space-y-10">
            {productsGrouping.map((group) => {
              const q = searchQuery.toLowerCase().trim();
              const filteredProjects = group.projects.filter(
                (p) =>
                  !q ||
                  p.title.toLowerCase().includes(q) ||
                  p.location.toLowerCase().includes(q) ||
                  p.sector.toLowerCase().includes(q)
              );

              if (filteredProjects.length === 0 && q) {
                return null;
              }

              const isOpen =
                searchQuery.trim().length > 0 ? true : !!openAccordions[group.category];

              return (
                <div
                  key={group.category}
                  className="rounded-3xl border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                >
                  {/* Product Header Bar */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6 sm:p-8 bg-muted/30 border-b">
                    {/* Visual Thumbnail */}
                    <div className="lg:col-span-4 relative h-48 sm:h-56 rounded-2xl overflow-hidden bg-muted">
                      <Image
                        src={group.image}
                        alt={group.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 33vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold flex items-center justify-between">
                        <span>{group.category}</span>
                        <span className="bg-primary/90 px-2 py-0.5 rounded-full text-[10px] text-white">
                          {group.projects.length} Proyek Terdaftar
                        </span>
                      </div>
                    </div>

                    {/* Product Summary */}
                    <div className="lg:col-span-8 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <span className="text-xs font-bold text-primary uppercase tracking-wider">
                          Lini Alat Berat
                        </span>
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                          {group.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {group.tagline}
                        </p>
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Button asChild size="sm" className="rounded-xl gap-1 text-xs">
                          <Link href={`/products/${group.slug}`}>
                            <span>Lihat Spesifikasi Teknis</span>
                            <ArrowUpRight className="h-3.5 w-3.5" />
                          </Link>
                        </Button>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="rounded-xl text-xs"
                        >
                          <a
                            href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                              `Halo ${companyData.name}, saya ingin konsultasi kebutuhan unit ${group.name} untuk proyek saya.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="h-3.5 w-3.5 mr-1 text-emerald-600" />
                            <span>Konsultasi Unit</span>
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* List of Deployment Projects inside the Product Card with Accordion */}
                  <div className="p-6 sm:p-8 space-y-4">
                    {/* Accordion Trigger Bar */}
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={() => toggleAccordion(group.category)}
                      className="w-full flex items-center justify-between text-left p-4 sm:p-5 rounded-2xl bg-muted/40 hover:bg-muted/70 transition-colors border group/acc focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                          <MapPin className="h-4 w-4" />
                        </div>
                        <div>
                          <div className="text-sm sm:text-base font-bold text-foreground group-hover/acc:text-primary transition-colors flex items-center gap-2">
                            <span>Daftar Titik Proyek ({filteredProjects.length} Lokasi)</span>
                            <span
                              className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border hidden sm:inline-block ${
                                isOpen
                                  ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                                  : "bg-muted text-muted-foreground border-border"
                              }`}
                            >
                              {isOpen ? "Terbuka" : "Klik untuk membuka"}
                            </span>
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {isOpen
                              ? "Klik untuk menutup daftar titik proyek unit ini"
                              : "Klik untuk melihat sebaran titik proyek & riwayat pengerjaan"}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-semibold text-primary hidden md:inline-block">
                          {isOpen ? "Tutup Daftar" : "Lihat Seluruh Lokasi"}
                        </span>
                        <div
                          className={`h-8 w-8 rounded-full border bg-background flex items-center justify-center transition-transform duration-300 ${
                            isOpen
                              ? "rotate-180 bg-primary/10 text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          <ChevronDown className="h-4 w-4" />
                        </div>
                      </div>
                    </button>

                    {/* Accordion Content Grid with Animation */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key={`acc-${group.category}`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="pt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {filteredProjects.map((p, pIdx) => (
                              <div
                                key={p.id}
                                className="p-3.5 rounded-xl border bg-background/80 hover:bg-muted/40 transition-colors space-y-1.5 flex flex-col justify-between"
                              >
                                <div className="space-y-1">
                                  <div className="flex items-start justify-between gap-2">
                                    <span className="text-xs font-bold text-foreground line-clamp-2">
                                      {p.title}
                                    </span>
                                    {p.featured && (
                                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-primary/10 text-primary shrink-0 uppercase">
                                        Highlight
                                      </span>
                                    )}
                                  </div>
                                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                                    <MapPin className="h-3 w-3 text-primary shrink-0" />
                                    <span className="truncate">{p.location}</span>
                                  </div>
                                </div>

                                <div className="pt-1.5 border-t border-dashed flex items-center justify-between text-[11px] text-muted-foreground">
                                  <span className="inline-flex items-center gap-1">
                                    {getSectorIcon(p.sector)}
                                    <span className="truncate">{p.sector}</span>
                                  </span>
                                  <span className="text-primary font-medium">#{pIdx + 1}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* TAB CONTENT 2: TRAINING (Pelatihan Operator & Commissioning) */}
      {activeTab === "training" && (
        <section className="space-y-12" aria-label="Pelatihan Operator dan Commissioning">
          <div className="space-y-3 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Program Pelatihan Operator &amp; Serah Terima Unit (Commissioning)
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Setiap pembelian alat berat Daya Maestro Wellindo didukung program
              pelatihan intensif langsung di lokasi proyek pelanggan. Teknisi senior
              kami membimbing operator hingga menguasai pengoperasian mandiri,
              kalibrasi digital, serta prosedur keselamatan kerja (K3).
            </p>
          </div>

          {/* 4 Pillars of Training */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border bg-card space-y-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                1
              </div>
              <h3 className="font-bold text-base text-foreground">
                Uji Fungsi &amp; Kalibrasi Digital
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Pemeriksaan menyeluruh katup hidrolik, tekanan pompa, sistem
                transmisi, serta kalibrasi monitor timbangan digital (weighing
                system) di kabin.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-card space-y-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                2
              </div>
              <h3 className="font-bold text-base text-foreground">
                Praktik Pengoperasian Lapangan
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Bimbingan satu per satu oleh teknisi DMW langsung di medan kerja nyata
                sampai operator terbiasa bermanuver dan mengaduk beton secara konsisten.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-card space-y-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                3
              </div>
              <h3 className="font-bold text-base text-foreground">
                Standar Keselamatan Kerja (K3)
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Edukasi batas beban angkut, batas kemiringan jalan ekstrem, prosedur
                darurat, dan penggunaan perlengkapan keselamatan operator secara benar.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-card space-y-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold">
                4
              </div>
              <h3 className="font-bold text-base text-foreground">
                Perawatan Preventif Harian
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Pelatihan SOP pengecekan oli mesin, pelumasan titik gemuk (greasing),
                pembersihan drum mixer setelah pengerjaan, dan penggantian filter.
              </p>
            </div>
          </div>

          {/* Photo Gallery Documentation of Field Training */}
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg sm:text-xl font-bold text-foreground">
                Dokumentasi Pelatihan Operator di Site Proyek
              </h3>
              <Link href="/gallery" className="text-xs text-primary font-bold hover:underline">
                Buka Galeri Lengkap &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted group">
                <Image
                  src="/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (1).jpeg"
                  alt="Pelatihan Operator Self Loading Mixer"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                  Pelatihan Operator Self Loading Mixer
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted group">
                <Image
                  src="/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/WhatsApp Image 2025-04-14 at 13.52.35.jpeg"
                  alt="Commissioning Concrete Mixer with Pump"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                  Commissioning &amp; Pompa Tekanan Beton
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted group">
                <Image
                  src="/images/Content/7. After Sales/1. Training/Backhoe Loader/WhatsApp Image 2025-04-24 at 15.29.19.jpeg"
                  alt="Uji Coba Lapangan Backhoe Loader"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                  Uji Coba Arm &amp; Bucket Backhoe Loader
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted group">
                <Image
                  src="/images/Content/7. After Sales/1. Training/Forklift/WhatsApp Image 2025-04-24 at 14.47.06.jpeg"
                  alt="Pelatihan Pengemudian Rough Terrain Forklift"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                  Pelatihan Manuver Forklift Segala Medan
                </div>
              </div>
            </div>
          </div>

          {/* Video Showcase Card */}
          <div className="rounded-3xl border bg-muted/30 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                <Video className="h-3.5 w-3.5" />
                <span>Dokumentasi Video Lapangan</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Lihat Demonstrasi Operasional &amp; Pelatihan
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl">
                Tonton rekaman teknisi resmi Daya Maestro Wellindo melakukan
                demonstrasi manuver dan pembekalan teknis kepada operator di lapangan.
              </p>
            </div>
            <Button asChild className="rounded-full px-6 py-2.5 font-bold shrink-0">
              <a
                href="https://youtu.be/IoISWQqdYUM?si=GIgzE-w10gknaNXO"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tonton Video Operasional
              </a>
            </Button>
          </div>
        </section>
      )}

      {/* TAB CONTENT 3: AFTER SALES & SUKU CADANG */}
      {activeTab === "aftersales" && (
        <section className="space-y-12" aria-label="Layanan Purna Jual dan Suku Cadang">
          <div className="space-y-3 max-w-3xl">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Layanan Purna Jual &amp; Ketersediaan Suku Cadang Asli
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Kelancaran proyek Anda adalah prioritas kami. Daya Maestro Wellindo
              menjamin ketersediaan suku cadang original yang selalu ready stock di
              gudang kami, didukung teknisi servis berpengalaman yang siap diberangkatkan
              langsung ke site proyek Anda di seluruh pelosok negeri.
            </p>
          </div>

          {/* 4 Guarantees */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl border bg-card space-y-3">
              <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-foreground">
                Garansi Resmi 1 Tahun
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Seluruh unit baru dilindungi garansi resmi pabrikan selama 1 tahun
                penuh untuk memastikan keandalan mekanis dan komponen utama.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-card space-y-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Warehouse className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-foreground">
                Spare Part Ready Stock
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Gudang suku cadang terpusat di Tangerang menjamin ketersediaan cepat
                pompa hidrolik, seal, filter, dan komponen aus kritis lainnya.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-card space-y-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Truck className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-foreground">
                Teknisi Siap Onsite
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Tim teknisi bersertifikat siap melakukan servis berkala, inspeksi
                mesin, atau penanganan kendala teknis langsung di lokasi kerja.
              </p>
            </div>

            <div className="p-6 rounded-2xl border bg-card space-y-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <Clock className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base text-foreground">
                Hotline Konsultasi Cepat
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                Dukungan teknis responsif melalui WhatsApp resmi untuk konsultasi
                cepat dan panduan penanganan awal operator kapan saja dibutuhkan.
              </p>
            </div>
          </div>

          {/* Photo Gallery of Warehouse & Spare Parts */}
          <div className="space-y-4 pt-4">
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              Dokumentasi Gudang &amp; Suku Cadang Original DMW
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted group">
                <Image
                  src="/images/Content/7. After Sales/2. Spare Part/sparepart.jpeg"
                  alt="Koleksi Suku Cadang Asli DMW"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                  Komponen &amp; Spare Part Siap Kirim
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted group">
                <Image
                  src="/images/Content/7. After Sales/2. Spare Part/WhatsApp Image 2025-01-23 at 17.55.50.jpeg"
                  alt="Gudang Penyimpanan Suku Cadang"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                  Rak Penyimpanan Terorganisir
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted group">
                <Image
                  src="/images/Content/7. After Sales/2. Spare Part/WhatsApp Image 2025-01-23 at 18.00.50.jpeg"
                  alt="Komponen Mesin dan Hidrolik"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                  Sistem Pompa &amp; Hidrolik OEM
                </div>
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted group">
                <Image
                  src="/images/Content/7. After Sales/2. Spare Part/WhatsApp Image 2025-01-23 at 18.06.02.jpeg"
                  alt="Inspeksi Komponen Suku Cadang"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                  Pemeriksaan Mutu Spare Part
                </div>
              </div>
            </div>
          </div>

          {/* Direct CTA to After Sales & Spare Parts WhatsApp */}
          <div className="rounded-3xl border bg-gradient-to-r from-primary/10 via-primary/5 to-background p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Butuh Suku Cadang atau Permintaan Kunjungan Teknisi?
              </h3>
              <p className="text-sm text-muted-foreground max-w-xl">
                Hubungi divisi Layanan Purna Jual &amp; Suku Cadang Daya Maestro Wellindo
                sekarang. Kami siap membantu kelancaran operasional unit Anda.
              </p>
            </div>

            <Button
              asChild
              className="rounded-full px-8 py-3 font-bold gap-2 shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
            >
              <a
                href={`https://wa.me/${cleanPhone}?text=${encodeURIComponent(
                  `Halo Tim After Sales ${companyData.name}, saya ingin konsultasi kebutuhan suku cadang dan servis unit alat berat.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Hubungi Layanan Purna Jual</span>
              </a>
            </Button>
          </div>
        </section>
      )}
    </div>
  );
}
