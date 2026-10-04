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
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Suasana anak-anak TK laki-laki dan perempuan RA Hidayah sedang berjejer rapi melaksanakan sholat Dhuha berjamaah di musholla mini sekolah beralaskan sajadah hijau asri dengan pancaran sinar matahari pagi yang teduh." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn6693uM3gsNdWqCLneCgBVZoJcocQeTLE08GeRLRo7xMQoDwWXSRKN4UDJ8XSeEYRrkSW5Id1qTAAGxpKiyXtOt94nYml8i5TNO-pi0p4u_xq-f05ea-8YqYJFQtgljesPtao4cucCa-K-sT_Kgoh60tvPVLvPUaPo8wBQodwgKDW0GvlFLH9cFSGgG9Etn0AWqIsQZvvy3SkHpIEoM4eAM5Ciyv3sXPnRXFK1WN7jKzr3ECAbaMS"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-90 flex flex-col justify-end p-6 text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-fixed font-bold uppercase tracking-wider">Ibadah Harian</span>
<h4 className="font-headline-sm text-headline-sm">Sholat Dhuha &amp; Muroja'ah Berjamaah</h4>
<p className="font-body-sm text-body-sm text-surface-variant">Menyapa pagi dengan dzikir dan doa keberkahan.</p>
</div>
</div>
{/* Photo 2: Mini Gardening */}
<div className="relative overflow-hidden rounded-3xl group shadow-sm">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Dua anak TK tersenyum ceria memakai topi jerami mini sedang menyiram tanaman bayam dan stroberi di kebun edukasi outdoor sekolah RA Hidayah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuABga1lyJkosTPRB1io-inGWW86u9dRPHhR8_RwSCSNwujZ_VmU55l6RtWGZukUPAuQSYtQVV1hagbXfEbfWJdObwbdqkE3x30Ns9RxrVr5rqNPnzl3i8d8f101t-JJvNR_Dbncsf2OsvhTXTj9-r0tWV08_zza_y3KiM0GE_35tahFJeW6Le-3uPiAsFUeq6HLRzu22RseczBi_GYtf7j4fTnqRb2eS-4TA2wtZAQfSKFybPl8xmUD"/>
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
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Pentas seni ceria anak TK RA Hidayah menampilkan pertunjukan qasidah rebana anak cilik di panggung bernuansa hijau ceria dengan tawa bangga orang tua yang menonton." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8UM6lGaHQdOJ54zYZADwhAmEpf9FBWdr3ezB0QoBz8YWFu7J6oY0I9lIBC1c8wXvvztsIy5X0Mnna7BO0DMmChXj_emQXrc1mnCO23LnQf5RTIz-9nYF0Os0YJqsebo87udduOXQh780GjymLe_7ZDywBDo15ujlwfwwPufAEHWC6YpVGGsdmvCPgOyIreahK8TfX7atfOSymShJlGf-9ZSDp8ftPhOkG8ZskTUBnyiuqtZxpd1rZ"/>
<div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent opacity-80 flex flex-col justify-end p-4 text-on-primary">
<span className="font-label-sm text-label-sm text-secondary-fixed font-semibold">Unjuk Bakat</span>
<h5 className="font-label-lg text-label-lg font-bold">Pentas Kreativitas &amp; Qasidah Rebana Cilik</h5>
</div>
</div>
</div>
</div>
</section>
  );
}
