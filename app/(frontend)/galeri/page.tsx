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
      <div className="max-w-[1200px] mx-auto px-6">
        
        

        {/* Gallery Grid Client Component */}
        <GalleryGrid items={items} />

      </div>
    </main>
  );
}
