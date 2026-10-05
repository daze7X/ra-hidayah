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
    <main className="w-full bg-[#FDFCF8] min-h-screen pt-28 pb-20">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Modern Gradient Hero */}
        <div className="w-full rounded-3xl bg-gradient-to-br from-[#188B48] to-[#126b37] px-6 py-16 md:py-20 text-center mb-16 shadow-lg border border-[#188B48] relative overflow-hidden">
          {/* Decorative shapes */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-black opacity-5 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white font-bold text-sm mb-6 border border-white/30">
              <span className="material-symbols-outlined text-[18px]">newspaper</span>
              <span>BERITA & PENGUMUMAN</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-sm">
              Kabar Terbaru
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg leading-relaxed">
              Ikuti perkembangan terbaru, kegiatan mendatang, dan informasi penting lainnya seputar PAUD Hidayah.
            </p>
          </div>
        </div>

        {/* Posts Grid */}
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post: any) => (
              <Link href={`/berita/${post.slug?.current}`} key={post._id} className="group flex flex-col bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                {/* Image */}
                <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
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
