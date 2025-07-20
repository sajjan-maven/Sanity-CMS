import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'logo',
    title: 'Logo',
    type: 'object',
    fields: [
      defineField({
        name: 'src',
        title: 'Image Source',
        type: 'image',
        // options: {
        //     hotspot: true,
        // },
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
    ],
  });