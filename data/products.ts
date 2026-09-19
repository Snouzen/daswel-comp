export interface SpecGroup {
  group: string;
  items: { label: string; value: string }[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  specifications: Record<string, string>;
  specGroups?: SpecGroup[];
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
      "Kombinasi Excavator dan Wheel Loader (1 m³) serta Bulldozer dengan pilihan attachment multiguna.",
    description:
      "Backhoe Loader adalah alat berat yang menggabungkan 2 alat menjadi 1 yaitu Excavator dan Wheel Loader. Alat ini berfungsi sebagai Wheel loader (kapasitas 1 kubik), Excavator (kapasitas 0.3 kubik), Buldozer. Dimana Arm Excavator dapat di adjust menjadi : Bulldozer, Auger, Gripper, Grasping Wood Fork, Grasping Grass Fork, atau Crushing Hammer.",
    specifications: {
      "Model": "DBL3E",
      "Feature": "Integral frame",
      "Overall Operating Weight": "8200 KG",
      "Transport Dimension (L×W×H)": "6100 × 2365 × 3752 mm",
      "Wheel base": "2200 mm",
      "Min. Ground Clearance": "300 mm",
      "Bucket Capacity": "1.0 m³",
      "Breakout Force": "58 KN",
      "Loading Lifting Capacity": "2500 KG",
      "Bucket Dumping Height": "2742 mm",
      "Bucket Dumping Distance": "925 mm",
      "Digging Depth": "52 mm",
      "Backhoe Capacity": "0.3 m³",
      "Max. Digging Depth": "4082 / 4500 mm",
      "Swing Angle of Excavator Grab": "190°",
      "Max. Pulling Force": "65 KN",
      "Engine Model": "WEICHAI WP4G95E221",
      "Engine Type": "In Line Direct injection Four-Stroke and Injection Combustion Chamber",
      "Cylinder-Inside Diameter*Stroke": "4-108 × 132 mm",
      "Rated Power": "70 KW (95 HP)",
      "Rated Speed": "2200 r/min",
      "Min. Fuel Consumption": "≤ 230 g/km.h",
      "Max. Torque": "≥ 400 N.M",
      "Displacement": "4.837 L",
      "Model of Steering Device": "BZZ5-250",
      "Steering Angle": "± 36°",
      "Min. turning radius": "6581 mm",
      "Pressure of the system": "12 Mpa",
      "Main Transmission Type": "Double Reduction",
      "Final Reducer": "Single Stage Final Reducer",
      "Rated Loader of Axle": "8 / 18.5 t",
      "Torque Converter Model": "YJ280 (Single-stage Three Elements)",
      "Max. Efficiency": "84.40%",
      "Inlet Pressure": "1.3 - 1.5 Mpa",
      "Outlet Pressure": "0.25 - 0.3 Mpa",
      "Cooling Method": "Oil-cooling Pressure Circulation",
      "Gearbox Type": "Fixed Shaft Power Transmission",
      "Oil Pressure of Clutch": "1373 Kpa — 1569 Kpa",
      "Gears": "Two forward, Two reverse gears",
      "Max. Speed": "28 Km/h",
      "Tyre Model": "14-17.5 / 19.5L-24",
      "Pressure of Front wheel": "0.55 Mpa",
      "Pressure of Back Wheel": "0.223 Mpa",
      "Service Brake": "Air Over Oil Caliper Brake (External Type, Self-regulation, Self-balance)",
      "Emergency Brake": "Operation Power Implementing brake / Manual Operation Power Terminating Brake",
      "Digging Power of Excavator Grab": "60 KN",
      "Digging Power of Dipper": "44 KN",
      "Bucket Lifting Time": "6.8 S",
      "Bucket Lowering Time": "3.1 S",
      "Bucket Discharge Time": "2.0 S",
      "Cooling system": "25 L",
      "Fuel oil tank": "140 L",
      "Front axle": "9 kg",
      "Rear axle": "16 kg",
      "Hydraulic oil tank": "150 L",
      "Transmission": "25 L",
    },
    specGroups: [
      {
        group: "Dimensi & Bobot (General)",
        items: [
          { label: "Model", value: "DBL3E" },
          { label: "Feature", value: "Integral frame" },
          { label: "Overall Operating Weight", value: "8200 KG" },
          { label: "Transport Dimension (L×W×H)", value: "6100 × 2365 × 3752 mm" },
          { label: "Wheel base", value: "2200 mm" },
          { label: "Min. Ground Clearance", value: "300 mm" },
        ],
      },
      {
        group: "Kinerja Loader & Backhoe",
        items: [
          { label: "Bucket Capacity (Loader)", value: "1.0 m³" },
          { label: "Breakout Force", value: "58 KN" },
          { label: "Loading Lifting Capacity", value: "2500 KG" },
          { label: "Bucket Dumping Height", value: "2742 mm" },
          { label: "Bucket Dumping Distance", value: "925 mm" },
          { label: "Digging Depth", value: "52 mm" },
          { label: "Backhoe Capacity", value: "0.3 m³" },
          { label: "Max. Digging Depth", value: "4082 / 4500 mm" },
          { label: "Swing Angle of Excavator Grab", value: "190°" },
          { label: "Max. Pulling Force", value: "65 KN" },
        ],
      },
      {
        group: "Mesin Penggerak (Engine)",
        items: [
          { label: "Engine Model", value: "WEICHAI WP4G95E221" },
          { label: "Engine Type", value: "In Line Direct injection Four-Stroke and Injection Combustion Chamber" },
          { label: "Cylinder-Inside Diameter*Stroke", value: "4-108 × 132 mm" },
          { label: "Rated Power", value: "70 KW" },
          { label: "Rated Speed", value: "2200 r/min" },
          { label: "Min. Fuel Consumption", value: "≤ 230 g/km.h" },
          { label: "Max. Torque", value: "≥ 400 N.M" },
          { label: "Displacement", value: "4.837 L" },
        ],
      },
      {
        group: "Sistem Kemudi & Gandar (Steering & Axle)",
        items: [
          { label: "Model of Steering Device", value: "BZZ5-250" },
          { label: "Steering Angle", value: "± 36°" },
          { label: "Min. turning radius", value: "6581 mm" },
          { label: "Pressure of the system", value: "12 Mpa" },
          { label: "Main Transmission Type", value: "Double Reduction" },
          { label: "Final Reducer", value: "Single Stage Final Reducer" },
          { label: "Rated Loader of Axle", value: "8 / 18.5 t" },
        ],
      },
      {
        group: "Sistem Transmisi (Transmission & Gearbox)",
        items: [
          { label: "Torque Converter Model", value: "YJ280" },
          { label: "Torque Converter Type", value: "Single-stage Three Elements" },
          { label: "Max. Efficiency", value: "84.40%" },
          { label: "Inlet Pressure", value: "1.3 - 1.5 Mpa" },
          { label: "Outlet Pressure", value: "0.25 - 0.3 Mpa" },
          { label: "Cooling Method", value: "Oil-cooling Pressure Circulation" },
          { label: "Gearbox Type", value: "Fixed Shaft Power Transmission" },
          { label: "Oil Pressure of Clutch", value: "1373 Kpa — 1569 Kpa" },
          { label: "Gears", value: "Two forward, Two reverse gears" },
          { label: "Max. Speed", value: "28 Km/h" },
        ],
      },
      {
        group: "Ban & Sistem Rem (Tyre & Brake)",
        items: [
          { label: "Tyre Model", value: "14-17.5 / 19.5L-24" },
          { label: "Pressure of Front wheel", value: "0.55 Mpa" },
          { label: "Pressure of Back Wheel", value: "0.223 Mpa" },
          { label: "Service Brake", value: "Air Over Oil Caliper Brake (External Type, Self-regulation, Self-balance)" },
          { label: "Emergency Brake", value: "Operation Power Implementing brake / Manual Operation Power Terminating Brake" },
        ],
      },
      {
        group: "Sistem Hidrolik (Hydraulic System)",
        items: [
          { label: "Digging Power of Excavator Grab", value: "60 KN" },
          { label: "Digging Power of Dipper", value: "44 KN" },
          { label: "Bucket Lifting Time", value: "6.8 S" },
          { label: "Bucket Lowering Time", value: "3.1 S" },
          { label: "Bucket Discharge Time", value: "2.0 S" },
        ],
      },
      {
        group: "Kapasitas Oli & Pendingin (Oil & Fluid)",
        items: [
          { label: "Cooling system", value: "25 L" },
          { label: "Fuel oil tank", value: "140 L" },
          { label: "Hydraulic oil tank", value: "150 L" },
          { label: "Transmission", value: "25 L" },
          { label: "Front axle", value: "9 kg" },
          { label: "Rear axle", value: "16 kg" },
        ],
      },
    ],
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
