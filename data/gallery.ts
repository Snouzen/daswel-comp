export interface GalleryItem {
  id: string;
  title: string;
  category: "Backhoe Loader" | "Concrete Mixer with Pump" | "Rough Terrain Forklift 4x4" | "Self Loading Mixer 3.5" | "Self Loading Mixer 4";
  description: string;
  image: string;
  date?: string;
  location?: string;
}

export const galleryCategories = [
  "Semua",
  "Backhoe Loader",
  "Concrete Mixer with Pump",
  "Rough Terrain Forklift 4x4",
  "Self Loading Mixer 3.5",
  "Self Loading Mixer 4",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryData: GalleryItem[] = [
  // 1. Backhoe Loader
  {
    id: "gal-bhl-1",
    title: "Backhoe Loader",
    category: "Backhoe Loader",
    description:
      "Unit Backhoe Loader multifungsi Daswel siap operasional untuk pekerjaan penggalian dan pemindahan material proyek konstruksi.",
    image: "/images/Content/3. Product/Product Images/Backhoe Loader/Backhoe Loader (1).jpeg",
    date: "2025",
    location: "Proyek Konstruksi & Infrastruktur",
  },
  {
    id: "gal-bhl-2",
    title: "Backhoe Loader",
    category: "Backhoe Loader",
    description:
      "Tampilan sisi depan unit Backhoe Loader dengan bucket kokoh dan sistem hidrolik bertekanan tinggi.",
    image: "/images/Content/3. Product/Product Images/Backhoe Loader/Backhoe Loader (2).jpeg",
    date: "2025",
    location: "Stockyard Daswel",
  },
  {
    id: "gal-bhl-3",
    title: "Backhoe Loader",
    category: "Backhoe Loader",
    description:
      "Uji coba manuver dan stabilitas unit Backhoe Loader pada medan tanah terbuka sebelum pengiriman unit ke klien.",
    image: "/images/Content/3. Product/Product Images/Backhoe Loader/Backhoe Loader (3).jpeg",
    date: "2025",
    location: "Area Pengujian Lapangan",
  },
  {
    id: "gal-bhl-4",
    title: "Backhoe Loader",
    category: "Backhoe Loader",
    description:
      "Struktur boom arm dan arm penggali belakang dengan jangkauan optimal untuk efisiensi galian fondasi.",
    image: "/images/Content/3. Product/Product Images/Backhoe Loader/Backhoe Loader (4).jpeg",
    date: "2025",
    location: "Workshop Daswel",
  },
  {
    id: "gal-bhl-5",
    title: "Backhoe Loader",
    category: "Backhoe Loader",
    description:
      "Kabin operator ergonomis dengan proteksi ROPS/FOPS untuk kenyamanan dan keselamatan kerja operator.",
    image: "/images/Content/3. Product/Product Images/Backhoe Loader/Backhoe Loader (5).jpeg",
    date: "2025",
    location: "Inspeksi Teknis Pre-Delivery",
  },

  // 2. Concrete Mixer with Pump
  {
    id: "gal-cmp-1",
    title: "Concrete Mixer with Pump",
    category: "Concrete Mixer with Pump",
    description:
      "Unit terpadu Concrete Mixer with Pump bertenaga diesel untuk pengecoran cepat pada proyek gedung dan infrastruktur jalan.",
    image: "/images/Content/3. Product/Product Images/Concrete Mixer with Pump/Diesel Concrete Mixer with Pump (1).jpeg",
    date: "2025",
    location: "Situs Proyek Pengecoran",
  },
  {
    id: "gal-cmp-2",
    title: "Concrete Mixer with Pump",
    category: "Concrete Mixer with Pump",
    description:
      "Sistem pompa hidrolik ganda memastikan aliran beton lancar dengan daya dorong horizontal dan vertikal yang kuat.",
    image: "/images/Content/3. Product/Product Images/Concrete Mixer with Pump/Diesel Concrete Mixer with Pump (2).jpeg",
    date: "2025",
    location: "Pengujian Tekanan Pompa",
  },
  {
    id: "gal-cmp-3",
    title: "Concrete Mixer with Pump",
    category: "Concrete Mixer with Pump",
    description:
      "Pengoperasian mesin pengaduk dan pemompa beton langsung di lokasi kerja dengan mobilitas tinggi menggunakan roda penarik.",
    image: "/images/Content/3. Product/Product Images/Concrete Mixer with Pump/Diesel Concrete Mixer with Pump (3).jpeg",
    date: "2025",
    location: "Pengecoran Lantai Industri",
  },
  {
    id: "gal-cmp-4",
    title: "Concrete Mixer with Pump",
    category: "Concrete Mixer with Pump",
    description:
      "Detail hopper pengaduk dan saluran pemipaan distribusi cor beton bertekanan tinggi.",
    image: "/images/Content/3. Product/Product Images/Concrete Mixer with Pump/Diesel Concrete Mixer with Pump (4).jpeg",
    date: "2025",
    location: "Workshop Perakitan",
  },
  {
    id: "gal-cmp-5",
    title: "Concrete Mixer with Pump",
    category: "Concrete Mixer with Pump",
    description:
      "Demonstrasi efisiensi pencampuran material agregat dan semen menjadi adukan beton homogen siap tuang.",
    image: "/images/Content/3. Product/Product Images/Concrete Mixer with Pump/Diesel Concrete Mixer with Pump (5).jpeg",
    date: "2025",
    location: "Pusat Pelatihan Operator",
  },
  {
    id: "gal-cmp-6",
    title: "Concrete Mixer with Pump",
    category: "Concrete Mixer with Pump",
    description:
      "Pemeriksaan sistem kontrol elektrik dan katup hidrolik sebelum unit diberangkatkan ke proyek pelanggan.",
    image: "/images/Content/3. Product/Product Images/Concrete Mixer with Pump/Diesel Concrete Mixer with Pump (6).jpeg",
    date: "2025",
    location: "Quality Control Center",
  },

  // 3. Rough Terrain Forklift 4x4
  {
    id: "gal-rtf-1",
    title: "Rough Terrain Forklift 4x4",
    category: "Rough Terrain Forklift 4x4",
    description:
      "Rough Terrain Forklift 4x4 dengan ground clearance tinggi dirancang khusus untuk mengangkat beban berat di medan berlumpur dan berbatu.",
    image: "/images/Content/3. Product/Product Images/Rough Terrain Forklift 4x4/WhatsApp Image 2025-02-12 at 16.01.35.jpeg",
    date: "2025",
    location: "Yard Logistik Alat Berat",
  },
  {
    id: "gal-rtf-2",
    title: "Rough Terrain Forklift 4x4",
    category: "Rough Terrain Forklift 4x4",
    description:
      "Desain tapak ban off-road ekstra lebar dan penggerak empat roda (4WD) memberikan traksi maksimal di medan ekstrem.",
    image: "/images/Content/3. Product/Product Images/Rough Terrain Forklift 4x4/WhatsApp Image 2025-02-12 at 16.01.36.jpeg",
    date: "2025",
    location: "Area Uji Coba Off-Road",
  },
  {
    id: "gal-rtf-3",
    title: "Rough Terrain Forklift 4x4",
    category: "Rough Terrain Forklift 4x4",
    description:
      "Unit Forklift 4x4 dengan mast berkekuatan tinggi siap memenuhi kebutuhan logistik pertambangan dan perkebunan sawit.",
    image: "/images/Content/3. Product/Product Images/Rough Terrain Forklift 4x4/forklift 1.jpg",
    date: "2025",
    location: "Fasilitas Produksi & Perakitan",
  },

  // 4. Self Loading Mixer 3.5
  {
    id: "gal-slm35-1",
    title: "Self Loading Mixer 3.5",
    category: "Self Loading Mixer 3.5",
    description:
      "Self Loading Concrete Mixer kapasitas 3.5 m³ dengan bucket pengisi mandiri, timbangan digital otomatis, dan drum berputar 270 derajat.",
    image: "/images/Content/3. Product/Product Images/Self Loading Mixer 3.5/SLM 3 (1).jpeg",
    date: "2025",
    location: "Proyek Pembangunan Jalan Daerah",
  },
  {
    id: "gal-slm35-2",
    title: "Self Loading Mixer 3.5",
    category: "Self Loading Mixer 3.5",
    description:
      "Proses penuangan beton segar langsung ke area cetakan dengan fleksibilitas drum pengaduk putar serbaguna.",
    image: "/images/Content/3. Product/Product Images/Self Loading Mixer 3.5/SLM 3 (2).jpeg",
    date: "2025",
    location: "Lokasi Pengecoran Saluran Irigasi",
  },
  {
    id: "gal-slm35-3",
    title: "Self Loading Mixer 3.5",
    category: "Self Loading Mixer 3.5",
    description:
      "Drum pengaduk berkemampuan pencampuran cepat dan presisi menghasilkan beton bermutu tinggi langsung di tempat kerja.",
    image: "/images/Content/3. Product/Product Images/Self Loading Mixer 3.5/Self Loading Mixer 3 (1).jpeg",
    date: "2025",
    location: "Depo Alat Berat Daswel",
  },
  {
    id: "gal-slm35-4",
    title: "Self Loading Mixer 3.5",
    category: "Self Loading Mixer 3.5",
    description:
      "Kondisi unit Self Loading Mixer 3.5 m³ dalam persiapan mobilisasi menuju proyek konstruksi jembatan.",
    image: "/images/Content/3. Product/Product Images/Self Loading Mixer 3.5/Self Loading Mixer 3 (2).jpeg",
    date: "2025",
    location: "Pusat Distribusi Nasional",
  },

  // 5. Self Loading Mixer 4
  {
    id: "gal-slm4-1",
    title: "Self Loading Mixer 4",
    category: "Self Loading Mixer 4",
    description:
      "Self Loading Mixer kapasitas 4.0 m³ berkinerja tinggi untuk proyek berskala besar yang membutuhkan pasokan beton kontinu.",
    image: "/images/Content/3. Product/Product Images/Self Loading Mixer 4/Self Loading Mixer 4 (1).jpeg",
    date: "2025",
    location: "Proyek Kawasan Industri Terpadu",
  },
  {
    id: "gal-slm4-2",
    title: "Self Loading Mixer 4",
    category: "Self Loading Mixer 4",
    description:
      "Tampilan kokoh unit Self Loading Mixer 4 m³ dengan kabin kemudi modern dan sistem hidrolik generasi terbaru.",
    image: "/images/Content/3. Product/Product Images/Self Loading Mixer 4/Self Loading Mixer 4 (2).jpeg",
    date: "2025",
    location: "Fasilitas Pengujian Mesin",
  },
  {
    id: "gal-slm4-3",
    title: "Self Loading Mixer 4",
    category: "Self Loading Mixer 4",
    description:
      "Bucket pemuat material otomatis berkapasitas besar mempercepat siklus pengisian pasir, kerikil, dan semen.",
    image: "/images/Content/3. Product/Product Images/Self Loading Mixer 4/Self Loading Mixer 4 (3).jpeg",
    date: "2025",
    location: "Workshop Alat Berat Daswel",
  },
  {
    id: "gal-slm4-4",
    title: "Self Loading Mixer 4",
    category: "Self Loading Mixer 4",
    description:
      "Sistem pembuangan beton multi-arah memudahkan penuangan ke berbagai sudut tanpa harus memindahkan posisi kendaraan.",
    image: "/images/Content/3. Product/Product Images/Self Loading Mixer 4/Self Loading Mixer 4 (4).jpeg",
    date: "2025",
    location: "Proyek Pengecoran Fondasi Gardu Induk",
  },
  {
    id: "gal-slm4-5",
    title: "Self Loading Mixer 4",
    category: "Self Loading Mixer 4",
    description:
      "Unit siap kirim setelah melewati 20 titik pemeriksaan kualitas dan kalibrasi sistem timbang hidrolik.",
    image: "/images/Content/3. Product/Product Images/Self Loading Mixer 4/Self Loading Mixer 4 (5).jpeg",
    date: "2025",
    location: "Area Siap Kirim Logistik",
  },
];
