import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'dropdownItem',
    title: 'Dropdown Item',
    type: 'object',
    fields: [
     defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: Rule => Rule.required(),
      }),
     defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 2,
      }),
     defineField({
        name: 'path',
        title: 'Path',
        type: 'string',
        description: 'The URL path this item should link to (e.g., "/about")',
        validation: Rule => Rule.required(),
      }),
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'path',
      }
    } 
  });