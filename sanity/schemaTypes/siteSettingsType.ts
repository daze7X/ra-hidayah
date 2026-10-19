import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Pengaturan Situs',
  type: 'document',
  fields: [
    defineField({
      name: 'schoolName',
      title: 'Nama Sekolah',
      type: 'string',
    }),
    defineField({
      name: 'foundationName',
      title: 'Nama Yayasan',
      type: 'string',
    }),
    defineField({
      name: 'accreditation',
      title: 'Akreditasi',
      type: 'string',
      description: 'Contoh: Terakreditasi A (Unggul) BAN-PDM',
    }),
    defineField({
      name: 'address',
      title: 'Alamat Lengkap',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'phone',
      title: 'Nomor Telepon / WA',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Alamat Email',
      type: 'string',
    }),
    defineField({
      name: 'npsn',
      title: 'NPSN',
      type: 'string',
    }),
    defineField({
      name: 'nsm',
      title: 'NSM',
      type: 'string',
    }),
    defineField({
      name: 'openHours',
      title: 'Jam Operasional / Waktu Belajar',
      type: 'text',
      rows: 3,
      description: 'Jadwal belajar sekolah (bisa gunakan tombol Enter untuk baris baru)',
    }),
    defineField({
      name: 'heroImage',
      title: 'Foto Latar Hero Beranda Utama',
      type: 'image',
      description: 'Foto latar belakang gedung atau suasana sekolah pada bagian Hero Beranda utama (format landscape disarankan).',
      options: {
        hotspot: true,
      },
    }),
  ],
})
