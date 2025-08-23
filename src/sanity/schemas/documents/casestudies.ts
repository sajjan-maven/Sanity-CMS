import { FiFile } from "react-icons/fi";
import { fieldsets } from "../misc/fieldsets";
import { defineArrayMember, defineField, defineType } from "sanity";
import { fieldGroups } from "../misc/field-groups";
import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default defineType({
    name: 'casestudies',
    title: 'Case Study',
    type: 'document',
    icon: FiFile,
    fieldsets: [...fieldsets],
    groups: [...fieldGroups],
    orderings: [orderRankOrdering],
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: rule => rule.required()
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
            },
            validation: rule => rule.required()
        }),
        defineField({
            name: 'excerpt',
            description: 'Stort description of case study to display on card',
            title: 'Excerpt',
            type: 'text',
            rows: 4
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
                { type: 'block' },
                { type: 'callToActionObject' },
                { type: 'singleImageObject' },
                { type: 'videoObject' },
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
                to: [{ type: 'casestudies' }]
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
            type: 'casestudies'
        }),
    ]
})