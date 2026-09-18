import Link from "next/link";
import { companyData } from "@/data/company";
import { footerNavItems } from "@/data/navigation";
import { MapPin, Phone, Mail, Clock, Building2, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/30 text-muted-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Identitas Perusahaan */}
          <div className="space-y-4 md:col-span-2">
            <Link
              href="/"
              className="flex items-center space-x-2.5 font-bold text-xl tracking-tight text-primary"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                <Building2 className="h-4 w-4" />
              </div>
              <span className="text-foreground">{companyData.name}</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-md">
              {companyData.description}
            </p>
            <div className="pt-1">
              <Button asChild variant="outline" size="sm" className="gap-2">
                <a href={companyData.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-3.5 w-3.5 text-primary" />
                  <span>Chat WhatsApp Langsung</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Tautan Cepat */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigasi
            </h3>
            <ul className="space-y-2 text-sm">
              {footerNavItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak & Alamat */}
          <div className="space-y-3 text-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Kontak Resmi
            </h3>
            <div className="space-y-2.5">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>{companyData.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <span>{companyData.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <span>{companyData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 shrink-0 text-primary" />
                <span>{companyData.operatingHours}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-3">
          <p>© {currentYear} {companyData.name}. All rights reserved.</p>
          <p>Website Company Profile Statis Next.js App Router</p>
        </div>
      </div>
    </footer>
  );
}
