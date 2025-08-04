import { defineField, defineType } from 'sanity';
import { FaReddit } from 'react-icons/fa';

export default defineType({
  name: 'socialReviewBlock',
  title: 'Social Review Block',
  type: 'object',
  icon: FaReddit,
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'background',
      title: 'Background',
      type: 'object',
      fields: [
        defineField({
          name: 'color',
          title: 'Background Color',
          type: 'color',
        }),
        defineField({
          name: 'gradient',
          title: 'Use Gradient?',
          type: 'boolean',
          initialValue: true,
          description: 'Adds gradient effect to background'
        })
      ]
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
          initialValue: 40
        }),
        defineField({
          name: 'bottom',
          title: 'Bottom Padding',
          type: 'number',
          initialValue: 40
        })
      ]
    }),
    defineField({
      name: 'avatarImage',
      title: 'Avatar Image',
      type: 'image',
      description: 'Social app icon (default: Reddit 32x32)',
    }),
    defineField({
      name: 'comments',
      title: 'Comments',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'username',
              title: 'Username',
              type: 'string',
              initialValue: 'r/user',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'content',
              title: 'Comment Content',
              type: 'text',
              rows: 3,
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'width',
              title: 'Card Width',
              type: 'string',
              options: {
                list: [
                  { title: '1/3 width', value: 'md:w-1/3' },
                  { title: '2/3 width', value: 'md:w-2/3' },
                  { title: 'Full width', value: 'w-full' }
                ],
                layout: 'radio'
              },
              initialValue: 'md:w-1/3'
            })
          ],
          preview: {
            select: {
              title: 'username',
              subtitle: 'width',
            },
          },
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
        title: title || 'Social Review Section',
        subtitle: 'Social Review Section'
      }
    }
  }
});