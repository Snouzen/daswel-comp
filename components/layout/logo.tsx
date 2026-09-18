import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";

interface LogoProps {
  className?: string;
  showTagline?: boolean;
}

export function Logo({ className = "", showTagline = false }: LogoProps) {
  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg ${className}`}
      aria-label={`${companyData.name} — Kembali ke Beranda`}
    >
      <div className="relative flex items-center py-0.5">
        <Image
          src="/images/logo.png"
          alt={`${companyData.name} Logo`}
          width={160}
          height={36}
          priority
          className="h-7 sm:h-8 w-auto object-contain dark:hidden"
        />
        <Image
          src="/images/logo-white.png"
          alt={`${companyData.name} Logo`}
          width={160}
          height={36}
          priority
          className="h-7 sm:h-8 w-auto object-contain hidden dark:block"
        />
      </div>
      {showTagline && (
        <span className="text-[11px] text-muted-foreground font-medium tracking-wide hidden sm:inline-block border-l pl-3">
          {companyData.tagline}
        </span>
      )}
    </Link>
  );
}
