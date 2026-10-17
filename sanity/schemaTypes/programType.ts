import { defineField, defineType } from 'sanity'

export const programType = defineType({
  name: 'programItem',
  title: 'Program Pembelajaran',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Program',
      type: 'string',
      validation: (Rule) => Rule.required().error('Nama program wajib diisi'),
      description: 'Contoh: Toddler, Kelompok Bermain (KB), RA-A, RA-B, Tahfidz, TPQ, Ekstrakurikuler',
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL (Tautan Halaman)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error('Slug URL wajib diisi'),
      description: 'Harus sesuai: toddler, kb, ra-a, ra-b, tahfidz, tpq, atau ekstrakurikuler',
    }),
    defineField({
      name: 'badge',
      title: 'Label Badge / Sasaran Usia',
      type: 'string',
      description: 'Contoh: Toddler (Usia 1,5–3 Tahun), Usia 3 - 4 Tahun, Program Qur\'ani, dll.',
    }),
    defineField({
      name: 'headline',
      title: 'Judul Utama (Tagline Hero)',
      type: 'string',
      description: 'Contoh: Ruang Tumbuh & Eksplorasi Sensori Balita, Menumbuhkan Cinta Al-Qur\'an',
    }),
    defineField({
      name: 'shortDesc',
      title: 'Deskripsi Singkat / Ringkasan',
      type: 'text',
      rows: 2,
      description: 'Ditampilkan di kartu halaman depan dan kartu katalog program.',
    }),
    defineField({
      name: 'image',
      title: 'Foto Sampul Utama Program',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Foto dokumentasi kegiatan anak yang mewakili program ini.',
    }),
    defineField({
      name: 'about',
      title: 'Tentang Program (Penjelasan Lengkap)',
      type: 'text',
      rows: 4,
      description: 'Ulasan komprehensif mengenai metode, pendekatan, dan suasana belajar.',
    }),
    defineField({
      name: 'goals',
      title: 'Tujuan & Sasaran Stimulasi',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Daftar sasaran atau capaian pembelajaran anak dalam program ini.',
    }),
    defineField({
      name: 'featuresTitle',
      title: 'Judul Seksi Fokus / Keunggulan',
      type: 'string',
      initialValue: 'Fokus Stimulasi & Keunggulan Program',
    }),
    defineField({
      name: 'features',
      title: 'Poin Fokus / Keunggulan',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'icon', title: 'Nama Ikon (Material Symbols)', type: 'string', initialValue: 'check_circle' }),
            defineField({ name: 'title', title: 'Judul Poin / Nama Cabang', type: 'string' }),
            defineField({ name: 'badge', title: 'Label / Badge (Opsional, contoh: Kinestetik & Seni)', type: 'string' }),
            defineField({ name: 'desc', title: 'Keterangan Singkat / Uraian Kegiatan', type: 'string' }),
            defineField({ name: 'image', title: 'Foto Dokumentasi Nyata (Opsional)', type: 'image', options: { hotspot: true } }),
            defineField({ 
              name: 'tags', 
              title: 'Kata Kunci / Tag Manfaat (Opsional)', 
              type: 'array', 
              of: [{ type: 'string' }],
              options: { layout: 'tags' }
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'desc',
              media: 'image',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Dokumentasi Galeri Kegiatan',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'image', title: 'Foto Kegiatan', type: 'image', options: { hotspot: true } }),
            defineField({ name: 'caption', title: 'Keterangan Foto', type: 'string' }),
          ],
          preview: {
            select: {
              title: 'caption',
              media: 'image',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
      initialValue: 1,
    }),
    defineField({
      name: 'isActive',
      title: 'Status Aktif',
      type: 'boolean',
      initialValue: true,
      options: {
        layout: 'switch',
      },
    }),
  ],
  orderings: [
    {
      title: 'Urutan Tampil',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'badge',
      media: 'image',
    },
  },
})
