"use client";

import { useState } from "react";
import { companyData } from "@/data/company";
import { Building2, ExternalLink, MapPin, Copy, Check, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CompanyMap() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(companyData.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(`${companyData.name} ${companyData.address}`);

  return (
    <section id="map-section" aria-label="Peta Lokasi dan Kantor Perusahaan" className="space-y-6 pt-2">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
            <Navigation className="h-3.5 w-3.5" />
            <span>Fasilitas & Titik Temu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground flex items-center gap-2.5">
            <Building2 className="h-6 w-6 text-primary shrink-0" />
            Peta Lokasi Kantor & Workshop
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Kunjungi fasilitas perakitan, inspeksi unit, dan kantor representatif {companyData.name} di lokasi strategis berikut:
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handleCopyAddress}
            className="gap-1.5 text-xs"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-600" />
                <span className="text-green-600 font-semibold">Tersalin!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Salin Alamat</span>
              </>
            )}
          </Button>

          <Button asChild size="sm" className="gap-1.5 text-xs">
            <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
              <span>Buka di Google Maps</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Map Frame Container with Information Float */}
      <div className="relative overflow-hidden rounded-3xl border shadow-lg bg-card aspect-[16/10] sm:aspect-[21/9] w-full">
        <iframe
          src={companyData.mapEmbedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Peta Lokasi Resmi ${companyData.name}`}
          className="w-full h-full grayscale-[25%] contrast-[105%]"
        />

        {/* Floating Quick Address Card (on Desktop) */}
        <div className="hidden lg:block absolute bottom-6 left-6 max-w-sm rounded-2xl bg-card/95 backdrop-blur-md p-4 shadow-xl border text-card-foreground space-y-2">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary/10 text-primary">
              <MapPin className="h-4 w-4" />
            </div>
            <h3 className="font-bold text-xs text-foreground">
              {companyData.name} - Kantor Pusat
            </h3>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            {companyData.address}
          </p>
          <div className="text-[11px] text-muted-foreground pt-1 border-t flex items-center justify-between">
            <span>Jam: 08.00 - 17.00 WIB</span>
            <span className="text-primary font-medium">{companyData.phone}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
