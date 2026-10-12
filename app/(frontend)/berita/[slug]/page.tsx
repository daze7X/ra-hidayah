import { client } from "../../../../sanity/lib/client";
import { urlFor } from "../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 0; // Disable caching for real-time preview

async function getPost(slug: string) {
  try {
    const query = `*[_type == "post" && slug.current == $slug][0] {
      title,
      publishedAt,
      mainImage,
      body,
      "authorName": author->name
    }`;
    
    return await client.fetch(query, { slug }, { next: { revalidate: 0 } });
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: "Berita Tidak Ditemukan - PAUD Hidayah" };
  
  return {
    title: `${post.title} - PAUD Hidayah`,
    description: post.title,
  };
}

export default async function BeritaDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  // Function to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen pt-32 pb-24 font-sans">
      <article className="max-w-[900px] mx-auto px-6">
        
        {/* Back Button */}
        <Link href="/berita" className="inline-flex items-center gap-2 text-[#188B48] font-bold hover:text-[#FCD116] transition-colors mb-8 bg-white px-5 py-2.5 rounded-full shadow-sm border border-gray-100 w-fit">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          Kembali ke Daftar Berita
        </Link>

        {/* Header */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#188B48]/10 text-[#188B48] text-xs font-bold uppercase tracking-wider mb-4 border border-[#188B48]/20">
            <span className="material-symbols-outlined text-[16px]">newspaper</span>
            Berita &amp; Informasi
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-[#1b1c1a] leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 font-medium text-sm">
            {post.publishedAt && (
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#188B48]">calendar_today</span>
                <time>{formatDate(post.publishedAt)}</time>
              </div>
            )}
            {post.authorName && (
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#188B48]">person</span>
                <span>{post.authorName}</span>
              </div>
            )}
          </div>
        </header>

        {/* Hero Image */}
        {post.mainImage && post.mainImage.asset && (
          <div className="relative w-full h-[320px] md:h-[480px] rounded-[32px] overflow-hidden shadow-lg mb-12 border-4 border-white">
            <img
              src={urlFor(post.mainImage).width(1200).height(800).format('webp').url()}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Content (PortableText) */}
        <div className="prose prose-lg md:prose-xl prose-p:text-gray-700 prose-headings:text-[#188B48] prose-a:text-[#188B48] max-w-none bg-white p-8 md:p-14 rounded-[32px] shadow-sm border border-gray-100 leading-relaxed">
          {post.body && post.body.length > 0 ? (
            <PortableText value={post.body} />
          ) : (
            <p className="text-center text-gray-500 italic">Konten berita kosong.</p>
          )}
        </div>

      </article>
    </main>
  );
}
