import { client } from "../../../../sanity/lib/client";
import { urlFor } from "../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 0;

// Fetch data from Sanity (institutionProfile with fallback to schoolProfile)
async function getProfileData() {
  const profileQuery = `*[_type == "institutionProfile" && institution == "paud"][0]{
    ...,
    heroImage {
      ...,
      asset->{
        _id,
        url,
        mimeType,
        metadata
      }
    }
  }`;
  const legacyQuery = `*[_type == "schoolProfile"][0]`;
  const profile = await client.fetch(profileQuery, {}, { next: { revalidate: 0 } });
  if (profile) return profile;
  return await client.fetch(legacyQuery, {}, { next: { revalidate: 0 } });
}

export default async function ProfilPAUD() {
  const profile = await getProfileData();

  const isMotionPhoto = 
    profile?.heroImage?.asset?._id === "image-73a9c5509e066c86b14706d542c3120a1b93c565-640x360-gif" ||
    !profile?.heroImage?.asset;

  const isGif = profile?.heroImage?.asset?.mimeType === "image/gif" || profile?.heroImage?.asset?.url?.endsWith(".gif");

  const heroImage = profile?.heroImage?.asset?.url
    ? (isGif ? profile.heroImage.asset.url : urlFor(profile.heroImage).width(1000).height(600).format("webp").url()) 
    : "/kegiatan/motion-paud-tentang.gif";

  const bannerImage = profile?.bannerImage
    ? urlFor(profile.bannerImage).width(1600).height(800).format('webp').url()
    : "/kegiatan/kegiatan-bersama-sekolah.webp";

  const heroBadge = profile?.heroBadge || "Tentang PAUD Hidayah";
  const heroTitle = profile?.heroTitle || "Tumbuh Ceria,";
  const heroTitleHighlight = profile?.heroTitleHighlight || "Belajar Bermakna";
  const heroSubtitle = profile?.heroSubtitle || "PAUD Hidayah mendampingi setiap anak tumbuh menjadi generasi yang cerdas, mandiri, kreatif, dan berakhlak Islami melalui pembelajaran yang menyenangkan dan berpusat pada anak.";
  const heroPills = profile?.heroPills && profile.heroPills.length > 0 
    ? profile.heroPills 
    : ["✦ Berkarakter Islami", "✦ Ramah Anak", "✦ Kreatif dan Menyenangkan"];

  const historyTitle = profile?.historyTitle || "Profil & Perjalanan PAUD Hidayah";
  const historyContent = profile?.historyContent || profile?.history;

  const defaultMilestones = [
    {
      year: "1968",
      title: "Inisiatif Pendirian Awal",
      description: "Didirikan atas inisiatif tokoh masyarakat & Muslimat, bertempat di kediaman Ibu Muflichah.",
      badge: "Awal Mula",
      isCurrent: false,
    },
    {
      year: "1970",
      title: "Menempati Lokasi Wakaf",
      description: "Menetap resmi di Desa Tayu Wetan RT 06 RW 01 di atas tanah wakaf keluarga Ibu Juwariyah.",
      badge: "Lokasi Permanen",
      isCurrent: false,
    },
    {
      year: "Sekarang",
      title: "Sentra & Nilai Qur'ani",
      description: "Menyelenggarakan pembelajaran berbasis Sentra, APE, dan nilai Islami untuk 180+ anak didik.",
      badge: "Masa Kini",
      isCurrent: true,
    },
  ];

  const milestones = profile?.milestones && profile.milestones.length > 0
    ? profile.milestones
    : defaultMilestones;

  const vision = profile?.vision || "Terwujudnya lembaga pendidikan yang mampu membekali anak dalam bidang literasi, numerasi dan teknologi digital serta berbudaya dan berkarakter Islami";
  const mission = profile?.mission && profile.mission.length > 0
    ? profile.mission
    : [
        "Melaksanakan program dengan pendekatan Literasi, Numerasi, dan Steam.",
        "Melaksanakan program pembelajaran dengan pengembangan kemampuan teknologi digital.",
        "Melaksanakan pembelajaran Al Qur’an dan kegiatan keagamaan secara terencana melalui pembiasaan.",
        "Mensukseskan program sekolah tentang gerakan literasi, numerasi, sejak dini dengan cara yang mudah, asyik dan menyenangkan.",
        "Mengembangkan kegiatan ekstrakurikuler permainan tradisional dan budaya lokal."
      ];

  const bannerBadge = profile?.bannerBadge || "Kebersamaan Sekolah";
  const bannerTitle = profile?.bannerTitle || "Keluarga Besar Murid & Dewan Guru PAUD Hidayah";
  const bannerSubtitle = profile?.bannerSubtitle || "Membina tunas bangsa dengan kasih sayang, keceriaan bermain, dan keteladanan akhlak Qur'ani.";

  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen relative overflow-hidden font-sans selection:bg-[#FCD116] selection:text-[#188B48]">
      
      {/* ================= BACKGROUND DECORATIVE ELEMENTS ================= */}
      {/* Subtle Dot Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#188B48_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none"></div>

      {/* Ambient Blurred Glow Blobs */}
      <div className="absolute top-[450px] right-0 w-[500px] h-[500px] bg-[#FCD116]/15 rounded-full blur-[120px] pointer-events-none translate-x-1/3"></div>
      <div className="absolute top-[1150px] left-0 w-[450px] h-[450px] bg-[#188B48]/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3"></div>
      <div className="absolute top-[1850px] right-10 w-[420px] h-[420px] bg-[#34D399]/15 rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-[#FCD116]/10 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Playful Floating Organic Accent Shapes */}
      <div className="absolute top-[520px] left-8 w-24 h-24 bg-[#FCD116]/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] pointer-events-none rotate-12 blur-[1px]"></div>
      <div className="absolute top-[850px] right-8 w-20 h-20 bg-[#188B48]/15 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] pointer-events-none -rotate-12 blur-[1px]"></div>
      <div className="absolute top-[1400px] left-12 w-16 h-16 bg-[#34D399]/20 rounded-full pointer-events-none"></div>
      <div className="absolute top-[2000px] left-1/4 w-20 h-20 bg-[#FCD116]/15 rounded-[50%_50%_40%_60%/40%_60%_50%_50%] pointer-events-none rotate-45"></div>

      {/* ================= HERO SECTION (Islamic Playful Editorial) ================= */}
      <section className="w-full bg-[#188B48] pt-28 pb-14 md:pt-32 md:pb-18 relative overflow-hidden">
        {/* Soft Hero Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FCD116]/15 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* LEFT: TEXT COLUMN */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <span className="inline-block px-4 py-2 bg-white/20 text-[#FCD116] border border-white/30 font-bold rounded-full tracking-widest uppercase text-xs sm:text-sm shadow-sm backdrop-blur-sm">
              {heroBadge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight tracking-tight">
              {heroTitle}<br/>
              <span className="text-[#FCD116] drop-shadow-sm">{heroTitleHighlight}</span>
            </h1>
            <p className="text-base sm:text-lg text-white/95 max-w-lg leading-relaxed">
              {heroSubtitle}
            </p>
            
            {/* Editorial Badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
              {heroPills.map((pill: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-white font-semibold text-[15px]">
                  <span className="text-[#FCD116] text-lg">✦</span> {pill.replace(/^✦\s*/, '')}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: IMAGE/VIDEO COLUMN (Landscape Organic Islamic Frame) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-[540px]">
              {/* Decorative background accent (yellow gold backdrop) */}
              <div className="absolute -inset-2.5 sm:-inset-3 bg-gradient-to-tr from-[#FCD116] to-[#FCD116]/60 rounded-[38px] sm:rounded-[46px] rotate-2 scale-[1.02] opacity-85 shadow-2xl -z-10"></div>
              
              {/* Main media container with 16:9 aspect ratio */}
              <div className="relative w-full aspect-[16/9] rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl border-[5px] sm:border-[6px] border-white bg-slate-900 group">
                {isMotionPhoto ? (
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster={heroImage}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  >
                    <source src="/kegiatan/motion-paud-tentang.mp4" type="video/mp4" />
                    <img 
                      src={heroImage} 
                      alt={heroTitle || "Dewan Guru & Murid PAUD Hidayah"} 
                      className="w-full h-full object-cover object-center"
                    />
                  </video>
                ) : (
                  <img 
                    src={heroImage} 
                    alt={heroTitle || "Anak-anak & Guru PAUD Hidayah"} 
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                )}

                {/* Subtle live motion badge */}
                <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-20 flex items-center gap-2 px-3 py-1 bg-black/45 backdrop-blur-md rounded-full text-white text-[11px] sm:text-xs font-medium border border-white/20 shadow-md pointer-events-none">
                  <span className="w-2 h-2 rounded-full bg-[#FCD116] animate-pulse"></span>
                  <span>Dokumentasi PAUD</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden -mt-1 bg-[#FDFCF8] relative z-20">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
          <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#188B48" />
        </svg>
      </div>

      {/* ================= SEJARAH & TIMELINE ================= */}
      <section className="w-full py-20 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#188B48]/10 text-[#188B48] text-xs font-bold uppercase tracking-wider mb-2">
              Sejarah &amp; Perjalanan
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{historyTitle}</h2>
            <div className="w-16 h-1.5 bg-[#FCD116] rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Sejarah Text */}
            <div className="lg:col-span-7 space-y-5 text-gray-700 font-body-md text-base leading-relaxed bg-white/70 backdrop-blur-sm p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
              {historyContent ? (
                <div className="prose prose-emerald max-w-none text-gray-700 leading-relaxed space-y-4">
                  <PortableText value={historyContent} />
                </div>
              ) : (
                <>
                  <p>
                    <strong>PAUD Hidayah</strong> merupakan lembaga Pendidikan Anak Usia Dini yang berlokasi di Desa Tayu Wetan, Kecamatan Tayu, Kabupaten Pati, Jawa Tengah. Berada di lingkungan masyarakat yang religius dan kaya akan potensi budaya lokal, PAUD Hidayah berkomitmen memberikan layanan pendidikan yang berkualitas dengan memadukan nilai-nilai Islami, kearifan lokal, dan pembelajaran yang sesuai dengan tahap perkembangan anak.
                  </p>
                  <p>
                    PAUD Hidayah didirikan pada tahun 1968 atas inisiatif para pendiri dan tokoh masyarakat, termasuk ibu-ibu Muslimat, untuk memenuhi kebutuhan pendidikan anak usia dini di lingkungan setempat. Pada awalnya, kegiatan pembelajaran dilaksanakan di kediaman Ibu Muflichah, kemudian berpindah beberapa kali hingga pada tahun 1970 menetap di Desa Tayu Wetan RT 06 RW 01 di atas tanah wakaf keluarga Ibu Juwariyah.
                  </p>
                  <p>
                    Dalam pelaksanaan pembelajaran, PAUD Hidayah mengedepankan kegiatan yang aktif, kreatif, dan menyenangkan melalui pemanfaatan alat permainan edukatif (APE), eksplorasi lingkungan, permainan edukatif, serta kegiatan yang mengembangkan minat dan bakat anak.
                  </p>
                </>
              )}
            </div>

            {/* Timeline (Aesthetic Accent) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-200/80 relative overflow-hidden">
                <h3 className="text-2xl font-bold text-[#188B48] mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#FCD116] text-[28px]">schedule</span>
                  Tonggak Sejarah
                </h3>
                
                <div className="flex flex-col gap-8 relative before:absolute before:inset-y-2 before:left-[11px] before:w-0.5 before:bg-gray-200">
                  {milestones.map((item: any, idx: number) => {
                    const isCurrent = item.isCurrent || item.year?.toLowerCase() === 'sekarang';
                    return (
                      <div key={idx} className="relative pl-10">
                        <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center z-10 ${isCurrent ? 'bg-[#188B48] shadow-md' : 'bg-[#FCD116] shadow-sm'}`}>
                          {isCurrent && <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>}
                        </div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-[#188B48] text-xl">{item.year}</h4>
                          {item.badge && (
                            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-[#188B48] border border-emerald-100">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        {item.title && <h5 className="font-semibold text-gray-900 text-sm mb-1">{item.title}</h5>}
                        <p className="text-[14px] text-gray-600 leading-relaxed">{item.description || item.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISI & MISI ================= */}
      <section className="w-full bg-[#EAF3EF]/60 py-24 border-y border-[#188B48]/10 relative z-10 backdrop-blur-[2px]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Visi */}
            <div className="bg-[#188B48] text-white rounded-[40px] p-10 md:p-14 relative overflow-hidden shadow-xl flex flex-col justify-center">
              <div className="absolute -top-16 -right-16 text-white/5 rotate-12 pointer-events-none">
                <span className="material-symbols-outlined" style={{ fontSize: '240px', fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 relative z-10 flex items-center gap-3 text-white">
                <span className="text-[#FCD116]">✦</span> Visi
              </h3>
              <p className="text-xl md:text-2xl leading-relaxed italic relative z-10 font-light opacity-95">
                &ldquo;{vision}&rdquo;
              </p>
            </div>

            {/* Misi */}
            <div className="bg-white rounded-[40px] p-10 md:p-14 shadow-md border border-gray-100 relative flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#188B48] mb-8 flex items-center gap-3">
                <span className="text-[#FCD116]">✦</span> Misi
              </h3>
              <ul className="space-y-4">
                {mission?.map((m: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-gray-700">
                    <span className="material-symbols-outlined text-[#188B48] text-[24px] shrink-0 mt-0.5">check_circle</span>
                    <span className="text-base sm:text-lg leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= DOKUMENTASI KEGIATAN & KEBERSAMAAN ================= */}
      <section className="w-full py-16 md:py-24 relative z-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative w-full rounded-[36px] overflow-hidden shadow-xl border-4 border-white aspect-[16/9] md:aspect-[21/9] group bg-gray-100">
            <Image
              src={bannerImage}
              alt={bannerTitle}
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            {/* Soft gradient overlay with caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCD116] text-[#1b1c1a] font-bold text-xs uppercase tracking-wider mb-2">
                  {bannerBadge}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  {bannerTitle}
                </h3>
              </div>
              <p className="text-white/80 text-sm max-w-md hidden md:block">
                {bannerSubtitle}
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
