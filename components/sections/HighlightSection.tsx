import Link from "next/link";
import Image from "next/image";

export default function HighlightSection() {
  return (
    <section className="w-full py-space-xl bg-gradient-to-r from-primary to-tertiary text-on-primary relative overflow-hidden">
{/* Decorative Starburst Geometry Pattern */}
<div className="absolute right-0 top-0 w-96 h-96 opacity-10 pointer-events-none">
<svg className="w-full h-full fill-current" viewBox="0 0 100 100">
<polygon points="50,0 61,35 98,35 68,57 79,91 50,70 21,91 32,57 2,35 39,35"></polygon>
</svg>
</div>
<div className="max-w-[1200px] mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
<div className="lg:col-span-5 flex flex-col items-start space-y-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-[16px]">lightbulb</span>
<span>Landasan Filosofi Yayasan</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-primary">Visi Kami</h2>
<p className="font-headline-md text-headline-md font-medium text-primary-fixed leading-relaxed">
            "Menjadi Lembaga Pendidikan Anak Usia Dini Islam Terdepan yang Melahirkan Generasi Berakhlak Qur’ani, Sehat, Mandiri, Cerdas, dan Berwawasan Rahmatan Lil ‘Alamin."
          </p>
</div>
<div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl border-none">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-secondary-fixed text-[24px]">favorite</span>
<h4 className="font-headline-sm text-headline-sm text-on-primary">Misi 1: Fitrah Tauhid</h4>
</div>
<p className="font-body-sm text-body-sm text-inverse-on-surface">
              Membiasakan ananda mencintai Allah SWT dan Rasulullah SAW lewat keteladanan ibadah dan doa yang membahagiakan.
            </p>
</div>
<div className="bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl border-none">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-secondary-fixed text-[24px]">psychology</span>
<h4 className="font-headline-sm text-headline-sm text-on-primary">Misi 2: Multi-Inteligensi</h4>
</div>
<p className="font-body-sm text-body-sm text-inverse-on-surface">
              Menstimulasi seluruh aspek perkembangan kognitif, bahasa, seni, dan motorik dengan sarana belajar mutakhir yang aman.
            </p>
</div>
<div className="bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl border-none">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-secondary-fixed text-[24px]">diversity_1</span>
<h4 className="font-headline-sm text-headline-sm text-on-primary">Misi 3: Kemitraan Keluarga</h4>
</div>
<p className="font-body-sm text-body-sm text-inverse-on-surface">
              Membangun sinergi harmonis antara sekolah dan orang tua murid melalui program parenting berkala serta laporan tumbuh kembang transparan.
            </p>
</div>
<div className="bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-2xl border-none">
<div className="flex items-center gap-3 mb-2">
<span className="material-symbols-outlined text-secondary-fixed text-[24px]">nature_people</span>
<h4 className="font-headline-sm text-headline-sm text-on-primary">Misi 4: Peduli Semesta</h4>
</div>
<p className="font-body-sm text-body-sm text-inverse-on-surface">
              Menumbuhkan empati sosial dan kepedulian menjaga alam lingkungan sejak masa bermain anak.
            </p>
</div>
</div>
</div>
</div>
</section>
  );
}
