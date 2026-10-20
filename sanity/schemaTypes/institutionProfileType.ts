import { defineField, defineType } from 'sanity'
import { MATERIAL_ICON_OPTIONS } from './iconOptions'

export const institutionProfileType = defineType({
  name: 'institutionProfile',
  title: 'Profil Lembaga (Halaman Tentang)',
  type: 'document',
  groups: [
    { name: 'hero', title: '1. Hero Section' },
    { name: 'history', title: '2. Profil & Sejarah' },
    { name: 'visionMission', title: '3. Visi & Misi' },
    { name: 'banner', title: '4. Banner Kebersamaan (Bawah)' },
    { name: 'extra', title: '5. Fitur Tambahan & Prestasi' },
  ],
  fields: [
    // Info Lembaga
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
      name: 'pageTitle',
      title: 'Nama / Judul Dokumen',
      type: 'string',
      readOnly: true,
      description: 'Identitas dokumen di Sanity Studio.',
    }),

    // ================= GROUP 1: HERO SECTION =================
    defineField({
      name: 'heroBadge',
      title: 'Badge / Label Hero',
      type: 'string',
      group: 'hero',
      description: 'Contoh: Tentang PAUD Hidayah / Yayasan Pendidikan Islam',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Judul Utama Hero (Baris 1)',
      type: 'string',
      group: 'hero',
      description: 'Contoh: Tumbuh Ceria, / Menebar Manfaat,',
    }),
    defineField({
      name: 'heroTitleHighlight',
      title: 'Judul Utama Hero Berwarna (Baris 2)',
      type: 'string',
      group: 'hero',
      description: 'Teks dengan warna aksen kuning. Contoh: Belajar Bermakna / Membina Ummah',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Deskripsi Pengantar Hero',
      type: 'text',
      rows: 3,
      group: 'hero',
      description: 'Deskripsi singkat profil lembaga yang tampil di bawah judul hero.',
    }),
    defineField({
      name: 'heroPills',
      title: 'Poin Sorotan Hero (Pills)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'hero',
      description: 'Contoh: ✦ Berkarakter Islami, ✦ Ramah Anak, ✦ Kreatif dan Menyenangkan',
    }),
    defineField({
      name: 'heroImage',
      title: 'Foto Hero Utama (Bingkai Mihrab / Kubah)',
      type: 'image',
      group: 'hero',
      options: { hotspot: true },
      description: 'Foto kegiatan yang tampil dalam bingkai lengkung khas islami di sisi kanan hero.',
    }),

    // ================= GROUP 2: PROFIL & SEJARAH =================
    defineField({
      name: 'historyTitle',
      title: 'Judul Seksi Sejarah',
      type: 'string',
      group: 'history',
      description: 'Contoh: Profil & Perjalanan PAUD Hidayah',
    }),
    defineField({
      name: 'historyContent',
      title: 'Narasi Lengkap Profil & Sejarah',
      type: 'blockContent',
      group: 'history',
      description: 'Teks narasi sejarah lembaga. Anda bisa menambahkan beberapa paragraf, teks tebal, dan kutipan.',
    }),
    defineField({
      name: 'milestones',
      title: 'Tonggak Sejarah (Timeline Milestones)',
      type: 'array',
      group: 'history',
      description: 'Urutan peristiwa sejarah penting dari awal berdiri hingga masa kini.',
      of: [
        {
          type: 'object',
          name: 'milestoneItem',
          title: 'Poin Tonggak Sejarah',
          fields: [
            { name: 'year', title: 'Tahun / Periode', type: 'string', validation: (rule) => rule.required() },
            { name: 'title', title: 'Judul Capaian / Peristiwa', type: 'string', validation: (rule) => rule.required() },
            { name: 'description', title: 'Keterangan Peristiwa', type: 'text', rows: 2 },
            { name: 'badge', title: 'Badge Label (Opsional)', type: 'string' },
            { name: 'isCurrent', title: 'Tandai sebagai Masa Kini (Titik Berdenyut Aktif)?', type: 'boolean', initialValue: false },
          ],
          preview: {
            select: {
              title: 'year',
              subtitle: 'title',
            },
            prepare({ title, subtitle }) {
              return {
                title: `${title} - ${subtitle || ''}`,
              }
            },
          },
        },
      ],
    }),

    // ================= GROUP 3: VISI & MISI =================
    defineField({
      name: 'vision',
      title: 'Kutipan Teks Visi',
      type: 'text',
      rows: 3,
      group: 'visionMission',
      description: 'Pernyataan visi utama lembaga.',
    }),
    defineField({
      name: 'visionSubtitle',
      title: 'Penjelasan Tambahan Visi (Opsional)',
      type: 'text',
      rows: 2,
      group: 'visionMission',
    }),
    defineField({
      name: 'mission',
      title: 'Daftar Misi',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'visionMission',
      description: 'Poin-poin misi lembaga. Dapat ditambah, diubah, atau diurutkan ulang.',
    }),
    defineField({
      name: 'goals',
      title: 'Tujuan Pokok / Nilai Utama (Opsional)',
      type: 'array',
      of: [{ type: 'string' }],
      group: 'visionMission',
    }),

    // ================= GROUP 4: BANNER KEBERSAMAAN =================
    defineField({
      name: 'bannerImage',
      title: 'Foto Banner Dokumentasi Kebersamaan',
      type: 'image',
      group: 'banner',
      options: { hotspot: true },
      description: 'Foto panorama kebersamaan keluarga besar sekolah/lembaga di bagian bawah halaman.',
    }),
    defineField({
      name: 'bannerBadge',
      title: 'Badge Banner',
      type: 'string',
      group: 'banner',
      description: 'Contoh: Kebersamaan Sekolah / Keluarga Besar Yayasan',
    }),
    defineField({
      name: 'bannerTitle',
      title: 'Judul Banner',
      type: 'string',
      group: 'banner',
      description: 'Contoh: Keluarga Besar Murid & Dewan Guru PAUD Hidayah',
    }),
    defineField({
      name: 'bannerSubtitle',
      title: 'Keterangan Banner',
      type: 'text',
      rows: 2,
      group: 'banner',
      description: 'Kalimat penjelas atau doa yang menyertai foto kebersamaan.',
    }),

    // ================= GROUP 5: KHUSUS SD / PRESTASI (OPSIONAL) =================
    defineField({
      name: 'identitySnapshot',
      title: 'Informasi Ringkas Lembaga (Kartu Snapshot)',
      type: 'object',
      group: 'extra',
      fields: [
        { name: 'npsn', title: 'NPSN', type: 'string' },
        { name: 'schoolStatus', title: 'Status Sekolah', type: 'string' },
        { name: 'establishedDate', title: 'Tanggal Berdiri', type: 'string' },
        { name: 'principalName', title: 'Kepala Sekolah / Ketua', type: 'string' },
        { name: 'location', title: 'Lokasi Singkat', type: 'string' },
        { name: 'websiteUrl', title: 'Alamat Website Resmi', type: 'string' },
      ],
    }),
    defineField({
      name: 'adiwiyataAchievements',
      title: 'Penghargaan & Prestasi Adiwiyata',
      type: 'array',
      group: 'extra',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'year', title: 'Tahun', type: 'string' },
            { name: 'level', title: 'Tingkatan (Kabupaten / Provinsi / Nasional)', type: 'string' },
            { name: 'title', title: 'Nama Penghargaan', type: 'string' },
            { name: 'desc', title: 'Keterangan Singkat', type: 'text', rows: 2 },
            { 
              name: 'icon', 
              title: 'Pilihan Ikon', 
              type: 'string',
              options: {
                list: MATERIAL_ICON_OPTIONS,
              },
              initialValue: 'verified',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'level',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'pageTitle',
      subtitle: 'institution',
      media: 'heroImage',
    },
    prepare({ title, subtitle, media }) {
      const label = subtitle === 'yayasan' ? 'Yayasan Hidayah' : subtitle === 'paud' ? 'PAUD Hidayah' : subtitle === 'sd' ? 'SD Hidayah' : subtitle
      return {
        title: title || 'Profil Lembaga',
        subtitle: label,
        media,
      }
    },
  },
})
