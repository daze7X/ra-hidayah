import Link from "next/link";

export const revalidate = 0;

// Data statis untuk 4 variasi program
const programsData: Record<string, any> = {
  "tk-a": {
    badge: "TK A (Usia 4–5 Tahun)",
    title: "Mengenal, Bereksplorasi, dan Mulai Mandiri",
    desc: "Program pembelajaran untuk anak usia 4–5 tahun melalui kegiatan bermain, eksplorasi, dan pembiasaan yang menyenangkan.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAby3nFVP69Hg7rEX10Yk5-k6Tz0GQzeBFUa14K1pSDSF8nNIvoP1fjxQJGWxwtn8wtr4yRXatuZQKcaRcXADEsghjM6LEZcjIDvL93KDkcNI53sZEc3Hef1xEACff-zb5cm8wqxNOoek0KFTrzWCR8w61T8nytr8JAv2PvdFcgSVAEOn9JPGPtFtFnbWh96CbZOcW3OVLLGtoFv2fapAjMluxeAVerAG2z4MOAw9o5Dcnb-B0Cmnwv",
    about: "Di usia 4-5 tahun, anak mulai mengenal lingkungan dengan lebih luas. Program TK A dirancang untuk mengembangkan potensi dasar anak, membangun kemandirian, serta menumbuhkan rasa percaya diri dalam suasana yang hangat dan menyenangkan.",
    goals: [
      "Mengembangkan kemampuan dasar kognitif, bahasa, sosial, dan motorik.",
      "Membiasakan anak dengan nilai-nilai Islami sejak dini.",
      "Menumbuhkan kemandirian dan percaya diri."
    ],
    featuresTitle: "Apa yang Dikembangkan?",
    features: [
      { icon: "chat", title: "Bahasa", desc: "Komunikasi & Percakapan" },
      { icon: "calculate", title: "Numerasi", desc: "Mengenal Angka & Konsep Matematika" },
      { icon: "sports_gymnastics", title: "Motorik", desc: "Motorik Kasar & Halus" },
      { icon: "diversity_1", title: "Sosial", desc: "Interaksi & Kerja Sama" },
      { icon: "mosque", title: "Karakter", desc: "Akhlak & Nilai Islami" }
    ],
    gallery: [
      { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPV_vbEUjB6A5Zt81MX_xoP75aiW0Z-dHYZ0I4Ds9ja_KJt7dHNleWhb0nMGQjRzxqqT8-feNuibyIQ1AnF2FT8SV3rfVTjlkr1H0ZSJdRtvwZMT4x04b65JM2cWv-Rr1g28aECOH_NcL0DgBx7X6ph__qprV5845K7yU7nIt4urwGIGs9LhPFC_inbNKbqv_em7S4qhB8fi6z4dnnG_lABd0IblSOva6c0TDQBIueveckTIsjk9ni", caption: "Belajar Melalui Bermain" },
      { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAby3nFVP69Hg7rEX10Yk5-k6Tz0GQzeBFUa14K1pSDSF8nNIvoP1fjxQJGWxwtn8wtr4yRXatuZQKcaRcXADEsghjM6LEZcjIDvL93KDkcNI53sZEc3Hef1xEACff-zb5cm8wqxNOoek0KFTrzWCR8w61T8nytr8JAv2PvdFcgSVAEOn9JPGPtFtFnbWh96CbZOcW3OVLLGtoFv2fapAjMluxeAVerAG2z4MOAw9o5Dcnb-B0Cmnwv", caption: "Kegiatan Seni & Kreativitas" },
      { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPV_vbEUjB6A5Zt81MX_xoP75aiW0Z-dHYZ0I4Ds9ja_KJt7dHNleWhb0nMGQjRzxqqT8-feNuibyIQ1AnF2FT8SV3rfVTjlkr1H0ZSJdRtvwZMT4x04b65JM2cWv-Rr1g28aECOH_NcL0DgBx7X6ph__qprV5845K7yU7nIt4urwGIGs9LhPFC_inbNKbqv_em7S4qhB8fi6z4dnnG_lABd0IblSOva6c0TDQBIueveckTIsjk9ni", caption: "Pembiasaan Ibadah" }
    ]
  },
  "tk-b": {
    badge: "TK B (Usia 5–6 Tahun)",
    title: "Bersiap Tumbuh Lebih Mandiri",
    desc: "Mendampingi anak usia 5–6 tahun mengembangkan kemampuan, kreativitas, dan kemandirian sebagai bekal menuju jenjang pendidikan berikutnya.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPV_vbEUjB6A5Zt81MX_xoP75aiW0Z-dHYZ0I4Ds9ja_KJt7dHNleWhb0nMGQjRzxqqT8-feNuibyIQ1AnF2FT8SV3rfVTjlkr1H0ZSJdRtvwZMT4x04b65JM2cWv-Rr1g28aECOH_NcL0DgBx7X6ph__qprV5845K7yU7nIt4urwGIGs9LhPFC_inbNKbqv_em7S4qhB8fi6z4dnnG_lABd0IblSOva6c0TDQBIueveckTIsjk9ni",
    about: "Di tahap ini, anak semakin aktif, ingin tahu, dan siap mengembangkan berbagai keterampilan. Program TK B difokuskan pada penguatan literasi, numerasi, kemandirian, serta pembentukan karakter Islami yang kuat.",
    goals: [
      "Meningkatkan kemampuan kognitif dan akademik dasar.",
      "Melatih kemandirian dan tanggung jawab.",
      "Menyiapkan mental anak untuk jenjang Sekolah Dasar."
    ],
    featuresTitle: "Fokus Pembelajaran",
    features: [
      { icon: "school", title: "Kesiapan Sekolah", desc: "Mental & Sosial" },
      { icon: "menu_book", title: "Literasi & Numerasi", desc: "Membaca, Menulis, Berhitung (Calistung)" },
      { icon: "biotech", title: "Sains & Eksplorasi", desc: "Rasa Ingin Tahu & Daya Kritis" },
      { icon: "self_improvement", title: "Kemandirian", desc: "Self Help & Life Skills" },
      { icon: "mood", title: "Sosial & Emosional", desc: "Empati & Berbagi" }
    ],
    gallery: [
      { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAby3nFVP69Hg7rEX10Yk5-k6Tz0GQzeBFUa14K1pSDSF8nNIvoP1fjxQJGWxwtn8wtr4yRXatuZQKcaRcXADEsghjM6LEZcjIDvL93KDkcNI53sZEc3Hef1xEACff-zb5cm8wqxNOoek0KFTrzWCR8w61T8nytr8JAv2PvdFcgSVAEOn9JPGPtFtFnbWh96CbZOcW3OVLLGtoFv2fapAjMluxeAVerAG2z4MOAw9o5Dcnb-B0Cmnwv", caption: "Proyek Tematik Mandiri" },
      { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPV_vbEUjB6A5Zt81MX_xoP75aiW0Z-dHYZ0I4Ds9ja_KJt7dHNleWhb0nMGQjRzxqqT8-feNuibyIQ1AnF2FT8SV3rfVTjlkr1H0ZSJdRtvwZMT4x04b65JM2cWv-Rr1g28aECOH_NcL0DgBx7X6ph__qprV5845K7yU7nIt4urwGIGs9LhPFC_inbNKbqv_em7S4qhB8fi6z4dnnG_lABd0IblSOva6c0TDQBIueveckTIsjk9ni", caption: "Eksperimen Sederhana" },
      { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAby3nFVP69Hg7rEX10Yk5-k6Tz0GQzeBFUa14K1pSDSF8nNIvoP1fjxQJGWxwtn8wtr4yRXatuZQKcaRcXADEsghjM6LEZcjIDvL93KDkcNI53sZEc3Hef1xEACff-zb5cm8wqxNOoek0KFTrzWCR8w61T8nytr8JAv2PvdFcgSVAEOn9JPGPtFtFnbWh96CbZOcW3OVLLGtoFv2fapAjMluxeAVerAG2z4MOAw9o5Dcnb-B0Cmnwv", caption: "Praktik Keagamaan" }
    ]
  },
  "playgroup": {
    badge: "Taman Bermain (Playgroup)",
    title: "Dunia Pertama untuk Belajar dan Bermain",
    desc: "Ruang aman dan menyenangkan bagi anak usia dini untuk mengenal lingkungan, bermain bersama, dan membangun rasa percaya diri.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAby3nFVP69Hg7rEX10Yk5-k6Tz0GQzeBFUa14K1pSDSF8nNIvoP1fjxQJGWxwtn8wtr4yRXatuZQKcaRcXADEsghjM6LEZcjIDvL93KDkcNI53sZEc3Hef1xEACff-zb5cm8wqxNOoek0KFTrzWCR8w61T8nytr8JAv2PvdFcgSVAEOn9JPGPtFtFnbWh96CbZOcW3OVLLGtoFv2fapAjMluxeAVerAG2z4MOAw9o5Dcnb-B0Cmnwv",
    about: "Program Playgroup di PAUD Hidayah dirancang khusus untuk membantu anak beradaptasi dengan lingkungan sekolah. Kami mengutamakan stimulasi bermain yang mengasah sensorik, motorik, dan kemampuan bergaul secara natural.",
    goals: [
      "Membantu anak merasa aman dan nyaman di lingkungan baru.",
      "Mengembangkan motorik kasar dan halus melalui bermain.",
      "Menumbuhkan rasa ingin tahu dan keberanian bereksplorasi."
    ],
    featuresTitle: "Manfaat Utama",
    features: [
      { icon: "waving_hand", title: "Bersosialisasi", desc: "Mendapat Teman Baru" },
      { icon: "directions_run", title: "Motorik Aktif", desc: "Bergerak & Bermain Fisik" },
      { icon: "record_voice_over", title: "Bahasa", desc: "Kosakata Awal" },
      { icon: "brush", title: "Kreativitas", desc: "Seni & Imajinasi" }
    ],
    gallery: [
      { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPV_vbEUjB6A5Zt81MX_xoP75aiW0Z-dHYZ0I4Ds9ja_KJt7dHNleWhb0nMGQjRzxqqT8-feNuibyIQ1AnF2FT8SV3rfVTjlkr1H0ZSJdRtvwZMT4x04b65JM2cWv-Rr1g28aECOH_NcL0DgBx7X6ph__qprV5845K7yU7nIt4urwGIGs9LhPFC_inbNKbqv_em7S4qhB8fi6z4dnnG_lABd0IblSOva6c0TDQBIueveckTIsjk9ni", caption: "Bermain di Luar Ruangan" },
      { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAby3nFVP69Hg7rEX10Yk5-k6Tz0GQzeBFUa14K1pSDSF8nNIvoP1fjxQJGWxwtn8wtr4yRXatuZQKcaRcXADEsghjM6LEZcjIDvL93KDkcNI53sZEc3Hef1xEACff-zb5cm8wqxNOoek0KFTrzWCR8w61T8nytr8JAv2PvdFcgSVAEOn9JPGPtFtFnbWh96CbZOcW3OVLLGtoFv2fapAjMluxeAVerAG2z4MOAw9o5Dcnb-B0Cmnwv", caption: "Bernyanyi & Bercerita" },
      { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPV_vbEUjB6A5Zt81MX_xoP75aiW0Z-dHYZ0I4Ds9ja_KJt7dHNleWhb0nMGQjRzxqqT8-feNuibyIQ1AnF2FT8SV3rfVTjlkr1H0ZSJdRtvwZMT4x04b65JM2cWv-Rr1g28aECOH_NcL0DgBx7X6ph__qprV5845K7yU7nIt4urwGIGs9LhPFC_inbNKbqv_em7S4qhB8fi6z4dnnG_lABd0IblSOva6c0TDQBIueveckTIsjk9ni", caption: "Mewarnai & Berkarya" }
    ]
  },
  "ekstrakurikuler": {
    badge: "Ekstrakurikuler",
    title: "Temukan Minat, Kembangkan Bakat",
    desc: "Beragam kegiatan yang membantu anak mengeksplorasi minat dan mengembangkan potensi melalui pengalaman yang menyenangkan.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPV_vbEUjB6A5Zt81MX_xoP75aiW0Z-dHYZ0I4Ds9ja_KJt7dHNleWhb0nMGQjRzxqqT8-feNuibyIQ1AnF2FT8SV3rfVTjlkr1H0ZSJdRtvwZMT4x04b65JM2cWv-Rr1g28aECOH_NcL0DgBx7X6ph__qprV5845K7yU7nIt4urwGIGs9LhPFC_inbNKbqv_em7S4qhB8fi6z4dnnG_lABd0IblSOva6c0TDQBIueveckTIsjk9ni",
    about: "Selain program intrakurikuler, PAUD Hidayah menyediakan kegiatan ekstrakurikuler yang bertujuan untuk mewadahi minat khusus anak. Kami percaya setiap anak memiliki potensi unik yang perlu digali sejak dini.",
    goals: [
      "Menyalurkan energi dan minat anak ke kegiatan positif.",
      "Membangun rasa percaya diri melalui kompetensi baru.",
      "Melatih kedisiplinan dan sportivitas."
    ],
    featuresTitle: "Pilihan Ekstrakurikuler",
    features: [
      { icon: "auto_stories", title: "Tahfidz Juz 30", desc: "Membiasakan cinta Al-Qur'an sejak dini" },
      { icon: "music_note", title: "Seni Tari", desc: "Melatih motorik dan percaya diri" },
      { icon: "record_voice_over", title: "Bahasa Inggris", desc: "Meningkatkan kemampuan bahasa" },
      { icon: "biotech", title: "Sains", desc: "Menumbuhkan rasa ingin tahu" },
      { icon: "piano", title: "Musik", desc: "Melatih konsentrasi & kreativitas" },
      { icon: "sports_soccer", title: "Olahraga", desc: "Menjaga kesehatan & kebugaran" }
    ],
    gallery: [
      { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAby3nFVP69Hg7rEX10Yk5-k6Tz0GQzeBFUa14K1pSDSF8nNIvoP1fjxQJGWxwtn8wtr4yRXatuZQKcaRcXADEsghjM6LEZcjIDvL93KDkcNI53sZEc3Hef1xEACff-zb5cm8wqxNOoek0KFTrzWCR8w61T8nytr8JAv2PvdFcgSVAEOn9JPGPtFtFnbWh96CbZOcW3OVLLGtoFv2fapAjMluxeAVerAG2z4MOAw9o5Dcnb-B0Cmnwv", caption: "Kegiatan Tahfidz" },
      { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPV_vbEUjB6A5Zt81MX_xoP75aiW0Z-dHYZ0I4Ds9ja_KJt7dHNleWhb0nMGQjRzxqqT8-feNuibyIQ1AnF2FT8SV3rfVTjlkr1H0ZSJdRtvwZMT4x04b65JM2cWv-Rr1g28aECOH_NcL0DgBx7X6ph__qprV5845K7yU7nIt4urwGIGs9LhPFC_inbNKbqv_em7S4qhB8fi6z4dnnG_lABd0IblSOva6c0TDQBIueveckTIsjk9ni", caption: "Pentas Seni" },
      { img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAby3nFVP69Hg7rEX10Yk5-k6Tz0GQzeBFUa14K1pSDSF8nNIvoP1fjxQJGWxwtn8wtr4yRXatuZQKcaRcXADEsghjM6LEZcjIDvL93KDkcNI53sZEc3Hef1xEACff-zb5cm8wqxNOoek0KFTrzWCR8w61T8nytr8JAv2PvdFcgSVAEOn9JPGPtFtFnbWh96CbZOcW3OVLLGtoFv2fapAjMluxeAVerAG2z4MOAw9o5Dcnb-B0Cmnwv", caption: "Olahraga Bersama" }
    ]
  }
};

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const data = programsData[resolvedParams.slug];

  if (!data) {
    return (
      <main className="w-full pt-32 pb-20 bg-[#FDFCF8] min-h-screen text-center">
        <h1 className="text-2xl font-bold text-[#188B48]">Program tidak ditemukan.</h1>
        <Link href="/program" className="text-[#188B48] mt-4 inline-block underline">Kembali ke daftar program</Link>
      </main>
    );
  }

  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen pb-24 overflow-hidden font-sans pt-16">
      
      {/* ================= HERO SECTION ================= */}
      <section className="w-full pt-36 md:pt-48 pb-24 md:pb-32 relative bg-gradient-to-br from-[#188B48] to-[#126b37]">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full border border-white/30">
              <span className="text-[12px] font-bold text-white tracking-widest uppercase">
                {data.badge}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-[1.15] tracking-tight">
              {data.title}
            </h1>
            
            <p className="text-[16px] text-white/90 max-w-md leading-relaxed mt-2">
              {data.desc}
            </p>
          </div>
          
          <div className="relative flex justify-center lg:justify-end">
             <div className="absolute top-2 -right-4 w-[90%] aspect-[4/3] bg-[#34D399] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] -z-10 blur-sm opacity-20"></div>
             
             <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-[30%_70%_50%_50%/50%_40%_60%_50%] overflow-hidden shadow-2xl border-[6px] border-white">
               <img 
                 src={data.image} 
                 alt={data.title} 
                 className="w-full h-full object-cover"
               />
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

      {/* ================= TENTANG PROGRAM ================= */}
      <section className="w-full py-16 ">
        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-[#FCD116]">info</span>
              <h2 className="text-2xl font-bold text-[#188B48]">Tentang Program</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {data.about}
            </p>
          </div>
          <div className="bg-white p-8 rounded-[24px] shadow-[0_8px_30px_rgba(0,64,40,0.04)] border border-[#188B48]/5">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-[#188B48]">check_circle</span>
              <h3 className="text-xl font-bold text-[#188B48]">Tujuan Kami</h3>
            </div>
            <ul className="space-y-4">
              {data.goals.map((goal: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-[#FCD116] mt-2 shrink-0"></div>
                  <span className="leading-relaxed">{goal}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= FITUR / FOKUS ================= */}
      <section className="w-full pt-16 pb-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-10">
            <span className="material-symbols-outlined text-[#FCD116]">star</span>
            <h2 className="text-2xl font-bold text-[#188B48]">{data.featuresTitle}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {data.features.map((feature: any, idx: number) => (
              <div key={idx} className="bg-white p-6 rounded-[24px] shadow-[0_8px_30px_rgba(0,64,40,0.04)] border border-[#188B48]/5 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
                <div className="w-14 h-14 rounded-full bg-[#EAF3EF] text-[#188B48] flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-[28px]">{feature.icon}</span>
                </div>
                <h4 className="font-bold text-[#188B48] mb-1">{feature.title}</h4>
                <p className="text-[12px] text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MINI GALERI KEGIATAN ================= */}
      <section className="w-full pt-8 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-8">
            <span className="material-symbols-outlined text-[#FCD116]">photo_library</span>
            <h2 className="text-2xl font-bold text-[#188B48]">Kegiatan Sehari-hari</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.gallery?.map((item: any, idx: number) => (
              <div key={idx} className="group relative rounded-[24px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-gray-100 aspect-[4/3]">
                <img 
                  src={item.img} 
                  alt={item.caption} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#188B48]/80 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-bold text-[16px] drop-shadow-md">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full mt-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-[#188B48] rounded-[32px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#188B48] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 opacity-50"></div>
            
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">Tertarik mendaftarkan putra/putri Anda?</h3>
              <p className="text-white/80">Kami siap menyambut buah hati Anda di PAUD Hidayah.</p>
            </div>
            
            <a href="#kontak" className="relative z-10 px-8 py-3.5 bg-[#FCD116] hover:bg-white text-[#188B48] font-bold rounded-full transition-colors shadow-lg flex items-center gap-2">
              Hubungi Kami <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
