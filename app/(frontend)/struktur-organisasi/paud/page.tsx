import { client } from "../../../../sanity/lib/client";
import { urlFor } from "../../../../sanity/lib/image";

export const revalidate = 0;

// Fetch data from Sanity
async function getOrgData() {
  const orgQuery = `*[_type == "orgStructure"] | order(order asc)`;
  const orgs = await client.fetch(orgQuery);
  return orgs;
}

export default async function StrukturOrganisasi() {
  const orgs = await getOrgData();

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

  // Komponen Card (Sesuai Mockup)
  const OrgCard = ({ org }: { org: any }) => {
    if (!org) return null;
    return (
      <div className="bg-white rounded-[24px] p-6 shadow-[0_4px_20px_rgba(0,64,40,0.04)] border border-[#188B48]/10 flex flex-col items-center w-[240px] relative z-10 transition-transform hover:-translate-y-1 duration-300">
        <div className="w-[72px] h-[72px] rounded-full bg-[#EAF3EF] mb-3 overflow-hidden border-2 border-white shadow-sm flex items-center justify-center shrink-0">
          {org.image ? (
            <img 
              src={urlFor(org.image).width(144).height(144).format('webp').url()} 
              alt={org.name} 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          ) : (
            <span className="material-symbols-outlined text-[#188B48]/30 text-[32px]">person</span>
          )}
        </div>
        <h4 className="font-bold text-[14px] text-[#188B48] text-center leading-tight mb-1">
          {org.name}
        </h4>
        <p className="text-[12px] text-[#1b1c1a] font-medium text-center">
          {org.position}
        </p>
      </div>
    );
  };

  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen pb-24 overflow-hidden font-sans">
      
      {/* ================= HERO SECTION (Sesuai Mockup) ================= */}
      <section className="w-full pt-36 pb-20 relative">
        {/* Background Blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#FCD116]/40 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#34D399]/20 rounded-full blur-[100px] translate-x-1/3"></div>
        <div className="absolute -top-10 left-10 w-24 h-24 bg-[#FCD34D] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] opacity-60"></div>
        <div className="absolute top-40 right-10 w-16 h-16 bg-[#188B48] rounded-[30%_70%_70%_30%/30%_30%_70%_70%] opacity-20"></div>

        <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Text Content */}
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-bold text-[#188B48] tracking-widest uppercase">
                Tentang Kami
              </span>
              <span className="material-symbols-outlined text-[#188B48] text-[18px]">verified</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#188B48] leading-[1.15] tracking-tight">
              Bersama Membentuk<br/>
              Generasi Berkarakter
            </h1>
            
            <p className="text-[16px] text-gray-600 max-w-md leading-relaxed mt-2">
              Mengenal para pengurus dan pendidik yang menjadi bagian dari perjalanan pendidikan di PAUD Hidayah.
            </p>

            {/* Decorative Dots */}
            <div className="flex gap-2 mt-4">
              <div className="w-3 h-3 rounded-full bg-[#188B48]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FCD34D]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FCD34D]"></div>
            </div>
          </div>
          
          {/* Image Content (Blob Shape Mask) */}
          <div className="relative flex justify-center lg:justify-end">
             {/* Yellow accent blob behind */}
             <div className="absolute top-6 -left-6 w-full max-w-[450px] aspect-[4/3] bg-[#FCD116] rounded-[30%_70%_50%_50%/50%_40%_60%_50%] -z-10"></div>
             
             {/* Main Image Mask */}
             <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] overflow-hidden shadow-2xl border-[6px] border-white">
               <img 
                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuAby3nFVP69Hg7rEX10Yk5-k6Tz0GQzeBFUa14K1pSDSF8nNIvoP1fjxQJGWxwtn8wtr4yRXatuZQKcaRcXADEsghjM6LEZcjIDvL93KDkcNI53sZEc3Hef1xEACff-zb5cm8wqxNOoek0KFTrzWCR8w61T8nytr8JAv2PvdFcgSVAEOn9JPGPtFtFnbWh96CbZOcW3OVLLGtoFv2fapAjMluxeAVerAG2z4MOAw9o5Dcnb-B0Cmnwv" 
                 alt="Guru dan Anak-anak" 
                 className="w-full h-full object-cover"
               />
             </div>
          </div>
        </div>
      </section>


      <div className="max-w-[1200px] mx-auto px-6 pt-16">
        
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
                <div className="flex flex-wrap justify-center gap-8 w-full">
                  {yayasanLengkap.map((org: any) => (
                    <div key={org._id} className="flex flex-col items-center">
                      <OrgCard org={org} />
                      <div className="w-[2px] h-8 bg-[#188B48]/40"></div>
                    </div>
                  ))}
                </div>
                {/* Horizontal line merging Row 1 to Row 2 */}
                <div className="w-full relative flex justify-center h-[2px] bg-transparent">
                   <div className="absolute top-0 h-full bg-[#188B48]/40" style={{ width: 'calc(100% - 240px)', maxWidth: (yayasanLengkap.length - 1) * 272 + 'px' }}></div>
                   <div className="w-[2px] h-8 bg-[#188B48]/40 absolute top-0 left-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            )}

            {/* ROW 2: Kepala Sekolah */}
            {kepala.length > 0 && (
              <div className="flex flex-col items-center w-full mt-2">
                <OrgCard org={kepala[0]} />
                {staf.length > 0 && (
                  <div className="flex flex-col items-center w-full mt-0">
                    <div className="w-[2px] h-8 bg-[#188B48]/40"></div>
                    {/* Horizontal line diverging to Row 3 */}
                    <div className="w-full relative flex justify-center h-[2px] bg-transparent">
                      <div className="absolute top-0 h-full bg-[#188B48]/40" style={{ width: 'calc(100% - 240px)', maxWidth: (staf.length - 1) * 272 + 'px' }}></div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ROW 3: Staf */}
            {staf.length > 0 && (
              <div className="flex justify-center flex-wrap gap-8 w-full relative">
                {staf.map((org: any) => (
                  <div key={org._id} className="flex flex-col items-center">
                    <div className="w-[2px] h-8 bg-[#188B48]/40"></div>
                    <OrgCard org={org} />
                  </div>
                ))}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full justify-items-center">
              {dewanAsatidz.map((org: any) => (
                <OrgCard key={org._id} org={org} />
              ))}
            </div>

          </div>
        )}

      </div>
    </main>
  );
}
