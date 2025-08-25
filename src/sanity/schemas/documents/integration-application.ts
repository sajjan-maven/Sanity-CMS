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
        }),
        defineField({
            name: 'addDescription',
            title: 'Add Application Description',
            type: 'boolean',
            initialValue: false,
            description: 'Toggle to display the application description',
        }),
        defineField({
            name: 'applicationDesc',
            title: 'Application Description',
            type: 'text',
            rows: 3,
            hidden: ({ parent }) => !parent?.addDescription,
            description: 'Description will only be shown if "Show Application Description" is enabled',
        }),
        orderRankField({
            type: 'integrationApplication'
        }),
    ]
})