import { client } from "../../../../sanity/lib/client";
import { urlFor } from "../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 0; // Disable caching for preview

async function getPost(slug: string) {
  const query = \`*[_type == "post" && slug.current == $slug][0] {
    title,
    publishedAt,
    mainImage,
    body,
    "authorName": author->name
  }\`;
  
  return await client.fetch(query, { slug });
}

// Generate Metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  if (!post) return { title: "Not Found" };
  
  return {
    title: \`\${post.title} - PAUD Hidayah\`,
  };
}

export default async function BeritaDetail({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);

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
    <main className="w-full bg-[#FDFCF8] min-h-screen pt-28 pb-20">
      <article className="max-w-[900px] mx-auto px-6">
        
        {/* Back Button */}
        <Link href="/berita" className="inline-flex items-center gap-2 text-[#188B48] font-semibold hover:text-[#FCD116] transition-colors mb-8">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          Kembali ke Daftar Berita
        </Link>

        {/* Header */}
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-gray-500 font-medium text-sm">
            {post.publishedAt && (
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                <time>{formatDate(post.publishedAt)}</time>
              </div>
            )}
            {post.authorName && (
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px]">person</span>
                <span>{post.authorName}</span>
              </div>
            )}
          </div>
        </header>

        {/* Hero Image */}
        {post.mainImage && (
          <div className="relative w-full h-[40vh] md:h-[60vh] rounded-[32px] overflow-hidden shadow-lg mb-12">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1000px) 100vw, 1000px"
            />
          </div>
        )}

        {/* Content (PortableText) */}
        <div className="prose prose-lg md:prose-xl prose-p:text-gray-600 prose-headings:text-gray-900 prose-a:text-[#188B48] max-w-none bg-white p-8 md:p-14 rounded-[32px] shadow-sm border border-gray-100">
          {post.body ? (
            <PortableText value={post.body} />
          ) : (
            <p className="text-center text-gray-500 italic">Konten berita kosong.</p>
          )}
        </div>

      </article>
    </main>
  );
}
