import {DocumentTextIcon} from '@sanity/icons/DocumentText'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        })
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
    defineField({
      name: 'youtubeUrl',
      title: 'Tautan Video YouTube / Shorts (Opsional)',
      description: 'Masukkan link video YouTube atau YouTube Shorts jika ada dokumentasi video kegiatan ini.',
      type: 'url',
    }),
    defineField({
      name: 'tiktokUrl',
      title: 'Tautan Video TikTok (Opsional)',
      description: 'Masukkan link video TikTok jika ada dokumentasi di TikTok.',
      type: 'url',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Tautan Postingan / Reels Instagram (Opsional)',
      description: 'Masukkan link postingan atau video Reels Instagram jika ada dokumentasi di Instagram.',
      type: 'url',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
