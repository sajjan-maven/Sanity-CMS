import { defineField, defineType } from "sanity";

export default defineType({
  name: 'mobileNavigationSettings',
  title: 'Mobile Navigation Settings',
  type: 'document',
  fields: [
    defineField({
      title: 'Logo',
      name: 'navbarLogo',
      type: 'image',
    }),
  ]
})