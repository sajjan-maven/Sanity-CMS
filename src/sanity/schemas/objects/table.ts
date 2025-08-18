import { Clapperboard } from "lucide-react";
import { defineField, defineType } from "sanity";

// Dummy file for test
export default defineType({
    name: 'table',
    title: 'Table component',
    type: 'object',
    fields: [
        defineField({
            name: 'callToActionTitle',
            type: 'string',
            title: 'Title',
        }),
        defineField({
            name: 'callToActionParagraph',
            type: 'text',
            title: 'Paragraph',
            rows: 4
        }),
        defineField({
            name: 'buttons',
            title: 'Buttons',
            type: 'array',
            of: [{ type: 'buttonObject' }],
        }),
    ],
    preview: {
        select: {
            title: 'callToActionTitle',
        },
        prepare(selection) {
            const { title } = selection
            return {
                title: title ?? 'No title set. Add one inside this block',
                subtitle: 'Call To Action',
                media: Clapperboard,
            }
        },
    },
})