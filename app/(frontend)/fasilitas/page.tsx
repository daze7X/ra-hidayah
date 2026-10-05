import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import FasilitasGrid from "../../../components/FasilitasGrid";

export const revalidate = 0; // Disable static caching for live preview

export const metadata = {
  title: "Fasilitas - PAUD Hidayah",
  description: "Fasilitas lengkap dan memadai di PAUD Hidayah untuk menunjang tumbuh kembang anak.",
};

async function getFasilitasData() {
  const query = `*[_type == "fasilitas"] | order(order asc) {
    _id,
    title,
    description,
    icon,
    image
  }`;
  
  const fasilitas = await client.fetch(query);
  
  return fasilitas.map((item: any) => ({
    _id: item._id,
    title: item.title,
    description: item.description,
    icon: item.icon,
    imageUrl: item.image ? urlFor(item.image).url() : '/gedung-tk.jpg',
  }));
}

// Fallback hardcoded data just in case CMS is empty initially
const fallbackData = [
  {
    _id: "fb1",
    title: "Ruang Kelas Nyaman",
    description: "Ruang kelas yang didesain khusus, bersih, aman, dan dilengkapi dengan AC serta media pembelajaran interaktif.",
    icon: "meeting_room",
    imageUrl: "/gedung-tk.jpg"
  },
  {
    _id: "fb2",
    title: "Area Bermain (Indoor & Outdoor)",
    description: "Tempat bermain yang aman untuk melatih motorik kasar anak, bersosialisasi, dan mengeksplorasi lingkungan.",
    icon: "sports_handball",
    imageUrl: "/gedung-tk.jpg"
  },
  {
    _id: "fb3",
    title: "Alat Peraga Edukatif (APE)",
    description: "Koleksi mainan dan alat peraga edukatif yang lengkap untuk menstimulasi kecerdasan majemuk anak.",
    icon: "extension",
    imageUrl: "/gedung-tk.jpg"
  }
];

export default async function FasilitasPage() {
  let items = await getFasilitasData();
  
  // If no items in Sanity yet, use fallback data for design display
  if (!items || items.length === 0) {
    items = fallbackData;
  }

  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        
        
        {/* Modern Gradient Hero */}
        <div className="w-full rounded-3xl bg-gradient-to-br from-[#FCD116] to-[#ffda47] px-6 py-16 md:py-20 text-center mb-16 shadow-lg border border-yellow-300 relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black opacity-5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#188B48]/10 text-[#188B48] font-bold text-sm mb-6 border border-[#188B48]/20">
              <span className="material-symbols-outlined text-[18px]">museum</span>
              <span>FASILITAS SEKOLAH</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#188B48] mb-6 drop-shadow-sm">
              Sarana & Prasarana Ceria
            </h1>
            <p className="text-[#188B48]/80 max-w-2xl mx-auto text-lg leading-relaxed">
              Kami menyediakan lingkungan belajar yang aman, nyaman, dan mendukung eksplorasi tanpa batas bagi anak usia dini.
            </p>
          </div>
        </div>

          {/* Fasilitas Grid Component (Client Side for Interactive Popup) */}undefined