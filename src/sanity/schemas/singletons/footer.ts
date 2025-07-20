import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'footer',
  title: 'Footer Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'footerCTA', 
      title: 'Footer CTA',
      type: 'footerCTA',
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'footerLinks',
    }),
    defineField({
      name: 'footerCoLinks',
      title: 'Footer Corporate Links',
      type: 'footerCoLinks',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Settings',
      }
    },
  },
})