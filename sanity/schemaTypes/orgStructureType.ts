import {defineField, defineType} from 'sanity'

export const orgStructureType = defineType({
  name: 'orgStructure',
  title: 'Struktur Organisasi',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nama Lengkap',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'position',
      title: 'Jabatan',
      type: 'string',
      description: 'Contoh: Kepala Yayasan, Kepala Sekolah, Guru Kelas',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'motto',
      title: 'Motto Hidup',
      type: 'text',
      description: 'Motto hidup atau kutipan inspiratif dari pengurus/guru',
    }),
    defineField({
      name: 'image',
      title: 'Foto Profil',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'institution',
      title: 'Lembaga / Naungan',
      type: 'string',
      options: {
        list: [
          { title: 'Yayasan Hidayah', value: 'yayasan' },
          { title: 'PAUD Hidayah', value: 'paud' },
          { title: 'SD Hidayah', value: 'sd' },
        ],
        layout: 'radio',
      },
      initialValue: 'paud',
    }),
    defineField({
      name: 'section',
      title: 'Kelompok / Kategori Jabatan',
      type: 'string',
      description: 'Pilih kelompok penempatan di bagan struktur organisasi website.',
      options: {
        list: [
          // PAUD
          { title: '🌱 [PAUD] Kepala Sekolah', value: 'Kepala Sekolah' },
          { title: '🌱 [PAUD] Perwakilan Yayasan', value: 'Perwakilan Yayasan' },
          { title: '🌱 [PAUD] Tenaga Administrasi & Staf (TU, Operator, Satpam, Driver)', value: 'Tenaga Administrasi & Staf' },
          { title: '🌱 [PAUD] Dewan Guru / Pendidik', value: 'Dewan Guru' },

          // SD
          { title: '🎒 [SD] Pimpinan Sekolah (Kepala Sekolah)', value: 'Pimpinan Sekolah' },
          { title: '🎒 [SD] Yayasan & Komite Sekolah', value: 'Yayasan & Komite' },
          { title: '🎒 [SD] Manajemen & Kurikulum', value: 'Manajemen Sekolah' },
          { title: '🎒 [SD] Guru Kelas & Pendamping', value: 'Guru Kelas' },
          { title: '🎒 [SD] Guru Mata Pelajaran (Agama, PJOK, dll)', value: 'Guru Mata Pelajaran' },
          { title: '🎒 [SD] Guru TPQ', value: 'Guru TPQ' },
          { title: '🎒 [SD] Guru Tahfidz', value: 'Guru Tahfidz' },
          { title: '🎒 [SD] Tenaga Kependidikan & Pendukung', value: 'Tenaga Pendukung' },

          // Yayasan
          { title: '🏛️ [Yayasan] Dewan Pembina', value: 'Dewan Pembina' },
          { title: '🏛️ [Yayasan] Dewan Pengawas', value: 'Dewan Pengawas' },
          { title: '🏛️ [Yayasan] Pengurus Harian (Ketua, Sekretaris, Bendahara)', value: 'Pengurus Harian' },
          { title: '🏛️ [Yayasan] Sekbid Litbang', value: 'Litbang' },
          { title: '🏛️ [Yayasan] Sekbid Pendidikan', value: 'Pendidikan' },
          { title: '🏛️ [Yayasan] Sekbid Pengembangan Sarpras', value: 'Pengembangan Sarpras' },
          { title: '🏛️ [Yayasan] Sekbid Bidang Usaha', value: 'Bidang Usaha' },
          { title: '🏛️ [Yayasan] Sekbid Bidang Sosial', value: 'Bidang Sosial' },
        ],
      },
      validation: (rule) => rule.required().error('Silakan pilih kelompok jabatan untuk pengurus/guru ini.'),
    }),
    defineField({
      name: 'order',
      title: 'Urutan Posisi dalam Kelompok (Opsional)',
      type: 'number',
      description: 'Hanya diisi jika ingin mengatur siapa yang tampil lebih awal di antara guru dalam kelompok yang sama (contoh: 1, 2, 3). Boleh dikosongkan.',
      initialValue: 1,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'position',
      institution: 'institution',
      section: 'section',
      media: 'image',
    },
    prepare({ title, subtitle, institution, section, media }: any) {
      const instTag = institution ? `[${institution.toUpperCase()}]` : '';
      const secTag = section ? ` • ${section}` : '';
      return {
        title,
        subtitle: `${subtitle || ''} ${instTag}${secTag}`,
        media,
      }
    },
  },
})
