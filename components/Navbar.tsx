import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-bold text-2xl text-green-600">
              TK Bintang
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">Beranda</Link>
            <Link href="/profil" className="text-gray-700 hover:text-green-600 font-medium">Profil</Link>
            <Link href="/galeri" className="text-gray-700 hover:text-green-600 font-medium">Galeri</Link>
            <Link href="/berita" className="text-gray-700 hover:text-green-600 font-medium">Berita</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
