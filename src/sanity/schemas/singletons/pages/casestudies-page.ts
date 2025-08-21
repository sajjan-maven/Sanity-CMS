import { defineField, defineType } from "sanity";
import { fieldsets } from "../../misc/fieldsets";
import { fieldGroups } from "../../misc/field-groups";

export default defineType({
    name: 'casestudiesPage',
    title: 'Case Studies Page',
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
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'string',
        }),
        defineField({
            name: 'featuredCS',
            title: 'Featured Case Study',
            type: 'reference',
            to: { type: 'post' },
            description: 'These blocks will be displayed featured content.',
        }),
        defineField({
            name: 'caseStudy',
            title: 'Case Studys',
            type: 'array',
            of: [{
                type: 'reference',
                to: [{ type: 'post' }]
            }],
            validation: rule => rule.max(4),
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