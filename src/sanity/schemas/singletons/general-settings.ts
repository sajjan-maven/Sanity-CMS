import { defineField, defineType } from "sanity";

export default defineType({
  name: 'generalSettings',
  title: 'General Settings',
  type: 'document',
  fields: [
    defineField({
      name: "siteTitle",
      type: "string",
      title: "Site Title",
    }),
    defineField({
      title: 'Logo',
      name: 'siteLogo',
      type: 'image',
    }),
    defineField({
      name: 'homePage',
      title: 'Home Page',
      type: 'reference',
      description: 'Choose which page you would like to display as the homepage.',
      to: [{ type: 'page' }],
    }),
  ]
})