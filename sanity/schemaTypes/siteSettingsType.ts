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
      title: 'Jam Operasional',
      type: 'string',
      description: 'Contoh: Senin - Jumat: 07.30 - 11.30 WIB',
    }),
    defineField({
      name: 'admissionStatus',
      title: 'Status Penerimaan Siswa Baru',
      type: 'string',
      description: 'Teks banner di atas, contoh: Penerimaan Siswa Baru TA 2025/2026 Telah Dibuka',
    })
  ],
})
