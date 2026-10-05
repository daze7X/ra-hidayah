const fs = require('fs');

const pages = [
  { file: 'app/(frontend)/berita/page.tsx', fill: '#126b37' },
  { file: 'app/(frontend)/fasilitas/page.tsx', fill: '#ffda47' },
  { file: 'app/(frontend)/galeri/page.tsx', fill: '#126b37' }
];

for (let p of pages) {
  let content = fs.readFileSync(p.file, 'utf8');

  // Replace <main> starting tag and pt-28 pb-20 with just pb-20 (padding top will be handled by hero)
  content = content.replace(/<main className="w-full bg-\[\#FDFCF8\] min-h-screen pt-28 pb-20 relative overflow-hidden">/, '<main className="w-full bg-[#FDFCF8] min-h-screen pb-20 relative overflow-hidden">');

  // We want to move the hero OUTSIDE the max-w-[1200px] container.
  // The current structure is:
  // <main ...>
  //   {/* Floating ... */}
  //   <div ...> <div ...> <div ...> </div>
  //   <div className="max-w-[1200px] mx-auto px-6">
  //     {/* Modern Gradient Hero */}
  //     <div className="w-full rounded-3xl ...">
  //       ...
  //     </div>

  // Let's grab the hero HTML using regex
  const heroRegex = /\{\/\* Modern Gradient Hero \*\/\}\s*<div className="w-full rounded-3xl bg-gradient-to-br from-\[(.+?)\] to-\[(.+?)\] px-6 py-16 md:py-20 text-center mb-16 shadow-lg border.+?relative overflow-hidden">([\s\S]+?)<\/p>\s*<\/div>\s*<\/div>/;
  
  let match = content.match(heroRegex);
  if (match) {
    let fromColor = match[1];
    let toColor = match[2];
    let innerContent = match[3] + '</p>\n          </div>'; // re-add the closing tags
    
    let isGreen = fromColor === '#188B48';
    
    let newFullBleedHero = `
      {/* Full Bleed Wavy Hero */}
      <div className="w-full bg-gradient-to-br from-[${fromColor}] to-[${toColor}] pt-32 pb-20 md:pt-40 md:pb-24 text-center relative overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-black opacity-10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          ${innerContent}
        </div>
      </div>
      {/* Wave Divider */}
      <div className="w-full overflow-hidden -mt-1 bg-[#FDFCF8] mb-12 relative z-20">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
          <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="${toColor}"/>
        </svg>
      </div>`;

    // Remove the old hero
    content = content.replace(heroRegex, '');
    
    // Insert the new full bleed hero right after the <main ...> tag and Floating blobs
    const mainRegex = /(<main className="w-full bg-\[\#FDFCF8\] min-h-screen pb-20 relative overflow-hidden">[\s\S]*?pointer-events-none"><\/div>\n)/;
    content = content.replace(mainRegex, `$1${newFullBleedHero}\n`);
    
    fs.writeFileSync(p.file, content, 'utf8');
    console.log(`Updated ${p.file}`);
  } else {
    console.log(`Failed to match hero in ${p.file}`);
  }
}
