import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'pricingBlock',
  title: 'Pricing Block',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      description: 'Leave empty for no title',
    }),
    defineField({
      name: 'freePilotCard',
      title: 'Free Pilot Card',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Card Title',
          type: 'string',
          initialValue: 'Free Pilot',
        }),
        defineField({
          name: 'subtitle',
          title: 'Card Subtitle',
          type: 'string',
          initialValue: 'See results in 30 days.',
        }),
        defineField({
          name: 'features',
          title: 'Features List',
          type: 'array',
          of: [{ type: 'string' }],
          initialValue: [
            'Done-for-you service model',
            'Full audit across users and apps',
            'Unlimited integrations',
            'License & offboarding gap detection',
            'ROI and risk reduction report',
            'Guided onboarding & tailored recommendations',
            'Enterprise-grade security & compliance',
            'Dedicated success team & custom implementation',
          ],
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Start Your Free Pilot',
        }),
        defineField({
          name: 'buttonLink',
          title: 'Button Link',
          type: 'string',
          initialValue: '/demo',
        }),
      ],
    }),
    defineField({
      name: 'afterPilotCard',
      title: 'After Free Pilot Card',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Card Title',
          type: 'string',
          initialValue: 'After Free Pilot',
        }),
        defineField({
          name: 'price',
          title: 'Price',
          type: 'string',
          initialValue: '5',
        }),
        defineField({
          name: 'priceUnit',
          title: 'Price Unit',
          type: 'string',
          initialValue: '/employee/mo',
        }),
      ],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'color',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Pricing Card',
        subtitle: 'Pricing Block'
      }
    },
  },
});