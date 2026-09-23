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
      "Jenis Rangka": "Rangka Menyatu",
      "Dimensi Keseluruhan": "6100×2365×3752mm",
      "Jarak Sumbu Roda Depan dan Belakang": "2200mm",
      "Jarak Terkecil Unit ke Tanah": "300mm",
      "Kapasitas Bucket Loader": "1.0m³",
      "Kekuatan Pendorong": "58KN",
      "Kapasitas Angkat": "2500KG",
      "Kapasitas Beban Bucket Loader": "8200KG",
      "Tinggi Pembuangan Bucket Loader": "2742mm",
      "Jarak Pembuangan Bucket Loader": "925mm",
      "Kedalaman Galian Bucket Backhoe": "52mm",
      "Kapasitas Bucket Backhoe": "0.3m³",
      "Kedalaman Maksimal Bucket Backhoe": "4082mm",
      "Sudut Putar Excavator": "190°",
      "Kekuatan Tarik Maksimal": "65KN",
      "Tenaga Mesin": "WEICHAI 73KW",
      "Pemindahan": "4.8L",
      "Sudut Kemudi": "±36°",
      "Radius Putar Balik Minimal": "6581mm",
      "Kecepatan Maksimal": "28Km/h",
    },
    specGroups: [
      {
        group: "Dimensi & Rangka (Framework & Dimension)",
        items: [
          { label: "Model", value: "DBL3E" },
          { label: "Jenis Rangka", value: "Rangka Menyatu" },
          { label: "Dimensi Keseluruhan", value: "6100×2365×3752mm" },
          { label: "Jarak Sumbu Roda Depan dan Belakang", value: "2200mm" },
          { label: "Jarak Terkecil Unit ke Tanah", value: "300mm" },
          { label: "Kapasitas Beban Bucket Loader", value: "8200KG" },
        ],
      },
      {
        group: "Kinerja Bucket Loader",
        items: [
          { label: "Kapasitas Bucket Loader", value: "1.0m³" },
          { label: "Kekuatan Pendorong", value: "58KN" },
          { label: "Kapasitas Angkat", value: "2500KG" },
          { label: "Tinggi Pembuangan Bucket Loader", value: "2742mm" },
          { label: "Jarak Pembuangan Bucket Loader", value: "925mm" },
        ],
      },
      {
        group: "Kinerja Bucket Backhoe (Excavator)",
        items: [
          { label: "Kapasitas Bucket Backhoe", value: "0.3m³" },
          { label: "Kedalaman Maksimal Bucket Backhoe", value: "4082mm" },
          { label: "Kedalaman Galian Bucket Backhoe", value: "52mm" },
          { label: "Sudut Putar Excavator", value: "190°" },
          { label: "Kekuatan Tarik Maksimal", value: "65KN" },
        ],
      },
      {
        group: "Mesin, Kemudi & Kecepatan Operasional",
        items: [
          { label: "Tenaga Mesin", value: "WEICHAI 73KW" },
          { label: "Pemindahan (Displacement)", value: "4.8L" },
          { label: "Sudut Kemudi", value: "±36°" },
          { label: "Radius Putar Balik Minimal", value: "6581mm" },
          { label: "Kecepatan Maksimal", value: "28Km/h" },
        ],
      },
    ],
    image:
      "/images/Content/1. Brand Guidelines/Brosur/Backhoe Loader (2).jpeg",
    gallery: [
      "/images/Content/1. Brand Guidelines/Brosur/Backhoe Loader (2).jpeg",
      "/images/Content/3. Product/Product Images/Backhoe Loader/Backhoe Loader (1).jpeg",
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
      "Concrete mixer terintegrasi pompa beton tipe DMP-50 berkapasitas pompa hingga 50 m³/h dan adukan 20 m³/h.",
    description:
      "Concrete Mixer with Pump tipe DMP-50 mengintegrasikan mesin pengaduk beton (Drum Mixer JZM450) dan pompa beton berkekuatan tinggi hingga 50 m³/h dalam satu unit bergerak mandiri. Mampu menyalurkan cor beton hingga jarak 200 meter mendatar dan 50 meter vertikal, ditenagai mesin Weichai, pompa hidrolik Kawasaki, dan sistem otomasi Siemens PLC.",
    specifications: {
      "Model": "DMP - 50",
      "Kapasitas Maksimal Mixer / Adukan": "20 m³/h",
      "Kapasitas Maksimal Pompa Beton": "50 m³/h",
      "Tekanan Maksimal Pompa Beton": "10 Mpa",
      "Bentuk Katup Distribusi": "Tabung S dengan katup",
      "Jarak Terjauh Pompa (Mendatar / Tegak Lurus)": "200 m / 50 m",
      "Ukuran Pipa pada Pompa": "Φ230/800 mm",
      "Tabung Oli Utama": "Φ100/70 mm",
      "Kapasitas Hopper / Tinggi Hopper": "0.6 m³ / 1050 mm",
      "Ukuran Maksimal Agregat": "Batu split: 40 mm, Kerikil: 30 mm",
      "Tekanan dalam Sistem": "28 Mpa",
      "Mixer Hopper": "650 L",
      "Pump Hopper": "750 L",
      "Mixer": "Drum Mixer, JZM450",
      "Tenaga Mixer": "Hidrolik dari Mesin",
      "Pompa Air": "Hidrolik",
      "Kapasitas Tangki Hidrolik": "170 L",
      "Dimensi (P × L × T)": "5300 × 2150 × 2700 mm",
      "Berat Unit": "4600 kg",
      "PLC": "Siemens",
      "Kelistrikan": "Schneider",
      "Pompa Utama": "Kawasaki",
      "Ukuran Ban": "7.50-16",
      "Merek Mesin": "Weichai",
      "Ukuran Piston Silinder": "230 mm",
    },
    specGroups: [
      {
        group: "Kapasitas Pompa & Adukan (Pumping & Mixing)",
        items: [
          { label: "Model Unit", value: "DMP - 50" },
          { label: "Kapasitas Maksimal Pompa Beton", value: "50 m³/h" },
          { label: "Kapasitas Maksimal Mixer / Adukan", value: "20 m³/h" },
          { label: "Tekanan Maksimal Pompa Beton", value: "10 Mpa" },
          { label: "Jarak Terjauh Pompa (Mendatar / Tegak Lurus)", value: "200 m / 50 m" },
          { label: "Ukuran Maksimal Agregat", value: "Batu split: 40 mm, Kerikil: 30 mm" },
        ],
      },
      {
        group: "Sistem Mekanikal & Drum Mixer",
        items: [
          { label: "Tipe Mixer", value: "Drum Mixer, JZM450" },
          { label: "Tenaga Mixer", value: "Hidrolik dari Mesin" },
          { label: "Bentuk Katup Distribusi", value: "Tabung S dengan katup" },
          { label: "Ukuran Pipa pada Pompa", value: "Φ230/800 mm" },
          { label: "Ukuran Piston Silinder", value: "230 mm" },
          { label: "Mixer Hopper", value: "650 L" },
          { label: "Pump Hopper", value: "750 L" },
          { label: "Kapasitas Hopper / Tinggi Hopper", value: "0.6 m³ / 1050 mm" },
        ],
      },
      {
        group: "Sistem Hidrolik & Pompa Utama",
        items: [
          { label: "Pompa Utama", value: "Kawasaki" },
          { label: "Tekanan dalam Sistem", value: "28 Mpa" },
          { label: "Tabung Oli Utama", value: "Φ100/70 mm" },
          { label: "Kapasitas Tangki Hidrolik", value: "170 L" },
          { label: "Pompa Air", value: "Hidrolik" },
        ],
      },
      {
        group: "Mesin, Kelistrikan & Dimensi",
        items: [
          { label: "Merek Mesin", value: "Weichai" },
          { label: "Sistem Kontrol PLC", value: "Siemens" },
          { label: "Komponen Kelistrikan", value: "Schneider" },
          { label: "Dimensi (P × L × T)", value: "5300 × 2150 × 2700 mm" },
          { label: "Berat Unit", value: "4600 kg" },
          { label: "Ukuran Ban", value: "7.50-16" },
        ],
      },
    ],
    image:
      "/images/Content/1. Brand Guidelines/Brosur/Mixer Pump (2).jpeg",
    gallery: [
      "/images/Content/1. Brand Guidelines/Brosur/Mixer Pump (2).jpeg",
      "/images/Content/3. Product/Product Images/concrete mixer-2.jpeg",
      "/images/Content/3. Product/Product Images/concrete-mixer-3.jpeg",
      "/images/Content/3. Product/Product Images/concrete-mixer-4.jpeg",
      "/images/Content/3. Product/Product Images/Concrete Mixer with Pump/Diesel Concrete Mixer with Pump (1).jpeg",
      "/images/Content/3. Product/Product Images/Concrete Mixer with Pump/Diesel Concrete Mixer with Pump (2).jpeg",
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
      "Forklift segala medan Model HRTF-35 berpenggerak 4x4 kapasitas 3.5 ton dengan kemudi belakang yang diartikulasi.",
    description:
      "Rough Terrain Forklift 4x4 Model HRTF-35 dirancang khusus untuk mengangkat dan memindahkan material berat di medan proyek ekstrem berlumpur dan berbatu. Dilengkapi daya angkat 3500 kg, jangkauan ketinggian tiang 3000–6000 mm, ban off-road 23.5/70-60, sistem kemudi belakang yang diartikulasi, kabin ber-AC, dan kamera monitor.",
    specifications: {
      "Model": "HRTF-35",
      "Fitur Kemudi": "Kemudi Belakang yang diartikulasi",
      "Daya Angkat": "3500 kg",
      "Ketinggian Angkat (Mast)": "3000 - 6000 mm",
      "Berat Unit": "4500 - 4800 kg",
      "Kemampuan Menanjak": "≤ 20%",
      "Jenis Penggerak Roda": "Four wheel drive (4x4)",
      "Ukuran Ban": "23.5/70-60",
      "Jarak Lebar Garpu": "320 - 360 mm",
      "Jarak Roda Depan & Belakang": "2000 mm",
      "Radius Putar Balik Minimal": "3500 - 4000 mm",
      "Tipe Mesin": "490 Supercharge",
      "Tenaga Mesin": "36.8 - 58 kW",
      "Dimensi Keseluruhan": "3800 × 1850 × 2600 mm",
      "Fasilitas Kabin": "Dilengkapi AC Kabin & Kamera Monitor",
    },
    specGroups: [
      {
        group: "Kapasitas & Performa Angkat (Lifting & Load)",
        items: [
          { label: "Model Unit", value: "HRTF-35" },
          { label: "Daya Angkat", value: "3500 kg" },
          { label: "Ketinggian Angkat (Mast)", value: "3000 - 6000 mm" },
          { label: "Jarak Lebar Garpu", value: "320 - 360 mm" },
          { label: "Kemampuan Menanjak", value: "≤ 20%" },
          { label: "Radius Putar Balik Minimal", value: "3500 - 4000 mm" },
        ],
      },
      {
        group: "Sistem Penggerak & Kemudi (Drivetrain & Steering)",
        items: [
          { label: "Fitur Kemudi", value: "Kemudi Belakang yang diartikulasi" },
          { label: "Jenis Penggerak Roda", value: "Four wheel drive (4x4)" },
          { label: "Ukuran Ban", value: "23.5/70-60 Offroad" },
          { label: "Jarak Roda Depan & Belakang", value: "2000 mm" },
        ],
      },
      {
        group: "Mesin, Bobot & Dimensi (Engine & Dimensions)",
        items: [
          { label: "Tipe Mesin", value: "490 Supercharge" },
          { label: "Tenaga Mesin", value: "36.8 - 58 kW" },
          { label: "Berat Unit", value: "4500 - 4800 kg" },
          { label: "Dimensi Keseluruhan (P × L × T)", value: "3800 × 1850 × 2600 mm" },
        ],
      },
      {
        group: "Kenyamanan & Keamanan Operator (Cabin & Safety)",
        items: [
          { label: "Fasilitas Kabin", value: "AC Kabin & Kamera Monitor" },
          { label: "Proteksi Kabin", value: "Kanopi ROPS / FOPS Heavy-Duty" },
        ],
      },
    ],
    image:
      "/images/Content/3. Product/Product Images/rough terrain-2.jpeg",
    gallery: [
      "/images/Content/3. Product/Product Images/rough terrain-2.jpeg",
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
      "Mobile batching plant terpadu drum 5 m³ & kapasitas keluar beton 3,5 m³ (20 m³/jam) dengan transmisi ZL-280.",
    description:
      "Self Loading Concrete Mixer Model-SLDM - 3500 adalah mobile batching plant yang mengintegrasikan 3 fungsi alat konstruksi menjadi 1 unit: Batching Plant, Truck Mixer, dan Wheel Loader. Dilengkapi sistem penimbangan di kabin, kapasitas tangki mixer 5 m³ dengan output 3,5 m³ beton per batch (20 m³/jam), mesin Yuchai 4108 Turbo-charged 91 kW, serta sistem penggerak Torque converter 4 Maju + 4 Mundur yang cukup dioperasikan oleh 1 orang operator.",
    specifications: {
      "Model": "Model-SLDM - 3500",
      "Tangki Mixer": "5 m³",
      "Kapasitas Keluar Beton": "3.5 m³ (20 m³/hour)",
      "Putaran Tangki Mixer": "13 - 20 rpm",
      "Dimensi Keseluruhan": "7730 × 2700 × 4180 mm",
      "Jarak Sumbu Roda Depan & Belakang": "2650 mm",
      "Berat Unit": "7661 kg",
      "Bentuk Penggerak": "Torque converter",
      "Kecepatan Maksimal": "30 km/h",
      "Kemampuan Menanjak": "30°",
      "Radius Putar Balik": "5300 mm",
      "Jarak Terkecil Unit ke Tanah": "380 mm",
      "Tipe Mesin": "Yuchai 4108 Turbo-charged",
      "Tenaga Mesin": "91 kW",
      "Tipe Transmisi": "ZL-280 power shift gear box",
      "Perpindahan Gigi": "4 Maju + 4 Mundur",
      "Tangki Bahan Bakar": "75 Liter",
      "Tangki Hidrolik": "75 Liter",
      "Oli": "16 Liter",
      "Jenis Peredam": "HJ80-43",
      "Jenis Pompa": "CBGQ 2040/2080",
      "Jenis Motor": "USA SUNNY 56",
      "Tangki Air": "620 Liter",
      "Aliran Air ke Mixer": "Jeda waktu otomatis",
      "Monitor Weighing System": "Yes",
      "Camera Monitor": "2 Sides",
    },
    specGroups: [
      {
        group: "Tangki Mixer (Mixer Drum)",
        items: [
          { label: "Model", value: "Model-SLDM - 3500" },
          { label: "Tangki Mixer", value: "5 m³" },
          { label: "Kapasitas Keluar Beton", value: "3.5 m³ (20 m³/hour)" },
          { label: "Putaran Tangki Mixer", value: "13 - 20 rpm" },
        ],
      },
      {
        group: "Kendaraan & Dimensi (Vehicle & Dimension)",
        items: [
          { label: "Dimensi Keseluruhan", value: "7730 × 2700 × 4180 mm" },
          { label: "Jarak Sumbu Roda Depan & Belakang", value: "2650 mm" },
          { label: "Berat Unit", value: "7661 kg" },
          { label: "Bentuk Penggerak", value: "Torque converter" },
          { label: "Kecepatan Maksimal", value: "30 km/h" },
          { label: "Kemampuan Menanjak", value: "30°" },
          { label: "Radius Putar Balik", value: "5300 mm" },
          { label: "Jarak Terkecil Unit ke Tanah", value: "380 mm" },
        ],
      },
      {
        group: "Mesin Diesel & Transmisi (Engine & Gearbox)",
        items: [
          { label: "Tipe Mesin", value: "Yuchai 4108 Turbo-charged" },
          { label: "Tenaga Mesin", value: "91 kW" },
          { label: "Tipe Transmisi", value: "ZL-280 power shift gear box" },
          { label: "Perpindahan Gigi", value: "4 Maju + 4 Mundur" },
        ],
      },
      {
        group: "Kapasitas Isi Ulang & Sistem Hidrolik (Refill & Hydraulic)",
        items: [
          { label: "Tangki Bahan Bakar", value: "75 Liter" },
          { label: "Tangki Hidrolik", value: "75 Liter" },
          { label: "Oli", value: "16 Liter" },
          { label: "Jenis Peredam", value: "HJ80-43" },
          { label: "Jenis Pompa", value: "CBGQ 2040/2080" },
          { label: "Jenis Motor", value: "USA SUNNY 56" },
        ],
      },
      {
        group: "Pasokan Air & Fitur Kabin (Water Supply & Cabin System)",
        items: [
          { label: "Tangki Air", value: "620 Liter" },
          { label: "Aliran Air ke Mixer", value: "Jeda waktu otomatis" },
          { label: "Monitor Weighing System", value: "Yes" },
          { label: "Camera Monitor", value: "2 Sides" },
        ],
      },
    ],
    image:
      "/images/Content/3. Product/Product Images/self loading mixer 3.5-2.jpeg",
    gallery: [
      "/images/Content/3. Product/Product Images/self loading mixer 3.5-2.jpeg",
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
      "Mobile batching plant 4x4 tangki 6,5 m³ & kapasitas adukan beton 4,5 m³/batch dengan kabin belakang dan timbangan digital.",
    description:
      "Self Loading Concrete Mixer Model-SLDM - 4000 adalah mobile batching plant terpadu yang menggabungkan Batching Plant, Truck Mixer, dan Wheel Loader dalam satu unit heavy-duty 4x4. Dilengkapi kapasitas tangki mixer 6,5 m³ dengan kapasitas adukan beton 4,5 m³ per batch, mesin Yuchai 4108 supercharged 92 kW, poros penggerak 2.5T wheel side deceleration bridge ban dobel, timbangan kabin terkalibrasi, serta 2 sisi monitor kamera pengawas.",
    specifications: {
      "Model": "Model-SLDM - 4000",
      "Kapasitas Tangki": "6.5 m³",
      "Kapasitas Adukan Beton": "4.5 m³",
      "Kecepatan Putaran Tangki Mixer": "≥15 (rpm 1600)",
      "Ukuran Unit":
        "7150 × 2640 × 4330 mm (Arm terangkat) / 8580 × 2640 × 3330 mm (Arm dibawah)",
      "Jarak Sumbu Roda Depan & Belakang": "3200 mm",
      "Berat Unit": "9200 kg",
      "Tipe Mesin": "Yuchai 4108 supercharged (4-cylinder)",
      "Tenaga": "92 KW",
      "Kapasitas Oli Mesin": "12 L",
      "Kapasitas Oli Transmisi": "16-18 L",
      "Gearbox": "315 separated type",
      "Gearbox Oil": "10 L",
      "Poros Penggerak": "2.5T Wheel side deceleration bridge",
      "Ukuran Ban": "16/70 R22.5 Ban Dobel",
      "Kapasitas Bucket": "0.65 m³",
      "Rasio Reduksi": "1:103",
      "Jenis Peredam": "Dibuat di china",
      "Kecepatan": "30 km/h",
      "Jenis Penggerak Roda": "4x4",
      "Tangki Bahan Bakar": "234 L",
      "Tangki Air": "900 L",
      "Pompa": "135L + 26L",
      "Jarak Terkecil Unit ke Tanah": "350 mm",
      "Radius Putar Balik": "4500 mm",
      "Monitor Timbangan": "Yes",
      "Monitor Kamera": "2 Sisi",
    },
    specGroups: [
      {
        group: "Kapasitas & Kinerja Mixer (Mixer Drum)",
        items: [
          { label: "Model", value: "Model-SLDM - 4000" },
          { label: "Kapasitas Tangki", value: "6.5 m³" },
          { label: "Kapasitas Adukan Beton", value: "4.5 m³" },
          { label: "Kecepatan Putaran Tangki Mixer", value: "≥15 (rpm 1600)" },
          { label: "Kapasitas Bucket", value: "0.65 m³" },
          { label: "Rasio Reduksi", value: "1:103" },
          { label: "Jenis Peredam", value: "Dibuat di china" },
        ],
      },
      {
        group: "Dimensi & Bobot Unit (Dimensions & Weight)",
        items: [
          {
            label: "Ukuran Unit (Arm Terangkat)",
            value: "7150 × 2640 × 4330 mm",
          },
          {
            label: "Ukuran Unit (Arm Dibawah)",
            value: "8580 × 2640 × 3330 mm",
          },
          { label: "Jarak Sumbu Roda Depan & Belakang", value: "3200 mm" },
          { label: "Berat Unit", value: "9200 kg" },
          { label: "Jarak Terkecil Unit ke Tanah", value: "350 mm" },
          { label: "Radius Putar Balik", value: "4500 mm" },
        ],
      },
      {
        group: "Mesin, Transmisi & Penggerak (Engine & Drivetrain)",
        items: [
          { label: "Tipe Mesin", value: "Yuchai 4108 supercharged (4-cylinder)" },
          { label: "Tenaga", value: "92 KW" },
          { label: "Gearbox", value: "315 separated type" },
          { label: "Poros Penggerak", value: "2.5T Wheel side deceleration bridge" },
          { label: "Jenis Penggerak Roda", value: "4x4" },
          { label: "Ukuran Ban", value: "16/70 R22.5 Ban Dobel" },
          { label: "Kecepatan", value: "30 km/h" },
        ],
      },
      {
        group: "Kapasitas Tangki & Pelumas (Fluids & Refill)",
        items: [
          { label: "Tangki Bahan Bakar", value: "234 L" },
          { label: "Tangki Air", value: "900 L" },
          { label: "Pompa", value: "135L + 26L" },
          { label: "Kapasitas Oli Mesin", value: "12 L" },
          { label: "Kapasitas Oli Transmisi", value: "16-18 L" },
          { label: "Gearbox Oil", value: "10 L" },
        ],
      },
      {
        group: "Sistem Monitor Kabin (Cabin Monitor)",
        items: [
          { label: "Monitor Timbangan", value: "Yes" },
          { label: "Monitor Kamera", value: "2 Sisi" },
        ],
      },
    ],
    image:
      "/images/Content/3. Product/Product Images/self loading mixer 4-2.jpeg",
    gallery: [
      "/images/Content/3. Product/Product Images/self loading mixer 4-2.jpeg",
      "/images/Content/3. Product/Product Images/self-loading 4-3.jpeg",
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
