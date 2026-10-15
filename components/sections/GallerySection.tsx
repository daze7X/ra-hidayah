import Link from "next/link";
import Image from "next/image";

export default function GallerySection() {
  return (
    <section className="w-full py-space-xl bg-surface">
<div className="max-w-[1200px] mx-auto px-6">
<div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
<div>
<span className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-widest px-3 py-1 rounded-full bg-secondary-fixed/30 inline-block mb-2">Warta Sekolah</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Kabar &amp; Agenda Ceria RA Hidayah</h2>
</div>
<a className="inline-flex items-center gap-2 font-label-md text-label-md text-primary font-bold hover:text-secondary transition-colors" href="#">
<span>Lihat Semua Berita</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
{/* 3 News Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Article 1 */}
<article className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Kegiatan kreasi batik celup ananda bersama orang tua murid" src="/kegiatan/kegiatan-parenting-batik.webp"/>
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
<article className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Sentra role play dan Market Day ananda RA Hidayah" src="/kegiatan/kegiatan-market-day.webp"/>
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
<article className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" alt="Kebersamaan keluarga besar ananda dan guru RA Hidayah" src="/kegiatan/kegiatan-bersama-sekolah.webp"/>
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
  );
}
