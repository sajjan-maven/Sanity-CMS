import { Heading1 } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'headingObject',
  title: 'Heading',
  type: 'object',
  fields: [
    defineField({
      name: 'headingText',
      type: 'string',
      title: 'Heading',
    }),
    defineField({
      name: "headingSize",
      type: "string",
      title: "Size",
      options: {
        list: [
          { title: "H1", value: "h1" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
          { title: "H5", value: "h5" },
          { title: "H6", value: "h6" },
        ],
      },
      initialValue: 'h2',
    }),
  ],
  preview: {
    select: {
      title: 'headingText',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title ?? 'No title set. Add one inside this block',
        subtitle: 'Heading',
        media: Heading1,
      }
    },
  },
})