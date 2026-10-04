import Link from "next/link";
import Image from "next/image";

export default function ProgramsSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low" id="program-unggulan">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<span className="font-label-sm text-label-sm font-bold text-primary uppercase tracking-widest px-3 py-1 rounded-full bg-primary-fixed/40 inline-block mb-3">Jenjang Pendidikan</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Program Belajar Sesuai Tahap Usia</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Dirancang dengan panduan kurikulum merdeka PAUD terintegrasi kurikulum diniyyah khas RA Hidayah.
        </p>
</div>
{/* 3 Program Cards Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Program 1: Playgroup */}
<div className="bg-surface-container-lowest rounded-[32px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
<div className="relative h-48 overflow-hidden bg-secondary-fixed/30">
<img className="w-full h-full object-cover" data-alt="Anak-anak balita usia 3-4 tahun sedang bermain sensory play dengan balok busa dan pasir kinetik bersama ustadzah yang ramah di ruang kelas bertikar cerah penuh mainan kayu edukatif di TK Islam RA Hidayah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC96k7Qug0u56WbQ4X4HGLVdFwUyGeu9ZGofB6vOm4945dCEpGVJIBITfUXY9Oz_hXdjtUB7f7wOEtOnmMK5bySuiwUbly4x1AfowGfP7U4CB_Q00HvXk4R27TCBcFHgeOLGnJKvgy6tzdZlJfpI0DWVrQ3ffgV4MwLl_zIb6UsnWuU2NZuJAFrgVoI6NenK8dx8lAueETt7o2OvEmcyU9SiJFNxU-BAW77l-Acx4JS90F2XWI3Rf6B"/>
<div className="absolute top-4 right-4 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm px-3 py-1.5 rounded-full font-bold shadow">
              Usia 3 - 4 Tahun
            </div>
</div>
<div className="p-6 flex flex-col flex-1 justify-between">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="material-symbols-outlined text-secondary text-[20px]">toys</span>
<span className="font-label-md text-label-md text-secondary font-bold">Kelompok Bermain (Playgroup)</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">Taman Bermain Ceria</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
                Fokus stimulasi motorik kasar &amp; halus, adaptasi sosialisasi teman sebaya, pelafalan doa harian, dan pembiasaan cinta lingkungan sekolah.
              </p>
<ul className="space-y-2 mb-6 font-body-sm text-body-sm text-on-surface">
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span>Sensory &amp; Messy Play Edukatif</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span>Toilet Training &amp; Kemandirian</span>
</li>
<li className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-[18px]">check_circle</span>
<span>Hafalan 10 Doa Harian Ringkas</span>
</li>
</ul>
</div>
<a className="w-full py-2.5 rounded-full bg-surface-container text-center text-primary font-label-md text-label-md font-semibold hover:bg-primary hover:text-on-primary transition-colors" href="#">
              Detail Program Playgroup
            </a>
</div>
</div>
{/* Program 2: TK A */}
<div className="bg-surface-container-lowest rounded-[32px] overflow-hidden shadow-md ring-2 ring-primary/20 flex flex-col relative">
<div className="absolute top-0 left-1/2 -translate-x-1/2 z-10 bg-primary text-on-primary font-label-sm text-label-sm px-4 py-1 rounded-b-xl font-bold">
            Paling Diminati
          </div>
<div className="relative h-48 overflow-hidden bg-primary-fixed/30">
<img className="w-full h-full object-cover" data-alt="Anak-anak TK usia 4-5 tahun perempuan berkerudung putih dan anak laki-laki berkopiah ceria sedang menata huruf hijaiyah bergambar dengan senyum gembira di meja kayu kelas TK RA Hidayah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqFeTlBzosePPvDd-3-WrOFgMFnhmQyypTpbIDCQaCncycbhFbRinkT4d99cSIPmQjeilchImiNlOpaNETSWhdqLX8nFCOle_UPeWhTJet1YchlZDAi8SPqNdvoyrTPMz1-Wb1Trs9KMYqoO4tWvlfFLRpoYaMHWNC9FJT7fSHon7zLv41ixq_YwVmtF2gXwUa7dOL8HaZJEtqu4vcny0g1MJ1QoRkIn2A7JbdmwsJRiwJLew5EABX"/>
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
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
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
<div className="bg-surface-container-lowest rounded-[32px] overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
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
<p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
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
<div className="mt-14 pt-10 bg-surface-container-lowest rounded-3xl p-8 shadow-sm">
<div className="text-center max-w-xl mx-auto mb-8">
<h3 className="font-headline-md text-headline-md text-primary">Ekstrakurikuler Minat &amp; Bakat Ceria</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Mengasah kecerdasan kinestetik, seni dan teknologi islami sejak dini.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-container-low hover:bg-secondary-fixed/20 transition-colors">
<div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">target</span>
</div>
<div>
<p className="font-label-md text-label-md font-bold text-on-surface">Memanah Cilik</p>
<p className="font-body-sm text-[12px] text-on-surface-variant">Fokus &amp; Sunnah Nabi</p>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/20 transition-colors">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">record_voice_over</span>
</div>
<div>
<p className="font-label-md text-label-md font-bold text-on-surface">Tahsin &amp; Da'i Cilik</p>
<p className="font-body-sm text-[12px] text-on-surface-variant">Keberanian Tampil</p>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-container-low hover:bg-secondary-fixed/20 transition-colors">
<div className="w-10 h-10 rounded-xl bg-secondary-fixed flex items-center justify-center text-secondary">
<span className="material-symbols-outlined text-[22px]">brush</span>
</div>
<div>
<p className="font-label-md text-label-md font-bold text-on-surface">Kaligrafi &amp; Lukis</p>
<p className="font-body-sm text-[12px] text-on-surface-variant">Seni Visual Ceria</p>
</div>
</div>
<div className="flex items-center gap-3 p-4 rounded-2xl bg-surface-container-low hover:bg-primary-fixed/20 transition-colors">
<div className="w-10 h-10 rounded-xl bg-primary-fixed flex items-center justify-center text-primary">
<span className="material-symbols-outlined text-[22px]">smart_toy</span>
</div>
<div>
<p className="font-label-md text-label-md font-bold text-on-surface">Robotic Kids</p>
<p className="font-body-sm text-[12px] text-on-surface-variant">Logika Koding Pemula</p>
</div>
</div>
</div>
</div>
</div>
</section>
  );
}
