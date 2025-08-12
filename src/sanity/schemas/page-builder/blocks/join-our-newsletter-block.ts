import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'joinOurNewsletterBlock',
  title: 'Join Our Newsletter Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Join our newsletter'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      initialValue: 'Get notified about product updates, free IT tools, and expert tips.'
    }),
    defineField({
      name: 'placeholder',
      title: 'Input Placeholder',
      type: 'string',
      initialValue: 'Business email'
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Subscribe'
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'string',
      initialValue: 'Thank you for subscribing to our newsletter!'
    }),
    defineField({
      name: 'processingText',
      title: 'Processing Text',
      type: 'string',
      initialValue: 'Processing...'
    }),
    defineField({
      name: 'spacing',
      title: 'Spacing',
      type: 'object',
      fields: [
        defineField({
          name: 'top',
          title: 'Top Padding',
          type: 'number',
          initialValue: 40
        }),
        defineField({
          name: 'bottom',
          title: 'Bottom Padding',
          type: 'number',
          initialValue: 80
        })
      ]
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'simplerColor',
      initialValue: { hex: '#E9E2D9' }
    }),
    defineField({
      name: 'successBorderColor',
      title: 'Success Border Color',
      type: 'simplerColor',
      initialValue: { hex: '#D3C3B2' }
    }),
    defineField({
      name: 'successTextColor',
      title: 'Success Text Color',
      type: 'simplerColor',
      initialValue: { hex: '#3D3123' }
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Newsletter signup form',
        subtitle: 'Join Our Newsletter Block'
      }
    }
  }
});