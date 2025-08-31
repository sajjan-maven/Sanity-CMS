import { defineType, defineField } from "sanity";

export default defineType({
    name: "auditReadinessHeroBlock",
    title: "Audit Readiness Hero Block",
    type: "object",
    fields: [
        defineField({
            name: "tagline",
            title: "Tagline",
            type: "string",
            initialValue: "Compliance Audit",
        }),
        defineField({
            name: "heading",
            title: "Main Heading",
            type: "string",
        }),
        defineField({
            name: "highlightedText",
            title: "Highlighted Word",
            type: "string",
            description: "Word in heading to highlight with special color",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
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
                                defineField({ name: "alt", title: "Alt Text", type: "string" }),
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
            name: "video",
            title: "Hero Video",
            type: "file",
            options: { accept: "video/mp4" },
        }),
    ],
    preview: {
        select: {
            title: "heading",
            subtitle: "tagline",
        },
    },
});