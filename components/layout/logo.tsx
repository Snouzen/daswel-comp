import Link from "next/link";
import { companyData } from "@/data/company";
import { Building2 } from "lucide-react";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className = "", showTagline = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-2.5 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg ${className}`}
      aria-label={`${companyData.name} — Kembali ke Beranda`}
    >
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm group-hover:scale-105 transition-transform">
        <Building2 className="h-5 w-5" />
      </div>
      <div className="flex flex-col">
        <span className="font-extrabold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
          {companyData.name}
        </span>
        {showTagline && (
          <span className="text-[10px] text-muted-foreground font-medium -mt-1 tracking-wide">
            {companyData.tagline}
          </span>
        )}
      </div>
    </Link>
  );
}
