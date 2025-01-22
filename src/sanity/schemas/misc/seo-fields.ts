import { defineField } from "sanity";

export const seoFields = [
  defineField({
    name: 'metaTitle',
    title: 'Meta Title',
    type: 'string',
    group: 'seo',
    fieldset: 'seo'
  }),
  defineField({
    name: 'metaDescription',
    title: 'Meta Description',
    type: 'string',
    group: 'seo',
    fieldset: 'seo'
  }),
]