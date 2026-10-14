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
      name: 'showAdmissionBanner',
      title: 'Tampilkan Banner Pengumuman',
      type: 'boolean',
      description: 'Aktifkan (ON) untuk menampilkan banner pengumuman di atas hero website, atau matikan (OFF) untuk menyembunyikannya.',
      initialValue: false,
      options: {
        layout: 'switch',
      },
    }),
    defineField({
      name: 'admissionStatus',
      title: 'Status Penerimaan Siswa Baru / Teks Pengumuman',
      type: 'string',
      description: 'Teks banner pengumuman (contoh: Penerimaan Siswa Baru TA 2025/2026 Telah Dibuka). Banner hanya akan tampil jika sakelar di atas dalam posisi ON dan teks ini diisi.',
    })
  ],
})
