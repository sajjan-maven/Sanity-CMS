import { defineField, defineType } from "sanity";

export default defineType({
  name: "samCardsBlock",
  title: "SAM Cards Block",
  type: "object",
  fields: [
    defineField({
      name: "tagline",
      title: "Top Tagline",
      type: "string",
      initialValue: "SaaS sprawl",
    }),
    defineField({
      name: "heading",
      title: "Main Heading",
      type: "string",
      initialValue: "You can’t automate what you can’t see",
    }),
    defineField({
      name: "highlightedText",
      title: "Highlighted Word",
      type: "string",
      description: "Word in heading to highlight with special color",
      initialValue: "automate",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      initialValue:
        "Your IDP or automation tools don’t cover disconnected apps. IT teams spend hours tracking users, manually fixing access, and preparing audits from scratch. Accounts linger, licenses go unused, and software asset management stays incomplete.",
    }),
    defineField({
      name: "cards",
      title: "Cards",
      type: "array",
      of: [
        defineField({
          name: "card",
          type: "object",
          fields: [
            defineField({ name: "tagline", title: "Tagline", type: "string" }),
            defineField({ name: "heading", title: "Heading", type: "string" }),
            defineField({
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            }),
            defineField({
              name: "image",
              title: "Card Image",
              type: "image",
              options: { hotspot: true },
              fields: [
                defineField({ name: "alt", title: "Alt Text", type: "string" }),
                defineField({ name: "width", title: "Width", type: "number" }),
                defineField({ name: "height", title: "Height", type: "number" }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: { title: "heading" },
    prepare({ title }) {
      return {
        title: title || "SAM Cards Block",
        subtitle: "Two cards with tagline, heading, description, and image",
      };
    },
  },
});