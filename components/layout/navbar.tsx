"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { companyData } from "@/data/company";
import { mainNavItems } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";
import { Menu, X, MessageSquare, Phone, MapPin } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close mobile menu on Escape key press
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo -> Home */}
        <Logo />

        {/* Desktop Navigation */}
        <nav aria-label="Navigasi Utama" className="hidden md:flex items-center">
          <ul className="flex items-center space-x-1 text-sm font-medium">
            {mainNavItems.map((link) => {
              const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative px-3.5 py-1.5 rounded-full text-sm transition-all inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
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
                </li>
              );
            })}
          </ul>
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
          className="md:hidden inline-flex items-center justify-center p-2 rounded-xl text-foreground hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition-colors"
          aria-label={isOpen ? "Tutup Menu Navigasi" : "Buka Menu Navigasi"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation-menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Menu className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-b bg-background/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-4"
          >
            <nav aria-label="Navigasi Menu Mobile">
              <ul className="flex flex-col space-y-1.5">
                {mainNavItems.map((link) => {
                  const isActive = pathname === link.href || pathname?.startsWith(link.href + "/");
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        aria-current={isActive ? "page" : undefined}
                        className={`py-3 px-4 rounded-xl text-base transition-colors flex items-center justify-between focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${
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
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Quick Mobile Info & WhatsApp CTA */}
            <div className="pt-3 border-t space-y-3">
              <div className="text-xs text-muted-foreground space-y-1 px-1">
                <div className="flex items-center gap-2">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                  <span>{companyData.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                  <span className="line-clamp-1">{companyData.address}</span>
                </div>
              </div>

              <Button asChild className="w-full gap-2 py-5 shadow-sm">
                <a href={companyData.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="h-4 w-4" />
                  <span>Chat WhatsApp Langsung</span>
                </a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
