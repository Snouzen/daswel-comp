"use client";

import { useState } from "react";
import { companyData } from "@/data/company";
import { quickInquiries } from "@/data/contact";
import { Button } from "@/components/ui/button";
import { MessageSquare, Send, CheckCircle2, User, Mail, Phone, Building, MessageCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    topic: quickInquiries[0].label,
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = `Halo ${companyData.name}, saya mengajukan pesan konsultasi melalui website:
- Nama: ${formData.name}
- Perusahaan: ${formData.company || "-"}
- Email: ${formData.email}
- Telepon: ${formData.phone}
- Topik: ${formData.topic}
- Pesan: ${formData.message}`;

    const cleanPhone = companyData.whatsapp.replace(/\D/g, "");
    const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(formattedMessage)}`;

    setIsSubmitted(true);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="rounded-3xl border bg-card p-6 sm:p-8 shadow-sm">
      <div className="space-y-2 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
          <MessageCircle className="h-6 w-6 text-primary" />
          Kirim Pesan & Konsultasi Langsung
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Isi formulir di bawah untuk langsung terhubung dengan tim representatif resmi {companyData.name} melalui WhatsApp.
        </p>
      </div>

      {isSubmitted ? (
        <div className="rounded-2xl bg-primary/10 border border-primary/20 p-6 text-center space-y-3">
          <CheckCircle2 className="h-10 w-10 text-primary mx-auto" />
          <h3 className="font-bold text-base text-foreground">
            Terima Kasih! Pesan Anda Sedang Diteruskan ke WhatsApp
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
            Jendela WhatsApp telah dibuka. Tim kami akan segera menanggapi konsultasi Anda pada jam kerja operasional.
          </p>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsSubmitted(false)}
            className="mt-2 text-xs"
          >
            Kirim Pesan Lain
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <User className="h-3.5 w-3.5 text-primary" />
                Nama Lengkap <span className="text-destructive">*</span>
              </label>
              <input
                id="name"
                required
                type="text"
                placeholder="cth. Budi Santoso"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="company" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <Building className="h-3.5 w-3.5 text-primary" />
                Nama Perusahaan / Instansi
              </label>
              <input
                id="company"
                type="text"
                placeholder="cth. PT Konstruksi Bangun Nusantara"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-primary" />
                Alamat Email <span className="text-destructive">*</span>
              </label>
              <input
                id="email"
                required
                type="email"
                placeholder="cth. budi@perusahaan.co.id"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="phone" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-primary" />
                Nomor Telepon / WhatsApp <span className="text-destructive">*</span>
              </label>
              <input
                id="phone"
                required
                type="tel"
                placeholder="cth. 08123456789"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="topic" className="text-xs font-semibold text-foreground">
              Topik Kebutuhan / Konsultasi
            </label>
            <select
              id="topic"
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              className="w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            >
              {quickInquiries.map((inquiry) => (
                <option key={inquiry.id} value={inquiry.label}>
                  {inquiry.label} - {inquiry.description}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-semibold text-foreground flex items-center gap-1.5">
              <MessageSquare className="h-3.5 w-3.5 text-primary" />
              Pesan / Keterangan Kebutuhan <span className="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={4}
              placeholder="Tuliskan spesifikasi unit yang dicari, estimasi waktu proyek, atau detail pertanyaan Anda..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full rounded-xl border bg-background px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
            />
          </div>

          <Button type="submit" size="lg" className="w-full gap-2 font-semibold shadow-md py-6">
            <Send className="h-4 w-4" />
            Kirim Konsultasi via WhatsApp
          </Button>
        </form>
      )}
    </div>
  );
}
