import { defineField, defineType } from "sanity";

export default defineType({
    name: "samCenteredBlock",
    title: "SAM Centered Block",
    type: "object",
    fields: [
        defineField({
            name: "badge",
            title: "Badge Text",
            type: "string",
            initialValue: "Disconnected Apps",
        }),
        defineField({
            name: "title",
            title: "Main Title",
            type: "text",
            rows: 2,
            initialValue: "You’re managing more apps than you can see 👀",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
            initialValue:
                "From AI tools to contractor platforms, disconnected apps slip past traditional software asset management tools. Stitchflow brings them under control, even without APIs.",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "buttonText",
            title: "Button Text",
            type: "string",
            initialValue: "Learn how Stitchflow fixes it",
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "badge",
        },
        prepare({ title, subtitle }) {
            return {
                title: title || "SAM Centered Block",
                subtitle: subtitle || "Disconnected Apps",
            };
        },
    },
});