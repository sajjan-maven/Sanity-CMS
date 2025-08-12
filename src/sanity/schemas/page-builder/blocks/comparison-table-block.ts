import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'comparisonTableBlock',
  title: 'Comparison Table Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Why Stitchflow is the only option',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'leftColumn',
      title: 'Left Column',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'IDPs/Workflows/SaaS Management',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'icon',
          title: 'Icon',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              initialValue: 'Manual process icon'
            })
          ],
          validation: Rule => Rule.required()
        })
      ]
    }),
    defineField({
      name: 'rightColumn',
      title: 'Right Column',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Stitchflow',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'icon',
          title: 'Icon',
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
              initialValue: 'Stitchflow icon'
            })
          ],
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'backgroundColor',
          title: 'Background Color',
          type: 'simplerColor',
        })
      ]
    }),
    defineField({
      name: 'rows',
      title: 'Comparison Rows',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'leftText',
              title: 'Left Column Text',
              type: 'text',
              rows: 2,
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'rightText',
              title: 'Right Column Text',
              type: 'text',
              rows: 2,
              validation: Rule => Rule.required()
            })
          ],
          preview: {
            select: {
              leftText: 'leftText',
              rightText: 'rightText'
            },
            prepare({ leftText, rightText }) {
              return {
                title: 'Comparison Row',
                subtitle: `${leftText?.substring(0, 30)}... vs ${rightText?.substring(0, 30)}...`
              }
            }
          }
        }
      ],
      validation: Rule => Rule.min(1).required()
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Comparison Table',
        subtitle: `Comparison Table`
      }
    }
  }
});