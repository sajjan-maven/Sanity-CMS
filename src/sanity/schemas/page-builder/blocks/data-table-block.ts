import { defineType, defineField } from "sanity";

export default defineType({
    name: "dataTableBlock",
    title: "Data Table Block",
    type: "object",
    fields: [
        defineField({
            name: "heading",
            title: "Heading",
            type: "string",
        }),
        defineField({
            name: "subheading",
            title: "Subheading",
            type: "text",
        }),
        defineField({
            name: "tableHeaders",
            title: "Table Headers",
            type: "array",
            of: [
                defineField({
                    name: "header",
                    type: "object",
                    fields: [
                        defineField({ name: "id", title: "ID", type: "string" }),
                        defineField({ name: "label", title: "Label", type: "string" }),
                        defineField({ name: "width", title: "Column Width", type: "string" }),
                    ],
                }),
            ],
        }),
        defineField({
            name: "tableRows",
            title: "Table Rows",
            type: "array",
            of: [
                defineField({
                    name: "row",
                    type: "object",
                    fields: [
                        defineField({ name: "feature", title: "Feature", type: "string" }),
                        defineField({
                            name: "values",
                            title: "Row Values",
                            type: "array",
                            of: [
                                defineField({
                                    name: "cell",
                                    type: "object",
                                    fields: [
                                        defineField({ name: "text", title: "Text", type: "string" }),
                                        defineField({
                                            name: "color",
                                            title: "Tailwind Color Class",
                                            type: "string",
                                            description: "e.g. text-[#618d57] or text-[#d84b2d]",
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
            title: "heading",
            subtitle: "subheading",
        },
    },
});