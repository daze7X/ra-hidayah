import {defineField, defineType} from 'sanity'

export const schoolProfileType = defineType({
  name: 'schoolProfile',
  title: 'Profil, Visi & Misi PAUD',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Dokumen',
      type: 'string',
      initialValue: 'Profil Utama PAUD Hidayah',
      readOnly: true,
      description: 'Halaman pengaturan profil, visi, misi, dan sejarah untuk Halaman Tentang (/profil/paud).',
    }),
    defineField({
      name: 'heroImage',
      title: 'Foto Hero Profil PAUD (Kubah Mihrab)',
      type: 'image',
      description: 'Foto kegiatan ananda pada bingkai kubah lengkung di bagian atas Halaman Profil PAUD (/profil/paud).',
      options: {
        hotspot: true,
      },
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
        title: 'Profil, Visi, Misi & Sejarah PAUD (Halaman Tentang)',
      }
    }
  }
})
