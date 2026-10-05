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
    <main className="w-full bg-[#FDFCF8] min-h-screen pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Modern Gradient Hero */}
        <div className="w-full rounded-3xl bg-gradient-to-br from-[#188B48] to-[#126b37] px-6 py-16 md:py-20 text-center mb-16 shadow-lg border border-[#188B48] relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black opacity-5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-6 border border-white/30">
              <span className="material-symbols-outlined text-[18px]">photo_library</span>
              <span>GALERI FOTO</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-sm">
              Momen Ceria Anak Hidayah
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">
              Intip keseruan aktivitas belajar, bermain, dan eksplorasi para pangeran dan putri cilik PAUD Hidayah.
            </p>
          </div>
        </div>

        {/* Gallery Grid Client Component */}
        <GalleryGrid items={items} />

      </div>
    </main>
  );
}
