import { defineField, defineType } from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimoni Wali Murid',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Orang Tua / Wali',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Contoh: Zahrotun Istiqomah, S.Kom',
    }),
    defineField({
      name: 'role',
      title: 'Peran / Wali dari Siswa',
      type: 'string',
      validation: (rule) => rule.required(),
      description: 'Contoh: Ibunda Alka – Kelompok RA B',
    }),
    defineField({
      name: 'quote',
      title: 'Isi Testimoni / Pesan & Kesan',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
      description: 'Pengalaman atau apresiasi orang tua terhadap proses belajar di PAUD Hidayah.',
    }),
    defineField({
      name: 'rating',
      title: 'Rating Bintang',
      type: 'number',
      initialValue: 5,
      validation: (rule) => rule.min(1).max(5),
      description: 'Nilai bintang dari 1 sampai 5 (default: 5)',
    }),
    defineField({
      name: 'image',
      title: 'Foto Orang Tua / Ananda (Opsional)',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Foto profil orang tua atau ananda (format persegi/lingkaran disarankan).',
    }),
    defineField({
      name: 'order',
      title: 'Urutan Tampil',
      type: 'number',
      initialValue: 1,
      description: 'Urutan posisi tampil di halaman beranda (angka lebih kecil tampil lebih dulu).',
    }),
    defineField({
      name: 'isActive',
      title: 'Tampilkan di Website',
      type: 'boolean',
      initialValue: true,
      description: 'Aktifkan (ON) untuk menampilkan di Beranda, matikan (OFF) untuk menyembunyikan sementara.',
      options: {
        layout: 'switch',
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
    },
  },
})
