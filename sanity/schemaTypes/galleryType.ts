import {defineField, defineType} from 'sanity'

export const galleryType = defineType({
  name: 'gallery',
  title: 'Galeri Foto & Video',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Dokumentasi / Video',
      type: 'string',
      validation: (rule) => rule.required().error('Judul wajib diisi'),
    }),
    defineField({
      name: 'mediaType',
      title: 'Jenis Media',
      type: 'string',
      description: 'Pilih apakah dokumentasi ini berupa Foto Kegiatan atau Video',
      options: {
        list: [
          { title: '📷 Foto Kegiatan', value: 'photo' },
          { title: '🎥 Video', value: 'video' },
        ],
        layout: 'radio',
      },
      initialValue: 'photo',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Tautan / Link Video',
      description: 'Masukkan URL video (contoh: link YouTube seperti https://www.youtube.com/watch?v=... atau https://youtu.be/...)',
      type: 'url',
      hidden: ({ parent }: { parent?: any }) => parent?.mediaType !== 'video',
      validation: (rule) => rule.custom((value, context) => {
        const parent = context.parent as { mediaType?: string } | undefined;
        if (parent?.mediaType === 'video' && !value) {
          return 'Tautan Video wajib diisi untuk jenis Video!';
        }
        return true;
      }),
    }),
    defineField({
      name: 'videoDuration',
      title: 'Durasi Video (Opsional)',
      description: 'Contoh: 03:45, 10:15, atau Shorts',
      type: 'string',
      hidden: ({ parent }: { parent?: any }) => parent?.mediaType !== 'video',
    }),
    defineField({
      name: 'image',
      title: 'Foto / Sampul Thumbnail',
      description: 'Wajib untuk Foto. Untuk Video, jika dikosongkan akan otomatis memakai thumbnail asli dari YouTube.',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.custom((value, context) => {
        const parent = context.parent as { mediaType?: string } | undefined;
        if (parent?.mediaType === 'video') return true;
        return value ? true : 'Foto wajib diunggah untuk jenis Foto Kegiatan';
      }),
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
      rows: 3,
    }),
    defineField({
      name: 'isFeaturedHome',
      title: 'Tampilkan di Sorotan Beranda (Bento Grid)',
      type: 'boolean',
      description: 'Aktifkan jika item ini ingin ditampilkan pada seksi Dokumentasi Kegiatan di Beranda utama (Maksimal 4 item).',
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
      mediaType: 'mediaType',
      isFeaturedHome: 'isFeaturedHome',
      homeOrder: 'homeOrder',
      publishedAt: 'publishedAt',
    },
    prepare({ title, media, mediaType, isFeaturedHome, homeOrder, publishedAt }) {
      const dateStr = publishedAt ? new Date(publishedAt).toLocaleDateString('id-ID') : '';
      const typeLabel = mediaType === 'video' ? '🎥 Video' : '📷 Foto';
      const homeTag = isFeaturedHome ? `[Slot #${homeOrder || 1} Beranda]` : '';
      return {
        title: title || 'Tanpa Judul',
        subtitle: [typeLabel, homeTag, dateStr].filter(Boolean).join(' • '),
        media,
      };
    },
  },
})
