import type { Metadata } from "next";
import { companyData } from "@/data/company";
import { DeploymentsPageClient } from "@/components/deployments/deployments-page-client";

export const metadata: Metadata = {
  title: `Sebaran Proyek, Training & After Sales — ${companyData.name}`,
  description:
    "Rekam jejak 70+ proyek riil alat berat, pelatihan operator di lokasi kerja (training), dan jaminan ketersediaan suku cadang resmi (after sales) dari Daya Maestro Wellindo.",
  alternates: {
    canonical: "https://daswel.com/deployments",
  },
  openGraph: {
    title: `Sebaran Proyek, Training & After Sales — ${companyData.name}`,
    description:
      "Rekam jejak 70+ proyek riil alat berat, pelatihan operator di lokasi kerja, dan jaminan suku cadang resmi di seluruh Indonesia.",
    url: "https://daswel.com/deployments",
    siteName: companyData.name,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://daswel.com/images/logo.png",
        width: 1200,
        height: 630,
        alt: `Sebaran Proyek, Training & After Sales — ${companyData.name}`,
      },
    ],
  },
};

export default function DeploymentsPage() {
  return <DeploymentsPageClient />;
}
