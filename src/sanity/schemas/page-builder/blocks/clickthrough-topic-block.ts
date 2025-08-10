import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'clickthroughTopicBlock',
  title: 'Clickthrough Topic Block',
  type: 'object',
  fields: [
    defineField({
      name: 'useCases',
      title: 'Use Cases',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'backgroundColor',
              title: 'Background Color',
              type: 'simplerColor',
              options: { disableAlpha: true },
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'embedUrl',
              title: 'Embed URL',
              type: 'url',
              description: 'URL for the embedded content',
              validation: Rule => Rule.required().uri({
                scheme: ['https'],
                allowRelative: false
              })
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'backgroundColor'
            },
            prepare({ title }) {
              return {
                title: title || 'Untitled Use Case',
                media: 'media'
              }
            }
          }
        }
      ],
      validation: Rule => Rule.min(1).required()
    }),
    defineField({
      name: 'sectionBackgroundColor',
      title: 'Section Background Color',
      type: 'simplerColor',
    //   options: { disableAlpha: true },
    //   initialValue: { hex: '#F8F5F3' }
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Clickthrough Section',
        subtitle: 'clickthrough Topic Block'
      }
    }
  }
});