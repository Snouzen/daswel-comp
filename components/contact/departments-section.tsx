"use client";

import { motion } from "framer-motion";
import { companyData } from "@/data/company";
import { contactDepartments, quickInquiries } from "@/data/contact";
import { Headphones, Wrench, Briefcase, Send, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DepartmentsSection() {
  const cleanWhatsAppNumber = companyData.whatsapp.replace(/\D/g, "");

  const departmentIcons = [
    <Headphones key="sales" className="h-5 w-5 text-primary" />,
    <Wrench key="tech" className="h-5 w-5 text-primary" />,
    <Briefcase key="partner" className="h-5 w-5 text-primary" />,
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground">
          Departemen & Spesialis Layanan
        </h2>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Hubungi langsung divisi yang sesuai dengan keperluan bisnis Anda untuk penanganan yang lebih terarah.
        </p>
      </div>

      {/* Departments Cards with Hover Micro-interactions */}
      <div className="space-y-4">
        {contactDepartments.map((dept, idx) => (
          <motion.div
            key={dept.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            className="rounded-2xl border bg-card p-5 shadow-sm space-y-3 hover:border-primary/50 hover:shadow-md transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-primary/10 shrink-0">
                  {departmentIcons[idx % departmentIcons.length]}
                </div>
                <div>
                  <h3 className="font-bold text-base text-foreground">
                    {dept.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {dept.phone} • {dept.email}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-xs text-muted-foreground leading-relaxed">
              {dept.description}
            </p>

            <Button asChild variant="outline" size="sm" className="w-full gap-2 text-xs py-2.5">
              <a
                href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(dept.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="h-3.5 w-3.5 text-primary" />
                Hubungi {dept.name} via WhatsApp
              </a>
            </Button>
          </motion.div>
        ))}
      </div>

      {/* Quick Consultation Preset Topics */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="rounded-2xl border bg-muted/40 p-5 sm:p-6 space-y-4 shadow-sm"
      >
        <h3 className="font-bold text-sm text-foreground flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-primary" />
          Pilihan Pertanyaan Cepat WhatsApp
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {quickInquiries.map((inquiry) => (
            <motion.div
              key={inquiry.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                asChild
                variant="outline"
                size="sm"
                className="w-full justify-start text-left h-auto py-2.5 px-3 bg-card hover:border-primary transition-all"
              >
                <a
                  href={`https://wa.me/${cleanWhatsAppNumber}?text=${encodeURIComponent(inquiry.prefilledText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="space-y-0.5">
                    <div className="font-semibold text-xs text-foreground">
                      {inquiry.label}
                    </div>
                    <div className="text-[11px] text-muted-foreground truncate">
                      {inquiry.description}
                    </div>
                  </div>
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
