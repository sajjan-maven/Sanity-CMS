import { FiFile } from "react-icons/fi";
import { fieldsets } from "../misc/fieldsets";
import { defineArrayMember, defineField, defineType } from "sanity";
import { fieldGroups } from "../misc/field-groups";

export default defineType({
  name: 'post',
  title: 'Posts',
  type: 'document',
  icon: FiFile,
  fieldsets: [...fieldsets],
  groups: [...fieldGroups],
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
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
      validation: rule => rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'date',
      initialValue: (new Date()).toISOString().split('T')[0],
    }),
    defineField({
      name: 'isModified',
      title: 'Is Modified',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'modifiedAt',
      title: 'Modified At',
      type: 'date',
      initialValue: (new Date()).toISOString().split('T')[0],
      hidden: ({ parent }) => !parent?.isModified
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        { type: 'callToActionObject' },
        { type: 'singleImageObject' },
        { type: 'videoObject' },
        defineArrayMember({ type: 'iframe' }),
        defineArrayMember({
          type: 'table',
        }),
      ],
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        defineField({
          name: 'altText',
          title: 'Alternative Text',
          type: 'string'
        })
      ],
    }),
    defineField({
      title: "Related Posts",
      name: "relatedPostsType",
      type: "string",
      description: "Defaults to posts of the same category.",
      options: {
        list: [
          { title: "Autofill", value: "autofill" },
          { title: "Custom", value: "custom" },
        ],
      },
      initialValue: 'autofill',
    }),
    defineField({
      title: "Choose Related Posts",
      name: "customRelatedPosts",
      type: "array",
      of: [{
        type: 'reference',
        to: [{ type: 'post' }]
      }],
      validation: rule => rule.max(3),
      hidden: ({ parent }) => parent?.relatedPostsType !== 'custom'
    }),
    defineField({
      name: "seo",
      title: 'SEO',
      type: "seoObject",
    }),
  ]
})