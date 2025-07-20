import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'navbar',
    title: 'Navbar',
    type: 'document',
    fields: [
      defineField({ 
        name: 'logo',
        title: 'Logo',
        type: 'logo',
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'menuItems',
        title: 'Menu Items',
        type: 'array',
        of: [{ type: 'menuItem' }],
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'ctaButton',
        title: 'Call to Action Button',
        type: 'ctaButton',
        validation: Rule => Rule.required(),
      }),
    ],
    preview: {
      prepare() {
        return {
          title: 'Header Configuration',
        };
      },
    },
  });