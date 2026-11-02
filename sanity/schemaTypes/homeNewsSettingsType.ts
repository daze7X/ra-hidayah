import { defineArrayMember, defineField, defineType } from 'sanity'

export const homeNewsSettingsType = defineType({
  name: 'homeNewsSettings',
  title: 'Pengaturan Berita Beranda',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Label Badge Seksi',
      type: 'string',
      description: 'Teks badge kecil di atas judul seksi. Contoh: Informasi & Kegiatan',
      initialValue: 'Informasi & Kegiatan',
    }),
    defineField({
      name: 'title',
      title: 'Judul Utama Seksi',
      type: 'string',
      description: 'Judul besar seksi berita pada beranda. Contoh: Kabar, Program & Agenda Ceria',
      initialValue: 'Kabar, Program & Agenda Ceria',
    }),
    defineField({
      name: 'selectedPosts',
      title: 'Pilih Berita yang Ditampilkan di Beranda (Maksimal 3)',
      type: 'array',
      description: 'Pilih secara manual hingga 3 berita yang ingin Anda tampilkan di Beranda. Urutan kartu di website akan mengikuti urutan daftar ini (bisa digeser naik/turun). Jika dibiarkan kosong, sistem akan otomatis menampilkan 3 berita paling baru.',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'post' }],
        }),
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Pengaturan Berita Beranda',
        subtitle: 'Atur judul, badge, dan pilihan 3 berita yang tampil di beranda',
      }
    },
  },
})
