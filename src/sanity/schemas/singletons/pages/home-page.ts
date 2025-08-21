import { defineField, defineType } from "sanity";
import { fieldsets } from "../../misc/fieldsets";
import { fieldGroups } from "../../misc/field-groups";

// Dummy file for test

export default defineType({
    name: 'homePage',
    title: 'Home Page',
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
            name: 'clickthrough',
            title: 'Clickthrough URL',
            type: 'string',
        }),
        defineField({
            name: 'emailCapture',
            title: 'Email Capture Hubspot Reference',
            type: 'string',
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