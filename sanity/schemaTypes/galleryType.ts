import {defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Galeri Foto',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Foto/Kegiatan',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Publikasi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat',
      type: 'text',
    }),
    defineField({
      name: 'isFeaturedHome',
      title: 'Tampilkan di Sorotan Beranda (Bento Grid)',
      type: 'boolean',
      description: 'Aktifkan jika foto ini ingin ditampilkan pada seksi Dokumentasi Kegiatan di Beranda utama (Maksimal 4 foto).',
      initialValue: false,
      options: {
        layout: 'switch',
      },
    }),
    defineField({
      name: 'homeOrder',
      title: 'Posisi Slot di Beranda',
      type: 'number',
      description: 'Pilih slot posisi foto di Bento Grid Beranda',
      options: {
        list: [
          { title: 'Slot 1 - Sorotan Utama (Kotak Besar Kiri)', value: 1 },
          { title: 'Slot 2 - Kotak Kanan Atas', value: 2 },
          { title: 'Slot 3 - Kotak Kanan Tengah', value: 3 },
          { title: 'Slot 4 - Kotak Kanan Bawah (Lebar)', value: 4 },
        ],
      },
      hidden: ({ parent }) => !parent?.isFeaturedHome,
    }),
    defineField({
      name: 'homeBadge',
      title: 'Label Badge di Beranda',
      type: 'string',
      description: 'Label kecil di atas judul foto. Contoh: Dokumentasi Utama, Kegiatan Ceria, Sentra Bahan Alam, Unjuk Bakat',
      initialValue: 'Kegiatan Ceria',
      hidden: ({ parent }) => !parent?.isFeaturedHome,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      isFeaturedHome: 'isFeaturedHome',
      homeOrder: 'homeOrder',
      publishedAt: 'publishedAt',
    },
    prepare({ title, media, isFeaturedHome, homeOrder, publishedAt }) {
      const dateStr = publishedAt ? new Date(publishedAt).toLocaleDateString('id-ID') : '';
      const homeTag = isFeaturedHome ? `[Slot #${homeOrder || 1} Beranda]` : '';
      return {
        title: title || 'Tanpa Judul',
        subtitle: [homeTag, dateStr].filter(Boolean).join(' • '),
        media,
      };
    },
  },
})
