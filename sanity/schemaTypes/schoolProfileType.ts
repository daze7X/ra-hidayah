import {defineField, defineType} from 'sanity'

export const schoolProfileType = defineType({
  name: 'schoolProfile',
  title: 'Profil Sekolah (Visi Misi)',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Profil',
      type: 'string',
      initialValue: 'Profil Utama RA Hidayah',
      readOnly: true,
      description: 'Ini adalah halaman pengaturan profil sekolah.'
    }),
    defineField({
      name: 'motto',
      title: 'Motto Sekolah',
      type: 'string',
    }),
    defineField({
      name: 'history',
      title: 'Sejarah Singkat / Latar Belakang',
      type: 'blockContent',
    }),
    defineField({
      name: 'vision',
      title: 'Visi',
      type: 'text',
    }),
    defineField({
      name: 'mission',
      title: 'Misi',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Daftar misi sekolah',
    }),
    defineField({
      name: 'extracurriculars',
      title: 'Program Ekstrakurikuler',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Nama Ekstrakurikuler', type: 'string'},
            {name: 'coach', title: 'Nama Pelatih', type: 'string'},
          ]
        }
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Pengaturan Profil, Visi, & Misi',
      }
    }
  }
})
