import { BarChart3 } from "lucide-react";
import { defineField, defineType } from "sanity";

export default defineType({
    name: 'statsSectionObject',
    title: 'Stats Section',
    type: 'object',
    fields: [
        defineField({
            name: 'topFullWidthData',
            title: 'Top Full Width Data',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'value',
                            title: 'Value',
                            type: 'array',
                            of: [{ type: 'block' }],
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'leftSideData',
            title: 'Left Side Data',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'value',
                            title: 'Value',
                            type: 'array',
                            of: [{ type: 'block' }],
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'rightSideData',
            title: 'Right Side Data',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'value',
                            title: 'Value',
                            type: 'array',
                            of: [{ type: 'block' }],
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        }),
                    ],
                },
            ],
        }),
        defineField({
            name: 'bottomFullWidthData',
            title: 'Bottom Full Width Data',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'value',
                            title: 'Value',
                            type: 'array',
                            of: [{ type: 'block' }],
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                        }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'Stats Section',
        },
        prepare() {
            return {
                title: 'Stats Section',
                subtitle: 'Configurable stats block',
                media: BarChart3,
            };
        },
    },
});
