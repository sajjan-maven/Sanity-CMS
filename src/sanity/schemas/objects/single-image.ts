import { Image } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'singleImageObject',
  title: 'Single Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        defineField({
          name: 'altText',
          title: 'Alternative Text',
          type: 'string'
        }),
        defineField({
          title: "Corner Radius",
          name: "cornerRadius",
          type: "string",
          options: {
            list: [
              { title: "Rounded", value: "rounded" },
              { title: "Straight", value: "straight" },
            ],
          },
          initialValue: 'rounded',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'image',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title.altText ?? 'No title set. Add one inside this block',
        subtitle: 'Image',
        media: Image,
      }
    },
  },
})