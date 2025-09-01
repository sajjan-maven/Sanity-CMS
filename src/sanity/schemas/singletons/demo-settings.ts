import { fieldsets } from "../misc/fieldsets";
import { defineField, defineType } from "sanity";
import { fieldGroups } from "../misc/field-groups";

export default defineType({
    name: 'demoSettings',
    title: 'Demo Settings',
    type: 'document',
    fieldsets: [...fieldsets],
    groups: [...fieldGroups],
    fields: [
        defineField({
            name: 'mainHeading',
            title: 'Main Heading',
            type: 'string',
            validation: rule => rule.required(),
            description: 'The main heading displayed in the left section'
        }),
        defineField({
            name: 'benefits',
            title: 'Benefits',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            type: 'image',
                            validation: rule => rule.required()
                        }),
                        defineField({
                            name: 'text',
                            title: 'Text',
                            type: 'string',
                            validation: rule => rule.required()
                        })
                    ],
                    preview: {
                        select: {
                            title: 'text',
                            media: 'icon'
                        }
                    }
                }
            ],
            validation: rule => rule.required().min(1)
        }),
        defineField({
            name: 'trustedByText',
            title: 'Trusted By Text',
            type: 'string',
            validation: rule => rule.required(),
            description: 'Text displayed above the logos marquee'
        }),
        defineField({
            name: 'testimonialCard',
            title: 'Featured Testimonial Card',
            type: 'quoteCardObject',
            validation: rule => rule.required(),
            description: 'The testimonial card displayed in the left section'
        }),
        defineField({
            name: 'testimonialsHeading',
            title: 'Testimonials Section Heading',
            type: 'string',
            validation: rule => rule.required(),
            description: 'Heading for G2 testimonials section'
        }),
        defineField({
            name: 'testimonialsG2',
            title: 'G2 Testimonials',
            type: 'string',
            validation: rule => rule.required(),
        }),
        defineField({
            name: 'logos',
            title: 'Company Logos',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true
                    }
                }
            ],
            validation: rule => rule.required().min(1),
            description: 'Logos displayed in the marquee slider'
        }),
        defineField({
            name: 'demoComponentHeading',
            title: 'Demo Component Heading',
            type: 'string',
            validation: rule => rule.required(),
            description: 'Heading displayed in the demo form section'
        }),
        defineField({
            name: "seo",
            title: 'SEO',
            type: "seoObject",
            description: 'SEO metadata for the demo page'
        }),
    ],
    preview: {
        prepare() {
            return {
                title: 'Demo Settings',
            }
        },
    },
})
