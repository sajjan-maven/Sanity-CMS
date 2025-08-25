import { defineField, defineType } from "sanity";

export default defineType({
    name: "samHeroSection",
    title: "SAM Hero Section",
    type: "object",
    fields: [
        defineField({
            name: "title",
            title: "Main Title",
            type: "text",
            rows: 3,
            initialValue: "Software Asset Management That Actually Closes the Gaps",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
            initialValue:
                "Disconnected apps are your biggest blind spot. Stitchflow gives IT complete control, eliminating SCIM, tedious setup, and scripts.",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
                defineField({ name: "width", title: "Width", type: "number" }),
                defineField({ name: "height", title: "Height", type: "number" }),
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "backedByImage",
            title: "Backed By Logo",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
                defineField({ name: "width", title: "Width", type: "number" }),
                defineField({ name: "height", title: "Height", type: "number" }),
            ],
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
    ],
    preview: {
        select: {
            title: "title",
            media: "heroImage",
        },
        prepare({ title, media }) {
            return {
                title: title || "SAM Hero Section",
                subtitle: "Hero section with email capture and logos",
                media,
            };
        },
    },
});