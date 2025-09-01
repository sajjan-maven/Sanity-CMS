import { defineType, defineField } from "sanity";

export default defineType({
    name: "disconnectedAppsFeaturesBlock",
    title: "Disconnected Apps Features Block",
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
            description: "Word or phrase inside heading to highlight",
        }),
        defineField({
            name: "description",
            title: "Block Description",
            type: "text",
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
                        defineField({
                            name: "title",
                            title: "Title",
                            type: "string",
                        }),
                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                        }),
                        defineField({
                            name: "image",
                            title: "Feature Image",
                            type: "image",
                            fields: [
                                defineField({
                                    name: "alt",
                                    title: "Alt Text",
                                    type: "string",
                                }),
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