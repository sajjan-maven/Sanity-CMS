import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'featuredTestimonialBlock',
  title: 'Featured Testimonial Block',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      title: 'Testimonial Quote',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Name',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'position',
          title: 'Position',
          type: 'string',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'avatar',
          title: 'Avatar',
          type: 'image',
          options: {
            hotspot: true
          },
          validation: Rule => Rule.required()
        })
      ]
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      description: 'leave empty for default gradient color',
      type: 'simplerColor',
    }),
    defineField({
      name: 'quoteIcon',
      title: 'Quote Icon',
      type: 'image',
      description: 'Leave empty for default icon',
      options: {
        hotspot: true
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          initialValue: 'Quote icon'
        })
      ]
    }),
  ],
  preview: {
    select: {
      author: 'author.name',
    },
    prepare({ author }) {
      return {
        title: `Testimonial: ${author}`,
        subtitle: 'Featured Testimonial Block',
      }
    }
  }
});