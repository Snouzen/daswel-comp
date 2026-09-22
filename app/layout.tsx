import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingWhatsApp } from "@/components/layout/floating-whatsapp";
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
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: `${companyData.name} — ${companyData.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyData.name} — ${companyData.tagline}`,
    description: companyData.description,
    images: ["/images/logo.png"],
  },
  icons: {
    icon: [
      { url: "/images/icon-logo.png", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/images/icon-logo.png",
    apple: "/images/icon-logo.png",
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
    legalName: companyData.name,
    url: "https://daswel.com",
    logo: "https://daswel.com/images/logo.png",
    image: "https://daswel.com/images/logo.png",
    description: companyData.description,
    email: companyData.email,
    telephone: companyData.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyData.address,
      addressLocality: "Kota Tangerang",
      addressRegion: "Banten",
      postalCode: "15141",
      addressCountry: "ID",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: companyData.phone,
        contactType: "sales & customer support",
        availableLanguage: ["Indonesian", "English"],
      },
    ],
    sameAs: [companyData.whatsappUrl],
  };

  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/icon-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/icon-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/icon-logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${jakartaSans.variable} font-sans min-h-screen flex flex-col antialiased`}
        suppressHydrationWarning
      >
        {/* Skip to Main Content Link for Keyboard & Screen Reader Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Langsung ke konten utama
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
