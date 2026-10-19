import { client } from "../../../../sanity/lib/client";
import { urlFor } from "../../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 0;

// Fetch data from Sanity
async function getProfileData() {
  const profileQuery = `*[_type == "schoolProfile"][0]`;
  const profile = await client.fetch(profileQuery, {}, { next: { revalidate: 0 } });
  return profile;
}

export default async function ProfilTK() {
  const profile = await getProfileData();

  if (!profile) {
    return (
      <main className="w-full pt-32 pb-20 bg-surface min-h-screen text-center">
        <h1 className="text-2xl font-bold text-primary">Data Profil belum tersedia.</h1>
        <p>Pastikan Anda sudah menekan tombol Publish pada data Profil di Sanity Studio.</p>
      </main>
    );
  }

  const heroImage = profile?.heroImage 
    ? urlFor(profile.heroImage).width(800).height(1000).format('webp').url() 
    : "/kegiatan/kegiatan-sentra-belajar.webp";

  return (
    <main className="w-full bg-surface min-h-screen">
      
      {/* ================= HERO SECTION (Islamic Playful Editorial) ================= */}
      <section className="w-full bg-[#188B48] pt-28 pb-14 md:pt-32 md:pb-18 relative overflow-hidden">
        {/* Subtle Islamic Geometry Glows (Not overwhelming) */}
        
        

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* LEFT: TEXT COLUMN */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <span className="inline-block px-4 py-2 bg-secondary-container text-on-secondary-container font-label-md font-bold rounded-full tracking-widest uppercase text-sm shadow-sm border border-secondary/20">
              Tentang PAUD Hidayah
            </span>
            <h1 className="font-display-hero text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
              Tumbuh Ceria,<br/>
              <span className="text-[#FCD116] drop-shadow-sm">Belajar Bermakna</span>
            </h1>
            <p className="font-body-lg text-lg text-white max-w-lg leading-relaxed mt-2">
              PAUD Hidayah mendampingi setiap anak tumbuh menjadi generasi yang cerdas, mandiri, kreatif, dan berakhlak Islami melalui pembelajaran yang menyenangkan dan berpusat pada anak.
            </p>
            
            {/* Editorial Badges */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 mt-4">
              <div className="flex items-center gap-2 text-white font-label-md text-[15px]">
                <span className="text-[#FCD116] text-lg">✦</span> Berkarakter Islami
              </div>
              <div className="flex items-center gap-2 text-white font-label-md text-[15px]">
                <span className="text-[#FCD116] text-lg">✦</span> Ramah Anak
              </div>
              <div className="flex items-center gap-2 text-white font-label-md text-[15px]">
                <span className="text-[#FCD116] text-lg">✦</span> Kreatif dan Menyenangkan
              </div>
            </div>
          </div>

          {/* RIGHT: IMAGE COLUMN (Mihrab Arch Shape) */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end w-full mt-8 lg:mt-0">
            <div className="relative w-full max-w-[400px]">
              {/* Decorative background arch (yellow accent) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-secondary/80 to-secondary-container rounded-t-[160px] rounded-b-[40px] rotate-3 scale-105 opacity-60 shadow-lg"></div>
              {/* Main image container */}
              <div className="relative w-full aspect-[4/5] rounded-t-[160px] rounded-b-[40px] overflow-hidden shadow-2xl border-4 border-surface-container-lowest bg-surface">
                {/* Fallback image placeholder (You can change this src to any real image) */}
                <Image 
                  src={heroImage} 
                  alt="Anak-anak PAUD Hidayah" 
                  fill 
                  className="object-cover hover:scale-105 transition-transform duration-700" 
                />
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
      <section className="w-full bg-surface py-20 relative border-t border-outline-variant/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-headline-lg text-3xl md:text-4xl text-primary">Profil &amp; Perjalanan PAUD Hidayah</h2>
            <div className="w-16 h-1.5 bg-secondary rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sejarah Text */}
            <div className="lg:col-span-7 space-y-5 text-gray-700 font-body-md text-base leading-relaxed">
              <p>
                <strong>PAUD Hidayah</strong> merupakan lembaga Pendidikan Anak Usia Dini yang berlokasi di Desa Tayu Wetan, Kecamatan Tayu, Kabupaten Pati, Jawa Tengah. Berada di lingkungan masyarakat yang religius dan kaya akan potensi budaya lokal, PAUD Hidayah berkomitmen memberikan layanan pendidikan yang berkualitas dengan memadukan nilai-nilai Islami, kearifan lokal, dan pembelajaran yang sesuai dengan tahap perkembangan anak.
              </p>
              <p>
                PAUD Hidayah didirikan pada tahun 1968 atas inisiatif para pendiri dan tokoh masyarakat, termasuk ibu-ibu Muslimat, untuk memenuhi kebutuhan pendidikan anak usia dini di lingkungan setempat. Pada awalnya, kegiatan pembelajaran dilaksanakan di kediaman Ibu Muflichah, kemudian berpindah beberapa kali hingga pada tahun 1970 menetap di Desa Tayu Wetan RT 06 RW 01 di atas tanah wakaf keluarga Ibu Juwariyah.
              </p>
              <p>
                Dalam pelaksanaan pembelajaran, PAUD Hidayah mengedepankan kegiatan yang aktif, kreatif, dan menyenangkan melalui pemanfaatan alat permainan edukatif (APE), eksplorasi lingkungan, permainan edukatif, serta kegiatan yang mengembangkan minat dan bakat anak. Pembelajaran juga diintegrasikan dengan nilai-nilai Islam melalui pembiasaan berdoa, salat, Asmaul Husna, hafalan surah pendek, doa harian, dan pengenalan huruf hijaiyah.
              </p>
              <p>
                Selain mengembangkan kemampuan dasar anak, PAUD Hidayah memberikan perhatian terhadap pembentukan karakter, kemandirian, kreativitas, kemampuan sosial, serta perkembangan fisik dan emosional anak. Lingkungan masyarakat yang religius dan budaya lokal, seperti tradisi sedekah bumi dan kegiatan keagamaan, turut menjadi sumber belajar yang bermakna bagi anak.
              </p>
              <p>
                PAUD Hidayah juga menjalin kerja sama dengan orang tua dan masyarakat untuk menciptakan lingkungan pendidikan yang aman, nyaman, dan mendukung tumbuh kembang anak secara optimal. Melalui pendidikan yang berpusat pada anak dan berlandaskan nilai-nilai Islami, PAUD Hidayah berkomitmen membentuk generasi yang sehat, cerdas, ceria, kreatif, mandiri, serta berakhlakul karimah.
              </p>
              {profile.history && (
                <div className="mt-6 pt-6 border-t border-outline-variant/30 prose prose-lg">
                  <PortableText value={profile.history} />
                </div>
              )}
            </div>

            {/* Timeline (Aesthetic Accent) */}
            <div className="lg:col-span-5">
              <div className="bg-surface-container-lowest rounded-[32px] p-8 md:p-10 shadow-sm border border-outline-variant/40 relative overflow-hidden">
                <h3 className="font-headline-sm text-2xl text-primary mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-[28px]">schedule</span>
                  Tonggak Sejarah
                </h3>
                
                <div className="flex flex-col gap-8 relative before:absolute before:inset-y-2 before:left-[11px] before:w-0.5 before:bg-outline-variant/40">
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-secondary-container border-4 border-surface-container-lowest flex items-center justify-center z-10 shadow-sm"></div>
                    <h4 className="font-bold text-primary font-label-lg text-xl mb-1">1968</h4>
                    <p className="text-[14px] text-gray-600 leading-relaxed">Didirikan atas inisiatif tokoh masyarakat &amp; Muslimat, bertempat di kediaman Ibu Muflichah.</p>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-secondary-container border-4 border-surface-container-lowest flex items-center justify-center z-10 shadow-sm"></div>
                    <h4 className="font-bold text-primary font-label-lg text-xl mb-1">1970</h4>
                    <p className="text-[14px] text-gray-600 leading-relaxed">Menetap resmi di Desa Tayu Wetan RT 06 RW 01 di atas tanah wakaf keluarga Ibu Juwariyah.</p>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary border-4 border-surface-container-lowest flex items-center justify-center z-10 shadow-md">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    </div>
                    <h4 className="font-bold text-primary font-label-lg text-xl mb-1">Sekarang</h4>
                    <p className="text-[14px] text-gray-600 leading-relaxed">Menyelenggarakan pembelajaran berbasis Sentra, APE, dan nilai Islami untuk 180+ anak didik.</p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= VISI & MISI ================= */}
      <section className="w-full bg-surface-container-low py-24 border-t border-outline-variant/30 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Visi */}
            <div className="bg-primary text-on-primary rounded-[40px] p-10 md:p-14 relative overflow-hidden shadow-xl flex flex-col justify-center">
              {/* Subtle Corner Ornament */}
              <div className="absolute -top-16 -right-16 text-white/5 rotate-12 pointer-events-none">
                <span className="material-symbols-outlined" style={{ fontSize: '240px', fontVariationSettings: "'FILL' 1" }}>star</span>
              </div>
              <h3 className="font-headline-lg text-3xl md:text-4xl mb-6 relative z-10 flex items-center gap-3">
                <span className="text-secondary">✦</span> Visi
              </h3>
              <p className="font-body-lg text-2xl md:text-[28px] leading-snug italic relative z-10 font-light opacity-90">
                "{profile.vision}"
              </p>
            </div>

            {/* Misi */}
            <div className="bg-surface-container-lowest rounded-[40px] p-10 md:p-14 shadow-md border border-outline-variant/20 relative">
              <h3 className="font-headline-lg text-3xl md:text-4xl text-primary mb-8 flex items-center gap-3">
                <span className="text-secondary">✦</span> Misi
              </h3>
              <ul className="space-y-5">
                {profile.mission?.map((m: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-on-surface-variant font-body-md">
                    <span className="material-symbols-outlined text-secondary text-[28px] shrink-0">arrow_right_alt</span>
                    <span className="pt-0.5 text-lg leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= DOKUMENTASI KEGIATAN & KEBERSAMAAN ================= */}
      <section className="w-full bg-surface py-16 md:py-24 border-t border-outline-variant/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="relative w-full rounded-[36px] overflow-hidden shadow-xl border-4 border-white aspect-[16/9] md:aspect-[21/9] group bg-gray-100">
            <Image
              src="/kegiatan/kegiatan-bersama-sekolah.webp"
              alt="Kebersamaan Seluruh Murid dan Dewan Guru PAUD Hidayah"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
            {/* Soft gradient overlay with caption */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 md:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FCD116] text-[#1b1c1a] font-bold text-xs uppercase tracking-wider mb-2">
                  Kebersamaan Sekolah
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  Keluarga Besar Murid &amp; Dewan Guru PAUD Hidayah
                </h3>
              </div>
              <p className="text-white/80 text-sm max-w-md hidden md:block">
                Membina tunas bangsa dengan kasih sayang, keceriaan bermain, dan keteladanan akhlak Qur&apos;ani.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
