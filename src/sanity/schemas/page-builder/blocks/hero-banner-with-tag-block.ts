import { defineField, defineType } from "sanity";
import { fieldsets } from "../../misc/fieldsets";
import { fieldGroups } from "../../misc/field-groups";

export default defineType({
    name: 'heroBannerWithTagBlock',
    title: 'Hero Banner with Tag',
    type: 'object',
    fieldsets: [...fieldsets],
    groups: [...fieldGroups],
    fields: [
        defineField({
            name: 'tag',
            title: 'Tag',
            type: 'string',
        }),
        defineField({
            name: 'headingBold',
            title: 'Heading Bold Text',
            type: 'string',
        }),
        defineField({
            name: 'headingOrdinary',
            title: 'Heading Ordinary Text',
            type: 'string',
        }),
        defineField({
            name: 'headingWidth',
            title: 'Heading Width',
            description: 'Specify maximum width the heading can take',
            type: 'number'
        }),
        defineField({
            name: 'subheading',
            title: 'Subheading',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: [],
                },
            ],
        }),
        defineField({
            name: 'subheadingWidth',
            title: 'Subheading Width',
            description: 'Specify maximum width the subheading can take',
            type: 'number'
        }),
    ],
    preview: {
        select: {
            title: 'tag',
        },
        prepare({ title }) {
            return {
                title: title || 'Hero Banner with Tag',
                subtitle: 'Hero Banner with Tag'
            }
        },
    },
})
