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
            ])
        ),

      // 2. Galeri Foto (Folder Beranda & Semua Galeri)
      S.listItem()
        .title('Galeri Foto')
        .child(
          S.list()
            .title('Kelola Galeri Foto')
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
                    .title('Semua Dokumentasi Kegiatan Sekolah')
                    .filter('_type == "gallery"')
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
                .title('📝 Judul & Pengantar Seksi Beranda')
                .child(
                  S.document()
                    .schemaType('siteSettings')
                    .documentId('siteSettings')
                    .title('Judul & Pengantar Seksi Pendekatan Belajar')
                ),
              S.divider(),
              S.documentTypeListItem('featuredProgram').title('Daftar Kartu Program Unggulan (6 Pilar)'),
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
                  S.documentList()
                    .title('Pengurus Yayasan Hidayah')
                    .filter('_type == "orgStructure" && institution == "yayasan"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                    .initialValueTemplates([
                      S.initialValueTemplateItem('orgStructure-yayasan')
                    ])
                ),

              // Folder PAUD
              S.listItem()
                .title('🌱 Pendidik & Staf PAUD Hidayah')
                .child(
                  S.documentList()
                    .title('Pendidik & Staf PAUD Hidayah')
                    .filter('_type == "orgStructure" && (institution == "paud" || !defined(institution))')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                    .initialValueTemplates([
                      S.initialValueTemplateItem('orgStructure-paud')
                    ])
                ),

              // Folder SD
              S.listItem()
                .title('🎒 Struktur SD Hidayah')
                .child(
                  S.documentList()
                    .title('Struktur SD Hidayah')
                    .filter('_type == "orgStructure" && institution == "sd"')
                    .defaultOrdering([{field: 'order', direction: 'asc'}])
                    .initialValueTemplates([
                      S.initialValueTemplateItem('orgStructure-sd')
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

      // 5. Profil Sekolah
      S.documentTypeListItem('schoolProfile').title('Profil Sekolah & Sambutan'),

      S.divider(),

      // 6. Pengaturan Situs
      S.documentTypeListItem('siteSettings').title('Pengaturan Situs'),
    ])
