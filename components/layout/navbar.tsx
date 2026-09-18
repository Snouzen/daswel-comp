"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyData } from "@/data/company";
import { mainNavItems } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageSquare, Building2 } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo -> Home */}
        <Link
          href="/"
          className="flex items-center space-x-2.5 font-bold text-xl tracking-tight text-primary hover:opacity-90 transition-opacity"
          aria-label={`${companyData.name} - Home`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            <Building2 className="h-5 w-5" />
          </div>
          <span className="text-foreground">{companyData.name}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {mainNavItems.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-primary ${
                  isActive ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild size="sm" className="gap-2">
            <a href={companyData.whatsappUrl} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp</span>
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-muted focus:outline-none"
          aria-label={isOpen ? "Tutup Menu" : "Buka Menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden border-b bg-background px-4 pt-2 pb-5 space-y-3">
          <nav className="flex flex-col space-y-1">
            {mainNavItems.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 px-3 rounded-md text-base transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 border-t">
            <Button asChild className="w-full gap-2">
              <a href={companyData.whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageSquare className="h-4 w-4" />
                <span>Hubungi via WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
