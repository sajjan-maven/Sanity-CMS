import { defineType, defineField } from "sanity";
import { RectangleHorizontal } from "lucide-react";

export default defineType({
  name: 'blogButtonObject',
  title: 'Link Button',
  type: 'object',
  fields: [
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      validation: Rule => Rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }).required()
    }),
    defineField({
      title: "Button Variant",
      name: "buttonVariant",
      type: "string",
      options: {
        list: [
          { title: "Primary", value: "primary" },
          { title: "Secondary", value: "secondary" },
        ],
      },
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: {
      title: 'buttonText',
      variant: 'buttonVariant',
      link: 'buttonLink',
    },
    prepare(selection) {
      const { title, variant, link } = selection
      return {
        title: title ?? 'No button text set',
        subtitle: `${variant || 'primary'} button - ${link || 'No link set'}`,
        media: RectangleHorizontal,
      }
    },
  },
})
