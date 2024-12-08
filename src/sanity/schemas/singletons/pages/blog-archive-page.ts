import { defineField, defineType } from "sanity";
import { fieldsets } from "../../misc/fieldsets";
import { seoFields } from "../../misc/seo-fields";
import { fieldGroups } from "../../misc/field-groups";

export default defineType({
  name: 'blogArchivePage',
  title: 'Blog Archive Page',
  type: 'document',
  fieldsets: [ ...fieldsets ],
  groups: [ ...fieldGroups ],
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
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    ...seoFields,
  ]
})