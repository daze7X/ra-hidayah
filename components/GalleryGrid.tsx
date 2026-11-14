'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { createPortal } from 'react-dom';

export interface GalleryItem {
  _id: string;
  title: string;
  description?: string;
  mediaType?: 'photo' | 'video';
  imageUrl?: string | null;
  videoUrl?: string | null;
  videoDuration?: string | null;
}

function getYouTubeId(url?: string | null): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=|shorts\/)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2]?.length === 11 ? match[2] : null;
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [activeTab, setActiveTab] = useState<'all' | 'photo' | 'video'>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPhoto(null);
      }
    };
    if (selectedPhoto) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedPhoto]);

  const photoCount = items.filter((i) => (i.mediaType || 'photo') === 'photo').length;
  const videoCount = items.filter((i) => i.mediaType === 'video').length;

  const filteredItems = items.filter((item) => {
    const type = item.mediaType || 'photo';
    if (activeTab === 'photo') return type === 'photo';
    if (activeTab === 'video') return type === 'video';
    return true;
  });

  const resolveItemThumb = (item: GalleryItem): string => {
    if (item.imageUrl) return item.imageUrl;
    if (item.mediaType === 'video' && item.videoUrl) {
      const ytId = getYouTubeId(item.videoUrl);
      if (ytId) return `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;
    }
    return '/gedung-tk.jpg';
  };

  return (
    <div className="w-full">
      {/* ================= CATEGORY FILTER TABS ================= */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-2 shadow-sm ${
            activeTab === 'all'
              ? 'bg-[#188B48] text-white shadow-md shadow-[#188B48]/20 scale-105'
              : 'bg-white text-gray-600 hover:bg-[#EAF3EF] hover:text-[#188B48] border border-gray-200/80'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">apps</span>
          <span>Semua</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
              activeTab === 'all' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
            }`}
          >
            {items.length}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('photo')}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-2 shadow-sm ${
            activeTab === 'photo'
              ? 'bg-[#188B48] text-white shadow-md shadow-[#188B48]/20 scale-105'
              : 'bg-white text-gray-600 hover:bg-[#EAF3EF] hover:text-[#188B48] border border-gray-200/80'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">photo_camera</span>
          <span>Foto Kegiatan</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
              activeTab === 'photo' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
            }`}
          >
            {photoCount}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('video')}
          className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all duration-200 flex items-center gap-2 shadow-sm ${
            activeTab === 'video'
              ? 'bg-[#188B48] text-white shadow-md shadow-[#188B48]/20 scale-105'
              : 'bg-white text-gray-600 hover:bg-[#EAF3EF] hover:text-[#188B48] border border-gray-200/80'
          }`}
        >
          <span className="material-symbols-outlined text-[18px]">videocam</span>
          <span>Video</span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
              activeTab === 'video' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
            }`}
          >
            {videoCount}
          </span>
        </button>
      </div>

      {/* ================= EMPTY STATE ================= */}
      {filteredItems.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
          <span className="material-symbols-outlined text-[64px] text-gray-300 mb-3">
            {activeTab === 'video' ? 'videocam' : 'photo_library'}
          </span>
          <h3 className="text-xl font-bold text-gray-700">
            {activeTab === 'video' ? 'Belum Ada Video Kegiatan' : 'Belum Ada Dokumentasi'}
          </h3>
          <p className="text-gray-400 mt-2 max-w-md text-sm">
            {activeTab === 'video'
              ? 'Dokumentasi video kegiatan belajar dan kreativitas ananda akan segera hadir di sini.'
              : 'Nantikan dokumentasi keseruan dan foto kegiatan belajar ceria ananda di sini!'}
          </p>
        </div>
      )}

      {/* ================= GALLERY GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => {
          const isVideo = item.mediaType === 'video';
          const thumbSrc = resolveItemThumb(item);

          if (isVideo) {
            // Video Card: Opens video link in new tab
            return (
              <a
                key={item._id}
                href={item.videoUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 aspect-[4/3] bg-gray-900 border border-gray-100 flex flex-col justify-end"
                title={`Tonton "${item.title}"`}
              >
                {/* Thumbnail Image */}
                <Image
                  src={thumbSrc}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  unoptimized={thumbSrc.includes('youtube.com')}
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 group-hover:via-black/25 transition-all duration-300"></div>

                {/* Video Badge (Top-Left) */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-md">
                  <span className="material-symbols-outlined text-[14px] text-[#FCD116]">videocam</span>
                  <span>Video</span>
                </div>

                {/* Duration Badge (Top-Right) */}
                {item.videoDuration && (
                  <div className="absolute top-3.5 right-3.5 z-10 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold border border-white/10 shadow-sm">
                    {item.videoDuration}
                  </div>
                )}

                {/* Big Iconic Play Button (Center) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#188B48] text-white flex items-center justify-center shadow-2xl group-hover:scale-115 group-hover:bg-[#136f3a] transition-all duration-300 ring-4 ring-white/30">
                    <span className="material-symbols-outlined text-[28px] sm:text-[32px] translate-x-0.5">
                      play_arrow
                    </span>
                  </div>
                </div>

                {/* Bottom Content Info */}
                <div className="relative z-10 p-4 sm:p-5">
                  <h4 className="text-white font-bold text-base sm:text-lg leading-snug line-clamp-2 group-hover:text-[#FCD116] transition-colors duration-200">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="text-white/80 text-xs sm:text-sm line-clamp-1 mt-1 font-light">
                      {item.description}
                    </p>
                  )}
                  <div className="inline-flex items-center gap-1.5 text-[11.5px] font-bold text-[#FCD116] mt-2 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span>Tonton Video</span>
                    <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                  </div>
                </div>
              </a>
            );
          }

          // Photo Card: Opens Lightbox Popup
          return (
            <div
              key={item._id}
              className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 aspect-[4/3] bg-gray-100 border border-gray-100"
              onClick={() => setSelectedPhoto(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSelectedPhoto(item);
              }}
            >
              <Image
                src={thumbSrc}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-108"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Photo Badge (Top-Left) */}
              <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-medium border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <span className="material-symbols-outlined text-[13px]">zoom_in</span>
                <span>Lihat Foto</span>
              </div>

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
                <h4 className="text-white font-bold text-base leading-snug line-clamp-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {item.title}
                </h4>
                {item.description && (
                  <p className="text-white/80 text-xs line-clamp-2 mt-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= LIGHTBOX POPUP FOR PHOTOS (via Portal) ================= */}
      {selectedPhoto &&
        mounted &&
        createPortal(
          <div
            className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedPhoto(null)}
          >
            {/* Close button */}
            <button
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-11 h-11 bg-white/10 hover:bg-white/25 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md z-[100000]"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhoto(null);
              }}
              aria-label="Tutup foto"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>

            <div
              className="relative w-full max-w-5xl max-h-[90vh] flex flex-col items-center justify-center animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-[55vh] sm:h-[70vh] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={resolveItemThumb(selectedPhoto)}
                  alt={selectedPhoto.title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="w-full text-center mt-5 px-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-snug">
                  {selectedPhoto.title}
                </h3>
                {selectedPhoto.description && (
                  <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
                    {selectedPhoto.description}
                  </p>
                )}
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
}
