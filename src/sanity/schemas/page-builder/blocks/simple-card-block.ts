import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'simpleCardBlock',
  title: 'Simple Card Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: Rule => Rule.required(),
      initialValue: 'How Stitchflow works'
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Card Title',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4,
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true
              },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string'
                })
              ]
            }),
            defineField({
              name: 'backgroundColor',
              title: 'Card Background Color',
              type: 'simplerColor',
            })
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image'
            }
          }
        }
      ],
      validation: Rule => Rule.min(1).max(3)
    })
  ],
  preview: {
    select: {
      title: 'title',
      cards: 'cards'
    },
    prepare({ title, cards }) {
      return {
        title: title || 'Simple Card Block',
        subtitle: 'Simple Card Block'
      }
    }
  }
});