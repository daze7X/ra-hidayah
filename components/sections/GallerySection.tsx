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
<article className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
<div className="h-48 overflow-hidden relative">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="Anak-anak TK RA Hidayah berjualan kue sehat tradisional dan kerajinan tangan dalam acara Market Day Ceria memperingati Maulid Nabi Muhammad SAW dengan riang gembira bersama orang tua mereka." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGE4B77VdDXhLqkIziUrpoYXKojmODOmh0T7sD_lVpmw1gTfOwPq2_yykegfSnx67IZH_mdNxS02fCTPcshWTUkD-ghoIbddGjEkNw13vbQNTyxz24Rf8GPZ76iGu_WmG_7lgGjislDarOnykMr8gV7xqyMSl3sQXjIUtzRLrQ-6EHn-g3fSVnHrWAZwcFXMX_riD_-n4xqQNKkhb9p7r98CZEpZ23Vsgc71CBcSi2v8q6iylGkN9y"/>
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
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" data-alt="Ruang pendaftaran admisi TK Islam yang hangat dan ramah anak dengan spanduk PPDB, meja pendaftaran berhias bunga dan pamflet informatif untuk orang tua wali murid baru RA Hidayah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfXnfU7ZiPKg42pRsKbHhPJ7CdUFpR0LlH-XJviySKoxFGjzZlxSXwRDRblhummdb3DoponcSrjSHeHxkJMbgHcsWqfgSg8XFaT-NrZtDKU9m31vnk-iZb5fEnC11maAsJVMZRKiJg_IXg0xCvRxYcQCjMo17tCt7cAi38cO7XN8X6MJCZY7khlXVpUhtyuUfjljGrIxnPh68SN8zhrAZAwQh5u-WsSDB6HL1bfZhSmZDgr69eWtyC"/>
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
