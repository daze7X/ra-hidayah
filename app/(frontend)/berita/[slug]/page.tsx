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
      youtubeUrl,
      tiktokUrl,
      instagramUrl,
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
    <main className="w-full bg-[#FDFCF8] min-h-screen pt-28 md:pt-32 pb-20 font-sans">
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
            <PortableText 
              value={post.body} 
              components={{
                types: {
                  image: ({ value }: any) => {
                    if (!value?.asset) return null;
                    return (
                      <figure className="my-8 overflow-hidden rounded-2xl shadow-md border border-gray-100 not-prose">
                        <img
                          src={urlFor(value).width(1200).quality(85).format('webp').url()}
                          alt={value.alt || post.title || 'Dokumentasi kegiatan PAUD Hidayah'}
                          className="w-full h-auto object-cover max-h-[500px]"
                        />
                        {value.alt && (
                          <figcaption className="text-center text-xs text-gray-500 py-2.5 px-4 bg-gray-50 border-t border-gray-100">
                            {value.alt}
                          </figcaption>
                        )}
                      </figure>
                    );
                  }
                }
              }}
            />
          ) : (
            <p className="text-center text-gray-500 italic">Konten berita kosong.</p>
          )}
        </div>

        {/* Social Media Video Callout */}
        {(post.youtubeUrl || post.tiktokUrl || post.instagramUrl) && (
          <div className="mt-8 bg-white rounded-[28px] p-6 sm:p-8 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
              <div className="w-13 h-13 rounded-2xl bg-[#188B48]/10 text-[#188B48] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[28px]">smart_display</span>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-base sm:text-lg">Tonton Video Dokumentasi Kegiatan</h4>
                <p className="text-gray-500 text-xs sm:text-sm mt-0.5">Saksikan keseruan aksi ananda secara lengkap di media sosial resmi kami:</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
              {post.youtubeUrl && (
                <a
                  href={post.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF0000] text-white text-xs sm:text-sm font-bold shadow-md hover:bg-[#CC0000] hover:scale-105 transition-all"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>YouTube Shorts</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              )}
              {post.instagramUrl && (
                <a
                  href={post.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-xs sm:text-sm font-bold shadow-md hover:opacity-95 hover:scale-105 transition-all"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441 645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              )}
              {post.tiktokUrl && (
                <a
                  href={post.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#000000] text-white text-xs sm:text-sm font-bold shadow-md hover:bg-gray-800 hover:scale-105 transition-all"
                >
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                  <span>TikTok</span>
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span>
                </a>
              )}
            </div>
          </div>
        )}

      </article>
    </main>
  );
}
