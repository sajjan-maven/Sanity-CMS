import { Send } from "lucide-react";
import { defineField, defineType } from "sanity";
import { fieldsets } from "../../misc/fieldsets";
import { fieldGroups } from "../../misc/field-groups";
import { paddingFields } from "../../misc/padding-fields";

export default defineType({
  name: 'formBlock',
  title: 'Form',
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { 
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'formFields',
      title: 'Form Fields',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name/Label',
              type: 'string',
            }),
            defineField({
              name: 'placeholder',
              title: 'Placeholder',
              type: 'string',
            }),
            defineField({
              name: "inputType",
              title: "Input Type",
              type: "string",
              options: {
                list: [
                  { title: "Text", value: "text" },
                  { title: "Text Area", value: "textarea" },
                  { title: "Email", value: "email" },
                  { title: "Telephone", value: "tel" },
                ],
              },
              initialValue: 'text',
            }),
            defineField({
              name: 'isRequired',
              title: 'Required',
              type: 'boolean',
              initialValue: false
            }),
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
        subtitle: 'Form',
        media: Send,
      }
    },
  },
})