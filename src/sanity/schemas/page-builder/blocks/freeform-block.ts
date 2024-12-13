import { Shapes } from "lucide-react";
import { defineField, defineType } from "sanity";
import { fieldsets } from "../../misc/fieldsets";
import { fieldGroups } from "../../misc/field-groups";
import { SpacingInput, spacings } from "@/sanity/components/spacing-input";

export default defineType({
  name: 'freeformBlock',
  title: 'Freeform',
  type: 'object',
  fieldsets: [ ...fieldsets ],
  groups: [ ...fieldGroups ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      title: "Columns Per Row",
      name: "columnsPerRow",
      type: "string",
      options: {
        list: [
          { title: "2", value: "2" },
          { title: "3", value: "3" },
          { title: "4", value: "4" },
        ],
      },
      initialValue: '2',
    }),
    defineField({
      name: 'columns',
      title: 'Columns',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({
            name: 'title',
            type: 'string',
            title: 'Column Title',
            description: 'For internal purposes.'
          }),
          defineField({
            title: "Spacing Between Items",
            name: "spacing",
            type: "string",
            description: 'Add some default spacing between items (optional).',
            options: {
              list: spacings.map(({ title, value }) => ({ title, value })),
              layout: 'radio',
            },
            components: { input: SpacingInput },
            initialValue: 'small',
          }),
          defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [
              defineField({ 
                name: 'spacer', 
                type: 'spacerObject', 
                title: 'Spacer', 
              }),
              defineField({ 
                name: 'heading', 
                type: 'headingObject', 
                title: 'Heading', 
              }),
              defineField({ 
                name: 'richText', 
                type: 'richTextObject', 
                title: 'Rich Text', 
              }),
              defineField({ 
                name: 'button', 
                type: 'buttonObject', 
                title: 'Button', 
              }),
              defineField({ 
                name: 'singleImage', 
                type: 'singleImageObject', 
                title: 'Image', 
              }),
            ]
          }),
        ],
      }]
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: '',
    },
    prepare(selection) {
      const { title } = selection
      return {
        title: title ?? 'No title set. Add one inside this block',
        subtitle: 'Freeform',
        media: Shapes,
      }
    },
  },
})