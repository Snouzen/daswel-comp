"use client";

import { motion } from "framer-motion";
import { companyData } from "@/data/company";
import { MessageCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface WhatsAppClickButtonProps {
  message?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "outline" | "solid";
  showPulse?: boolean;
  children?: React.ReactNode;
  iconOnly?: boolean;
}

export function WhatsAppClickButton({
  message = "Halo Daswel Company, saya ingin berkonsultasi mengenai unit dan layanan Anda.",
  className,
  size = "md",
  variant = "default",
  showPulse = true,
  children,
  iconOnly = false,
}: WhatsAppClickButtonProps) {
  const cleanNumber = companyData.whatsapp.replace(/\D/g, "");
  const waUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;

  const sizeClasses = {
    sm: "px-3 py-1.5 text-xs gap-1.5 rounded-full",
    md: "px-5 py-2.5 text-sm gap-2 rounded-xl",
    lg: "px-6 py-3.5 text-base gap-2.5 rounded-2xl",
  };

  const variantClasses = {
    default:
      "bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md hover:shadow-lg transition-all",
    solid:
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-all",
    outline:
      "border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all bg-card",
  };

  return (
    <motion.a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        "inline-flex items-center justify-center font-semibold cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
      aria-label="Mulai percakapan langsung di WhatsApp Daswel Company"
    >
      {showPulse && (
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
      )}

      <MessageCircle className={cn(size === "sm" ? "h-4 w-4" : size === "lg" ? "h-5 w-5" : "h-4 w-4")} />

      {!iconOnly && (
        <span>{children || "Chat WhatsApp Sekali Klik"}</span>
      )}
    </motion.a>
  );
}
