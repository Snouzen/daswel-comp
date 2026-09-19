import { companyData } from "@/data/company";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ProductWhatsAppButtonProps {
  productName: string;
  className?: string;
  variant?: "default" | "secondary" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
  label?: string;
}

export function createProductWhatsAppUrl(productName: string): string {
  const text = `Halo ${companyData.name}, saya tertarik dengan ${productName} dan ingin menanyakan ketersediaan unit serta surat penawaran harga resmi. Mohon informasinya. Terima kasih.`;
  return `https://wa.me/6287885902289?text=${encodeURIComponent(text)}`;
}

export function ProductWhatsAppButton({
  productName,
  className,
  variant = "outline",
  size = "default",
  label = "Tanya via WhatsApp",
}: ProductWhatsAppButtonProps) {
  const href = createProductWhatsAppUrl(productName);

  return (
    <Button asChild variant={variant} size={size} className={cn("gap-2", className)}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${label} untuk ${productName}`}
      >
        <MessageSquare className="h-4 w-4 text-emerald-600 shrink-0" />
        <span>{label}</span>
      </a>
    </Button>
  );
}
