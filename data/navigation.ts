export interface NavItem {
  label: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}

export const mainNavItems: NavItem[] = [
  {
    label: "Product",
    href: "/products",
    description: "Katalog peralatan industri, genset, dan mesin manufaktur",
  },
  {
    label: "News",
    href: "/news",
    description: "Kabar terbaru, aktivitas, dan wawasan industri perusahaan",
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
  { label: "Contact Us", href: "/contact" },
];
