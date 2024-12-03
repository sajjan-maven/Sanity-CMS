import { FiFile } from "react-icons/fi";
import { fieldsets } from "../misc/fieldsets";
import { seoFields } from "../misc/seo-fields";
import { defineField, defineType } from "sanity";
import { fieldGroups } from "../misc/field-groups";

export default defineType({
  name: 'post',
  title: 'Posts',
  type: 'document',
  icon: FiFile,
  fieldsets: [ ...fieldsets ],
  groups: [ ...fieldGroups ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: rule => rule.required()
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'postCategory' },
      validation: rule => rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'array',
      of: [
        { type: 'block' },
      ],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
      ],
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'image',
      fields: [{
        name: 'altText',
        title: 'Alternative Text',
        description: 'Describe the image for screen readers.',
        type: 'string'
      }],
    }),
    ...seoFields
  ]
})