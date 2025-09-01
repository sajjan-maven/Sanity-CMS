import { defineField, defineType } from "sanity";

export default defineType({
    name: 'sitemap',
    title: 'Sitemap',
    type: 'document',
    fields: [
        defineField({
            name: 'addToSitemap',
            title: 'Add to Sitemap',
            type: 'array',
            of: [
                {
                    type: 'string',
                    title: 'Path',
                    description: 'The URL path to add to the sitemap (e.g., /new-page)',
                    validation: Rule => Rule.regex(/^\/[a-zA-Z0-9\-_\/]*$/).error('Path must start with / and contain only letters, numbers, hyphens, underscores, and slashes'),
                },
            ],
        }),
        defineField({
            name: 'removeFromSitemap',
            title: 'Remove from Sitemap',
            type: 'array',
            of: [
                {
                    type: 'string',
                    title: 'Path',
                    description: 'The URL path to remove from the sitemap (e.g., /old-page)',
                    validation: Rule => Rule.regex(/^\/[a-zA-Z0-9\-_\/]*$/).error('Path must start with / and contain only letters, numbers, hyphens, underscores, and slashes'),
                },
            ],
        }),
    ],
});
