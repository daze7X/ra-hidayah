import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Menu Kelola Website')
    .items([
      // 1. Berita & Pengumuman
      S.listItem()
        .title('Berita & Pengumuman')
        .child(
          S.list()
            .title('Kelola Berita')
            .items([
              S.documentTypeListItem('post').title('Daftar Berita / Post'),
              S.documentTypeListItem('category').title('Kategori Berita'),
              S.documentTypeListItem('author').title('Penulis / Author'),
              S.divider(),
              S.listItem()
                .title('🌟 Berita yang Tampil di Beranda')
                .child(
                  S.document()
                    .schemaType('homeNewsSettings')
                    .documentId('4a75ead6-aa10-4bc0-be4c-17b4bc413f81')
                    .title('Pilih Berita & Judul yang Tampil di Beranda')
                ),
            ])
        ),

      // 2. Galeri Foto & Video (Folder Beranda & Semua Galeri)
      S.listItem()
        .title('Galeri Foto & Video')
        .child(
          S.list()
            .title('Kelola Galeri Foto & Video')
            .items([
              S.listItem()
                .title('🌟 Sorotan Beranda (Bento Grid 4 Foto)')
                .child(
                  S.documentList()
                    .title('4 Foto Sorotan di Beranda')
                    .filter('_type == "gallery" && isFeaturedHome == true')
                    .defaultOrdering([{ field: 'homeOrder', direction: 'asc' }])
                    .initialValueTemplates([
                      S.initialValueTemplateItem('gallery-featured-home')
                    ])
                ),
              S.divider(),
              S.listItem()
                .title('📸 Semua Galeri Foto (Halaman Galeri)')
                .child(
                  S.documentList()
                    .title('Semua Dokumentasi Foto Kegiatan')
                    .filter('_type == "gallery"')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                ),
              S.listItem()
                .title('🎥 Video Kegiatan (Halaman Galeri)')
                .child(
                  S.documentList()
                    .title('Semua Video Kegiatan Sekolah')
                    .filter('_type == "galleryVideo"')
                    .defaultOrdering([{ field: 'publishedAt', direction: 'desc' }])
                ),
            ])
        ),

      // 3. Fasilitas
      S.documentTypeListItem('fasilitas').title('Fasilitas Sekolah'),

      // 4. Program Pembelajaran & Ekstrakurikuler
      S.documentTypeListItem('programItem').title('📚 Program Pembelajaran'),

      // 5. Program Unggulan (Beranda)
      S.listItem()
        .title('⭐ Program Unggulan (Beranda)')
        .child(
          S.list()
            .title('Kelola Program Unggulan (Beranda)')
            .items([
              S.listItem()
                .title('📝 Judul & Pengantar Seksi')
                .child(
                  S.document()
                    .schemaType('featuredProgramSettings')
                    .documentId('featuredProgramSettings')
                    .title('Ubah Judul & Pengantar Seksi')
                ),
              S.divider(),
              S.listItem()
                .title('🗂️ Daftar Kartu Program (6 Pilar)')
                .child(
                  S.documentList()
                    .title('Kartu Program Unggulan')
                    .filter('_type == "featuredProgram"')
                    .defaultOrdering([{ field: 'order', direction: 'asc' }])
                ),
            ])
        ),

      // 6. Testimoni Wali Murid (Beranda)
      S.documentTypeListItem('testimonial').title('💬 Testimoni Wali Murid'),

      S.divider(),

      // 4. Struktur Organisasi - DIPISAH MENJADI FOLDER / SUB-MENU
      S.listItem()
        .title('Struktur Organisasi')
        .child(
          S.list()
            .title('Pilih Lembaga / Unit')
            .items([
              // Folder Yayasan
              S.listItem()
                .title('🏛️ Pengurus Yayasan Hidayah')
                .child(
                  S.list()
                    .title('Kelola Pengurus Yayasan')
                    .items([
                      S.listItem()
                        .title('📝 Sampul & Slogan Halaman')
                        .child(
                          S.document()
                            .schemaType('orgPageSettings')
                            .documentId('orgSettings-yayasan')
                            .title('Sampul & Slogan Struktur Yayasan')
                        ),
                      S.divider(),
                      S.listItem()
                        .title('👥 Daftar Pengurus Yayasan')
                        .child(
                          S.documentList()
                            .title('Pengurus Yayasan Hidayah')
                            .filter('_type == "orgStructure" && institution == "yayasan"')
                            .defaultOrdering([
                              {field: 'section', direction: 'asc'},
                              {field: 'order', direction: 'asc'},
                              {field: 'name', direction: 'asc'}
                            ])
                            .initialValueTemplates([
                              S.initialValueTemplateItem('orgStructure-yayasan')
                            ])
                        ),
                    ])
                ),

              // Folder PAUD
              S.listItem()
                .title('🌱 Pendidik & Staf PAUD Hidayah')
                .child(
                  S.list()
                    .title('Kelola Pendidik & Staf PAUD')
                    .items([
                      S.listItem()
                        .title('📝 Sampul & Slogan Halaman')
                        .child(
                          S.document()
                            .schemaType('orgPageSettings')
                            .documentId('orgSettings-paud')
                            .title('Sampul & Slogan Struktur PAUD')
                        ),
                      S.divider(),
                      S.listItem()
                        .title('👥 Daftar Pendidik & Staf PAUD')
                        .child(
                          S.documentList()
                            .title('Pendidik & Staf PAUD Hidayah')
                            .filter('_type == "orgStructure" && (institution == "paud" || !defined(institution))')
                            .defaultOrdering([
                              {field: 'section', direction: 'asc'},
                              {field: 'order', direction: 'asc'},
                              {field: 'name', direction: 'asc'}
                            ])
                            .initialValueTemplates([
                              S.initialValueTemplateItem('orgStructure-paud')
                            ])
                        ),
                    ])
                ),

              // Folder SD
              S.listItem()
                .title('🎒 Struktur SD Hidayah')
                .child(
                  S.list()
                    .title('Kelola Struktur SD')
                    .items([
                      S.listItem()
                        .title('📝 Sampul & Slogan Halaman')
                        .child(
                          S.document()
                            .schemaType('orgPageSettings')
                            .documentId('orgSettings-sd')
                            .title('Sampul & Slogan Struktur SD')
                        ),
                      S.divider(),
                      S.listItem()
                        .title('👥 Daftar Struktur SD')
                        .child(
                          S.documentList()
                            .title('Struktur SD Hidayah')
                            .filter('_type == "orgStructure" && institution == "sd"')
                            .defaultOrdering([
                              {field: 'section', direction: 'asc'},
                              {field: 'order', direction: 'asc'},
                              {field: 'name', direction: 'asc'}
                            ])
                            .initialValueTemplates([
                              S.initialValueTemplateItem('orgStructure-sd')
                            ])
                        ),
                    ])
                ),

              S.divider(),

              // Semua Anggota Gabungan
              S.listItem()
                .title('📋 Semua Anggota (Gabungan)')
                .child(
                  S.documentList()
                    .title('Semua Anggota')
                    .filter('_type == "orgStructure"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                ),
            ])
        ),

      // 5. Tentang & Sambutan (Folder dengan 2 Sub-Menu: Tentang & Sambutan)
      S.listItem()
        .title('Tentang & Sambutan')
        .child(
          S.list()
            .title('Kelola Tentang & Sambutan')
            .items([
              // Sub-folder 1: Tentang (Profil Lembaga)
              S.listItem()
                .title('Profil & Tentang Lembaga')
                .child(
                  S.list()
                    .title('Pilih Lembaga / Unit')
                    .items([
                      S.listItem()
                        .title('🏛️ Yayasan Hidayah (/profil/yayasan)')
                        .child(
                          S.document()
                            .schemaType('institutionProfile')
                            .documentId('profile-yayasan')
                            .title('Profil & Sejarah Yayasan Hidayah')
                        ),
                      S.listItem()
                        .title('🌱 PAUD Hidayah (/profil/paud)')
                        .child(
                          S.document()
                            .schemaType('institutionProfile')
                            .documentId('profile-paud')
                            .title('Profil, Visi, Misi & Sejarah PAUD Hidayah')
                        ),
                      S.listItem()
                        .title('🎒 SD Hidayah (/profil/sd)')
                        .child(
                          S.document()
                            .schemaType('institutionProfile')
                            .documentId('profile-sd')
                            .title('Profil, Visi, Misi & Sejarah SD Islam Hidayah')
                        ),
                    ])
                ),

              S.divider(),

              // Sub-folder 2: Sambutan
              S.listItem()
                .title('Sambutan')
                .child(
                  S.list()
                    .title('Kelola Sambutan')
                    .items([
                      S.listItem()
                        .title('🌟 Sambutan Kepala Sekolah (Beranda)')
                        .child(
                          S.document()
                            .schemaType('principalWelcome')
                            .documentId('principalWelcome')
                            .title('Sambutan Kepala Sekolah (Tampil di Beranda)')
                        ),
                    ])
                ),
            ])
        ),

      S.divider(),

      // 6. Pengaturan Situs
      S.documentTypeListItem('siteSettings').title('Pengaturan Situs'),
    ])
