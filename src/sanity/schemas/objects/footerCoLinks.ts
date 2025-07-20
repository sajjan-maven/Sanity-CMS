import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'footerCoLinks',
  title: 'Footer Corporate Links',
  type: 'object',
  fields: [
    defineField({
      name: 'companyNameMark',
      title: 'Company Name Mark',
      type: 'image',
    }),
    defineField({
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      initialValue: 'Copyright © 2025 Stitchflow, Inc.',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'coLinks',
      title: 'Corporate Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
              validation: Rule => Rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'businessEmail',
      title: 'Business Email',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
  ],
});
