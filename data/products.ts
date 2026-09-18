export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  specifications: Record<string, string>;
  image: string;
  featured: boolean;
}

export const productsData: Product[] = [
  {
    id: "prod-1",
    slug: "mesin-industri-seri-x",
    name: "Mesin Industri Seri-X",
    category: "Peralatan Manufaktur",
    shortDescription: "Mesin otomatisasi performa tinggi untuk lini perakitan modern.",
    description:
      "Mesin Industri Seri-X dirancang khusus untuk memenuhi standar efisiensi energi dan presisi tinggi pada berbagai lini manufaktur skala menengah hingga besar.",
    specifications: {
      "Kapasitas Produksi": "500 unit / jam",
      "Konsumsi Daya": "15 kW",
      "Garansi": "2 Tahun Resmi",
      "Standar": "ISO 9001:2015",
    },
    image: "/images/product-1.jpg",
    featured: true,
  },
  {
    id: "prod-2",
    slug: "genset-heavy-duty-500kva",
    name: "Genset Heavy-Duty 500kVA",
    category: "Power Generation",
    shortDescription: "Penyedia daya cadangan handal dengan emisi rendah dan efisiensi bahan bakar.",
    description:
      "Genset tugas berat 500kVA menghadirkan kestabilan daya prima untuk operasional pabrik, rumah sakit, dan fasilitas krusial tanpa hambatan.",
    specifications: {
      "Output Daya": "500 kVA / 400 kW",
      "Tipe Bahan Bakar": "Diesel",
      "Tingkat Kebisingan": "75 dB pada 7 meter",
      "Sistem Pendingin": "Water-cooled",
    },
    image: "/images/product-2.jpg",
    featured: true,
  },
  {
    id: "prod-3",
    slug: "sistem-filtrasi-udara-industri",
    name: "Sistem Filtrasi Udara Industri",
    category: "Environmental System",
    shortDescription: "Solusi pembersihan udara pabrik dengan teknologi filtrasi multi-tahap.",
    description:
      "Menjamin kualitas udara dan keselamatan kerja sesuai standar regulasi lingkungan terkini dengan efisiensi penangkapan partikel hingga 99.9%.",
    specifications: {
      "Tingkat Filtrasi": "HEPA H14 (99.995%)",
      "Aliran Udara": "12.000 m³/jam",
      "Material": "Stainless Steel 316L",
    },
    image: "/images/product-3.jpg",
    featured: true,
  },
];
