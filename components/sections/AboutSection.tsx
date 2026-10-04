import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-lowest">
<div className="max-w-[1200px] mx-auto px-6">
{/* Section Tagline */}
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-widest px-3 py-1 rounded-full bg-secondary-fixed/30 inline-block mb-3">Tentang RA Hidayah</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Tumbuh Ceria, Cerdas, Mandiri dan Islami</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-3">
          Di bawah naungan Yayasan Hidayatullah, kami mendampingi ananda melewati masa keemasan (golden age) dengan kelembutan fitrah, pembiasaan akhlak sunnah, dan stimulasi ragam kecerdasan.
        </p>
</div>
{/* Welcome Note Grid */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface-container-low rounded-3xl p-6 sm:p-10 mb-14 shadow-sm">
<div className="lg:col-span-4 flex flex-col items-center text-center">
<div className="relative w-36 h-36 rounded-full overflow-hidden shadow-md mb-4 bg-primary-fixed">
<img className="w-full h-full object-cover" data-alt="Potret ramah dan bersahaja Ibu Kepala Sekolah RA Hidayah mengenakan jilbab hijau rapi dan tersenyum ramah kepada anak-anak murid dengan latar belakang perpustakaan ramah anak bertema Islami modern bernuansa hangat." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaHwDjqRnJVTBKTJJ65m6Qyy0uQZJD2D0T6nzJVRdOOfyBM8vqDn3glq0dZr2he57H0pwogAoZk9t_z7R2YbDTFKT7sdsuUvuHJdNd0bvofNNS4aidS_z-FQyRzxrPfQs7lfIHoK5ZPHJThnpcBUcUaVpOOTB91gKGH1Ma8kU328oJQMkJ2R6t3_npC2Zaqlr-H53mnVl8q195u2_oBBPHD1ey4E6GtQ9_oBpKT0gC8dMdJmP0rF2n"/>
</div>
<h4 className="font-headline-sm text-headline-sm text-primary">Sri Surami Widyastuti, S.Pd</h4>
<p className="font-label-md text-label-md text-secondary font-medium">Kepala Sekolah RA Hidayah</p>
<span className="font-body-sm text-[12px] text-on-surface-variant mt-1">Pengabdi Pendidikan Anak Usia Dini 15+ Tahun</span>
</div>
<div className="lg:col-span-8 flex flex-col justify-center space-y-4">
<div className="flex items-center gap-2 text-secondary">
<span className="material-symbols-outlined text-[32px]">format_quote</span>
</div>
<p className="font-body-lg text-body-lg text-on-surface italic leading-relaxed">
            "Dengan hati kita melayani, dengan keteladanan kita menginspirasi. RA Hidayah hadir mendampingi ananda melewati masa keemasan (golden age) dengan kelembutan fitrah dan pembiasaan akhlak sunnah."
          </p>
<div className="pt-2 flex items-center gap-4">
<div className="flex items-center gap-2 text-primary font-label-md text-label-md">
<span className="material-symbols-outlined text-[20px]">handshake</span>
<span>Yayasan Hidayatullah Mandiri • Berdiri sejak 2008</span>
</div>
</div>
</div>
</div>
{/* 3 Pilar Karakter Anak */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
{/* Pilar 1 */}
<div className="bg-surface rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start relative overflow-hidden group">
<div className="w-14 h-14 rounded-2xl bg-primary-fixed/50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>mosque</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">1. Karakter Qur'ani &amp; Adab</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
            Penanaman tauhid aplikatif, hafalan surat pendek juz 30, doa keseharian, serta pembiasaan 5S (Senyum, Salam, Sapa, Sopan, Santun) dalam setiap langkah interaksi bermain.
          </p>
<div className="mt-6 inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-semibold">
<span>Sentra Imtaq &amp; Sirah</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</div>
</div>
{/* Pilar 2 */}
<div className="bg-surface rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start relative overflow-hidden group">
<div className="w-14 h-14 rounded-2xl bg-secondary-fixed text-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>self_improvement</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">2. Kemandirian &amp; Life Skills</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
            Melatih kemandirian motorik praktis: adab makan Islami secara mandiri, merapikan mainan sendiri, toilet training ramah anak, dan keberanian mengungkapkan pendapat.
          </p>
<div className="mt-6 inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary font-semibold">
<span>Pembiasaan Practical Life</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</div>
</div>
{/* Pilar 3 */}
<div className="bg-surface rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col items-start relative overflow-hidden group">
<div className="w-14 h-14 rounded-2xl bg-primary-fixed/50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<span className="material-symbols-outlined text-[28px]" style={{ fontVariationSettings: "'FILL' 1" }}>palette</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-3">3. Kreativitas &amp; Eksplorasi</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
            Eksperimen sains sederhana ramah anak, bermain peran, stimulasi musik Islami/perkusi, serta kebebasan berkreasi melukis tanpa takut salah untuk mengasah kognitif.
          </p>
<div className="mt-6 inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-semibold">
<span>Sentra Seni &amp; Balok Rancang</span>
<span className="material-symbols-outlined text-[16px]">chevron_right</span>
</div>
</div>
</div>
</div>
</section>
  );
}
