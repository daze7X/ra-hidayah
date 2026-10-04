import Link from "next/link";
import { client } from "../sanity/lib/client";

async function getSettings() {
  const query = `*[_type == "siteSettings"][0]`;
  return await client.fetch(query);
}

export default async function Footer() {
  const settings = await getSettings();
  
  return (
    <footer id="kontak" className="w-full bg-surface-container-low mt-space-xl border-t border-outline-variant/30">
      <div className="max-w-[1200px] mx-auto px-6 py-space-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary-container text-[22px]">local_florist</span>
              </div>
              <div>
                <h4 className="font-headline-sm text-headline-sm text-primary leading-tight">{settings?.schoolName || "PAUD Hidayah"}</h4>
                <p className="font-label-sm text-label-sm text-secondary">{settings?.foundationName || " Mandiri"}</p>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">Membina tunas bangsa dengan pendidikan berakhlak Qurani, ceria, mandiri, dan berwawasan global dalam lingkungan yang asri serta aman bagi ananda.</p>
            <div className="inline-flex items-center gap-2 mt-1 px-3 py-1.5 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm w-fit">
              <span className="material-symbols-outlined text-[16px] text-secondary">workspace_premium</span>
              <span>{settings?.accreditation || "Terakreditasi A (Unggul) BAN-PDM"}</span>
            </div>
          </div>

          <div>
            <h5 className="font-label-lg text-label-lg text-on-surface font-bold mb-4">Profil &amp; Yayasan</h5>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
              <li><Link href="/profil-tk" className="text-on-surface-variant hover:text-primary transition-colors">Profil TK Islam</Link></li>
              <li><Link href="#" className="text-on-surface-variant hover:text-primary transition-colors">{settings?.foundationName || ""}</Link></li>
              <li><Link href="/profil-tk" className="text-on-surface-variant hover:text-primary transition-colors">Visi, Misi &amp; Nilai Dasar</Link></li>
              <li><Link href="/struktur-organisasi" className="text-on-surface-variant hover:text-primary transition-colors">Tenaga Pengajar &amp; Ustadzah</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="font-label-lg text-label-lg text-on-surface font-bold mb-4">Program Pembelajaran</h5>
            <ul className="flex flex-col gap-2 font-body-sm text-body-sm">
              <li className="text-on-surface-variant">Kelompok Bermain (Usia 3-4 Thn)</li>
              <li className="text-on-surface-variant">TK A (Usia 4-5 Thn)</li>
              <li className="text-on-surface-variant">TK B (Usia 5-6 Thn)</li>
              <li className="text-on-surface-variant">Tahfidz Cilik Juz 30 &amp; Hadist</li>
              <li className="text-on-surface-variant">Sentra Seni, Bahasa &amp; Sains</li>
            </ul>
          </div>

          <div>
            <h5 className="font-label-lg text-label-lg text-on-surface font-bold mb-4">Kontak &amp; Layanan</h5>
            <div className="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface-variant">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0 mt-0.5">location_on</span>
                <span>{settings?.address || "Jl. Masjid Hidayah No. 12, Kompleks Pendidikan Islam Ceria, Jakarta"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">call</span>
                <span>{settings?.phone || "(021) 8765-4321 / 0812-3456-7890"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-primary text-[20px] shrink-0">mail</span>
                <span>{settings?.email || "info@rahidayah.sch.id"}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-secondary text-[20px] shrink-0">school</span>
                <span>NPSN: {settings?.npsn || "-"} {settings?.nsm && `| NSM: ${settings.nsm}`}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-space-lg pt-6 border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
          <p>© {new Date().getFullYear()} {settings?.schoolName || "PAUD Hidayah"}. Hak Cipta Dilindungi • Membina Generasi Qurani &amp; Cerdas.</p>
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
