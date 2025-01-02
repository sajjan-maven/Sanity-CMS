import { Shapes } from "lucide-react";
import { defineField, defineType } from "sanity";
import { fieldsets } from "../../misc/fieldsets";
import { fieldGroups } from "../../misc/field-groups";
import { paddingFields } from "../../misc/padding-fields";
import { buttonFields } from "../../misc/button-fields";

export default defineType({
  name: 'featureCardsBlock',
  title: 'Feature Cards',
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
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 4
            }),
            defineField({
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
            }),
            defineField({
              name: 'button',
              title: 'Button',
              type: 'object',
              fields: buttonFields
            })
          ],
        },
      ],
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
        subtitle: 'Feature Cards',
        media: Shapes,
      }
    },
  },
})