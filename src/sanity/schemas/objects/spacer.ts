import { BetweenHorizonalEnd } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
  name: 'spacerObject',
  title: 'Spacer',
  type: 'object',
  fields: [
    defineField({
      title: "Spacing",
      name: "spacing",
      type: "string",
      options: {
        list: [
          { title: "None", value: "none" },
          { title: "Small", value: "small" },
          { title: "Medium", value: "medium" },
          { title: "Large", value: "large" },
        ],
      },
      initialValue: 'small',
    }),
  ],
  preview: {
    select: {
      title: 'spacing',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: (title ?? 'No title set. Add one inside this block').charAt(0).toUpperCase() + 
              (title ?? 'No title set. Add one inside this block').slice(1),
        subtitle: 'Spacer',
        media: BetweenHorizonalEnd,
      }
    },
  },
})