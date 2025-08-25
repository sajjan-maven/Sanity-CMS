import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'oktaIdpHeroSection',
    title: 'Okta IdP Hero Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Main Title',
            type: 'string',
            initialValue: 'Get 100% visibility',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
            description: 'Appears inside the highlighted bordered badge',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
            initialValue:
                'Stitchflow completes your identity maturity journey by finding and fixing orphaned, hidden and unused accounts not integrated with Okta and Okta Workflows.',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    initialValue: 'Okta Hero',
                    validation: Rule => Rule.required()
                }),
                defineField({
                    name: 'width',
                    title: 'Display Width (px)',
                    type: 'number',
                    initialValue: 560,
                    validation: Rule => Rule.min(100).max(1200)
                }),
                defineField({
                    name: 'height',
                    title: 'Display Height (px)',
                    type: 'number',
                    initialValue: 600,
                    validation: Rule => Rule.min(100).max(1200)
                })
            ],
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'marqueeImages',
            title: 'Trusted Logos',
            type: 'array',
            of: [
                {
                    name: 'marqueeImage',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'asset',
                            title: 'Logo Image',
                            type: 'image',
                            options: { hotspot: false },
                            fields: [
                                defineField({
                                    name: 'alt',
                                    title: 'Alt Text',
                                    type: 'string',
                                    initialValue: 'Company logo',
                                }),
                            ],
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'width',
                            title: 'Display Width (px)',
                            type: 'number',
                            initialValue: 150,
                            validation: Rule => Rule.min(50).max(400)
                        }),
                        defineField({
                            name: 'height',
                            title: 'Display Height (px)',
                            type: 'number',
                            initialValue: 40,
                            validation: Rule => Rule.min(20).max(200)
                        })
                    ],
                    preview: {
                        select: {
                            media: 'asset',
                            subtitle: 'asset.alt'
                        },
                        prepare({ media, subtitle }) {
                            return {
                                title: subtitle || 'Logo',
                                media
                            }
                        }
                    }
                }
            ],
            validation: Rule => Rule.min(1).required()
        })
    ],
    preview: {
        select: {
            title: 'title',
            media: 'heroImage'
        },
        prepare({ title, media }) {
            return {
                title: title || 'Okta IdP Hero Section',
                subtitle: 'Hero section with email capture and logos',
                media
            }
        }
    }
});