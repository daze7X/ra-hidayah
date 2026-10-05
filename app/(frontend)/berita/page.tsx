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

        )}

      </div>
    </main>
  );
}
