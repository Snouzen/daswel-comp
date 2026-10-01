"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { companyData } from "@/data/company";
import {
  jobPostings,
  careerDepartments,
  type CareerDepartment,
  type JobPosting,
  generateGmailApplyUrl,
} from "@/data/career";
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  Search,
  Building2,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  Send,
  FileText,
  Users,
  Award,
  TrendingUp,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ITEMS_PER_PAGE = 5;

export function CareerPageClient() {
  const [selectedDepartment, setSelectedDepartment] =
    React.useState<CareerDepartment>("Semua");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [expandedJobId, setExpandedJobId] = React.useState<string | null>(
    jobPostings[0]?.id || null // Default urutan pertama terbuka agar langsung informatif
  );

  const toggleExpand = (jobId: string) => {
    setExpandedJobId((prev) => (prev === jobId ? null : jobId));
  };

  // Reset page to 1 whenever department or search query changes
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedDepartment, searchQuery]);

  // Filter job postings based on search query and department
  const filteredJobs = React.useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return jobPostings.filter((job) => {
      const matchDept =
        selectedDepartment === "Semua" || job.department === selectedDepartment;
      const matchQuery =
        !q ||
        job.title.toLowerCase().includes(q) ||
        job.location.toLowerCase().includes(q) ||
        job.overview.toLowerCase().includes(q) ||
        job.requirements.some((req) => req.toLowerCase().includes(q));

      return matchDept && matchQuery;
    });
  }, [selectedDepartment, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const paginatedJobs = React.useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredJobs.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredJobs, currentPage]);

  return (
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
        <ol className="flex items-center space-x-2">
          <li>
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
          </li>
          <li>
            <ChevronRight className="h-3 w-3" />
          </li>
          <li className="font-semibold text-foreground" aria-current="page">
            Karir &amp; Kesempatan Kerja
          </li>
        </ol>
      </nav>

      {/* Hero Header */}
      <header className="max-w-4xl space-y-5">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1 text-xs font-semibold text-primary">
          <Briefcase className="h-3.5 w-3.5" />
          <span>Karir di PT Daya Maestro Wellindo</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
          Bergabung Bersama Kami
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          Temukan peluang karir dan bertumbuh bersama tim profesional PT Daya Maestro Wellindo.
          Wujudkan potensi terbaik Anda dalam ekosistem kerja yang kolaboratif dan inovatif.
        </p>

        {/* Quick Highlights Stats (Hanya total posisi yang dibuka dan biaya rekrutmen) */}
        <div className="pt-2 grid grid-cols-2 max-w-sm gap-4">
          <div className="p-4 rounded-2xl border bg-muted/30 space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-primary">
              {jobPostings.length} Posisi
            </div>
            <div className="text-xs text-muted-foreground">Sedang Dibuka</div>
          </div>
          <div className="p-4 rounded-2xl border bg-muted/30 space-y-1">
            <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
              100% Bebas
            </div>
            <div className="text-xs text-muted-foreground">Biaya Rekrutmen</div>
          </div>
        </div>
      </header>

      {/* Main Vacancies Section */}
      <section className="space-y-8" aria-label="Daftar Lowongan Kerja">
        <div className="border-b pb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Posisi Terbuka Saat Ini
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            Temukan peluang karir yang sesuai dengan latar belakang dan aspirasi profesional Anda.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          {/* Department Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {careerDepartments.map((dept) => {
              const isActive = selectedDepartment === dept;
              const count =
                dept === "Semua"
                  ? jobPostings.length
                  : jobPostings.filter((j) => j.department === dept).length;

              return (
                <button
                  key={dept}
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setSelectedDepartment(dept)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span>{dept}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      isActive
                        ? "bg-white/20 text-white font-bold"
                        : "bg-background text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              suppressHydrationWarning
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari posisi atau keahlian..."
              className="w-full pl-10 pr-4 py-2 rounded-xl border bg-background text-xs sm:text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* Job Cards List */}
        {filteredJobs.length === 0 ? (
          <div className="text-center py-16 px-4 rounded-3xl border border-dashed bg-muted/20 space-y-3">
            <Briefcase className="h-10 w-10 text-muted-foreground mx-auto" />
            <h3 className="text-base font-bold text-foreground">
              Tidak Ada Posisi yang Cocok
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Tidak ditemukan lowongan kerja untuk filter atau kata kunci &ldquo;{searchQuery}&rdquo;.
              Coba reset pencarian atau kirimkan CV terbuka Anda.
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setSelectedDepartment("Semua");
                setSearchQuery("");
              }}
              className="rounded-xl mt-2"
              suppressHydrationWarning
            >
              Reset Filter
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {paginatedJobs.map((job) => {
              const isExpanded = expandedJobId === job.id;
              const gmailUrl = generateGmailApplyUrl(job.title);

              return (
                <div
                  key={job.id}
                  className="rounded-3xl border bg-card shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  {/* Card Header & Summary Bar */}
                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="space-y-2">
                        {/* Badges */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20">
                            {job.department}
                          </span>
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground">
                            {job.type}
                          </span>
                          <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
                            Aktif
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground hover:text-primary transition-colors">
                          {job.title}
                        </h3>
                      </div>

                      {/* Primary Direct Apply Button (Hanya tombol merah tanpa teks Gmail) */}
                      <div className="flex items-center shrink-0">
                        <Button
                          asChild
                          size="default"
                          className="rounded-xl gap-2 font-semibold shadow-sm"
                        >
                          <a
                            href={gmailUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Lamar posisi ${job.title}`}
                          >
                            <Send className="h-4 w-4 text-primary-foreground" />
                            <span>Lamar Sekarang</span>
                          </a>
                        </Button>
                      </div>
                    </div>

                    {/* Metadata Specs Row */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-muted-foreground border-y py-3">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary shrink-0" />
                        <span className="truncate">{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary shrink-0" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-primary shrink-0" />
                        <span>{job.education}</span>
                      </div>
                    </div>

                    {/* Overview Snippet */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {job.overview}
                    </p>

                    {/* Accordion / Expand Toggle */}
                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                      <button
                        type="button"
                        suppressHydrationWarning
                        onClick={() => toggleExpand(job.id)}
                        className="inline-flex items-center justify-between sm:justify-start gap-2 text-xs sm:text-sm font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md py-0.5 text-left"
                        aria-expanded={isExpanded}
                      >
                        <span>
                          {isExpanded
                            ? "Sembunyikan Rincian Kualifikasi"
                            : "Lihat Rincian Tanggung Jawab & Kualifikasi Lengkap"}
                        </span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 transition-transform duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <span className="text-[11px] text-muted-foreground shrink-0 self-start sm:self-auto">
                        Diposting: {job.postedDate}
                      </span>
                    </div>
                  </div>

                  {/* Expanded Details Section */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        key={`detail-${job.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden bg-muted/20 border-t"
                      >
                        <div className="p-6 sm:p-8 space-y-6">
                          {/* Responsibilities */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                              <FileText className="h-4 w-4 text-primary" />
                              <span>Tanggung Jawab Utama</span>
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground pl-1">
                              {job.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                  <span className="leading-relaxed">{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Requirements */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-primary" />
                              <span>Kualifikasi &amp; Persyaratan</span>
                            </h4>
                            <ul className="space-y-2 text-sm text-muted-foreground pl-1">
                              {job.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start gap-2.5">
                                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                  <span className="leading-relaxed">{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Benefits & Perks */}
                          <div className="space-y-3">
                            <h4 className="text-sm font-bold text-foreground uppercase tracking-wider flex items-center gap-2">
                              <Sparkles className="h-4 w-4 text-emerald-600" />
                              <span>Fasilitas &amp; Benefit yang Didapatkan</span>
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pt-1">
                              {job.benefits.map((benefit, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-start gap-2 p-2.5 rounded-xl bg-background border text-xs text-foreground"
                                >
                                  <Check className="h-3.5 w-3.5 text-emerald-600 mt-0.5 shrink-0" />
                                  <span className="leading-relaxed">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Footer Apply Bar */}
                          <div className="pt-4 border-t flex flex-col sm:flex-row items-center justify-between gap-4 bg-background/50 p-4 rounded-2xl border">
                            <div className="text-xs text-muted-foreground">
                              Kirimkan CV terbaru dan portofolio Anda langsung ke email resmi:{" "}
                              <strong className="text-foreground font-semibold">
                                {companyData.email}
                              </strong>
                            </div>

                            <div className="flex items-center gap-2 w-full sm:w-auto">
                              <Button
                                asChild
                                size="sm"
                                className="rounded-xl gap-2 font-semibold w-full sm:w-auto"
                              >
                                <a
                                  href={gmailUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Send className="h-4 w-4" />
                                  <span>Lamar Posisi Ini</span>
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        )}

        {/* Pagination Section (Dibuat otomatis bila ada lebih dari 5 postingan) */}
        {totalPages > 1 && (
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t">
            <p className="text-xs text-muted-foreground">
              Menampilkan {(currentPage - 1) * ITEMS_PER_PAGE + 1} -{" "}
              {Math.min(currentPage * ITEMS_PER_PAGE, filteredJobs.length)} dari{" "}
              {filteredJobs.length} posisi
            </p>

            <div className="flex items-center gap-1.5">
              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                className="rounded-xl text-xs gap-1"
                suppressHydrationWarning
              >
                <ChevronLeft className="h-3.5 w-3.5" />
                <span>Sebelumnya</span>
              </Button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                <button
                  key={pageNum}
                  type="button"
                  suppressHydrationWarning
                  onClick={() => setCurrentPage(pageNum)}
                  className={`h-8 w-8 rounded-xl text-xs font-semibold transition-all ${
                    currentPage === pageNum
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {pageNum}
                </button>
              ))}

              <Button
                type="button"
                variant="outline"
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                className="rounded-xl text-xs gap-1"
                suppressHydrationWarning
              >
                <span>Berikutnya</span>
                <ChevronRight className="h-3.5 w-3.5" />
              </Button>
            </div>
          </div>
        )}
      </section>

      {/* Why Work With Us Section */}
      <section
        className="rounded-3xl border bg-muted/30 p-6 sm:p-12 space-y-8"
        aria-label="Mengapa Berkarir di DMW"
      >
        <div className="max-w-2xl space-y-2">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            Nilai &amp; Lingkungan Kerja
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Mengapa Memilih Berkarir Bersama Daya Maestro Wellindo?
          </h2>
          <p className="text-sm text-muted-foreground">
            Kami percaya bahwa sumber daya manusia adalah aset utama dalam mewujudkan
            komitmen keunggulan operasional alat berat di seluruh Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-card border space-y-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Building2 className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-foreground">
              Proyek Vital Nasional
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Terlibat langsung dalam penyediaan unit alat berat untuk infrastruktur strategis,
              pembangunan IKN, jalan tol, bendungan, hingga tambang nasional.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border space-y-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <TrendingUp className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-foreground">
              Jenjang Karir Terbuka
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Peluang akselerasi karir berbasis pencapaian nyata dan dedikasi profesional dalam
              industri alat berat yang terus berkembang pesat.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border space-y-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-foreground">
              Pelatihan &amp; Sertifikasi
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Dukungan pengembangan kompetensi teknis, penguasaan sistem hidrolik modern, serta
              pelatihan komersial langsung dari praktisi berpengalaman.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-card border space-y-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-foreground">
              Budaya Kolaboratif
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Lingkungan kerja yang solid, suportif, mengutamakan keselamatan kerja (K3),
              serta menjunjung tinggi rasa kekeluargaan antar divisi.
            </p>
          </div>
        </div>
      </section>

      {/* Recruitment Flow (Tahapan Rekrutmen) */}
      <section className="space-y-6" aria-label="Alur Proses Rekrutmen">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            Alur Penerimaan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            4 Langkah Mudah Proses Rekrutmen
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Proses seleksi kami berlangsung transparan, obyektif, dan mengutamakan kecocokan kompetensi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="p-5 rounded-2xl border bg-card relative space-y-2">
            <span className="text-3xl font-extrabold text-primary/30">01</span>
            <h3 className="text-sm font-bold text-foreground">Pengajuan Berkas</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Kirimkan CV terbaru dan portofolio ke email perusahaan melalui tombol Lamar Sekarang.
            </p>
          </div>

          <div className="p-5 rounded-2xl border bg-card relative space-y-2">
            <span className="text-3xl font-extrabold text-primary/30">02</span>
            <h3 className="text-sm font-bold text-foreground">Seleksi Dokumen &amp; HR</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Tim HR meninjau kualifikasi dan menghubungi kandidat terpilih untuk wawancara awal.
            </p>
          </div>

          <div className="p-5 rounded-2xl border bg-card relative space-y-2">
            <span className="text-3xl font-extrabold text-primary/30">03</span>
            <h3 className="text-sm font-bold text-foreground">Wawancara Pengguna</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Diskusi teknis mendalam bersama pimpinan divisi terkait tugas dan studi kasus lapangan.
            </p>
          </div>

          <div className="p-5 rounded-2xl border bg-card relative space-y-2">
            <span className="text-3xl font-extrabold text-primary/30">04</span>
            <h3 className="text-sm font-bold text-foreground">Offering &amp; Onboarding</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Pemberian surat penawaran kerja resmi (Offering Letter) dan pengenalan tim di DMW.
            </p>
          </div>
        </div>
      </section>

      {/* Open Application / Belum Menemukan Posisi yang Sesuai */}
      <section
        className="rounded-3xl border bg-gradient-to-br from-primary/10 via-primary/5 to-background p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        aria-label="Open Application"
      >
        <div className="space-y-2 max-w-xl text-center md:text-left">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            Belum Menemukan Posisi yang Sesuai?
          </h2>
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
            Kami selalu terbuka menyambut profesional berbakat. Kirimkan CV dan surat perkenalan
            diri Anda melalui Open Application kami. Tim HR kami akan menghubungi Anda saat posisi
            yang relevan dibuka.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0 w-full md:w-auto">
          <Button asChild size="default" className="rounded-xl gap-2 font-semibold">
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                companyData.email
              )}&su=${encodeURIComponent(
                "Open Application - [Nama Lengkap Anda] - [Keahlian / Minat Bidang]"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="h-4 w-4" />
              <span>Kirim Open Application</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Anti-Fraud Disclaimer Notice */}
      <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 sm:p-5 flex items-start gap-3 text-xs text-amber-800 dark:text-amber-300">
        <ShieldAlert className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <strong className="font-bold block">Pemberitahuan Resmi Pencegahan Penipuan Rekrutmen:</strong>
          <p className="leading-relaxed">
            PT Daya Maestro Wellindo <strong>tidak pernah memungut biaya apapun</strong> (biaya tiket perjalanan, akomodasi, atau biaya tes)
            selama seluruh proses rekrutmen berlangsung. Seluruh korespondensi resmi rekrutmen hanya dilakukan melalui alamat email resmi{" "}
            <strong>{companyData.email}</strong> atau nomor kontak resmi yang tercantum di website ini.
          </p>
        </div>
      </div>
    </div>
  );
}
