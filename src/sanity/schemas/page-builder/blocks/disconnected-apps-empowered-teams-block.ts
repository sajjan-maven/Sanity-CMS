import { defineType, defineField } from "sanity";

export default defineType({
    name: "disconnectedAppsEmpoweredTeamsBlock",
    title: "Disconnected Apps Empowered Teams Block",
    type: "object",
    fields: [
        defineField({
            name: "heading",
            title: "Heading",
            type: "string",
        }),
        defineField({
            name: "brands",
            title: "Brands",
            type: "array",
            of: [
                defineField({
                    name: "brand",
                    title: "Brand",
                    type: "object",
                    fields: [
                        defineField({
                            name: "image",
                            title: "Brand Logo",
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
                        defineField({
                            name: "caseStudy",
                            title: "Has Case Study?",
                            type: "boolean",
                            initialValue: false,
                        }),
                        defineField({
                            name: "caseStudyLink",
                            title: "Case Study Link",
                            type: "url",
                            hidden: ({ parent }) => !parent?.caseStudy,
                        }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: "heading",
        },
    },
});