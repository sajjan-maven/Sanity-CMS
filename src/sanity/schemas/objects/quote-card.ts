import { Quote } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
    name: 'quoteCardObject',
    title: 'Quote Card',
    type: 'object',
    fields: [
        defineField({
            name: 'quoteText',
            title: 'Quote Text',
            type: 'text',
            rows: 4,
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'authorName',
            title: 'Author Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'authorTitle',
            title: 'Author Designation',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'authorImage',
            title: 'Author Image',
            type: 'image',
            description: 'Size should be 100x100 pixels'
        }),
    ],
    preview: {
        select: {
            title: 'Quote Card',
            authorName: 'authorName',
        },
        prepare({ authorName }) {
            return {
                title: 'Quote Card',
                subtitle: authorName ? `By ${authorName}` : 'Quote',
                media: Quote,
            };
        },
    },
});
