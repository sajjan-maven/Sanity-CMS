import { defineField, defineType } from "sanity";

export default defineType({
    name: "samActionBlock",
    title: "SAM Action Block",
    type: "object",
    fields: [
        defineField({
            name: "tagline",
            title: "Top Tagline",
            type: "string",
            initialValue: "Stitchflow in action",
        }),
        defineField({
            name: "heading",
            title: "Main Heading",
            type: "string",
            initialValue:
                "See what full-stack software asset management looks like",
        }),
        defineField({
            name: "highlightedText",
            title: "Highlighted Word",
            type: "string",
            description: "Word in heading to highlight with green color",
            initialValue: "full-stack",
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
            initialValue:
                "Watch how IT teams closed 100s of access gaps, reclaimed budget, and eliminated manual cleanup across disconnected tools.",
        }),
        defineField({
            name: "videoUrl",
            title: "Video Embed URL",
            type: "url",
            initialValue:
                "https://demo.arcade.software/K2cqsKpYaNyNweEJ7jmo?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=false",
        }),
    ],
    preview: {
        select: { title: "heading" },
        prepare({ title }) {
            return {
                title: title || "SAM Action Block",
                subtitle: "Video embed block with tagline, heading, and description",
            };
        },
    },
});