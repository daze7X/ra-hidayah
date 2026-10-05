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
    <main className="w-full bg-[#FDFCF8] min-h-screen pb-20 relative overflow-hidden">
        {/* Floating Decorative Blobs */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-[#FCD116]/15 rounded-full blur-[100px] translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#188B48]/10 rounded-full blur-[80px] -translate-x-1/3 pointer-events-none"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-[#FCD116]/10 rounded-full blur-[60px] pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-6">
        
        

        {/* Fasilitas Grid Component (Client Side for Interactive Popup) */}
        <FasilitasGrid items={items} />

        {/* Call to Action */}
        <div className="mt-16 bg-[#EAF3EF] rounded-3xl p-8 md:p-12 text-center border border-[#188B48]/10 flex flex-col items-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#188B48] mb-4">Ingin Melihat Langsung Fasilitas Kami?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Kunjungi PAUD Hidayah secara langsung pada jam operasional untuk melakukan tur keliling sekolah dan berkonsultasi dengan para guru kami.
          </p>
          <a href="https://wa.me/6282260654060" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#188B48] text-white font-bold hover:bg-[#126b36] hover:scale-105 transition-all shadow-lg">
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            Jadwalkan Kunjungan
          </a>
        </div>

      </div>
    </main>
  );
}
