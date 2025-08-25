import { defineField, defineType } from "sanity";

export default defineType({
    name: "oktaIdpCtaSection",
    title: "Okta IdP CTA Section",
    type: "object",
    fields: [
        defineField({
            name: "heading",
            title: "Heading",
            type: "string",
            initialValue:
                "Want to see how Stitchflow covers apps that don’t integrate with Okta?",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
            initialValue:
                "Let us show you what complete SaaS management looks like with a no-commitment pilot.",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "buttonText",
            title: "Button Text",
            type: "string",
            initialValue: "Book a demo",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "avatarImage",
            title: "Avatar Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
                defineField({
                    name: "width",
                    title: "Width (px)",
                    type: "number",
                    initialValue: 32,
                }),
                defineField({
                    name: "height",
                    title: "Height (px)",
                    type: "number",
                    initialValue: 32,
                }),
            ],
        }),
    ],
    preview: {
        select: { title: "heading" },
        prepare({ title }) {
            return {
                title: title || "Okta IdP CTA Section",
                subtitle: "Email capture with CTA button",
            };
        },
    },
});