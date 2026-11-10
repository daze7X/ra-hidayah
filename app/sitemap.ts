import { MetadataRoute } from "next";
import { client } from "../sanity/lib/client";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.paudhidayah.sch.id";

  // Static Pages
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
    { url: `${baseUrl}/profil/paud`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/profil/sd`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/profil/yayasan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/struktur-organisasi/paud`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/struktur-organisasi/sd`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/struktur-organisasi/yayasan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/program`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/fasilitas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/galeri`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/berita`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
  ];

  // Dynamic News from Sanity
  let newsRoutes: MetadataRoute.Sitemap = [];
  try {
    const news = await client.fetch<Array<{ slug: string; _updatedAt: string }>>(
      `*[_type == "news" && defined(slug.current)]{ "slug": slug.current, _updatedAt }`
    );
    newsRoutes = (news || []).map((item) => ({
      url: `${baseUrl}/berita/${item.slug}`,
      lastModified: new Date(item._updatedAt),
      changeFrequency: "weekly",
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Error generating dynamic sitemap news:", error);
  }

  return [...staticRoutes, ...newsRoutes];
}
