import { defineField, defineType } from "sanity";

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: "siteTitle",
      type: "string",
      title: "Site Title",
    }),
  ]
})