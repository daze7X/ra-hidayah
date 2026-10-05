import { client } from "../../sanity/lib/client";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const settingsPhone = await client.fetch(`*[_type == "siteSettings"][0].phone`) || "082260654060";
  let phone = settingsPhone.replace(/\D/g, "");
  if (phone.startsWith("0")) phone = "62" + phone.slice(1);

  return (
    <>
      <main className="w-full bg-surface min-h-[calc(100vh-28rem)]"><div className="flex flex-col w-full">
{/* SECTION 1: HERO SECTION */}
<section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
  {/* Background Building Image with Dark/Green Overlay */}
  <div className="absolute inset-0 z-0">
    <img src="/gedung-tk.jpg" className="w-full h-full object-cover object-center" alt="Gedung PAUD Hidayah" />
    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/95 via-[var(--color-primary)]/80 to-[var(--color-primary)]/30"></div>
  </div>

  <div className="max-w-[1200px] w-full mx-auto px-6 relative z-10 pt-20 pb-16">
    <div className="max-w-2xl text-white">
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--color-secondary)] shadow-sm mb-6">
        <span className="flex h-2.5 w-2.5 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
        <span className="font-bold text-[12px] uppercase tracking-wider text-[var(--color-primary)]">
          Penerimaan Siswa Baru TA 2025/2026 Telah Dibuka
        </span>
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] mb-6">
        Membentuk Generasi <span className="text-[var(--color-secondary)] drop-shadow-md">Qur'ani</span> yang Cerdas &amp; Mandiri
      </h1>
      <p className="font-body-lg text-lg text-white/90 mb-8 max-w-xl">
        Taman Kanak-Kanak Islam berbasis fitrah anak dengan metode active learning yang ceria, menanamkan kecintaan pada Al-Qur'an sejak dini.
      </p>
      
      <div className="flex flex-wrap items-center gap-4">
        <a className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--color-secondary)] text-[var(--color-on-secondary)] font-bold shadow-lg hover:brightness-105 active:scale-95 transition-all" href="#daftar-ppdb">
          Daftar Sekarang <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </a>
        <a className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/20 backdrop-blur text-white font-bold hover:bg-white/30 transition-all border border-white/30 shadow-sm" href="/program">
          Jelajahi Program
        </a>
      </div>
    </div>

    {/* Info Cards Row (relocated from Top Bar) */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16 max-w-4xl">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 text-white shadow-lg transition-transform hover:-translate-y-1">
        <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-[var(--color-primary)] shrink-0">
          <span className="material-symbols-outlined text-[24px]">verified</span>
        </div>
        <div>
          <p className="text-[12px] text-white/80 font-medium uppercase tracking-wider">Status</p>
          <p className="font-bold text-[16px]">Akreditasi A</p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 text-white shadow-lg transition-transform hover:-translate-y-1">
        <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-[var(--color-primary)] shrink-0">
          <span className="material-symbols-outlined text-[24px]">schedule</span>
        </div>
        <div>
          <p className="text-[12px] text-white/80 font-medium uppercase tracking-wider">Waktu Belajar</p>
          <p className="font-bold text-[16px]">Senin - Jumat, 07.30 - 11.30</p>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 text-white shadow-lg transition-transform hover:-translate-y-1">
        <div className="w-12 h-12 bg-[var(--color-secondary)] rounded-full flex items-center justify-center text-[var(--color-primary)] shrink-0">
          <span className="material-symbols-outlined text-[24px]">call</span>
        </div>
        <div>
          <p className="text-[12px] text-white/80 font-medium uppercase tracking-wider">Hotline / WA</p>
          <p className="font-bold text-[16px]">0822-6055-4060</p>
        </div>
      </div>
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
          Di bawah naungan  Mandiri, kami mendampingi ananda melewati masa keemasan (golden age) dengan kelembutan fitrah, pembiasaan akhlak sunnah, dan stimulasi ragam kecerdasan.
        </p>
</div>
{/* Welcome Note Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white/10-container-low rounded-3xl p-6 sm:p-10 mb-14 shadow-sm">
<div className="lg:col-span-4 flex flex-col items-center text-center">
<div className="relative w-36 h-36 rounded-full overflow-hidden shadow-md mb-4 bg-primary-fixed">
<img className="w-full h-full object-cover" data-alt="Potret ramah dan bersahaja Ibu Kepala Sekolah PAUD Hidayah mengenakan jilbab hijau rapi dan tersenyum ramah kepada anak-anak murid dengan latar belakang perpustakaan ramah anak bertema Islami modern bernuansa hangat." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaHwDjqRnJVTBKTJJ65m6Qyy0uQZJD2D0T6nzJVRdOOfyBM8vqDn3glq0dZr2he57H0pwogAoZk9t_z7R2YbDTFKT7sdsuUvuHJdNd0bvofNNS4aidS_z-FQyRzxrPfQs7lfIHoK5ZPHJThnpcBUcUaVpOOTB91gKGH1Ma8kU328oJQMkJ2R6t3_npC2Zaqlr-H53mnVl8q195u2_oBBPHD1ey4E6GtQ9_oBpKT0gC8dMdJmP0rF2n"/>
</div>
<h4 className="font-headline-sm text-headline-sm text-white">Ustadzah Hj. Maryam, S.Pd.I</h4>
<p className="font-label-md text-label-md text-[#FCD116] font-medium">Kepala Sekolah PAUD Hidayah</p>
<span className="font-body-sm text-[12px] text-white/80 mt-1">Pengabdi Pendidikan Anak Usia Dini 15+ Tahun</span>
</div>
<div className="lg:col-span-8 flex flex-col justify-center space-y-4">
<div className="flex items-center gap-2 text-[#FCD116]">
<span className="material-symbols-outlined text-[32px]">format_quote</span>
</div>
<p className="font-body-lg text-body-lg text-white italic leading-relaxed">
            "Mendidik anak usia dini bukan sekadar mengisi botol kosong dengan angka dan huruf, melainkan menyalakan lentera tauhid dan rasa ingin tahu di dalam kalbu mereka. Kami menghadirkan suasana sekolah seperti rumah kedua yang sarat kegembiraan, kasih sayang, dan tuntunan keteladanan Rasulullah SAW."
          </p>
<div className="pt-2 flex items-center gap-4">
<div className="flex items-center gap-2 text-white font-label-md text-label-md">
<span className="material-symbols-outlined text-[20px]">handshake</span>
<span> Mandiri • Berdiri sejak 2008</span>
</div>
</div>
</div>
</div>
{/* 3 Pilar Karakter Anak */}
<div className="flex overflow-x-auto md:grid md:grid-cols-3 gap-6 pb-4 snap-x snap-mandatory hide-scrollbar">
{/* Pilar 1 */}
<div className="bg-white/10 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start relative overflow-hidden group min-w-[280px] snap-center">
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
<div className="bg-white/10 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start relative overflow-hidden group min-w-[280px] snap-center">
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
<div className="bg-white/10 rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start relative overflow-hidden group min-w-[280px] snap-center">
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
{/* 3 Program Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
{/* Program 1: TK A */}
<div className="bg-[#FCD116]est rounded-[32px] overflow-hidden shadow-md ring-2 ring-primary/20 flex flex-col relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-primary text-on-primary font-label-sm text-label-sm px-4 py-1 rounded-b-xl font-bold">
            Paling Diminati
          </div>
<div className="relative h-48 overflow-hidden bg-primary-fixed/30">
<img className="w-full h-full object-cover" data-alt="Anak-anak TK usia 4-5 tahun perempuan berkerudung putih dan anak laki-laki berkopiah ceria sedang menata huruf hijaiyah bergambar dengan senyum gembira di meja kayu kelas TK PAUD Hidayah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqFeTlBzosePPvDd-3-WrOFgMFnhmQyypTpbIDCQaCncycbhFbRinkT4d99cSIPmQjeilchImiNlOpaNETSWhdqLX8nFCOle_UPeWhTJet1YchlZDAi8SPqNdvoyrTPMz1-Wb1Trs9KMYqoO4tWvlfFLRpoYaMHWNC9FJT7fSHon7zLv41ixq_YwVmtF2gXwUa7dOL8HaZJEtqu4vcny0g1MJ1QoRkIn2A7JbdmwsJRiwJLew5EABX"/>
<div className="absolute top-4 right-4 bg-primary text-on-primary font-label-sm text-label-sm px-3 py-1.5 rounded-full font-bold shadow">
              Usia 4 - 5 Tahun
            </div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-primary text-[20px]">auto_stories</span>
<span className="font-label-md text-label-md text-primary font-bold">Kelompok TK A</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Pondasi Huruf &amp; Akhlak</h3>
<p className="font-body-sm text-body-sm text-gray-700 mb-4">
                Pengenalan huruf Hijaiyah metode Tilawati, fonik bahasa Indonesia ceria, pemahaman angka dasar melalui benda konkrit, dan sholat berjamaah.
              </p>
<ul className="space-y-2 mb-6 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span>Tahfidz Surat Pendek (An-Nas - Al-Ikhlas)</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span>Pengenalan Fonik &amp; Pra-Calistung Ceria</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span>Eksperimen Sentra Bahan Alam</span>
</li>
</ul>
</div>
<a className="w-full py-2.5 rounded-full bg-primary text-center text-on-primary font-label-md text-label-md font-semibold hover:brightness-110 transition-all shadow-sm" href="#">
              Detail Program TK A
            </a>
</div>
</div>
{/* Program 3: TK B */}
<div className="bg-[#FCD116]est rounded-[32px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
<div className="relative h-48 overflow-hidden bg-secondary-fixed/30">
<img className="w-full h-full object-cover" data-alt="Murid-murid TK B usia 5-6 tahun tersenyum bangga memegang karya gambar sains mini dan buku cerita Islam di meja kelas cerah dengan latar hiasan kaligrafi asmaul husna anak-anak." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAydOhfiM8gMV1CzijOuYr06kXlkAoBYLBTYNXnDRSQC58U5k8AyVL5Mh56gcASt_o_8Zyhs8mR_c8mTqdU3uEzg6QIE1MF_ca3tSNSKB_pq1godkoZCEyOvAkXseyn--iM7BVhuMy3ZkvtPZoOnS83R-0E4WdNwgMFI0X8a0IBFvJ2xSRD2sPyVc4wW05fIVFiVRfmffSNWOfCDwyDf7Hf2pnHdZuB7HOBDK7E8W_MKMfs_6_WnxpR"/>
<div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-3 py-1.5 rounded-full font-bold shadow">
              Usia 5 - 6 Tahun
            </div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-secondary text-[20px]">school</span>
<span className="font-label-md text-label-md text-secondary font-bold">Kelompok TK B</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Kesiapan Jenjang SD Unggul</h3>
<p className="font-body-sm text-body-sm text-gray-700 mb-4">
                Mematangkan literasi baca tulis fungsional, numerasi kontekstual, pemantapan tahfidz juz 30, hafalan hadist pilihan, dan kepemimpinan cilik.
              </p>
<ul className="space-y-2 mb-6 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span>Target 15+ Surat Pilihan Juz 'Amma</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span>Kesiapan Literasi &amp; Numerasi Masuk SD</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span>Praktik Wudhu &amp; Gerakan Sholat Sempurna</span>
</li>
</ul>
</div>
<a className="w-full py-2.5 rounded-full bg-surface-container text-center text-primary font-label-md text-label-md font-semibold hover:bg-primary hover:text-on-primary transition-colors" href="#">
              Detail Program TK B
            </a>
</div>
</div>
</div>
{/* Ekstrakurikuler Pilihan */}
<div className="mt-14 pt-10 bg-[#FCD116]est rounded-3xl p-8 shadow-sm">
<div className="text-center max-w-xl mx-auto mb-8">
<h3 className="font-headline-md text-headline-md text-primary">Ekstrakurikuler Minat &amp; Bakat Ceria</h3>
<p className="font-body-sm text-body-sm text-gray-700 mt-1">Mengasah kecerdasan kinestetik, seni dan teknologi islami sejak dini.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FCD116] hover:bg-secondary-fixed/20 transition-colors">
<div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">target</span>
</div>
<div>
<p className="font-label-md text-label-md font-bold text-on-surface">Memanah Cilik</p>
<p className="font-body-sm text-[12px] text-gray-700">Fokus &amp; Sunnah Nabi</p>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FCD116] hover:bg-primary-fixed/20 transition-colors">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">record_voice_over</span>
</div>
<div>
<p className="font-label-md text-label-md font-bold text-on-surface">Tahsin &amp; Da'i Cilik</p>
<p className="font-body-sm text-[12px] text-gray-700">Keberanian Tampil</p>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FCD116] hover:bg-secondary-fixed/20 transition-colors">
<div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">brush</span>
</div>
<div>
<p className="font-label-md text-label-md font-bold text-on-surface">Kaligrafi &amp; Lukis</p>
<p className="font-body-sm text-[12px] text-gray-700">Seni Visual Ceria</p>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-2xl bg-[#FCD116] hover:bg-primary-fixed/20 transition-colors">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">smart_toy</span>
</div>
<div>
<p className="font-label-md text-label-md font-bold text-on-surface">Robotic Kids</p>
<p className="font-body-sm text-[12px] text-gray-700">Logika Koding Pemula</p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 4: METODE & PENDEKATAN BELAJAR */}
<section className="w-full py-20 bg-[#188B48] text-white">
  <div className="max-w-[1200px] mx-auto px-6">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="font-bold text-[#FCD116] uppercase tracking-widest px-3 py-1 rounded-full bg-[#FCD116]/20 inline-block mb-3 text-[12px]">Pendekatan Belajar</span>
      <h2 className="text-3xl md:text-4xl font-bold text-white">Membangun Karakter Melalui Pengalaman</h2>
      <p className="text-white/90 mt-4 text-[16px]">
        Kami menyusun metode pembelajaran sesuai dengan tahap perkembangan anak agar tidak mudah lelah dan bosan, mengedepankan kreativitas, dan memfasilitasi anak untuk belajar langsung dari alam.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {/* Pillar 1 */}
      <div className="bg-white/10 rounded-3xl p-6 shadow-sm border border-white/20 hover:-translate-y-1 hover:shadow-md transition-all group">
        <div className="w-14 h-14 rounded-2xl bg-[#FCD116] flex items-center justify-center text-[#188B48] mb-5 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-[28px]">family_restroom</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Parenting</h3>
        <p className="text-white/90 text-[14px] leading-relaxed">
          Sekolah rutin memberikan sosialisasi parenting kepada orang tua dengan mendatangkan narasumber ahli di bidang psikologi, gizi, dan kesehatan anak.
        </p>
      </div>

      {/* Pillar 2 */}
      <div className="bg-white/10 rounded-3xl p-6 shadow-sm border border-white/20 hover:-translate-y-1 hover:shadow-md transition-all group">
        <div className="w-14 h-14 rounded-2xl bg-[#FCD116] flex items-center justify-center text-[#188B48] mb-5 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-[28px]">favorite</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Character Building</h3>
        <p className="text-white/90 text-[14px] leading-relaxed">
          Menerapkan pembiasaan positif sesuai nilai Islam. Mulai dari disiplin, mengucapkan salam, berdoa, sholat, hingga membaca Al-Qur'an.
        </p>
      </div>

      {/* Pillar 3 */}
      <div className="bg-white/10 rounded-3xl p-6 shadow-sm border border-white/20 hover:-translate-y-1 hover:shadow-md transition-all group">
        <div className="w-14 h-14 rounded-2xl bg-[#FCD116] flex items-center justify-center text-[#188B48] mb-5 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-[28px]">extension</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Full Learning</h3>
        <p className="text-white/90 text-[14px] leading-relaxed">
          Menerapkan kurikulum Merdeka. Menciptakan suasana belajar menyenangkan yang didukung alat permainan edukatif (APE) dan pembelajaran alam.
        </p>
      </div>

      {/* Pillar 4 */}
      <div className="bg-white/10 rounded-3xl p-6 shadow-sm border border-white/20 hover:-translate-y-1 hover:shadow-md transition-all group">
        <div className="w-14 h-14 rounded-2xl bg-[#FCD116] flex items-center justify-center text-[#188B48] mb-5 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-[28px]">psychology</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Deep Learning</h3>
        <p className="text-white/90 text-[14px] leading-relaxed">
          Pendekatan eksploratif, reflektif, dan kontekstual. Anak diajak menghubungkan konsep dengan kehidupan sehari-hari seperti menanam tumbuhan.
        </p>
      </div>

      {/* Pillar 5 */}
      <div className="bg-white/10 rounded-3xl p-6 shadow-sm border border-white/20 hover:-translate-y-1 hover:shadow-md transition-all group">
        <div className="w-14 h-14 rounded-2xl bg-[#FCD116] flex items-center justify-center text-[#188B48] mb-5 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-[28px]">sports_esports</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">Fun Games</h3>
        <p className="text-white/90 text-[14px] leading-relaxed">
          Menyelingi pembelajaran dengan permainan tradisional edukatif untuk mengasah kekompakan, objektivitas, dan motorik anak agar ceria selalu.
        </p>
      </div>

      {/* Pillar 6 */}
      <div className="bg-white/10 rounded-3xl p-6 shadow-sm border border-white/20 hover:-translate-y-1 hover:shadow-md transition-all group">
        <div className="w-14 h-14 rounded-2xl bg-[#FCD116] flex items-center justify-center text-[#188B48] mb-5 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-[28px]">menu_book</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">TPQ PAUD</h3>
        <p className="text-white/90 text-[14px] leading-relaxed">
          Metode Qiro'ati secara bertahap. Mengenal huruf hijaiyah dan membaca Al-Qur'an tartil dengan permainan edukatif yang ceria dan asyik.
        </p>
      </div>

    </div>
  </div>
</section>
{/* SECTION 5: BERITA & AGENDA KEGIATAN */}
<section className="w-full py-12 md:py-20 bg-white">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
<div>
<span className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-widest px-3 py-1 rounded-full bg-secondary-fixed/30 inline-block mb-2">Warta Sekolah</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Kabar &amp; Agenda Ceria PAUD Hidayah</h2>
</div>
<a className="inline-flex items-center gap-2 font-label-md text-label-md text-primary font-bold hover:text-secondary transition-colors" href="#">
<span>Lihat Semua Berita</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
{/* 3 News Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Article 1 */}
<article className="bg-white-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="Anak-anak murid TK Islam memakai baju ihram putih mini sedang berjalan tertib di replika miniatur Ka'bah halaman sekolah dalam kegiatan Manasik Haji Cilik ceria dengan bimbingan guru-guru." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKCWPcmdLs335TWon99Yh1SXdB7wsr3N2FliA17SBCorCdaX9av5yenOJbzHUOLo11HQQitB8gHA4Gx0LJqJl4DtAK6XDnA3-OpLw-60oyPqW9kLQ69M4zaDdl7vxDlTw0kf7z_sA91RFir3C3g6u8M6S_L4CvIaFg0WNCVWGUBeC4oJ5m3d1XoLoO0M96GyXerkavlq-l3UK_AU9fzVfibF5PO6fQZHPXb2AqFbapzQriAnUyBBgZ"/>
<div className="absolute top-4 left-4 bg-primary text-on-primary font-label-sm text-label-sm px-3 py-1 rounded-full font-bold">
              Kegiatan Luar Kelas
            </div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-[13px] mb-2">
<span className="material-symbols-outlined text-[16px] text-secondary">calendar_today</span>
<span>24 Mei 2025</span>
<span>•</span>
<span>Agenda Tahunan</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2 hover:text-secondary cursor-pointer transition-colors">
                Kunjungan Edukasi Manasik Haji Cilik di Mini Asrama Haji
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                Mengenalkan rukun Islam kelima sedini mungkin dengan simulasi tawaf, sai, dan wukuf yang dirancang interaktif serta penuh suka cita bagi ananda TK A &amp; TK B.
              </p>
</div>
<div className="pt-4 mt-4 flex items-center justify-between border-t border-surface-container">
<span className="font-label-md text-label-md text-primary font-semibold">Baca Selengkapnya</span>
<span className="material-symbols-outlined text-primary text-[18px]">arrow_right_alt</span>
</div>
</div>
</article>
{/* Article 2 */}
<article className="bg-white-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="Anak-anak TK PAUD Hidayah berjualan kue sehat tradisional dan kerajinan tangan dalam acara Market Day Ceria memperingati Maulid Nabi Muhammad SAW dengan riang gembira bersama orang tua mereka." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGE4B77VdDXhLqkIziUrpoYXKojmODOmh0T7sD_lVpmw1gTfOwPq2_yykegfSnx67IZH_mdNxS02fCTPcshWTUkD-ghoIbddGjEkNw13vbQNTyxz24Rf8GPZ76iGu_WmG_7lgGjislDarOnykMr8gV7xqyMSl3sQXjIUtzRLrQ-6EHn-g3fSVnHrWAZwcFXMX_riD_-n4xqQNKkhb9p7r98CZEpZ23Vsgc71CBcSi2v8q6iylGkN9y"/>
<div className="absolute top-4 left-4 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-3 py-1 rounded-full font-bold">
              Karakter &amp; Wirausaha
            </div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-[13px] mb-2">
<span className="material-symbols-outlined text-[16px] text-secondary">calendar_today</span>
<span>12 Mei 2025</span>
<span>•</span>
<span>Peringatan Hari Besar</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2 hover:text-secondary cursor-pointer transition-colors">
                Peringatan Maulid Nabi &amp; Gelar Market Day Cilik 2025
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                Meneladani sifat jujur dan amanah Rasulullah SAW lewat transaksi jual-beli aneka kudapan halal dan kreasi celengan buatan murid sendiri.
              </p>
</div>
<div className="pt-4 mt-4 flex items-center justify-between border-t border-surface-container">
<span className="font-label-md text-label-md text-primary font-semibold">Baca Selengkapnya</span>
<span className="material-symbols-outlined text-primary text-[18px]">arrow_right_alt</span>
</div>
</div>
</article>
{/* Article 3 */}
<article className="bg-white-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="Ruang pendaftaran admisi TK Islam yang hangat dan ramah anak dengan spanduk PPDB, meja pendaftaran berhias bunga dan pamflet informatif untuk orang tua wali murid baru PAUD Hidayah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfXnfU7ZiPKg42pRsKbHhPJ7CdUFpR0LlH-XJviySKoxFGjzZlxSXwRDRblhummdb3DoponcSrjSHeHxkJMbgHcsWqfgSg8XFaT-NrZtDKU9m31vnk-iZb5fEnC11maAsJVMZRKiJg_IXg0xCvRxYcQCjMo17tCt7cAi38cO7XN8X6MJCZY7khlXVpUhtyuUfjljGrIxnPh68SN8zhrAZAwQh5u-WsSDB6HL1bfZhSmZDgr69eWtyC"/>
<div className="absolute top-4 left-4 bg-primary text-on-primary font-label-sm text-label-sm px-3 py-1 rounded-full font-bold">
              Informasi PPDB
            </div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-[13px] mb-2">
<span className="material-symbols-outlined text-[16px] text-secondary">calendar_today</span>
<span>1 Mei 2025</span>
<span>•</span>
<span>Penerimaan Siswa</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2 hover:text-secondary cursor-pointer transition-colors">
                Buka Pendaftaran Siswa Baru (PPDB) Gelombang 1 TA 2025/2026
              </h3>
<p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3">
                Dapatkan potongan biaya pendaftaran formulir early bird dan fasilitas perlengkapan seragam lengkap bagi 30 pendaftar pertama bulan ini.
              </p>
</div>
<div className="pt-4 mt-4 flex items-center justify-between border-t border-surface-container">
<span className="font-label-md text-label-md text-primary font-semibold">Baca Selengkapnya</span>
<span className="material-symbols-outlined text-primary text-[18px]">arrow_right_alt</span>
</div>
</div>
</article>
</div>
</div>
</section>
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
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Suasana anak-anak TK laki-laki dan perempuan PAUD Hidayah sedang berjejer rapi melaksanakan sholat Dhuha berjamaah di musholla mini sekolah beralaskan sajadah hijau asri dengan pancaran sinar matahari pagi yang teduh." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn6693uM3gsNdWqCLneCgBVZoJcocQeTLE08GeRLRo7xMQoDwWXSRKN4UDJ8XSeEYRrkSW5Id1qTAAGxpKiyXtOt94nYml8i5TNO-pi0p4u_xq-f05ea-8YqYJFQtgljesPtao4cucCa-K-sT_Kgoh60tvPVLvPUaPo8wBQodwgKDW0GvlFLH9cFSGgG9Etn0AWqIsQZvvy3SkHpIEoM4eAM5Ciyv3sXPnRXFK1WN7jKzr3ECAbaMS"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-90 flex flex-col justify-end p-6 text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-fixed font-bold uppercase tracking-wider">Ibadah Harian</span>
<h4 className="font-headline-sm text-headline-sm">Sholat Dhuha &amp; Muroja'ah Berjamaah</h4>
<p className="font-body-sm text-body-sm text-surface-variant">Menyapa pagi dengan dzikir dan doa keberkahan.</p>
</div>
</div>
{/* Photo 2: Mini Gardening */}
<div className="relative overflow-hidden rounded-3xl group shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Dua anak TK tersenyum ceria memakai topi jerami mini sedang menyiram tanaman bayam dan stroberi di kebun edukasi outdoor sekolah PAUD Hidayah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABga1lyJkosTPRB1io-inGWW86u9dRPHhR8_RwSCSNwujZ_VmU55l6RtWGZukUPAuQSYtQVV1hagbXfEbfWJdObwbdqkE3x30Ns9RxrVr5rqNPnzl3i8d8f101t-JJvNR_Dbncsf2OsvhTXTj9-r0tWV08_zza_y3KiM0GE_35tahFJeW6Le-3uPiAsFUeq6HLRzu22RseczBi_GYtf7j4fTnqRb2eS-4TA2wtZAQfSKFybPl8xmUD"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-80 flex flex-col justify-end p-4 text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">Kebun Edukasi</span>
<h5 className="font-label-lg text-label-lg font-bold">Bercocok Tanam Mini</h5>
</div>
</div>
{/* Photo 3: Outdoor Fun / Senam Ceria */}
<div className="relative overflow-hidden rounded-3xl group shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Murid-murid TK berseragam kaos olahraga hijau kuning cerah sedang merentangkan tangan dalam senam pagi ceria di lapangan rumput sintetis sekolah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQQypKJYAFWzPgqkJsmC4ANw6sL3it5wQyijyUxHOK7HRQiSvBtacoWQV4Hzm8NRF8wseHfCW57npcJh_ba0Pl_WqhBv10rZEE83v9izUrCTzpgui56vt_jvoushz1KS_2s8xuVghn8QUlPTKgnLXvEU6PBAqsOiO1kNh-vJi7VhDGL4EtOcXcDoJKGfj0xW7ULn5c4h1-cKtp8q_00PJE1VFmOOPXA7lau_d8hcdBTYq6otMbUrJ_"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-80 flex flex-col justify-end p-4 text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">Kebugaran Jasmani</span>
<h5 className="font-label-lg text-label-lg font-bold">Senam Anak Sholeh</h5>
</div>
</div>
{/* Photo 4: Pentas Seni Islami (Wide Span Bottom Right) */}
<div className="lg:col-span-2 relative overflow-hidden rounded-3xl group shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Pentas seni ceria anak TK PAUD Hidayah menampilkan pertunjukan qasidah rebana anak cilik di panggung bernuansa hijau ceria dengan tawa bangga orang tua yang menonton." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8UM6lGaHQdOJ54zYZADwhAmEpf9FBWdr3ezB0QoBz8YWFu7J6oY0I9lIBC1c8wXvvztsIy5X0Mnna7BO0DMmChXj_emQXrc1mnCO23LnQf5RTIz-9nYF0Os0YJqsebo87udduOXQh780GjymLe_7ZDywBDo15ujlwfwwPufAEHWC6YpVGGsdmvCPgOyIreahK8TfX7atfOSymShJlGf-9ZSDp8ftPhOkG8ZskTUBnyiuqtZxpd1rZ"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-80 flex flex-col justify-end p-4 text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">Unjuk Bakat</span>
<h5 className="font-label-lg text-label-lg font-bold">Pentas Kreativitas &amp; Qasidah Rebana Cilik</h5>
</div>
</div>
</div>
</div>
</section>
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
<img className="w-full h-full object-cover" data-alt="Potret wajah ramah Bunda Rina tersenyum santun dengan hijab warna pastel, wali murid dari siswa TK B di PAUD Hidayah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcIZSgRPwLzV6lNtTUrpCTsjeIEfyyPQLoo9JzHqlFrWLk-XbEy-ev2av6ZoHwy7UMlpwn1YqQmXUCA93ZwBZfghF-UlVnc_JQwjh0fNoEyN7eha5XdHOG6OtrDUHw__fGUEqiIaBV3Xsd-PT0WXTczbz3Kh3-H4fi5-HKB2G5ni5j42cq-pj1Y_tjDexC_TRSQqWxH9BSo8aDJ0MoYVrwABUHcTrTiHtJxjZ7iUAnGf2gY6e16JO4"/>
</div>
<div>
<h5 className="font-label-lg text-label-lg font-bold text-white">Bunda Rina Wardhani</h5>
<p className="font-body-sm text-[12px] text-white/80">Ibunda dari Farhan (Siswa TK B)</p>
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
<img className="w-full h-full object-cover" data-alt="Potret wajah Ayah Dimas tersenyum berkacamata rapi dan hangat, wali murid siswa TK A di PAUD Hidayah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUzncmP6paJZu5Wghe2TqKL3pDypnHC_BoLJ7XAvnu0_h8foEbVHAzLSa6IFOY8dukGy-jra62fEzzqEcIi2ckbSuKpMVwbwICR9guQXAD-TGycdbWaPPoTgXzFulKbEv3U9OY2FwnEjsNk_c347QexHvSfj5tzIgjHIOqapsFO2uxoKEUXzVuWPB1L4yDH_7Nsm3hPPboynO8b2awpOX1lc-6ewT6IKuxftFuShBhNR3TAGJvJXq2"/>
</div>
<div>
<h5 className="font-label-lg text-label-lg font-bold text-white">Ayah Dimas Pratama, S.T.</h5>
<p className="font-body-sm text-[12px] text-white/80">Ayahanda dari Aisyah (Siswi TK A)</p>
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
{/* SECTION 8: BANNER PENUTUP CTA PPDB & KONSULTASI */}
<section className="w-full py-12 md:py-20 bg-[#FCD116]" id="daftar-ppdb">
<div className="max-w-[1200px] mx-auto px-6">
<div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-primary via-primary-container to-tertiary p-8 sm:p-14 text-on-primary shadow-xl">
{/* Subtle Pattern Overlay */}
<div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-secondary-container/20 blur-2xl pointer-events-none"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
<div className="lg:col-span-8 flex flex-col items-start space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-bold shadow">
<span className="material-symbols-outlined text-[16px]">celebration</span>
<span>Penerimaan Peserta Didik Baru (PPDB) 2025/2026</span>
</div>
<h2 className="font-headline-lg text-headline-lg lg:text-[40px] lg:leading-[48px] font-bold text-on-primary">
              Siapkan Masa Depan Qur'ani Ananda Bersama PAUD Hidayah
            </h2>
<p className="font-body-lg text-body-lg text-surface-container max-w-2xl">
              Kuota kelas terbatas hanya 15 siswa per kelompok belajar demi memastikan perhatian personal dan pendampingan kasih sayang maksimal. Konsultasikan kebutuhan tumbuh kembang putra-putri Ayah &amp; Bunda sekarang.
            </p>
<div className="pt-2 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-secondary-container text-on-secondary-container font-label-lg text-label-lg font-bold shadow-lg hover:brightness-105 active:scale-95 transition-all" href={`https://wa.me/${phone}`} target="_blank">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
<span>Konsultasi Admisi WhatsApp</span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-[#FCD116]/15 backdrop-blur-md text-on-primary font-label-lg text-label-lg font-semibold hover:bg-[#FCD116]/25 transition-all" href="#">
<span className="material-symbols-outlined text-[20px]">download</span>
<span>Unduh Brosur &amp; Biaya</span>
</a>
</div>
</div>
<div className="lg:col-span-4 bg-[#FCD116]/10 backdrop-blur-md rounded-3xl p-6 flex flex-col space-y-4">
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
<span>Senin - Jumat: 08.00 - 13.00 WIB</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary-fixed text-[18px]">location_on</span>
<span>Jl. Masjid Hidayah No. 12, Kompleks Islam Ceria</span>
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
