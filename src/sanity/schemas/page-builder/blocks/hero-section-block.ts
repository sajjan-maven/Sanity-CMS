import { defineField, defineType } from 'sanity';
import { FaImage } from 'react-icons/fa';

export default defineType({
  name: 'heroSectionBlock',
  title: 'Hero Section Block',
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
      name: 'titleWidth',
      title: 'Title Width',
      type: 'number',
      initialValue: 1000,
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'descriptionWidth',
      title: 'Description Width',
      type: 'number',
      initialValue: 1000,
      validation: Rule => Rule.required()
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
          initialValue: 'Get Started',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'link',
          title: 'Button Link',
          type: 'string',
          description: "example '/demo'",
          initialValue: '/',
          validation: Rule => Rule.required()
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
        }),
        defineField({
          name: 'buttonBelowSpacing',
          title: 'Button Below Spacing',
          type: 'number',
          initialValue: 16
        }),
      ],
      hidden: ({ parent }) => !parent?.showButton,
    }),
    defineField({
      name: 'showImage',
      title: 'Show Image ?',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        defineField({
          name: 'height',
          title: 'Height',
          type: 'number',
          description: 'Necessary to prevent layout shift',
          initialValue: 406,
        }),
        defineField({
          name: 'width',
          title: 'Width',
          type: 'number',
          description: 'Necessary to prevent layout shift',
          initialValue: 1053,
        })
      ],
      hidden: ({ parent }) => !parent?.showImage
    }),
    defineField({
      name: 'modifySpacing',
      title: 'View Spacing values',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'spacing',
      title: 'Spacing',
      type: 'object',
      fields: [
        defineField({
          name: 'topSpacing',
          title: 'Overall Top Spacing',
          type: 'number',
          initialValue: 48
        }),
        defineField({
          name: 'bottomSpacing',
          title: 'Overall Bottom Spacing',
          type: 'number',
          initialValue: 0
        }),
        defineField({
          name: 'titleBelowSpacing',
          title: 'Title Below Spacing',
          type: 'number',
          initialValue: 24
        }),
        defineField({
          name: 'descriptionBelowSpacing',
          title: 'Description Below Spacing',
          type: 'number',
          initialValue: 16
        }),
        defineField({
          name: 'imageBelowSpacing',
          title: 'Image Below Spacing',
          type: 'number',
          initialValue: 0
        }),
      ],
      hidden: ({ parent }) => !parent?.modifySpacing
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
      description: "Background color for the hero section (Default: #E4DBD0)",
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image'
    },
    prepare({ title, media }) {
      return {
        title: title || 'Hero Section Block',
        subtitle: 'Hero Section Block',
        media
      }
    }
  }
});