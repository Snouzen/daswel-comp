import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
  variant?: "navbar" | "footer" | "icon" | "full";
}

export function Logo({
  className = "",
  showTagline = false,
  variant = "navbar",
}: LogoProps) {
  const isFooter = variant === "footer" || variant === "full";
  const logoSrc = isFooter ? "/images/full-logo.png" : "/images/icon-logo.png";
  const logoAlt = isFooter
    ? "PT. Daya Maestro Wellindo Logo"
    : `${companyData.name} DMW Logo`;

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg ${className}`}
      aria-label={`${companyData.name} — Kembali ke Beranda`}
    >
      <div className="relative flex items-center py-0.5">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={isFooter ? 240 : 180}
          height={isFooter ? 190 : 80}
          priority
          className={
            isFooter
              ? "h-16 sm:h-20 w-auto object-contain"
              : "h-8 sm:h-9 w-auto object-contain"
          }
        />
      </div>
      {showTagline && !isFooter && (
        <span className="text-[11px] text-muted-foreground font-medium tracking-wide hidden sm:inline-block border-l pl-3">
          {companyData.tagline}
        </span>
      )}
    </Link>
  );
}
