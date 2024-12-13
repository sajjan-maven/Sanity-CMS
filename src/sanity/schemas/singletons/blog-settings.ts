import { defineField, defineType } from "sanity";

export default defineType({
  name: 'blogSettings',
  title: 'Blog Settings',
  type: 'document',
  fields: [
    defineField({
      title: 'Show Related Posts',
      name: 'showRelatedPosts',
      type: 'boolean',
      description: 'If enabled, 3 related posts will be displayed at the end of each post.',
      initialValue: true
    }),
    defineField({
      title: 'Show Table of Contents',
      name: 'showTableOfContents',
      type: 'boolean',
      description: 'If enabled, a table of contents will be displayed in the right sidebar of each post.',
      initialValue: true
    }),
    defineField({
      title: 'Show Posts by Category',
      name: 'showPostsByCategory',
      type: 'boolean',
      description: 'If enabled, post categories will be displayed in right sidebar of each post.',
      initialValue: true
    }),
  ]
})