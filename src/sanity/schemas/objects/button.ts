import { RectangleHorizontal } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'buttonObject',
  title: 'Button',
  type: 'object',
  fields: [
    defineField({
      name: 'buttonText',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      title: "Variant",
      name: "buttonVariant",
      type: "string",
      options: {
        list: [
          { title: "Default", value: "default" },
          { title: "Underline", value: "underline" },
        ],
      },
      initialValue: 'default',
    }),
    defineField({
      title: "Button Type",
      name: "buttonType",
      type: "string",
      options: {
        list: [
          { title: "Internal", value: "internal" },
          { title: "External", value: "external" },
          { title: "File Download", value: "fileDownload" },
        ],
      },
      initialValue: 'internal',
    }),
  ],
  preview: {
    select: {
      title: 'buttonText',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title ?? 'No title set. Add one inside this block',
        subtitle: 'Button',
        media: RectangleHorizontal,
      }
    },
  },
})