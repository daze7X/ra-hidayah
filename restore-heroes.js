const fs = require('fs');

const heroes = {
  'app/(frontend)/berita/page.tsx': {
    fromColor: '#188B48',
    toColor: '#126b37',
    icon: 'newspaper',
    badge: 'BERITA & PENGUMUMAN',
    badgeTextColors: 'text-white border-white/30',
    title: 'Kabar Terbaru',
    desc: 'Ikuti perkembangan terbaru, kegiatan mendatang, dan informasi penting lainnya seputar PAUD Hidayah.'
  },
  'app/(frontend)/fasilitas/page.tsx': {
    fromColor: '#FCD116',
    toColor: '#ffda47',
    icon: 'museum',
    badge: 'FASILITAS SEKOLAH',
    badgeTextColors: 'text-[#188B48] border-[#188B48]/20 bg-[#188B48]/10',
    title: 'Sarana & Prasarana Ceria',
    desc: 'Kami menyediakan lingkungan belajar yang aman, nyaman, dan mendukung eksplorasi tanpa batas bagi anak usia dini.'
  },
  'app/(frontend)/galeri/page.tsx': {
    fromColor: '#188B48',
    toColor: '#126b37',
    icon: 'photo_library',
    badge: 'GALERI FOTO',
    badgeTextColors: 'text-white border-white/30',
    title: 'Momen Ceria Anak Hidayah',
    desc: 'Intip keseruan aktivitas belajar, bermain, dan eksplorasi para pangeran dan putri cilik PAUD Hidayah.'
  }
};

for (const [file, data] of Object.entries(heroes)) {
  let content = fs.readFileSync(file, 'utf8');
  
  const isGreen = data.fromColor === '#188B48';
  const textClass = isGreen ? 'text-white' : 'text-[#188B48]';
  const descClass = isGreen ? 'text-white/90' : 'text-[#188B48]/80';
  const badgeColors = isGreen ? 'bg-white/20 text-white border-white/30' : 'bg-[#188B48]/10 text-[#188B48] border-[#188B48]/20';
  
  let newHero = `
      {/* Full Bleed Wavy Hero */}
      <div className="w-full bg-gradient-to-br from-[${data.fromColor}] to-[${data.toColor}] pt-32 pb-20 md:pt-40 md:pb-24 text-center relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full ${badgeColors} font-bold text-sm mb-6 border">
            <span className="material-symbols-outlined text-[18px]">${data.icon}</span>
            <span>${data.badge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold ${textClass} mb-6 drop-shadow-sm">
            ${data.title}
          </h1>
          <p className="${descClass} max-w-2xl mx-auto text-lg leading-relaxed">
            ${data.desc}
          </p>
        </div>
      </div>
      {/* Wave Divider */}
      <div className="w-full overflow-hidden -mt-1 bg-[#FDFCF8] mb-12 relative z-20">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
          <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="${data.toColor}"/>
        </svg>
      </div>\n`;

  // Insert before <div className="max-w-[1200px] mx-auto px-6">
  content = content.replace(
    '<div className="max-w-[1200px] mx-auto px-6">',
    newHero + '      <div className="max-w-[1200px] mx-auto px-6">'
  );
  
  fs.writeFileSync(file, content, 'utf8');
}
console.log('Restored heroes with waves');
