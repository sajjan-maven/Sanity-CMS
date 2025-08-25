import { defineField, defineType } from "sanity";

export default defineType({
    name: "oktaIdpFaqSection",
    title: "Okta IdP FAQ Section",
    type: "object",
    fields: [
        defineField({
            name: "heading",
            title: "Heading",
            type: "string",
            initialValue: "Frequently Asked Questions",
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "faqs",
            title: "FAQs",
            type: "array",
            of: [
                {
                    name: "faqItem",
                    title: "FAQ Item",
                    type: "object",
                    fields: [
                        defineField({
                            name: "question",
                            title: "Question",
                            type: "string",
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "answer",
                            title: "Answer",
                            type: "text",
                            rows: 3,
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                    preview: {
                        select: {
                            title: "question",
                            subtitle: "answer",
                        },
                    },
                },
            ],
            validation: (Rule) => Rule.min(1).required(),
        }),
    ],
    preview: {
        select: {
            title: "heading",
        },
        prepare({ title }) {
            return {
                title: title || "Okta IdP FAQ Section",
                subtitle: "FAQ accordion section",
            };
        },
    },
});