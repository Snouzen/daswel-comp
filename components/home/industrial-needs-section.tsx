"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Waypoints,
  Route,
  Building2,
  Trees,
  Dam,
  Layers,
  ChevronRight,
} from "lucide-react";

interface IndustrialProduct {
  name: string;
  category: string;
  slug: string;
  image: string;
}

interface IndustrialProject {
  id: string;
  title: string;
  categoryTag: string;
  icon: typeof Waypoints;
  description: string;
  products: IndustrialProduct[];
  colSpan?: string;
}

const industrialProjects: IndustrialProject[] = [
  {
    id: "proyek-jembatan",
    title: "Proyek Jembatan",
    categoryTag: "Infrastruktur Jembatan",
    icon: Waypoints,
    description:
      "Self Loading Mixer, mobile batching plant yang mengintegrasikan 3 alat pembuatan beton (Batching Plant, Truck Mixer, dan Wheel Loader), sangat cocok untuk Proyek Jembatan. Proses pembuatan beton Jembatan yang meliputi penempatan, pencampuran, pengangkutan, dan pembuangan beton dapat dilakukan dengan 1 alat ini.",
    products: [
      {
        name: "Self Loading Mixer 3,5",
        category: "Mobile Batching Plant",
        slug: "self-loading-mixer-3-5",
        image:
          "/images/Content/3. Product/Product Images/Self Loading Mixer 3.5/Self Loading Mixer 3 (1).jpeg",
      },
      {
        name: "Self Loading Mixer 4",
        category: "Mobile Batching Plant",
        slug: "self-loading-mixer-4",
        image: "/images/Content/3. Product/Product Images/self-loading 4-3.jpeg",
      },
    ],
  },
  {
    id: "proyek-jalan",
    title: "Proyek Jalan",
    categoryTag: "Jalan Pedesaan & Perkotaan",
    icon: Route,
    description:
      "Self Loading Mixer atau mixer beton muat sendiri dapat digunakan dalam proyek pembangunan jalan di pedesaan yang sempit karena mobilitasnya yang tinggi dan desainnya yang ramping. Alat ini sangat Fleksibel karena dapat digunakan di berbagai lokasi kerja, termasuk area yang sulit dijangkau oleh alat konvensional. Mesin ini dapat memproduksi beton, membongkar material, dan mengangkut beton ke lokasi yang dibutuhkan. Fungsi tangki pengaduk yang berputar 270° sangat praktis, dan dapat membongkar beton pada ketinggian 1 meter, yang praktis dan efisien, sehingga disukai oleh sebagian besar proyek skala kecil dan menengah.",
    products: [
      {
        name: "Self Loading Mixer 4",
        category: "Mobile Batching Plant (Rotasi 270°)",
        slug: "self-loading-mixer-4",
        image: "/images/Content/3. Product/Product Images/self-loading 4-3.jpeg",
      },
      {
        name: "Self Loading Mixer 3,5",
        category: "Mobile Batching Plant",
        slug: "self-loading-mixer-3-5",
        image:
          "/images/Content/3. Product/Product Images/Self Loading Mixer 3.5/Self Loading Mixer 3 (1).jpeg",
      },
    ],
  },
  {
    id: "proyek-gedung",
    title: "Proyek Gedung",
    categoryTag: "Konstruksi Gedung Bertingkat",
    icon: Building2,
    description:
      "Diesel Concrete Mixer with Pump sangat cocok digunakan dalam pembuatan Gedung. Alat ini sangat praktis dan efisien, karena alat ini sudah 3 in 1 yaitu Batching Plant, Mixer plus Pompa. Kapasitas produksi 20-30 kubik per jam, Jangkauan pompa 30m Vertical 300m Horizontal. Untuk proyek gedung bisa sampai 10 lantai.",
    products: [
      {
        name: "Diesel Concrete Mixer with Pump",
        category: "Pompa Vertikal 30m & Horisontal 300m",
        slug: "concrete-mixer-with-pump",
        image:
          "/images/Content/3. Product/Product Images/concrete mixer-2.jpeg",
      },
    ],
  },
  {
    id: "proyek-kebun-sawit",
    title: "Proyek Kebun Sawit",
    categoryTag: "Perkebunan & Drainase Lahan",
    icon: Trees,
    description:
      "Perkebunan sawit akan membutuhkan parit berukuran cukup besar. Parit ini akan membantu mengalirkan air di area perkebunan, terutama ketika musim hujan sudah tiba. Jika area perkebunan kelapa sawit cukup luas, maka parit yang dibuat juga akan semakin panjang. Penggalian parit seperti ini tentu akan sangat sulit jika dilakukan dengan menggunakan tenaga manusia. Namun jika dibantu dengan Backhoe Loader akan menjadi lebih cepat dan efisien, karena Backhoe Loader sudah menggabungkan fungsi Wheel Loader dan Excavator menjadi satu.",
    products: [
      {
        name: "Backhoe Loader DBL3E",
        category: "Kombinasi Wheel Loader & Excavator",
        slug: "backhoe-loader",
        image:
          "/images/Content/3. Product/Product Images/Backhoe Loader/Backhoe Loader (1).jpeg",
      },
    ],
  },
  {
    id: "proyek-bendungan",
    title: "Proyek Bendungan",
    categoryTag: "Mega Proyek Irigasi & Pengairan",
    icon: Dam,
    colSpan: "lg:col-span-2",
    description:
      "Self Loading Mixer dan Concrete Mixer with Pump sangat cocok digunakan dalam proyek konstruksi bendungan karena dapat memproduksi beton segar di tempat proyek. Dengan adanya Mobile Batching Plant, Mixer, dan Pompa ditempat dapat mengurangi biaya transportasi beton dan tenaga kerja.",
    products: [
      {
        name: "Self Loading Mixer 4",
        category: "Mobile Batching On-Site",
        slug: "self-loading-mixer-4",
        image: "/images/Content/3. Product/Product Images/self-loading 4-3.jpeg",
      },
      {
        name: "Diesel Concrete Mixer with Pump",
        category: "Penyaluran Beton Tekanan Tinggi",
        slug: "concrete-mixer-with-pump",
        image:
          "/images/Content/3. Product/Product Images/concrete mixer-2.jpeg",
      },
    ],
  },
];

export function IndustrialNeedsSection() {
  return (
    <section
      className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      aria-labelledby="industrial-needs-heading"
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Layers className="h-3.5 w-3.5" />
            <span>Solusi Terapan di Lapangan</span>
          </div>
          <h2
            id="industrial-needs-heading"
            className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
          >
            Your Industrial Needs
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl">
            Solusi armada alat berat dan mobile batching plant teruji yang siap
            menjawab tantangan efisiensi di berbagai medan proyek infrastruktur
            dan industri.
          </p>
        </div>
      </div>

      {/* Grid Bento Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {industrialProjects.map((project, idx) => {
          const Icon = project.icon;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`rounded-2xl border bg-card/60 p-6 sm:p-8 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between hover:border-primary/40 group ${
                project.colSpan ? project.colSpan : ""
              }`}
            >
              {/* Card Top: Header & Description */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-105 transition-transform">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                        {project.categoryTag}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Card Bottom: Featured Products Link */}
              <div className="pt-6 mt-6 border-t border-border/70 space-y-2.5">
                <div className="text-xs font-semibold text-foreground/80 flex items-center justify-between">
                  <span>Produk Terkait :</span>
                  <span className="text-[11px] text-muted-foreground font-normal">
                    Klik untuk spesifikasi lengkap
                  </span>
                </div>

                <div
                  className={`grid gap-3 ${
                    project.products.length > 1
                      ? "grid-cols-1 sm:grid-cols-2"
                      : "grid-cols-1"
                  }`}
                >
                  {project.products.map((prod) => (
                    <Link
                      key={prod.slug}
                      href={`/products/${prod.slug}`}
                      className="group/item flex items-center gap-3.5 p-3 rounded-xl border border-border/80 bg-background/80 hover:bg-background hover:border-primary/50 transition-all shadow-2xs hover:shadow-xs"
                    >
                      <div className="relative h-14 w-16 rounded-lg overflow-hidden shrink-0 bg-muted border border-border/50">
                        <Image
                          src={prod.image}
                          alt={prod.name}
                          fill
                          sizes="64px"
                          className="object-cover group-hover/item:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-bold text-foreground group-hover/item:text-primary transition-colors truncate">
                          {prod.name}
                        </h4>
                        <p className="text-xs text-muted-foreground truncate">
                          {prod.category}
                        </p>
                      </div>
                      <div className="h-7 w-7 rounded-full bg-muted/60 group-hover/item:bg-primary group-hover/item:text-primary-foreground flex items-center justify-center text-muted-foreground shrink-0 transition-colors">
                        <ChevronRight className="h-4 w-4" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
