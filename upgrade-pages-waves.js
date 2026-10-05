const fs = require('fs');

const filesToUpdate = [
  'app/(frontend)/profil/yayasan/page.tsx',
  'app/(frontend)/profil/paud/page.tsx',
  'app/(frontend)/profil/sd/page.tsx',
  'app/(frontend)/program/[slug]/page.tsx'
];

for (const file of filesToUpdate) {
  if (!fs.existsSync(file)) {
    console.log(`Skipping ${file} - not found`);
    continue;
  }
  
  let content = fs.readFileSync(file, 'utf8');

  // 1. Profil Pages Fixes
  if (file.includes('/profil/')) {
    // Change bg-surface-container-lowest to bg-gradient green
    content = content.replace(
      /bg-surface-container-lowest pt-32 pb-20 md:pt-40 md:pb-32/g,
      'bg-gradient-to-br from-[#188B48] to-[#126b37] pt-32 pb-20 md:pt-40 md:pb-32'
    );
    
    // Change text colors
    content = content.replace(/text-primary/g, 'text-white');
    content = content.replace(/text-secondary/g, 'text-[#FCD116]');
    content = content.replace(/text-surface-on-surface-variant/g, 'text-white/90');
    content = content.replace(/text-gray-600/g, 'text-white/90');
    content = content.replace(/bg-secondary-container text-on-secondary-container border-secondary\/20/g, 'bg-white/20 text-white border-white/30');

    // Add Wave SVG at the end of the section (just before </section>)
    const waveDivider = `
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
            <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#FDFCF8" transform="scale(1, -1) translate(0, -80)" />
          </svg>
        </div>
      </section>`;
    
    content = content.replace(/<\/div>\s*<\/div>\s*<\/section>/, '</div>\n        </div>\n' + waveDivider);
  }

  // 2. Program/[slug] Fixes
  if (file.includes('/program/')) {
    // Current section: <section className="w-full pb-16 relative">
    // Make it green gradient with padding
    content = content.replace(
      /<section className="w-full pb-16 relative">/,
      '<section className="w-full pt-16 pb-24 md:pb-32 relative bg-gradient-to-br from-[#188B48] to-[#126b37]">'
    );
    // Remove the pt-36 from main to avoid double padding since we add pt-16 to section
    content = content.replace(/pt-36/, 'pt-20');

    // Change text colors inside the hero
    // Find the text elements. We need to be careful not to replace text colors in the rest of the page.
    // Instead of global replace, we'll replace the block.
    const heroBlockRegex = /(<div className="max-w-\[1200px\] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">[\s\S]+?)<\/section>/;
    let match = content.match(heroBlockRegex);
    
    if (match) {
      let heroContent = match[1];
      heroContent = heroContent.replace(/text-\[\#188B48\]/g, 'text-white');
      heroContent = heroContent.replace(/text-gray-600/g, 'text-white/90');
      heroContent = heroContent.replace(/bg-\[\#EAF3EF\]/g, 'bg-white/20 border-white/30');
      heroContent = heroContent.replace(/border-\[\#188B48\]\/20/g, 'border-white/30');

      const waveDivider = `
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
          <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
            <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#FDFCF8" transform="scale(1, -1) translate(0, -80)" />
          </svg>
        </div>
      </section>`;
      
      content = content.replace(heroBlockRegex, heroContent + waveDivider);
    }
  }

  fs.writeFileSync(file, content, 'utf8');
  console.log(`Updated ${file}`);
}
