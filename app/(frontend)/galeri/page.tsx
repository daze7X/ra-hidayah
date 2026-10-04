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
        
        {/* Page Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#188B48]/10 text-[#188B48] font-bold text-sm mb-4">
            <span className="material-symbols-outlined text-[18px]">collections_bookmark</span>
            <span>GALERI KEGIATAN</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#188B48] mb-4">
            Momen Keseruan Kami
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Intip berbagai kegiatan seru, kreatif, dan inspiratif yang dilakukan oleh anak-anak hebat di PAUD Hidayah setiap harinya.
          </p>
          <div className="w-20 h-1.5 bg-[#FCD116] rounded-full mx-auto mt-6"></div>
        </div>

        {/* Gallery Grid Client Component */}
        <GalleryGrid items={items} />

      </div>
    </main>
  );
}
