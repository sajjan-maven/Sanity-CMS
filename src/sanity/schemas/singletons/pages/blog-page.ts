import { defineField, defineType } from "sanity";
import { fieldsets } from "../../misc/fieldsets";
import { fieldGroups } from "../../misc/field-groups";

export default defineType({
  name: 'blogPage',
  title: 'Blog Page',
  type: 'document',
  fieldsets: [...fieldsets],
  groups: [...fieldGroups],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'string',
    }),
    defineField({
      name: 'featuredBlog',
      title: 'Featured Blog',
      type: 'reference',
      to: { type: 'post' },
      description: 'These blocks will be displayed featured content.',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'editorsPicks',
      title: 'Editor’s picks',
      type: 'array',
      of: [{
        type: 'reference',
        to: [{ type: 'post' }]
      }],
      validation: rule => rule.max(4),
      description: 'Select exactly 4 posts to display as editor\'s picks.',
    }),
    defineField({
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'pageBuilder',
      description: 'These blocks will be displayed below the main content.'
    }),
    defineField({
      name: "seo",
      title: 'SEO',
      type: "seoObject",
    }),
  ]
})