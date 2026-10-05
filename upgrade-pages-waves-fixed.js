const fs = require('fs');

const filesToUpdate = [
  'app/(frontend)/profil/yayasan/page.tsx',
  'app/(frontend)/profil/paud/page.tsx',
  'app/(frontend)/profil/sd/page.tsx',
  'app/(frontend)/program/[slug]/page.tsx'
];

const waveDivider = `
      {/* Wave Divider */}
      <div className="w-full overflow-hidden -mt-1 bg-[#126b37]">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block relative z-10">
          <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#FDFCF8" />
        </svg>
      </div>`;

for (const file of filesToUpdate) {
  if (!fs.existsSync(file)) {
    console.log(`Skipping ${file}`);
    continue;
  }
  
  let content = fs.readFileSync(file, 'utf8');

  // 1. Profil Pages Fixes
  if (file.includes('/profil/')) {
    // Change background to gradient
    content = content.replace(
      /bg-surface-container-lowest pt-32 pb-20 md:pt-40 md:pb-32/g,
      'bg-gradient-to-br from-[#188B48] to-[#126b37] pt-32 pb-20 md:pt-40 md:pb-24'
    );
    
    // Change text colors
    content = content.replace(/text-primary/g, 'text-white');
    content = content.replace(/text-secondary/g, 'text-[#FCD116]');
    content = content.replace(/text-surface-on-surface-variant/g, 'text-white/90');
    content = content.replace(/text-gray-600/g, 'text-white/90');
    content = content.replace(/bg-secondary-container text-on-secondary-container border-secondary\/20/g, 'bg-white/20 text-white border-white/30');

    // Add Wave SVG right AFTER </section>
    content = content.replace(/<\/section>/, `</section>\n${waveDivider}`);
  }

  // 2. Program/[slug] Fixes
  if (file.includes('/program/')) {
    content = content.replace(
      /<section className="w-full pb-16 relative">/,
      '<section className="w-full pt-20 pb-24 md:pb-32 relative bg-gradient-to-br from-[#188B48] to-[#126b37]">'
    );
    // Remove the pt-36 from main to avoid double padding
    content = content.replace(/pt-36/, 'pt-16');

    // Replace text colors carefully inside the section
    const heroBlockRegex = /(<section className="w-full pt-20 pb-24 md:pb-32 relative bg-gradient-to-br from-\[\#188B48\] to-\[\#126b37\]">[\s\S]+?)<\/section>/;
    let match = content.match(heroBlockRegex);
    
    if (match) {
      let heroContent = match[1];
      heroContent = heroContent.replace(/text-\[\#188B48\]/g, 'text-white');
      heroContent = heroContent.replace(/text-gray-600/g, 'text-white/90');
      heroContent = heroContent.replace(/bg-\[\#EAF3EF\]/g, 'bg-white/20');
      heroContent = heroContent.replace(/border-\[\#188B48\]\/20/g, 'border-white/30');

      content = content.replace(heroBlockRegex, heroContent + `</section>\n${waveDivider}`);
    }
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file}`);
}
