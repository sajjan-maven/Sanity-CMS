import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'footerCTA',
  title: 'Footer CTA',
  type: 'object',
  fields: [
    defineField({ 
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call to Action Button',
      type: 'ctaButton',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'desktopImage',
      title: 'Desktop Image',
      type: 'object',
      fields: [
        defineField({
          name: 'src',
          title: 'Image Source',
          type: 'image',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'width',
          title: 'Width',
          type: 'number',
          initialValue: 109,
          validation: Rule => Rule.required().positive(),
        }),
        defineField({
          name: 'height',
          title: 'Height',
          type: 'number',
          initialValue: 24,
          validation: Rule => Rule.required().positive(),
        }),
      ]
    }),
    defineField({
      name: 'mobileImage',
      title: 'Mobile Image',
      type: 'object',
      fields: [
        defineField({
          name: 'src',
          title: 'Image Source',
          type: 'image',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: Rule => Rule.required(),
        }),
        defineField({
          name: 'width',
          title: 'Width',
          type: 'number',
          initialValue: 109,
          validation: Rule => Rule.required().positive(),
        }),
        defineField({
          name: 'height',
          title: 'Height',
          type: 'number',
          initialValue: 24,
          validation: Rule => Rule.required().positive(),
        }),
      ]
    }),
  ],
});