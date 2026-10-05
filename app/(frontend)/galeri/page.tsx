import { client } from "../../../sanity/lib/client";
import GalleryGrid from "../../../components/GalleryGrid";
import { urlFor } from "../../../sanity/lib/image";

export const revalidate = 0; // Disable static caching for live preview

export const metadata = {
  title: "Galeri - PAUD Hidayah",
  description: "Dokumentasi kegiatan dan momen seru di PAUD Hidayah.",
};

async function getGalleryData() {
  const query = `*[_type == "gallery"] | order(publishedAt desc) {
    _id,
    title,
    description,
    image
  }`;
  
  const galleries = await client.fetch(query);
  
  // Format the items to resolve the Image URL safely
  return galleries.map((item: any) => ({
    _id: item._id,
    title: item.title,
    description: item.description,
    imageUrl: item.image ? urlFor(item.image).url() : '/gedung-tk.jpg',
  }));
}

export default async function GalleryPage() {
  const items = await getGalleryData();

  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen pb-20 relative overflow-hidden">
        {/* Floating Decorative Blobs */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-[#FCD116]/15 rounded-full blur-[100px] translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#188B48]/10 rounded-full blur-[80px] -translate-x-1/3 pointer-events-none"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-[#FCD116]/10 rounded-full blur-[60px] pointer-events-none"></div>
      
      {/* Full Bleed Wavy Hero */}
      <div className="w-full bg-[#188B48] pt-32 pb-20 md:pt-40 md:pb-24 text-center relative overflow-hidden">
        
        
        
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white border-white/30 font-bold text-sm mb-6 border">
            <span className="material-symbols-outlined text-[18px]">photo_library</span>
            <span>GALERI FOTO</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-sm">
            Momen Ceria Anak Hidayah
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg leading-relaxed">
            Intip keseruan aktivitas belajar, bermain, dan eksplorasi para pangeran dan putri cilik PAUD Hidayah.
          </p>
        </div>
      </div>
      {/* Wave Divider */}
      <div className="w-full overflow-hidden -mt-1 bg-[#FDFCF8] mb-12 relative z-20">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
          <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#188B48"/>
        </svg>
      </div>
      <div className="max-w-[1200px] mx-auto px-6">
        
        

        {/* Gallery Grid Client Component */}
        <GalleryGrid items={items} />

      </div>
    </main>
  );
}
