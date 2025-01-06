import { Shapes } from "lucide-react";
import { defineField, defineType } from "sanity";
import { fieldsets } from "../../misc/fieldsets";
import { fieldGroups } from "../../misc/field-groups";
import { paddingFields } from "../../misc/padding-fields";

export default defineType({
  name: 'featuresMinimalBlock',
  title: 'Features (Minimal)',
  type: 'object',
  fieldsets: [ ...fieldsets ],
  groups: [ ...fieldGroups ],
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      description: 'Buttons will be displayed below the main heading.',
      of: [{ type: 'buttonObject' }],
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'enableBorderTop',
      title: 'Enable Border Top',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: "cornerRadiusTop",
      title: "Corner Radius Top",
      type: "string",
      options: {
        list: [
          { title: "Rounded", value: "rounded" },
          { title: "Straight", value: "straight" },
        ],
      },
      initialValue: 'rounded',
      hidden: ({ parent }) => parent?.enableBorderTop === false,
    }),
    defineField({
      name: 'enableBorderBottom',
      title: 'Enable Border Bottom',
      type: 'boolean',
    }),
    defineField({
      name: "cornerRadiusBottom",
      title: "Corner Radius Bottom",
      type: "string",
      options: {
        list: [
          { title: "Rounded", value: "rounded" },
          { title: "Straight", value: "straight" },
        ],
      },
      initialValue: 'rounded',
      hidden: ({ parent }) => parent?.enableBorderBottom === false,
    }),
    ...paddingFields
  ],
  preview: {
    select: {
      title: 'heading',
      media: '',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title ?? 'No title set. Add one inside this block',
        subtitle: 'Features',
        media: Shapes,
      }
    },
  },
})