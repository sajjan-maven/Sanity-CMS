import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'iconHighlightBlock',
  title: 'Icon Highlight Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'The main heading for the section',
      validation: Rule => Rule.required()  // Added validation
    }),
    defineField({
      name: 'cards',
      title: 'Insight Cards',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Card Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'text',
              title: 'Card Text',
              type: 'text',
              rows: 3,
            }),
          ],
          preview: {
            select: {
              title: 'text',
              media: 'image',
            },
            prepare(selection) {
              return {
                title: selection.title || 'Untitled card',
                media: selection.media
              }
            }
          },
        },
      ],
      validation: Rule => Rule.min(1).required()
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Untitled Icon Highlight Block',
        subtitle: 'Icon Highlight Block'
      }
    }
  }
});