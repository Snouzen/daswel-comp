"use client";

import { motion } from "framer-motion";
import { companyData } from "@/data/company";
import { MessageSquare } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <aside aria-label="WhatsApp Floating Action Button" className="fixed bottom-6 right-6 z-50">
      <motion.a
        href={companyData.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="group flex items-center gap-2.5 rounded-full bg-green-600 px-4 py-3 text-white shadow-xl hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Chat WhatsApp dengan Customer Support Daswel Company"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="h-5 w-5" />
        <span className="hidden sm:inline font-semibold text-xs tracking-wide">
          Chat WhatsApp
        </span>
      </motion.a>
    </aside>
  );
}
