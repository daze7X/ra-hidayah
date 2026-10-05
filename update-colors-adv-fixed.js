const fs = require('fs');

let code = fs.readFileSync('app/(frontend)/page.tsx', 'utf8');

const sections = code.split('<section ');

function processSection(chunk, index) {
  if (index === 0) return chunk;

  let newChunk = '<section ' + chunk;

  // 1. Hero
  if (index === 1) { 
    newChunk = newChunk.replace(
      'className="relative w-full overflow-hidden bg-gradient-to-b from-surface-container-low/70 via-surface to-surface pb-space-xl pt-4"',
      'className="relative w-full overflow-hidden bg-[#FCD116] pb-space-xl pt-4"'
    );
  } 
  // 2. Tentang Kami
  else if (index === 2) { 
    newChunk = newChunk.replace(
      'className="w-full py-space-xl bg-surface-container-lowest"',
      'className="w-full py-space-xl bg-[#188B48] text-white"'
    );
    newChunk = newChunk.replace(/text-primary/g, 'text-white');
    newChunk = newChunk.replace(/text-on-surface-variant/g, 'text-white\/80');
    newChunk = newChunk.replace(/text-on-surface/g, 'text-white');
    newChunk = newChunk.replace(/text-secondary/g, 'text-[#FCD116]');
    newChunk = newChunk.replace(/bg-surface/g, 'bg-white\/10');
    newChunk = newChunk.replace(/bg-primary-fixed\\/40/g, 'bg-white\/20');
    newChunk = newChunk.replace(/bg-primary-fixed\\/50/g, 'bg-white\/20');
  }
  // 3. Program
  else if (index === 3) {
    newChunk = newChunk.replace(
      'className="w-full py-space-xl bg-surface-container-low" id="program-unggulan"',
      'className="w-full py-space-xl bg-[#FCD116]" id="program-unggulan"'
    );
    newChunk = newChunk.replace(/bg-surface-container-lowest/g, 'bg-white');
    newChunk = newChunk.replace(/text-on-surface-variant/g, 'text-gray-700');
  }
  // 4. Ekstrakurikuler
  else if (index === 4) {
    newChunk = newChunk.replace(
      'className="w-full py-20 bg-[#FDFCF8]"',
      'className="w-full py-20 bg-[#188B48] text-white"'
    );
    newChunk = newChunk.replace(/text-primary/g, 'text-white');
    newChunk = newChunk.replace(/text-on-surface-variant/g, 'text-white\/80');
    newChunk = newChunk.replace(/text-on-surface/g, 'text-white');
    newChunk = newChunk.replace(/bg-white/g, 'bg-white\/10');
  }
  // 5. Fasilitas
  else if (index === 5) {
    newChunk = newChunk.replace(
      'className="w-full py-space-xl bg-surface"',
      'className="w-full py-space-xl bg-white"'
    );
  }
  // 6. Berita
  else if (index === 6) {
    newChunk = newChunk.replace(
      'className="w-full py-space-xl bg-surface-container-low"',
      'className="w-full py-space-xl bg-[#FCD116]"'
    );
    newChunk = newChunk.replace(/bg-surface-container-lowest/g, 'bg-white');
  }
  // 7. Testimoni
  else if (index === 7) {
    newChunk = newChunk.replace(
      'className="w-full py-space-xl bg-surface"',
      'className="w-full py-space-xl bg-[#188B48] text-white"'
    );
    newChunk = newChunk.replace(/text-primary/g, 'text-white');
    newChunk = newChunk.replace(/text-on-surface-variant/g, 'text-white\/80');
    newChunk = newChunk.replace(/text-on-surface/g, 'text-white');
  }
  // 8. PPDB
  else if (index === 8) {
    newChunk = newChunk.replace(
      'className="w-full py-space-xl bg-surface-container-lowest" id="daftar-ppdb"',
      'className="w-full py-space-xl bg-[#FCD116]" id="daftar-ppdb"'
    );
  }

  return newChunk;
}

const finalCode = sections.map(processSection).join('');
fs.writeFileSync('app/(frontend)/page.tsx', finalCode, 'utf8');
console.log('Done!');
