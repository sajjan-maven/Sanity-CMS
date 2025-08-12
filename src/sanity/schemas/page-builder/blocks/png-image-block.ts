import { defineField, defineType } from "sanity";

export default defineType({
    name: "pngImageBlock",
    title: "PNG Image Block",
    type: "object",
    fields: [
        defineField({
            name: "hasFeaturedCard",
            title: "Include Featured Card?",
            type: "boolean",
            initialValue: true,
        }),
        defineField({
            name: "featuredCard",
            title: "Featured Card",
            type: "object",
            fields: [
                defineField({
                    name: "image",
                    title: "Image",
                    type: "image",
                    options: { hotspot: true },
                }),
                defineField({
                    name: "altText",
                    title: "Alt Text",
                    type: "string",
                }),
                defineField({
                    name: "title",
                    title: "Title",
                    type: "string",
                }),
                defineField({
                    name: "description",
                    title: "Description",
                    type: "text",
                    rows: 3,
                }),
                defineField({
                    name: "bgColor",
                    title: "Image Background Color",
                    type: "simplerColor",
                    initialValue: {
                        value: "#A0D5F1",
                        hsl: { h: 201, s: 0.77, l: 0.8, a: 1 },
                    },
                }),
            ],
            hidden: ({ parent }) => !parent?.hasFeaturedCard,
        }),
        defineField({
            name: "cards",
            title: "Cards",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "image",
                            title: "Image",
                            type: "image",
                            options: { hotspot: true },
                        }),
                        defineField({
                            name: "altText",
                            title: "Alt Text",
                            type: "string",
                        }),
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string",
                        }),
                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                            rows: 3,
                        }),
                        defineField({
                            name: "bgColor",
                            title: "Image Background Color",
                            type: "simplerColor",
                            initialValue: {
                                value: "#A0D5F1",
                                hsl: { h: 201, s: 0.77, l: 0.8, a: 1 },
                            },
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: "sectionBgColor",
            title: "Section Background Color",
            type: "simplerColor",
            initialValue: {
                value: "#e4dbd0",
                hsl: { h: 34, s: 0.35, l: 0.85, a: 1 },
            },
        }),
    ],
    preview: {
        select: {
            title: "featuredCard.title",
        },
        prepare({ title }) {
            return {
                title: title || "Block with PNG images and optional featured card",
                subtitle: "PNG Image Block",
            };
        },
    },
});