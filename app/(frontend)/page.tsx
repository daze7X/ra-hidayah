import { client } from "../../sanity/lib/client";
import { urlFor } from "../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 0;

export default async function Home() {
  const siteSettings = await client.fetch(
    `*[_type == "siteSettings"][0]{
      phone,
      address,
      openHours,
      accreditation,
      showAdmissionBanner,
      admissionStatus
    }`,
    {},
    { next: { revalidate: 0 } }
  );
  const settingsPhone = siteSettings?.phone || "0851 8740 9266";
  const showBanner = siteSettings?.showAdmissionBanner === true && !!siteSettings?.admissionStatus?.trim();
  const bannerText = siteSettings?.admissionStatus?.trim() || "";
  let phone = settingsPhone.replace(/\D/g, "");
  if (phone.startsWith("0")) phone = "62" + phone.slice(1);

  // Fetch schoolProfile for dynamic Sambutan Kepala Sekolah
  const profile = await client.fetch(
    `*[_type == "schoolProfile"][0]{
      principalName,
      principalRole,
      principalDedication,
      principalImage,
      principalGreeting,
      schoolEstablished,
      welcomeSubtitle
    }`,
    {},
    { next: { revalidate: 0 } }
  );

  const principalName = profile?.principalName?.trim() || "Nur Laeli, S.Pd";
  const principalRole = profile?.principalRole?.trim() || "Kepala Sekolah PAUD Hidayah";
  const principalDedication = profile?.principalDedication?.trim() || "Pengabdi Pendidikan Anak Usia Dini 30+ Tahun";
  const principalGreeting = profile?.principalGreeting?.trim() || "Mendidik anak usia dini bukan sekadar mengisi botol kosong dengan angka dan huruf, melainkan menyalakan lentera tauhid dan rasa ingin tahu di dalam kalbu mereka. Kami menghadirkan suasana sekolah seperti rumah kedua yang sarat kegembiraan, kasih sayang, dan tuntunan keteladanan Rasulullah SAW.";
  const schoolEstablished = profile?.schoolEstablished?.trim() || "Yayasan Hidayah • Berdiri sejak 1968";
  const welcomeSubtitle = profile?.welcomeSubtitle?.trim() || "Di bawah naungan Yayasan Hidayah, kami mendampingi ananda melewati masa keemasan (golden age) dengan kelembutan fitrah, pembiasaan akhlak sunnah, dan stimulasi ragam kecerdasan.";
  const principalPhoto = profile?.principalImage
    ? urlFor(profile.principalImage).width(400).height(400).format('webp').url()
    : "/kegiatan/kepala-sekolah-paud.webp";

  // Fetch latest 3 posts from Sanity for Warta Sekolah
  const latestPostsQuery = `*[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    publishedAt,
    mainImage,
    "category": categories[0]->title,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..130], "") + "..."
  }`;
  let latestPosts: any[] = [];
  try {
    latestPosts = await client.fetch(latestPostsQuery, {}, { next: { revalidate: 0 } });
  } catch (err) {
    console.error("Error fetching latest posts:", err);
  }

  // Fetch Program Unggulan from Sanity
  const featuredProgramsQuery = `*[_type == "featuredProgram" && isActive != false] | order(order asc) {
    _id,
    title,
    category,
    description,
    icon,
    image,
    order
  }`;
  let featuredPrograms: any[] = [];
  try {
    featuredPrograms = await client.fetch(featuredProgramsQuery, {}, { next: { revalidate: 0 } });
  } catch (err) {
    console.error("Error fetching featured programs:", err);
  }

  const defaultFeaturedPrograms = [
    {
      title: "Parenting & Konseling Ortu",
      category: "Kemitraan Keluarga",
      description: "Sekolah rutin memberikan sosialisasi parenting kepada orang tua dengan mendatangkan narasumber ahli di bidang psikologi, gizi, dan kesehatan anak.",
      icon: "family_restroom",
    },
    {
      title: "Character Building & Adab Islami",
      category: "Akhlak & Spiritual",
      description: "Menerapkan pembiasaan positif sesuai nilai Islam. Mulai dari disiplin, mengucapkan salam, berdoa, sholat, hingga pembiasaan akhlak sunnah.",
      icon: "favorite",
    },
    {
      title: "Kurikulum Merdeka & Bermain Bermakna",
      category: "Pengembangan Kognitif",
      description: "Menerapkan Kurikulum Merdeka yang menyenangkan, didukung alat permainan edukatif (APE) ramah anak dan pembelajaran kontekstual berbasis alam.",
      icon: "extension",
    },
    {
      title: "Deep Learning & Eksplorasi Alam",
      category: "Sains & Lingkungan",
      description: "Pendekatan eksploratif, reflektif, dan kontekstual. Anak diajak menghubungkan konsep dengan kehidupan sehari-hari seperti berkebun dan meneliti alam.",
      icon: "psychology",
    },
    {
      title: "Fun Games & Motorik Ceria",
      category: "Kebugaran & Sosial",
      description: "Menyelingi pembelajaran dengan permainan tradisional edukatif untuk mengasah kekompakan, sportivitas, dan motorik anak agar ceria selalu.",
      icon: "sports_esports",
    },
    {
      title: "TPQ PAUD Metode Qiro'ati",
      category: "Literasi Qur'ani",
      description: "Metode pembelajaran Al-Qur'an secara bertahap dan tartil. Mengenal huruf hijaiyah dengan cara yang mudah, asyik, dan menyenangkan sejak dini.",
      icon: "menu_book",
    },
  ];

  const displayFeaturedPrograms = featuredPrograms.length > 0 ? featuredPrograms : defaultFeaturedPrograms;

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  // Parse openHours into clean structured lines (Option 1 without emoji)
  let scheduleHeader = "Waktu Belajar";
  let scheduleLines: string[] = [];
  const rawHours = siteSettings?.openHours?.trim() || "Senin - Jumat, 07.30 - 11.30 WIB";

  if (rawHours.includes("\n")) {
    const lines = rawHours.split("\n").map((l: string) => l.trim()).filter(Boolean);
    if (lines.length > 0 && (lines[0].toLowerCase().includes("senin") || lines[0].toLowerCase().includes("hari"))) {
      const dayLabel = lines[0].replace(/^waktu\s*belajar\s*:?\s*/i, "").replace(/:$/, "").trim();
      scheduleHeader = `Waktu Belajar (${dayLabel})`;
      scheduleLines = lines.slice(1);
    } else {
      scheduleLines = lines;
    }
  } else if (rawHours.toLowerCase().includes("reguler") && rawHours.toLowerCase().includes("full day")) {
    const parts = rawHours.split(/(?=Full\s*Day)/i);
    const part1 = parts[0] || "";
    const part2 = parts[1] || "";

    const daysMatch = part1.match(/^([^:]+):/);
    if (daysMatch) {
      scheduleHeader = `Waktu Belajar (${daysMatch[1].trim()})`;
    }

    const regTime = part1.replace(/^[^:]+:\s*/, "").replace(/pukul\s*/gi, "").trim();
    const fdTime = part2.replace(/pukul\s*/gi, "").trim();

    scheduleLines = [
      regTime.toLowerCase().startsWith("reguler") ? regTime.replace(/^reguler\s*:?\s*/i, "Reguler: ") : `Reguler: ${regTime}`,
      fdTime.toLowerCase().startsWith("full day") ? fdTime.replace(/^full\s*day\s*:?\s*/i, "Full Day: ") : `Full Day: ${fdTime}`
    ];
  } else {
    scheduleLines = [rawHours];
  }

  // Format spacing around hyphens for clean presentation
  scheduleLines = scheduleLines.map((line) =>
    line.replace(/(\d{2}\.\d{2})\s*-\s*(\d{2}\.\d{2})/, "$1 - $2")
  );

  return (
    <>
      <main className="w-full bg-surface min-h-[calc(100vh-28rem)]"><div className="flex flex-col w-full">
{/* SECTION 1: HERO SECTION */}
<section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
  {/* Background Building Image with Dark/Green Overlay */}
  <div className="absolute inset-0 z-0">
    <img src="/gedung-tk.jpg" className="w-full h-full object-cover object-center md:object-[center_30%]" alt="Gedung PAUD Hidayah Tayu" />
    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/95 via-[var(--color-primary)]/75 to-[var(--color-primary)]/20"></div>
  </div>

  <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10 pt-32 pb-12 md:pt-40 md:pb-20">
    <div className="max-w-2xl text-white">
      {showBanner && (
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--color-secondary)] shadow-sm mb-6">
        <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
        <span className="font-bold text-[12px] uppercase tracking-wider text-[var(--color-primary)]">
          {bannerText}
        </span>
        </div>
      )}
      <h1 className="text-4xl md:text-5xl lg:text-6xl md:leading-tight font-bold leading-[1.15] mb-6">
        Tumbuh Ceria, Cerdas, Mandiri &amp; <span className="text-[var(--color-secondary)] drop-shadow-md">Berkarakter Islami</span>
      </h1>
      <p className="font-body-lg text-lg text-white/90 max-w-xl">
        Pendidikan anak usia dini berbasis bermain aktif yang ceria dan menyenangkan, menumbuhkan kemandirian, kecerdasan, serta pembiasaan nilai-nilai Islami sejak dini.
      </p>
      








    </div>

    {/* Info Cards Row (relocated from Top Bar) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 md:mt-12 max-w-4xl">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-start gap-4 text-white shadow-lg transition-transform hover:-translate-y-1">
        <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-[24px]">verified</span>
        </div>
        <div className="min-w-0">
          <p className="text-[12px] text-white/80 font-medium uppercase tracking-wider mb-1">Status</p>
          <p className="font-bold text-[16px] text-white leading-snug">{siteSettings?.accreditation || "Akreditasi A"}</p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-start gap-4 text-white shadow-lg transition-transform hover:-translate-y-1">
        <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-[24px]">schedule</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[12px] text-white/80 font-medium uppercase tracking-wider mb-1">
            {scheduleHeader}
          </p>
          <div className="flex flex-col gap-0.5">
            {scheduleLines.map((line, idx) => (
              <p key={idx} className="font-bold text-[14px] leading-snug text-white">
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <a href={`https://wa.me/${phone}`} target="_blank" rel="noopener noreferrer" className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-start gap-4 text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-white/20 cursor-pointer">
        <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-[var(--color-primary)] shrink-0 mt-0.5">
          <span className="material-symbols-outlined text-[24px]">call</span>
        </div>
        <div className="min-w-0">
          <p className="text-[12px] text-white/80 font-medium uppercase tracking-wider mb-1">Hotline / WA</p>
          <p className="font-bold text-[16px] text-white leading-snug">{siteSettings?.phone || "0851 8740 9266"}</p>
        </div>
      </a>
    </div>
  </div>
</section>

{/* SECTION 2: SAMBUTAN & 3 PILAR DASAR */}
<section className="w-full py-12 md:py-20 bg-[#188B48] text-white">
<div className="max-w-[1200px] mx-auto px-6">
{/* Section Tagline */}
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="font-label-sm text-label-sm font-bold text-[#FCD116] uppercase tracking-widest px-3 py-1 rounded-full bg-secondary-fixed/30 inline-block mb-3">Tentang PAUD Hidayah</span>
<h2 className="font-headline-lg text-headline-lg text-white">Tumbuh Harmonis dalam Iman, Ilmu &amp; Cinta</h2>
<p className="font-body-md text-body-md text-white/80 mt-3">
          {welcomeSubtitle}
        </p>
</div>
{/* Welcome Note Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/10-container-low rounded-3xl p-6 sm:p-10 mb-14 shadow-sm">
<div className="lg:col-span-4 flex flex-col items-center text-center">
<div className="relative w-36 h-36 rounded-full overflow-hidden shadow-md mb-4 bg-primary-fixed">
            <img className="w-full h-full object-cover" alt={`Ibu ${principalRole} ${principalName}`} src={principalPhoto}/>
</div>
<h4 className="font-headline-sm text-headline-sm text-white">{principalName}</h4>
<p className="font-label-md text-label-md text-[#FCD116] font-medium">{principalRole}</p>
<span className="font-body-sm text-[12px] text-white/80 mt-1">{principalDedication}</span>
</div>
<div className="lg:col-span-8 flex flex-col justify-center space-y-4">
<div className="flex items-center gap-2 text-[#FCD116]">
<span className="material-symbols-outlined text-[32px]">format_quote</span>
</div>
<p className="font-body-lg text-body-lg text-white italic leading-relaxed">
            "{principalGreeting}"
          </p>
<div className="pt-2 flex items-center gap-4">
<div className="flex items-center gap-2 text-white font-label-md text-label-md">
<span className="material-symbols-outlined text-[20px]">handshake</span>
<span>{schoolEstablished}</span>
</div>
</div>
</div>
</div>
{/* 3 Pilar Karakter Anak */}
<div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-4 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
{/* Pilar 1 */}
<div className="bg-gradient-to-br from-[#1fa555] to-[#14753c] rounded-3xl p-8 shadow-md hover:shadow-md transition-shadow flex flex-col items-start relative overflow-hidden group w-[85vw] sm:w-[300px] snap-center shrink-0">
<div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>mosque</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-white mb-3">1. Karakter Qur'ani &amp; Adab</h3>
<p className="font-body-md text-body-md text-white/80">
            Penanaman tauhid aplikatif, hafalan surat pendek juz 30, doa keseharian, serta pembiasaan 5S (Senyum, Salam, Sapa, Sopan, Santun) dalam setiap langkah interaksi bermain.
          </p>
<div className="mt-6 inline-flex items-center gap-1.5 font-label-md text-label-md text-white font-semibold">
<span>Sentra Imtaq &amp; Sirah</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</div>
</div>
{/* Pilar 2 */}
<div className="bg-gradient-to-br from-[#1fa555] to-[#14753c] rounded-3xl p-8 shadow-md hover:shadow-md transition-shadow flex flex-col items-start relative overflow-hidden group w-[85vw] sm:w-[300px] snap-center shrink-0">
<div className="w-14 h-14 rounded-2xl bg-secondary-fixed text-[#FCD116] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>self_improvement</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-white mb-3">2. Kemandirian &amp; Life Skills</h3>
<p className="font-body-md text-body-md text-white/80">
            Melatih kemandirian motorik praktis: adab makan Islami secara mandiri, merapikan mainan sendiri, toilet training ramah anak, dan keberanian mengungkapkan pendapat.
          </p>
<div className="mt-6 inline-flex items-center gap-1.5 font-label-md text-label-md text-[#FCD116] font-semibold">
<span>Pembiasaan Practical Life</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</div>
</div>
{/* Pilar 3 */}
<div className="bg-gradient-to-br from-[#1fa555] to-[#14753c] rounded-3xl p-8 shadow-md hover:shadow-md transition-shadow flex flex-col items-start relative overflow-hidden group w-[85vw] sm:w-[300px] snap-center shrink-0">
<div className="w-14 h-14 rounded-2xl bg-white/20 text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-white mb-3">3. Kreativitas &amp; Eksplorasi</h3>
<p className="font-body-md text-body-md text-white/80">
            Eksperimen sains sederhana ramah anak, bermain peran, stimulasi musik Islami/perkusi, serta kebebasan berkreasi melukis tanpa takut salah untuk mengasah kognitif.
          </p>
<div className="mt-6 inline-flex items-center gap-1.5 font-label-md text-label-md text-white font-semibold">
<span>Sentra Seni &amp; Balok Rancang</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</div>
</div>
</div>
</div>
</section>
{/* Wave Divider */}
<div className="w-full overflow-hidden -mt-1 bg-[#FCD116]">
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
    <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#188B48"/>
  </svg>
</div>
{/* SECTION 3: PROGRAM PEMBELAJARAN UNGGULAN */}
<section className="w-full py-12 md:py-20 bg-[#FCD116]" id="program-unggulan">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="font-label-sm text-label-sm font-bold text-primary uppercase tracking-widest px-3 py-1 rounded-full bg-primary-fixed/40 inline-block mb-3">Jenjang Pendidikan</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Program Belajar Sesuai Tahap Usia</h2>
</div>
<p className="font-body-md text-body-md text-gray-700 max-w-md">
          Dirancang dengan panduan kurikulum merdeka PAUD terintegrasi kurikulum diniyyah khas PAUD Hidayah.
        </p>
</div>
{/* 4 Program Cards Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

  {/* Program 1: Toddler */}
  <div className="bg-white rounded-[32px] overflow-hidden shadow-md ring-1 ring-primary/10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative group">
    <div className="relative h-44 overflow-hidden bg-primary-fixed/30">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Toddler PAUD Hidayah bermain ceria" src="/kegiatan/kegiatan-playgroup-lingkaran.webp"/>
      <div className="absolute top-4 right-4 bg-primary text-on-primary font-label-sm text-xs px-3 py-1.5 rounded-full font-bold shadow">
        Usia 1,5 - 3 Tahun
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1 justify-between">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-primary text-[20px]">toys</span>
          <span className="font-label-md text-sm text-primary font-bold">Toddler</span>
        </div>
        <h3 className="text-lg font-bold text-primary mb-2">Stimulasi &amp; Sensori</h3>
        <p className="text-gray-600 text-[13px] mb-4 leading-relaxed">
          Stimulasi panca indra, motorik halus, kemandirian awal, serta adaptasi sosial ramah balita yang penuh kehangatan.
        </p>
        <ul className="space-y-1.5 mb-6 text-[13px] text-gray-700">
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">check_circle</span>
            <span>Multisensory &amp; Motorik Play</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">check_circle</span>
            <span>Toilet Training Ramah Anak</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">check_circle</span>
            <span>Adaptasi Sosial Hangat</span>
          </li>
        </ul>
      </div>
      <Link className="w-full py-2.5 rounded-full bg-primary text-center text-on-primary text-sm font-semibold hover:brightness-110 transition-all shadow-sm block" href="/program/toddler">Detail Toddler</Link>
    </div>
  </div>

  {/* Program 2: Kelompok Bermain (KB) */}
  <div className="bg-white rounded-[32px] overflow-hidden shadow-md ring-1 ring-primary/10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative group">
    <div className="relative h-44 overflow-hidden bg-secondary-fixed/30">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Kelompok Bermain KB PAUD Hidayah" src="/kegiatan/kegiatan-sentra-belajar.webp"/>
      <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container font-label-sm text-xs px-3 py-1.5 rounded-full font-bold shadow">
        Usia 3 - 4 Tahun
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1 justify-between">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-secondary text-[20px]">smart_toy</span>
          <span className="font-label-md text-sm text-secondary font-bold">Kelompok Bermain (KB)</span>
        </div>
        <h3 className="text-lg font-bold text-primary mb-2">Bermain Peran &amp; Sosialisasi</h3>
        <p className="text-gray-600 text-[13px] mb-4 leading-relaxed">
          Mengenal lingkungan belajar melalui bermain peran, kosakata aktif, bahan alam, dan pembiasaan adab Islami harian.
        </p>
        <ul className="space-y-1.5 mb-6 text-[13px] text-gray-700">
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">check_circle</span>
            <span>Kosakata &amp; Bahasa Komunikasi</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">check_circle</span>
            <span>Bermain Peran &amp; Sentra Alam</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">check_circle</span>
            <span>Pembiasaan Doa &amp; Adab 5S</span>
          </li>
        </ul>
      </div>
      <Link className="w-full py-2.5 rounded-full bg-surface-container text-center text-primary text-sm font-semibold hover:bg-primary hover:text-on-primary transition-colors block" href="/program/kb">Detail Program KB</Link>
    </div>
  </div>

  {/* Program 3: RA-A */}
  <div className="bg-white rounded-[32px] overflow-hidden shadow-md ring-2 ring-primary/20 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative group">
    <div className="relative h-44 overflow-hidden bg-primary-fixed/30">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Kelompok RA-A PAUD Hidayah" src="/kegiatan/kegiatan-mewarnai-kupu.webp"/>
      <div className="absolute top-4 right-4 bg-primary text-on-primary font-label-sm text-xs px-3 py-1.5 rounded-full font-bold shadow">
        Usia 4 - 5 Tahun
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1 justify-between">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-primary text-[20px]">auto_stories</span>
          <span className="font-label-md text-sm text-primary font-bold">Kelompok RA-A</span>
        </div>
        <h3 className="text-lg font-bold text-primary mb-2">Pondasi Huruf &amp; Akhlak</h3>
        <p className="text-gray-600 text-[13px] mb-4 leading-relaxed">
          Pengenalan huruf Hijaiyah, fonik ceria, pemahaman angka dasar melalui benda konkrit, dan sholat berjamaah.
        </p>
        <ul className="space-y-1.5 mb-6 text-[13px] text-gray-700">
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">check_circle</span>
            <span>Tahfidz Surat Pendek Juz 'Amma</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">check_circle</span>
            <span>Fonik &amp; Pra-Calistung Ceria</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">check_circle</span>
            <span>Eksperimen Sentra Bahan Alam</span>
          </li>
        </ul>
      </div>
      <Link className="w-full py-2.5 rounded-full bg-primary text-center text-on-primary text-sm font-semibold hover:brightness-110 transition-all shadow-sm block" href="/program/ra-a">Detail Program RA-A</Link>
    </div>
  </div>

  {/* Program 4: RA-B */}
  <div className="bg-white rounded-[32px] overflow-hidden shadow-md ring-1 ring-primary/10 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col relative group">
    <div className="relative h-44 overflow-hidden bg-secondary-fixed/30">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Kelompok RA-B PAUD Hidayah wisuda" src="/kegiatan/kegiatan-wisuda-prestasi.webp"/>
      <div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container font-label-sm text-xs px-3 py-1.5 rounded-full font-bold shadow">
        Usia 5 - 6 Tahun
      </div>
    </div>
    <div className="p-6 flex flex-col flex-1 justify-between">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="material-symbols-outlined text-secondary text-[20px]">school</span>
          <span className="font-label-md text-sm text-secondary font-bold">Kelompok RA-B</span>
        </div>
        <h3 className="text-lg font-bold text-primary mb-2">Kesiapan SD Unggul</h3>
        <p className="text-gray-600 text-[13px] mb-4 leading-relaxed">
          Mematangkan literasi fungsional, numerasi kontekstual, pemantapan tahfidz juz 30, hafalan hadist, dan kepemimpinan cilik.
        </p>
        <ul className="space-y-1.5 mb-6 text-[13px] text-gray-700">
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">check_circle</span>
            <span>Target 15+ Surat Pilihan Juz 'Amma</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">check_circle</span>
            <span>Literasi &amp; Numerasi Masuk SD</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[16px] shrink-0">check_circle</span>
            <span>Praktik Wudhu &amp; Sholat Sempurna</span>
          </li>
        </ul>
      </div>
      <Link className="w-full py-2.5 rounded-full bg-surface-container text-center text-primary text-sm font-semibold hover:bg-primary hover:text-on-primary transition-colors block" href="/program/ra-b">Detail Program RA-B</Link>
    </div>
  </div>

</div>
{/* Ekstrakurikuler Pilihan */}
<div className="mt-14 pt-10 bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
    <div>
      <h3 className="font-headline-md text-2xl font-bold text-primary">Ekstrakurikuler &amp; Pembiasaan Khusus</h3>
      <p className="font-body-sm text-sm text-gray-600 mt-1">Mengasah kecerdasan kinestetik, seni, budaya lokal, dan kecintaan Al-Qur'an sejak dini.</p>
    </div>
    <Link href="/program/ekstrakurikuler" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline shrink-0">
      Lihat Semua <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
    </Link>
  </div>
  
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
    {/* Seni Tari */}
    <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#FCD116]/20 border border-[#FCD116]/40 hover:bg-[#FCD116]/30 transition-all hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-[#188B48] flex items-center justify-center text-white mb-2 shadow-sm">
        <span className="material-symbols-outlined text-[24px]">music_note</span>
      </div>
      <p className="font-bold text-sm text-primary">Seni Tari</p>
      <p className="text-[11px] text-gray-600 mt-0.5">Motorik &amp; Percaya Diri</p>
    </div>

    {/* Drumband */}
    <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#FCD116]/20 border border-[#FCD116]/40 hover:bg-[#FCD116]/30 transition-all hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-[#FCD116] flex items-center justify-center text-[#188B48] mb-2 shadow-sm">
        <span className="material-symbols-outlined text-[24px]">volume_up</span>
      </div>
      <p className="font-bold text-sm text-primary">Drumband</p>
      <p className="text-[11px] text-gray-600 mt-0.5">Musikalitas &amp; Tim</p>
    </div>

    {/* Melukis */}
    <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#FCD116]/20 border border-[#FCD116]/40 hover:bg-[#FCD116]/30 transition-all hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-[#188B48] flex items-center justify-center text-white mb-2 shadow-sm">
        <span className="material-symbols-outlined text-[24px]">brush</span>
      </div>
      <p className="font-bold text-sm text-primary">Melukis</p>
      <p className="text-[11px] text-gray-600 mt-0.5">Seni &amp; Imajinasi Warna</p>
    </div>

    {/* Permainan Tradisional */}
    <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#FCD116]/20 border border-[#FCD116]/40 hover:bg-[#FCD116]/30 transition-all hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-[#FCD116] flex items-center justify-center text-[#188B48] mb-2 shadow-sm">
        <span className="material-symbols-outlined text-[24px]">sports_esports</span>
      </div>
      <p className="font-bold text-sm text-primary">Tradisional</p>
      <p className="text-[11px] text-gray-600 mt-0.5">Motorik &amp; Budaya Lokal</p>
    </div>

    {/* Tahfidz */}
    <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#188B48]/10 border border-[#188B48]/30 hover:bg-[#188B48]/20 transition-all hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-[#188B48] flex items-center justify-center text-white mb-2 shadow-sm">
        <span className="material-symbols-outlined text-[24px]">auto_stories</span>
      </div>
      <p className="font-bold text-sm text-primary">Tahfidz</p>
      <p className="text-[11px] text-gray-600 mt-0.5">Hafalan Juz 'Amma</p>
    </div>

    {/* TPQ */}
    <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#188B48]/10 border border-[#188B48]/30 hover:bg-[#188B48]/20 transition-all hover:-translate-y-1">
      <div className="w-12 h-12 rounded-xl bg-[#FCD116] flex items-center justify-center text-[#188B48] mb-2 shadow-sm">
        <span className="material-symbols-outlined text-[24px]">menu_book</span>
      </div>
      <p className="font-bold text-sm text-primary">TPQ</p>
      <p className="text-[11px] text-gray-600 mt-0.5">Metode Qiro'ati Tartil</p>
    </div>
  </div>
</div>
</div>
</section>
{/* Wave Divider */}
<div className="w-full overflow-hidden -mt-1 bg-[#188B48]">
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
    <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#FCD116"/>
  </svg>
</div>
{/* SECTION 4: PROGRAM UNGGULAN */}
<section className="w-full py-20 bg-[#188B48] text-white">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="font-bold text-[#FCD116] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FCD116]/20 inline-block mb-3 text-[12px]">Program Unggulan</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white">Membangun Karakter &amp; Potensi Terbaik Anak</h2>
      <p className="text-white/90 mt-4 text-[16px]">
        Kami menyusun rangkaian program unggulan terpadu sesuai dengan tahap perkembangan anak agar ceria, mandiri, mengedepankan kreativitas, dan berakhlak mulia.
      </p>
    </div>

    <div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
      {displayFeaturedPrograms.map((prog: any, idx: number) => (
        <div key={prog._id || idx} className="bg-gradient-to-br from-[#1fa555] to-[#14753c] rounded-3xl p-6 shadow-md border border-white/20 hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 group w-[85vw] sm:w-[300px] md:w-auto snap-center shrink-0 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl bg-[#FCD116] flex items-center justify-center text-[#188B48] group-hover:scale-110 transition-transform shadow-sm">
                <span className="material-symbols-outlined text-[28px]">{prog.icon || 'star'}</span>
              </div>
              {prog.category && (
                <span className="text-[11px] font-bold text-[#FCD116] bg-black/25 px-3 py-1 rounded-full uppercase tracking-wider">
                  {prog.category}
                </span>
              )}
            </div>
            <h3 className="text-xl font-bold text-white mb-3 leading-snug">{prog.title}</h3>
            <p className="text-white/90 text-[14px] leading-relaxed">
              {prog.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* Wave Divider */}
<div className="w-full overflow-hidden -mt-1 bg-white">
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
    <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#188B48"/>
  </svg>
</div>
{/* SECTION 5: BERITA & AGENDA KEGIATAN */}
<section className="w-full py-12 md:py-20 bg-white">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
<div>
<span className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-widest px-3 py-1 rounded-full bg-secondary-fixed/30 inline-block mb-2">Warta Sekolah</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Kabar &amp; Agenda Ceria PAUD Hidayah</h2>
</div>
<Link className="inline-flex items-center gap-2 font-label-md text-label-md text-primary font-bold hover:text-secondary transition-colors group" href="/berita">
<span>Lihat Semua Berita</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
</Link>
</div>
{/* 3 News Cards */}
<div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-8 pb-8 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0">
{latestPosts && latestPosts.length > 0 ? (
  latestPosts.map((post: any) => (
    <Link
      key={post._id}
      href={`/berita/${post.slug?.current || ''}`}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col group border border-gray-100 min-w-[280px] sm:min-w-0"
    >
      <div className="h-48 overflow-hidden relative bg-gray-100">
        {post.mainImage ? (
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            alt={post.title}
            src={urlFor(post.mainImage).width(600).height(400).format('webp').url()}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#EAF3EF] text-[#188B48]/40">
            <span className="material-symbols-outlined text-[36px]">image</span>
          </div>
        )}
        {post.category && (
          <div className="absolute top-4 left-4 bg-primary text-white font-label-sm text-xs px-3 py-1 rounded-full font-bold shadow-sm">
            {post.category}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          {post.publishedAt && (
            <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-[13px] mb-2">
              <span className="material-symbols-outlined text-[16px] text-secondary">calendar_today</span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>
          )}
          <h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
            {post.excerpt}
          </p>
        </div>
        <div className="pt-4 mt-4 flex items-center justify-between border-t border-surface-container">
          <span className="font-label-md text-label-md text-primary font-semibold group-hover:text-secondary transition-colors">
            Baca Selengkapnya
          </span>
          <span className="material-symbols-outlined text-primary text-[18px] group-hover:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </div>
      </div>
    </Link>
  ))
) : (
  <>
    {/* Fallback Static Article 1 */}
    <Link href="/berita" className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col group border border-gray-100 min-w-[280px] sm:min-w-0">
      <div className="h-48 overflow-hidden relative">
        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Kegiatan Parenting Ceria kreasi batik celup ananda" src="/kegiatan/kegiatan-parenting-batik.webp"/>
        <div className="absolute top-4 left-4 bg-primary text-on-primary font-label-sm text-xs px-3 py-1 rounded-full font-bold">
          Kegiatan Luar Kelas
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-[13px] mb-2">
            <span className="material-symbols-outlined text-[16px] text-secondary">calendar_today</span>
            <span>24 Mei 2025</span>
          </div>
          <h3 className="font-headline-sm text-headline-sm text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2">
            Kunjungan Edukasi Manasik Haji Cilik di Mini Asrama Haji
          </h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
            Mengenalkan rukun Islam kelima sedini mungkin dengan simulasi tawaf, sai, dan wukuf yang dirancang interaktif serta penuh suka cita bagi ananda RA-A &amp; RA-B.
          </p>
        </div>
        <div className="pt-4 mt-4 flex items-center justify-between border-t border-surface-container">
          <span className="font-label-md text-label-md text-primary font-semibold group-hover:text-secondary transition-colors">Baca Selengkapnya</span>
          <span className="material-symbols-outlined text-primary text-[18px]">arrow_forward</span>
        </div>
      </div>
    </Link>
  </>
)}
</div>
</div>
</section>
{/* Wave Divider */}
<div className="w-full overflow-hidden -mt-1 bg-[#FCD116]">
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
    <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="white"/>
  </svg>
</div>
{/* SECTION 6: CUPLIKAN GALERI CERIA (PHOTO MOSAIC) */}
<section className="w-full py-12 md:py-20 bg-[#FCD116]">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-10">
<span className="font-label-sm text-label-sm font-bold text-primary uppercase tracking-widest px-3 py-1 rounded-full bg-primary-fixed/40 inline-block mb-3">Dokumentasi Sekolah</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Galeri Keceriaan Ananda</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Momen hangat kebersamaan belajar, beribadah, dan bereksplorasi di lingkungan asri PAUD Hidayah.</p>
</div>
{/* Bento Grid Photo Gallery */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
{/* Photo 1: Big Highlight (Left) */}
<div className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-3xl group shadow-sm">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Kebersamaan santri dan guru membentangkan kain jumputan" src="/kegiatan/kegiatan-bersama-sekolah.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-90 flex flex-col justify-end p-6 text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-fixed font-bold uppercase tracking-wider">Ibadah Harian</span>
<h4 className="font-headline-sm text-headline-sm">Sholat Dhuha &amp; Muroja'ah Berjamaah</h4>
<p className="font-body-sm text-body-sm text-surface-variant">Menyapa pagi dengan dzikir dan doa keberkahan.</p>
</div>
</div>
{/* Photo 2: Mini Gardening */}
<div className="relative overflow-hidden rounded-3xl group shadow-sm">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Eksplorasi sensorik di Sentra Bahan Alam" src="/kegiatan/kegiatan-sentra-bahan-alam.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-80 flex flex-col justify-end p-4 text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">Kebun Edukasi</span>
<h5 className="font-label-lg text-label-lg font-bold">Bercocok Tanam Mini</h5>
</div>
</div>
{/* Photo 3: Outdoor Fun / Senam Ceria */}
<div className="relative overflow-hidden rounded-3xl group shadow-sm">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Belajar ceria di pendopo terbuka RA Hidayah" src="/kegiatan/kegiatan-belajar-paviliun.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-80 flex flex-col justify-end p-4 text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">Kebugaran Jasmani</span>
<h5 className="font-label-lg text-label-lg font-bold">Senam Anak Sholeh</h5>
</div>
</div>
{/* Photo 4: Pentas Seni Islami (Wide Span Bottom Right) */}
<div className="lg:col-span-2 relative overflow-hidden rounded-3xl group shadow-sm">
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Pentas kreativitas dan apresiasi seni ananda" src="/kegiatan/kegiatan-panggung-prestasi.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-80 flex flex-col justify-end p-4 text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">Unjuk Bakat</span>
<h5 className="font-label-lg text-label-lg font-bold">Pentas Kreativitas &amp; Qasidah Rebana Cilik</h5>
</div>
</div>
</div>
</div>
</section>
{/* Wave Divider */}
<div className="w-full overflow-hidden -mt-1 bg-[#188B48]">
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
    <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#FCD116"/>
  </svg>
</div>
{/* SECTION 7: TESTIMONI WALI MURID */}
<section className="w-full py-12 md:py-20 bg-[#188B48] text-white">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-widest px-3 py-1 rounded-full bg-secondary-fixed/30 inline-block mb-3">Kata Ayah &amp; Bunda</span>
<h2 className="font-headline-lg text-headline-lg text-white">Dipercaya Oleh Ratusan Keluarga Muslim</h2>
<p className="font-body-md text-body-md text-white/80 mt-2">Kebahagiaan dan ketenangan hati orang tua melihat sang buah hati tumbuh santun dan cerdas.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Testi 1 */}
<div className="bg-[#188B48] text-white-container-low rounded-3xl p-8 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-secondary mb-4">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body-md text-body-md text-white italic mb-6">
              "Alhamdulillah, sejak sekolah di PAUD Hidayah, hafalan surat Al-Fatihah dan adab makan anak saya Farhan jadi sangat rapi. Selalu ingat berdoa sebelum dan sesudah beraktivitas tanpa disuruh lagi."
            </p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-surface-container-high">
<div className="w-12 h-12 rounded-full overflow-hidden bg-primary-fixed">
            <img className="w-full h-full object-cover" alt="Bunda Rina Wardhani, wali murid RA Hidayah" src="/kegiatan/kegiatan-candid-ibu-anak.webp"/>
</div>
<div>
<h5 className="font-label-lg text-label-lg font-bold text-white">Bunda Rina Wardhani</h5>
<p className="font-body-sm text-[12px] text-white/80">Ibunda dari Farhan (Siswa RA-B)</p>
</div>
</div>
</div>
{/* Testi 2 */}
<div className="bg-[#188B48] text-white-container-low rounded-3xl p-8 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-secondary mb-4">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body-md text-body-md text-white italic mb-6">
              "Para ustadzah di PAUD Hidayah sangat sabar dan keibuan. Aisyah dulu sangat pemalu, sekarang aktif bercerita tentang sirah nabi dan berani tampil di pentas seni. Kami sangat bersyukur!"
            </p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-surface-container-high">
<div className="w-12 h-12 rounded-full overflow-hidden bg-secondary-fixed">
<img className="w-full h-full object-cover" data-alt="Potret wajah Ayah Dimas tersenyum berkacamata rapi dan hangat, wali murid siswa RA-A di PAUD Hidayah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUzncmP6paJZu5Wghe2TqKL3pDypnHC_BoLJ7XAvnu0_h8foEbVHAzLSa6IFOY8dukGy-jra62fEzzqEcIi2ckbSuKpMVwbwICR9guQXAD-TGycdbWaPPoTgXzFulKbEv3U9OY2FwnEjsNk_c347QexHvSfj5tzIgjHIOqapsFO2uxoKEUXzVuWPB1L4yDH_7Nsm3hPPboynO8b2awpOX1lc-6ewT6IKuxftFuShBhNR3TAGJvJXq2"/>
</div>
<div>
<h5 className="font-label-lg text-label-lg font-bold text-white">Ayah Dimas Pratama, S.T.</h5>
<p className="font-body-sm text-[12px] text-white/80">Ayahanda dari Aisyah (Siswi RA-A)</p>
</div>
</div>
</div>
{/* Testi 3 */}
<div className="bg-[#188B48] text-white-container-low rounded-3xl p-8 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-secondary mb-4">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body-md text-body-md text-white italic mb-6">
              "Fasilitas kebun mini dan arena bermain pasirnya sangat bersih dan aman. Program parenting untuk orang tua juga sangat bermanfaat menyelaraskan pola asuh di rumah dan sekolah."
            </p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-surface-container-high">
<div className="w-12 h-12 rounded-full overflow-hidden bg-primary-fixed">
<img className="w-full h-full object-cover" data-alt="Potret wajah Ibu dr. Nabila tersenyum bersahabat dengan kerudung hijau lembut, wali murid Kelompok Bermain PAUD Hidayah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuALoKQSx2MEpadtar8ArhavApitIuNGkCCbZQH408gzruB3EMi1VfFxFJi4MfKmmnVgZkEy7C28QmKx0C5Tu9oI0ixrVWxFb54GPx43noOL8RHI-VUZcr-2jQ0O4ORjubDFBiHHyEYZqCR6SZhVBC_5cmzUQeOnTgHMq9JSRT2MNyJOCufV7Xts1_f8eG2tPFsbphHiv8Pr_x8yMPMQ_F8CcKZZmOUWzWQ4yxKdLdaxrPms09Jdu2An"/>
</div>
<div>
<h5 className="font-label-lg text-label-lg font-bold text-white">dr. Nabila Hapsari</h5>
<p className="font-body-sm text-[12px] text-white/80">Ibunda dari Rayyan (Playgroup)</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Wave Divider */}
<div className="w-full overflow-hidden -mt-1 bg-[#FCD116]">
  <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
    <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#188B48"/>
  </svg>
</div>
{/* SECTION 8: BANNER PENUTUP CTA PPDB & KONSULTASI */}
<section className="w-full py-12 md:py-20 bg-[#FCD116]" id="daftar-ppdb">
<div className="max-w-[1200px] mx-auto px-6">
<div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-primary via-primary-container to-tertiary p-8 sm:p-14 text-on-primary shadow-xl">
{/* Subtle Pattern Overlay */}
<div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-8 flex flex-col items-start space-y-4">
{showBanner && (
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold shadow">
<span className="material-symbols-outlined text-[16px]">celebration</span>
<span>{bannerText}</span>
</div>
)}
<h2 className="font-headline-lg text-headline-lg lg:text-[40px] lg:leading-[48px] font-bold text-on-primary">
              Siapkan Masa Depan Berkarakter Islami Ananda Bersama PAUD Hidayah
            </h2>
<p className="font-body-lg text-body-lg text-surface-container max-w-2xl">
              Kuota kelas terbatas hanya 15 siswa per kelompok belajar demi memastikan perhatian personal dan pendampingan kasih sayang maksimal. Konsultasikan kebutuhan tumbuh kembang putra-putri Ayah &amp; Bunda sekarang.
            </p>
<div className="pt-2 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-secondary-container text-on-secondary-container font-label-lg text-label-lg font-bold shadow-lg hover:brightness-105 active:scale-95 transition-all" href={`https://wa.me/${phone}`} target="_blank">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
<span>Konsultasi Admisi WhatsApp</span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#FCD116]/15 backdrop-blur-md text-on-primary font-label-lg text-label-lg font-semibold hover:bg-[#FCD116]/25 transition-all" href={`https://wa.me/${phone}?text=Halo%20Admin%2C%20saya%20tertarik%20dengan%20PAUD%20Hidayah.%20Boleh%20minta%20dikirimkan%20file%20Brosur%20dan%20Rincian%20Biaya%20terbaru%3F`} target="_blank">
<span className="material-symbols-outlined text-[20px]">download</span>
<span>Unduh Brosur &amp; Biaya</span>
</a>
</div>
</div>
<div className="lg:col-span-4 bg-gradient-to-br from-[#1fa555] to-[#14753c] shadow-inner border border-white/20 rounded-3xl p-6 flex flex-col space-y-4">
<h4 className="font-headline-sm text-headline-sm text-on-primary flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed">pin_drop</span>
<span>Kunjungi Kampus Kami</span>
</h4>
<p className="font-body-sm text-body-sm text-inverse-on-surface">
              Ayah &amp; Bunda dipersilakan melakukan <span className="font-semibold text-secondary-fixed">School Tour Gratis</span> untuk melihat langsung sarana kelas ceria, musholla, dan kebun kami.
            </p>
<div className="space-y-2 pt-2 text-on-primary font-body-sm text-[13px]">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed text-[18px]">alarm</span>
<span>{siteSettings?.openHours || "Senin - Jumat: 07.30 - 11.30 WIB"}</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed text-[18px]">location_on</span>
<span>{siteSettings?.address || "Ds. Tayu Wetan, RT.06 RW.01 Kecamatan Tayu, Kabupaten Pati, Jawa Tengah"}</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div></main>
      
    </>
  );
}
