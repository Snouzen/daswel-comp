import type { Metadata } from "next";
import { companyData } from "@/data/company";
import DeploymentsPage, {
  metadata as deploymentsMetadata,
} from "@/app/deployments/page";

export const metadata: Metadata = {
  ...deploymentsMetadata,
  title: `Proyek & Sebaran Unit Alat Berat — ${companyData.name}`,
  alternates: {
    canonical: "https://daswel.com/projects",
  },
};

export default DeploymentsPage;
