import {defineField, defineType} from 'sanity'

export const galleryVideoType = defineType({
  name: 'galleryVideo',
  title: 'Video Kegiatan',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Video Kegiatan',
      type: 'string',
      description: 'Masukkan judul video yang menarik (contoh: Keseruan Pentas Seni Santri PAUD Hidayah)',
      validation: (rule) => rule.required().error('Judul video wajib diisi'),
    }),
    defineField({
      name: 'videoUrl',
      title: 'Tautan / Link Video',
      description: 'Masukkan link video (contoh: https://www.youtube.com/watch?v=... atau https://youtu.be/... atau link YouTube Shorts)',
      type: 'url',
      validation: (rule) => rule.required().error('Tautan video wajib diisi'),
    }),
    defineField({
      name: 'videoDuration',
      title: 'Durasi Video (Opsional)',
      description: 'Contoh: 03:45, 10:20, atau Shorts',
      type: 'string',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Foto Sampul / Thumbnail Khusus (Opsional)',
      description: 'Jika dikosongkan, sampul thumbnail akan otomatis diambil langsung dari YouTube.',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Publikasi',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat Video',
      type: 'text',
      rows: 3,
      description: 'Penjelasan singkat tentang isi kegiatan dalam video (opsional).',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'thumbnail',
      videoDuration: 'videoDuration',
      publishedAt: 'publishedAt',
    },
    prepare({ title, media, videoDuration, publishedAt }) {
      const dateStr = publishedAt ? new Date(publishedAt).toLocaleDateString('id-ID') : '';
      const dur = videoDuration ? `[${videoDuration}]` : '[Video]';
      return {
        title: title || 'Video Tanpa Judul',
        subtitle: [dur, dateStr].filter(Boolean).join(' • '),
        media,
      };
    },
  },
})
