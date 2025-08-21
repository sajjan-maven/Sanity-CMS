import { fieldsets } from "../misc/fieldsets";
import { defineField, defineType } from "sanity";
import { fieldGroups } from "../misc/field-groups";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { Tag } from "lucide-react";

export default defineType({
    name: 'integrationApplication',
    title: 'Integration Applications',
    type: 'document',
    icon: Tag,
    fieldsets: [...fieldsets],
    groups: [...fieldGroups],
    orderings: [orderRankOrdering],
    fields: [
        defineField({
            name: 'applicationName',
            title: 'Application Name',
            type: 'string',
            validation: rule => rule.required()
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
                }),
                defineField({
                    name: 'caption',
                    title: 'Caption',
                    type: 'string'
                }),
            ],
        }),
        defineField({
            name: 'addDescription',
            title: 'Add Application Description',
            type: 'boolean',
            initialValue: false,
            description: 'Toggle to display the application description',
        }),
        // Description field that depends on the toggle
        defineField({
            name: 'applicationDesc',
            title: 'Application Description',
            type: 'text',
            rows: 3,
            hidden: ({ parent }) => !parent?.showDescription,
            description: 'Description will only be shown if "Show Application Description" is enabled',
        }),
        orderRankField({
            type: 'integrationCategory'
        }),
    ]
})

// XYZ Add featured and editors choice option here