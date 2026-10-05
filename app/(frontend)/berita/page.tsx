import { client } from "../../../sanity/lib/client";
import { urlFor } from "../../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 0; // Disable static caching for live preview

export const metadata = {
  title: "Berita & Pengumuman - PAUD Hidayah",
  description: "Dapatkan informasi, berita, dan pengumuman terbaru dari PAUD Hidayah.",
};

async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..120], "") + "..."
  }`;
  
  return await client.fetch(query);
}

export default async function BeritaPage() {
  const posts = await getPosts();

  // Function to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen pb-20 relative overflow-hidden">
        {/* Floating Decorative Blobs */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-[#FCD116]/15 rounded-full blur-[100px] translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#188B48]/10 rounded-full blur-[80px] -translate-x-1/3 pointer-events-none"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-[#FCD116]/10 rounded-full blur-[60px] pointer-events-none"></div>
      <div className="max-w-[1200px] mx-auto px-6">
        
        

        {/* Posts Grid */}
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link href={`/berita/${post.slug?.current}`} key={post._id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:border-[#188B48]/30">
                {/* Image */}
                <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#EAF3EF] text-[#188B48]/40">
                      <span className="material-symbols-outlined text-[48px]">image</span>
                    </div>
                  )}
                  {/* Date Badge */}
                  {post.publishedAt && (
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-sm font-bold text-[#188B48] shadow-sm">
                      {formatDate(post.publishedAt)}
                    </div>
                  )}
                </div>
                
                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#188B48] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-1">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center text-[#188B48] font-semibold text-sm group-hover:gap-2 transition-all">
                    Baca Selengkapnya
                    <span className="material-symbols-outlined text-[18px] ml-1">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-3xl border border-gray-100 shadow-sm">
            <span className="material-symbols-outlined text-[64px] text-gray-300 mb-4">article</span>
            <h3 className="text-xl font-bold text-gray-500">Belum ada berita yang dipublikasikan.</h3>
            <p className="text-gray-400 mt-2">Nantikan informasi dan kabar terbaru dari kami.</p>
          </div>
        )}

      </div>
    </main>
  );
}
