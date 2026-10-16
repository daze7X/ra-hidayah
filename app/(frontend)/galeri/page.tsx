import { client } from "../../../sanity/lib/client";
import GalleryGrid from "../../../components/GalleryGrid";
import { urlFor } from "../../../sanity/lib/image";

export const revalidate = 0; // Disable static caching for live preview

export const metadata = {
  title: "Galeri - PAUD Hidayah",
  description: "Dokumentasi kegiatan dan momen seru di PAUD Hidayah.",
};

const defaultActivities = [
  {
    _id: "act-1",
    title: "Kebersamaan Seluruh Santri & Dewan Guru",
    description: "Seluruh ananda murid dan pendidik PAUD Hidayah berfoto bersama membentangkan karya batik celup rintang penuh warna.",
    imageUrl: "/kegiatan/kegiatan-bersama-sekolah.webp",
  },
  {
    _id: "act-2",
    title: "Pondasi Belajar Melingkar Playgroup",
    description: "Ananda Kelompok Bermain (Playgroup) usia 3-4 tahun bernyanyi ceria dan berdoa bersama ustadzah pembimbing.",
    imageUrl: "/kegiatan/kegiatan-playgroup-lingkaran.webp",
  },
  {
    _id: "act-3",
    title: "Aktivitas Sentra Kelas RA-A",
    description: "Stimulasi motorik halus dan kognitif melalui pencocokan bentuk, berhitung, dan balok edukasi.",
    imageUrl: "/kegiatan/kegiatan-sentra-belajar.webp",
  },
  {
    _id: "act-4",
    title: "Kreativitas Seni & Mewarnai Kupu-Kupu",
    description: "Mengeksplorasi warna dan motorik halus melalui kegiatan mewarnai bersama ustadzah.",
    imageUrl: "/kegiatan/kegiatan-mewarnai-kupu.webp",
  },
  {
    _id: "act-5",
    title: "Eksplorasi Sentra Bahan Alam",
    description: "Bermain sensorik di rumput hijau, mengenalkan sayuran, lesung rempah, dan air secara kontekstual.",
    imageUrl: "/kegiatan/kegiatan-sentra-bahan-alam.webp",
  },
  {
    _id: "act-6",
    title: "Market Day & Role Play 'Jual Ikan Segar'",
    description: "Simulasi interaktif jual beli ikan kreasi sendiri untuk melatih kemandirian dan konsep berniaga Islami.",
    imageUrl: "/kegiatan/kegiatan-market-day.webp",
  },
  {
    _id: "act-7",
    title: "Penataan Sentra Belajar 'Pasar Tayu'",
    description: "Media pembelajaran konkret mengenal huruf dan angka dengan kancing warna-warni dan kartu edukatif.",
    imageUrl: "/kegiatan/kegiatan-sentra-pasartayu.webp",
  },
  {
    _id: "act-8",
    title: "Belajar Terbuka di Pendopo Asri",
    description: "Suasana belajar menggambar dan menyusun balok di area pendopo semi-outdoor yang sejuk dan terang.",
    imageUrl: "/kegiatan/kegiatan-belajar-paviliun.webp",
  },
  {
    _id: "act-9",
    title: "Parenting Ceria: Kreasi Batik Jumputan",
    description: "Kolaborasi hangat orang tua dan anak mewarnai kain batik bersama sebagai wujud sinergi keluarga dan sekolah.",
    imageUrl: "/kegiatan/kegiatan-parenting-batik.webp",
  },
  {
    _id: "act-10",
    title: "Pentas Kreasi & Unjuk Bakat Santri",
    description: "Apresiasi panggung kebanggaan ananda menampilkan karya seni celup rintang di hadapan orang tua.",
    imageUrl: "/kegiatan/kegiatan-panggung-prestasi.webp",
  },
  {
    _id: "act-11",
    title: "Senyum Hangat & Sambutan Dewan Guru",
    description: "Bunda guru dan staf PAUD Hidayah selalu menyambut ananda dengan senyum, salam, dan sapa penuh kasih.",
    imageUrl: "/kegiatan/kegiatan-guru-salam.webp",
  },
  {
    _id: "act-12",
    title: "Sentra Pembelajaran Terpadu & Terstruktur",
    description: "Fasilitas ruang sentra yang tertata rapi dengan beragam sudut eksplorasi, poster asmaul husna, dan karpet edukasi.",
    imageUrl: "/kegiatan/kegiatan-display-sentra.webp",
  },
  {
    _id: "act-13",
    title: "Pelatihan & Pengembangan Guru Berkelanjutan",
    description: "Ustadzah PAUD Hidayah rutin mengikuti workshop dan pembekalan kurikulum merdeka PAUD terkini.",
    imageUrl: "/kegiatan/kegiatan-pelatihan-guru.webp",
  },
  {
    _id: "act-14",
    title: "Hasil Karya Batik Jumputan Ananda",
    description: "Deretan kaos dan kain batik penuh warna hasil cipta mandiri ananda dijemur di halaman sekolah.",
    imageUrl: "/kegiatan/kegiatan-jemuran-karya.webp",
  },
  {
    _id: "act-15",
    title: "Pemberian Piagam & Apresiasi Belajar",
    description: "Momen berharga penganugerahan apresiasi atas capaian belajar ananda bersama para bunda pendidik.",
    imageUrl: "/kegiatan/kegiatan-wisuda-prestasi.webp",
  },
  {
    _id: "act-16",
    title: "Dewan Guru & Tenaga Kependidikan",
    description: "Pendidik berdedikasi tinggi yang mendampingi tumbuh kembang dan pembentukan karakter generasi Qur'ani.",
    imageUrl: "/kegiatan/kegiatan-dewan-guru.webp",
  }
];

async function getGalleryData() {
  try {
    const query = `*[_type == "gallery"] | order(publishedAt desc) {
      _id,
      title,
      description,
      image
    }`;
    
    const galleries = await client.fetch(query, {}, { next: { revalidate: 0 } });
    
    const sanityItems = (galleries || []).map((item: any) => ({
      _id: item._id,
      title: item.title,
      description: item.description,
      imageUrl: item.image ? urlFor(item.image).url() : '/gedung-tk.jpg',
    }));

    // Return dynamic items from Sanity CMS if present, otherwise fallback to defaultActivities
    return sanityItems.length > 0 ? sanityItems : defaultActivities;
  } catch (err) {
    console.error("Error fetching gallery from Sanity:", err);
    return defaultActivities;
  }
}

export default async function GalleryPage() {
  const items = await getGalleryData();

  return (
    <main className="w-full bg-[#FDFCF8] min-h-screen pb-20 relative overflow-hidden">
        {/* Floating Decorative Blobs */}
        <div className="absolute top-40 right-0 w-96 h-96 bg-[#FCD116]/15 rounded-full blur-[100px] translate-x-1/3 pointer-events-none"></div>
        <div className="absolute bottom-40 left-0 w-80 h-80 bg-[#188B48]/10 rounded-full blur-[80px] -translate-x-1/3 pointer-events-none"></div>
        <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-[#FCD116]/10 rounded-full blur-[60px] pointer-events-none"></div>
      
      {/* Full Bleed Solid Green Hero */}
      <div className="w-full bg-[#188B48] pt-32 pb-20 md:pt-40 md:pb-24 text-center relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white border-white/30 font-bold text-sm mb-6 border">
            <span className="material-symbols-outlined text-[18px]">photo_library</span>
            <span>GALERI FOTO</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-sm">
            Momen Ceria Anak Hidayah
          </h1>
          <p className="text-white max-w-2xl mx-auto text-lg leading-relaxed">
            Intip keseruan aktivitas belajar, bermain, dan eksplorasi para santri dan pendidik cilik PAUD Hidayah.
          </p>
        </div>
      </div>
      {/* Wave Divider */}
      <div className="w-full overflow-hidden -mt-1 bg-[#FDFCF8] relative z-20 mb-12">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-8 sm:h-12 md:h-16 block">
          <path d="M0,0 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,0 Z" fill="#188B48" />
        </svg>
      </div>
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Gallery Grid Client Component */}
        <GalleryGrid items={items} />
      </div>
    </main>
  );
}
