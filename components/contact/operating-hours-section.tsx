"use client";

import { useEffect, useState } from "react";
import { weeklySchedule } from "@/data/contact";
import { companyData } from "@/data/company";
import { Clock, CheckCircle2, AlertCircle, Calendar, MessageSquare } from "lucide-react";

export function OperatingHoursSection() {
  const [currentDayName, setCurrentDayName] = useState<string>("");

  useEffect(() => {
    // Determine current day in Indonesian
    const days = [
      "Minggu & Hari Libur",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const todayIndex = new Date().getDay();
    setCurrentDayName(days[todayIndex]);
  }, []);

  return (
    <section
      aria-label="Jadwal Jam Layanan Mingguan"
      className="rounded-3xl border bg-card p-6 sm:p-8 shadow-sm space-y-6"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-5">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary">
            <Calendar className="h-3.5 w-3.5" />
            <span>Jadwal Operasional Resmi</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            Jam Layanan Mingguan
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Waktu resmi layanan konsultasi tatap muka, survei workshop, dan customer support kantor {companyData.name}.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold border border-primary/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span>Respon Cepat Jam Kerja</span>
        </div>
      </div>

      {/* Weekly Days List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {weeklySchedule.map((item) => {
          const isToday =
            item.day === currentDayName ||
            (currentDayName === "Minggu & Hari Libur" && item.day.includes("Minggu"));

          return (
            <div
              key={item.day}
              className={`p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between space-y-2 ${
                isToday
                  ? "bg-primary/5 border-primary/40 shadow-sm"
                  : "bg-background/60 hover:bg-muted/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-sm text-foreground flex items-center gap-1.5">
                  {item.day}
                  {isToday && (
                    <span className="text-[10px] bg-primary text-white font-semibold px-2 py-0.5 rounded-full">
                      Hari Ini
                    </span>
                  )}
                </span>
                <span
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
                    item.status === "open"
                      ? "bg-green-500/10 text-green-700 dark:text-green-400"
                      : item.status === "limited"
                      ? "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {item.statusText}
                </span>
              </div>

              <div className="text-xs font-medium text-muted-foreground">
                {item.hours}
              </div>
            </div>
          );
        })}
      </div>

      {/* Note about 24/7 WhatsApp Message Reception */}
      <div className="rounded-2xl bg-muted/40 p-4 border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-muted-foreground">
        <div className="flex items-start gap-2.5">
          <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Pesan pertanyaan dan permintaan quotation yang masuk melalui{" "}
            <strong className="text-foreground">WhatsApp di luar jam kerja</strong> tetap tercatat otomatis dan akan dibalas pada prioritas pertama hari kerja berikutnya.
          </p>
        </div>

        <a
          href={companyData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-primary hover:underline shrink-0 inline-flex items-center gap-1"
        >
          <MessageSquare className="h-3.5 w-3.5" />
          <span>Tinggalkan Pesan Sekarang</span>
        </a>
      </div>
    </section>
  );
}
