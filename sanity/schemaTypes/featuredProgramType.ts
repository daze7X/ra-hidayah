import { defineField, defineType } from 'sanity'
import { MATERIAL_ICON_OPTIONS } from './iconOptions'

export const featuredProgramType = defineType({
  name: 'featuredProgram',
  title: 'Program Unggulan',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Program Unggulan',
      type: 'string',
      validation: (Rule) => Rule.required().error('Nama program wajib diisi'),
      description: 'Contoh: TPQ PAUD & Tahfidz Cilik, Character Building, Parenting Care, dll.',
    }),
    defineField({
      name: 'category',
      title: 'Label Kategori / Badge Kecil (Opsional)',
      type: 'string',
      description: 'Contoh: Spiritual, Kemitraan Ortu, Kurikulum Merdeka, Eksplorasi Alam',
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi / Ringkasan Program',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().error('Deskripsi program wajib diisi'),
      description: 'Jelaskan manfaat dan aktivitas program dalam 2-3 kalimat ringkas.',
    }),
    defineField({
      name: 'icon',
      title: 'Pilihan Ikon Program Unggulan',
      type: 'string',
      options: {
        list: MATERIAL_ICON_OPTIONS,
      },
      description: 'Pilih ikon visual yang sesuai dengan tema program unggulan.',
      initialValue: 'star',
    }),
    defineField({
      name: 'image',
      title: 'Foto / Ilustrasi Kegiatan (Opsional)',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Bisa upload foto dokumentasi kegiatan jika ada.',
    }),
    defineField({
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
      initialValue: 1,
      description: 'Angka lebih kecil akan tampil lebih awal di halaman depan (1, 2, 3, dst).',
    }),
    defineField({
      name: 'isActive',
      title: 'Status Aktif (Tampilkan di Beranda)',
      type: 'boolean',
      initialValue: true,
      options: {
        layout: 'switch',
      },
      description: 'Matikan (OFF) jika program ini sedang tidak ingin ditampilkan di beranda.',
    }),
  ],
  orderings: [
    {
      title: 'Urutan Tampil (Terkecil ke Terbesar)',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      order: 'order',
      media: 'image',
    },
    prepare({ title, subtitle, order, media }) {
      return {
        title: `${order ? `#${order} ` : ''}${title || 'Tanpa Nama'}`,
        subtitle: subtitle || 'Program Unggulan',
        media: media,
      }
    },
  },
})
