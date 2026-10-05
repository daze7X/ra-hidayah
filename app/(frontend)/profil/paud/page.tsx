import { client } from "../../../../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

// Fetch data from Sanity
async function getProfileData() {
  const profileQuery = `*[_type == "schoolProfile"][0]`;
  const profile = await client.fetch(profileQuery);
  return profile;
}

export default async function ProfilTK() {
  const profile = await getProfileData();

  if (!profile) {
    return (
      <main className="w-full pt-32 pb-20 bg-surface min-h-screen text-center">
        <h1 className="text-2xl font-bold text-white">Data Profil belum tersedia.</h1>
        <p>Pastikan Anda sudah menekan tombol Publish pada data Profil di Sanity Studio.</p>
      </main>
    );
  }

  return (
    <main className="w-full bg-surface min-h-screen">
      
      {/* ================= HERO SECTION (Islamic Playful Editorial) ================= */}
      <section className="w-full bg-gradient-to-br from-[#188B48] to-[#126b37] pt-36 pb-20 md:pt-48 md:pb-24 relative overflow-hidden">
        {/* Subtle Islamic Geometry Glows (Not overwhelming) */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-fixed/30 rounded-full blur-[80px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-fixed/30 rounded-full blur-[80px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
          
          {/* LEFT: TEXT COLUMN */}
          <div className="lg:col-span-6 flex flex-col items-start gap-6">
            <span className="inline-block px-4 py-2 bg-secondary-container text-on-secondary-container font-label-md font-bold rounded-full tracking-widest uppercase text-sm shadow-sm border border-secondary/20">
              Tentang PAUD Hidayah
            </span>
            <h1 className="font-display-hero text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
              Tumbuh Ceria,<br/>
              <span className="text-[#FCD116] drop-shadow-sm">Belajar dengan Makna.</span>
            </h1>
            <p className="font-body-lg text-lg text-on-surface-variant max-w-lg leading-relaxed mt-2">
              Mengenal lebih dekat perjalanan, nilai, dan lingkungan pendidikan PAUD Hidayah dalam membentuk generasi yang ceria, mandiri, cerdas, dan berakhlak Islami.
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
                <span className="text-[#FCD116] text-lg">✦</span> Pembelajaran Ceria
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
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAby3nFVP69Hg7rEX10Yk5-k6Tz0GQzeBFUa14K1pSDSF8nNIvoP1fjxQJGWxwtn8wtr4yRXatuZQKcaRcXADEsghjM6LEZcjIDvL93KDkcNI53sZEc3Hef1xEACff-zb5cm8wqxNOoek0KFTrzWCR8w61T8nytr8JAv2PvdFcgSVAEOn9JPGPtFtFnbWh96CbZOcW3OVLLGtoFv2fapAjMluxeAVerAG2z4MOAw9o5Dcnb-B0Cmnwv" 
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
          <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#126b37" />
        </svg>
      </div>

      {/* ================= SEJARAH & TIMELINE ================= */}
      <section className="w-full bg-surface py-20 relative border-t border-outline-variant/30">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="font-headline-lg text-3xl md:text-4xl text-white">Perjalanan PAUD Hidayah</h2>
            <div className="w-16 h-1.5 bg-secondary rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Sejarah Text (Sanity Portable Text) */}
            <div className="lg:col-span-7 prose prose-lg prose-p:text-on-surface-variant prose-p:leading-relaxed font-body-md text-on-surface-variant">
              {profile.history ? (
                <PortableText value={profile.history} />
              ) : (
                <p>Data sejarah belum diisi di Sanity.</p>
              )}
            </div>

            {/* Timeline (Aesthetic Accent) */}
            <div className="lg:col-span-5">
              <div className="bg-surface-container-lowest rounded-[32px] p-8 md:p-10 shadow-sm border border-outline-variant/40 relative overflow-hidden">
                <h3 className="font-headline-sm text-2xl text-white mb-8 flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#FCD116] text-[28px]">schedule</span>
                  Tonggak Sejarah
                </h3>
                
                <div className="flex flex-col gap-8 relative before:absolute before:inset-y-2 before:left-[11px] before:w-0.5 before:bg-outline-variant/40">
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-secondary-container border-4 border-surface-container-lowest flex items-center justify-center z-10 shadow-sm"></div>
                    <h4 className="font-bold text-white font-label-lg text-xl mb-1">1968</h4>
                    <p className="text-[15px] text-on-surface-variant leading-relaxed">Berdiri pertama kali oleh para pendiri dengan harapan memberikan pendidikan bermakna.</p>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-secondary-container border-4 border-surface-container-lowest flex items-center justify-center z-10 shadow-sm"></div>
                    <h4 className="font-bold text-white font-label-lg text-xl mb-1">1970</h4>
                    <p className="text-[15px] text-on-surface-variant leading-relaxed">Menetap di Desa Tayu Wetan (di atas tanah wakaf) dan resmi beroperasi sebagai Raudlatul Athfal.</p>
                  </div>
                  
                  <div className="relative pl-10">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary border-4 border-surface-container-lowest flex items-center justify-center z-10 shadow-md">
                      <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                    </div>
                    <h4 className="font-bold text-white font-label-lg text-xl mb-1">Sekarang</h4>
                    <p className="text-[15px] text-on-surface-variant leading-relaxed">Telah melayani 180+ peserta didik dengan pendekatan Literasi, Numerasi, dan STEAM.</p>
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
                <span className="text-[#FCD116]">✦</span> Visi
              </h3>
              <p className="font-body-lg text-2xl md:text-[28px] leading-snug italic relative z-10 font-light opacity-90">
                "{profile.vision}"
              </p>
            </div>

            {/* Misi */}
            <div className="bg-surface-container-lowest rounded-[40px] p-10 md:p-14 shadow-md border border-outline-variant/20 relative">
              <h3 className="font-headline-lg text-3xl md:text-4xl text-white mb-8 flex items-center gap-3">
                <span className="text-[#FCD116]">✦</span> Misi
              </h3>
              <ul className="space-y-5">
                {profile.mission?.map((m: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 text-on-surface-variant font-body-md">
                    <span className="material-symbols-outlined text-[#FCD116] text-[28px] shrink-0">arrow_right_alt</span>
                    <span className="pt-0.5 text-lg leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ================= NILAI / KARAKTER ================= */}
      <section className="w-full bg-surface py-20 border-t border-outline-variant/30">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="flex flex-col items-center text-center p-8 bg-surface-container-lowest rounded-[32px] shadow-sm hover:-translate-y-2 transition-transform duration-300 border border-outline-variant/20">
              <div className="w-16 h-16 rounded-2xl bg-secondary-fixed/50 text-[#FCD116] flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[36px]">mood</span>
              </div>
              <h4 className="font-bold text-white font-label-lg text-lg">Ceria</h4>
            </div>
            
            <div className="flex flex-col items-center text-center p-8 bg-surface-container-lowest rounded-[32px] shadow-sm hover:-translate-y-2 transition-transform duration-300 border border-outline-variant/20">
              <div className="w-16 h-16 rounded-2xl bg-primary-fixed/50 text-white flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[36px]">menu_book</span>
              </div>
              <h4 className="font-bold text-white font-label-lg text-lg">Cerdas</h4>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-surface-container-lowest rounded-[32px] shadow-sm hover:-translate-y-2 transition-transform duration-300 border border-outline-variant/20">
              <div className="w-16 h-16 rounded-2xl bg-secondary-fixed/50 text-[#FCD116] flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[36px]">self_improvement</span>
              </div>
              <h4 className="font-bold text-white font-label-lg text-lg">Mandiri</h4>
            </div>

            <div className="flex flex-col items-center text-center p-8 bg-surface-container-lowest rounded-[32px] shadow-sm hover:-translate-y-2 transition-transform duration-300 border border-outline-variant/20">
              <div className="w-16 h-16 rounded-2xl bg-primary-fixed/50 text-white flex items-center justify-center mb-5">
                <span className="material-symbols-outlined text-[36px]" style={{ fontVariationSettings: "'FILL' 1" }}>mosque</span>
              </div>
              <h4 className="font-bold text-white font-label-lg text-lg">Islami</h4>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
