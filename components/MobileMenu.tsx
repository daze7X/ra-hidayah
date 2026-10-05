'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <div className="lg:hidden flex items-center">
      {/* Hamburger Button */}
      <button 
        onClick={toggleMenu}
        className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/20 text-white hover:bg-white/30 transition-colors"
        aria-label="Toggle menu"
      >
        <span className="material-symbols-outlined text-[24px]">
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
          onClick={closeMenu}
        >
          {/* Drawer Panel */}
          <div 
            className="absolute top-0 right-0 w-[80%] max-w-[320px] h-full bg-white shadow-2xl flex flex-col overflow-y-auto transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <span className="font-bold text-xl text-[#188B48]">Menu Utama</span>
              <button 
                onClick={closeMenu}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col p-4">
              <Link 
                href="/" 
                onClick={closeMenu}
                className={\`px-4 py-3 text-[16px] font-semibold rounded-xl mb-1 \${pathname === '/' ? 'bg-[#188B48]/10 text-[#188B48]' : 'text-gray-700'}\`}
              >
                Beranda
              </Link>

              {/* TENTANG Dropdown */}
              <div className="flex flex-col mb-1">
                <button 
                  onClick={() => toggleDropdown('tentang')}
                  className="flex items-center justify-between px-4 py-3 text-[16px] font-semibold rounded-xl text-gray-700 hover:bg-gray-50"
                >
                  <span>Tentang</span>
                  <span className={\`material-symbols-outlined transition-transform \${openDropdown === 'tentang' ? 'rotate-180 text-[#188B48]' : ''}\`}>
                    expand_more
                  </span>
                </button>
                
                {openDropdown === 'tentang' && (
                  <div className="flex flex-col pl-6 pr-4 py-2 gap-1 border-l-2 border-[#188B48]/20 ml-6">
                    <span className="text-xs font-bold text-gray-400 mt-2 mb-1 uppercase tracking-wider">Profil & Sejarah</span>
                    <Link href="/profil/yayasan" onClick={closeMenu} className="py-2 text-[15px] text-gray-600 hover:text-[#188B48]">Yayasan</Link>
                    <Link href="/profil/paud" onClick={closeMenu} className="py-2 text-[15px] text-gray-600 hover:text-[#188B48]">PAUD Hidayah</Link>
                    <Link href="/profil/sd" onClick={closeMenu} className="py-2 text-[15px] text-gray-600 hover:text-[#188B48]">SD Hidayah</Link>
                    
                    <span className="text-xs font-bold text-gray-400 mt-4 mb-1 uppercase tracking-wider">Struktur Organisasi</span>
                    <Link href="/struktur-organisasi/yayasan" onClick={closeMenu} className="py-2 text-[15px] text-gray-600 hover:text-[#188B48]">Yayasan</Link>
                    <Link href="/struktur-organisasi/paud" onClick={closeMenu} className="py-2 text-[15px] text-gray-600 hover:text-[#188B48]">PAUD Hidayah</Link>
                    <Link href="/struktur-organisasi/sd" onClick={closeMenu} className="py-2 text-[15px] text-gray-600 hover:text-[#188B48]">SD Hidayah</Link>
                  </div>
                )}
              </div>

              {/* PROGRAM Dropdown */}
              <div className="flex flex-col mb-1">
                <button 
                  onClick={() => toggleDropdown('program')}
                  className="flex items-center justify-between px-4 py-3 text-[16px] font-semibold rounded-xl text-gray-700 hover:bg-gray-50"
                >
                  <span>Program</span>
                  <span className={\`material-symbols-outlined transition-transform \${openDropdown === 'program' ? 'rotate-180 text-[#188B48]' : ''}\`}>
                    expand_more
                  </span>
                </button>
                
                {openDropdown === 'program' && (
                  <div className="flex flex-col pl-6 pr-4 py-2 gap-1 border-l-2 border-[#188B48]/20 ml-6">
                    <Link href="/program/tk-a" onClick={closeMenu} className="py-2 text-[15px] text-gray-600 hover:text-[#188B48]">TK A (Usia 4-5 Thn)</Link>
                    <Link href="/program/tk-b" onClick={closeMenu} className="py-2 text-[15px] text-gray-600 hover:text-[#188B48]">TK B (Usia 5-6 Thn)</Link>
                    <Link href="/program/ekstrakurikuler" onClick={closeMenu} className="py-2 text-[15px] text-gray-600 hover:text-[#188B48]">Ekstrakurikuler</Link>
                  </div>
                )}
              </div>

              <Link 
                href="/fasilitas" 
                onClick={closeMenu}
                className={\`px-4 py-3 text-[16px] font-semibold rounded-xl mb-1 \${pathname === '/fasilitas' ? 'bg-[#188B48]/10 text-[#188B48]' : 'text-gray-700 hover:bg-gray-50'}\`}
              >
                Fasilitas
              </Link>
              <Link 
                href="/berita" 
                onClick={closeMenu}
                className={\`px-4 py-3 text-[16px] font-semibold rounded-xl mb-1 \${pathname === '/berita' ? 'bg-[#188B48]/10 text-[#188B48]' : 'text-gray-700 hover:bg-gray-50'}\`}
              >
                Berita
              </Link>
              <Link 
                href="/galeri" 
                onClick={closeMenu}
                className={\`px-4 py-3 text-[16px] font-semibold rounded-xl mb-1 \${pathname === '/galeri' ? 'bg-[#188B48]/10 text-[#188B48]' : 'text-gray-700 hover:bg-gray-50'}\`}
              >
                Galeri
              </Link>
              <Link 
                href="#kontak" 
                onClick={closeMenu}
                className="px-4 py-3 text-[16px] font-semibold rounded-xl mb-1 text-gray-700 hover:bg-gray-50"
              >
                Kontak
              </Link>
            </nav>

            {/* Mobile Footer / CTA */}
            <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100">
              <Link 
                href="#daftar-ppdb" 
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#FCD116] text-[#1b1c1a] font-bold text-[16px] shadow-sm hover:brightness-105 transition-all"
              >
                <span className="material-symbols-outlined text-[20px]">how_to_reg</span>
                Daftar Sekarang
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
