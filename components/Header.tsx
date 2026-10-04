import Link from "next/link";
import { client } from "../sanity/lib/client";

async function getSettings() {
  const query = `*[_type == "siteSettings"][0]`;
  return await client.fetch(query);
}

export default async function Header() {
  const settings = await getSettings();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#188B48]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
      {/* Main Navbar */}
      <div className="h-20 max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3.5 hover:opacity-90 transition-opacity">
          <div className="bg-white p-1 rounded-full shadow-sm">
            <img alt={`Logo \${settings?.schoolName || 'PAUD Hidayah'}`} className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPV_vbEUjB6A5Zt81MX_xoP75aiW0Z-dHYZ0I4Ds9ja_KJt7dHNleWhb0nMGQjRzxqqT8-feNuibyIQ1AnF2FT8SV3rfVTjlkr1H0ZSJdRtvwZMT4x04b65JM2cWv-Rr1g28aECOH_NcL0DgBx7X6ph__qprV5845K7yU7nIt4urwGIGs9LhPFC_inbNKbqv_em7S4qhB8fi6z4dnnG_lABd0IblSOva6c0TDQBIueveckTIsjk9ni" />
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-[16px] font-bold text-white leading-none">{settings?.schoolName || "PAUD HIDAYAH"}</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1.5 font-label-lg text-label-lg">
          <Link aria-current="page" className="px-3.5 py-2 transition-colors text-white/90 hover:text-[#FCD116] font-medium" href="/">Beranda</Link>
          
          <div className="relative group/main">
            <button className="px-3.5 py-2 flex items-center gap-1 text-white/90 group-hover/main:text-[#FCD116] transition-colors font-medium" type="button">
              <span>Tentang</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover/main:rotate-180">expand_more</span>
            </button>
            <div className="absolute left-0 top-full pt-2 opacity-0 pointer-events-none group-hover/main:opacity-100 group-hover/main:pointer-events-auto transition-all duration-200 z-50">
              <div className="w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-2 flex flex-col gap-1">
                
                {/* PROFIL & SEJARAH (Nested Dropdown) */}
                <div className="relative group/sub1">
                  <button className="w-full flex items-center justify-between px-3 py-2.5 text-[14px] text-gray-700 hover:bg-[#EAF3EF] hover:text-[#188B48] font-medium rounded-lg transition-colors">
                    <span>Profil &amp; Sejarah</span>
                    <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover/sub1:-rotate-90">chevron_right</span>
                  </button>
                  <div className="absolute left-full top-0 pl-2 opacity-0 pointer-events-none group-hover/sub1:opacity-100 group-hover/sub1:pointer-events-auto transition-all duration-200 z-50">
                    <div className="w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-2 flex flex-col gap-1">
                      <Link className="px-3 py-2 text-[14px] text-gray-700 hover:bg-[#EAF3EF] hover:text-[#188B48] font-medium rounded-lg transition-colors" href="/profil/yayasan">Yayasan</Link>
                      <Link className="px-3 py-2 text-[14px] text-gray-700 hover:bg-[#EAF3EF] hover:text-[#188B48] font-medium rounded-lg transition-colors" href="/profil/paud">PAUD Hidayah</Link>
                      <Link className="px-3 py-2 text-[14px] text-gray-700 hover:bg-[#EAF3EF] hover:text-[#188B48] font-medium rounded-lg transition-colors" href="/profil/sd">SD Hidayah</Link>
                    </div>
                  </div>
                </div>

                {/* STRUKTUR ORGANISASI (Nested Dropdown) */}
                <div className="relative group/sub2">
                  <button className="w-full flex items-center justify-between px-3 py-2.5 text-[14px] text-gray-700 hover:bg-[#EAF3EF] hover:text-[#188B48] font-medium rounded-lg transition-colors">
                    <span>Struktur Organisasi</span>
                    <span className="material-symbols-outlined text-[16px] transition-transform duration-200 group-hover/sub2:-rotate-90">chevron_right</span>
                  </button>
                  <div className="absolute left-full top-0 pl-2 opacity-0 pointer-events-none group-hover/sub2:opacity-100 group-hover/sub2:pointer-events-auto transition-all duration-200 z-50">
                    <div className="w-48 bg-white rounded-xl shadow-xl border border-gray-100 p-2 flex flex-col gap-1">
                      <Link className="px-3 py-2 text-[14px] text-gray-700 hover:bg-[#EAF3EF] hover:text-[#188B48] font-medium rounded-lg transition-colors" href="/struktur-organisasi/yayasan">Yayasan</Link>
                      <Link className="px-3 py-2 text-[14px] text-gray-700 hover:bg-[#EAF3EF] hover:text-[#188B48] font-medium rounded-lg transition-colors" href="/struktur-organisasi/paud">PAUD Hidayah</Link>
                      <Link className="px-3 py-2 text-[14px] text-gray-700 hover:bg-[#EAF3EF] hover:text-[#188B48] font-medium rounded-lg transition-colors" href="/struktur-organisasi/sd">SD Hidayah</Link>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="relative group">
            <Link href="/program" className="px-3.5 py-2 flex items-center gap-1 text-white/90 group-hover:text-[#FCD116] transition-colors font-medium">
              <span>Program</span>
              <span className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:rotate-180">expand_more</span>
            </Link>
            <div className="absolute left-0 top-full pt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50">
              <div className="w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-2 flex flex-col gap-1">
                <Link className="px-3 py-2.5 text-[14px] text-gray-700 hover:bg-[#EAF3EF] hover:text-[#188B48] font-medium rounded-lg transition-colors" href="/program/tk-a">TK A (Usia 4-5 Thn)</Link>
                <Link className="px-3 py-2.5 text-[14px] text-gray-700 hover:bg-[#EAF3EF] hover:text-[#188B48] font-medium rounded-lg transition-colors" href="/program/tk-b">TK B (Usia 5-6 Thn)</Link>
                
                <div className="w-full h-px bg-gray-100 my-1"></div>
                <Link className="px-3 py-2.5 text-[14px] text-gray-700 hover:bg-[#EAF3EF] hover:text-[#188B48] font-medium rounded-lg transition-colors" href="/program/ekstrakurikuler">Ekstrakurikuler</Link>
              </div>
            </div>
          </div>

          <Link className="px-3.5 py-2 text-white/90 hover:text-[#FCD116] transition-colors font-medium" href="/fasilitas">Fasilitas</Link>
            <Link className="px-3.5 py-2 text-white/90 hover:text-[#FCD116] transition-colors font-medium" href="/berita">Berita</Link>
          <Link className="px-3.5 py-2 text-white/90 hover:text-[#FCD116] transition-colors font-medium" href="/galeri">Galeri</Link>
          <Link className="px-3.5 py-2 text-white/90 hover:text-[#FCD116] transition-colors font-medium" href="#kontak">Kontak</Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link className="hidden sm:inline-flex items-center justify-center text-[14px] font-bold px-5 py-2.5 rounded-full bg-[#FCD116] text-[#1b1c1a] shadow-md hover:bg-white hover:text-[#188B48] transition-all" href="#daftar-ppdb">Daftar Sekarang</Link>
          <button className="w-9 h-9 rounded-full bg-white/20 border border-white/30 flex items-center justify-center hover:bg-white/30 transition-colors">
            <span className="material-symbols-outlined text-white text-[20px]">person</span>
          </button>
        </div>
      </div>
    </header>
  );
}
