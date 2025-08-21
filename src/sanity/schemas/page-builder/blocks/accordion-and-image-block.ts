import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'accordionAndImageBlock',
  title: 'Accordion And Image Block',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Right Side Image',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required().error('An image is required')
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Feature Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Feature Description',
              type: 'array',
              of: [{ type: 'string' }],
            })
          ]
        }
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Accordion And Image Block',
        subtitle: 'Accordion And Image Block'
      }
    },
  },
});