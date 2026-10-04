import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low/70 via-surface to-surface pb-space-xl pt-4">
{/* Ambient Islamic Geometry Glow Background Shapes */}
<div className="pointer-events-none absolute -left-28 top-8 h-96 w-96 rounded-full bg-primary-fixed/20 blur-3xl"></div>
<div className="pointer-events-none absolute -right-24 top-20 h-96 w-96 rounded-full bg-secondary-fixed/40 blur-3xl"></div>
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
{/* Hero Text & CTA */}
<div className="lg:col-span-6 flex flex-col items-start space-y-6">
<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-surface-container-lowest shadow-sm">
<span className="flex h-2.5 w-2.5 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-primary">Penerimaan Siswa Baru TA 2025/2026 Dibuka</span>
</div>
<h1 className="font-headline-lg text-headline-lg lg:font-display-hero lg:text-display-hero text-primary tracking-tight leading-tight">
            Membentuk Generasi <span className="text-secondary drop-shadow-sm">Qur'ani</span> yang Cerdas, Mandiri &amp; Berakhlak Mulia
          </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Taman Kanak-Kanak Islam berbasis fitrah anak dengan metode <span className="font-semibold text-primary">active learning</span> yang ceria, menanamkan kecintaan pada Al-Qur'an, adab mulia, dan kecakapan hidup sejak dini.
          </p>
<div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-secondary-container text-on-secondary-container font-label-lg text-label-lg shadow-md hover:brightness-105 active:scale-95 transition-all" href="#daftar-ppdb">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
<span>Daftar PPDB Online</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-surface-container-lowest text-primary hover:bg-surface-container transition-all font-label-lg text-label-lg shadow-sm" href="#program-unggulan">
<span>Jelajahi Program Kami</span>
<span className="material-symbols-outlined text-[18px]">arrow_downward</span>
</a>
</div>
{/* Feature Micro Badges */}
<div className="grid grid-cols-3 gap-3 w-full pt-4">
<div className="flex items-center gap-2.5 bg-surface-container-lowest p-3 rounded-2xl shadow-sm">
<div className="h-9 w-9 rounded-xl bg-primary-fixed/40 flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
</div>
<div className="min-w-0">
<p className="font-label-sm text-label-sm font-bold text-on-surface truncate">Akreditasi A</p>
<p className="font-body-sm text-[12px] text-on-surface-variant truncate">BAN PDM Unggul</p>
</div>
</div>
<div className="flex items-center gap-2.5 bg-surface-container-lowest p-3 rounded-2xl shadow-sm">
<div className="h-9 w-9 rounded-xl bg-secondary-fixed/50 flex items-center justify-center text-secondary shrink-0">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>menu_book</span>
</div>
<div className="min-w-0">
<p className="font-label-sm text-label-sm font-bold text-on-surface truncate">Hafalan Juz 30</p>
<p className="font-body-sm text-[12px] text-on-surface-variant truncate">Metode Ceria</p>
</div>
</div>
<div className="flex items-center gap-2.5 bg-surface-container-lowest p-3 rounded-2xl shadow-sm">
<div className="h-9 w-9 rounded-xl bg-primary-fixed/40 flex items-center justify-center text-primary shrink-0">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>badge</span>
</div>
<div className="min-w-0">
<p className="font-label-sm text-label-sm font-bold text-on-surface truncate">Guru PAUD</p>
<p className="font-body-sm text-[12px] text-on-surface-variant truncate">Tersertifikasi</p>
</div>
</div>
</div>
</div>
{/* Hero Arch Visual Container */}
<div className="lg:col-span-6 relative flex justify-center items-center">
<div className="relative w-full max-w-[500px]">
{/* Decorative Backing Arch with warm sunset tone */}
<div className="absolute -inset-3 bg-gradient-to-tr from-secondary-fixed-dim via-primary-fixed to-secondary-fixed rounded-t-[180px] rounded-b-[40px] opacity-60 blur-lg transform -rotate-1"></div>
{/* Main Parabolic Islamic-inspired Image Card */}
<div className="relative overflow-hidden rounded-t-[160px] rounded-b-[36px] bg-surface-container-lowest shadow-2xl p-2.5">
<div className="overflow-hidden rounded-t-[150px] rounded-b-[28px] aspect-[4/3] sm:aspect-[16/11]">
<img alt="Keceriaan Belajar Anak RA Hidayah" className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAby3nFVP69Hg7rEX10Yk5-k6Tz0GQzeBFUa14K1pSDSF8nNIvoP1fjxQJGWxwtn8wtr4yRXatuZQKcaRcXADEsghjM6LEZcjIDvL93KDkcNI53sZEc3Hef1xEACff-zb5cm8wqxNOoek0KFTrzWCR8w61T8nytr8JAv2PvdFcgSVAEOn9JPGPtFtFnbWh96CbZOcW3OVLLGtoFv2fapAjMluxeAVerAG2z4MOAw9o5Dcnb-B0Cmnwv"/>
</div>
{/* Overlaid Floating Badge */}
<div className="absolute -bottom-1 -left-1 sm:left-4 sm:bottom-4 bg-surface-container-lowest/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3">
<div className="w-11 h-11 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-headline-sm text-headline-sm">
<span className="material-symbols-outlined text-[24px]">school</span>
</div>
<div>
<div className="flex items-center gap-1">
<span className="text-secondary font-bold font-label-md text-label-md">100% Ceria</span>
<span className="material-symbols-outlined text-[16px] text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
</div>
<p className="font-body-sm text-[12px] text-on-surface-variant">Lingkungan Asri, Aman &amp; Ramah Anak</p>
</div>
</div>
</div>
{/* Floating Pill (Top Right) */}
<div className="absolute -top-3 -right-2 bg-primary text-on-primary px-4 py-2 rounded-full shadow-lg flex items-center gap-2 animate-bounce">
<span className="material-symbols-outlined text-secondary-fixed text-[18px]">verified_user</span>
<span className="font-label-sm text-label-sm font-bold">SPMB Gelombang 1</span>
</div>
</div>
</div>
</div>
</div>
</section>
  );
}
