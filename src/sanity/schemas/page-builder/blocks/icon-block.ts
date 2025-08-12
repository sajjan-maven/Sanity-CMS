import { defineField, defineType } from "sanity";

export default defineType({
    name: "iconBlock",
    title: "Icon Block",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Section Title",
            type: "string",
        }),
        defineField({
            name: "icons",
            title: "Icons",
            type: "array",
            of: [
                {
                    type: "object",
                    fields: [
                        defineField({
                            name: "logo",
                            title: "Logo",
                            type: "image",
                            options: { hotspot: true },
                        }),
                        defineField({
                            name: "altText",
                            title: "Alt Text",
                            type: "string",
                        }),
                        defineField({
                            name: "width",
                            title: "Width (px)",
                            type: "number",
                            initialValue: 100,
                        }),
                        defineField({
                            name: "height",
                            title: "Height (px)",
                            type: "number",
                            initialValue: 40,
                        }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }) {
            return {
                title: title || 'Icon Block',
                subtitle: 'Icon Block'
            }
        },
    },
});