import { defineField, defineType } from 'sanity'

export const featuredProgramSettingsType = defineType({
  name: 'featuredProgramSettings',
  title: 'Pengaturan Seksi Program Unggulan',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Label Badge Seksi',
      type: 'string',
      description: 'Teks badge kecil di atas judul seksi. Contoh: PENDEKATAN BELAJAR',
      initialValue: 'Pendekatan Belajar',
    }),
    defineField({
      name: 'title',
      title: 'Judul Utama Seksi',
      type: 'string',
      description: 'Judul besar seksi. Contoh: Membangun Karakter, Mengembangkan Potensi',
      initialValue: 'Membangun Karakter, Mengembangkan Potensi',
    }),
    defineField({
      name: 'subtitle',
      title: 'Deskripsi / Pengantar Seksi',
      type: 'text',
      rows: 3,
      description: 'Uraian pengantar di bawah judul seksi.',
      initialValue: 'PAUD Hidayah menghadirkan pembelajaran Islami yang aktif, kreatif, dan menyenangkan untuk membentuk anak yang cerdas, ceria, mandiri, dan berakhlakul karimah.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Judul & Pengantar Seksi Program Unggulan (Beranda)',
      }
    },
  },
})
