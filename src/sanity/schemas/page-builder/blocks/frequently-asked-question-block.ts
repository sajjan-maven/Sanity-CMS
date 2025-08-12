import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'frequentlyAskedQuestionBlock',
  title: 'Frequently Asked Question Block',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Frequently asked questions'
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [],
                  lists: [],
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' }
                    ],
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'URL',
                        fields: [
                          {
                            title: 'URL',
                            name: 'href',
                            type: 'url',
                            validation: Rule => Rule.uri({
                              scheme: ['http', 'https', 'mailto', 'tel']
                            })
                          }
                        ]
                      }
                    ]
                  }
                }
              ],
              validation: Rule => Rule.required()
            })
          ]
        }
      ],
      validation: Rule => Rule.min(1).max(20)
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'FAQ Section',
        subtitle: 'Frquently Asked Question'
      }
    }
  }
});