import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'stepProcessBlock',
  title: 'Step Process Block',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              title: 'Step Number',
              type: 'number',
              validation: Rule => Rule.required().min(1)
            }),
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
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              fields: [
                defineField({
                  name: 'width',
                  title: 'Display Width (px)',
                  type: 'number',
                  initialValue: 600,
                  validation: Rule => Rule.required().min(100).max(1200)
                }),
                defineField({
                  name: 'height',
                  title: 'Display Height (px)',
                  type: 'number',
                  initialValue: 400,
                  validation: Rule => Rule.required().min(100).max(1200)
                })
              ],
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'badgeColor',
              title: 'Badge Color',
              type: 'simplerColor',
            })
          ],
          preview: {
            select: {
              number: 'number',
              title: 'title',
              media: 'image'
            },
            prepare({ number, title, media }) {
              return {
                title: `Step ${number}: ${title || 'Untitled'}`,
                media
              }
            }
          }
        }
      ],
      validation: Rule => Rule.min(1).required()
    }),
    defineField({
      name: 'borderColor',
      title: 'Border Color',
      type: 'simplerColor',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'simplerColor',
    })
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title ? title : 'Step Section',
        subtitle: 'Steps Process Block'
      }
    }
  }
});