import { client } from "../../../../sanity/lib/client";
import Link from "next/link";
import OrgCardWithModal from "../../../../components/OrgCardWithModal";

export const revalidate = 0;

export const metadata = {
  title: "Struktur Pengurus Yayasan Hidayah - PAUD Hidayah",
  description: "Susunan pengurus dan struktur organisasi Yayasan Hidayah Tayu Wetan.",
};

// Fallback data langsung dari dokumen resmi SK Pengurus Yayasan Hidayah
const defaultYayasanMembers = [
  // Dewan Pembina
  { name: "Dr. Hj. Umi Hanik, S.Ag. M.Pd.", position: "Ketua Pembina", section: "Dewan Pembina", order: 1 },
  { name: "Drs. H. Muhammad Adib, M.Pd.", position: "Anggota Pembina", section: "Dewan Pembina", order: 2 },
  
  // Dewan Pengawas
  { name: "Nur Aini Fitriya Ardiani Aniqoh, MBA, CFP", position: "Ketua Pengawas", section: "Dewan Pengawas", order: 3 },
  { name: "Hj. Heni Muchasonah, S.Ag.", position: "Anggota Pengawas", section: "Dewan Pengawas", order: 4 },
  
  // Pengurus Harian
  { name: "Dra. Hj. Isitifaiyah, M.Pd.", position: "Ketua Umum", section: "Pengurus Harian", order: 5 },
  { name: "Drs. Ahmad Rondhi", position: "Wakil Ketua", section: "Pengurus Harian", order: 6 },
  { name: "Adhitya Iswandono", position: "Sekretaris Umum", section: "Pengurus Harian", order: 7 },
  { name: "Muhamad Irham Mashadi", position: "Wakil Sekretaris", section: "Pengurus Harian", order: 8 },
  { name: "Hj. Nur Laeli, S.Pd.", position: "Bendahara Umum", section: "Pengurus Harian", order: 9 },
  { name: "Hj. Fatmunafiatin, S.Pd.", position: "Wakil Bendahara", section: "Pengurus Harian", order: 10 },
  
  // SEKBID Litbang
  { name: "Afika Khoirun Nida, S.Pd.", position: "SEKBID Litbang", section: "Litbang", order: 11 },
  { name: "Sheila Choirul Istifa, S.Pd., MM.", position: "SEKBID Litbang", section: "Litbang", order: 12 },
  
  // SEKBID Pendidikan
  { name: "Heri Setyawan, M.Pd.", position: "SEKBID Pendidikan", section: "Pendidikan", order: 13 },
  { name: "Zaenal Arifin, S.Pd.", position: "SEKBID Pendidikan", section: "Pendidikan", order: 14 },
  
  // SEKBID Sarpras
  { name: "Khoirun Niam", position: "SEKBID Pengembangan Sarpras", section: "Pengembangan Sarpras", order: 15 },
  { name: "Ahmad Humam", position: "SEKBID Pengembangan Sarpras", section: "Pengembangan Sarpras", order: 16 },
  
  // SEKBID Usaha
  { name: "Hj. Mutmainah", position: "SEKBID Bidang Usaha", section: "Bidang Usaha", order: 17 },
  { name: "Suharni", position: "SEKBID Bidang Usaha", section: "Bidang Usaha", order: 18 },
  { name: "Rusprehati, S.Pd.", position: "SEKBID Bidang Usaha", section: "Bidang Usaha", order: 19 },
  
  // SEKBID Sosial
  { name: "Tri Mulyani", position: "SEKBID Bidang Sosial", section: "Bidang Sosial", order: 20 },
  { name: "Hj. Sumarni, S.Pd.", position: "SEKBID Bidang Sosial", section: "Bidang Sosial", order: 21 },
  { name: "Uswatun Hasanah", position: "SEKBID Bidang Sosial", section: "Bidang Sosial", order: 22 },
];

async function getYayasanOrgSettings() {
  try {
    const query = `*[_type == "orgPageSettings" && institution == "yayasan"][0]`;
    return await client.fetch(query, {}, { next: { revalidate: 0 } });
  } catch (error) {
    return null;
  }
}

async function getYayasanOrgData() {
  try {
    const query = `*[_type == "orgStructure" && institution == "yayasan"] | order(order asc)`;
    const data = await client.fetch(query, {}, { next: { revalidate: 0 } });
    if (data && data.length > 0) {
      return data;
    }
  } catch (error) {
    console.error("Error fetching yayasan org data:", error);
  }
  return defaultYayasanMembers;
}

export default async function StrukturYayasanPage() {
  const [members, settings] = await Promise.all([
    getYayasanOrgData(),
    getYayasanOrgSettings(),
  ]);

  const heroBadge = settings?.heroBadge || "STRUKTUR KEPENGURUSAN";
  const heroTitle = settings?.heroTitle || "Pengurus Yayasan Hidayah";
  const heroSubtitle = settings?.heroSubtitle || "Mengenal jajaran pembina, pengawas, dan pengurus harian yang mengemban amanah memajukan dakwah dan pendidikan di lingkungan Yayasan Hidayah.";
  const quoteIcon = settings?.quoteIcon || "mosque";
  const quoteText = settings?.quoteText || "Mengabdi dengan Ketulusan Hati demi Kemaslahatan Ummah.";
  const quoteSubtext = settings?.quoteSubtext || "Keluarga Besar Pengurus Yayasan Pendidikan Islam Hidayah Tayu";

  // Pengelompokan Tingkat Struktur
  const pembina = members.filter((m: any) => m.section === "Dewan Pembina" || m.order <= 2);
  const pengawas = members.filter((m: any) => m.section === "Dewan Pengawas" || (m.order >= 3 && m.order <= 4));
  const pengurusHarian = members.filter((m: any) => m.section === "Pengurus Harian" || (m.order >= 5 && m.order <= 10));
  
  // Sekbid Groups
  const sekbidLitbang = members.filter((m: any) => m.section === "Litbang" || (m.order >= 11 && m.order <= 12));
  const sekbidPendidikan = members.filter((m: any) => m.section === "Pendidikan" || (m.order >= 13 && m.order <= 14));
  const sekbidSarpras = members.filter((m: any) => m.section === "Pengembangan Sarpras" || (m.order >= 15 && m.order <= 16));
  const sekbidUsaha = members.filter((m: any) => m.section === "Bidang Usaha" || (m.order >= 17 && m.order <= 19));
  const sekbidSosial = members.filter((m: any) => m.section === "Bidang Sosial" || (m.order >= 20 && m.order <= 22));

  // Komponen Kartu Anggota dengan Popup Modal
  const MemberCard = ({ member, highlight = false }: { member: any; highlight?: boolean }) => {
    return <OrgCardWithModal org={member} highlight={highlight} />;
  };

  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen pb-24 overflow-hidden font-sans relative selection:bg-[#FCD116] selection:text-[#188B48]">
      
      {/* ================= BACKGROUND DECORATIVE ELEMENTS ================= */}
      {/* Subtle Dot Grid Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#188B48_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.035] pointer-events-none"></div>

      {/* Ambient Blurred Glow Blobs */}
      <div className="absolute top-[450px] right-0 w-[500px] h-[500px] bg-[#FCD116]/15 rounded-full blur-[120px] pointer-events-none translate-x-1/3"></div>
      <div className="absolute top-[1150px] left-0 w-[450px] h-[450px] bg-[#188B48]/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3"></div>
      <div className="absolute top-[1850px] right-10 w-[420px] h-[420px] bg-[#34D399]/15 rounded-full blur-[90px] pointer-events-none"></div>
      <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-[#FCD116]/10 rounded-full blur-[80px] pointer-events-none"></div>

      {/* Playful Floating Organic Accent Shapes */}
      <div className="absolute top-[520px] left-8 w-24 h-24 bg-[#FCD116]/20 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] pointer-events-none rotate-12 blur-[1px]"></div>
      <div className="absolute top-[850px] right-8 w-20 h-20 bg-[#188B48]/15 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] pointer-events-none -rotate-12 blur-[1px]"></div>
      <div className="absolute top-[1400px] left-12 w-16 h-16 bg-[#34D399]/20 rounded-full pointer-events-none"></div>
      <div className="absolute top-[2000px] left-1/4 w-20 h-20 bg-[#FCD116]/15 rounded-[50%_50%_40%_60%/40%_60%_50%_50%] pointer-events-none rotate-45"></div>

      {/* ================= FULL BLEED SOLID GREEN HERO ================= */}
      <section className="w-full bg-[#188B48] pt-28 pb-14 md:pt-32 md:pb-18 text-center relative overflow-hidden">
        {/* Soft Ambient Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FCD116]/15 rounded-full blur-[130px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-[#FCD116] border border-white/30 font-bold text-sm mb-6 backdrop-blur-sm">
            <span className="material-symbols-outlined text-[18px]">account_balance</span>
            <span>{heroBadge}</span>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-sm">
            {heroTitle}
          </h1>

          <p className="text-white max-w-2xl mx-auto text-base md:text-lg leading-relaxed opacity-95">
            {heroSubtitle}
          </p>
        </div>
      </section>

      {/* Wave Divider */}
      <div className="w-full overflow-hidden -mt-1 bg-[#FDFCF8] relative z-20 mb-12">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
          <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#188B48" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-4 relative z-10">
        
        {/* ================= 01. DEWAN PEMBINA & PENGAWAS ================= */}
        <div className="w-full mb-20">
          <div className="flex items-center gap-4 mb-10 pb-4 border-b border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-[#FCD116] text-[#1b1c1a] font-bold text-xl flex items-center justify-center shadow-sm">
              01
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#188B48]">
                Dewan Pembina &amp; Dewan Pengawas
              </h2>
              <p className="text-gray-600 text-sm">
                Unsur pengarah dan pengawas kebijakan strategis yayasan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Dewan Pembina Block */}
            <div className="bg-[#188B48]/5 rounded-3xl p-6 sm:p-8 border border-[#188B48]/10 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#188B48] text-white rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                Dewan Pembina
              </div>
              <div className="flex flex-wrap justify-center gap-6 w-full">
                {pembina.map((m: any, idx: number) => (
                  <MemberCard key={m._id || idx} member={m} highlight={true} />
                ))}
              </div>
            </div>

            {/* Dewan Pengawas Block */}
            <div className="bg-[#FCD116]/10 rounded-3xl p-6 sm:p-8 border border-[#FCD116]/30 flex flex-col items-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FCD116] text-[#1b1c1a] rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                <span className="material-symbols-outlined text-[16px]">policy</span>
                Dewan Pengawas
              </div>
              <div className="flex flex-wrap justify-center gap-6 w-full">
                {pengawas.map((m: any, idx: number) => (
                  <MemberCard key={m._id || idx} member={m} highlight={true} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= 02. PENGURUS HARIAN ================= */}
        <div className="w-full mb-20">
          <div className="flex items-center gap-4 mb-10 pb-4 border-b border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-[#188B48] text-white font-bold text-xl flex items-center justify-center shadow-sm">
              02
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#188B48]">
                Pengurus Harian Yayasan
              </h2>
              <p className="text-gray-600 text-sm">
                Pelaksana manajemen, kepemimpinan operasional, dan administrasi yayasan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-items-center">
            {pengurusHarian.map((m: any, idx: number) => (
              <MemberCard key={m._id || idx} member={m} highlight={idx < 2} />
            ))}
          </div>
        </div>

        {/* ================= 03. SEKSI BIDANG (SEKBID) ================= */}
        <div className="w-full mb-16">
          <div className="flex items-center gap-4 mb-10 pb-4 border-b border-gray-200">
            <div className="w-12 h-12 rounded-2xl bg-[#FCD116] text-[#1b1c1a] font-bold text-xl flex items-center justify-center shadow-sm">
              03
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#188B48]">
                Seksi Bidang (SEKBID)
              </h2>
              <p className="text-gray-600 text-sm">
                Bidang-bidang fungsional pelaksana program kerja dan pengembangan yayasan.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sekbid Litbang */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#188B48]/10 text-[#188B48] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">psychology</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#188B48] text-base">A. Litbang</h3>
                  <p className="text-xs text-gray-500">Penelitian &amp; Pengembangan</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {sekbidLitbang.map((m: any, idx: number) => (
                  <div key={m._id || idx} className="flex items-center gap-3 p-3 rounded-2xl bg-[#FDFCF8] border border-gray-100 hover:border-[#188B48]/30 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-[#188B48]/10 text-[#188B48] font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-[13px] text-[#1b1c1a] leading-tight">{m.name}</h5>
                      <span className="text-[11px] text-[#188B48] font-medium">{m.position}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sekbid Pendidikan */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#FCD116]/20 text-[#1b1c1a] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">school</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#188B48] text-base">B. Pendidikan</h3>
                  <p className="text-xs text-gray-500">Mutu Akademik &amp; Kurikulum</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {sekbidPendidikan.map((m: any, idx: number) => (
                  <div key={m._id || idx} className="flex items-center gap-3 p-3 rounded-2xl bg-[#FDFCF8] border border-gray-100 hover:border-[#188B48]/30 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-[#FCD116]/30 text-[#1b1c1a] font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-[13px] text-[#1b1c1a] leading-tight">{m.name}</h5>
                      <span className="text-[11px] text-[#188B48] font-medium">{m.position}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sekbid Sarpras */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#188B48]/10 text-[#188B48] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">construction</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#188B48] text-base">C. Pengembangan Sarpras</h3>
                  <p className="text-xs text-gray-500">Sarana &amp; Prasarana Lembaga</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {sekbidSarpras.map((m: any, idx: number) => (
                  <div key={m._id || idx} className="flex items-center gap-3 p-3 rounded-2xl bg-[#FDFCF8] border border-gray-100 hover:border-[#188B48]/30 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-[#188B48]/10 text-[#188B48] font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-[13px] text-[#1b1c1a] leading-tight">{m.name}</h5>
                      <span className="text-[11px] text-[#188B48] font-medium">{m.position}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sekbid Bidang Usaha */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#FCD116]/20 text-[#1b1c1a] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">storefront</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#188B48] text-base">D. Bidang Usaha</h3>
                  <p className="text-xs text-gray-500">Kemandirian Finansial &amp; Unit Usaha</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {sekbidUsaha.map((m: any, idx: number) => (
                  <div key={m._id || idx} className="flex items-center gap-3 p-3 rounded-2xl bg-[#FDFCF8] border border-gray-100 hover:border-[#188B48]/30 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-[#FCD116]/30 text-[#1b1c1a] font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-[13px] text-[#1b1c1a] leading-tight">{m.name}</h5>
                      <span className="text-[11px] text-[#188B48] font-medium">{m.position}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sekbid Bidang Sosial */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex flex-col md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-xl bg-[#188B48]/10 text-[#188B48] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[22px]">diversity_1</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#188B48] text-base">E. Bidang Sosial</h3>
                  <p className="text-xs text-gray-500">Pengabdian Masyarakat &amp; Kesejahteraan</p>
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {sekbidSosial.map((m: any, idx: number) => (
                  <div key={m._id || idx} className="flex items-center gap-3 p-3 rounded-2xl bg-[#FDFCF8] border border-gray-100 hover:border-[#188B48]/30 transition-colors">
                    <div className="w-9 h-9 rounded-full bg-[#188B48]/10 text-[#188B48] font-bold text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="font-bold text-[13px] text-[#1b1c1a] leading-tight">{m.name}</h5>
                      <span className="text-[11px] text-[#188B48] font-medium">{m.position}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ================= BINGKAI HIJAU (Slogan Dinamis) ================= */}
        <div className="w-full mb-12 p-8 md:p-10 bg-gradient-to-r from-[#188B48] to-[#126B36] rounded-3xl text-center text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <span className="material-symbols-outlined text-4xl text-[#FCD116] mb-3">{quoteIcon}</span>
            <p className="text-xl md:text-2xl font-bold italic tracking-wide">
              &ldquo;{quoteText}&rdquo;
            </p>
            {quoteSubtext && (
              <p className="text-sm text-green-100 mt-2 font-medium">{quoteSubtext}</p>
            )}
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-10 border-t border-gray-200">
          <Link
            href="/struktur-organisasi/paud"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#188B48] font-bold border border-[#188B48]/30 hover:bg-[#EAF3EF] transition-all shadow-sm"
          >
            <span>Lihat Struktur PAUD Hidayah</span>
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#188B48] text-white font-bold hover:bg-[#188B48]/90 transition-all shadow-md"
          >
            <span className="material-symbols-outlined text-[18px]">home</span>
            <span>Kembali ke Beranda</span>
          </Link>
        </div>

      </div>
    </main>
  );
}
