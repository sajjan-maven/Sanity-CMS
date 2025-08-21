import { fieldsets } from "../misc/fieldsets";
import { defineField, defineType } from "sanity";
import { fieldGroups } from "../misc/field-groups";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";
import { Tag } from "lucide-react";

export default defineType({
    name: 'integrationCategory',
    title: 'Integration Categories',
    type: 'document',
    icon: Tag,
    fieldsets: [...fieldsets],
    groups: [...fieldGroups],
    orderings: [orderRankOrdering],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: rule => rule.required()
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
        // defineField({
        //   name: 'categoryColor',
        //   title: 'Category color',
        //   type: 'simplerColor',
        //   description: 'Defaults to white.'
        // }),
        orderRankField({
            type: 'integrationCategory'
        }),
    ]
})

// XYZ Add featured and editors choice option here