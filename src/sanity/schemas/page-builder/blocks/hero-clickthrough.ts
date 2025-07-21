import { defineField, defineType } from "sanity";
import { fieldsets } from "../../misc/fieldsets";
import { fieldGroups } from "../../misc/field-groups";

export default defineType({
  name: 'heroClickthroughBlock',
  title: 'Hero Clickthrough',
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
      name: 'headingWidth',
      title: 'Heading Width',
      description: 'Specify maximum width the heading can take',
      type: 'number'
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'subheadingWidth',
      title: 'Subheading Width',
      description: 'Specify maximum width the subheading can take',
      type: 'number'
    }),
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'subheading'
    },
  },
})