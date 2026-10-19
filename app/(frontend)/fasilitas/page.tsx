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
  
  const fasilitas = await client.fetch(query, {}, { next: { revalidate: 0 } });
  
  return fasilitas.map((item: any) => ({
    _id: item._id,
    title: item.title,
    description: item.description,
    icon: item.icon,
    imageUrl: item.image ? urlFor(item.image).url() : '/fasilitas/gedung-paud_foto-gedung.webp',
  }));
}

// Fallback hardcoded data matching official school facilities
const fallbackData = [
  {
    _id: "fb1",
    title: "Gedung Sekolah & Halaman Asri",
    description: "Gedung sekolah PAUD Hidayah yang representatif, bersih, asri, dan berpagar aman keliling. Dilengkapi area halaman terbuka yang lapang untuk kegiatan upacara ceria, senam pagi, dan aktivitas fisik ananda.",
    icon: "apartment",
    imageUrl: "/fasilitas/gedung-paud_foto-gedung.webp"
  },
  {
    _id: "fb2",
    title: "Ruang Kelas & Sentra Belajar",
    description: "Ruang kelas berkarpet bersih, sejuk, dan tertata rapi dengan rak-rak stimulasi tematik serta pencahayaan alami yang melimpah. Dirancang khusus untuk mendukung model pembelajaran sentra yang aktif dan membahagiakan ananda.",
    icon: "meeting_room",
    imageUrl: "/fasilitas/ruang-kelas_img_9650.webp"
  },
  {
    _id: "fb3",
    title: "Area Permainan Outdoor Ceria",
    description: "Wahana bermain luar ruangan yang luas, aman, dan menyenangkan dengan ayunan, perosotan, jungkat-jungkit, dan area eksplorasi fisik. Mendukung perkembangan motorik kasar, kelincahan, dan sosialisasi ananda.",
    icon: "park",
    imageUrl: "/fasilitas/permainan-outdoor_img_7963.webp"
  },
  {
    _id: "fb4",
    title: "Alat Permainan Edukatif (APE) Lengkap",
    description: "Koleksi ragam alat permainan edukatif berstandar ramah anak seperti balok susun, puzzle logika, maze geometri, dan media sensorik motorik untuk menstimulasi kecerdasan kognitif, daya cipta, serta kreativitas ananda.",
    icon: "toys",
    imageUrl: "/fasilitas/ape_0d736e33-995e-44ab-97d7-3c889d01a2b9.webp"
  },
  {
    _id: "fb5",
    title: "Toilet Ramah Anak & Higienis",
    description: "Fasilitas sanitasi yang bersih, terawat, dan berukuran ramah balita untuk melatih kemandirian toilet training (kebiasaan bersih) serta adab bersuci secara Islami sejak dini.",
    icon: "wc",
    imageUrl: "/fasilitas/toilet_img_7978.webp"
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
      
      {/* Full Bleed Solid Green Hero */}
      <div className="w-full bg-[#188B48] pt-28 pb-14 md:pt-32 md:pb-18 text-center relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white border-white/30 font-bold text-sm mb-6 border">
            <span className="material-symbols-outlined text-[18px]">museum</span>
            <span>FASILITAS SEKOLAH</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-sm">
            Sarana &amp; Prasarana PAUD Hidayah
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg leading-relaxed">
            Kami menyediakan lingkungan belajar yang aman, nyaman, dan menyenangkan untuk mendukung tumbuh kembang ananda secara optimal.
          </p>
        </div>
      </div>
      {/* Wave Divider */}
      <div className="w-full overflow-hidden -mt-1 bg-[#FDFCF8] relative z-20 mb-12">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
          <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#188B48" />
        </svg>
      </div>
      <div className="max-w-[1200px] mx-auto px-6">
        
        

        {/* Fasilitas Grid Component (Client Side for Interactive Popup) */}
        <FasilitasGrid items={items} />

        {/* Call to Action */}
        <div className="mt-16 bg-[#EAF3EF] rounded-3xl p-8 md:p-12 text-center border border-[#188B48]/10 flex flex-col items-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FCD116] text-[#1b1c1a] font-bold text-xs uppercase tracking-wider mb-3">
            Kunjungan Sekolah
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#188B48] mb-4">Yuk, Kenali PAUD Hidayah Lebih Dekat!</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-4 leading-relaxed">
            Penasaran dengan fasilitas dan keseruan belajar di PAUD Hidayah? Ayah dan Bunda dipersilakan berkunjung pada jam operasional untuk melihat langsung lingkungan sekolah, mengenal program pembelajaran, dan berkonsultasi dengan guru kami.
          </p>
          <p className="text-[#188B48] font-bold text-base mb-8">
            Kami tunggu kehadiran Ayah dan Bunda!
          </p>
          <a 
            href="https://wa.me/6285187409266?text=Halo%20Admin%20PAUD%20Hidayah,%20saya%20ingin%20menjadwalkan%20kunjungan%20ke%20sekolah%20untuk%20melihat%20fasilitas%20dan%20konsultasi%20program%20pembelajaran." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#188B48] text-white font-bold hover:bg-[#126b36] hover:scale-105 transition-all shadow-lg"
          >
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            Jadwalkan Kunjungan Sekarang
          </a>
        </div>

      </div>
    </main>
  );
}
