import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export const revalidate = 0;

// Data program pendidikan dan ekstrakurikuler PAUD Hidayah
const programsData: Record<string, any> = {
  "toddler": {
    badge: "Toddler (Usia 1,5–3 Tahun)",
    title: "Ruang Tumbuh & Eksplorasi Sensori Balita",
    desc: "Menstimulasi panca indra, motorik halus, dan kemandirian awal balita dalam lingkungan yang aman, hangat, dan penuh kasih sayang.",
    image: "/kegiatan/kegiatan-playgroup-lingkaran.webp",
    about: "Program Toddler di PAUD Hidayah dirancang khusus untuk memfasilitasi masa keemasan (golden age) usia 1,5 hingga 3 tahun. Melalui pendekatan bermain aktif dan stimulasi multisensorik, anak belajar mengenal dunia sekitarnya dengan bahagia dan percaya diri.",
    goals: [
      "Mengembangkan kemampuan sensorik dan motorik halus melalui ragam permainan edukatif (APE).",
      "Melatih adaptasi sosial ramah balita dan toilet training bertahap.",
      "Membangun rasa aman, kemandirian awal, dan kedekatan emosional positif."
    ],
    featuresTitle: "Fokus Stimulasi Toddler",
    features: [
      { icon: "toys", title: "Sensory Play", desc: "Stimulasi Panca Indra & Eksplorasi" },
      { icon: "directions_walk", title: "Motorik Awal", desc: "Keseimbangan & Koordinasi Gerak" },
      { icon: "waving_hand", title: "Sosialisasi Dini", desc: "Interaksi & Kedekatan Positif" },
      { icon: "clean_hands", title: "Toilet Training", desc: "Kemandirian Kebiasaan Bersih" },
      { icon: "sentiment_satisfied", title: "Bahasa & Ritme", desc: "Kosakata Awal & Senandung Lagu" }
    ],
    gallery: [
      { img: "/kegiatan/kegiatan-playgroup-lingkaran.webp", caption: "Bernyanyi & Melingkar Ceria" },
      { img: "/kegiatan/kegiatan-sentra-bahan-alam.webp", caption: "Bermain Sensorik Bahan Alam" },
      { img: "/kegiatan/kegiatan-candid-ibu-anak.webp", caption: "Mewarnai & Berkreasi Bersama" }
    ]
  },
  "kb": {
    badge: "Kelompok Bermain / KB (Usia 3–4 Tahun)",
    title: "Dunia Pertama untuk Belajar dan Bermain",
    desc: "Ruang aman dan menyenangkan bagi anak usia 3–4 tahun untuk mengenal lingkungan, bermain peran, dan membangun kemandirian.",
    image: "/kegiatan/kegiatan-sentra-belajar.webp",
    about: "Program Kelompok Bermain (KB) di PAUD Hidayah dirancang khusus untuk membantu anak beradaptasi dengan lingkungan sekolah. Kami mengutamakan stimulasi bermain yang mengasah sensorik, motorik, dan kemampuan bergaul secara natural.",
    goals: [
      "Membantu anak merasa aman dan nyaman di lingkungan baru.",
      "Mengembangkan motorik kasar dan halus melalui bermain edukatif.",
      "Menumbuhkan rasa ingin tahu, keberanian berekspresi, dan adab Islami harian."
    ],
    featuresTitle: "Manfaat & Fokus KB",
    features: [
      { icon: "waving_hand", title: "Bersosialisasi", desc: "Mendapat Teman Baru & Berbagi" },
      { icon: "directions_run", title: "Motorik Aktif", desc: "Bergerak & Bermain Fisik Ceria" },
      { icon: "record_voice_over", title: "Bahasa", desc: "Kosakata Awal & Bercerita" },
      { icon: "brush", title: "Kreativitas", desc: "Seni, Imajinasi & Melukis" },
      { icon: "mosque", title: "Adab Cilik", desc: "Doa Harian & Praktik 5S" }
    ],
    gallery: [
      { img: "/kegiatan/kegiatan-sentra-bahan-alam.webp", caption: "Bermain Sensorik & Bahan Alam" },
      { img: "/kegiatan/kegiatan-playgroup-lingkaran.webp", caption: "Bernyanyi & Bercerita Melingkar" },
      { img: "/kegiatan/kegiatan-candid-ibu-anak.webp", caption: "Mewarnai & Berkarya Bersama Bunda" }
    ]
  },
  "ra-a": {
    badge: "RA-A (Usia 4–5 Tahun)",
    title: "Mengenal, Bereksplorasi, dan Membangun Karakter",
    desc: "Program pembelajaran untuk anak usia 4–5 tahun melalui kegiatan sentra bermain, eksplorasi, dan pembiasaan adab Islami yang menyenangkan.",
    image: "/kegiatan/kegiatan-sentra-belajar.webp",
    about: "Di usia 4-5 tahun, anak mulai mengenal lingkungan dengan lebih luas. Program RA-A dirancang untuk mengembangkan potensi dasar anak, membangun kemandirian, serta menumbuhkan rasa percaya diri dalam suasana yang hangat dan menyenangkan.",
    goals: [
      "Mengembangkan kemampuan dasar kognitif, bahasa, sosial, dan motorik.",
      "Membiasakan anak dengan nilai-nilai Islami dan hafalan surat pendek sejak dini.",
      "Menumbuhkan kemandirian, tanggung jawab, dan percaya diri."
    ],
    featuresTitle: "Apa yang Dikembangkan di RA-A?",
    features: [
      { icon: "chat", title: "Bahasa", desc: "Komunikasi & Fonik Ceria" },
      { icon: "calculate", title: "Numerasi", desc: "Mengenal Angka & Konsep Konkrit" },
      { icon: "sports_gymnastics", title: "Motorik", desc: "Motorik Kasar & Halus" },
      { icon: "diversity_1", title: "Sosial", desc: "Interaksi & Kerja Sama Tim" },
      { icon: "mosque", title: "Karakter & Qur'an", desc: "Tahfidz Juz 'Amma & Adab Sunnah" }
    ],
    gallery: [
      { img: "/kegiatan/kegiatan-sentra-pasartayu.webp", caption: "Belajar Melalui Bermain di Sentra" },
      { img: "/kegiatan/kegiatan-mewarnai-kupu.webp", caption: "Kegiatan Seni & Kreativitas" },
      { img: "/kegiatan/kegiatan-belajar-paviliun.webp", caption: "Belajar Mandiri di Pendopo" }
    ]
  },
  "ra-b": {
    badge: "RA-B (Usia 5–6 Tahun)",
    title: "Kesiapan Menuju Jenjang Sekolah Dasar Unggul",
    desc: "Mendampingi anak usia 5–6 tahun mengembangkan literasi-numerasi kontekstual, pemantapan tahfidz, dan kemandirian sebagai bekal menuju jenjang SD.",
    image: "/kegiatan/kegiatan-mewarnai-kupu.webp",
    about: "Di tahap ini, anak semakin aktif, ingin tahu, dan siap mengembangkan berbagai keterampilan. Program RA-B difokuskan pada penguatan literasi fungsional, numerasi kontekstual, kemandirian, serta pembentukan karakter Islami yang kokoh.",
    goals: [
      "Meningkatkan kemampuan literasi baca tulis dan numerasi dasar secara menyenangkan.",
      "Melatih kepemimpinan cilik, kemandirian, dan tanggung jawab belajar.",
      "Menyiapkan kesiapan mental dan sosial anak untuk jenjang Sekolah Dasar."
    ],
    featuresTitle: "Fokus Pembelajaran RA-B",
    features: [
      { icon: "school", title: "Kesiapan Sekolah", desc: "Kematangan Mental & Sosial Masuk SD" },
      { icon: "menu_book", title: "Literasi & Numerasi", desc: "Membaca, Menulis & Berhitung Menyenangkan" },
      { icon: "biotech", title: "Sains & Eksplorasi", desc: "Rasa Ingin Tahu & Daya Kritis" },
      { icon: "self_improvement", title: "Kemandirian", desc: "Self Help & Life Skills" },
      { icon: "mood", title: "Sosial & Emosional", desc: "Empati, Berbagi & Kepemimpinan" }
    ],
    gallery: [
      { img: "/kegiatan/kegiatan-sentra-pasartayu.webp", caption: "Penataan Ruang Sentra Belajar" },
      { img: "/kegiatan/kegiatan-display-sentra.webp", caption: "Eksplorasi Ruang Belajar Terpadu" },
      { img: "/kegiatan/kegiatan-jemuran-karya.webp", caption: "Karya Seni & Eksperimen Mandiri" },
      { img: "/kegiatan/kegiatan-wisuda-prestasi.webp", caption: "Apresiasi Prestasi Santri" }
    ]
  },
  "tahfidz": {
    badge: "Program Tahfidz Al-Qur'an",
    title: "Menumbuhkan Cinta Al-Qur'an & Hafalan Juz 'Amma",
    desc: "Program bimbingan menghafal surat-surat pendek Juz 'Amma dengan metode talaqqi dan muroja'ah yang menyenangkan ramah anak.",
    image: "/kegiatan/kegiatan-playgroup-lingkaran.webp",
    about: "Program Tahfidz di PAUD Hidayah berfokus pada pembiasaan mendengar, melafalkan, dan menghafal surat-surat pilihan Juz 30. Dengan metode talaqqi (menirukan langsung dari ustadzah) dan muroja'ah berirama, anak belajar mencintai Al-Qur'an sejak usia emas mereka dengan penuh kegembiraan.",
    goals: [
      "Membiasakan anak akrab dan gemar melafalkan ayat-ayat suci Al-Qur'an setiap hari.",
      "Menghafal surat-surat pendek Juz 30 dengan makhroj dan tajwid dasar yang benar.",
      "Membangun karakter mulia, ketenangan emosional, dan adab Islami berlandaskan Al-Qur'an."
    ],
    featuresTitle: "Keunggulan Program Tahfidz",
    features: [
      { icon: "record_voice_over", title: "Metode Talaqqi Ceria", desc: "Mendengar & Menirukan Bacaan Ustadzah Bersama" },
      { icon: "repeat", title: "Muroja'ah Berirama", desc: "Pengulangan Hafalan Menyenangkan Setiap Pagi" },
      { icon: "menu_book", title: "Makhroj & Tajwid Dasar", desc: "Pelafalan Huruf Hijaiyah Fasih Sejak Dini" },
      { icon: "star", title: "Buku Prestasi Santri", desc: "Pencatatan & Apresiasi Perkembangan Hafalan" },
      { icon: "mosque", title: "Adab Qur'ani", desc: "Pembiasaan Menghormati Al-Qur'an & Berdoa" }
    ],
    gallery: [
      { img: "/kegiatan/kegiatan-playgroup-lingkaran.webp", caption: "Halaqoh Muroja'ah Hafalan Pagi" },
      { img: "/kegiatan/kegiatan-sentra-belajar.webp", caption: "Bimbingan Talaqqi Bersama Ustadzah" },
      { img: "/kegiatan/kegiatan-wisuda-prestasi.webp", caption: "Wisuda & Uji Hafalan Juz 'Amma" }
    ]
  },
  "tpq": {
    badge: "Taman Pendidikan Al-Qur'an (TPQ)",
    title: "Bimbingan Tartil Membaca Al-Qur'an Sejak Dini",
    desc: "Pondasi membaca huruf Hijaiyah dan Al-Qur'an secara tartil, fasih, dan menyenangkan dengan metode terstruktur.",
    image: "/kegiatan/kegiatan-sentra-belajar.webp",
    about: "Program TPQ (Taman Pendidikan Al-Qur'an) PAUD Hidayah membimbing santri cilik mengenal bentuk huruf, tanda baca (harakat), menyambung huruf, hingga mahir membaca Al-Qur'an secara tartil. Dilengkapi pembiasaan ibadah praktis seperti sholat fardhu berjamaah dan wudhu mandiri.",
    goals: [
      "Mengenal huruf Hijaiyah, tanda baca, dan kaidah membaca Al-Qur'an secara bertahap.",
      "Membimbing santri mampu membaca Al-Qur'an dengan tartil, fasih, dan percaya diri.",
      "Membekali santri dengan hafalan doa harian, bacaan sholat fardhu, dan praktek ibadah praktis."
    ],
    featuresTitle: "Fokus Pembelajaran TPQ",
    features: [
      { icon: "auto_stories", title: "Bimbingan Terstruktur", desc: "Metode Cepat & Tepat Sesuai Tingkatan Jilid" },
      { icon: "hearing", title: "Fasih & Tartil", desc: "Ketepatan Bunyi dan Makharijul Huruf" },
      { icon: "accessibility_new", title: "Praktek Wudhu & Sholat", desc: "Gerakan & Bacaan Sholat Berjamaah" },
      { icon: "menu_book", title: "Doa Harian & Hadist", desc: "Doa Sehari-hari & Hadist Pilihan Ramah Anak" },
      { icon: "emoji_events", title: "Ujian Kenaikan Jilid", desc: "Evaluasi Berkala Menuju Khatam Al-Qur'an" }
    ],
    gallery: [
      { img: "/kegiatan/kegiatan-sentra-belajar.webp", caption: "Bimbingan Membaca Al-Qur'an Mandiri" },
      { img: "/kegiatan/kegiatan-display-sentra.webp", caption: "Media Belajar Huruf Hijaiyah Interaktif" },
      { img: "/kegiatan/kegiatan-wisuda-prestasi.webp", caption: "Apresiasi Santri Berprestasi Khataman" }
    ]
  },
  "ekstrakurikuler": {
    badge: "Ekstrakurikuler Minat & Bakat",
    title: "Asah Minat, Bakat, Seni, & Karakter Anak",
    desc: "Wadah pengembangan potensi anak melalui seni tari, drumband, melukis, dan permainan tradisional dalam suasana yang ceria.",
    image: "/kegiatan/kegiatan-panggung-prestasi.webp",
    about: "Selain program pendidikan reguler, PAUD Hidayah menyediakan kegiatan ekstrakurikuler untuk mewadahi minat dan bakat khusus setiap anak. Kami percaya setiap anak memiliki anugerah keunikan dan kreativitas yang perlu disalurkan sejak dini.",
    goals: [
      "Menyalurkan energi, minat, dan bakat anak ke kegiatan positif dan produktif.",
      "Membangun rasa percaya diri, kelenturan motorik, dan musikalitas anak.",
      "Melatih kerjasama tim serta melestarikan kearifan budaya permainan nusantara."
    ],
    featuresTitle: "Pilihan Cabang Ekstrakurikuler",
    features: [
      { 
        icon: "music_note", 
        title: "Seni Tari Ceria", 
        badge: "Olah Gerak & Seni",
        image: "/kegiatan/kegiatan-panggung-prestasi.webp",
        desc: "Mengenalkan ragam gerak tari kreasi anak nusantara. Melatih kelenturan tubuh, irama gerak, dan membangun keberanian tampil di panggung pentas seni sekolah.",
        tags: ["Tari Kreasi Nusantara", "Percaya Diri Tampil", "Kelenturan Tubuh"]
      },
      { 
        icon: "volume_up", 
        title: "Drumband Cilik", 
        badge: "Musikalitas & Tim",
        image: "/kegiatan/kegiatan-belajar-paviliun.webp",
        desc: "Mengenalkan instrumen perkusi ramah anak seperti snare drum, bass drum, dan bellyra. Melatih kepekaan tempo, ketukan ritme irama, serta kekompakan baris-berbaris.",
        tags: ["Instrumen Perkusi", "Kepekaan Tempo", "Kekompakan Regu"]
      },
      { 
        icon: "brush", 
        title: "Melukis & Mewarnai", 
        badge: "Kreativitas & Estetika",
        image: "/kegiatan/kegiatan-mewarnai-kupu.webp",
        desc: "Menyalurkan imajinasi visual melalui aneka media: krayon, kuas cat air, hingga kreasi kain batik jumputan. Menguatkan motorik halus dan koordinasi jemari tangan.",
        tags: ["Eksplorasi Warna", "Kekuatan Jemari", "Pameran Karya"]
      },
      { 
        icon: "sports_esports", 
        title: "Permainan Tradisional", 
        badge: "Budaya & Fisik Aktif",
        image: "/kegiatan/kegiatan-sentra-bahan-alam.webp",
        desc: "Melestarikan permainan anak nusantara seperti engklek, bakiak ceria, egrang batok, dan gobak sodor. Melatih ketangkasan fisik aktif, sportivitas, dan kebersamaan.",
        tags: ["Engklek & Bakiak", "Aktivitas Fisik Ceria", "Kearifan Budaya"]
      }
    ],
    gallery: [
      { img: "/kegiatan/kegiatan-panggung-prestasi.webp", caption: "Pentas Seni & Kreasi Panggung" },
      { img: "/kegiatan/kegiatan-market-day.webp", caption: "Market Day & Kewirausahaan Cilik" },
      { img: "/kegiatan/kegiatan-parenting-batik.webp", caption: "Workshop Membatik Bersama" }
    ]
  }
};

// Alias map untuk kompatibilitas tautan lama & baru
const slugAliases: Record<string, string> = {
  "playgroup": "kb",
  "tk-a": "ra-a",
  "tk-b": "ra-b",
  "kelompok-bermain": "kb",
  "tahfiz": "tahfidz",
  "tahfidh": "tahfidz"
};

async function getSanityProgram(slug: string) {
  try {
    const query = `*[_type == "programItem" && (slug.current == $slug || _id == $slug || _id == $prefixedId)][0]`;
    return await client.fetch(query, { slug, prefixedId: `program-${slug}` }, { next: { revalidate: 0 } });
  } catch (error) {
    console.error("Error fetching program from Sanity:", error);
    return null;
  }
}

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const targetSlug = slugAliases[resolvedParams.slug] || resolvedParams.slug;
  const fallback = programsData[targetSlug];
  const sanityDoc = await getSanityProgram(targetSlug);

  const phoneRaw = await client.fetch(`*[_type == "siteSettings"][0].phone`, {}, { next: { revalidate: 0 } }) || "0851 8740 9266";
  let phone = phoneRaw.replace(/\D/g, "");
  if (phone.startsWith("0")) phone = "62" + phone.slice(1);

  if (!fallback && !sanityDoc) {
    return (
      <main className="w-full pt-32 pb-20 bg-[#FDFCF8] min-h-screen text-center">
        <h1 className="text-2xl font-bold text-[#188B48]">Program tidak ditemukan.</h1>
        <Link href="/program" className="text-[#188B48] mt-4 inline-block underline">Kembali ke daftar program</Link>
      </main>
    );
  }

  // Gabungkan data Sanity dengan fallback
  const data = {
    badge: sanityDoc?.badge || fallback?.badge || "Program PAUD Hidayah",
    title: sanityDoc?.headline || sanityDoc?.title || fallback?.title || "",
    desc: sanityDoc?.shortDesc || fallback?.desc || "",
    image: sanityDoc?.image ? urlFor(sanityDoc.image).width(800).height(600).format('webp').url() : fallback?.image,
    about: sanityDoc?.about || fallback?.about || "",
    goals: (sanityDoc?.goals && sanityDoc.goals.length > 0) ? sanityDoc.goals : (fallback?.goals || []),
    featuresTitle: sanityDoc?.featuresTitle || fallback?.featuresTitle || "Fokus Stimulasi & Keunggulan",
    features: (sanityDoc?.features && sanityDoc.features.length > 0)
      ? sanityDoc.features.map((f: any, fIdx: number) => {
          const fb = fallback?.features?.[fIdx];
          return {
            ...fb,
            ...f,
            image: f.image ? urlFor(f.image).width(600).height(400).format('webp').url() : (fb?.image || null),
            badge: f.badge || fb?.badge || null,
            tags: (f.tags && f.tags.length > 0) ? f.tags : (fb?.tags || [])
          };
        })
      : (fallback?.features || []),
    gallery: (sanityDoc?.gallery && sanityDoc.gallery.length > 0)
      ? sanityDoc.gallery.map((g: any) => ({
          img: g.image ? urlFor(g.image).width(800).height(600).format('webp').url() : "/kegiatan/kegiatan-playgroup-lingkaran.webp",
          caption: g.caption || ""
        }))
      : (fallback?.gallery || [])
  };

  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen pb-24 overflow-hidden font-sans">
      
      {/* ================= HERO SECTION ================= */}
      <section className="w-full pt-28 pb-14 md:pt-32 md:pb-18 relative bg-[#188B48]">
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
            
            <p className="text-[16px] text-white max-w-md leading-relaxed mt-2">
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
          <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#188B48" />
        </svg>
      </div>


      {/* ================= TENTANG PROGRAM ================= */}
      <section className="w-full py-16 border-t border-gray-100">
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

          {targetSlug === "ekstrakurikuler" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.features.map((feature: any, idx: number) => {
                const img = feature.image;
                const badge = feature.badge;
                const tags = feature.tags || [];

                return (
                  <div 
                    key={idx} 
                    className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,64,40,0.06)] border border-[#188B48]/10 hover:border-[#188B48]/30 flex flex-col group hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(0,64,40,0.12)] transition-all duration-300"
                  >
                    {/* Real Activity Photo */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#EAF3EF]">
                      {img ? (
                        <img 
                          src={img} 
                          alt={feature.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#188B48]">
                          <span className="material-symbols-outlined text-4xl">{feature.icon}</span>
                        </div>
                      )}
                      {badge && (
                        <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-[#188B48] text-[11px] font-bold px-3 py-1 rounded-full shadow-sm border border-[#188B48]/10">
                          {badge}
                        </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <div className="w-8 h-8 rounded-full bg-[#188B48]/10 text-[#188B48] flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[18px]">{feature.icon || "star"}</span>
                          </div>
                          <h3 className="font-bold text-lg text-[#188B48] leading-tight group-hover:text-[#126b36] transition-colors">
                            {feature.title}
                          </h3>
                        </div>
                        <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
                          {feature.desc}
                        </p>
                      </div>

                      {/* Educational Tags */}
                      {tags.length > 0 && (
                        <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-1.5">
                          {tags.map((tag: string, tIdx: number) => (
                            <span 
                              key={tIdx} 
                              className="text-[11px] font-medium bg-[#188B48]/8 text-[#188B48] px-2.5 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={`grid grid-cols-2 md:grid-cols-3 ${data.features.length <= 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-5'} gap-4 md:gap-6`}>
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
          )}
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
            
            <a 
              href={`https://wa.me/${phone}?text=${encodeURIComponent(`Assalamu’alaikum Admin PAUD Hidayah, saya berminat mendaftarkan putra/putri saya untuk ${data.badge || 'Program Pembelajaran'}. Boleh dibantu informasi pendaftaran dan kuotanya? Terima kasih.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 px-8 py-3.5 bg-[#FCD116] hover:bg-white text-[#188B48] font-bold rounded-full transition-colors shadow-lg flex items-center gap-2"
            >
              Konsultasi Pendaftaran <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
