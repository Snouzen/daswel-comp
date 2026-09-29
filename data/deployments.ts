export type DeploymentCategory =
  | "Semua"
  | "Self Loading Mixer"
  | "Concrete Mixer with Pump"
  | "Backhoe Loader"
  | "Rough Terrain Forklift 4x4";

export type DeploymentSector =
  | "Infrastruktur & Transportasi"
  | "Gedung & Fasilitas Publik"
  | "Pertambangan & Energi"
  | "Industri & Precast"
  | "Pariwisata & Resort";

export interface DeploymentProject {
  id: string;
  title: string;
  location: string;
  productName: string;
  productSlugs: string[];
  category: "Self Loading Mixer" | "Concrete Mixer with Pump" | "Backhoe Loader" | "Rough Terrain Forklift 4x4";
  sector: DeploymentSector;
  image: string;
  featured?: boolean;
}

export const deploymentCategories: DeploymentCategory[] = [
  "Semua",
  "Self Loading Mixer",
  "Concrete Mixer with Pump",
  "Backhoe Loader",
  "Rough Terrain Forklift 4x4",
];

export const deploymentStats = {
  totalProjects: "70+",
  totalRegions: "25+",
  activeUnits: "5 Lini",
  provenExtreme: "100%",
};

export const deploymentsData: DeploymentProject[] = [
  {
    "id": "dep-001",
    "title": "Proyek Gedung Dinas Perhubungan",
    "location": "Penajam, Kalimantan Timur",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/Self Loading Mixer 10.jpeg",
    "featured": true
  },
  {
    "id": "dep-002",
    "title": "Pabrik Beton Instan",
    "location": "Jati Asih, Bekasi",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Industri & Precast",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/Self Loading Mixer 11.jpeg",
    "featured": false
  },
  {
    "id": "dep-003",
    "title": "Proyek Pertamina",
    "location": "Ulubelu, Lampung",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Pertambangan & Energi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/Self Loading Mixer 12.jpeg",
    "featured": true
  },
  {
    "id": "dep-004",
    "title": "Proyek Pertambangan",
    "location": "PT. Titan Palembang",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Pertambangan & Energi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/Self Loading Mixer 13.jpeg",
    "featured": false
  },
  {
    "id": "dep-005",
    "title": "Proyek Pembangunan Gedung Bupati Lima Puluh",
    "location": "Sumatera Utara",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/Self Loading Mixer 14.jpeg",
    "featured": true
  },
  {
    "id": "dep-006",
    "title": "Proyek Gedung Dinas Perhubungan",
    "location": "Medan",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/Self Loading Mixer 15.jpeg",
    "featured": false
  },
  {
    "id": "dep-007",
    "title": "Proyek Precast",
    "location": "Freeport Timika",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Pertambangan & Energi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/Self Loading Mixer 3.jpeg",
    "featured": true
  },
  {
    "id": "dep-008",
    "title": "Proyek Jalan Pulau Bacan",
    "location": "Maluku Utara",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/Self Loading Mixer 4.jpeg",
    "featured": false
  },
  {
    "id": "dep-009",
    "title": "Proyek Pertamina",
    "location": "Cilacap",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Pertambangan & Energi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/Self Loading Mixer 5.jpeg",
    "featured": false
  },
  {
    "id": "dep-010",
    "title": "Proyek Pembangunan Resort dan Hotel",
    "location": "Ubud, Bali",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Pariwisata & Resort",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/Self Loading Mixer 6.jpeg",
    "featured": false
  },
  {
    "id": "dep-011",
    "title": "Proyek Jalan",
    "location": "Larantuka",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/Self Loading Mixer 9.jpeg",
    "featured": false
  },
  {
    "id": "dep-012",
    "title": "Proyek Jalan",
    "location": "Maumere",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/Self Loading Mixer.jpeg",
    "featured": false
  },
  {
    "id": "dep-013",
    "title": "Proyek Dermaga",
    "location": "Jailolo, Maluku Utara",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/Self Loadingn Mixer 7.jpeg",
    "featured": false
  },
  {
    "id": "dep-014",
    "title": "Proyek Dermaga",
    "location": "Luwuk",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/WhatsApp Image 2025-04-24 at 15.47.06 (2).jpeg",
    "featured": false
  },
  {
    "id": "dep-015",
    "title": "Proyek Jalan",
    "location": "Luwuk",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/WhatsApp Image 2025-04-24 at 15.55.42 (1).jpeg",
    "featured": false
  },
  {
    "id": "dep-016",
    "title": "Proyek Gedung",
    "location": "Luwuk",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/WhatsApp Image 2025-04-24 at 16.00.20.jpeg",
    "featured": false
  },
  {
    "id": "dep-017",
    "title": "Proyek Pembangunan Pabrik Kelapa Sawit",
    "location": "Jambi",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Pertambangan & Energi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/WhatsApp Image 2025-04-24 at 16.02.12.jpeg",
    "featured": false
  },
  {
    "id": "dep-018",
    "title": "Proyek Perluasan Bandara",
    "location": "Tanah merah Merauke",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (1).jpeg",
    "featured": true
  },
  {
    "id": "dep-019",
    "title": "Proyek Jembatan",
    "location": "Sarolangun, Jambi",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (10).jpeg",
    "featured": false
  },
  {
    "id": "dep-020",
    "title": "Proyek Jembatan",
    "location": "Lampung",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (11).jpeg",
    "featured": false
  },
  {
    "id": "dep-021",
    "title": "Pabrik Precast",
    "location": "PT. Amha Bandung",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Industri & Precast",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (12).jpeg",
    "featured": false
  },
  {
    "id": "dep-022",
    "title": "Pabrik Precast",
    "location": "Ciamis",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Industri & Precast",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (13).jpeg",
    "featured": false
  },
  {
    "id": "dep-023",
    "title": "Pabrik Precast",
    "location": "Bojonegoro",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Industri & Precast",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (14).jpeg",
    "featured": false
  },
  {
    "id": "dep-024",
    "title": "Proyek Bendungan",
    "location": "Bengkulu",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (15).jpeg",
    "featured": false
  },
  {
    "id": "dep-025",
    "title": "Proyek Bendungan",
    "location": "Manokwari",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (16).jpeg",
    "featured": false
  },
  {
    "id": "dep-026",
    "title": "Proyek Rumah Sakit Umum",
    "location": "Bintuni",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (17).jpeg",
    "featured": false
  },
  {
    "id": "dep-027",
    "title": "Proyek Jalan",
    "location": "Sangatta , Kalimantan Timur",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (18).jpeg",
    "featured": false
  },
  {
    "id": "dep-028",
    "title": "Proyek Jalan Perkebunan Sawit",
    "location": "Tanah bumbu Kalimantan Timur",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Pertambangan & Energi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (19).jpeg",
    "featured": false
  },
  {
    "id": "dep-029",
    "title": "Proyek Perkebunan Sawit",
    "location": "Samarinda",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Pertambangan & Energi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (2).jpeg",
    "featured": true
  },
  {
    "id": "dep-030",
    "title": "Proyek Jalan",
    "location": "Sumba, NTT",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (20).jpeg",
    "featured": false
  },
  {
    "id": "dep-031",
    "title": "Proyek Jalan",
    "location": "Dili, Timor Leste",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (21).jpeg",
    "featured": true
  },
  {
    "id": "dep-032",
    "title": "Proyek Jalan",
    "location": "Oecusse, Timor Leste",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (22).jpeg",
    "featured": false
  },
  {
    "id": "dep-033",
    "title": "Proyek Rumah Sakit Umum",
    "location": "Sanggau, Pontianak",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (23).jpeg",
    "featured": false
  },
  {
    "id": "dep-034",
    "title": "Proyek di Pertambangan Gas",
    "location": "PT. Lighton",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Pertambangan & Energi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (24).jpeg",
    "featured": false
  },
  {
    "id": "dep-035",
    "title": "Proyek Jalan",
    "location": "Muara teweh",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (25).jpeg",
    "featured": false
  },
  {
    "id": "dep-036",
    "title": "Pabrik Precast",
    "location": "Weda, Maluku",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Industri & Precast",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (26).jpeg",
    "featured": false
  },
  {
    "id": "dep-037",
    "title": "Proyek Jembatan",
    "location": "Xibit, Papua",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (27).jpeg",
    "featured": false
  },
  {
    "id": "dep-038",
    "title": "Pabrik Precast",
    "location": "Tangerang",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Industri & Precast",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (3).jpeg",
    "featured": false
  },
  {
    "id": "dep-039",
    "title": "Pabrik Precast",
    "location": "Bone, Sulawesi",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Industri & Precast",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (4).jpeg",
    "featured": false
  },
  {
    "id": "dep-040",
    "title": "Proyek Jalan",
    "location": "Morowali, Sulawesi tenggara",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (5).jpeg",
    "featured": false
  },
  {
    "id": "dep-041",
    "title": "Proyek Mess dan Kantor Karyawan",
    "location": "PT. Adaro Muara Tuhup Kalimantan Timur",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Pertambangan & Energi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (6).jpeg",
    "featured": true
  },
  {
    "id": "dep-042",
    "title": "Proyek Hotel Santika",
    "location": "Garut",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Pariwisata & Resort",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (7).jpeg",
    "featured": true
  },
  {
    "id": "dep-043",
    "title": "Proyek Jalan",
    "location": "Manokwari",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (8).jpeg",
    "featured": false
  },
  {
    "id": "dep-044",
    "title": "Proyek Gedung Dishub",
    "location": "Sarolangun, Jambi",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/slm (9).jpeg",
    "featured": false
  },
  {
    "id": "dep-045",
    "title": "Proyek Terminal",
    "location": "Bangkalan Madura",
    "productName": "Self Loading Concrete Mixer",
    "productSlugs": [
      "self-loading-mixer-3-5",
      "self-loading-mixer-4"
    ],
    "category": "Self Loading Mixer",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Self Loading Mixer/Self Loading Mixer 10.jpeg",
    "featured": false
  },
  {
    "id": "dep-046",
    "title": "Proyek Pembangunan Ruko",
    "location": "Muntok, Bangka",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/Concrete Mixer with Pump 1.jpeg",
    "featured": false
  },
  {
    "id": "dep-047",
    "title": "Proyek Pembangunan Resort",
    "location": "Pulau Seribu",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Pariwisata & Resort",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/Concrete Mixer with Pump 2.jpeg",
    "featured": false
  },
  {
    "id": "dep-048",
    "title": "Proyek Rumah Sakit Umum 4 lantai",
    "location": "Muara dua, Palembang",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/Concrete Mixer with Pump 3.jpeg",
    "featured": false
  },
  {
    "id": "dep-049",
    "title": "Proyek Hotel Vega Sorong 8 lantai",
    "location": "Sorong, Papua",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Pariwisata & Resort",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/Mixer Pump.jpeg",
    "featured": true
  },
  {
    "id": "dep-050",
    "title": "Proyek Bendungan",
    "location": "Bengkulu",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/WhatsApp Image 2025-04-14 at 13.52.34 (1).jpeg",
    "featured": false
  },
  {
    "id": "dep-051",
    "title": "Proyek Gedung Bupati",
    "location": "Asahan, Sumatera Utara",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/WhatsApp Image 2025-04-14 at 13.52.34.jpeg",
    "featured": true
  },
  {
    "id": "dep-052",
    "title": "Proyek Dermaga",
    "location": "Pulau Sedanau Natuna",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/WhatsApp Image 2025-04-14 at 13.52.35 (1).jpeg",
    "featured": true
  },
  {
    "id": "dep-053",
    "title": "Proyek Gedung Bea Cukai",
    "location": "Badau, Kalimantan Barat",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/WhatsApp Image 2025-04-14 at 13.52.35 (2).jpeg",
    "featured": false
  },
  {
    "id": "dep-054",
    "title": "Proyek Gudang",
    "location": "Pontianak",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Industri & Precast",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/WhatsApp Image 2025-04-14 at 13.52.35 (3).jpeg",
    "featured": false
  },
  {
    "id": "dep-055",
    "title": "Proyek Sekolah",
    "location": "Sangatta, Kalimantan Timur",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/WhatsApp Image 2025-04-14 at 13.52.35.jpeg",
    "featured": false
  },
  {
    "id": "dep-056",
    "title": "Proyek Mess dan Kantor Karyawan",
    "location": "PT. Adaro Muara Tuhup Kalimantan Timur",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Pertambangan & Energi",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/WhatsApp Image 2025-04-14 at 13.52.36 (1).jpeg",
    "featured": true
  },
  {
    "id": "dep-057",
    "title": "Proyek Gedung Gereja",
    "location": "Merauke",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/WhatsApp Image 2025-04-14 at 13.52.36 (2).jpeg",
    "featured": true
  },
  {
    "id": "dep-058",
    "title": "Proyek Resort",
    "location": "Finns Beach 2 Bali",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Pariwisata & Resort",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/WhatsApp Image 2025-04-14 at 13.52.36.jpeg",
    "featured": true
  },
  {
    "id": "dep-059",
    "title": "Proyek Hotel Loyd",
    "location": "Legian, Bali",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Pariwisata & Resort",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/WhatsApp Image 2025-04-14 at 13.52.37 (1).jpeg",
    "featured": false
  },
  {
    "id": "dep-060",
    "title": "Proyek Resort",
    "location": "Nusa Lembongan",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Pariwisata & Resort",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/WhatsApp Image 2025-04-14 at 13.52.37 (2).jpeg",
    "featured": false
  },
  {
    "id": "dep-061",
    "title": "Proyek Resort",
    "location": "Pecatu",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Pariwisata & Resort",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/WhatsApp Image 2025-04-14 at 13.52.37.jpeg",
    "featured": false
  },
  {
    "id": "dep-062",
    "title": "Proyek Pembangunan Rumah Sakit Umum",
    "location": "Nabire, Papua",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/WhatsApp Image 2025-04-14 at 13.52.38.jpeg",
    "featured": false
  },
  {
    "id": "dep-063",
    "title": "Proyek Rumah Sakit Umum",
    "location": "Maluku",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/WhatsApp Image 2025-04-24 at 15.51.05.jpeg",
    "featured": false
  },
  {
    "id": "dep-064",
    "title": "Proyek Dinding Bukit",
    "location": "Gorontalo",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/mixer pump (2).jpeg",
    "featured": false
  },
  {
    "id": "dep-065",
    "title": "Proyek Rumah Sakit Umum Muko-Muko",
    "location": "Bengkulu",
    "productName": "Concrete Mixer with Pump DMP-50",
    "productSlugs": [
      "concrete-mixer-with-pump"
    ],
    "category": "Concrete Mixer with Pump",
    "sector": "Gedung & Fasilitas Publik",
    "image": "/images/Content/7. After Sales/1. Training/Concrete Mixer with Pump/Concrete Mixer with Pump 1.jpeg",
    "featured": false
  },
  {
    "id": "dep-066",
    "title": "Proyek Tol Sicincin",
    "location": "Padang",
    "productName": "Backhoe Loader DBL3E",
    "productSlugs": [
      "backhoe-loader"
    ],
    "category": "Backhoe Loader",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Backhoe Loader/Backhoe Loader 1.jpg",
    "featured": true
  },
  {
    "id": "dep-067",
    "title": "Proyek Pertamina",
    "location": "Duri, Riau",
    "productName": "Backhoe Loader DBL3E",
    "productSlugs": [
      "backhoe-loader"
    ],
    "category": "Backhoe Loader",
    "sector": "Pertambangan & Energi",
    "image": "/images/Content/7. After Sales/1. Training/Backhoe Loader/Backhoe Loader 2.jpeg",
    "featured": true
  },
  {
    "id": "dep-068",
    "title": "Pembangunan Jalan di Perkebunan Sawit",
    "location": "Siak,Riau",
    "productName": "Backhoe Loader DBL3E",
    "productSlugs": [
      "backhoe-loader"
    ],
    "category": "Backhoe Loader",
    "sector": "Pertambangan & Energi",
    "image": "/images/Content/7. After Sales/1. Training/Backhoe Loader/Backhoe Loader 3.jpeg",
    "featured": false
  },
  {
    "id": "dep-069",
    "title": "Proyek Resort",
    "location": "Ubud, Bali",
    "productName": "Backhoe Loader DBL3E",
    "productSlugs": [
      "backhoe-loader"
    ],
    "category": "Backhoe Loader",
    "sector": "Pariwisata & Resort",
    "image": "/images/Content/7. After Sales/1. Training/Backhoe Loader/WhatsApp Image 2025-04-14 at 13.59.13.jpeg",
    "featured": false
  },
  {
    "id": "dep-070",
    "title": "Pembangunan Jalan",
    "location": "Dili, Timor Leste",
    "productName": "Backhoe Loader DBL3E",
    "productSlugs": [
      "backhoe-loader"
    ],
    "category": "Backhoe Loader",
    "sector": "Infrastruktur & Transportasi",
    "image": "/images/Content/7. After Sales/1. Training/Backhoe Loader/WhatsApp Image 2025-04-24 at 15.29.19.jpeg",
    "featured": true
  },
  {
    "id": "dep-071",
    "title": "Proyek Pembangunan Resort",
    "location": "Kintamani, Bali",
    "productName": "Backhoe Loader DBL3E",
    "productSlugs": [
      "backhoe-loader"
    ],
    "category": "Backhoe Loader",
    "sector": "Pariwisata & Resort",
    "image": "/images/Content/7. After Sales/1. Training/Backhoe Loader/WhatsApp Image 2025-04-24 at 15.29.20.jpeg",
    "featured": false
  },
  {
    "id": "dep-072",
    "title": "Proyek Pembangunan Pabrik",
    "location": "Samarinda",
    "productName": "Rough Terrain Forklift 4x4 HRTF-35",
    "productSlugs": [
      "rough-terrain-forklift-4x4"
    ],
    "category": "Rough Terrain Forklift 4x4",
    "sector": "Industri & Precast",
    "image": "/images/Content/7. After Sales/1. Training/Forklift/Forklift (2).jpeg",
    "featured": true
  },
  {
    "id": "dep-073",
    "title": "Proyek Pembangunan Pabrik",
    "location": "Samarinda",
    "productName": "Rough Terrain Forklift 4x4 HRTF-35",
    "productSlugs": [
      "rough-terrain-forklift-4x4"
    ],
    "category": "Rough Terrain Forklift 4x4",
    "sector": "Industri & Precast",
    "image": "/images/Content/7. After Sales/1. Training/Forklift/Forklift.jpeg",
    "featured": true
  }
];
