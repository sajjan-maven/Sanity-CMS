import { defineField, defineType } from "sanity";
import { fieldsets } from "../../misc/fieldsets";
import { fieldGroups } from "../../misc/field-groups";

// Dummy file for test

export default defineType({
    name: 'integrationsPage',
    title: 'Integrations Page',
    type: 'document',
    fieldsets: [...fieldsets],
    groups: [...fieldGroups],
    fields: [
        defineField({
            name: 'title',
            title: 'Header Title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Header Description',
            type: 'string',
        }),
        defineField({
            name: 'headerActionButton',
            title: 'Header Action Button',
            type: 'object',
            fields: [
                defineField({
                    name: 'buttonText',
                    title: 'Button Text',
                    type: 'string',
                }),
                defineField({
                    name: 'buttonUrl',
                    title: 'Button URL',
                    type: 'url',
                }),
                defineField({
                    name: 'buttonVariant',
                    title: 'Button Variant',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Primary', value: 'primary' },
                            { title: 'Secondary', value: 'secondary' },
                        ]
                    }
                })
            ]
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