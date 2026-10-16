import {defineField, defineType} from 'sanity'

export const schoolProfileType = defineType({
  name: 'schoolProfile',
  title: 'Profil Sekolah & Sambutan',
  type: 'document',
  fieldsets: [
    {
      name: 'principal',
      title: '🌟 Sambutan Kepala Sekolah (Tampil di Beranda)',
      options: { collapsible: true, collapsed: false }
    }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Profil',
      type: 'string',
      initialValue: 'Profil Utama PAUD Hidayah',
      readOnly: true,
      description: 'Ini adalah halaman pengaturan profil sekolah.'
    }),
    defineField({
      name: 'principalName',
      title: 'Nama Kepala Sekolah',
      type: 'string',
      fieldset: 'principal',
      description: 'Contoh: Nur Laeli, S.Pd',
      initialValue: 'Nur Laeli, S.Pd'
    }),
    defineField({
      name: 'principalRole',
      title: 'Jabatan / Sub-judul',
      type: 'string',
      fieldset: 'principal',
      description: 'Contoh: Kepala Sekolah PAUD Hidayah',
      initialValue: 'Kepala Sekolah PAUD Hidayah'
    }),
    defineField({
      name: 'principalDedication',
      title: 'Masa Pengabdian / Keterangan Singkat',
      type: 'string',
      fieldset: 'principal',
      description: 'Contoh: Pengabdi Pendidikan Anak Usia Dini 30+ Tahun',
      initialValue: 'Pengabdi Pendidikan Anak Usia Dini 30+ Tahun'
    }),
    defineField({
      name: 'principalImage',
      title: 'Foto Kepala Sekolah',
      type: 'image',
      fieldset: 'principal',
      options: {
        hotspot: true
      },
      description: 'Upload foto resmi Kepala Sekolah (format rasio 1:1 / persegi disarankan)'
    }),
    defineField({
      name: 'principalGreeting',
      title: 'Kutipan / Teks Sambutan Kepala Sekolah',
      type: 'text',
      rows: 4,
      fieldset: 'principal',
      description: 'Pesan atau kutipan sambutan Kepala Sekolah yang tampil di Beranda.',
    }),
    defineField({
      name: 'schoolEstablished',
      title: 'Keterangan Naungan & Tahun Berdiri',
      type: 'string',
      fieldset: 'principal',
      description: 'Contoh: Yayasan Hidayah • Berdiri sejak 1968',
      initialValue: 'Yayasan Hidayah • Berdiri sejak 1968'
    }),
    defineField({
      name: 'welcomeSubtitle',
      title: 'Teks Pengantar Sambutan',
      type: 'text',
      rows: 3,
      fieldset: 'principal',
      description: 'Teks di bawah judul "Tumbuh Harmonis dalam Iman, Ilmu & Cinta"',
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
        title: 'Pengaturan Profil, Visi, Misi & Sambutan',
      }
    }
  }
})
