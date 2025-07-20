import { defineField, defineType } from "sanity";

export default defineType({
    name: 'ctaButton',
    title: 'CTA Button',
    type: 'object',
    fields: [
      defineField({
        name: 'text',
        title: 'Button Text',
        type: 'string',
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'link',
        title: 'Button Link',
        type: 'string',
        description: 'The URL path this button should link to (e.g., "/demo")',
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'variant',
        title: 'Button Variant',
        type: 'string',
        options: {
          list: [
            { title: 'Primary', value: 'primary' },
            { title: 'Secondary', value: 'secondary' },
            { title: 'Danger', value: 'danger' },
            { title: 'Outline', value: 'outline' },
          ],
        },
        validation: Rule => Rule.required(),
      }),
    ],
  });