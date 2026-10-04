import { defineField, defineType } from 'sanity'
import { StarIcon } from '@sanity/icons'

export const fasilitasType = defineType({
  name: 'fasilitas',
  title: 'Fasilitas',
  type: 'document',
  icon: StarIcon,
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
      title: 'Nama Ikon (Material Symbol)',
      type: 'string',
      description: 'Masukkan nama ikon dari Google Material Symbols (contoh: meeting_room, sports_handball, mosque). Biarkan kosong jika tidak tahu.',
      initialValue: 'verified',
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
