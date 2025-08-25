import { defineField, defineType } from "sanity";

export default defineType({
    name: "oktaIdpTraditionalTools",
    title: "Okta IdP Traditional Tools Section",
    type: "object",
    fields: [
        defineField({
            name: "traditionalTools",
            title: "Traditional Tools",
            type: "array",
            of: [
                defineField({
                    name: "traditionalTool",
                    title: "Traditional Tool",
                    type: "object",
                    fields: [
                        defineField({
                            name: "list",
                            title: "List Text",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "listIcon",
                            title: "List Icon",
                            type: "image",
                            options: { hotspot: false },
                            fields: [
                                defineField({
                                    name: "alt",
                                    title: "Alt Text",
                                    type: "string",
                                }),
                            ],
                        }),
                    ],
                    preview: {
                        select: { title: "list", media: "listIcon" },
                    },
                }),
            ],
        }),
        defineField({
            name: "stitchflowTools",
            title: "Stitchflow Tools",
            type: "array",
            of: [
                defineField({
                    name: "stitchflowTool",
                    title: "Stitchflow Tool",
                    type: "object",
                    fields: [
                        defineField({
                            name: "list",
                            title: "List Text",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "listIcon",
                            title: "List Icon",
                            type: "image",
                            options: { hotspot: false },
                            fields: [
                                defineField({
                                    name: "alt",
                                    title: "Alt Text",
                                    type: "string",
                                }),
                            ],
                        }),
                    ],
                    preview: {
                        select: { title: "list", media: "listIcon" },
                    },
                }),
            ],
        }),
    ],
    preview: {
        select: {},
        prepare() {
            return {
                title: "Okta IdP Traditional Tools Section",
                subtitle: "Comparison between Traditional Tools and Stitchflow",
            };
        },
    },
});