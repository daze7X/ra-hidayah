'use client';

import { useState } from 'react';
import Image from 'next/image';

interface FasilitasItem {
  _id: string;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export default function FasilitasGrid({ items }: { items: FasilitasItem[] }) {
  const [selectedFasilitas, setSelectedFasilitas] = useState<FasilitasItem | null>(null);

  if (!items || items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <span className="material-symbols-outlined text-[64px] text-gray-300 mb-4">verified</span>
        <h3 className="text-xl font-bold text-gray-500">Belum ada data fasilitas.</h3>
        <p className="text-gray-400 mt-2">Nantikan pembaruan informasi fasilitas dari kami.</p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => {
          // Alternate colors based on index to keep CMS simple
          const isGreen = index % 2 === 0;
          const colorClass = isGreen ? 'text-[#188B48] bg-[#EAF3EF]' : 'text-[#FCD116] bg-[#FCD116]/10';

          return (
            <div 
              key={item._id} 
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col group cursor-pointer hover:-translate-y-2"
              onClick={() => setSelectedFasilitas(item)}
            >
              {/* Image Section */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image 
                  src={item.imageUrl} 
                  alt={item.title} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
                <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg backdrop-blur-md \${colorClass}`}>
                  <span className="material-symbols-outlined text-[24px]">{item.icon || 'verified'}</span>
                </div>
                {/* Zoom Hint Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="material-symbols-outlined text-[20px]">zoom_in</span>
                </div>
              </div>
              
              {/* Content Section */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#188B48] transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed flex-1 line-clamp-3">
                  {item.description}
                </p>
                <div className="mt-4 text-[#188B48] font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Lihat Detail <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* LIGHTBOX POPUP */}
      {selectedFasilitas && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-sm"
          onClick={() => setSelectedFasilitas(null)}
        >
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md z-[110]"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedFasilitas(null);
            }}
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          <div 
            className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Pop-up Image */}
            <div className="relative w-full md:w-3/5 h-[40vh] md:h-auto bg-gray-100">
              <Image
                src={selectedFasilitas.imageUrl}
                alt={selectedFasilitas.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                priority
              />
            </div>
            
            {/* Pop-up Content */}
            <div className="w-full md:w-2/5 p-8 flex flex-col justify-center bg-white overflow-y-auto">
              <div className="w-16 h-16 rounded-2xl bg-[#EAF3EF] text-[#188B48] flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-[32px]">{selectedFasilitas.icon || 'verified'}</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">{selectedFasilitas.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">{selectedFasilitas.description}</p>
              
              <a href="https://wa.me/6282260654060" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-[#188B48] text-white font-bold hover:bg-[#126b36] transition-colors">
                <span className="material-symbols-outlined text-[20px]">chat</span>
                Tanyakan Fasilitas Ini
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
