import { defineField, defineType } from 'sanity';
import { FaEnvelope } from 'react-icons/fa';

export default defineType({
  name: 'joinOurNewsletterBlock',
  title: 'Join Our Newsletter Block',
  type: 'object',
  icon: FaEnvelope,
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
      type: 'color',
      initialValue: { hex: '#E9E2D9' }
    }),
    defineField({
      name: 'successBorderColor',
      title: 'Success Border Color',
      type: 'color',
      initialValue: { hex: '#D3C3B2' }
    }),
    defineField({
      name: 'successTextColor',
      title: 'Success Text Color',
      type: 'color',
      initialValue: { hex: '#3D3123' }
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Email Subscribe',
        subtitle: 'Newsletter signup form'
      }
    }
  }
});