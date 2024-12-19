import { LetterText } from "lucide-react";
import { defineField, defineType } from "sanity";
import { fieldsets } from "../../misc/fieldsets";
import { fieldGroups } from "../../misc/field-groups";
import { paddingFields } from "../../misc/padding-fields";

export default defineType({
  name: 'portableTextBlock',
  title: 'Portable Text',
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'callToActionObject' }
      ],
    }),
    ...paddingFields
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
        subtitle: 'Portable Text',
        media: LetterText,
      }
    },
  },
})