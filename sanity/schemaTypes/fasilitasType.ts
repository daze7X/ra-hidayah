import { defineField, defineType } from 'sanity'
import { MATERIAL_ICON_OPTIONS } from './iconOptions'

export const fasilitasType = defineType({
  name: 'fasilitas',
  title: 'Fasilitas',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Fasilitas',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Fasilitas',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Pilihan Ikon Fasilitas',
      type: 'string',
      options: {
        list: MATERIAL_ICON_OPTIONS,
      },
      description: 'Pilih ikon visual yang paling menggambarkan fasilitas ini.',
      initialValue: 'apartment',
    }),
    defineField({
      name: 'image',
      title: 'Foto Fasilitas',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Urutan',
      type: 'number',
      description: 'Angka urutan untuk mengatur posisi tampilan (contoh: 1, 2, 3)',
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'description',
    },
  },
})
