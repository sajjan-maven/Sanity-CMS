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
  ]
})