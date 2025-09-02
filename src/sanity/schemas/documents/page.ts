import { File } from "lucide-react";
import { fieldsets } from "../misc/fieldsets";
import { defineField, defineType } from "sanity";
import { fieldGroups } from "../misc/field-groups";

// QWER 1
export default defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: File,
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
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      description: "Choose page type only if its under Resources Structure",
      options: {
        list: [
          { title: 'Platform Page', value: 'platform' },
          { title: 'Solution Page', value: 'solution' },
          { title: 'Resource Page', value: 'resource' },
          { title: 'Company Page', value: 'company' },
          { title: 'Landing Page', value: 'landing' }
        ],
      },
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
      name: 'pageBuilder',
      title: 'Page Builder',
      type: 'pageBuilder',
    }),
    defineField({
      name: "seo",
      title: 'SEO',
      type: "seoObject",
    }),
  ]
})