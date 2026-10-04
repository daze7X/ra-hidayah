import {defineField, defineType} from 'sanity'

export const orgStructureType = defineType({
  name: 'orgStructure',
  title: 'Struktur Organisasi',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Lengkap',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Jabatan',
      type: 'string',
      description: 'Contoh: Kepala Yayasan, Kepala Sekolah, Guru Kelas',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'motto',
      title: 'Motto Hidup',
      type: 'text',
      description: 'Motto hidup atau kutipan inspiratif dari pengurus/guru',
    }),
    defineField({
      name: 'image',
      title: 'Foto Profil',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'order',
      title: 'Urutan Tampilan',
      type: 'number',
      description: 'Angka kecil tampil di atas (misal: 1 = Kepala Sekolah)',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      media: 'image',
    },
  },
})
