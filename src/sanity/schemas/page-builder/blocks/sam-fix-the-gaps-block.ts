import { defineType, defineField } from "sanity";

export default defineType({
  name: "samFixTheGapsBlock",
  title: "SAM Fix The Gaps Block",
  type: "object",
  fields: [
    defineField({
      name: "title",
      title: "Main Title",
      type: "string",
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "accordionItems",
      title: "Accordion Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "heading", title: "Heading", type: "string" },
            { name: "subheading", title: "Subheading", type: "string" },
            {
              name: "icon",
              title: "Icon",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "image",
              title: "Image",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "subsections",
              title: "Subsections",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    { name: "title", title: "Title", type: "string" },
                    { name: "desc", title: "Description", type: "text" },
                  ],
                },
              ],
            },
            { name: "button", title: "Button Text", type: "string" },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "subtitle",
    },
  },
});