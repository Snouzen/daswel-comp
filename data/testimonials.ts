export interface TestimonialItem {
  id: string;
  company: string;
  project: string;
  author?: string;
  role?: string;
  bullets?: string[];
  content: string;
  rating?: number;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "cahaya-putri-agung",
    company: "PT. Cahaya Putri Agung",
    project: "Proyek Tol Sicincin",
    bullets: [
      "Backhoe Loader DBL3E Daswell ini memiliki kinerja yang tangguh, handal, efisien dan perawatan mudah.",
      "Sparepart selalu tersedia.",
      "PT. Daya Maestro Wellindo responnya sangat cepat, dan sangat membantu.",
    ],
    content:
      "Backhoe Loader DBL3E Daswell ini memiliki kinerja yang tangguh, handal, efisien dan perawatan mudah. Ketersediaan sparepart terjamin dan respon dari PT. Daya Maestro Wellindo sangat cepat serta sangat membantu kelancaran proyek.",
    rating: 5,
  },
  {
    id: "bintang-selatan-agung",
    company: "PT. Bintang Selatan Agung",
    project: "Proyek Pertamina",
    content:
      "Dengan alat Daswell Self Loading Mixer pekerjaan pengecoran menjadi lebih cepat, tidak memerlukan Batching Plant, bisa aduk dan timbang sendiri, waktu pengadukan material juga cukup cepat hanya dibutuhkan sekitar 30 menit saja, pelayanannya bagus, responnya cepat, dan sangat memuaskan.",
    rating: 5,
  },
  {
    id: "cipta-ecoenergi-operator",
    company: "PT. Cipta Ecoenergi",
    project: "Proyek Perkebunan Sawit di Samarinda",
    author: "Dian Tri Sutikno",
    role: "Operator Alat Berat",
    content:
      "Tim dari Daswell telah membantu kami mengatasi jika ada kerusakan pada alat, responsif dari tim Daswell sangat baik. Penanganan terhadap konsumen juga sangat baik. Mekanik yang bekerja pun mekanik yang profesional sehingga masalah dan kerusakan bisa diatasi dengan sangat baik.",
    rating: 5,
  },
  {
    id: "cipta-ecoenergi-supervisor",
    company: "PT. Cipta Ecoenergi",
    project: "Proyek Perkebunan Sawit di Samarinda",
    author: "Pengawas Lapangan",
    role: "Site Supervisor",
    content:
      "Dengan adanya alat seperti Daswell, pekerjaan di lapangan jauh lebih baik dan cepat, layanan yang diberikan pada teknisi dan tim terkait sangat responsif sehingga masalah cepat teratasi. Daswell adalah alat yang di rekomendasikan untuk membantu pengecoran jalan dan bangunan.",
    rating: 5,
  },
  {
    id: "esprezza-cipta-griya",
    company: "PT. Esprezza Cipta Griya",
    project: "Proyek Pelabuhan di Jailolo, Maluku",
    content:
      "Produk Daswell (Self Loading Mixer) salah satu solusi dalam membantu terciptanya pekerjaan yang tepat waktu dan tepat mutu.",
    rating: 5,
  },
  {
    id: "energi-perkasa-abadi",
    company: "PT. Energi Perkasa Abadi",
    project: "Proyek Jalan di Muara Teweh",
    content:
      "Kami beli unit Self Loading Concrete Mixer merk Daswell tahun 2022 sampai saat ini masih berfungsi dengan normal dan daya tahan unit nya tergolong bagus. Ketersediaan sparepart dari Daswell terjamin ada, dan opsi persamaan beberapa sparepart yang mudah didapat dipasaran. Sukses selalu buat Daswell.",
    rating: 5,
  },
  {
    id: "mukti-jaya-lestari",
    company: "PT. Mukti Jaya Lestari",
    project: "Proyek Pertamina",
    content:
      "Produk yang berkualitas tinggi dan tim teknisi yang responsif dapat meningkatkan efisiensi pekerjaan lapangan.",
    rating: 5,
  },
  {
    id: "papua-anugerah-sentosa",
    company: "CV. Papua Anugerah Sentosa",
    project: "Proyek RSUD",
    content:
      "Daya Maestro Wellindo selalu berkomitmen menyediakan peralatan yang representatif untuk membantu pembangunan di Indonesia dan menunjang semua aktifitas konstruksi. Tentunya tidak hanya penyediaan peralatan saja tapi juga sparepart dan teknisi yang selalu siap kapanpun konsumen butuhkan. Daya Maestro Wellindo jaya !!!",
    rating: 5,
  },
  {
    id: "lancar-abadi-konstruksi",
    company: "PT. Lancar Abadi Konstruksi",
    project: "Proyek Pembangunan Resort & Hotel di Bali",
    author: "Hugo GUISSE",
    role: "Entreprise Générale",
    content:
      "Nous avons acquis un self loader mixer de 3.5m3 que nous utilisons pour nos différents projets à Bali. Nous avons pu améliorer la qualité de nos constructions et contrôler l’usage des matériaux grace à notre Daswell. Merci encore à Mr Zaldy et toute son équipe.",
    rating: 5,
  },
];
