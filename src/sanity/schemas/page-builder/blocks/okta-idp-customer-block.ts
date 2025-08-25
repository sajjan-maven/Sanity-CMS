import { defineField, defineType } from "sanity";

export default defineType({
    name: "oktaIdpCustomer",
    title: "Okta IdP Customer Section",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Section Title",
            type: "string",
            initialValue: "Backed by Okta Ventures. Trusted by Okta Customers.",
            validation: Rule => Rule.required()
        }),
        defineField({
            name: "cards",
            title: "Customer Cards",
            type: "array",
            of: [
                defineField({
                    name: "customerCard",
                    title: "Customer Card",
                    type: "object",
                    fields: [
                        defineField({
                            name: "mainHeading",
                            title: "Main Heading",
                            type: "string",
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: "image",
                            title: "Logo / Top Image",
                            type: "image",
                            options: { hotspot: true },
                            fields: [
                                defineField({ name: "alt", title: "Alt Text", type: "string" }),
                                defineField({ name: "width", title: "Width (px)", type: "number", initialValue: 150 }),
                                defineField({ name: "height", title: "Height (px)", type: "number", initialValue: 21 })
                            ]
                        }),
                        defineField({
                            name: "description",
                            title: "Description",
                            type: "text",
                            rows: 4,
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: "name",
                            title: "Person Name",
                            type: "string",
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: "designation",
                            title: "Designation",
                            type: "string",
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: "avatarImage",
                            title: "Avatar Image",
                            type: "image",
                            options: { hotspot: true },
                            fields: [
                                defineField({ name: "alt", title: "Alt Text", type: "string" }),
                                defineField({ name: "width", title: "Width (px)", type: "number", initialValue: 48 }),
                                defineField({ name: "height", title: "Height (px)", type: "number", initialValue: 48 })
                            ]
                        }),
                        defineField({
                            name: "impact",
                            title: "Impact Metrics",
                            type: "array",
                            of: [
                                defineField({
                                    name: "impactItem",
                                    title: "Impact Item",
                                    type: "object",
                                    fields: [
                                        defineField({
                                            name: "contractCount",
                                            title: "Contract Count",
                                            type: "string"
                                        }),
                                        defineField({
                                            name: "contractDesc",
                                            title: "Contract Description",
                                            type: "string"
                                        }),
                                        defineField({
                                            name: "reductionRate",
                                            title: "Reduction Rate",
                                            type: "string"
                                        }),
                                        defineField({
                                            name: "reductionDesc",
                                            title: "Reduction Description",
                                            type: "string"
                                        })
                                    ],
                                    preview: {
                                        select: {
                                            title: "contractCount",
                                            subtitle: "contractDesc"
                                        }
                                    }
                                })
                            ],
                            validation: Rule => Rule.min(1)
                        })
                    ],
                    preview: {
                        select: { title: "mainHeading", subtitle: "name", media: "avatarImage" }
                    }
                })
            ],
            validation: Rule => Rule.min(1).required()
        })
    ],
    preview: {
        select: { title: "title" },
        prepare({ title }) {
            return {
                title: title || "Okta IdP Customer Section",
                subtitle: "Customer testimonials with impact metrics"
            };
        }
    }
});