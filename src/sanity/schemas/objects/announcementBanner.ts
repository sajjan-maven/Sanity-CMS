import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'announcementBanner',
    title: 'Announcement Banner',
    type: 'object',
    fields: [
      defineField({
        name: 'show',
        title: 'Show Banner',
        type: 'boolean',
        initialValue: true,
      }),
      defineField({
        name: 'backgroundColor',
        title: 'Background Color',
        type: 'simplerColor',
      }),
      defineField({
        name: 'icon',
        title: 'Icon',
        type: 'image',
      }),
      defineField({
        name: 'textColor',
        title: 'Text Color',
        type: 'color',
      }),
      defineField({
        name: 'text',
        title: 'Banner Text',
        type: 'string',
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'linkColor',
        title: 'Link Color',
        type: 'color',
      }),
      defineField({
        name: 'linkText',
        title: 'Link Text',
        type: 'string',
      }),
      defineField({
        name: 'link',
        title: 'Link URL',
        type: 'url',
      }),
    ],
  });