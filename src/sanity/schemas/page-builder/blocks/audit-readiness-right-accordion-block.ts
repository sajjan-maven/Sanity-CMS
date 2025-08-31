import { defineType, defineField } from "sanity";

export default defineType({
    name: "auditReadinessRightAccordionBlock",
    title: "Audit Readiness Right Accordion Block",
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
            description: "Part of the heading to highlight in orange",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "accordionItems",
            title: "Accordion Items",
            type: "array",
            of: [
                defineField({
                    name: "item",
                    type: "object",
                    fields: [
                        defineField({ name: "heading", title: "Heading", type: "string" }),
                        defineField({
                            name: "subheading",
                            title: "Subheading",
                            type: "text",
                        }),
                        defineField({
                            name: "image",
                            title: "Image",
                            type: "image",
                            fields: [
                                defineField({ name: "alt", title: "Alt text", type: "string" }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: { title: "heading", subtitle: "tagline" },
    },
});