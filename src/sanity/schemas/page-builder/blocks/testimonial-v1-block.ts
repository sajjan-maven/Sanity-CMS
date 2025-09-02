import { defineType, defineField } from "sanity";

export default defineType({
    name: "testimonialV1Block",
    title: "Testimonial Block",
    type: "object",
    fields: [
        defineField({
            name: "testimonials",
            title: "Testimonials",
            type: "array",
            of: [
                defineField({
                    name: "testimonial",
                    type: "object",
                    fields: [
                        defineField({
                            name: "company",
                            title: "Company Name",
                            type: "string",
                        }),
                        defineField({
                            name: "companyLogo",
                            title: "Company Logo",
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
                            name: "text",
                            title: "Testimonial Text",
                            type: "text",
                        }),
                        defineField({
                            name: "profile",
                            title: "Profile",
                            type: "object",
                            fields: [
                                defineField({ name: "name", title: "Name", type: "string" }),
                                defineField({ name: "role", title: "Role", type: "string" }),
                                defineField({
                                    name: "image",
                                    title: "Profile Image",
                                    type: "image",
                                    options: { hotspot: true },
                                    fields: [
                                        defineField({
                                            name: "alt",
                                            title: "Alt Text",
                                            type: "string",
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    ],
    preview: {
        select: {
            title: "testimonials.0.company",
            subtitle: "testimonials.0.profile.name",
        },
    },
});