import { defineField, defineType } from "sanity";

export default defineType({
    name: "oktaIdpSaasManagementActuallyWorks",
    title: "Okta IdP SaaS Management Section",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Section Title",
            type: "string",
            initialValue: "How Stitchflow works even when your tools don’t connect",
            validation: Rule => Rule.required()
        }),
        defineField({
            name: "topLineImage",
            title: "Top Divider Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
                defineField({ name: "width", title: "Width (px)", type: "number", initialValue: 507 }),
                defineField({ name: "height", title: "Height (px)", type: "number", initialValue: 91 })
            ]
        }),
        defineField({
            name: "sections",
            title: "Sections",
            type: "array",
            of: [
                defineField({
                    name: "saasManagementSection",
                    title: "SaaS Management Section",
                    type: "object",
                    fields: [
                        defineField({
                            name: "mainTitle",
                            title: "Main Title",
                            type: "string",
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: "subTitle",
                            title: "Sub Title",
                            type: "text",
                            rows: 3,
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: "image",
                            title: "Section Image",
                            type: "image",
                            options: { hotspot: true },
                            fields: [
                                defineField({ name: "alt", title: "Alt Text", type: "string" }),
                                defineField({ name: "width", title: "Width (px)", type: "number", initialValue: 531 }),
                                defineField({ name: "height", title: "Height (px)", type: "number", initialValue: 400 })
                            ]
                        })
                    ],
                    preview: {
                        select: { title: "mainTitle", subtitle: "subTitle", media: "image" }
                    }
                })
            ],
            validation: Rule => Rule.min(1).required()
        }),
        defineField({
            name: "bottomLineImage",
            title: "Bottom Divider Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
                defineField({ name: "width", title: "Width (px)", type: "number", initialValue: 507 }),
                defineField({ name: "height", title: "Height (px)", type: "number", initialValue: 91 })
            ]
        })
    ],
    preview: {
        select: { title: "title" },
        prepare({ title }) {
            return {
                title: title || "Okta IdP SaaS Management Section",
                subtitle: "Section with title, divider images, and step list"
            };
        }
    }
});