import Link from "next/link";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-10">
<span className="font-label-sm text-label-sm font-bold text-primary uppercase tracking-widest px-3 py-1 rounded-full bg-primary-fixed/40 inline-block mb-3">Dokumentasi Sekolah</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Galeri Keceriaan Ananda</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Momen hangat kebersamaan belajar, beribadah, dan bereksplorasi di lingkungan asri RA Hidayah.</p>
</div>
{/* Bento Grid Photo Gallery */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[220px]">
{/* Photo 1: Big Highlight (Left) */}
<div className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-3xl group shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Kebersamaan seluruh ananda murid dan ustadzah RA Hidayah" src="/kegiatan/kegiatan-bersama-sekolah.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-90 flex flex-col justify-end p-6 text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-fixed font-bold uppercase tracking-wider">Momen Kebersamaan</span>
<h4 className="font-headline-sm text-headline-sm">Keceriaan Seluruh Ananda &amp; Guru</h4>
<p className="font-body-sm text-body-sm text-surface-variant">Karya kreatif celup rintang menyatukan ananda dan pendidik.</p>
</div>
</div>
{/* Photo 2: Sentra Bahan Alam */}
<div className="relative overflow-hidden rounded-3xl group shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Aktivitas eksplorasi di Sentra Bahan Alam" src="/kegiatan/kegiatan-sentra-bahan-alam.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-80 flex flex-col justify-end p-4 text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">Sentra Belajar</span>
<h5 className="font-label-lg text-label-lg font-bold">Sentra Bahan Alam</h5>
</div>
</div>
{/* Photo 3: Outdoor Fun / Paviliun */}
<div className="relative overflow-hidden rounded-3xl group shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Aktivitas belajar di paviliun terbuka RA Hidayah" src="/kegiatan/kegiatan-belajar-paviliun.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-80 flex flex-col justify-end p-4 text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">Eksplorasi Terbuka</span>
<h5 className="font-label-lg text-label-lg font-bold">Belajar di Pendopo Asri</h5>
</div>
</div>
{/* Photo 4: Pentas Seni Ceria */}
<div className="lg:col-span-2 relative overflow-hidden rounded-3xl group shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Pentas kreativitas dan apresiasi seni ananda di panggung" src="/kegiatan/kegiatan-panggung-prestasi.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-80 flex flex-col justify-end p-4 text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">Unjuk Bakat</span>
<h5 className="font-label-lg text-label-lg font-bold">Panggung Apresiasi &amp; Kreativitas Ananda</h5>
</div>
</div>
</div>
</div>
</section>
  );
}
