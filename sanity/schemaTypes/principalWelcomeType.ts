import { defineField, defineType } from 'sanity'

export const principalWelcomeType = defineType({
  name: 'principalWelcome',
  title: 'Sambutan Kepala Sekolah (Beranda)',
  type: 'document',
  fields: [
    defineField({
      name: 'welcomeTitle',
      title: 'Judul Seksi Tentang PAUD Hidayah',
      type: 'string',
      description: 'Contoh: Mendidik dengan Cinta, Melayani dengan Sepenuh Hati',
      initialValue: 'Mendidik dengan Cinta, Melayani dengan Sepenuh Hati',
    }),
    defineField({
      name: 'welcomeSubtitle',
      title: 'Teks Pengantar Sambutan',
      type: 'text',
      rows: 3,
      description: 'Teks pengantar di bawah judul seksi.',
      initialValue: 'Setiap anak adalah amanah dan anugrah yang istimewa. Dengan cinta sebagai landasan pendidikan, PAUD Hidayah berkomitmen mendukung tumbuh kembang ananda melalui pembiasaan akhlak mulia, pengalaman belajar yang bermakna, serta pengembangan potensi sesuai fitrah dan tahap perkembangannya.',
    }),
    defineField({
      name: 'principalName',
      title: 'Nama Kepala Sekolah',
      type: 'string',
      description: 'Contoh: Ustadzah Hj. Nur Laeli, S.Pd.',
      initialValue: 'Ustadzah Hj. Nur Laeli, S.Pd.',
    }),
    defineField({
      name: 'principalRole',
      title: 'Jabatan / Sub-judul',
      type: 'string',
      description: 'Contoh: Kepala Sekolah PAUD Hidayah',
      initialValue: 'Kepala Sekolah PAUD Hidayah',
    }),
    defineField({
      name: 'principalDedication',
      title: 'Masa Pengabdian / Keterangan Singkat',
      type: 'string',
      description: 'Contoh: Pengabdi Pendidikan Anak Usia Dini 30+ Tahun',
      initialValue: 'Pengabdi Pendidikan Anak Usia Dini 30+ Tahun',
    }),
    defineField({
      name: 'principalImage',
      title: 'Foto Resmi Kepala Sekolah',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Upload foto resmi Kepala Sekolah (format rasio 1:1 / persegi disarankan).',
    }),
    defineField({
      name: 'principalGreeting',
      title: 'Kutipan Pesan Sambutan Kepala Sekolah',
      type: 'text',
      rows: 4,
      description: 'Pesan sambutan hangat Kepala Sekolah yang tampil di kotak kutipan Beranda.',
      initialValue: 'Mendidik anak usia dini bukan sekadar mengisi botol kosong dengan angka dan huruf, melainkan menyalakan lentera tauhid dan rasa ingin tahu di dalam kalbu mereka. Kami menghadirkan suasana sekolah seperti rumah kedua yang sarat kegembiraan, kasih sayang, dan tuntunan keteladanan Rasulullah SAW.',
    }),
    defineField({
      name: 'schoolEstablished',
      title: 'Keterangan Naungan & Tahun Berdiri',
      type: 'string',
      description: 'Contoh: Yayasan Hidayah • Berdiri sejak 1968',
      initialValue: 'Yayasan Hidayah • Berdiri sejak 1968',
    }),
  ],
  preview: {
    select: {
      title: 'principalName',
      subtitle: 'principalRole',
      media: 'principalImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Sambutan Kepala Sekolah',
        subtitle: subtitle || 'Tampil di Beranda',
        media,
      }
    },
  },
})
