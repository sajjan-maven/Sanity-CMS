import { defineType, defineField } from "sanity";

export default defineType({
    name: "disconnectedAppsBrandsBlock",
    title: "Disconnected Apps Brands Block",
    type: "object",
    fields: [
        defineField({
            name: "brandStats",
            title: "Brand Stats",
            type: "array",
            of: [
                defineField({
                    name: "brandStat",
                    title: "Brand Stat",
                    type: "object",
                    fields: [
                        defineField({
                            name: "stat",
                            title: "Stat",
                            type: "string",
                        }),
                        defineField({
                            name: "description",
                            title: "Description",
                            type: "string",
                        }),
                        defineField({
                            name: "logo",
                            title: "Logo",
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
    ],
    preview: {
        select: {
            title: "brandStats.0.stat",
            subtitle: "brandStats.0.description",
        },
        prepare(selection) {
            const { title, subtitle } = selection;
            return {
                title: title || "Brands Block",
                subtitle,
            };
        },
    },
});