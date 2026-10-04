import Link from "next/link";
import Image from "next/image";

export default function NewsSection() {
  return (
    <section className="w-full py-space-xl bg-surface">
<div className="max-w-[1200px] mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-12">
<span className="font-label-sm text-label-sm font-bold text-secondary uppercase tracking-widest px-3 py-1 rounded-full bg-secondary-fixed/30 inline-block mb-3">Kata Ayah &amp; Bunda</span>
<h2 className="font-headline-lg text-headline-lg text-primary">Dipercaya Oleh Ratusan Keluarga Muslim</h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2">Kebahagiaan dan ketenangan hati orang tua melihat sang buah hati tumbuh santun dan cerdas.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Testi 1 */}
<div className="bg-surface-container-low rounded-3xl p-8 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-secondary mb-4">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic mb-6">
              "Alhamdulillah, sejak sekolah di RA Hidayah, hafalan surat Al-Fatihah dan adab makan anak saya Farhan jadi sangat rapi. Selalu ingat berdoa sebelum dan sesudah beraktivitas tanpa disuruh lagi."
            </p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-surface-container-high">
<div className="w-12 h-12 rounded-full overflow-hidden bg-primary-fixed">
<img className="w-full h-full object-cover" data-alt="Potret wajah ramah Bunda Rina tersenyum santun dengan hijab warna pastel, wali murid dari siswa TK B di RA Hidayah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcIZSgRPwLzV6lNtTUrpCTsjeIEfyyPQLoo9JzHqlFrWLk-XbEy-ev2av6ZoHwy7UMlpwn1YqQmXUCA93ZwBZfghF-UlVnc_JQwjh0fNoEyN7eha5XdHOG6OtrDUHw__fGUEqiIaBV3Xsd-PT0WXTczbz3Kh3-H4fi5-HKB2G5ni5j42cq-pj1Y_tjDexC_TRSQqWxH9BSo8aDJ0MoYVrwABUHcTrTiHtJxjZ7iUAnGf2gY6e16JO4"/>
</div>
<div>
<h5 className="font-label-lg text-label-lg font-bold text-primary">Bunda Rina Wardhani</h5>
<p className="font-body-sm text-[12px] text-on-surface-variant">Ibunda dari Farhan (Siswa TK B)</p>
</div>
</div>
</div>
{/* Testi 2 */}
<div className="bg-surface-container-low rounded-3xl p-8 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-secondary mb-4">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic mb-6">
              "Para ustadzah di RA Hidayah sangat sabar dan keibuan. Aisyah dulu sangat pemalu, sekarang aktif bercerita tentang sirah nabi dan berani tampil di pentas seni. Kami sangat bersyukur!"
            </p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-surface-container-high">
<div className="w-12 h-12 rounded-full overflow-hidden bg-secondary-fixed">
<img className="w-full h-full object-cover" data-alt="Potret wajah Ayah Dimas tersenyum berkacamata rapi dan hangat, wali murid siswa TK A di RA Hidayah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUzncmP6paJZu5Wghe2TqKL3pDypnHC_BoLJ7XAvnu0_h8foEbVHAzLSa6IFOY8dukGy-jra62fEzzqEcIi2ckbSuKpMVwbwICR9guQXAD-TGycdbWaPPoTgXzFulKbEv3U9OY2FwnEjsNk_c347QexHvSfj5tzIgjHIOqapsFO2uxoKEUXzVuWPB1L4yDH_7Nsm3hPPboynO8b2awpOX1lc-6ewT6IKuxftFuShBhNR3TAGJvJXq2"/>
</div>
<div>
<h5 className="font-label-lg text-label-lg font-bold text-primary">Ayah Dimas Pratama, S.T.</h5>
<p className="font-body-sm text-[12px] text-on-surface-variant">Ayahanda dari Aisyah (Siswi TK A)</p>
</div>
</div>
</div>
{/* Testi 3 */}
<div className="bg-surface-container-low rounded-3xl p-8 shadow-sm flex flex-col justify-between">
<div>
<div className="flex items-center gap-1 text-secondary mb-4">
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
<span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic mb-6">
              "Fasilitas kebun mini dan arena bermain pasirnya sangat bersih dan aman. Program parenting untuk orang tua juga sangat bermanfaat menyelaraskan pola asuh di rumah dan sekolah."
            </p>
</div>
<div className="flex items-center gap-3 pt-4 border-t border-surface-container-high">
<div className="w-12 h-12 rounded-full overflow-hidden bg-primary-fixed">
<img className="w-full h-full object-cover" data-alt="Potret wajah Ibu dr. Nabila tersenyum bersahabat dengan kerudung hijau lembut, wali murid Kelompok Bermain RA Hidayah." src="https://lh3.googleusercontent.com/aida-public/AB6AXuALoKQSx2MEpadtar8ArhavApitIuNGkCCbZQH408gzruB3EMi1VfFxFJi4MfKmmnVgZkEy7C28QmKx0C5Tu9oI0ixrVWxFb54GPx43noOL8RHI-VUZcr-2jQ0O4ORjubDFBiHHyEYZqCR6SZhVBC_5cmzUQeOnTgHMq9JSRT2MNyJOCufV7Xts1_f8eG2tPFsbphHiv8Pr_x8yMPMQ_F8CcKZZmOUWzWQ4yxKdLdaxrPms09Jdu2An"/>
</div>
<div>
<h5 className="font-label-lg text-label-lg font-bold text-primary">dr. Nabila Hapsari</h5>
<p className="font-body-sm text-[12px] text-on-surface-variant">Ibunda dari Rayyan (Playgroup)</p>
</div>
</div>
</div>
</div>
</div>
</section>
  );
}
