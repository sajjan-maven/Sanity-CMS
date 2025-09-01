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
            name: 'heading',
            title: 'Heading',
            type: 'string',
            description: 'The main heading text for the homepage hero section',
        }),
        defineField({
            name: 'headingWidth',
            title: 'Heading Width',
            type: 'number',
            description: 'Maximum width for the heading in pixels',
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'string',
            description: 'The subheading text for the homepage hero section',
        }),
        defineField({
            name: 'subheadingWidth',
            title: 'Subheading Width',
            type: 'number',
            description: 'Maximum width for the subheading in pixels',
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