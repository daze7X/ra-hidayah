import { client } from "@/sanity/lib/client";
import Link from "next/link";

export const metadata = {
  title: "Profil & Sejarah SD Islam Hidayah Tayu - Yayasan Hidayah",
  description: "Mengenal profil, sejarah berdiri, visi, misi, dan program unggulan SD Islam Hidayah Tayu. Sekolah Adiwiyata Nasional berkarakter Islami.",
};

async function getSettings() {
  try {
    return await client.fetch(`*[_type == "siteSettings"][0]`);
  } catch (error) {
    return null;
  }
}

export default async function ProfilSDPage() {
  const settings = await getSettings();
  const rawPhone = settings?.phone || "0851 8740 9266";
  let waPhone = rawPhone.replace(/\D/g, "");
  if (waPhone.startsWith("0")) waPhone = "62" + waPhone.slice(1);

  const programs = [
    {
      title: "Kelas Sentra",
      desc: "Model pembelajaran interaktif berbasis bermain peran dan eksplorasi sensorial untuk merangsang kreativitas serta kemandirian.",
      icon: "widgets",
      badge: "Kreativitas",
    },
    {
      title: "TPQ Qiroati 5 Jilid",
      desc: "Metode belajar membaca Al-Qur'an tartil yang terstruktur, menjaga kefasihan makharijul huruf dan tajwid sejak kelas awal.",
      icon: "menu_book",
      badge: "Al-Qur'an",
    },
    {
      title: "Tahfiz Al-Qur'an",
      desc: "Bimbingan hafalan terpadu juz 'Amma dan surat-surat pilihan dengan target capaian yang terukur dan mutqin.",
      icon: "auto_stories",
      badge: "Tahfiz",
    },
    {
      title: "Cooking Class",
      desc: "Praktik memasak sederhana untuk menanamkan pemahaman gizi halal-sehat, motorik halus, dan kebersamaan tim.",
      icon: "skillet",
      badge: "Life Skills",
    },
    {
      title: "Gerakan PBLHS",
      desc: "Peduli dan Berbudaya Lingkungan Hidup Sekolah: pembiasaan pilah sampah, hemat energi, komposting, dan penghijauan.",
      icon: "eco",
      badge: "Adiwiyata",
    },
    {
      title: "Sekolah Ramah Anak",
      desc: "Komitmen menghadirkan lingkungan belajar yang aman, nyaman, inklusif, penuh kasih sayang, dan bebas perundungan.",
      icon: "family_restroom",
      badge: "Karakter",
    },
    {
      title: "Outing Class & Edukasi Lapangan",
      desc: "Belajar kontekstual di luar kelas menghubungkan teori materi dengan observasi nyata di alam dan lingkungan masyarakat.",
      icon: "explore",
      badge: "Kontekstual",
    },
  ];

  const directions = [
    {
      number: "01",
      title: "Penguatan Pendidikan Islam",
      desc: "Membiasakan murid membaca dan menghafal Al-Qur’an, melaksanakan ibadah harian berjamaah, serta menerapkan adab dan nilai-nilai Islam dalam kehidupan sehari-hari.",
      icon: "mosque",
    },
    {
      number: "02",
      title: "Akademik & Kreativitas Inkuiri",
      desc: "Mengembangkan pembelajaran inkuiri kolaboratif yang mendorong murid berpikir kritis, pemecahan masalah sederhana, komunikasi persuasif, dan kerja sama tim.",
      icon: "psychology",
    },
    {
      number: "03",
      title: "Pemanfaatan Teknologi Informasi",
      desc: "Mengembangkan literasi digital yang sehat serta memanfaatkan teknologi edukasi modern sebagai media pendukung pembelajaran yang interaktif dan bermakna.",
      icon: "devices",
    },
    {
      number: "04",
      title: "Karakter & Kecakapan Hidup",
      desc: "Menumbuhkan kedisiplinan, kemandirian, rasa tanggung jawab, integritas, dan jiwa kepemimpinan yang berguna dalam menghadapi tantangan zaman.",
      icon: "handshake",
    },
    {
      number: "05",
      title: "Budaya Peduli Lingkungan Hidup",
      desc: "Mendorong seluruh warga sekolah untuk aktif menjaga kebersihan, mengelola sampah terpadu, menghemat energi, dan melestarikan lingkungan sekitar.",
      icon: "park",
    },
    {
      number: "06",
      title: "Pengembangan Bakat & Prestasi",
      desc: "Memberikan ruang seluas-luasnya bagi murid untuk mengeksplorasi bakat melalui aneka ekstrakurikuler, perlombaan sains, seni budaya, olahraga, dan keagamaan.",
      icon: "emoji_events",
    },
  ];

  const milestones = [
    {
      year: "14 Juni 2014",
      title: "Pendirian & Awal Berdirinya Sekolah",
      desc: "Didirikan sebagai wujud komitmen Yayasan Hidayah dalam menyediakan pendidikan dasar Islam bermutu. Di awal pendirian, kegiatan belajar mengajar menempati Gedung Darun Nashri melalui kerja sama dengan pihak pondok.",
      badge: "Awal Mula",
    },
    {
      year: "2016",
      title: "Pembangunan Kampus Mandiri",
      desc: "SD Islam Hidayah mulai membangun gedung sekolah baru di Desa Tayu Kulon sebagai langkah strategis menuju kemandirian sarana dan prasarana pendidikan yang representatif.",
      badge: "Pembangunan",
    },
    {
      year: "2017",
      title: "Perpindahan ke Eks SD Tayu Wetan 01",
      desc: "Seiring bertambahnya kepercayaan masyarakat dan kebutuhan ruang belajar, aktivitas pembelajaran berpindah sementara ke eks gedung SD Tayu Wetan 01 di kawasan Alun-Alun Tayu.",
      badge: "Perkembangan",
    },
    {
      year: "Kini & Masa Depan",
      title: "Kampus Mandiri Desa Tayu Kulon",
      desc: "Resmi menempati kampus mandiri di Desa Tayu Kulon RT 03/RW 04 hingga sekarang. Terus bertumbuh sebagai sekolah Islam unggul, ramah anak, dan berbudaya lingkungan hidup.",
      badge: "Kampus Utama",
    },
  ];

  const adiwiyataAchievements = [
    {
      year: "2023",
      level: "Tingkat Kabupaten",
      title: "Sekolah Adiwiyata Kabupaten",
      desc: "Penghargaan perdana atas konsistensi pembiasaan ramah lingkungan dan pengelolaan sampah terpadu di tingkat Kabupaten Pati.",
      icon: "verified",
    },
    {
      year: "2024",
      level: "Tingkat Provinsi",
      title: "Sekolah Adiwiyata Provinsi",
      desc: "Apresiasi bergengsi Pemerintah Provinsi Jawa Tengah atas inovasi kurikulum berbasis kepedulian lingkungan hidup.",
      icon: "workspace_premium",
    },
    {
      year: "2025",
      level: "Tingkat Nasional",
      title: "Sekolah Adiwiyata Nasional",
      desc: "Pencapaian puncak pengakuan Kementerian LHK dan Kemendikbudristek sebagai teladan sekolah berbudaya lingkungan se-Indonesia.",
      icon: "military_tech",
    },
  ];

  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen font-sans selection:bg-[#FCD116] selection:text-[#188B48]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full bg-[#188B48] text-white pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
        {/* Soft Decorative Ambient Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FCD116]/10 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & Introduction */}
            <div className="lg:col-span-7 flex flex-col items-start gap-5">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FCD116] text-[13px] font-bold uppercase tracking-wider">
                <span className="material-symbols-outlined text-[18px]">school</span>
                Lembaga Pendidikan Dasar Swasta
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-white tracking-tight">
                SD Islam Hidayah <span className="text-[#FCD116] drop-shadow-sm">Tayu</span>
              </h1>
              
              <p className="text-white/90 text-base md:text-lg leading-relaxed max-w-xl">
                Lembaga pendidikan dasar yang mengintegrasikan nilai-nilai keislaman, pengembangan ilmu pengetahuan, keterampilan abad 21, dan budaya peduli lingkungan hidup di bawah naungan Yayasan Hidayah.
              </p>

              {/* Highlight Badges */}
              <div className="flex flex-wrap gap-2.5 pt-2">
                <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[13px] font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#FCD116] text-[16px]">military_tech</span>
                  Adiwiyata Nasional 2025
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[13px] font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#FCD116] text-[16px]">menu_book</span>
                  TPQ Qiroati &amp; Tahfiz
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/20 text-white text-[13px] font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#FCD116] text-[16px]">favorite</span>
                  Sekolah Ramah Anak
                </span>
              </div>
            </div>

            {/* Right Column: Official Snapshot Bento */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 sm:p-8 shadow-2xl text-white relative">
                <div className="flex items-center justify-between pb-5 border-b border-white/15 mb-5">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/70 font-semibold">Identitas Lembaga</p>
                    <h3 className="text-xl font-bold text-white mt-0.5">SD Islam Hidayah Tayu</h3>
                  </div>
                  <span className="w-12 h-12 rounded-2xl bg-[#FCD116] text-[#188B48] flex items-center justify-center font-bold text-xl shadow-md">
                    SD
                  </span>
                </div>

                <div className="space-y-3.5 text-sm">
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-white/70 shrink-0">NPSN</span>
                    <span className="font-bold text-right font-mono bg-white/10 px-2 py-0.5 rounded text-white">69880234</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-white/70 shrink-0">Status Sekolah</span>
                    <span className="font-semibold text-right text-white">Swasta (Yayasan Hidayah)</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-white/70 shrink-0">Tanggal Berdiri</span>
                    <span className="font-semibold text-right text-white">14 Juni 2014</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-white/70 shrink-0">Kepala Sekolah</span>
                    <span className="font-bold text-right text-[#FCD116]">Sri Surami Widyastuti, S.Pd.</span>
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-white/70 shrink-0">Lokasi</span>
                    <span className="font-medium text-right text-white/90">Tayu Kulon RT 03/RW 04, Pati</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-white/15 flex items-center justify-between text-xs text-white/80">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Aktif Beroperasi
                  </span>
                  <a 
                    href="https://sdipkhidayah.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#FCD116] hover:underline flex items-center gap-1 font-semibold"
                  >
                    sdipkhidayah.com
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Wave Transition: Green to Cream Surface */}
      <div className="w-full overflow-hidden -mt-1 bg-[#FDFCF8] relative z-20">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 block">
          <path d="M0,0 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 Z" fill="#188B48" />
        </svg>
      </div>

      {/* ================= VISI & FILOSOFI PEMBELAJARAN ================= */}
      <section className="w-full py-16 md:py-24 bg-[#FDFCF8] relative">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Visi Card (Hero Editorial) */}
            <div className="lg:col-span-6 bg-gradient-to-br from-[#188B48] to-[#126b37] text-white rounded-[32px] p-8 md:p-12 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#FCD116]/10 rounded-full blur-2xl pointer-events-none"></div>
              
              <div>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-[#FCD116] text-xs font-bold uppercase tracking-wider mb-6">
                  <span className="material-symbols-outlined text-[16px]">visibility</span>
                  Visi Sekolah
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold leading-snug mb-6 text-white">
                  &ldquo;Mewujudkan Generasi Islami yang Berakhlakul Karimah, Cerdas, Kreatif, dan Peduli Lingkungan.&rdquo;
                </h3>
                
                <p className="text-white/85 text-sm md:text-base leading-relaxed">
                  Visi tersebut menjadi fondasi pokok dalam setiap kegiatan pembelajaran, pengembangan program intrakurikuler dan kokurikuler, pembiasaan karakter luhur, hingga pelestarian alam sekitar.
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-white/15 grid grid-cols-3 gap-3 text-center">
                <div className="bg-white/10 rounded-2xl p-3">
                  <p className="text-xl font-bold text-[#FCD116]">Ilmu</p>
                  <p className="text-[11px] text-white/80 uppercase tracking-wider mt-0.5">Pengetahuan</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-3">
                  <p className="text-xl font-bold text-[#FCD116]">Iman</p>
                  <p className="text-[11px] text-white/80 uppercase tracking-wider mt-0.5">Keyakinan</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-3">
                  <p className="text-xl font-bold text-[#FCD116]">Amal</p>
                  <p className="text-[11px] text-white/80 uppercase tracking-wider mt-0.5">Perilaku Nyata</p>
                </div>
              </div>
            </div>

            {/* Pendekatan Inkuiri & Suasana Belajar */}
            <div className="lg:col-span-6 flex flex-col justify-between gap-6">
              <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-sm border border-gray-100 flex-1 flex flex-col justify-center">
                <div className="w-12 h-12 rounded-2xl bg-[#188B48]/10 text-[#188B48] flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[28px]">hub</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Pendekatan Inkuiri Kolaboratif
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
                  SD Islam Hidayah mengadopsi pembelajaran berbasis eksplorasi aktif. Murid diajak untuk mengamati, menanya, mencoba, dan mengaitkan materi ilmu dengan konteks kehidupan nyata, sehingga terbangun kemampuan berpikir kritis dan kecakapan bekerja sama.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="bg-[#FDFCF8] border border-gray-200/80 rounded-xl p-3 text-center">
                    <p className="font-bold text-[#188B48] text-sm">Kritis</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">Menganalisis</p>
                  </div>
                  <div className="bg-[#FDFCF8] border border-gray-200/80 rounded-xl p-3 text-center">
                    <p className="font-bold text-[#188B48] text-sm">Kreatif</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">Solutif</p>
                  </div>
                  <div className="bg-[#FDFCF8] border border-gray-200/80 rounded-xl p-3 text-center">
                    <p className="font-bold text-[#188B48] text-sm">Komunikatif</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">Ekspresif</p>
                  </div>
                  <div className="bg-[#FDFCF8] border border-gray-200/80 rounded-xl p-3 text-center">
                    <p className="font-bold text-[#188B48] text-sm">Kolaboratif</p>
                    <p className="text-[11px] text-gray-500 mt-0.5">Gotong Royong</p>
                  </div>
                </div>
              </div>

              {/* Suasana Belajar */}
              <div className="bg-white rounded-[28px] p-6 sm:p-7 shadow-sm border border-gray-100 flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#FCD116]/20 text-[#188B48] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[32px]">sentiment_very_satisfied</span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Aktif, Menyenangkan &amp; Bermakna</h4>
                  <p className="text-gray-600 text-sm mt-0.5 leading-relaxed">
                    Setiap hari sekolah dirancang sebagai wahana pembiasaan ibadah teratur, pembentukan budi pekerti, dan penemuan ilmu yang membahagiakan murid.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= TONGGAK SEJARAH PERJALANAN ================= */}
      <section className="w-full py-20 bg-white border-y border-gray-100 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#188B48]/10 text-[#188B48] text-xs font-bold uppercase tracking-wider mb-3">
              Perjalanan Panjang
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Sejarah Berdirinya SD Islam Hidayah
            </h2>
            <p className="text-gray-600 text-base mt-3 leading-relaxed">
              Tumbuh melalui semangat pengabdian, kerja sama kelembagaan, dan pengembangan berkesinambungan demi mewujudkan sarana pendidikan terbaik.
            </p>
          </div>

          {/* Timeline Cards Grid */}
          <div className="relative">
            {/* Desktop timeline line connecting cards */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#188B48] via-[#FCD116] to-[#188B48] -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {milestones.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-[#FDFCF8] rounded-3xl p-6 sm:p-7 border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between relative group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#188B48]/10 text-[#188B48] uppercase tracking-wider">
                        {item.badge}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white border-2 border-[#188B48] text-[#188B48] font-bold text-xs flex items-center justify-center shadow-sm group-hover:bg-[#188B48] group-hover:text-white transition-colors">
                        {idx + 1}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[#188B48] mb-1">
                      {item.year}
                    </h3>
                    <h4 className="font-bold text-gray-900 text-base mb-3 leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 text-[13.5px] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-gray-200/50 flex items-center text-xs text-gray-400">
                    <span className="material-symbols-outlined text-[16px] mr-1 text-[#188B48]">check_circle</span>
                    Tonggak Perjalanan
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sejarah Narrative Summary Box */}
          <div className="mt-14 bg-gradient-to-r from-[#EAF3EF] to-[#FDFCF8] border border-[#188B48]/20 rounded-3xl p-6 sm:p-8 md:p-10">
            <div className="flex flex-col md:flex-row gap-6 md:items-center">
              <div className="w-16 h-16 rounded-2xl bg-[#188B48] text-white flex items-center justify-center shrink-0 shadow-md">
                <span className="material-symbols-outlined text-[36px]">auto_stories</span>
              </div>
              <div className="flex-1">
                <h4 className="text-xl font-bold text-[#188B48] mb-2">Semangat Ketulusan &amp; Pengabdian Berkelanjutan</h4>
                <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                  Perjalanan dari Gedung Darun Nashri, ke eks SD Tayu Wetan 01 di Alun-Alun Tayu, hingga kini menempati lokasi mandiri di Desa Tayu Kulon membuktikan dedikasi tanpa henti Yayasan Hidayah. Sekolah terus berupaya menghadirkan ruang belajar yang aman, representatif, serta adaptif terhadap kebutuhan tumbuh kembang anak di era modern.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= PRESTASI ADIWIYATA BERJENJANG ================= */}
      <section className="w-full py-20 bg-gradient-to-b from-[#FDFCF8] to-[#EAF3EF]/40 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="material-symbols-outlined text-[16px]">eco</span>
              Komitmen Lingkungan Hidup
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Sekolah Adiwiyata Berkelanjutan
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Bukti nyata dedikasi seluruh warga sekolah dalam membudayakan kepedulian terhadap kelestarian alam dan lingkungan hidup secara berjenjang.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {adiwiyataAchievements.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 shadow-sm border border-emerald-100 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-emerald-50 rounded-full blur-xl pointer-events-none -mr-6 -mt-6"></div>
                
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl font-black text-[#188B48] font-mono tracking-tight">
                      {item.year}
                    </span>
                    <span className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#188B48] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[28px]">{item.icon}</span>
                    </span>
                  </div>

                  <span className="inline-block px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-2">
                    {item.level}
                  </span>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-semibold text-[#188B48]">
                  <span className="material-symbols-outlined text-[16px]">check_circle</span>
                  Sertifikasi Resmi
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= 6 ARAH PENGEMBANGAN PENDIDIKAN ================= */}
      <section className="w-full py-20 bg-white border-t border-gray-100 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#188B48]/10 text-[#188B48] text-xs font-bold uppercase tracking-wider mb-3">
              Kurikulum Holistik
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              6 Pilar Arah Pendidikan Sekolah
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Menyelaraskan kecerdasan intelektual, kematangan spiritual, keterampilan hidup, dan kesadaran ekologis murid.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directions.map((dir, idx) => (
              <div 
                key={idx}
                className="bg-[#FDFCF8] rounded-3xl p-7 border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#188B48]/10 text-[#188B48] flex items-center justify-center group-hover:bg-[#188B48] group-hover:text-white transition-colors duration-300">
                      <span className="material-symbols-outlined text-[26px]">{dir.icon}</span>
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-400 group-hover:text-[#188B48] transition-colors">
                      {dir.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2.5 group-hover:text-[#188B48] transition-colors">
                    {dir.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {dir.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= PROGRAM UNGGULAN ================= */}
      <section className="w-full py-20 bg-[#FDFCF8] border-t border-gray-100 relative">
        <div className="max-w-[1200px] mx-auto px-6">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-[#188B48]/10 text-[#188B48] text-xs font-bold uppercase tracking-wider mb-3">
                Keunggulan Spesifik
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Program Unggulan Sekolah
              </h2>
              <p className="text-gray-600 text-base mt-2 max-w-xl">
                Aktivitas pembelajaran terprogram yang dirancang untuk mengasah potensi keagamaan, kecakapan hidup, dan kepemimpinan murid.
              </p>
            </div>

            <Link 
              href="/program/ekstrakurikuler" 
              className="inline-flex items-center gap-2 text-sm font-bold text-[#188B48] hover:text-[#126b37] hover:underline shrink-0"
            >
              Lihat Ekstrakurikuler
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((prog, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-7 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#FCD116]/20 text-[#1b1c1a] text-xs font-bold uppercase tracking-wider">
                      {prog.badge}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#188B48]/10 text-[#188B48] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[22px]">{prog.icon}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {prog.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {prog.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= INFORMASI KONTAK & PENDAFTARAN (CTA) ================= */}
      <section className="w-full py-20 bg-gradient-to-br from-[#188B48] to-[#126b37] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FCD116]/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[36px] p-8 md:p-14 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
            
            <div className="max-w-2xl text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FCD116] text-[#1b1c1a] text-xs font-bold uppercase tracking-wider mb-4">
                <span className="material-symbols-outlined text-[16px]">celebration</span>
                Penerimaan Peserta Didik Baru
              </span>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white mb-4">
                Mari Bertumbuh Bersama SD Islam Hidayah Tayu
              </h2>
              <p className="text-white/90 text-base leading-relaxed mb-6">
                Kami siap mendampingi putra-putri Anda meraih prestasi terbaik, berakhlak mulia, dan mencintai lingkungan hidup sejak usia dasar.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-xs sm:text-sm text-white/80">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#FCD116] text-[18px]">mail</span>
                  sdipkhidayahtayu@gmail.com
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#FCD116] text-[18px]">location_on</span>
                  Desa Tayu Kulon, Kab. Pati
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full lg:w-auto">
              <a 
                href={`https://wa.me/${waPhone}?text=Halo%20Admin%20SD%20Islam%20Hidayah%20Tayu,%20saya%20ingin%20bertanya%20mengenai%20pendaftaran%20murid%20baru.`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#FCD116] text-[#1b1c1a] font-bold text-sm shadow-lg hover:bg-white hover:text-[#188B48] transition-all hover:scale-105"
              >
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Hubungi via WhatsApp
              </a>

              <Link 
                href="/struktur-organisasi/sd" 
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/15 text-white font-semibold text-sm border border-white/30 hover:bg-white hover:text-[#188B48] transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">groups</span>
                Struktur Guru &amp; Tendik
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
