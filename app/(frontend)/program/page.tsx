import Link from "next/link";
import Image from "next/image";

export const revalidate = 0;

export default function ProgramLandingPage() {
  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen pb-24 overflow-hidden font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full pt-28 pb-10 md:pt-32 md:pb-14 relative">
        {/* Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FCD116]/30 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute top-40 left-0 w-80 h-80 bg-[#34D399]/10 rounded-full blur-[80px] pointer-events-none -translate-x-1/2"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-24 right-[40%] text-[#FCD116]/80 hidden lg:block animate-pulse">
          <span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'FILL' 1" }}>flare</span>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Text Content */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-[#EAF3EF] rounded-full border border-[#188B48]/20">
              <span className="material-symbols-outlined text-[#188B48] text-[16px]">menu_book</span>
              <span className="text-[12px] font-bold text-[#188B48] tracking-widest uppercase">
                Program Pembelajaran
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#188B48] leading-[1.15] tracking-tight">
              Setiap Anak Tumbuh<br/>
              <span className="text-[#188B48]">dengan Ritme Berbeda</span>
            </h1>
            
            <p className="text-[16px] text-gray-600 max-w-lg leading-relaxed mt-2">
              Kami menyediakan ruang belajar yang sesuai dengan tahap perkembangan mereka, melalui pendekatan yang menyenangkan, aman, dan berlandaskan nilai-nilai Islami.
            </p>

            <div className="flex gap-2 mt-4">
              <div className="w-8 h-2 rounded-full bg-[#188B48]"></div>
              <div className="w-2 h-2 rounded-full bg-[#FCD116]"></div>
              <div className="w-2 h-2 rounded-full bg-[#FCD116]"></div>
            </div>
          </div>
          
          {/* Hero Image Masked */}
          <div className="relative flex justify-center lg:justify-end">
             <div className="absolute top-4 -right-4 w-[90%] aspect-[4/3] bg-[#FCD116] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10 blur-sm opacity-80"></div>
             
             <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-[30%_70%_50%_50%/50%_40%_60%_50%] overflow-hidden shadow-2xl border-[6px] border-white">
               <img src="/kegiatan/kegiatan-bersama-sekolah.webp" alt="Anak-anak dan guru PAUD Hidayah" 
                 className="w-full h-full object-cover"
               />
             </div>
          </div>

        </div>
      </section>

      {/* ================= PROGRAM CARDS ================= */}
      <section className="w-full pt-16 pb-12">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-3 justify-center mb-3">
              <span className="material-symbols-outlined text-[#FCD116] text-[32px]">school</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#188B48]">Pilihan Program Kami</h2>
            </div>
            <p className="text-gray-500 max-w-xl text-[15px]">Pilih program yang sesuai dengan tahap perkembangan dan usia anak Anda.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-12">
            
            {/* Toddler */}
            <Link href="/program/toddler" className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,64,40,0.06)] border border-[#188B48]/5 flex flex-col group hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,64,40,0.12)] transition-all duration-300">
              <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <img src="/kegiatan/kegiatan-playgroup-lingkaran.webp" alt="Program Toddler PAUD Hidayah" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[12px] font-bold text-[#188B48] shadow-sm">
                  Usia 1,5 - 3 Tahun
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-[20px] font-bold text-[#188B48] mb-2 group-hover:text-[#188B48] transition-colors">Toddler</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-2">Stimulasi panca indra, motorik halus, dan kemandirian awal balita.</p>
                <div className="mt-auto flex items-center gap-2 text-[#188B48] font-bold text-[14px] group-hover:gap-3 transition-all">
                  Lihat Program <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Kelompok Bermain (KB) */}
            <Link href="/program/kb" className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,64,40,0.06)] border border-[#188B48]/5 flex flex-col group hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,64,40,0.12)] transition-all duration-300">
              <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <img src="/kegiatan/kegiatan-sentra-belajar.webp" alt="Program Kelompok Bermain KB PAUD Hidayah" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[12px] font-bold text-[#188B48] shadow-sm">
                  Usia 3 - 4 Tahun
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-[20px] font-bold text-[#188B48] mb-2 group-hover:text-[#188B48] transition-colors">Kelompok Bermain (KB)</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-2">Ruang aman dan ceria untuk mengenal lingkungan, sosialisasi, dan bermain peran.</p>
                <div className="mt-auto flex items-center gap-2 text-[#188B48] font-bold text-[14px] group-hover:gap-3 transition-all">
                  Lihat Program <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* RA-A */}
            <Link href="/program/ra-a" className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,64,40,0.06)] border border-[#188B48]/5 flex flex-col group hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,64,40,0.12)] transition-all duration-300">
              <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <img src="/kegiatan/kegiatan-mewarnai-kupu.webp" alt="Program RA-A PAUD Hidayah" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[12px] font-bold text-[#188B48] shadow-sm">
                  Usia 4 - 5 Tahun
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-[20px] font-bold text-[#188B48] mb-2 group-hover:text-[#188B48] transition-colors">RA-A</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-2">Mengenal huruf Hijaiyah, fonik ceria, pra-calistung, dan pondasi akhlak.</p>
                <div className="mt-auto flex items-center gap-2 text-[#188B48] font-bold text-[14px] group-hover:gap-3 transition-all">
                  Lihat Program <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* RA-B */}
            <Link href="/program/ra-b" className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,64,40,0.06)] border border-[#188B48]/5 flex flex-col group hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,64,40,0.12)] transition-all duration-300">
              <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <img src="/kegiatan/kegiatan-wisuda-prestasi.webp" alt="Program RA-B PAUD Hidayah" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[12px] font-bold text-[#188B48] shadow-sm">
                  Usia 5 - 6 Tahun
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-[20px] font-bold text-[#188B48] mb-2 group-hover:text-[#188B48] transition-colors">RA-B</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-2">Kesiapan masuk jenjang SD unggul dengan kemandirian dan fokus belajar.</p>
                <div className="mt-auto flex items-center gap-2 text-[#188B48] font-bold text-[14px] group-hover:gap-3 transition-all">
                  Lihat Program <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Tahfidz */}
            <Link href="/program/tahfidz" className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,64,40,0.06)] border border-[#188B48]/5 flex flex-col group hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,64,40,0.12)] transition-all duration-300">
              <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <img src="/kegiatan/kegiatan-belajar-paviliun.webp" alt="Program Tahfidz PAUD Hidayah" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-[#188B48] text-white px-3 py-1.5 rounded-full text-[12px] font-bold shadow-sm">
                  Program Qur'ani
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-[20px] font-bold text-[#188B48] mb-2 group-hover:text-[#188B48] transition-colors">Tahfidz</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-2">Bimbingan hafalan surat-surat pendek Juz 'Amma dengan metode talaqqi ceria.</p>
                <div className="mt-auto flex items-center gap-2 text-[#188B48] font-bold text-[14px] group-hover:gap-3 transition-all">
                  Lihat Program <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* TPQ */}
            <Link href="/program/tpq" className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,64,40,0.06)] border border-[#188B48]/5 flex flex-col group hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,64,40,0.12)] transition-all duration-300">
              <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <img src="/kegiatan/kegiatan-display-sentra.webp" alt="Program TPQ PAUD Hidayah" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-[#FCD116] text-[#188B48] px-3 py-1.5 rounded-full text-[12px] font-bold shadow-sm">
                  Taman Pendidikan Al-Qur'an
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-[20px] font-bold text-[#188B48] mb-2 group-hover:text-[#188B48] transition-colors">TPQ</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-2">Pondasi membaca Al-Qur'an tartil, makhroj fasih, dan praktek ibadah harian.</p>
                <div className="mt-auto flex items-center gap-2 text-[#188B48] font-bold text-[14px] group-hover:gap-3 transition-all">
                  Lihat Program <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </Link>

          </div>

          {/* Ekstrakurikuler Banner Card */}
          <div className="bg-white rounded-[28px] overflow-hidden shadow-[0_8px_30px_rgba(0,64,40,0.06)] border border-[#188B48]/10 p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 group hover:border-[#188B48]/30 transition-all">
            <div className="w-full lg:w-1/3 aspect-[16/10] rounded-[20px] overflow-hidden bg-gray-100 relative shrink-0">
              <img src="/kegiatan/kegiatan-panggung-prestasi.webp" alt="Ekstrakurikuler PAUD Hidayah" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-3 left-3 bg-[#FCD116] px-3 py-1 rounded-full text-[12px] font-bold text-[#188B48] shadow-sm">
                Minat &amp; Bakat
              </div>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col">
              <span className="text-[12px] font-bold text-[#188B48] uppercase tracking-widest mb-1">Pengembangan Bakat &amp; Karakter</span>
              <h3 className="text-2xl md:text-3xl font-bold text-[#188B48] mb-3">Ekstrakurikuler</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
                Wadah menyalurkan minat, kreativitas, dan energi positif anak melalui Seni Tari, Drumband Cilik, Melukis &amp; Mewarnai, serta Permainan Tradisional yang melestarikan kearifan lokal.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-[#EAF3EF] text-[#188B48] text-xs font-semibold">✦ Seni Tari</span>
                <span className="px-3 py-1 rounded-full bg-[#EAF3EF] text-[#188B48] text-xs font-semibold">✦ Drumband</span>
                <span className="px-3 py-1 rounded-full bg-[#EAF3EF] text-[#188B48] text-xs font-semibold">✦ Melukis</span>
                <span className="px-3 py-1 rounded-full bg-[#EAF3EF] text-[#188B48] text-xs font-semibold">✦ Permainan Tradisional</span>
              </div>
              <div>
                <Link href="/program/ekstrakurikuler" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#188B48] text-white font-bold text-[14px] hover:bg-[#14753c] transition-colors shadow-md">
                  Lihat Detail Ekstrakurikuler <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
