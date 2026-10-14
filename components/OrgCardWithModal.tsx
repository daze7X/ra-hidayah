'use client';

import { useState, useEffect } from 'react';
import { urlFor } from '../sanity/lib/image';

interface OrgMember {
  _id?: string;
  name: string;
  position: string;
  motto?: string;
  image?: any;
  institution?: string;
  section?: string;
}

export default function OrgCardWithModal({ 
  org, 
  highlight = false 
}: { 
  org: OrgMember; 
  highlight?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!org) return null;

  return (
    <>
      {/* ================= CARD ================= */}
      <div 
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setIsOpen(true); }}
        className={`group bg-white rounded-[24px] p-4 sm:p-6 shadow-md hover:shadow-2xl border transition-all duration-300 hover:-translate-y-2 flex flex-col items-center w-full max-w-[250px] relative overflow-hidden cursor-pointer select-none ${
          highlight 
            ? 'border-[#188B48]/30 ring-2 ring-[#188B48]/10' 
            : 'border-[#188B48]/10 hover:border-[#188B48]/40'
        }`}
      >
        {/* Accent Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#188B48] via-[#FCD116] to-[#188B48] transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        
        {/* Glow Hover */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#188B48]/0 to-[#188B48]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[24px]"></div>

        {/* Click hint badge (appears on hover) */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 z-20">
          <span className="w-7 h-7 rounded-full bg-[#188B48]/10 text-[#188B48] flex items-center justify-center">
            <span className="material-symbols-outlined text-[16px]">visibility</span>
          </span>
        </div>

        {/* Profile Avatar */}
        <div className="w-[68px] h-[68px] sm:w-[76px] sm:h-[76px] rounded-full bg-[#EAF3EF] mb-3 overflow-hidden border-2 border-white shadow-md group-hover:border-[#188B48]/30 group-hover:shadow-lg transition-all duration-300 flex items-center justify-center shrink-0 relative z-10">
          {org.image ? (
            <img 
              src={urlFor(org.image).width(160).height(160).fit('crop').format('webp').url()} 
              alt={org.name} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          ) : (
            <span className="material-symbols-outlined text-[#188B48]/40 group-hover:text-[#188B48]/70 text-[34px] transition-colors duration-300">
              person
            </span>
          )}
        </div>

        {/* Name */}
        <h4 className="font-bold text-[14px] text-[#188B48] text-center leading-tight mb-2 relative z-10 min-h-[36px] flex items-center justify-center">
          {org.name}
        </h4>

        {/* Position */}
        <p className="text-[11px] text-[#188B48]/90 font-semibold text-center bg-[#188B48]/8 px-2.5 py-0.5 rounded-full relative z-10">
          {org.position}
        </p>

        {/* Click prompt note */}
        <span className="text-[10px] text-gray-400 mt-2 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Klik untuk detail
        </span>
      </div>

      {/* ================= POPUP MODAL ================= */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-[32px] p-6 sm:p-8 max-w-[420px] w-full shadow-2xl relative border border-gray-100 flex flex-col items-center text-center overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#188B48] via-[#FCD116] to-[#188B48]"></div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors z-20"
              aria-label="Tutup"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            {/* Large Clear Photo */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-[28px] bg-[#EAF3EF] mb-5 overflow-hidden border-4 border-white shadow-xl flex items-center justify-center shrink-0 relative mt-2 ring-4 ring-[#188B48]/10">
              {org.image ? (
                <img 
                  src={urlFor(org.image).width(400).height(400).fit('crop').format('webp').url()} 
                  alt={org.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-[#188B48]/40">
                  <span className="material-symbols-outlined text-[64px]">person</span>
                  <span className="text-[11px] font-medium mt-1">Belum ada foto</span>
                </div>
              )}
            </div>

            {/* Name */}
            <h3 className="font-bold text-lg sm:text-xl text-[#1b1c1a] leading-tight mb-2">
              {org.name}
            </h3>

            {/* Position Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#188B48]/10 text-[#188B48] font-bold text-xs sm:text-sm mb-4 border border-[#188B48]/20">
              <span className="material-symbols-outlined text-[16px]">badge</span>
              <span>{org.position}</span>
            </div>

            {/* Section / Institution Info if available */}
            {org.section && (
              <span className="text-xs text-gray-500 font-medium mb-3">
                {org.section}
              </span>
            )}

            {/* Motto Box */}
            {org.motto ? (
              <div className="w-full bg-[#FDFCF8] rounded-2xl p-4 sm:p-5 border border-[#188B48]/20 relative mt-2 text-center shadow-inner">
                <span className="material-symbols-outlined text-[#FCD116] text-[28px] leading-none mb-1 inline-block">
                  format_quote
                </span>
                <p className="text-gray-700 italic text-sm sm:text-[15px] leading-relaxed font-serif">
                  &ldquo;{org.motto}&rdquo;
                </p>
                <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-center gap-1 text-[11px] font-bold text-[#188B48] uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[14px]">psychology</span>
                  <span>Motto Hidup</span>
                </div>
              </div>
            ) : (
              <div className="w-full bg-gray-50 rounded-2xl py-3 px-4 border border-gray-100 mt-2 text-center">
                <p className="text-xs text-gray-400 italic">Motto hidup belum ditambahkan</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
