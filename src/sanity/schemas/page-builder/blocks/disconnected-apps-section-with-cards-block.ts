import { defineType, defineField } from "sanity";

export default defineType({
    name: "disconnectedAppsSectionWithCardsBlock",
    title: "Disconnected Apps Section With Cards Block",
    type: "object",
    fields: [
        defineField({
            name: "tagline",
            title: "Tagline",
            type: "string",
        }),
        defineField({
            name: "heading",
            title: "Heading",
            type: "string",
        }),
        defineField({
            name: "highlightedText",
            title: "Highlighted Text",
            type: "string",
            description: "Word or phrase inside heading to highlight",
        }),
        defineField({
            name: "description",
            title: "Section Description",
            type: "text",
        }),
        defineField({
            name: "cards",
            title: "Cards",
            type: "array",
            of: [
                defineField({
                    name: "card",
                    title: "Card",
                    type: "object",
                    fields: [
                        defineField({
                            name: "title",
                            title: "Card Title",
                            type: "string",
                        }),
                        defineField({
                            name: "description",
                            title: "Card Description",
                            type: "text",
                        }),
                        defineField({
                            name: "image",
                            title: "Optional Card Image",
                            type: "image",
                            fields: [
                                defineField({
                                    name: "alt",
                                    title: "Alt Text",
                                    type: "string",
                                }),
                            ],
                            options: { hotspot: true },
                        }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: "heading",
            subtitle: "tagline",
        },
    },
});