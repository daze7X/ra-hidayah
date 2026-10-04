import Link from "next/link";

export default function PlaceholderPage() {
  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen pt-32 pb-24 flex items-center justify-center font-sans">
      <div className="text-center max-w-xl px-6">
        <div className="w-20 h-20 bg-[#FCD116]/20 text-[#188B48] rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="material-symbols-outlined text-[40px]">construction</span>
        </div>
        <h1 className="text-3xl font-bold text-[#1b1c1a] mb-4">Profil & Sejarah Yayasan</h1>
        <p className="text-gray-600 mb-8">
          Halaman ini sedang dalam tahap penyusunan materi dan akan segera hadir.
        </p>
        <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-[#188B48] text-white rounded-full font-medium hover:bg-[#188B48]/90 transition-colors">
          <span className="material-symbols-outlined text-[20px]">arrow_back</span>
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
