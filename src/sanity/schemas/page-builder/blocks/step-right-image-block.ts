import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'stepRightImageBlock',
  title: 'Step Right Image Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
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
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'title',
              title: 'Step Title',
              type: 'string',
              validation: Rule => Rule.required()
            })
          ],
          preview: {
            select: {
              number: 'number',
              title: 'title'
            },
            prepare({ number, title }) {
              return {
                title: `Step ${number}: ${title || 'Untitled'}`
              }
            }
          }
        }
      ],
      validation: Rule => Rule.min(1).required()
    }),
    defineField({
      name: 'footnote',
      title: 'Footnote',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
        })
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'badgeColor',
      title: 'Badge Color',
      type: 'color',
    }),
    defineField({
      name: 'backgroundGradient',
      title: 'Background Gradient',
      type: 'object',
      fields: [
        defineField({
          name: 'topColor',
          title: 'Top Color',
          type: 'color'
        }),
        defineField({
          name: 'bottomColor',
          title: 'Bottom Color',
          type: 'color'
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Compliance Section',
        subtitle: 'Step Right Image Block'
      }
    }
  }
});