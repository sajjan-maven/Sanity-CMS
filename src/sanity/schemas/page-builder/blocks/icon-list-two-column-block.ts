import { defineField, defineType } from 'sanity';
import { FaListUl } from 'react-icons/fa';

export default defineType({
  name: 'iconListTwoColumnBlock',
  title: 'Icon List Two Column Block',
  type: 'object',
  icon: FaListUl,
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
              options: { hotspot: false },
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
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
        title: heading || 'Compliance Details',
        subtitle: `Icon List Two Column Block`
      }
    }
  }
});