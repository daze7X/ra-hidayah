import { client } from "../../../../sanity/lib/client";
import { urlFor } from "../../../../sanity/lib/image";
import OrgCardWithModal from "../../../../components/OrgCardWithModal";

export const revalidate = 0;

// Fetch data from Sanity
async function getOrgData() {
  const orgQuery = `*[_type == "orgStructure" && (institution == "paud" || !defined(institution))] | order(order asc)`;
  const orgs = await client.fetch(orgQuery, {}, { next: { revalidate: 0 } });
  return orgs;
}

async function getOrgSettings() {
  const query = `*[_type == "orgPageSettings" && institution == "paud"][0]`;
  try {
    return await client.fetch(query, {}, { next: { revalidate: 0 } });
  } catch (err) {
    return null;
  }
}

export default async function StrukturOrganisasi() {
  const [orgs, settings] = await Promise.all([
    getOrgData(),
    getOrgSettings(),
  ]);

  const heroBadge = settings?.heroBadge || "Tentang Kami";
  const heroMotto = settings?.heroMotto || "Mendidik dengan Cinta, Melayani dengan Sepenuh Hati";
  const heroTitle = settings?.heroTitle || "Bersama Membentuk Generasi Berkarakter";
  const heroSubtitle = settings?.heroSubtitle || "Mengenal para pengurus dan pendidik yang menjadi bagian dari perjalanan pendidikan di PAUD Hidayah.";
  const heroImage = settings?.heroImage 
    ? urlFor(settings.heroImage).width(900).height(675).format('webp').url()
    : "/kegiatan/kegiatan-dewan-guru.webp";

  const quoteIcon = settings?.quoteIcon || "favorite";
  const quoteText = settings?.quoteText || "Mendidik dengan Cinta, Melayani dengan Sepenuh Hati.";
  const quoteSubtext = settings?.quoteSubtext || "Keluarga Besar Pendidik & Tenaga Kependidikan PAUD Hidayah Tayu";

  if (!orgs || orgs.length === 0) {
    return (
      <main className="w-full pt-32 pb-20 bg-[#FDFCF8] min-h-screen text-center">
        <h1 className="text-2xl font-bold text-[#188B48]">Data Struktur Organisasi belum tersedia.</h1>
      </main>
    );
  }

  // Pengelompokan struktur
  const yayasanLengkap = orgs.filter((o: any) => o.order === 2);
  const kepala = orgs.filter((o: any) => o.order === 1);
  const staf = orgs.filter((o: any) => o.order > 2 && o.order < 6);
  const dewanAsatidz = orgs.filter((o: any) => o.order >= 6);

  // Komponen Card dengan Popup Modal
  const OrgCard = ({ org, highlight = false }: { org: any; highlight?: boolean }) => {
    return <OrgCardWithModal org={org} highlight={highlight} />;
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

      {/* ================= HERO SECTION (Solid Green Theme Dinamis dari Sanity) ================= */}
      <section className="w-full bg-[#188B48] pt-28 pb-14 md:pt-32 md:pb-18 relative overflow-hidden text-white">
        {/* Soft Hero Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FCD116]/15 rounded-full blur-[120px] pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] pointer-events-none -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Text Content */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white/20 text-[#FCD116] border border-white/30 font-bold tracking-widest uppercase text-xs sm:text-sm rounded-full shadow-sm backdrop-blur-sm">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                {heroBadge}
              </span>
              {heroMotto && (
                <span className="inline-block px-3 py-1 bg-white/15 text-white/95 text-xs font-semibold rounded-full italic border border-white/20 backdrop-blur-sm">
                  &ldquo;{heroMotto}&rdquo;
                </span>
              )}
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight drop-shadow-sm">
              {heroTitle}
            </h1>
            
            <p className="text-[16px] text-white/90 max-w-lg leading-relaxed mt-2">
              {heroSubtitle}
            </p>

            {/* Decorative Dots */}
            <div className="flex gap-2 mt-4">
              <div className="w-3 h-3 rounded-full bg-[#FCD116]"></div>
              <div className="w-3 h-3 rounded-full bg-white/80"></div>
              <div className="w-3 h-3 rounded-full bg-white/40"></div>
            </div>
          </div>
          
          {/* Image Content (Blob Shape Mask) */}
          <div className="relative flex justify-center lg:justify-end">
             {/* Yellow accent blob behind */}
             <div className="absolute top-4 sm:p-6 -left-6 w-full max-w-[450px] aspect-[4/3] bg-[#FCD116] rounded-[30%_70%_50%_50%/50%_40%_60%_50%] -z-10 shadow-lg"></div>
             
             {/* Main Image Mask */}
             <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden shadow-2xl border-[6px] border-white bg-white">
               <img 
                 src={heroImage} 
                 alt={heroTitle} 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
             </div>
          </div>
        </div>
      </section>

      {/* Wave Divider to #FDFCF8 below */}
      <div className="w-full overflow-hidden -mt-1 bg-[#FDFCF8] relative z-20">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
          <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#188B48" />
        </svg>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pt-12 relative z-10">
        
        {/* ================= 01. STRUKTUR KEPENGURUSAN ================= */}
        <div className="w-full mb-24">
          
          {/* Section Header */}
          <div className="flex items-start justify-between w-full mb-16">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 shrink-0 bg-[#FCD116] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md">
                01
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#188B48] mb-1">
                  Struktur Kepengurusan
                </h2>
                <p className="text-gray-500 text-[14px]">
                  Pihak-pihak yang menjalankan dan mendukung pengelolaan PAUD Hidayah.
                </p>
              </div>
            </div>
            <div className="hidden md:flex text-[#188B48]">
               <span className="material-symbols-outlined text-[40px]">eco</span>
            </div>
          </div>

          {/* Tree Structure */}
          <div className="flex flex-col items-center w-full relative">
            
            {/* ROW 1: Yayasan */}
            {yayasanLengkap.length > 0 && (
              <div className="flex flex-col items-center w-full">
                {yayasanLengkap.length === 1 ? (
                  <div className="flex flex-col items-center">
                    <OrgCard org={yayasanLengkap[0]} />
                    <div className="w-[2px] h-10 bg-[#188B48]/40"></div>
                  </div>
                ) : (
                  <>
                    <div className="flex flex-wrap justify-center gap-8 w-full">
                      {yayasanLengkap.map((org: any) => (
                        <div key={org._id} className="flex flex-col items-center">
                          <OrgCard org={org} />
                          <div className="w-[2px] h-8 bg-[#188B48]/40"></div>
                        </div>
                      ))}
                    </div>
                    {/* Horizontal line merging Row 1 to Row 2 */}
                    <div className="w-full flex justify-center relative">
                      <div 
                        className="h-[2px] bg-[#188B48]/40" 
                        style={{ width: `${(yayasanLengkap.length - 1) * 280}px`, maxWidth: '90%' }}
                      ></div>
                    </div>
                    <div className="w-[2px] h-8 bg-[#188B48]/40"></div>
                  </>
                )}
              </div>
            )}

            {/* ROW 2: Kepala Sekolah & Staf */}
            {kepala.length > 0 && (
              <div className="flex flex-col items-center w-full mt-2">
                <OrgCard org={kepala[0]} highlight={true} />
                
                {staf.length === 1 ? (
                  <div className="flex flex-col items-center w-full">
                    {/* Satu garis vertikal mulus tanpa terputus */}
                    <div className="w-[2px] h-12 bg-[#188B48]/40"></div>
                    <OrgCard org={staf[0]} />
                  </div>
                ) : staf.length > 1 ? (
                  <div className="flex flex-col items-center w-full">
                    <div className="w-[2px] h-8 bg-[#188B48]/40"></div>
                    {/* Horizontal line diverging to Row 3 */}
                    <div className="w-full flex justify-center relative">
                      <div 
                        className="h-[2px] bg-[#188B48]/40" 
                        style={{ width: `${(staf.length - 1) * 280}px`, maxWidth: '90%' }}
                      ></div>
                    </div>
                    <div className="flex justify-center flex-wrap gap-8 w-full relative">
                      {staf.map((org: any) => (
                        <div key={org._id} className="flex flex-col items-center">
                          <div className="w-[2px] h-8 bg-[#188B48]/40"></div>
                          <OrgCard org={org} />
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            )}
            
          </div>
        </div>


        {/* ================= 02. DEWAN ASATIDZ ================= */}
        {dewanAsatidz.length > 0 && (
          <div className="w-full mb-16">
            
            {/* Section Header */}
            <div className="flex items-start justify-between w-full mb-12">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 shrink-0 bg-[#FCD116] rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-md">
                  02
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#188B48] mb-1">
                    Dewan Asatidz & Guru Pendamping
                  </h2>
                  <p className="text-gray-500 text-[14px]">
                    Para pendidik dan tenaga pendukung yang mendampingi proses belajar anak.
                  </p>
                </div>
              </div>
              <div className="hidden md:flex text-[#188B48]">
                <span className="material-symbols-outlined text-[40px]">eco</span>
              </div>
            </div>

            {/* Grid 4 Kolom */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-4 sm:p-6 w-full justify-items-center">
              {dewanAsatidz.map((org: any) => (
                <OrgCard key={org._id} org={org} />
              ))}
            </div>

          </div>
        )}

        {/* ================= BINGKAI HIJAU (Slogan Dinamis) ================= */}
        <div className="w-full mt-12 md:mt-16 p-8 md:p-10 bg-gradient-to-r from-[#188B48] to-[#126B36] rounded-3xl text-center text-white shadow-xl relative overflow-hidden">
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

      </div>
    </main>
  );
}
