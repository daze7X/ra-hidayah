import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 0;

export default async function Home() {
  const siteSettings = await client.fetch(
    `*[_type == "siteSettings"][0]{
      phone,
      address,
      openHours,
      accreditation,
      showAdmissionBanner,
      admissionStatus
    }`,
    {},
    { next: { revalidate: 0 } }
  );
  const settingsPhone = siteSettings?.phone || "0851 8740 9266";
  const showBanner = siteSettings?.showAdmissionBanner !== false;
  const bannerText = siteSettings?.admissionStatus?.trim() || "Penerimaan Murid Baru TA 2026/2027";
  let phone = settingsPhone.replace(/\D/g, "");
  if (phone.startsWith("0")) phone = "62" + phone.slice(1);

  // Fetch schoolProfile for dynamic Sambutan Kepala Sekolah
  const profile = await client.fetch(
    `*[_type == "schoolProfile"][0]{
      principalName,
      principalRole,
      principalDedication,
      principalImage,
      principalGreeting,
      schoolEstablished,
      welcomeTitle,
      welcomeSubtitle,
      motto
    }`,
    {},
    { next: { revalidate: 0 } }
  );

  const welcomeTitle = profile?.welcomeTitle?.trim() || "Mendidik dengan Cinta, Melayani dengan Sepenuh Hati";
  const principalName = profile?.principalName?.trim() || "Ustadzah Hj. Nur Laeli, S.Pd";
  const principalRole = profile?.principalRole?.trim() || "Kepala Sekolah PAUD Hidayah";
  const principalDedication = profile?.principalDedication?.trim() || "Pengabdian Pendidikan Anak Usia Dini 30+ Tahun";
  const principalGreeting = profile?.principalGreeting?.trim() || "Anak-anak belajar bukan hanya dari apa yang mereka dengar, tetapi juga dari apa yang mereka lihat, rasakan, dan alami setiap hari. Karena itu, lingkungan yang positif, pendidik yang menjadi teladan, dan pengalaman belajar yang menyenangkan menjadi bagian penting dalam perjalanan pendidikan anak usia dini. Sebab, setiap anak memiliki potensi untuk bersinar, dan tugas kita adalah memberikan ruang untuk bertumbuh, teladan untuk ditiru, serta kasih sayang untuk menguatkan setiap langkahnya.";
  const schoolEstablished = profile?.schoolEstablished?.trim() || "PAUD Hidayah • Berdiri sejak 1968";
  const welcomeSubtitle = profile?.welcomeSubtitle?.trim() || "Setiap anak adalah amanah dan anugrah yang istimewa. Dengan cinta sebagai landasan pendidikan, PAUD Hidayah berkomitmen mendukung tumbuh kembang ananda melalui pembiasaan akhlak mulia, pengalaman belajar yang bermakna, serta pengembangan potensi sesuai fitrah dan tahap perkembangannya.";
  const principalPhoto = profile?.principalImage
    ? urlFor(profile.principalImage).width(400).height(400).format('webp').url()
    : "/kegiatan/kepala-sekolah-paud.webp";

  // Fetch latest 3 posts from Sanity for Warta Sekolah
  const latestPostsQuery = `*[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    "category": categories[0]->title,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..130], "") + "..."
  }`;
  let latestPosts: any[] = [];
  try {
    latestPosts = await client.fetch(latestPostsQuery, {}, { next: { revalidate: 0 } });
  } catch (err) {
    console.error("Error fetching latest posts:", err);
  }

  // Fetch Program Unggulan from Sanity
  const featuredProgramsQuery = `*[_type == "featuredProgram" && isActive != false] | order(order asc) {
    _id,
    title,
    category,
    description,
    icon,
    image,
    order
  }`;
  let featuredPrograms: any[] = [];
  try {
    featuredPrograms = await client.fetch(featuredProgramsQuery, {}, { next: { revalidate: 0 } });
  } catch (err) {
    console.error("Error fetching featured programs:", err);
  }

  // Fetch Core Programs from Sanity for Section 3
  const coreProgramsQuery = `*[_type == "programItem" && isActive != false] | order(order asc) {
    _id,
    title,
    slug,
    badge,
    headline,
    shortDesc,
    image,
    goals
  }`;
  let corePrograms: any[] = [];
  try {
    corePrograms = await client.fetch(coreProgramsQuery, {}, { next: { revalidate: 0 } });
  } catch (err) {
    console.error("Error fetching core programs:", err);
  }

  const findProgram = (key: string) => {
    return corePrograms.find((p: any) => p.slug?.current === key || p._id === `program-${key}`);
  };

  const pToddler = findProgram("toddler");
  const pKb = findProgram("kb");
  const pRaA = findProgram("ra-a");
  const pRaB = findProgram("ra-b");
  const pTahfidz = findProgram("tahfidz");
  const pTpq = findProgram("tpq");

  const defaultFeaturedPrograms = [
    {
      title: "Parenting",
      category: "Kemitraan Keluarga",
      headline: "Bersinergi dengan Orang Tua, Mendampingi Tumbuh Kembang Anak",
      description: "PAUD Hidayah menghadirkan kegiatan parenting secara rutin dengan menghadirkan narasumber ahli di bidang psikologi, pengasuhan, gizi, dan kesehatan anak. Melalui kegiatan ini, sekolah dan orang tua bekerja sama menciptakan lingkungan yang mendukung tumbuh kembang anak secara optimal.",
      icon: "family_restroom",
    },
    {
      title: "Character Building",
      category: "Akhlak & Spiritual",
      headline: "Membiasakan Kebaikan, Menanamkan Akhlak Mulia",
      description: "Kami menanamkan nilai-nilai Islam melalui pembiasaan sehari-hari, seperti mengucapkan salam, berdoa, bersikap disiplin, melaksanakan salat, membaca Al-Qur'an, serta membiasakan perilaku santun dan peduli terhadap sesama. Dengan keteladanan dan pembiasaan positif, anak belajar menjadi pribadi yang mandiri dan berakhlakul karimah.",
      icon: "favorite",
    },
    {
      title: "Full Learning",
      category: "Kurikulum Merdeka",
      headline: "Belajar Aktif, Kreatif, dan Menyenangkan",
      description: "Dengan menerapkan Kurikulum Merdeka dan pembelajaran yang berpusat pada anak, kami menghadirkan pengalaman belajar yang menyenangkan dan sesuai tahap perkembangan anak. Didukung alat permainan edukatif (APE), kegiatan seni, serta eksplorasi alam dan lingkungan sekitar, anak mendapatkan kesempatan untuk mengembangkan kreativitas, rasa ingin tahu, kemampuan berpikir, dan keterampilan motoriknya.",
      icon: "auto_stories",
    },
    {
      title: "Deep Learning",
      category: "Eksplorasi Kontekstual",
      headline: "Belajar Bermakna Melalui Pengalaman Nyata",
      description: "Anak diajak belajar melalui kegiatan eksploratif, reflektif, dan kontekstual yang dekat dengan kehidupan sehari-hari. Melalui kegiatan mengamati, mencoba, bertanya, berkarya, dan mengenal alam sekitar, anak tidak hanya memperoleh pengetahuan, tetapi juga belajar berpikir kritis, memecahkan masalah, serta peduli terhadap lingkungan.",
      icon: "psychology",
    },
    {
      title: "Fun Games",
      category: "Motorik & Sosial",
      headline: "Bermain Ceria, Tumbuh Bersama",
      description: "Permainan menjadi bagian penting dalam proses belajar anak. Melalui permainan tradisional dan edukatif, anak belajar bekerja sama, melatih koordinasi motorik, membangun keberanian, mengembangkan kreativitas, serta belajar mengikuti aturan dan menghargai teman. Suasana belajar yang ceria membuat anak lebih aktif, percaya diri, dan bersemangat.",
      icon: "sports_esports",
    },
    {
      title: "TPQ PAUD",
      category: "Metode Qiro'ati",
      headline: "Mencintai Al-Qur'an Sejak Usia Dini",
      description: "Program TPQ PAUD Hidayah menggunakan metode Qiro'ati secara bertahap sesuai kemampuan anak. Anak dikenalkan pada huruf hijaiyah dan dibimbing untuk belajar membaca Al-Qur'an secara tartil melalui pendampingan yang terarah, pembiasaan berulang, dan suasana belajar yang menyenangkan. Kami berharap tumbuh kecintaan anak terhadap Al-Qur'an sejak dini.",
      icon: "menu_book",
    },
  ];

  const displayFeaturedPrograms = featuredPrograms.length > 0 ? featuredPrograms : defaultFeaturedPrograms;

  // Fetch latest 4 gallery photos from Sanity for Section 6 Bento Grid
  const galleryQuery = `*[_type == "gallery"] | order(publishedAt desc)[0...4] {
    _id,
    title,
    description,
    image
  }`;
  let sanityGallery: any[] = [];
  try {
    sanityGallery = await client.fetch(galleryQuery, {}, { next: { revalidate: 0 } });
  } catch (err) {
    console.error("Error fetching gallery for homepage:", err);
  }

  const defaultGallery = [
    {
      _id: "def-1",
      title: "Sholat Dhuha & Muroja'ah Berjamaah",
      description: "Menyapa pagi dengan dzikir dan doa keberkahan.",
      badge: "Ibadah Harian",
      imageUrl: "/kegiatan/kegiatan-bersama-sekolah.webp",
    },
    {
      _id: "def-2",
      title: "Bercocok Tanam Mini",
      description: "Eksplorasi sensorik di Sentra Bahan Alam.",
      badge: "Kebun Edukasi",
      imageUrl: "/kegiatan/kegiatan-sentra-bahan-alam.webp",
    },
    {
      _id: "def-3",
      title: "Senam Anak Sholeh",
      description: "Kebugaran jasmani dan motorik ceria di pendopo terbuka.",
      badge: "Kebugaran Jasmani",
      imageUrl: "/kegiatan/kegiatan-belajar-paviliun.webp",
    },
    {
      _id: "def-4",
      title: "Pentas Kreativitas & Qasidah Rebana Cilik",
      description: "Unjuk bakat seni, percaya diri, dan apresiasi karya ananda.",
      badge: "Unjuk Bakat",
      imageUrl: "/kegiatan/kegiatan-panggung-prestasi.webp",
    },
  ];

  const galleryPhotos = defaultGallery.map((def, idx) => {
    const item = sanityGallery[idx];
    if (!item) return def;
    return {
      _id: item._id,
      title: item.title || def.title,
      description: item.description || def.description,
      badge: idx === 0 ? "Dokumentasi Utama" : "Kegiatan Ceria",
      imageUrl: item.image ? urlFor(item.image).width(800).height(600).format('webp').url() : def.imageUrl,
    };
  });

  // Fetch testimonials from Sanity for Section 7
  const testimonialsQuery = `*[_type == "testimonial" && isActive != false] | order(order asc)[0...6] {
    _id,
    name,
    role,
    quote,
    rating,
    image
  }`;
  let sanityTestimonials: any[] = [];
  try {
    sanityTestimonials = await client.fetch(testimonialsQuery, {}, { next: { revalidate: 0 } });
  } catch (err) {
    console.error("Error fetching testimonials for homepage:", err);
  }

  const defaultTestimonials = [
    {
      _id: "def-t1",
      name: "Zahrotun Istiqomah, S.Kom",
      role: "Ibunda dari Alka (Murid RA B)",
      quote: "Terima kasih kepada PAUD Hidayah yang telah memberikan pelayanan yang terbaik, kami sangat mengapresiasi atas pelayanan yang sangat luar biasa, dan kami berpesan mohon tetap dipertahankan apa yang sudah diberikan kepada putra-putri yang terbaik karena mereka adalah masa depan bangsa.",
      rating: 5,
      imageUrl: "/kegiatan/kegiatan-candid-ibu-anak.webp",
    },
    {
      _id: "def-t2",
      name: "drg. Karina Wyne",
      role: "Ibunda dari Haisha (Murid RA B)",
      quote: "Terima kasih kepada seluruh Bunda-bunda PAUD Hidayah yang telah membersamai anak kami, mendidik anak kami, mengajarkan suri tauladan yang baik dan nilai-nilai Islami. Kesan dan pesan kami alhamdulillah hampir 4 tahun lebih anak kami di PAUD Hidayah perkembangannya sangat luar biasa, menjadi lebih mandiri, berani, percaya diri, dan tumbuh luar biasa. Semoga kelak PAUD Hidayah menjadi kebanggaan orang tua di sekitar Tayu dan selalu menjadi unggulan dari sekolah lainnya.",
      rating: 5,
      imageUrl: "/kegiatan/kegiatan-market-day.webp",
    },
    {
      _id: "def-t3",
      name: "Ulfatin Nu’fah",
      role: "Ibunda dari Airin (Murid KB)",
      quote: "Saya ucapkan banyak terima kasih kepada lembaga PAUD Hidayah yang telah membersamai anak kami dengan perasaan nyaman dan gembira. Di sini metode pembelajarannya sangat menyenangkan sehingga pembelajaran bisa maksimal dan anak merasa sekolah ini merupakan rumah kedua. Kesan saya menyekolahkan anak di sini para bunda mempunyai kesabaran yang luar biasa. Semangat untuk PAUD Hidayah semoga sukses selalu dan semakin maju.",
      rating: 5,
      imageUrl: "/kegiatan/kegiatan-sentra-bahan-alam.webp",
    },
  ];

  const testimonials = (sanityTestimonials && sanityTestimonials.length > 0)
    ? sanityTestimonials.map((t: any, idx: number) => ({
        _id: t._id,
        name: t.name || "",
        role: t.role || "Wali Murid",
        quote: t.quote || "",
        rating: t.rating || 5,
        imageUrl: t.image ? urlFor(t.image).width(120).height(120).format('webp').url() : (defaultTestimonials[idx]?.imageUrl || null),
      }))
    : defaultTestimonials;

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  // Parse openHours into clean structured lines (Option 1 without emoji)
  let scheduleHeader = "Waktu Belajar";
  let scheduleLines: string[] = [];
  const rawHours = siteSettings?.openHours?.trim() || "Waktu Belajar (Senin - Sabtu)\nReguler: 07.00 - 11.00 WIB\nFull Day: 07.00 - 14.00 / 16.00 WIB";

  if (rawHours.includes("\n")) {
    const lines = rawHours.split("\n").map((l: string) => l.trim()).filter(Boolean);
    if (lines.length > 0 && (lines[0].toLowerCase().includes("senin") || lines[0].toLowerCase().includes("hari"))) {
      const dayLabel = lines[0].replace(/^waktu\s*belajar\s*:?\s*/i, "").replace(/:$/, "").trim();
      scheduleHeader = `Waktu Belajar (${dayLabel})`;
      scheduleLines = lines.slice(1);
    } else {
      scheduleLines = lines;
    }
  } else if (rawHours.toLowerCase().includes("reguler") && rawHours.toLowerCase().includes("full day")) {
    const parts = rawHours.split(/(?=Full\s*Day)/i);
    const part1 = parts[0] || "";
    const part2 = parts[1] || "";

    const daysMatch = part1.match(/^([^:]+):/);
    if (daysMatch) {
      scheduleHeader = `Waktu Belajar (${daysMatch[1].trim()})`;
    }

    const regTime = part1.replace(/^[^:]+:\s*/, "").replace(/pukul\s*/gi, "").trim();
    const fdTime = part2.replace(/pukul\s*/gi, "").trim();

    scheduleLines = [
      regTime.toLowerCase().startsWith("reguler") ? regTime.replace(/^reguler\s*:?\s*/i, "Reguler: ") : `Reguler: ${regTime}`,
      fdTime.toLowerCase().startsWith("full day") ? fdTime.replace(/^full\s*day\s*:?\s*/i, "Full Day: ") : `Full Day: ${fdTime}`
    ];
  } else {
    scheduleLines = [rawHours];
  }

  // Format spacing around hyphens for clean presentation
  scheduleLines = scheduleLines.map((line) =>
    line.replace(/(\d{2}\.\d{2})\s*-\s*(\d{2}\.\d{2})/, "$1 - $2")
  );

  return (
    <>
      <main className="w-full bg-surface min-h-[calc(100vh-28rem)]"><div className="flex flex-col w-full">
{/* SECTION 1: HERO SECTION */}
<section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
  {/* Background Building Image with Dark/Green Overlay */}
  <div className="absolute inset-0 z-0">
    <img src="/gedung-tk.jpg" className="w-full h-full object-cover object-center md:object-[center_30%]" alt="Gedung PAUD Hidayah Tayu" />
    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/95 via-[var(--color-primary)]/75 to-[var(--color-primary)]/20"></div>
  </div>

  <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10 pt-28 pb-12 md:pt-32 md:pb-16">
    <div className="max-w-2xl text-white">
      {showBanner && (
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--color-secondary)] shadow-sm mb-6">
        <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
        <span className="font-bold text-[12px] uppercase tracking-wider text-[var(--color-primary)]">
          {bannerText}
        </span>
        </div>
      )}
      <h1 className="text-4xl md:text-5xl lg:text-6xl md:leading-tight font-bold leading-[1.15] mb-6">
        Membentuk Generasi yang <span className="text-[var(--color-secondary)] drop-shadow-md">Berkarakter Islami</span>, Cerdas, Ceria &amp; Mandiri
      </h1>
      <p className="font-body-lg text-lg text-white/90 max-w-xl">
        Menumbuhkan potensi anak sesuai fitrahnya melalui pembelajaran aktif dan menyenangkan dengan pembiasaan nilai-nilai Islami, serta penguatan karakter dan kemandirian sejak usia dini.
      </p>
      








    </div>

    {/* Info Cards Row (relocated from Top Bar) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 md:mt-12 max-w-4xl">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-start gap-4 text-white shadow-lg transition-transform hover:-translate-y-1">
        <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-[24px]">verified</span>
        </div>
        <div className="min-w-0">
          <p className="text-[12px] text-white/80 font-medium uppercase tracking-wider mb-1">Status</p>
          <p className="font-bold text-[16px] text-white leading-snug">{siteSettings?.accreditation || "Akreditasi A"}</p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-start gap-4 text-white shadow-lg transition-transform hover:-translate-y-1">
        <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-[24px]">schedule</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[12px] text-white/80 font-medium uppercase tracking-wider mb-1">
            {scheduleHeader}
          </p>
          <div className="flex flex-col gap-0.5">
            {scheduleLines.map((line, idx) => (
              <p key={idx} className="font-bold text-[14px] leading-snug text-white">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <a href={`https://wa.me/${phone}?text=${encodeURIComponent("Assalamu’alaikum Admin PAUD Hidayah, saya ingin berkonsultasi mengenai informasi sekolah dan pendaftaran. Terima kasih.")}`} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-start gap-4 text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-white/20 cursor-pointer">
        <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-[24px]">call</span>
        </div>
        <div className="min-w-0">
          <p className="text-[12px] text-white/80 font-medium uppercase tracking-wider mb-1">Hotline / WA</p>
          <p className="font-bold text-[16px] text-white leading-snug">{siteSettings?.phone || "0851 8740 9266"}</p>
        </div>
      </a>
    </div>
  </div>
</section>

{/* SECTION 2: SAMBUTAN & 3 PILAR DASAR */}
<section className="w-full py-12 md:py-20 bg-[#188B48] text-white">
<div className="max-w-[1200px] mx-auto px-6">
{/* Section Tagline */}
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="font-label-sm text-label-sm font-bold text-[#FCD116] uppercase tracking-widest px-3 py-1 rounded-full bg-secondary-fixed/30 inline-block mb-3">Tentang PAUD Hidayah</span>
<h2 className="font-headline-lg text-headline-lg text-white">{welcomeTitle}</h2>
<p className="font-body-md text-body-md text-white/80 mt-3">
          {welcomeSubtitle}
        </p>
</div>
{/* Welcome Note Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/10-container-low rounded-3xl p-6 sm:p-10 mb-14 shadow-sm">
<div className="lg:col-span-4 flex flex-col items-center text-center">
<div className="relative w-36 h-36 rounded-full overflow-hidden shadow-md mb-4 bg-primary-fixed">
            <img className="w-full h-full object-cover" alt={`Ibu ${principalRole} ${principalName}`} src={principalPhoto}/>
</div>
<h4 className="font-headline-sm text-headline-sm text-white">{principalName}</h4>
<p className="font-label-md text-label-md text-[#FCD116] font-medium">{principalRole}</p>
<span className="font-body-sm text-[12px] text-white/80 mt-1">{principalDedication}</span>
</div>
<div className="lg:col-span-8 flex flex-col justify-center space-y-4">
<div className="flex items-center gap-2 text-[#FCD116]">
<span className="material-symbols-outlined text-[32px]">format_quote</span>
</div>
<p className="font-body-lg text-body-lg text-white italic leading-relaxed">
            "{principalGreeting}"
          </p>
<div className="pt-2 flex items-center gap-4">
<div className="flex items-center gap-2 text-white font-label-md text-label-md">
<span className="material-symbols-outlined text-[20px]">handshake</span>
<span>{schoolEstablished}</span>
</div>
</div>
</div>
</div>
{/* 3 Pilar Karakter Anak */}
<div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-4 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
{/* Pilar 1 */}
<div className="bg-gradient-to-br from-[#1fa555] to-[#14753c] rounded-3xl p-8 shadow-md hover:shadow-md transition-shadow flex flex-col items-start relative overflow-hidden group w-[85vw] sm:w-[300px] snap-center shrink-0">
<div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>mosque</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-white mb-3">1. Karakter Islami &amp; Adab</h3>
<p className="font-body-md text-body-md text-white/80">
            Menanamkan nilai-nilai Islami melalui doa sehari-hari, hafalan surah pendek, pengenalan huruf hijaiyah, praktik ibadah sederhana, serta pembiasaan 5S (Senyum, Salam, Sapa, Sopan, Santun) dalam kegiatan sehari-hari.
          </p>
<div className="mt-6 inline-flex items-center gap-1.5 font-label-md text-label-md text-[#FCD116] font-semibold">
<span>Sentra Imtaq &amp; Ibadah</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</div>
</div>
{/* Pilar 2 */}
<div className="bg-gradient-to-br from-[#1fa555] to-[#14753c] rounded-3xl p-8 shadow-md hover:shadow-md transition-shadow flex flex-col items-start relative overflow-hidden group w-[85vw] sm:w-[300px] snap-center shrink-0">
<div className="w-14 h-14 rounded-2xl bg-secondary-fixed text-[#FCD116] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>self_improvement</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-white mb-3">2. Kemandirian &amp; Life Skills</h3>
<p className="font-body-md text-body-md text-white/80">
            Menumbuhkan kemandirian dan kecakapan hidup melalui pembiasaan sesuai usia, seperti makan sendiri, menjaga kebersihan, merapikan mainan, merawat barang pribadi, dan belajar bertanggung jawab dalam kegiatan sehari-hari.
          </p>
<div className="mt-6 inline-flex items-center gap-1.5 font-label-md text-label-md text-[#FCD116] font-semibold">
<span>Pembiasaan Practical Life</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</div>
</div>
{/* Pilar 3 */}
<div className="bg-gradient-to-br from-[#1fa555] to-[#14753c] rounded-3xl p-8 shadow-md hover:shadow-md transition-shadow flex flex-col items-start relative overflow-hidden group w-[85vw] sm:w-[300px] snap-center shrink-0">
<div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-white mb-3">3. Kreativitas &amp; Eksplorasi</h3>
<p className="font-body-md text-body-md text-white/80">
            Mengajak anak bereksperimen sederhana, bermain balok, berkarya dengan bahan alam, bermain peran, dan mengungkapkan ide melalui model pembelajaran sentra untuk menumbuhkan rasa ingin tahu, imajinasi, kreativitas, serta kemampuan memecahkan masalah.
          </p>
<div className="mt-6 inline-flex items-center gap-1.5 font-label-md text-label-md text-[#FCD116] font-semibold">
<span>Sentra Balok &amp; Bahan Alam</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</div>
</div>
</div>
</div>
</section>
{/* Wave Divider */}
<div className="w-full overflow-hidden -mt-1 bg-[#FCD116]">
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
    <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#188B48"/>
  </svg>
</div>
{/* SECTION 3: PROGRAM PEMBELAJARAN UNGGULAN */}
<section className="w-full py-12 md:py-20 bg-[#FCD116]" id="program-unggulan">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="font-label-sm text-label-sm font-bold text-primary uppercase tracking-widest px-3 py-1 rounded-full bg-primary-fixed/40 inline-block mb-3">Jenjang Pendidikan</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Program Belajar Sesuai Tahap Usia</h2>
</div>
<p className="font-body-md text-body-md text-gray-800 max-w-md font-medium">
  Dirancang dengan panduan Kurikulum Merdeka PAUD berbasis cinta dengan model pembelajaran sentra. Tersedia pilihan Reguler dan Fullday School.
</p>
</div>
{/* 4 Program Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

  {/* Program 1: Toddler */}
  <div className="bg-white rounded-[32px] overflow-hidden shadow-md ring-1 ring-primary/10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative group">
    <div className="relative h-44 overflow-hidden bg-primary-fixed/30">
      <img 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        alt="Kelompok Toddler PAUD Hidayah bermain ceria" 
        src={pToddler?.image ? urlFor(pToddler.image).width(600).height(400).format('webp').url() : "/kegiatan/kegiatan-playgroup-lingkaran.webp"}
      />
      <div className="absolute top-4 right-4 bg-primary text-on-primary font-label-sm text-xs px-3 py-1.5 rounded-full font-bold shadow">
        {pToddler?.badge || "Usia 1,5–3 Tahun"}
      </div>
    </div>
    <div className="p-5 flex flex-col flex-1 justify-between">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-primary text-[20px]">toys</span>
          <span className="font-label-md text-sm text-primary font-bold">{pToddler?.title || "Kelompok Toddler"}</span>
        </div>
        <h3 className="text-base font-bold text-primary mb-2 leading-snug">{pToddler?.headline || "Tumbuh Hangat, Bermain Penuh Makna"}</h3>
        <p className="text-gray-600 text-[12px] mb-4 leading-relaxed">
          {pToddler?.shortDesc || "Pengalaman awal yang penuh kasih untuk mendukung tumbuh kembang anak melalui permainan sensorik, stimulasi motorik, interaksi sederhana, dan pembiasaan Islami sejak dini."}
        </p>
        <ul className="space-y-1.5 mb-6 text-[12px] text-gray-700 font-medium">
          {(pToddler?.goals && pToddler.goals.length > 0 ? pToddler.goals.slice(0, 3) : [
            "Stimulasi Sensorik dan Motorik",
            "Pengenalan Bahasa dan Interaksi Sosial",
            "Pembiasaan Doa dan Akhlak Baik"
          ]).map((goal: string, gIdx: number) => (
            <li key={gIdx} className="flex items-start gap-1.5">
              <span className="material-symbols-outlined text-primary text-[15px] shrink-0 mt-0.5">check_circle</span>
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link className="w-full py-2.5 rounded-full bg-surface-container text-center text-primary text-xs font-bold hover:bg-primary hover:text-white transition-colors block" href="/program/toddler">Detail Toddler</Link>
    </div>
  </div>

  {/* Program 2: Kelompok Bermain (KB) */}
  <div className="bg-white rounded-[32px] overflow-hidden shadow-md ring-1 ring-primary/10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative group">
    <div className="relative h-44 overflow-hidden bg-secondary-fixed/30">
      <img 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        alt="Kelompok Bermain KB PAUD Hidayah" 
        src={pKb?.image ? urlFor(pKb.image).width(600).height(400).format('webp').url() : "/kegiatan/kegiatan-sentra-belajar.webp"}
      />
      <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container font-label-sm text-xs px-3 py-1.5 rounded-full font-bold shadow">
        {pKb?.badge || "Usia 3–4 Tahun"}
      </div>
    </div>
    <div className="p-5 flex flex-col flex-1 justify-between">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-secondary text-[20px]">smart_toy</span>
          <span className="font-label-md text-sm text-secondary font-bold">{pKb?.title || "Kelompok Bermain"}</span>
        </div>
        <h3 className="text-base font-bold text-primary mb-2 leading-snug">{pKb?.headline || "Berani Mencoba, Ceria Berkarya"}</h3>
        <p className="text-gray-600 text-[12px] mb-4 leading-relaxed">
          {pKb?.shortDesc || "Anak belajar mengenal diri dan lingkungan, membangun kemandirian, mengembangkan kemampuan berbahasa, serta menumbuhkan kreativitas melalui bermain, berkarya, dan pengalaman langsung."}
        </p>
        <ul className="space-y-1.5 mb-6 text-[12px] text-gray-700 font-medium">
          {(pKb?.goals && pKb.goals.length > 0 ? pKb.goals.slice(0, 3) : [
            "Kemandirian dan Pembiasaan Islami",
            "Bahasa, Sosial, dan Motorik melalui Bermain",
            "Eksplorasi Alam, Seni, dan Konsep Angka"
          ]).map((goal: string, gIdx: number) => (
            <li key={gIdx} className="flex items-start gap-1.5">
              <span className="material-symbols-outlined text-primary text-[15px] shrink-0 mt-0.5">check_circle</span>
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link className="w-full py-2.5 rounded-full bg-surface-container text-center text-primary text-xs font-bold hover:bg-primary hover:text-white transition-colors block" href="/program/kb">Detail Program KB</Link>
    </div>
  </div>

  {/* Program 3: RA-A */}
  <div className="bg-white rounded-[32px] overflow-hidden shadow-md ring-2 ring-primary/20 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative group">
    <div className="relative h-44 overflow-hidden bg-primary-fixed/30">
      <img 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        alt="Kelompok RA-A PAUD Hidayah" 
        src={pRaA?.image ? urlFor(pRaA.image).width(600).height(400).format('webp').url() : "/kegiatan/kegiatan-mewarnai-kupu.webp"}
      />
      <div className="absolute top-4 right-4 bg-primary text-on-primary font-label-sm text-xs px-3 py-1.5 rounded-full font-bold shadow">
        {pRaA?.badge || "Usia 4–5 Tahun"}
      </div>
    </div>
    <div className="p-5 flex flex-col flex-1 justify-between">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-primary text-[20px]">auto_stories</span>
          <span className="font-label-md text-sm text-primary font-bold">{pRaA?.title || "Kelompok RA A"}</span>
        </div>
        <h3 className="text-base font-bold text-primary mb-2 leading-snug">{pRaA?.headline || "Membangun Pondasi, Belajar Ceria"}</h3>
        <p className="text-gray-600 text-[12px] mb-4 leading-relaxed">
          {pRaA?.shortDesc || "Anak diajak mengenal nilai-nilai Islam, membangun kemandirian, mengembangkan kemampuan berbahasa dan berhitung awal, serta mengeksplorasi lingkungan melalui kegiatan bermain yang menyenangkan."}
        </p>
        <ul className="space-y-1.5 mb-6 text-[12px] text-gray-700 font-medium">
          {(pRaA?.goals && pRaA.goals.length > 0 ? pRaA.goals.slice(0, 3) : [
            "Pembiasaan Doa, Ibadah, dan Akhlak Mulia",
            "Pengenalan Huruf, Bahasa, dan Angka 1–10",
            "Eksplorasi Alam, Seni, dan Motorik"
          ]).map((goal: string, gIdx: number) => (
            <li key={gIdx} className="flex items-start gap-1.5">
              <span className="material-symbols-outlined text-primary text-[15px] shrink-0 mt-0.5">check_circle</span>
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link className="w-full py-2.5 rounded-full bg-primary text-center text-on-primary text-xs font-bold hover:brightness-110 transition-all shadow-sm block" href="/program/ra-a">Detail Program RA-A</Link>
    </div>
  </div>

  {/* Program 4: RA-B */}
  <div className="bg-white rounded-[32px] overflow-hidden shadow-md ring-1 ring-primary/10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative group">
    <div className="relative h-44 overflow-hidden bg-secondary-fixed/30">
      <img 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
        alt="Kelompok RA-B PAUD Hidayah wisuda" 
        src={pRaB?.image ? urlFor(pRaB.image).width(600).height(400).format('webp').url() : "/kegiatan/kegiatan-wisuda-prestasi.webp"}
      />
      <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container font-label-sm text-xs px-3 py-1.5 rounded-full font-bold shadow">
        {pRaB?.badge || "Usia 5–6 Tahun"}
      </div>
    </div>
    <div className="p-5 flex flex-col flex-1 justify-between">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-secondary text-[20px]">school</span>
          <span className="font-label-md text-sm text-secondary font-bold">{pRaB?.title || "Kelompok RA B"}</span>
        </div>
        <h3 className="text-base font-bold text-primary mb-2 leading-snug">{pRaB?.headline || "Mandiri, Kreatif, Siap Melangkah"}</h3>
        <p className="text-gray-600 text-[12px] mb-4 leading-relaxed">
          {pRaB?.shortDesc || "Anak dibimbing untuk semakin mandiri dalam beribadah, berkomunikasi dengan baik, mengembangkan literasi dan numerasi awal, memecahkan masalah sederhana, serta menunjukkan kreativitas dan kepedulian terhadap lingkungan."}
        </p>
        <ul className="space-y-1.5 mb-6 text-[12px] text-gray-700 font-medium">
          {(pRaB?.goals && pRaB.goals.length > 0 ? pRaB.goals.slice(0, 3) : [
            "Penguatan Ibadah, Akhlak, dan Kemandirian",
            "Literasi, Numerasi, dan Keaksaraan Awal",
            "Pemecahan Masalah, Sains, dan Kreativitas"
          ]).map((goal: string, gIdx: number) => (
            <li key={gIdx} className="flex items-start gap-1.5">
              <span className="material-symbols-outlined text-primary text-[15px] shrink-0 mt-0.5">check_circle</span>
              <span>{goal}</span>
            </li>
          ))}
        </ul>
      </div>
      <Link className="w-full py-2.5 rounded-full bg-surface-container text-center text-primary text-xs font-bold hover:bg-primary hover:text-white transition-colors block" href="/program/ra-b">Detail Program RA-B</Link>
    </div>
  </div>

</div>

{/* Ekstrakurikuler Pilihan */}
<div className="mt-14 pt-10 bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
    <div>
      <h3 className="font-headline-md text-2xl font-bold text-primary">Ekstrakurikuler Minat &amp; Bakat Ceria</h3>
      <p className="font-body-sm text-sm text-gray-600 mt-1">Mengasah kecerdasan kinestetik, seni dan teknologi islami sejak dini.</p>
    </div>
    <Link href="/program/ekstrakurikuler" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline shrink-0">
      Lihat Semua <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
    </Link>
  </div>
  
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {/* Seni Tari */}
    <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-[#FCD116]/20 border border-[#FCD116]/40 hover:bg-[#FCD116]/30 transition-all hover:-translate-y-1">
      <div className="w-14 h-14 rounded-2xl bg-[#188B48] flex items-center justify-center text-white mb-3 shadow-sm">
        <span className="material-symbols-outlined text-[28px]">music_note</span>
      </div>
      <p className="font-bold text-base text-primary">Tari</p>
      <p className="text-xs text-gray-600 mt-1">Kinestetik &amp; Percaya Diri</p>
    </div>

    {/* Drumband */}
    <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-[#FCD116]/20 border border-[#FCD116]/40 hover:bg-[#FCD116]/30 transition-all hover:-translate-y-1">
      <div className="w-14 h-14 rounded-2xl bg-[#FCD116] flex items-center justify-center text-[#188B48] mb-3 shadow-sm">
        <span className="material-symbols-outlined text-[28px]">volume_up</span>
      </div>
      <p className="font-bold text-base text-primary">Drumband</p>
      <p className="text-xs text-gray-600 mt-1">Musikalitas &amp; Tim</p>
    </div>

    {/* Melukis / Kaligrafi */}
    <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-[#FCD116]/20 border border-[#FCD116]/40 hover:bg-[#FCD116]/30 transition-all hover:-translate-y-1">
      <div className="w-14 h-14 rounded-2xl bg-[#188B48] flex items-center justify-center text-white mb-3 shadow-sm">
        <span className="material-symbols-outlined text-[28px]">brush</span>
      </div>
      <p className="font-bold text-base text-primary">Melukis / Kaligrafi</p>
      <p className="text-xs text-gray-600 mt-1">Kreativitas &amp; Imajinasi</p>
    </div>

    {/* Permainan Tradisional */}
    <div className="flex flex-col items-center text-center p-5 rounded-2xl bg-[#FCD116]/20 border border-[#FCD116]/40 hover:bg-[#FCD116]/30 transition-all hover:-translate-y-1">
      <div className="w-14 h-14 rounded-2xl bg-[#FCD116] flex items-center justify-center text-[#188B48] mb-3 shadow-sm">
        <span className="material-symbols-outlined text-[28px]">sports_esports</span>
      </div>
      <p className="font-bold text-base text-primary">Permainan Tradisional</p>
      <p className="text-xs text-gray-600 mt-1">Motorik &amp; Budaya Lokal</p>
    </div>
  </div>
</div>
</div>
</section>
{/* Wave Divider */}
<div className="w-full overflow-hidden -mt-1 bg-[#188B48]">
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
    <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#FCD116"/>
  </svg>
</div>
{/* SECTION 4: PENDEKATAN BELAJAR */}
<section className="w-full py-20 bg-[#188B48] text-white">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="font-bold text-[#FCD116] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FCD116]/20 inline-block mb-3 text-[12px]">Pendekatan Belajar</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white">Membangun Karakter, Mengembangkan Potensi</h2>
      <p className="text-white/90 mt-4 text-[16px] leading-relaxed">
        PAUD Hidayah menghadirkan pembelajaran Islami yang aktif, kreatif, dan menyenangkan untuk membentuk anak yang cerdas, ceria, mandiri, dan berakhlakul karimah.
      </p>
    </div>

    <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
      {displayFeaturedPrograms.map((prog: any, idx: number) => (
        <div key={prog._id || idx} className="bg-gradient-to-br from-[#1fa555] to-[#14753c] rounded-3xl p-6 shadow-md border border-white/20 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 group w-[85vw] sm:w-[300px] md:w-auto snap-center shrink-0 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl bg-[#FCD116] flex items-center justify-center text-[#188B48] group-hover:scale-110 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-[28px]">{prog.icon || 'star'}</span>
              </div>
              {prog.category && (
                <span className="text-[11px] font-bold text-[#FCD116] bg-black/25 px-3 py-1 rounded-full uppercase tracking-wider">
                  {prog.category}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-white mb-1.5 leading-snug">{prog.title}</h3>
            {prog.headline && (
              <h4 className="text-[13px] font-semibold text-[#FCD116] mb-3 leading-snug">{prog.headline}</h4>
            )}
            <p className="text-white/90 text-[13px] leading-relaxed">
              {prog.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Wave Divider */}
<div className="w-full overflow-hidden -mt-1 bg-white">
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
    <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#188B48"/>
  </svg>
</div>
{/* SECTION 5: INFORMASI & AGENDA SEKOLAH (Slide 5) */}
<section className="w-full py-12 md:py-20 bg-white">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
<div>
<span className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-widest px-3 py-1 rounded-full bg-secondary-fixed/30 inline-block mb-2">Informasi &amp; Kegiatan</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Kabar, Program &amp; Agenda Ceria</h2>
</div>
<Link className="inline-flex items-center gap-2 font-label-md text-label-md text-primary font-bold hover:text-secondary transition-colors group" href="/berita">
<span>Lihat Semua Berita</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>

{/* 3 Highlight Cards (Slide 5) */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Kotak 1: AGENDA TAHUNAN */}
  <Link
    href="/berita"
    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col group border border-gray-100"
  >
    <div className="h-52 overflow-hidden relative bg-gray-100">
      <img
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        alt="Kegiatan Seru dan Bermakna Sepanjang Tahun PAUD Hidayah"
        src="/kegiatan/kegiatan-parenting-batik.webp"
      />
      <div className="absolute top-4 left-4 bg-primary text-white font-label-sm text-xs px-3.5 py-1.5 rounded-full font-bold shadow-sm flex items-center gap-1.5">
        <span className="material-symbols-outlined text-[16px]">calendar_month</span>
        <span>Agenda Tahunan</span>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1 justify-between">
      <div>
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-snug">
          Kegiatan Seru dan Bermakna Sepanjang Tahun
        </h3>
        <p className="text-gray-600 text-[14px] leading-relaxed">
          Beragam kegiatan edukatif dan menyenangkan untuk menumbuhkan keimanan, kreativitas, kemandirian, serta pengalaman berharga bagi anak.
        </p>
      </div>
      <div className="pt-5 mt-6 flex items-center justify-between border-t border-gray-100">
        <span className="font-bold text-sm text-primary group-hover:text-secondary transition-colors">
          Baca Selengkapnya
        </span>
        <span className="material-symbols-outlined text-primary text-[18px] group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </div>
    </div>
  </Link>

  {/* Kotak 2: PROGRAM PEMBELAJARAN MODEL SENTRA */}
  <Link
    href="/program"
    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col group border border-gray-100"
  >
    <div className="h-52 overflow-hidden relative bg-gray-100">
      <img
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        alt="Belajar Sambil Bermain melalui Model Sentra"
        src="/kegiatan/kegiatan-sentra-belajar.webp"
      />
      <div className="absolute top-4 left-4 bg-[#FCD116] text-[#188B48] font-label-sm text-xs px-3.5 py-1.5 rounded-full font-bold shadow-sm flex items-center gap-1.5">
        <span className="material-symbols-outlined text-[16px]">dashboard_customize</span>
        <span>Model Pembelajaran</span>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1 justify-between">
      <div>
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-snug">
          Belajar Sambil Bermain melalui Model Sentra
        </h3>
        <p className="text-gray-600 text-[14px] leading-relaxed">
          Mengenal pembelajaran di Sentra Balok, Bahan Alam, Persiapan, Kreativitas, Imtaq, Masak, Mikro dan Makro yang memberi ruang anak bereksplorasi.
        </p>
      </div>
      <div className="pt-5 mt-6 flex items-center justify-between border-t border-gray-100">
        <span className="font-bold text-sm text-primary group-hover:text-secondary transition-colors">
          Baca Selengkapnya
        </span>
        <span className="material-symbols-outlined text-primary text-[18px] group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </div>
    </div>
  </Link>

  {/* Kotak 3: INFORMASI PENERIMAAN MURID BARU */}
  <Link
    href="/#daftar-ppdb"
    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col group border border-gray-100"
  >
    <div className="h-52 overflow-hidden relative bg-gray-100">
      <img
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        alt="SPMB PAUD Hidayah Tahun Ajaran 2026/2027"
        src="/kegiatan/kegiatan-bersama-sekolah.webp"
      />
      <div className="absolute top-4 left-4 bg-primary text-white font-label-sm text-xs px-3.5 py-1.5 rounded-full font-bold shadow-sm flex items-center gap-1.5">
        <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
        <span>Penerimaan Murid Baru</span>
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1 justify-between">
      <div>
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors leading-snug">
          SPMB PAUD Hidayah TA 2026/2027
        </h3>
        <p className="text-gray-600 text-[14px] leading-relaxed">
          Saatnya bergabung bersama PAUD Hidayah! Temukan informasi pendaftaran, pilihan layanan pendidikan, dan kesempatan belajar dalam lingkungan Islami.
        </p>
      </div>
      <div className="pt-5 mt-6 flex items-center justify-between border-t border-gray-100">
        <span className="font-bold text-sm text-primary group-hover:text-secondary transition-colors">
          Informasi Pendaftaran
        </span>
        <span className="material-symbols-outlined text-primary text-[18px] group-hover:translate-x-1 transition-transform">
          arrow_forward
        </span>
      </div>
    </div>
  </Link>
</div>
</div>
</section>
{/* Wave Divider */}
<div className="w-full overflow-hidden -mt-1 bg-[#FCD116]">
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
    <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="white"/>
  </svg>
</div>
{/* SECTION 6: CUPLIKAN GALERI CERIA (Slide 6) */}
<section className="w-full py-12 md:py-20 bg-[#FCD116]">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-10">
<span className="font-label-sm text-label-sm font-bold text-primary uppercase tracking-widest px-3 py-1 rounded-full bg-primary-fixed/40 inline-block mb-3">Dokumentasi Kegiatan</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Jejak Ceria, Cerita Bermakna</h2>
<p className="font-body-md text-body-md text-gray-800 mt-2 font-medium">Setiap momen menjadi bagian berharga dari perjalanan Ananda dalam belajar, bermain, berkarya, dan menumbuhkan karakter di PAUD Hidayah.</p>
</div>
{/* Bento Grid Photo Gallery */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
{/* Photo 1: Big Highlight (Left) */}
<div className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-3xl group shadow-sm">
  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={galleryPhotos[0].title} src={galleryPhotos[0].imageUrl}/>
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 flex flex-col justify-end p-6 text-white">
    <span className="font-label-sm text-xs text-[#FCD116] font-bold uppercase tracking-wider">{galleryPhotos[0].badge}</span>
    <h4 className="font-headline-sm text-xl md:text-2xl font-bold">{galleryPhotos[0].title}</h4>
    {galleryPhotos[0].description && <p className="text-white/80 text-sm line-clamp-2 mt-1">{galleryPhotos[0].description}</p>}
  </div>
</div>
{/* Photo 2 */}
<div className="relative overflow-hidden rounded-3xl group shadow-sm">
  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={galleryPhotos[1].title} src={galleryPhotos[1].imageUrl}/>
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 flex flex-col justify-end p-4 text-white">
    <span className="font-label-sm text-xs text-[#FCD116] font-semibold">{galleryPhotos[1].badge}</span>
    <h5 className="font-label-lg text-sm font-bold line-clamp-1">{galleryPhotos[1].title}</h5>
  </div>
</div>
{/* Photo 3 */}
<div className="relative overflow-hidden rounded-3xl group shadow-sm">
  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={galleryPhotos[2].title} src={galleryPhotos[2].imageUrl}/>
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 flex flex-col justify-end p-4 text-white">
    <span className="font-label-sm text-xs text-[#FCD116] font-semibold">{galleryPhotos[2].badge}</span>
    <h5 className="font-label-lg text-sm font-bold line-clamp-1">{galleryPhotos[2].title}</h5>
  </div>
</div>
{/* Photo 4 (Wide Span Bottom Right) */}
<div className="lg:col-span-2 relative overflow-hidden rounded-3xl group shadow-sm">
  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={galleryPhotos[3].title} src={galleryPhotos[3].imageUrl}/>
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 flex flex-col justify-end p-4 text-white">
    <span className="font-label-sm text-xs text-[#FCD116] font-semibold">{galleryPhotos[3].badge}</span>
    <h5 className="font-label-lg text-base font-bold line-clamp-1">{galleryPhotos[3].title}</h5>
  </div>
</div>
</div>
</div>
</section>
{/* Wave Divider */}
<div className="w-full overflow-hidden -mt-1 bg-[#188B48]">
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
    <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#FCD116"/>
  </svg>
</div>
{/* SECTION 7: TESTIMONI WALI MURID (Slide 7) */}
<section className="w-full py-12 md:py-20 bg-[#188B48] text-white">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-widest px-3 py-1 rounded-full bg-secondary-fixed/30 inline-block mb-3">Cerita Ayah &amp; Bunda</span>
<h2 className="font-headline-lg text-headline-lg text-white">Bersama Mengiringi Langkah Kecil Penuh Makna</h2>
<p className="font-body-md text-body-md text-white/80 mt-2">Setiap perkembangan kecil ananda adalah kebahagiaan besar bagi orang tua. Bersama PAUD Hidayah, menumbuhkan akhlak mulia, kecerdasan, dan kemandirian menjadi perjalanan yang bermakna.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {testimonials.map((testi: any) => (
    <div key={testi._id} className="bg-[#188B48] border border-white/20 rounded-3xl p-8 shadow-sm flex flex-col justify-between hover:-translate-y-1 transition-transform">
      <div>
        <div className="flex items-center gap-1 text-[#FCD116] mb-4">
          {Array.from({ length: testi.rating || 5 }).map((_, rIdx) => (
            <span key={rIdx} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          ))}
        </div>
        <p className="font-body-md text-[14px] text-white/95 italic mb-6 leading-relaxed">
          &ldquo;{testi.quote}&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-3 pt-4 border-t border-white/20">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-white/20 shrink-0 flex items-center justify-center border border-white/30">
          {testi.imageUrl ? (
            <img className="w-full h-full object-cover" alt={`${testi.name}, ${testi.role}`} src={testi.imageUrl}/>
          ) : (
            <span className="material-symbols-outlined text-white text-[24px]">person</span>
          )}
        </div>
        <div>
          <h5 className="font-bold text-[15px] text-white">{testi.name}</h5>
          <p className="text-[12px] text-[#FCD116] font-medium">{testi.role}</p>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
</section>
{/* Wave Divider */}
<div className="w-full overflow-hidden -mt-1 bg-[#FCD116]">
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
    <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#188B48"/>
  </svg>
</div>
{/* SECTION 8: BANNER PENUTUP CTA PPDB & KONSULTASI (Slide 8) */}
<section className="w-full py-12 md:py-20 bg-[#FCD116]" id="daftar-ppdb">
<div className="max-w-[1200px] mx-auto px-6">
<div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-primary via-primary-container to-tertiary p-8 sm:p-14 text-on-primary shadow-xl">
{/* Subtle Pattern Overlay */}
<div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-7 flex flex-col items-start space-y-4">
{showBanner && (
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold shadow">
<span className="material-symbols-outlined text-[16px]">celebration</span>
<span>{bannerText}</span>
</div>
)}
<h2 className="font-headline-lg text-headline-lg lg:text-[40px] lg:leading-[48px] font-bold text-on-primary">
  Awal Ceria, Langkah Bermakna Bersama PAUD Hidayah
</h2>
<p className="font-body-lg text-body-lg text-surface-container max-w-2xl leading-relaxed">
  Mari menjadi bagian dari keluarga besar PAUD Hidayah. Bersama Ayah dan Bunda, kami menumbuhkan akhlak mulia, mengembangkan potensi, serta membangun kemandirian ananda sejak usia dini.
</p>
<div className="pt-2 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-secondary-container text-on-secondary-container font-label-lg text-label-lg font-bold shadow-lg hover:brightness-105 active:scale-95 transition-all" href={`https://wa.me/${phone}?text=${encodeURIComponent("Assalamu’alaikum Admin PAUD Hidayah, saya berminat mendaftarkan putra/putri saya di PAUD Hidayah. Boleh dibantu informasi syarat pendaftaran dan formulir PPDB saat ini? Terima kasih.")}`} target="_blank">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
<span>Konsultasi Pendaftaran</span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#FCD116]/15 backdrop-blur-md text-on-primary font-label-lg text-label-lg font-semibold hover:bg-[#FCD116]/25 transition-all" href={`https://wa.me/${phone}?text=Halo%20Admin%2C%20saya%20tertarik%20dengan%20PAUD%20Hidayah.%20Boleh%20minta%20dikirimkan%20file%20Brosur%20dan%20Rincian%20Biaya%20terbaru%20TA%202026/2027%3F`} target="_blank">
<span className="material-symbols-outlined text-[20px]">download</span>
<span>Brosur &amp; Rincian Biaya</span>
</a>
</div>
</div>
<div className="lg:col-span-5 bg-gradient-to-br from-[#1fa555] to-[#14753c] shadow-inner border border-white/20 rounded-3xl p-6 flex flex-col space-y-4">
<h4 className="font-headline-sm text-headline-sm text-on-primary flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed">pin_drop</span>
<span>Kunjungi Sekolah Kami</span>
</h4>
<p className="font-body-sm text-body-sm text-inverse-on-surface leading-relaxed">
  Ayah &amp; Bunda dipersilakan berkunjung untuk mengenal lingkungan belajar, fasilitas, serta kegiatan anak secara langsung. Silakan menghubungi sekolah untuk mengatur jadwal kunjungan.
</p>
<div className="space-y-2 pt-1 text-on-primary font-body-sm text-[13px]">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed text-[18px]">alarm</span>
<span>Senin - Sabtu : 07.00 - 10.00 WIB</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed text-[18px]">location_on</span>
<span>{siteSettings?.address || "Ds. Tayu Wetan, RT.06 RW.01 Kecamatan Tayu, Kabupaten Pati, Jawa Tengah"}</span>
</div>
</div>

{/* Code Barcode / QR Code Link Pendaftaran (Slide 8) */}
<div className="mt-3 pt-3 border-t border-white/20 flex items-center gap-3.5 bg-black/15 rounded-2xl p-3">
  <div className="w-[76px] h-[76px] bg-white rounded-xl p-1 shrink-0 shadow-md flex items-center justify-center">
    <img 
      src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(`https://wa.me/${phone}?text=${encodeURIComponent("Assalamu’alaikum Admin PAUD Hidayah, saya berminat mendaftarkan putra/putri saya di PAUD Hidayah. Boleh dibantu informasi syarat pendaftaran dan formulir PPDB saat ini? Terima kasih.")}`)}`}
      alt="Barcode Pendaftaran PAUD Hidayah"
      className="w-full h-full object-contain"
      loading="lazy"
    />
  </div>
  <div>
    <p className="font-bold text-[13px] text-[#FCD116] flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">qr_code_scanner</span>
      Barcode Pendaftaran
    </p>
    <p className="text-[11px] text-white/90 leading-tight mt-1">
      Scan barcode dengan kamera ponsel Ayah &amp; Bunda untuk langsung terhubung pendaftaran.
    </p>
  </div>
</div>
</div>
</div>
</div>
</div>
</section>
</div></main>
      
    </>
  );
}
