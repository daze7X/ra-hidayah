import { defineField, defineType } from 'sanity'
import { MATERIAL_ICON_OPTIONS } from './iconOptions'

export const orgPageSettingsType = defineType({
  name: 'orgPageSettings',
  title: 'Pengaturan Sampul & Slogan Struktur',
  type: 'document',
  groups: [
    { name: 'hero', title: '1. Sampul Hero Section' },
    { name: 'slogan', title: '2. Bingkai Hijau (Slogan Penutup)' },
  ],
  fields: [
    defineField({
      name: 'institution',
      title: 'Lembaga / Unit',
      type: 'string',
      options: {
        list: [
          { title: 'Yayasan Hidayah', value: 'yayasan' },
          { title: 'PAUD Hidayah', value: 'paud' },
          { title: 'SD Hidayah', value: 'sd' },
        ],
        layout: 'radio',
      },
      readOnly: true,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Nama Pengaturan',
      type: 'string',
      readOnly: true,
      description: 'Identitas dokumen pengaturan di Sanity Studio.',
    }),

    // ================= GROUP 1: SAMPUL HERO SECTION =================
    defineField({
      name: 'heroBadge',
      title: 'Badge Kecil Hero',
      type: 'string',
      group: 'hero',
      description: 'Contoh: TENTANG KAMI / STRUKTUR ORGANISASI',
      initialValue: 'TENTANG KAMI',
    }),
    defineField({
      name: 'heroMotto',
      title: 'Motto Singkat di Samping Badge',
      type: 'string',
      group: 'hero',
      description: 'Kutipan pendek berlatar hijau muda di sebelah badge.',
      initialValue: 'Mendidik dengan Cinta, Melayani dengan Sepenuh Hati',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Judul Besar Sampul (Hero)',
      type: 'string',
      group: 'hero',
      description: 'Contoh: Bersama Membentuk Generasi Berkarakter',
      initialValue: 'Bersama Membentuk Generasi Berkarakter',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Deskripsi Pengantar',
      type: 'text',
      rows: 3,
      group: 'hero',
      description: 'Teks penjelasan di bawah judul besar.',
      initialValue: 'Mengenal para pengurus dan pendidik yang menjadi bagian dari perjalanan pendidikan di PAUD Hidayah.',
    }),
    defineField({
      name: 'heroImage',
      title: 'Foto Sampul Bersama (Bingkai Blob)',
      type: 'image',
      group: 'hero',
      options: {
        hotspot: true,
      },
      description: 'Upload foto bersama dewan guru / pengurus yang akan tampil di dalam bingkai lengkung artistik.',
    }),

    // ================= GROUP 2: BINGKAI HIJAU (SLOGAN PENUTUP) =================
    defineField({
      name: 'quoteIcon',
      title: 'Pilihan Ikon Slogan',
      type: 'string',
      group: 'slogan',
      options: {
        list: MATERIAL_ICON_OPTIONS,
      },
      description: 'Ikon di atas tulisan slogan pada kotak hijau (contoh: favorite / mosque / eco).',
      initialValue: 'favorite',
    }),
    defineField({
      name: 'quoteText',
      title: 'Teks Slogan / Kutipan Utama',
      type: 'string',
      group: 'slogan',
      description: 'Contoh: "Mendidik dengan Cinta, Melayani dengan Sepenuh Hati."',
      initialValue: 'Mendidik dengan Cinta, Melayani dengan Sepenuh Hati.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'quoteSubtext',
      title: 'Keterangan di Bawah Slogan',
      type: 'string',
      group: 'slogan',
      description: 'Contoh: Keluarga Besar Pendidik & Tenaga Kependidikan PAUD Hidayah Tayu',
      initialValue: 'Keluarga Besar Pendidik & Tenaga Kependidikan PAUD Hidayah Tayu',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'heroTitle',
      media: 'heroImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Pengaturan Sampul Struktur',
        subtitle: subtitle || '',
        media,
      }
    },
  },
})
