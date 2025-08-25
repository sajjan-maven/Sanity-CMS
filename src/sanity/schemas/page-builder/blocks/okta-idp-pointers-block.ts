import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'oktaIdpPointers',
    title: 'Okta IdP Pointers Section',
    type: 'object',
    fields: [
        defineField({
            name: 'title',
            title: 'Section Title',
            type: 'string',
            initialValue: 'Stitchflow covers the gaps that disconnected apps create',
            validation: Rule => Rule.required()
        }),
        defineField({
            name: 'pointers',
            title: 'Pointers',
            type: 'array',
            of: [
                {
                    name: 'pointer',
                    title: 'Pointer',
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'text',
                            title: 'Pointer Text',
                            type: 'string',
                            validation: Rule => Rule.required()
                        })
                    ],
                    preview: {
                        select: {
                            title: 'text'
                        }
                    }
                }
            ],
            validation: Rule => Rule.min(1).required()
        })
    ],
    preview: {
        select: {
            title: 'title'
        },
        prepare({ title }) {
            return {
                title: title || 'Okta IdP Pointers Section',
                subtitle: 'Section with heading and pointers list'
            }
        }
    }
});