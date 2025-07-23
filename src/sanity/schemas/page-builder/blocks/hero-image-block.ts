import { defineField, defineType } from 'sanity';
import { FaImage } from 'react-icons/fa';

export default defineType({
  name: 'heroImageBlock',
  title: 'Hero Image Block',
  type: 'object',
  icon: FaImage,
  fields: [
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
      rows: 2,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          initialValue: 'Product showcase'
        })
      ],
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      options: { disableAlpha: true },
      initialValue: { hex: '#E4DBD0' }
    }),
    defineField({
      name: 'showButton',
      title: 'Show Button?',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'object',
      fields: [
        defineField({
          name: 'text',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Get Started'
        }),
        defineField({
          name: 'link',
          title: 'Button Link',
          type: 'url',
          validation: Rule => Rule.uri({
            allowRelative: true,
            scheme: ['https', 'http', 'mailto', 'tel']
          })
        }),
        defineField({
          name: 'variant',
          title: 'Button Variant',
          type: 'string',
          options: {
            list: [
              { title: 'Primary', value: 'primary' },
              { title: 'Secondary', value: 'secondary' },
              { title: 'Outline', value: 'outline' }
            ],
            layout: 'radio'
          },
          initialValue: 'primary'
        })
      ],
      hidden: ({ parent }) => !parent?.showButton
    })
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        title: title || 'Hero Image Block',
        subtitle: title ? 'Hero Image Block' : '',
        media
      }
    }
  }
});