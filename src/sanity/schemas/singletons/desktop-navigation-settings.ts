import { defineField, defineType } from "sanity";

export default defineType({
  name: 'desktopNavigationSettings',
  title: 'Desktop Navigation Settings',
  type: 'document',
  fields: [
    defineField({
      title: 'Logo',
      name: 'navbarLogo',
      type: 'image',
    }),
  ]
})