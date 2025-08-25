import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'oktaIdpWhySaasSection',
    title: 'Why SaaS Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'How non-SSO, non-API apps derail your identity investments',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'lineImage',
            title: 'Divider Image',
            type: 'image',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                    initialValue: 'Line Container',
                    validation: Rule => Rule.required()
                }),
                defineField({
                    name: 'width',
                    title: 'Display Width (px)',
                    type: 'number',
                    initialValue: 900,
                    validation: Rule => Rule.min(100).max(2000)
                }),
                defineField({
                    name: 'height',
                    title: 'Display Height (px)',
                    type: 'number',
                    initialValue: 146,
                    validation: Rule => Rule.min(50).max(1000)
                })
            ]
        }),
        defineField({
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [
                {
                    name: 'card',
                    title: 'Card',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'mainHeading',
                            title: 'Main Heading',
                            type: 'string',
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            rows: 3,
                            validation: Rule => Rule.required()
                        }),
                        defineField({
                            name: 'image',
                            title: 'Card Image',
                            type: 'image',
                            options: { hotspot: true },
                            fields: [
                                defineField({
                                    name: 'alt',
                                    title: 'Alt Text',
                                    type: 'string',
                                    validation: Rule => Rule.required()
                                }),
                                defineField({
                                    name: 'width',
                                    title: 'Display Width (px)',
                                    type: 'number',
                                    initialValue: 283,
                                    validation: Rule => Rule.min(100).max(1000)
                                }),
                                defineField({
                                    name: 'height',
                                    title: 'Display Height (px)',
                                    type: 'number',
                                    initialValue: 240,
                                    validation: Rule => Rule.min(100).max(1000)
                                })
                            ]
                        })
                    ],
                    preview: {
                        select: {
                            title: 'mainHeading',
                            subtitle: 'description',
                            media: 'image'
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
            media: 'lineImage'
        },
        prepare({ title, media }) {
            return {
                title: title || 'Why SaaS Section',
                subtitle: 'Section with heading, divider image, and cards',
                media
            }
        }
    }
});