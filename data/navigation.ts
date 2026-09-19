export interface NavItem {
  label: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}

export const mainNavItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
    description: "Beranda resmi dan profil perusahaan Daswel",
  },
  {
    label: "Product",
    href: "/products",
    description: "Katalog alat berat, mesin beton, mobile batching plant, dan forklift 4x4",
  },
  {
    label: "News",
    href: "/news",
    description: "Kabar terbaru, aktivitas, dan wawasan industri perusahaan",
  },
  {
    label: "Gallery",
    href: "/gallery",
    description: "Dokumentasi visual dan galeri foto unit alat berat operasional",
  },
  {
    label: "About Us",
    href: "/about",
    description: "Dedikasi, prinsip, nilai-nilai, dan keunggulan kompetitif Daswel",
  },
  {
    label: "Contact Us",
    href: "/contact",
    description: "Informasi kontak, lokasi kantor, dan konsultasi WhatsApp",
  },
];

export const footerNavItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Product", href: "/products" },
  { label: "News", href: "/news" },
  { label: "Gallery", href: "/gallery" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

