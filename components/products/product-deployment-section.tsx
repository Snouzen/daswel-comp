"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/data/products";
import { companyData } from "@/data/company";
import { deploymentsData, type DeploymentProject } from "@/data/deployments";
import {
  MapPin,
  HardHat,
  Building,
  Fuel,
  Palmtree,
  Factory,
  MessageCircle,
  Camera,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductDeploymentSectionProps {
  product: Product;
}

export function ProductDeploymentSection({
  product,
}: ProductDeploymentSectionProps) {
  // Ambil data deployment yang relevan dengan slug produk ini
  const matchingDeployments = React.useMemo(() => {
    return deploymentsData.filter((d) => d.productSlugs.includes(product.slug));
  }, [product.slug]);

  if (matchingDeployments.length === 0) {
    return null;
  }

  // Tampilkan maksimal 4 proyek unggulan di kartu, sisanya dalam daftar ringkas
  const featuredCards = matchingDeployments.slice(0, 4);

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

  const cleanPhone = companyData.whatsapp.replace(/\D/g, "");
  const waMessage = encodeURIComponent(
    `Halo ${companyData.name}, saya tertarik untuk konsultasi deployment unit ${product.name} untuk kebutuhan proyek saya.`
  );
  const waUrl = `https://wa.me/${cleanPhone}?text=${waMessage}`;

  return (
    <section
      className="rounded-3xl border bg-card/60 p-6 sm:p-10 space-y-8 shadow-sm"
      aria-label={`Sebaran Proyek dan Deployment ${product.name}`}
    >
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
            <HardHat className="h-3.5 w-3.5" />
            <span>Rekam Jejak Operasional &amp; Uji Lapangan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Sebaran Proyek &amp; Deployment {product.name}
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
            Unit {product.name} telah terbukti beroperasi di{" "}
            <span className="font-semibold text-foreground">
              {matchingDeployments.length}+ titik proyek riil
            </span>{" "}
            di berbagai sektor strategis Indonesia hingga Timor Leste.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <span className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-primary/10 text-primary border border-primary/20">
            Teruji di {matchingDeployments.length}+ Lokasi
          </span>
          <Button asChild variant="outline" size="sm" className="rounded-xl gap-1.5 text-xs">
            <Link href="/gallery">
              <Camera className="h-3.5 w-3.5" />
              <span>Buka Galeri</span>
            </Link>
          </Button>
        </div>
      </div>

      {/* Featured Deployment Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {featuredCards.map((dep) => (
          <div
            key={dep.id}
            className="flex flex-col rounded-2xl border bg-background overflow-hidden shadow-xs hover:shadow-md transition-shadow group"
          >
            {/* Field Photo */}
            <div className="relative aspect-[4/3] w-full bg-muted overflow-hidden">
              <Image
                src={dep.image}
                alt={`${dep.title} - ${dep.location}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              
              <div className="absolute top-2.5 left-2.5">
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/60 text-white backdrop-blur-xs border border-white/10">
                  {getSectorIcon(dep.sector)}
                  <span>{dep.sector}</span>
                </span>
              </div>

              <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white text-xs font-medium flex items-center gap-1.5 truncate">
                <MapPin className="h-3.5 w-3.5 text-primary shrink-0" />
                <span className="truncate">{dep.location}</span>
              </div>
            </div>

            {/* Description */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-2">
              <h4 className="text-xs sm:text-sm font-bold text-foreground line-clamp-2">
                {dep.title}
              </h4>
              <div className="text-[11px] text-muted-foreground flex items-center gap-1">
                <CheckCircle2 className="h-3 w-3 text-emerald-600 shrink-0" />
                <span className="truncate">Unit: {dep.productName}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pill Tags of Project Locations */}
      <div className="space-y-3 pt-2">
        <div className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          Titik Wilayah Proyek Lainnya yang Menggunakan {product.name}:
        </div>
        <div className="flex flex-wrap gap-2">
          {matchingDeployments.map((d) => (
            <span
              key={d.id}
              className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-lg bg-muted/60 border text-foreground/80 hover:text-foreground transition-colors"
            >
              <MapPin className="h-3 w-3 text-primary shrink-0" />
              <span>
                {d.location}: <em>{d.title}</em>
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* CTA Box for similar project consulting */}
      <div className="rounded-2xl border bg-primary/5 p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <h4 className="text-base font-bold text-foreground">
            Punya Kebutuhan Proyek Serupa dengan Unit {product.name}?
          </h4>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Diskusikan spesifikasi medan kerja dan skema pengiriman unit bersama teknisi resmi {companyData.name}.
          </p>
        </div>
        <Button
          asChild
          className="rounded-full px-6 py-2.5 text-xs sm:text-sm font-bold gap-2 shrink-0 bg-emerald-600 hover:bg-emerald-700 text-white shadow-md"
        >
          <a href={waUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-4 w-4" />
            <span>Konsultasi Proyek</span>
          </a>
        </Button>
      </div>
    </section>
  );
}
