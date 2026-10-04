import Link from "next/link";
import Image from "next/image";

export default function PPDBSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-lowest" id="daftar-ppdb">
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
              Siapkan Masa Depan Qur'ani Ananda Bersama RA Hidayah
            </h2>
<p className="font-body-lg text-body-lg text-surface-container max-w-2xl">
              Kuota kelas terbatas hanya 15 siswa per kelompok belajar demi memastikan perhatian personal dan pendampingan kasih sayang maksimal. Konsultasikan kebutuhan tumbuh kembang putra-putri Ayah &amp; Bunda sekarang.
            </p>
<div className="pt-2 flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-secondary-container text-on-secondary-container font-label-lg text-label-lg font-bold shadow-lg hover:brightness-105 active:scale-95 transition-all" href="https://wa.me/6281234567890" target="_blank">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>chat</span>
<span>Konsultasi Admisi WhatsApp</span>
</a>
<a className="inline-flex items-center gap-2 px-6 py-4 rounded-full bg-surface-container-lowest/15 backdrop-blur-md text-on-primary font-label-lg text-label-lg font-semibold hover:bg-surface-container-lowest/25 transition-all" href="#">
<span className="material-symbols-outlined text-[20px]">download</span>
<span>Unduh Brosur &amp; Biaya</span>
</a>
</div>
</div>
<div className="lg:col-span-4 bg-surface-container-lowest/10 backdrop-blur-md rounded-3xl p-6 flex flex-col space-y-4">
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
  );
}
