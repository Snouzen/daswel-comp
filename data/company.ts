export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  phone: string;
  whatsapp: string;
  whatsappUrl: string;
  email: string;
  operatingHours: string;
  mapEmbedUrl: string;
}

export const companyData: CompanyInfo = {
  name: "Daswel Company",
  tagline: "Solusi Manufaktur & Industri Terpercaya",
  description:
    "Daswel Company adalah penyedia solusi manufaktur dan peralatan industri berkualitas tinggi, berdedikasi untuk memberikan keunggulan dan keandalan operasional terbaik bagi mitra bisnis di seluruh Indonesia.",
  address: "Jl. Industri Raya No. 45, Kawasan Industri, Jakarta, Indonesia",
  phone: "+62 21 555-0199",
  whatsapp: "+62 812-3456-7890",
  whatsappUrl: "https://wa.me/6281234567890?text=Halo%20Daswel%20Company%2C%20saya%20ingin%20bertanya%20mengenai%20produk%20dan%20layanan%20Anda.",
  email: "info@daswel.com",
  operatingHours: "Senin - Jumat: 08:00 - 17:00 WIB",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126920.28311100375!2d106.75884961557022!3d-6.229569452445832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e49fe3ca05%3A0x301576d14feb9e0!2sJakarta!5e0!3m2!1sen!2sid!4v1620000000000!5m2!1sen!2sid",
};
