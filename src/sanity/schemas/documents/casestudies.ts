import { FiFile } from "react-icons/fi";
import { fieldsets } from "../misc/fieldsets";
import { defineArrayMember, defineField, defineType } from "sanity";
import { fieldGroups } from "../misc/field-groups";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default defineType({
    name: 'casestudy',
    title: 'Case Study',
    type: 'document',
    icon: FiFile,
    fieldsets: [...fieldsets],
    groups: [...fieldGroups],
    orderings: [orderRankOrdering],
    fields: [
        defineField({
            name: 'company',
            title: 'Company Name',
            type: 'string',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'company',
            },
            validation: rule => rule.required()
        }),
        defineField({
            name: 'logo',
            title: 'Company Logo',
            type: 'image',
            options: { hotspot: true },
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'backgroundColor',
            title: 'Card Logo Background Color',
            description: 'Company based background accent color',
            type: 'simplerColor',
        }),
        defineField({
            name: 'cardTitle',
            description: 'Title for related case study card',
            title: 'Case Study Title (Card)',
            type: 'text',
            rows: 4,
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'cardSummary',
            description: 'Short description of case study to display on card',
            title: 'Case Study Summary (Card)',
            type: 'text',
            rows: 4,
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' },
                { type: 'statsSectionObject' },
                { type: 'quoteCardObject' },
                // Dummy need analysis
                defineArrayMember({
                    type: 'table',
                }),
            ],
        }),
        defineField({
            title: "Related Case Studies",
            name: "relatedCaseStudies",
            type: "string",
            description: "Defaults to posts of the same category.",
            options: {
                list: [
                    { title: "Autofill", value: "autofill" },
                    { title: "Custom", value: "custom" },
                ],
            },
            initialValue: 'autofill',
        }),
        defineField({
            title: "Choose Related Posts",
            name: "customRelatedPosts",
            type: "array",
            of: [{
                type: 'reference',
                to: [{ type: 'casestudy' }]
            }],
            validation: rule => rule.max(3),
            hidden: ({ parent }) => parent?.relatedPosts !== 'custom'
        }),
        defineField({
            name: "seo",
            title: 'SEO',
            type: "seoObject",
        }),
        orderRankField({
            type: 'casestudy'
        }),
    ]
})