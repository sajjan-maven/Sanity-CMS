import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'itToolsCardBlock',
  title: 'IT Tools Card Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'IT Tools & Resources'
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'simplerColor',
    }),
    defineField({
      name: 'spacing',
      title: 'Spacing',
      type: 'object',
      fields: [
        defineField({
          name: 'top',
          title: 'Top Padding',
          type: 'number',
          initialValue: 80
        }),
        defineField({
          name: 'bottom',
          title: 'Bottom Padding',
          type: 'number',
          initialValue: 80
        })
      ]
    }),
    defineField({
      name: 'tools',
      title: 'Tools',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Category Label',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'labelBackground',
              title: 'Label Background Color',
              type: 'simplerColor',
            }),
            defineField({
              name: 'title',
              title: 'Tool Title',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'comingSoon',
              title: 'Mark as Coming Soon',
              type: 'boolean',
              initialValue: false
            }),
            defineField({
              name: 'url',
              title: 'Tool URL',
              type: 'string',
              initialValue: '/tools/',
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
              name: 'buttonText',
              title: 'Button Text',
              type: 'string',
              initialValue: 'Use for free'
            }),
          ]
        }
      ],
      validation: Rule => Rule.min(1).max(12)
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'IT Tools Grid',
        subtitle: 'IT Tools Card Block'
      }
    }
  }
});