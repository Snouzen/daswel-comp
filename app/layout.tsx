import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { companyData } from "@/data/company";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://daswel.com"),
  title: {
    default: `${companyData.name} — ${companyData.tagline}`,
    template: `%s | ${companyData.name}`,
  },
  description: companyData.description,
  keywords: [
    "Daswel Company",
    "Peralatan Industri",
    "Manufaktur Indonesia",
    "Genset Industri",
    "Mesin Pabrik",
  ],
  authors: [{ name: companyData.name }],
  creator: companyData.name,
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://daswel.com",
    title: `${companyData.name} — ${companyData.tagline}`,
    description: companyData.description,
    siteName: companyData.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyData.name} — ${companyData.tagline}`,
    description: companyData.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyData.name,
    url: "https://daswel.com",
    description: companyData.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.address,
      addressCountry: "ID",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyData.phone,
      contactType: "customer service",
      availableLanguage: ["Indonesian", "English"],
    },
  };

  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${jakartaSans.variable} font-sans min-h-screen flex flex-col antialiased`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
