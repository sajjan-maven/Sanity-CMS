import { defineType, defineField } from "sanity";

export default defineType({
    name: "auditReadinessSolutionsListBlock",
    title: "Audit Readiness Solutions List Block",
    type: "object",
    fields: [
        defineField({
            name: "tagline",
            title: "Tagline",
            type: "string",
        }),
        defineField({
            name: "heading",
            title: "Main Heading",
            type: "string",
        }),
        defineField({
            name: "highlightedText",
            title: "Highlighted Text",
            type: "string",
            description: "Text from heading to highlight with accent color",
        }),
        defineField({
            name: "teamCards",
            title: "Team Cards",
            type: "array",
            of: [
                defineField({
                    name: "card",
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