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
      name: 'pricingBlockReference',
      title: 'Referenced Pricing Block',
      description: 'Changes made to the referenced pricing block will be reflected here',
      type: 'reference',
      to: [{ type: 'pricingItem' }],
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'simplerColor',
    }),
  ],
  initialValue: {
    pricingBlockReference: {
      _type: 'reference',
      _ref: 'pricingItemABC'
    }
  },
  preview: {
    select: {
      title: 'pricingBlockReference.title',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title || 'Referenced Pricing Block',
        subtitle: 'Pricing Block',
      }
    },
  },
});