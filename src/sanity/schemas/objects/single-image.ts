import { Image } from "lucide-react";
import { defineField, defineType } from "sanity";
import { RatioInput, ratios } from "@/sanity/components/ratio-input";

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
          title: "Aspect Ratio",
          name: "aspectRatio",
          type: "string",
          options: {
            list: ratios.map(({ title, value }) => ({ title, value })),
            layout: 'radio',
          },
          components: { input: RatioInput },
          initialValue: 'square',
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
        defineField({
          name: 'enableBorder',
          type: 'boolean',
          title: 'Enable Border',
          initialValue: false
        }),
        defineField({
          title: "Border Style",
          name: "borderStyle",
          type: "string",
          options: {
            list: [
              { title: "Solid", value: "solid" },
              { title: "Dashed", value: "dashed" },
            ],
          },
          initialValue: 'dashed',
          hidden: ({ parent }) => parent?.enableBorder === false,
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