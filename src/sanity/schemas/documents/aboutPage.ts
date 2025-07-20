import {defineField, defineType} from 'sanity'
import {HomeIcon} from '@sanity/icons'

export default defineType({
  name: 'aboutPage',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeader',
      title: 'Hero Header',
      type: 'object',
      description: 'Nail the core promise in 8-12 words.',
      fields: [
        defineField({
          name: 'mainHeadingText',
          title: 'Main Heading Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'maxWidth',
          title: 'Max Width',
          type: 'number',
          initialValue: 600,
          description: 'Max width of text container.',
        }),
        defineField({
          name: 'fontSize',
          title: 'Font Size',
          type: 'number',
          initialValue: 32,
          validation: (rule) => rule.min(12).max(64),
          description: 'Font size of text.',
        }),
      ],
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'object',
      description: 'One punchy sentence. Aim for 20-30 words.',
      fields: [
        defineField({
          name: 'mainHeadingText',
          title: 'Main Heading Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'maxWidth',
          title: 'Max Width',
          type: 'number',
          initialValue: 600,
          description: 'Max width of text container.',
        }),
        defineField({
          name: 'fontSize',
          title: 'Font Size',
          type: 'number',
          initialValue: 32,
          validation: (rule) => rule.min(12).max(64),
          description: 'Font size of text.',
        }),
      ],
    }),
    defineField({
      name: 'founderList',
      title: 'Founder List',
      type: 'array',
      of: [
        defineField({
          name: 'founderBlock',
          title: 'Founder Block',
          type: 'object',
          fields: [
            defineField({
              name: 'founderName',
              title: 'Founder Name',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'founderRole',
              title: 'Founder Role',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'founderImage',
              title: 'Founder Image',
              type: 'image',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'founderQuote',
              title: 'Founder Quote',
              type: 'text',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'founderName',
              subtitle: 'founderRole',
              media: 'founderImage',
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'ourInvestors',
      title: 'Our Investors',
      type: 'array',
      of: [
        defineField({
          name: 'investorBlock',
          title: 'Investor Block',
          type: 'object',
          fields: [
            defineField({
              name: 'investorName',
              title: 'Investor Name',
              type: 'string',
              description: 'Name of the investor.',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'investorImage',
              title: 'Investor Image',
              type: 'image',
              description: 'Image of the investor.',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'investorName',
              media: 'investorImage',
            },
          },
        }),
      ],
    }),
  ],
  preview: {
    select: {
      heroHeader: 'heroHeader',
      title: 'heroHeader.mainHeadingText',
      image: 'founderList.0.founderImage',
    },
    prepare({
      title,
      heroHeader,
      image,
    }: {
      title?: string;
      heroHeader?: { mainHeadingText?: string };
      image?: any;
    }) {
      return {
        title: title || heroHeader?.mainHeadingText || 'About Page',
        media: image || HomeIcon,
      }
    },
  },
});