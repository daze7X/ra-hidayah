import { client } from "../../../../sanity/lib/client";
import Link from "next/link";
import OrgCardWithModal from "../../../../components/OrgCardWithModal";

export const revalidate = 0;

export const metadata = {
  title: "Struktur Organisasi SD Islam Hidayah Tayu - Yayasan Hidayah",
  description: "Susunan pengurus, kepala sekolah, dewan guru, dan tenaga kependidikan SD Islam Hidayah Tayu.",
};

// Data resmi sesuai dokumen STRUKTUR ORGANISASI SDI HIDAYAH
export const defaultSDMembers = [
  // 1. Pembina, Yayasan & Komite
  {
    name: "Dr. Hj. Umi Hanik, S.Ag., M.Pd.",
    position: "Dewan Pembina",
    section: "Yayasan & Komite",
    institution: "sd",
    order: 1,
    image: "/sd-org/umi-hanik.jpg",
    motto: "Membimbing dengan ketulusan hati untuk generasi Islami berprestasi.",
  },
  {
    name: "Dra. Hj. Istifaiyah, M.Pd.",
    position: "Ketua Yayasan",
    section: "Yayasan & Komite",
    institution: "sd",
    order: 2,
    image: "/sd-org/istifaiyah.jpg",
    motto: "Membangun peradaban mulia melalui pendidikan Islam yang berkarakter.",
  },
  {
    name: "Hj. Nur Laeli, S.Pd.",
    position: "Supervisor Yayasan",
    section: "Yayasan & Komite",
    institution: "sd",
    order: 3,
    image: "/sd-org/nur-laeli.jpg",
    motto: "Dengan hati kita melayani, dengan keteladanan kita menginspirasi.",
  },
  {
    name: "Muzayin, S.Pd.",
    position: "Komite Sekolah",
    section: "Yayasan & Komite",
    institution: "sd",
    order: 4,
    motto: "Sinergi harmonis sekolah dan masyarakat untuk kemajuan putra-putri kita.",
  },

  // 2. Pimpinan Sekolah
  {
    name: "Sri Surami Widyastuti, S.Pd.",
    position: "Kepala Sekolah",
    section: "Pimpinan Sekolah",
    institution: "sd",
    order: 5,
    motto: "Mewujudkan generasi cerdas, mandiri, berkarakter Islami dan peduli lingkungan.",
  },

  // 3. Manajemen & Koordinator Sekolah
  {
    name: "Erlin Wahyuni Silfiyanti, S.Pd.",
    position: "Kurikulum & Guru Kelas 5B",
    section: "Manajemen Sekolah",
    institution: "sd",
    order: 6,
    motto: "Kurikulum bermakna mencetak generasi pembelajar sepanjang hayat.",
  },
  {
    name: "Dyah Puji Lestari, M.Pd.",
    position: "Kesiswaan & Guru Kelas 6A",
    section: "Manajemen Sekolah",
    institution: "sd",
    order: 7,
    motto: "Membimbing setiap potensi murid menuju akhlak karimah dan prestasi.",
  },
  {
    name: "Ari Mahmumah, S.Pd.",
    position: "Koordinator TPQ & Wali Kelas 1B",
    section: "Manajemen Sekolah",
    institution: "sd",
    order: 8,
    motto: "Menanamkan kecintaan pada Al-Qur'an sejak usia dini.",
  },
  {
    name: "Abdul Faqih, S.Pd.",
    position: "Koordinator Tahfidz & Guru PJOK",
    section: "Manajemen Sekolah",
    institution: "sd",
    order: 9,
    motto: "Sehat jasmani, suci rohani bersama lantunan Al-Qur'an.",
  },
  {
    name: "Aditya Iswondo",
    position: "Tata Usaha / Administrasi",
    section: "Manajemen Sekolah",
    institution: "sd",
    order: 10,
    motto: "Pelayanan tertib, akuntabel, dan ramah untuk kenyamanan bersama.",
  },
  {
    name: "Nurul Hidayah, S.Pd.I.",
    position: "Bendahara & Guru PAI",
    section: "Manajemen Sekolah",
    institution: "sd",
    order: 11,
    motto: "Amanah dalam tugas, ikhlas dalam mengabdi.",
  },
  {
    name: "Diana Nurus Sa’adah, S.Pd.I.",
    position: "Bendahara & Guru PAI",
    section: "Manajemen Sekolah",
    institution: "sd",
    order: 12,
    motto: "Ketelitian dan kejujuran adalah cermin integritas seorang mukmin.",
  },
  {
    name: "Moh. Taufiqil Aniq, S.Pd.",
    position: "Humas & Guru Kelas 4B",
    section: "Manajemen Sekolah",
    institution: "sd",
    order: 13,
    motto: "Menjalin silaturahmi, menyebarkan kebaikan dan syiar keilmuan.",
  },
  {
    name: "Nur Rokhim, S.Ud., M.Ag.",
    position: "Sarpras & Guru Tahfidz",
    section: "Manajemen Sekolah",
    institution: "sd",
    order: 14,
    motto: "Menjaga amanah fasilitas demi kelancaran ibadah dan belajar.",
  },

  // 4. Wali Kelas & Guru Pendamping (Fase Fondasi & Dasar)
  {
    name: "Yunita Sari, S.Pd.I.",
    position: "Wali Kelas 1A",
    section: "Guru Kelas",
    institution: "sd",
    order: 15,
  },
  {
    name: "Purweni",
    position: "Guru Pendamping 1A",
    section: "Guru Pendamping",
    institution: "sd",
    order: 16,
  },
  {
    name: "Ari Marhumah, S.Pd.",
    position: "Wali Kelas 1B",
    section: "Guru Kelas",
    institution: "sd",
    order: 17,
  },
  {
    name: "Siti Uswatun Hasanah, S.H.",
    position: "Guru Pendamping 1B",
    section: "Guru Pendamping",
    institution: "sd",
    order: 18,
    image: "/sd-org/uswatun-hasanah.jpg",
  },
  {
    name: "Shoimatul Maghfiroh",
    position: "Wali Kelas 2A",
    section: "Guru Kelas",
    institution: "sd",
    order: 19,
  },
  {
    name: "Anggita Afiatun Nikmah, S.Pd.",
    position: "Guru Pendamping 2A",
    section: "Guru Pendamping",
    institution: "sd",
    order: 20,
  },
  {
    name: "Pipin Ardiningsih, S.Pd.",
    position: "Guru Kelas 2B",
    section: "Guru Kelas",
    institution: "sd",
    order: 21,
  },
  {
    name: "Nur Fitriani",
    position: "Guru Pendamping 2B",
    section: "Guru Pendamping",
    institution: "sd",
    order: 22,
  },
  {
    name: "Dian Retnosari, S.Pd.",
    position: "Guru Kelas 3A",
    section: "Guru Kelas",
    institution: "sd",
    order: 23,
  },
  {
    name: "Umdatun Niswah",
    position: "Guru Pendamping 3A",
    section: "Guru Pendamping",
    institution: "sd",
    order: 24,
  },
  {
    name: "Faroh Istiqomah, S.Pd.",
    position: "Guru Kelas 3B",
    section: "Guru Kelas",
    institution: "sd",
    order: 25,
  },
  {
    name: "Arsita Yunia Warsono, S.Pd.",
    position: "Wali Kelas 4A",
    section: "Guru Kelas",
    institution: "sd",
    order: 26,
  },
  {
    name: "Moh. Taufiqil Aniq, S.Pd.",
    position: "Guru Kelas 4B",
    section: "Guru Kelas",
    institution: "sd",
    order: 27,
  },
  {
    name: "Afifa Tri Sutanti, S.Pd.",
    position: "Wali Kelas 5A",
    section: "Guru Kelas",
    institution: "sd",
    order: 28,
  },
  {
    name: "Erlin Wahyuni Silfiyanti, S.Pd.",
    position: "Guru Kelas 5B",
    section: "Guru Kelas",
    institution: "sd",
    order: 29,
  },
  {
    name: "Jennifer Putri Hidayah, S.Pd.",
    position: "Wali Kelas 6A",
    section: "Guru Kelas",
    institution: "sd",
    order: 30,
  },
  {
    name: "Dyah Puji Lestari, M.Pd.",
    position: "Guru Kelas 6A",
    section: "Guru Kelas",
    institution: "sd",
    order: 31,
  },

  // 5. Guru Mata Pelajaran Khusus
  {
    name: "Sindy Widiana Putri, S.Pd.",
    position: "Guru Bahasa Arab",
    section: "Guru Mata Pelajaran",
    institution: "sd",
    order: 32,
  },
  {
    name: "Ahmad Agustian, S.Pd.",
    position: "Guru Bahasa Inggris",
    section: "Guru Mata Pelajaran",
    institution: "sd",
    order: 33,
  },
  {
    name: "Nurul Hidayah, S.Pd.I.",
    position: "Guru Pendidikan Agama Islam",
    section: "Guru Mata Pelajaran",
    institution: "sd",
    order: 34,
  },
  {
    name: "Diana Nurus Sa’adah, S.Pd.I.",
    position: "Guru Pendidikan Agama Islam",
    section: "Guru Mata Pelajaran",
    institution: "sd",
    order: 35,
  },
  {
    name: "Abdul Faqih, S.Pd.",
    position: "Guru PJOK",
    section: "Guru Mata Pelajaran",
    institution: "sd",
    order: 36,
  },
  {
    name: "Frendhy Listiawan, S.Pd.",
    position: "Guru PJOK",
    section: "Guru Mata Pelajaran",
    institution: "sd",
    order: 37,
  },

  // 6. Tim Pengajar TPQ
  { name: "Fitri Inzah Yanti", position: "Guru TPQ", section: "Guru TPQ", institution: "sd", order: 38 },
  { name: "Maslihatin", position: "Guru TPQ", section: "Guru TPQ", institution: "sd", order: 39 },
  { name: "Nihriyatin Ulya", position: "Guru TPQ", section: "Guru TPQ", institution: "sd", order: 40 },
  { name: "Siti Millatul Afifah", position: "Guru TPQ", section: "Guru TPQ", institution: "sd", order: 41 },
  { name: "Siti Ziyadatun Ni’mah", position: "Guru TPQ", section: "Guru TPQ", institution: "sd", order: 42 },
  { name: "Wintiana", position: "Guru TPQ", section: "Guru TPQ", institution: "sd", order: 43 },
  { name: "Uswatun Hasanah", position: "Guru TPQ", section: "Guru TPQ", institution: "sd", order: 44, image: "/sd-org/uswatun-hasanah.jpg" },
  { name: "Indriyani Hastuti Ningrum", position: "Guru TPQ", section: "Guru TPQ", institution: "sd", order: 45 },
  { name: "Alvina Farha Novita", position: "Guru TPQ", section: "Guru TPQ", institution: "sd", order: 46 },

  // 7. Tim Pengajar Tahfidz
  { name: "Marmo K. Umam", position: "Guru Tahfidz", section: "Guru Tahfidz", institution: "sd", order: 47 },
  { name: "Nur Rokhim, S.Ud., M.Ag.", position: "Guru Tahfidz", section: "Guru Tahfidz", institution: "sd", order: 48 },
  { name: "Cici Nor Laila", position: "Guru Tahfidz", section: "Guru Tahfidz", institution: "sd", order: 49 },
  { name: "Misbahul Munir", position: "Guru Tahfidz", section: "Guru Tahfidz", institution: "sd", order: 50 },

  // 8. Tenaga Keamanan & Pendukung
  {
    name: "Nurul Huda",
    position: "Satuan Pengamanan (Satpam)",
    section: "Tenaga Pendukung",
    institution: "sd",
    order: 51,
    motto: "Siaga menjaga kenyamanan, keselamatan, dan ketertiban lingkungan sekolah.",
  },
];

async function getSDOrgSettings() {
  try {
    const query = `*[_type == "orgPageSettings" && institution == "sd"][0]`;
    return await client.fetch(query, {}, { next: { revalidate: 0 } });
  } catch (error) {
    return null;
  }
}

async function getSDOrgData() {
  try {
    const query = `*[_type == "orgStructure" && institution == "sd"] | order(order asc)`;
    const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
    if (data && data.length > 0) {
      return data;
    }
  } catch (error) {
    console.error("Error fetching SD org data:", error);
  }
  return defaultSDMembers;
}

export default async function StrukturSDPage() {
  const [members, settings] = await Promise.all([
    getSDOrgData(),
    getSDOrgSettings(),
  ]);

  const heroBadge = settings?.heroBadge || "STRUKTUR ORGANISASI";
  const heroTitle = settings?.heroTitle || "Pendidik & Tenaga Kependidikan SD Islam Hidayah Tayu";
  const heroSubtitle = settings?.heroSubtitle || "Mengenal dewan pembina, kepala sekolah, para pendidik, dan tenaga kependidikan yang berdedikasi membimbing generasi cerdas, berkarakter Islami, dan berbudaya lingkungan.";
  const quoteIcon = settings?.quoteIcon || "eco";
  const quoteText = settings?.quoteText || "Membimbing Tunas Bangsa Berakhlak Mulia dan Peduli Lingkungan.";
  const quoteSubtext = settings?.quoteSubtext || "Keluarga Besar Pendidik & Tenaga Kependidikan SD Islam Hidayah Tayu";

  // Pengelompokan Data
  const yayasanDanKomite = members.filter((m: any) => m.section === "Yayasan & Komite" || m.order <= 4);
  const kepalaSekolah = members.filter((m: any) => m.order === 5 || m.position.toLowerCase().includes("kepala sekolah"));
  const manajemenSekolah = members.filter((m: any) => (m.section === "Manajemen Sekolah" || (m.order >= 6 && m.order <= 14)) && m.order !== 5);

  // Guru Kelas & Pendamping
  const guruKelas = members.filter((m: any) => m.section === "Guru Kelas" || m.section === "Guru Pendamping" || (m.order >= 15 && m.order <= 31));
  
  // Guru Mapel
  const guruMapel = members.filter((m: any) => m.section === "Guru Mata Pelajaran" || (m.order >= 32 && m.order <= 37));

  // TPQ & Tahfidz
  const guruTPQ = members.filter((m: any) => m.section === "Guru TPQ" || (m.order >= 38 && m.order <= 46));
  const guruTahfidz = members.filter((m: any) => m.section === "Guru Tahfidz" || (m.order >= 47 && m.order <= 50));

  // Tenaga Pendukung
  const tenagaPendukung = members.filter((m: any) => m.section === "Tenaga Pendukung" || m.order >= 51);

  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen pb-24 overflow-hidden font-sans relative selection:bg-[#FCD116] selection:text-[#188B48]">
      
      {/* ================= BACKGROUND DECORATIVE ELEMENTS ================= */}
      {/* Subtle Dot Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#188B48_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none"></div>

      {/* Ambient Blurred Glow Blobs */}
      <div className="absolute top-[450px] right-0 w-[500px] h-[500px] bg-[#FCD116]/15 rounded-full blur-[120px] pointer-events-none translate-x-1/3"></div>
      <div className="absolute top-[1200px] left-0 w-[450px] h-[450px] bg-[#188B48]/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3"></div>
      <div className="absolute top-[2000px] right-10 w-[420px] h-[420px] bg-[#34D399]/15 rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-[#FCD116]/10 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Playful Floating Organic Accent Shapes */}
      <div className="absolute top-[520px] left-8 w-24 h-24 bg-[#FCD116]/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] pointer-events-none rotate-12 blur-[1px]"></div>
      <div className="absolute top-[950px] right-8 w-20 h-20 bg-[#188B48]/15 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] pointer-events-none -rotate-12 blur-[1px]"></div>
      <div className="absolute top-[1600px] left-12 w-16 h-16 bg-[#34D399]/20 rounded-full pointer-events-none"></div>
      <div className="absolute top-[2400px] right-12 w-20 h-20 bg-[#FCD116]/15 rounded-[50%_50%_40%_60%/40%_60%_50%_50%] pointer-events-none rotate-45"></div>

      {/* ================= HERO SECTION ================= */}
      <section className="w-full bg-[#188B48] pt-28 pb-14 md:pt-32 md:pb-18 text-center relative overflow-hidden">
        {/* Soft Ambient Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FCD116]/15 rounded-full blur-[130px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-[#FCD116] border border-white/30 font-bold text-sm mb-6 backdrop-blur-sm">
            <span className="material-symbols-outlined text-[18px]">groups</span>
            <span>{heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-sm tracking-tight">
            {heroTitle}
          </h1>

          <p className="text-white/95 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {heroSubtitle}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <span className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FCD116] animate-pulse"></span>
              {members.length} Anggota Pendidik &amp; Tenaga Kependidikan
            </span>
            <Link 
              href="/profil/sd" 
              className="px-4 py-2 rounded-full bg-[#FCD116] text-[#1b1c1a] text-sm font-bold hover:bg-white hover:text-[#188B48] transition-all shadow-md flex items-center gap-1.5"
            >
              <span>Lihat Profil &amp; Sejarah SD</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden -mt-1 bg-[#FDFCF8] relative z-20">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 block">
          <path d="M0,0 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,0 Z" fill="#188B48" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-12 relative z-10">
        
        {/* ================= 01. BAGAN HIERARKI KEPEMIMPINAN ================= */}
        <section className="w-full mb-24">
          <div className="flex items-start justify-between w-full mb-14">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 shrink-0 bg-[#FCD116] rounded-2xl flex items-center justify-center text-[#1b1c1a] text-2xl font-black shadow-md">
                01
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#188B48] mb-1">
                  Bagan Kepemimpinan &amp; Manajemen
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                  Struktur komando dan koordinasi Yayasan, Pimpinan Sekolah, serta Manajemen Inti.
                </p>
              </div>
            </div>
            <div className="hidden md:flex text-[#188B48]">
              <span className="material-symbols-outlined text-[40px]">account_tree</span>
            </div>
          </div>

          {/* Tree Layout */}
          <div className="flex flex-col items-center w-full relative">
            
            {/* ROW 1: Pembina, Yayasan & Komite */}
            <div className="flex flex-col items-center w-full">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#188B48] bg-[#EAF3EF] px-4 py-1 rounded-full border border-[#188B48]/15">
                  Tingkat Pembina, Yayasan &amp; Komite
                </span>
              </div>
              <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full">
                {yayasanDanKomite.map((item: any) => (
                  <OrgCardWithModal key={item.order || item.name} org={item} />
                ))}
              </div>

              {/* Connecting Line to Principal */}
              <div className="w-[2px] h-10 bg-[#188B48]/30 my-2"></div>
            </div>

            {/* ROW 2: Kepala Sekolah */}
            {kepalaSekolah.length > 0 && (
              <div className="flex flex-col items-center w-full">
                <div className="text-center mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#188B48] px-4 py-1 rounded-full shadow-sm">
                    Pimpinan Sekolah
                  </span>
                </div>
                <div className="flex justify-center">
                  <OrgCardWithModal org={kepalaSekolah[0]} highlight={true} />
                </div>

                {/* Connecting Line to Management */}
                <div className="w-[2px] h-10 bg-[#188B48]/30 my-2"></div>
              </div>
            )}

            {/* ROW 3: Manajemen & Koordinator Bidang */}
            <div className="flex flex-col items-center w-full">
              <div className="text-center mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#188B48] bg-[#EAF3EF] px-4 py-1 rounded-full border border-[#188B48]/15">
                  Koordinator &amp; Manajemen Inti
                </span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 w-full justify-items-center">
                {manajemenSekolah.map((item: any) => (
                  <OrgCardWithModal key={item.order || item.name} org={item} />
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ================= 02. DEWAN GURU KELAS & PENDAMPING ================= */}
        <section className="w-full mb-24">
          <div className="flex items-start justify-between w-full mb-12">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 shrink-0 bg-[#FCD116] rounded-2xl flex items-center justify-center text-[#1b1c1a] text-2xl font-black shadow-md">
                02
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#188B48] mb-1">
                  Wali Kelas &amp; Guru Pendamping
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                  Pendidik yang mendampingi KBM kelas 1 sampai kelas 6 secara aktif dan penuh perhatian.
                </p>
              </div>
            </div>
            <div className="hidden md:flex text-[#188B48]">
              <span className="material-symbols-outlined text-[40px]">co_present</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 w-full justify-items-center">
            {guruKelas.map((item: any) => (
              <OrgCardWithModal key={item.order || item.name} org={item} />
            ))}
          </div>
        </section>

        {/* ================= 03. GURU MATA PELAJARAN KHUSUS ================= */}
        <section className="w-full mb-24">
          <div className="flex items-start justify-between w-full mb-12">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 shrink-0 bg-[#FCD116] rounded-2xl flex items-center justify-center text-[#1b1c1a] text-2xl font-black shadow-md">
                03
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#188B48] mb-1">
                  Guru Mata Pelajaran Khusus
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                  Pengajar Bahasa Arab, Bahasa Inggris, Pendidikan Agama Islam, dan PJOK.
                </p>
              </div>
            </div>
            <div className="hidden md:flex text-[#188B48]">
              <span className="material-symbols-outlined text-[40px]">menu_book</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 w-full justify-items-center">
            {guruMapel.map((item: any) => (
              <OrgCardWithModal key={item.order || item.name} org={item} />
            ))}
          </div>
        </section>

        {/* ================= 04. TIM PENGAJAR TPQ & TAHFIDZ ================= */}
        <section className="w-full mb-24">
          <div className="flex items-start justify-between w-full mb-12">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 shrink-0 bg-[#FCD116] rounded-2xl flex items-center justify-center text-[#1b1c1a] text-2xl font-black shadow-md">
                04
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#188B48] mb-1">
                  Tim Pengajar TPQ &amp; Tahfidz Al-Qur'an
                </h2>
                <p className="text-gray-500 text-sm md:text-base">
                  Asatidz pembimbing bacaan tartil metode Qiroati dan bimbingan hafalan Al-Qur'an.
                </p>
              </div>
            </div>
            <div className="hidden md:flex text-[#188B48]">
              <span className="material-symbols-outlined text-[40px]">auto_stories</span>
            </div>
          </div>

          {/* TPQ Subgroup */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-[#188B48]"></span>
              <h3 className="text-xl font-bold text-gray-900">
                Pengajar TPQ Qiroati (9 Pengajar)
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 w-full justify-items-center">
              {guruTPQ.map((item: any) => (
                <OrgCardWithModal key={item.order || item.name} org={item} />
              ))}
            </div>
          </div>

          {/* Tahfidz Subgroup */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="w-3 h-3 rounded-full bg-[#FCD116]"></span>
              <h3 className="text-xl font-bold text-gray-900">
                Pengajar Tahfidz Al-Qur'an (4 Pengajar)
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 w-full justify-items-center">
              {guruTahfidz.map((item: any) => (
                <OrgCardWithModal key={item.order || item.name} org={item} />
              ))}
            </div>
          </div>
        </section>

        {/* ================= 05. TENAGA KEPENDIDIKAN & KEAMANAN ================= */}
        {tenagaPendukung.length > 0 && (
          <section className="w-full mb-16">
            <div className="flex items-start justify-between w-full mb-10">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 shrink-0 bg-[#FCD116] rounded-2xl flex items-center justify-center text-[#1b1c1a] text-2xl font-black shadow-md">
                  05
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#188B48] mb-1">
                    Tenaga Kependidikan &amp; Keamanan
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    Mendukung operasional, ketertiban, dan kenyamanan lingkungan sekolah.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex text-[#188B48]">
                <span className="material-symbols-outlined text-[40px]">shield</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6 w-full justify-items-center">
              {tenagaPendukung.map((item: any) => (
                <OrgCardWithModal key={item.order || item.name} org={item} />
              ))}
            </div>
          </section>
        )}

        {/* ================= BINGKAI HIJAU (Slogan Dinamis) ================= */}
        <div className="w-full mt-12 md:mt-16 p-8 md:p-10 bg-gradient-to-r from-[#188B48] to-[#126B36] rounded-3xl text-center text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="material-symbols-outlined text-4xl text-[#FCD116] mb-3">{quoteIcon}</span>
            <p className="text-xl md:text-2xl font-bold italic tracking-wide">
              &ldquo;{quoteText}&rdquo;
            </p>
            {quoteSubtext && (
              <p className="text-sm text-green-100 mt-2 font-medium">{quoteSubtext}</p>
            )}
          </div>
        </div>

      </div>
    </main>
  );
}
