"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { companyData } from "@/data/company";
import { mainNavItems } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { Menu, X, MessageSquare } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo -> Home */}
        <Logo />

        {/* Desktop Navigation */}
        <nav aria-label="Navigasi Utama" className="hidden md:flex items-center space-x-2 text-sm font-medium">
          {mainNavItems.map((link) => {
            const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative px-3.5 py-1.5 rounded-full text-sm transition-all ${
                  isActive
                    ? "bg-primary/10 text-primary font-semibold shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="sr-only"> (halaman saat ini)</span>
                )}
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
          <nav aria-label="Navigasi Menu Mobile" className="flex flex-col space-y-1.5">
            {mainNavItems.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`py-2.5 px-3.5 rounded-xl text-base transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold border-l-4 border-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  )}
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
