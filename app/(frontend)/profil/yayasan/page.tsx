import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

export const metadata = {
  title: "Profil & Sejarah Yayasan Hidayah Tayu",
  description: "Mengenal profil, sejarah berdiri sejak 1968, visi, misi, dan kiprah Yayasan Pendidikan Islam Hidayah Tayu.",
};

async function getYayasanData() {
  const query = `*[_type == "institutionProfile" && institution == "yayasan"][0]`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function ProfilYayasanPage() {
  const profile = await getYayasanData();

  const heroImage = profile?.heroImage 
    ? urlFor(profile.heroImage).width(800).height(1000).format('webp').url() 
    : "/kegiatan/kegiatan-dewan-guru.webp";

  const heroBadge = profile?.heroBadge || "Yayasan Pendidikan Islam";
  const heroTitle = profile?.heroTitle || "Menebar Manfaat,";
  const heroTitleHighlight = profile?.heroTitleHighlight || "Membina Ummah";
  const heroSubtitle = profile?.heroSubtitle || "Yayasan Hidayah Tayu berkomitmen menyelenggarakan dan menaungi lembaga pendidikan Islam yang unggul, berakhlak mulia, dan berakar pada nilai-nilai ketakwaan sejak tahun 1968.";
  
  const heroPills = profile?.heroPills && profile.heroPills.length > 0 
    ? profile.heroPills 
    : ["✦ Berakhlakul Karimah", "✦ Amanah & Akuntabel", "✦ Mengabdi Sejak 1968"];

  const historyTitle = profile?.historyTitle || "Sejarah & Kiprah Yayasan Hidayah";
  const historyContent = profile?.historyContent;

  const defaultMilestones = [
    {
      year: "1968",
      title: "Perintisan Gerakan Pendidikan",
      description: "Para tokoh masyarakat dan Muslimat menginisiasi gerakan pendidikan anak berlandaskan nilai-nilai Islam di Desa Tayu Wetan.",
      badge: "Awal Mula",
      isCurrent: false,
    },
    {
      year: "1970",
      title: "Penerimaan Amanah Tanah Wakaf",
      description: "Menerima wakaf tanah dari keluarga Ibu Juwariyah di Tayu Wetan RT 06 RW 01 yang menjadi basis sarana fisik pendidikan yayasan.",
      badge: "Tonggak Wakaf",
      isCurrent: false,
    },
    {
      year: "2014",
      title: "Ekspansi Pendidikan Dasar (SD Islam)",
      description: "Mendirikan SD Islam Hidayah untuk memenuhi kebutuhan masyarakat akan pendidikan dasar Islam berkarakter kuat.",
      badge: "Pengembangan",
      isCurrent: false,
    },
    {
      year: "Sekarang",
      title: "Membina Generasi Unggul Berkelanjutan",
      description: "Menaungi ratusan anak didik lintas jenjang PAUD dan SD dengan sarana modern, ramah anak, dan berbudaya lingkungan.",
      badge: "Masa Kini",
      isCurrent: true,
    },
  ];

  const milestones = profile?.milestones && profile.milestones.length > 0
    ? profile.milestones
    : defaultMilestones;

  const vision = profile?.vision || "Menjadi yayasan pendidikan Islam yang amanah, unggul, dan berdaya saing dalam mencetak generasi Qur'ani yang berkarakter, berilmu, dan berwawasan lingkungan.";
  const visionSubtitle = profile?.visionSubtitle || "Menjadikan nilai-nilai Islam sebagai lentera penuntun tata kelola kelembagaan, kepedulian sosial, serta pelayanan pendidikan bagi seluruh lapisan ummah.";
  
  const mission = profile?.mission && profile.mission.length > 0
    ? profile.mission
    : [
        "Menyelenggarakan pendidikan Islam berkualitas dari usia dini hingga jenjang pendidikan dasar.",
        "Mengembangkan tata kelola yayasan yang profesional, transparan, dan akuntabel berbasis syariah.",
        "Menyediakan sarana dan prasarana pendidikan yang aman, nyaman, dan ramah lingkungan.",
        "Menjalin sinergi erat dengan masyarakat, wali murid, dan pemangku kepentingan demi kemaslahatan bersama.",
        "Membina keteladanan akhlak mulia dan kepedulian sosial di lingkungan keluarga besar yayasan."
      ];

  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen relative overflow-hidden font-sans selection:bg-[#FCD116] selection:text-[#188B48]">
      
      {/* ================= BACKGROUND DECORATIVE ELEMENTS ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(#188B48_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none"></div>
      <div className="absolute top-[450px] right-0 w-[500px] h-[500px] bg-[#FCD116]/15 rounded-full blur-[120px] pointer-events-none translate-x-1/3"></div>
      <div className="absolute top-[1150px] left-0 w-[450px] h-[450px] bg-[#188B48]/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3"></div>
      <div className="absolute top-[1850px] right-10 w-[420px] h-[420px] bg-[#34D399]/15 rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-[#FCD116]/10 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="absolute top-[520px] left-8 w-24 h-24 bg-[#FCD116]/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] pointer-events-none rotate-12 blur-[1px]"></div>
      <div className="absolute top-[850px] right-8 w-20 h-20 bg-[#188B48]/15 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] pointer-events-none -rotate-12 blur-[1px]"></div>
      <div className="absolute top-[1400px] left-12 w-16 h-16 bg-[#34D399]/20 rounded-full pointer-events-none"></div>
      <div className="absolute top-[2000px] left-1/4 w-20 h-20 bg-[#FCD116]/15 rounded-[50%_50%_40%_60%/40%_60%_50%_50%] pointer-events-none rotate-45"></div>
      
      {/* ================= HERO SECTION (Islamic Playful Editorial) ================= */}
      <section className="w-full bg-[#188B48] pt-28 pb-14 md:pt-32 md:pb-18 relative overflow-hidden text-white">
        {/* Subtle Ambient Glows */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FCD116]/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* LEFT: TEXT COLUMN */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6">
            <span className="inline-block px-4 py-1.5 bg-[#FCD116]/20 text-[#FCD116] border border-[#FCD116]/30 font-bold rounded-full tracking-widest uppercase text-xs sm:text-sm shadow-sm">
              {heroBadge}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight">
              {heroTitle}<br/>
              <span className="text-[#FCD116] drop-shadow-sm">{heroTitleHighlight}</span>
            </h1>
            <p className="text-base sm:text-lg text-white/90 max-w-xl leading-relaxed">
              {heroSubtitle}
            </p>
            
            {/* Editorial Badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
              {heroPills.map((pill: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2 text-white font-semibold text-[14px]">
                  <span className="text-[#FCD116] text-lg">✦</span> {pill.replace(/^✦\s*/, '')}
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link 
                href="/struktur-organisasi/yayasan" 
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FCD116] text-[#1b1c1a] font-bold text-xs uppercase tracking-wider hover:bg-white hover:text-[#188B48] transition-all shadow-md"
              >
                <span className="material-symbols-outlined text-[18px]">groups</span>
                Pengurus Yayasan
              </Link>
            </div>
          </div>

          {/* RIGHT: IMAGE COLUMN (Mihrab Arch Shape) */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-[380px]">
              {/* Decorative background arch */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FCD116]/80 to-[#FCD116]/40 rounded-t-[160px] rounded-b-[40px] rotate-3 scale-105 opacity-60 shadow-lg"></div>
              {/* Main image container */}
              <div className="relative w-full aspect-[4/5] rounded-t-[160px] rounded-b-[40px] overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image 
                  src={heroImage} 
                  alt={heroTitle} 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Wave Transition: Green to Cream Surface */}
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
              Kiprah Pengabdian
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">{historyTitle}</h2>
            <div className="w-16 h-1.5 bg-[#FCD116] rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sejarah Text */}
            <div className="lg:col-span-7 space-y-5 text-gray-700 font-body-md text-base leading-relaxed">
              {historyContent ? (
                <div className="prose prose-emerald max-w-none text-gray-700 leading-relaxed space-y-4">
                  <PortableText value={historyContent} />
                </div>
              ) : (
                <>
                  <p>
                    <strong>Yayasan Hidayah</strong> didirikan pada tahun 1968 di Desa Tayu Wetan, Kecamatan Tayu, Kabupaten Pati, bermula dari kepedulian tulus para tokoh masyarakat, ulama, dan kaum Muslimat terhadap masa depan pembinaan moral dan keagamaan anak-anak di lingkungan setempat.
                  </p>
                  <p>
                    Bermula dari penyelenggaraan pendidikan prasekolah di kediaman warga, Yayasan kemudian menerima amanah wakaf tanah dari keluarga Ibu Juwariyah pada tahun 1970 yang menjadi tonggak kokoh pembangunan sarana pendidikan permanen hingga hari ini.
                  </p>
                  <p>
                    Seiring derap perkembangan zaman dan tuntutan masyarakat akan kelanjutan pendidikan dasar berkualitas, Yayasan Hidayah melebarkan sayap pengabdiannya dengan mendirikan SD Islam Hidayah pada tahun 2014. Yayasan terus menjaga amanah para pendiri dengan membimbing generasi penerus yang berilmu amaliyah dan beramal ilmiah.
                  </p>
                </>
              )}
            </div>

            {/* Timeline Milestones */}
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
              {visionSubtitle && (
                <p className="mt-4 text-sm md:text-base text-white/80 leading-relaxed relative z-10">
                  {visionSubtitle}
                </p>
              )}
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

    </main>
  );
}
