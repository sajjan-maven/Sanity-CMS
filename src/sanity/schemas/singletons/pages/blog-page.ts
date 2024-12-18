import { defineField, defineType } from "sanity";
import { fieldsets } from "../../misc/fieldsets";
import { seoFields } from "../../misc/seo-fields";
import { fieldGroups } from "../../misc/field-groups";

export default defineType({
  name: 'blogPage',
  title: 'Blog Page',
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
    ...seoFields,
  ]
})