import { defineField, defineType } from 'sanity';
import { FaListUl } from 'react-icons/fa';

export default defineType({
  name: 'iconListBlock',
  title: 'Icon List Block',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: Rule => Rule.required()
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
              name: 'icon',
              title: 'Icon',
              type: 'image',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required()
            })
          ],
          preview: {
            select: {
              title: 'title',
              media: 'icon'
            },
            prepare({ title, media }) {
              return {
                title: title || 'Untitled Feature',
                media
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
      heading: 'heading',
    },
    prepare({ heading }) {
      return {
        title: heading,
        subtitle: 'Icon List Block'
      }
    }
  }
});