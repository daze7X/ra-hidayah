import Link from "next/link";
import Image from "next/image";

export const revalidate = 0;

export default function ProgramLandingPage() {
  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen pb-24 overflow-hidden font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="w-full pt-36 pb-16 relative">
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
               <img 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuAby3nFVP69Hg7rEX10Yk5-k6Tz0GQzeBFUa14K1pSDSF8nNIvoP1fjxQJGWxwtn8wtr4yRXatuZQKcaRcXADEsghjM6LEZcjIDvL93KDkcNI53sZEc3Hef1xEACff-zb5cm8wqxNOoek0KFTrzWCR8w61T8nytr8JAv2PvdFcgSVAEOn9JPGPtFtFnbWh96CbZOcW3OVLLGtoFv2fapAjMluxeAVerAG2z4MOAw9o5Dcnb-B0Cmnwv" 
                 alt="Anak-anak belajar di PAUD Hidayah" 
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
            
            {/* TK A */}
            <Link href="/program/tk-a" className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,64,40,0.06)] border border-[#188B48]/5 flex flex-col group hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,64,40,0.12)] transition-all duration-300">
              <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAby3nFVP69Hg7rEX10Yk5-k6Tz0GQzeBFUa14K1pSDSF8nNIvoP1fjxQJGWxwtn8wtr4yRXatuZQKcaRcXADEsghjM6LEZcjIDvL93KDkcNI53sZEc3Hef1xEACff-zb5cm8wqxNOoek0KFTrzWCR8w61T8nytr8JAv2PvdFcgSVAEOn9JPGPtFtFnbWh96CbZOcW3OVLLGtoFv2fapAjMluxeAVerAG2z4MOAw9o5Dcnb-B0Cmnwv" alt="TK A" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[12px] font-bold text-[#188B48] shadow-sm">
                  Usia 4-5 Tahun
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-[20px] font-bold text-[#188B48] mb-2 group-hover:text-[#188B48] transition-colors">TK A</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-2">Mengenal lingkungan, bereksplorasi, dan mulai membangun kemandirian.</p>
                <div className="mt-auto flex items-center gap-2 text-[#188B48] font-bold text-[14px] group-hover:gap-3 transition-all">
                  Lihat Program <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* TK B */}
            <Link href="/program/tk-b" className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,64,40,0.06)] border border-[#188B48]/5 flex flex-col group hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,64,40,0.12)] transition-all duration-300">
              <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPV_vbEUjB6A5Zt81MX_xoP75aiW0Z-dHYZ0I4Ds9ja_KJt7dHNleWhb0nMGQjRzxqqT8-feNuibyIQ1AnF2FT8SV3rfVTjlkr1H0ZSJdRtvwZMT4x04b65JM2cWv-Rr1g28aECOH_NcL0DgBx7X6ph__qprV5845K7yU7nIt4urwGIGs9LhPFC_inbNKbqv_em7S4qhB8fi6z4dnnG_lABd0IblSOva6c0TDQBIueveckTIsjk9ni" alt="TK B" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[12px] font-bold text-[#188B48] shadow-sm">
                  Usia 5-6 Tahun
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-[20px] font-bold text-[#188B48] mb-2 group-hover:text-[#188B48] transition-colors">TK B</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-2">Bersiap untuk jenjang sekolah dasar dengan kemandirian dan fokus belajar.</p>
                <div className="mt-auto flex items-center gap-2 text-[#188B48] font-bold text-[14px] group-hover:gap-3 transition-all">
                  Lihat Program <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Playgroup */}
            <Link href="/program/playgroup" className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,64,40,0.06)] border border-[#188B48]/5 flex flex-col group hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,64,40,0.12)] transition-all duration-300">
              <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAby3nFVP69Hg7rEX10Yk5-k6Tz0GQzeBFUa14K1pSDSF8nNIvoP1fjxQJGWxwtn8wtr4yRXatuZQKcaRcXADEsghjM6LEZcjIDvL93KDkcNI53sZEc3Hef1xEACff-zb5cm8wqxNOoek0KFTrzWCR8w61T8nytr8JAv2PvdFcgSVAEOn9JPGPtFtFnbWh96CbZOcW3OVLLGtoFv2fapAjMluxeAVerAG2z4MOAw9o5Dcnb-B0Cmnwv" alt="Playgroup" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[12px] font-bold text-[#188B48] shadow-sm">
                  Usia 3-4 Tahun
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-[20px] font-bold text-[#188B48] mb-2 group-hover:text-[#188B48] transition-colors">Taman Bermain</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-2">Ruang aman dan menyenangkan untuk mengenal lingkungan pertama kali.</p>
                <div className="mt-auto flex items-center gap-2 text-[#188B48] font-bold text-[14px] group-hover:gap-3 transition-all">
                  Lihat Program <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </Link>

            {/* Ekstrakurikuler */}
            <Link href="/program/ekstrakurikuler" className="bg-white rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,64,40,0.06)] border border-[#188B48]/5 flex flex-col group hover:-translate-y-2 hover:shadow-[0_16px_40px_rgba(0,64,40,0.12)] transition-all duration-300">
              <div className="w-full aspect-[4/3] bg-gray-100 relative overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPV_vbEUjB6A5Zt81MX_xoP75aiW0Z-dHYZ0I4Ds9ja_KJt7dHNleWhb0nMGQjRzxqqT8-feNuibyIQ1AnF2FT8SV3rfVTjlkr1H0ZSJdRtvwZMT4x04b65JM2cWv-Rr1g28aECOH_NcL0DgBx7X6ph__qprV5845K7yU7nIt4urwGIGs9LhPFC_inbNKbqv_em7S4qhB8fi6z4dnnG_lABd0IblSOva6c0TDQBIueveckTIsjk9ni" alt="Ekstrakurikuler" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full text-[12px] font-bold text-[#FCD116] shadow-sm">
                  Pengembangan Diri
                </div>
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-[20px] font-bold text-[#188B48] mb-2 group-hover:text-[#188B48] transition-colors">Ekstrakurikuler</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed mb-6 line-clamp-2">Temukan minat dan kembangkan bakat melalui beragam kegiatan interaktif.</p>
                <div className="mt-auto flex items-center gap-2 text-[#188B48] font-bold text-[14px] group-hover:gap-3 transition-all">
                  Lihat Pilihan <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}
