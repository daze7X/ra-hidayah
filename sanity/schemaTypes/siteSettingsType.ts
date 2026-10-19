import { defineField, defineType } from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Pengaturan Situs',
  type: 'document',
  fieldsets: [
    {
      name: 'pendekatanBelajar',
      title: '🌟 Judul & Pengantar Seksi Pendekatan Belajar (Beranda)',
      options: { collapsible: true, collapsed: false }
    }
  ],
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
    defineField({
      name: 'learningApproachBadge',
      title: 'Label Badge Seksi Pendekatan Belajar',
      type: 'string',
      fieldset: 'pendekatanBelajar',
      description: 'Teks badge kecil di atas judul seksi. Contoh: Pendekatan Belajar',
      initialValue: 'Pendekatan Belajar',
    }),
    defineField({
      name: 'learningApproachTitle',
      title: 'Judul Utama Seksi Pendekatan Belajar',
      type: 'string',
      fieldset: 'pendekatanBelajar',
      description: 'Judul besar seksi. Contoh: Membangun Karakter, Mengembangkan Potensi',
      initialValue: 'Membangun Karakter, Mengembangkan Potensi',
    }),
    defineField({
      name: 'learningApproachSubtitle',
      title: 'Deskripsi / Pengantar Seksi Pendekatan Belajar',
      type: 'text',
      rows: 3,
      fieldset: 'pendekatanBelajar',
      description: 'Uraian pengantar di bawah judul seksi.',
      initialValue: 'PAUD Hidayah menghadirkan pembelajaran Islami yang aktif, kreatif, dan menyenangkan untuk membentuk anak yang cerdas, ceria, mandiri, dan berakhlakul karimah.',
    }),
  ],
})
