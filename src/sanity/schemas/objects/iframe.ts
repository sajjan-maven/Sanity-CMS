import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'iframe',
  title: 'Embed (iframe)',
  type: 'object',
  fields: [
    defineField({ name: 'url', type: 'url', title: 'URL', validation: r => r.required() }),
    defineField({ name: 'title', type: 'string', title: 'Title' }),
    defineField({ name: 'height', type: 'number', title: 'Height (px)', initialValue: 400 }),
  ],
})