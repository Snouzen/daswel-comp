export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  specifications: Record<string, string>;
  image: string;
  gallery?: string[];
  youtubeUrl?: string;
  featured: boolean;
}

export const productsData: Product[] = [
  {
    id: "prod-backhoe-loader",
    slug: "backhoe-loader",
    name: "Backhoe Loader",
    category: "Alat Berat & Konstruksi",
    shortDescription:
      "Kombinasi fleksibel Excavator, Wheel Loader, dan Bulldozer dengan kapasitas bucket 1.0 m³ dan backhoe 0.3 m³.",
    description:
      "Backhoe Loader adalah alat berat multifungsi yang menggabungkan 2 fungsi utama menjadi 1 unit tangguh: Excavator dan Wheel Loader. Alat ini dapat berfungsi sebagai Wheel Loader (kapasitas 1 kubik), Excavator (kapasitas 0.3 kubik), maupun Bulldozer. Lengan (Arm) Excavator dapat disesuaikan dengan berbagai attachment: Bulldozer, Auger, Gripper, Grasping Wood Fork, Grasping Grass Fork, atau Crushing Hammer.",
    specifications: {
      "Model": "DBL3E (Integral Frame)",
      "Berat Operasional": "8.200 kg",
      "Mesin Penggerak": "WEICHAI WP4G95E221 (70 kW / 95 HP)",
      "Kapasitas Bucket Loader": "1.0 m³ (Lifting 2.500 kg)",
      "Kapasitas Backhoe": "0.3 m³",
      "Kedalaman Gali Maks.": "4.082 - 4.500 mm",
      "Dimensi Transport": "6.100 × 2.365 × 3.752 mm",
      "Kecepatan Maksimal": "28 km/jam",
      "Sistem Kemudi": "BZZ5-250 (Sudut Kemudi ±36°)",
      "Sistem Pengereman": "Air Over Oil Caliper Brake",
    },
    image:
      "/images/Content/3. Product/Product Images/Backhoe Loader/Backhoe Loader (1).jpeg",
    gallery: [
      "/images/Content/3. Product/Product Images/Backhoe Loader/Backhoe Loader (1).jpeg",
      "/images/Content/3. Product/Product Images/Backhoe Loader/Backhoe Loader (2).jpeg",
      "/images/Content/3. Product/Product Images/Backhoe Loader/Backhoe Loader (3).jpeg",
      "/images/Content/3. Product/Product Images/Backhoe Loader/Backhoe Loader (4).jpeg",
      "/images/Content/3. Product/Product Images/Backhoe Loader/Backhoe Loader (5).jpeg",
      "/images/Content/3. Product/Product Images/Backhoe Loader 3D.png",
    ],
    youtubeUrl: "https://youtu.be/IoISWQqdYUM?si=GIgzE-w10gknaNXO",
    featured: true,
  },
  {
    id: "prod-concrete-mixer-pump",
    slug: "concrete-mixer-with-pump",
    name: "Concrete Mixer with Pump",
    category: "Mesin Pengolah Beton",
    shortDescription:
      "Mobile batching plant terintegrasi dengan pompa beton tipe DMP50 berkapasitas produksi 20–30 m³/jam.",
    description:
      "Mobile Batching Plant yang dilengkapi dengan pompa beton tipe DMP50 kubik per jam yang mengintegrasikan 3 alat pembuatan beton menjadi 1 alat ringkas: Batching Plant, Mixer, dan Pompa dengan kapasitas produksi 20-30 kubik per jam sesuai dengan jarak pipa yang dibutuhkan. Memiliki kemampuan pompa vertikal hingga 30 meter dan horizontal hingga 300 meter, serta dilengkapi dengan flow meter digital.",
    specifications: {
      "Model": "DMP50",
      "Mesin Penggerak": "Weichai Diesel Engine (85 kW)",
      "Tipe Mixer": "JZM450",
      "Kapasitas Pengadukan": "15 - 25 m³/jam",
      "Kapasitas Pemompaan": "20 - 30 m³/jam",
      "Jangkauan Vertikal": "30 Meter",
      "Jangkauan Horizontal": "300 Meter",
      "Pompa Oli Utama": "Kawasaki Original",
      "Katup Distribusi": "S-Valve High Pressure",
      "Fitur Tambahan": "Dilengkapi Digital Flow Meter",
    },
    image:
      "/images/Content/3. Product/Product Images/Concrete Mixer with Pump/Diesel Concrete Mixer with Pump (1).jpeg",
    gallery: [
      "/images/Content/3. Product/Product Images/Concrete Mixer with Pump/Diesel Concrete Mixer with Pump (1).jpeg",
      "/images/Content/3. Product/Product Images/Concrete Mixer with Pump/Diesel Concrete Mixer with Pump (2).jpeg",
      "/images/Content/3. Product/Product Images/Concrete Mixer with Pump/Diesel Concrete Mixer with Pump (3).jpeg",
      "/images/Content/3. Product/Product Images/Concrete Mixer with Pump/Diesel Concrete Mixer with Pump (4).jpeg",
      "/images/Content/3. Product/Product Images/Concrete Mixer with Pump/Diesel Concrete Mixer with Pump (5).jpeg",
      "/images/Content/3. Product/Product Images/Concrete Mixer with Pump/Diesel Concrete Mixer with Pump (6).jpeg",
    ],
    youtubeUrl: "https://youtu.be/7T9DUNmbgTI?si=qfCivBntStEQE3bZ",
    featured: true,
  },
  {
    id: "prod-rough-terrain-forklift-4x4",
    slug: "rough-terrain-forklift-4x4",
    name: "Rough Terrain Forklift 4x4",
    category: "Material Handling & Forklift",
    shortDescription:
      "Forklift segala medan berpenggerak 4x4 kapasitas 3.5 ton, lifting up to 3.5 m dilengkapi AC cabin dan kamera monitor.",
    description:
      "Forklift segala medan tangguh berkapasitas 3.5 ton dengan jangkauan lifting hingga 3.5 meter, didukung ban offroad Four by Four (4x4) untuk akselerasi optimal pada medan proyek berat dan berlumpur. Kabin operator dirancang ergonomis berstandar tinggi lengkap dengan AC dan sistem kamera monitor visual. Didukung mesin diesel 490 Supercharge bertenaga 36.8 - 58 kW (setara 85 HP).",
    specifications: {
      "Sistem Penggerak": "Four Wheel Drive (4x4 Offroad)",
      "Kapasitas Angkat (Rated Load)": "3.500 kg (3.5 Ton)",
      "Tinggi Angkat (Lifting Height)": "3.000 - 6.000 mm (Standar 3.5 m)",
      "Mesin": "490 Supercharge Diesel (36.8 - 58 kW / 85 HP)",
      "Berat Kendaraan": "4.500 - 4.800 kg",
      "Kemampuan Menanjak": "≤20% (Gradeability)",
      "Ukuran Ban": "23.5/70-60 Offroad Heavy-Duty",
      "Radius Putar Minimum": "3.500 - 4.000 mm",
      "Dimensi Unit": "3.800 × 1.850 × 2.600 mm",
      "Fasilitas Kabin": "AC Kabin & Kamera Monitor Multi-Arah",
    },
    image:
      "/images/Content/3. Product/Product Images/Rough Terrain Forklift 4x4/forklift 1.jpg",
    gallery: [
      "/images/Content/3. Product/Product Images/Rough Terrain Forklift 4x4/forklift 1.jpg",
      "/images/Content/3. Product/Product Images/Rough Terrain Forklift 4x4/WhatsApp Image 2025-02-12 at 16.01.35.jpeg",
      "/images/Content/3. Product/Product Images/Rough Terrain Forklift 4x4/WhatsApp Image 2025-02-12 at 16.01.36.jpeg",
      "/images/Content/3. Product/Product Images/4x4 Forklift 3D.png",
    ],
    featured: true,
  },
  {
    id: "prod-self-loading-mixer-3-5",
    slug: "self-loading-mixer-3-5",
    name: "Self Loading Mixer 3,5",
    category: "Mobile Batching Plant",
    shortDescription:
      "Mobile batching plant terpadu drum 4.740 L & output 3 m³/batch dengan monitor weighing system cabin.",
    description:
      "Mobile Batching Plant mandiri yang mengintegrasikan 3 fungsi pembuatan beton menjadi 1 alat: Batching Plant, Truck Mixer, dan Wheel Loader. Pembuatan beton dapat disesuaikan dengan sistem timbangan digital monitor yang terdapat di cabin sesuai job mix atau formula beton yang diinginkan. Kapasitas produksi per batch mencapai 3 kubik beton dengan hanya 1 orang operator.",
    specifications: {
      "Model": "3.5m3 Self-Loading Concrete Mixer",
      "Volume Drum": "4.740 Liter",
      "Kapasitas Output": "3.0 m³ / batch",
      "Kecepatan Putar Drum": "≥16 rpm (pada 1600 rpm)",
      "Mesin Penggerak": "Yuchai 4105 Turbo-charged (85 kW)",
      "Sistem Penggerak": "4x4 Torque Converter (ZL-280)",
      "Transmisi": "4 Maju + 4 Mundur (Power Shift)",
      "Kemampuan Menanjak": "30° (Max. Gradeability)",
      "Kapasitas Tangki Air": "620 Liter (Time Relay)",
      "Sistem Timbangan": "Cabin Monitor Weighing System",
    },
    image:
      "/images/Content/3. Product/Product Images/Self Loading Mixer 3.5/Self Loading Mixer 3 (1).jpeg",
    gallery: [
      "/images/Content/3. Product/Product Images/Self Loading Mixer 3.5/Self Loading Mixer 3 (1).jpeg",
      "/images/Content/3. Product/Product Images/Self Loading Mixer 3.5/Self Loading Mixer 3 (2).jpeg",
      "/images/Content/3. Product/Product Images/Self Loading Mixer 3.5/Self Loading Mixer 3 (3).jpeg",
      "/images/Content/3. Product/Product Images/Self Loading Mixer 3.5/Self Loading Mixer 3 (4).jpeg",
      "/images/Content/3. Product/Product Images/Self Loading Mixer 3.5/SLM 3 (1).jpeg",
      "/images/Content/3. Product/Product Images/Self Loading Mixer 3.5/SLM 3 (2).jpeg",
      "/images/Content/3. Product/Product Images/Self Loading Mixer 3.5/SLM 3 (3).jpeg",
    ],
    youtubeUrl: "https://youtu.be/rmVZuAKIqKI?si=PB-CU2g6ySk0WYhg",
    featured: true,
  },
  {
    id: "prod-self-loading-mixer-4",
    slug: "self-loading-mixer-4",
    name: "Self Loading Mixer 4",
    category: "Mobile Batching Plant",
    shortDescription:
      "Mobile batching plant 4x4 kapasitas produksi 3.5 - 4 m³/batch dengan timbangan kabin dan 2 kamera monitor.",
    description:
      "Mobile Batching Plant yang mengintegrasikan 3 alat pembuatan beton menjadi 1 alat berkinerja tinggi: Batching Plant, Truck Mixer, dan Wheel Loader. Pembuatan beton dapat disesuaikan secara presisi dengan sistem timbangan digital monitor di kabin sesuai formula job mix yang diinginkan. Kapasitas produksi per batch mencapai 3.5 hingga 4 kubik beton berkualitas dengan cukup 1 orang operator.",
    specifications: {
      "Model": "4.0m3 Self-Loading Concrete Mixer",
      "Kapasitas Pencampuran": "3.5 - 4.0 m³ / batch",
      "Kapasitas Bucket Loader": "0.65 m³",
      "Mesin Penggerak": "Yuchai 4108 Supercharged (4-cylinder, 91 kW)",
      "Sistem Penggerak": "4x4 Wheel Side Deceleration Bridge (2.5T)",
      "Berat Operasional": "8.700 kg",
      "Ban Kendaraan": "16/70-R22.5 Double Tire",
      "Kecepatan Tempuh": "30 km/jam",
      "Kapasitas Tangki Air": "900 Liter",
      "Fitur Khusus": "Monitor Weighing System & Kamera Monitor 2 Sisi",
    },
    image:
      "/images/Content/3. Product/Product Images/Self Loading Mixer 4/Self Loading Mixer 4 (1).jpeg",
    gallery: [
      "/images/Content/3. Product/Product Images/Self Loading Mixer 4/Self Loading Mixer 4 (1).jpeg",
      "/images/Content/3. Product/Product Images/Self Loading Mixer 4/Self Loading Mixer 4 (2).jpeg",
      "/images/Content/3. Product/Product Images/Self Loading Mixer 4/Self Loading Mixer 4 (3).jpeg",
      "/images/Content/3. Product/Product Images/Self Loading Mixer 4/Self Loading Mixer 4 (4).jpeg",
      "/images/Content/3. Product/Product Images/Self Loading Mixer 4/Self Loading Mixer 4 (5).jpeg",
    ],
    youtubeUrl: "https://youtu.be/rmVZuAKIqKI?si=PB-CU2g6ySk0WYhg",
    featured: true,
  },
];
