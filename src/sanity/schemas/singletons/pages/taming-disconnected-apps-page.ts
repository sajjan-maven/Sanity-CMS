import { defineArrayMember, defineField, defineType } from "sanity";
import { fieldsets } from "../../misc/fieldsets";
import { fieldGroups } from "../../misc/field-groups";

export default defineType({
    name: 'tamingDisconnectedAppsPage',
    title: 'Taming Disconnected Apps Page',
    type: 'document',
    fieldsets: [...fieldsets],
    groups: [...fieldGroups],
    fields: [
        defineField({
            name: 'badge',
            title: 'Badge Text',
            type: 'string',
            description: 'Badge text like "Webinar"',
        }),
        defineField({
            name: 'title',
            title: 'Main Title',
            type: 'string',
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description Paragraphs',
            type: 'array',
            of: [{
                type: 'text',
                rows: 5,
            }],
        }),
        defineField({
            name: 'learningPoints',
            title: 'Learning Points',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'keyChallenges',
            title: 'Key Challenges',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'formThumbnail',
            title: 'Form Thumbnail Image',
            type: 'image',
        }),
        defineField({
            name: 'videoId',
            title: 'YouTube Video ID',
            type: 'string',
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seoObject',
        }),
    ],
});
