'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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

  const resolveImageUrl = (img: any, size: number) => {
    if (!img) return null;
    if (typeof img === 'string') return img;
    try {
      let b = urlFor(img).width(size).height(size).fit('crop').format('webp');
      if (!img.hotspot && !img.crop) {
        b = b.crop('top');
      }
      return b.url();
    } catch {
      return null;
    }
  };

  const cardImg = resolveImageUrl(org.image, 160);
  const modalImg = resolveImageUrl(org.image, 400);

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
          {cardImg ? (
            <img 
              src={cardImg} 
              alt={org.name} 
              className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-300"
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

      {/* ================= POPUP MODAL (Rendered to body via Portal) ================= */}
      {isOpen && mounted && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-4 pt-24 pb-8 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="bg-white rounded-[32px] p-6 sm:p-7 max-w-[400px] w-full shadow-2xl relative border border-gray-100 flex flex-col items-center text-center overflow-hidden my-auto animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Gradient Bar */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#188B48] via-[#FCD116] to-[#188B48]"></div>

            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 flex items-center justify-center transition-colors z-20"
              aria-label="Tutup"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            {/* Large Clear Photo */}
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-[24px] bg-[#EAF3EF] mb-4 overflow-hidden border-4 border-white shadow-lg flex items-center justify-center shrink-0 relative mt-1 ring-4 ring-[#188B48]/10">
              {modalImg ? (
                <img 
                  src={modalImg} 
                  alt={org.name} 
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-[#188B48]/40">
                  <span className="material-symbols-outlined text-[56px]">person</span>
                  <span className="text-[11px] font-medium mt-1">Belum ada foto</span>
                </div>
              )}
            </div>

            {/* Name */}
            <h3 className="font-bold text-lg sm:text-xl text-[#1b1c1a] leading-tight mb-1.5">
              {org.name}
            </h3>

            {/* Position Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#188B48]/10 text-[#188B48] font-bold text-xs sm:text-sm mb-3 border border-[#188B48]/20">
              <span className="material-symbols-outlined text-[16px]">badge</span>
              <span>{org.position}</span>
            </div>

            {/* Section / Institution Info if available */}
            {org.section && (
              <span className="text-xs text-gray-500 font-medium mb-2.5">
                {org.section}
              </span>
            )}

            {/* Motto Box */}
            {org.motto ? (
              <div className="w-full bg-[#FDFCF8] rounded-2xl p-4 border border-[#188B48]/20 relative mt-1 text-center shadow-inner">
                <span className="material-symbols-outlined text-[#FCD116] text-[24px] leading-none mb-1 inline-block">
                  format_quote
                </span>
                <p className="text-gray-700 italic text-xs sm:text-[13.5px] leading-relaxed font-serif">
                  &ldquo;{org.motto}&rdquo;
                </p>
                <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-center gap-1 text-[10.5px] font-bold text-[#188B48] uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[13px]">psychology</span>
                  <span>Motto Hidup</span>
                </div>
              </div>
            ) : (
              <div className="w-full bg-gray-50 rounded-2xl py-2.5 px-4 border border-gray-100 mt-1 text-center">
                <p className="text-xs text-gray-400 italic">Motto hidup belum ditambahkan</p>
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
