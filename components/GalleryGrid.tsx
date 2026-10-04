'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryItem {
  _id: string;
  title: string;
  description?: string;
  imageUrl: string;
}

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  if (!items || items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <span className="material-symbols-outlined text-[64px] text-gray-300 mb-4">photo_library</span>
        <h3 className="text-xl font-bold text-gray-500">Belum ada foto di galeri.</h3>
        <p className="text-gray-400 mt-2">Nantikan dokumentasi keseruan kegiatan PAUD Hidayah di sini!</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div 
            key={item._id} 
            className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 aspect-square bg-gray-100"
            onClick={() => setSelectedImage(item)}
          >
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h4 className="text-white font-bold text-lg leading-tight mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {item.title}
              </h4>
              {item.description && (
                <p className="text-white/80 text-sm line-clamp-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX POPUP */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          <div 
            className="relative w-full max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-[60vh] sm:h-[75vh]">
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
            
            <div className="w-full text-center mt-6">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h3>
              {selectedImage.description && (
                <p className="text-gray-300 max-w-2xl mx-auto text-base">{selectedImage.description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
