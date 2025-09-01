import { defineType, defineField } from "sanity";

export default defineType({
    name: "disconnectedAppsStickyStackBlock",
    title: "Disconnected Apps Sticky Stack Block",
    type: "object",
    fields: [
        defineField({
            name: "eyebrow",
            title: "Eyebrow Text",
            type: "string",
            initialValue: "The problem",
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
            description: "Word in heading to highlight with accent color",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
        }),
        defineField({
            name: "ctaLabel",
            title: "CTA Label",
            type: "string",
            initialValue: "Book Demo",
        }),
        defineField({
            name: "ctaLink",
            title: "CTA Link",
            type: "string",
            initialValue: "/demo",
        }),
        defineField({
            name: "features",
            title: "Features",
            type: "array",
            of: [
                defineField({
                    name: "feature",
                    title: "Feature",
                    type: "object",
                    fields: [
                        defineField({ name: "title", title: "Title", type: "string" }),
                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                        }),
                        defineField({
                            name: "image",
                            title: "Desktop Image",
                            type: "image",
                            fields: [
                                defineField({ name: "alt", title: "Alt Text", type: "string" }),
                            ],
                            options: { hotspot: false },
                        }),
                        defineField({
                            name: "mobileImage",
                            title: "Mobile Image",
                            type: "image",
                            fields: [
                                defineField({ name: "alt", title: "Alt Text", type: "string" }),
                            ],
                            options: { hotspot: false },
                        }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: "heading",
            subtitle: "description",
        },
    },
});