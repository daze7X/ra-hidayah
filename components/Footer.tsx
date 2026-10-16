import Link from "next/link";
import { client } from "../sanity/lib/client";

async function getSettings() {
  const query = `*[_type == "siteSettings"][0]`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export default async function Footer() {
  const settings = await getSettings();
  
  return (
    <footer id="kontak" className="w-full bg-surface-container-low mt-space-xl border-t border-outline-variant/30">
      <div className="max-w-[1200px] mx-auto px-6 py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white p-1.5 shadow-sm border border-[#188B48]/10 flex items-center justify-center shrink-0">
                <img src="/logo-paud.png" alt="Logo PAUD Hidayah" className="w-full h-full object-contain" />
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary leading-tight">{settings?.schoolName || "PAUD Hidayah"}</h4>
                <p className="font-label-sm text-label-sm text-secondary">{settings?.foundationName || "Yayasan Hidayah"}</p>
              </div>
            </div>
            <p className="font-bold text-[13px] text-primary">Membentuk Generasi yang Berkarakter Islami, Cerdas, Ceria, dan Mandiri.</p>
            <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">Mendampingi tumbuh kembang ananda melalui pembiasaan akhlak mulia, pembelajaran yang menyenangkan, serta pengalaman bermain yang bermakna dalam lingkungan yang aman, nyaman, dan mendukung potensi setiap anak.</p>
            <div className="inline-flex items-center gap-2 mt-1 px-3 py-1.5 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm w-fit border border-[#188B48]/10 shadow-sm">
              <span className="material-symbols-outlined text-[16px] text-secondary">workspace_premium</span>
              <span className="font-bold">{settings?.accreditation || "Terakreditasi A BAN-PDM"}</span>
            </div>
          </div>

          <div>
            <h5 className="font-label-lg text-label-lg text-on-surface font-bold mb-4">Profil &amp; Yayasan</h5>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
              <li><Link href="/profil/paud" className="text-on-surface-variant hover:text-primary transition-colors">Profil PAUD Hidayah</Link></li>
              <li><Link href="/profil/paud#visi-misi" className="text-on-surface-variant hover:text-primary transition-colors">Visi, Misi &amp; Tujuan</Link></li>
              <li><Link href="/struktur-organisasi/paud" className="text-on-surface-variant hover:text-primary transition-colors">Tenaga Pendidik &amp; Kependidikan</Link></li>
              <li><Link href="/profil/yayasan" className="text-on-surface-variant hover:text-primary transition-colors">Yayasan Hidayah</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-label-lg text-label-lg text-on-surface font-bold mb-4">Program Pembelajaran</h5>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
              <li><Link href="/program/toddler" className="text-on-surface-variant hover:text-primary transition-colors">Toddler (Usia 1,5–3 Thn)</Link></li>
              <li><Link href="/program/kb" className="text-on-surface-variant hover:text-primary transition-colors">Kelompok Bermain (Usia 3–4 Thn)</Link></li>
              <li><Link href="/program/ra-a" className="text-on-surface-variant hover:text-primary transition-colors">RA A (Usia 4–5 Thn)</Link></li>
              <li><Link href="/program/ra-b" className="text-on-surface-variant hover:text-primary transition-colors">RA B (Usia 5–6 Thn)</Link></li>
              <li><Link href="/program/tahfidz" className="text-on-surface-variant hover:text-primary transition-colors">Tahfidz Al-Qur'an</Link></li>
              <li><Link href="/program/tpq" className="text-on-surface-variant hover:text-primary transition-colors">TPQ PAUD (Metode Qiro'ati)</Link></li>
              <li><Link href="/program/ekstrakurikuler" className="text-on-surface-variant hover:text-primary transition-colors">Ekstrakurikuler</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-label-lg text-label-lg text-on-surface font-bold mb-4">Kontak &amp; Layanan</h5>
            <div className="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">location_on</span>
                <span>{settings?.address || "Ds. Tayu Wetan, RT.06 RW.01 Kec. Tayu, Kab. Pati, Jawa Tengah"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">call</span>
                <span>{settings?.phone || "0851 8740 9266"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">mail</span>
                <span>{settings?.email || "paudhidayahtayuwetan@gmail.com"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">school</span>
                <span className="font-semibold">NPSN: {settings?.npsn || "69884826"} | NSM: {settings?.nsm || "101233180135"}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-space-lg pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
          <p>© {new Date().getFullYear()} {settings?.schoolName || "PAUD Hidayah Tayu"}. Hak Cipta Dilindungi • Membentuk Generasi yang Berkarakter Islami, Cerdas, Ceria &amp; Mandiri.</p>
          <div className="flex items-center gap-6 font-label-sm text-label-sm">
            <span className="hover:text-primary transition-colors cursor-pointer">Kebijakan Privasi</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Panduan Orang Tua</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Portal SPMB</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
