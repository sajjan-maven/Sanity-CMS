import { defineType, defineField } from "sanity";

export default defineType({
    name: "disconnectedAppsHeroBlock",
    title: "Disconnected Apps Hero Block",
    type: "object",
    fields: [
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
            initialValue: "Get started",
        }),
        defineField({
            name: "ctaLink",
            title: "CTA Link",
            type: "string",
            initialValue: "/demo",
        }),
        defineField({
            name: "marqueeImages",
            title: "Trusted Logos",
            type: "array",
            of: [
                defineField({
                    name: "marqueeImage",
                    type: "object",
                    fields: [
                        defineField({
                            name: "asset",
                            title: "Logo Image",
                            type: "image",
                            options: { hotspot: false },
                            fields: [
                                defineField({
                                    name: "alt",
                                    title: "Alt Text",
                                    type: "string",
                                }),
                            ],
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "width",
                            title: "Width (px)",
                            type: "number",
                            initialValue: 150,
                        }),
                        defineField({
                            name: "height",
                            title: "Height (px)",
                            type: "number",
                            initialValue: 40,
                        }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            options: { hotspot: false },
            fields: [
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
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