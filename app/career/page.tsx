import type { Metadata } from "next";
import { companyData } from "@/data/company";
import { jobPostings } from "@/data/career";
import { CareerPageClient } from "@/components/career/career-page-client";

export const metadata: Metadata = {
  title: "Karir & Kesempatan Kerja — Bergabung Bersama DMW",
  description:
    "Bergabunglah bersama PT Daya Maestro Wellindo, spesialis Self Loading Concrete Mixer dan alat berat konstruksi di Indonesia. Temukan lowongan kerja di bidang Sales Teknik, Servis Alat Berat, dan Pemasaran Digital.",
  keywords: [
    "karir daya maestro wellindo",
    "lowongan kerja alat berat",
    "lowongan mekanik alat berat tangerang",
    "sales engineer alat berat",
    "karir teknisi hidrolik",
    "lowongan kerja dallaswell indonesia",
    "lowongan dmw tangerang",
    "karir konstruksi indonesia",
  ],
  alternates: {
    canonical: "https://daswel.com/career",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Karir & Kesempatan Kerja | ${companyData.name}`,
    description:
      "Temukan peluang karir terbaik di bidang alat berat, mesin konstruksi, dan purna jual bersama tim profesional PT Daya Maestro Wellindo.",
    url: "https://daswel.com/career",
    siteName: companyData.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://daswel.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: `Karir di ${companyData.name}`,
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Karir & Kesempatan Kerja | ${companyData.name}`,
    description:
      "Peluang karir terbuka di PT Daya Maestro Wellindo untuk posisi Sales Engineer, Teknisi Servis Lapangan, dan Digital Marketing.",
    images: ["https://daswel.com/images/logo.png"],
  },
};

export default function CareerPage() {
  // Schema.org JobPosting structured data for Google Jobs
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: jobPostings.map((job, index) => ({
      "@type": "JobPosting",
      position: index + 1,
      title: job.title,
      description: job.overview,
      datePosted: job.postedDate,
      validThrough: job.closingDate,
      employmentType: "FULL_TIME",
      hiringOrganization: {
        "@type": "Organization",
        name: companyData.name,
        sameAs: "https://daswel.com",
        logo: "https://daswel.com/images/logo.png",
      },
      jobLocation: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tangerang",
          addressRegion: "Banten",
          addressCountry: "ID",
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CareerPageClient />
    </>
  );
}
