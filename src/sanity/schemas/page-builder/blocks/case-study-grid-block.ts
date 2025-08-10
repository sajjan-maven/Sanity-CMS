import { defineField, defineType } from 'sanity';
import { FaThLarge } from 'react-icons/fa';

export default defineType({
  name: 'caseStudyGridBlock',
  title: 'Case Study Grid Block',
  type: 'object',
  icon: FaThLarge,
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'Case Studies'
    }),
    defineField({
      name: 'featuredCaseStudy',
      title: 'Featured Case Study',
      type: 'object',
      fields: [
        defineField({
          name: 'company',
          title: 'Company Name',
          type: 'string',
          validation: Rule => Rule.required()
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
          title: 'Background Color',
          type: 'simplerColor',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 3,
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'link',
          title: 'Case Study Link',
          type: 'string',
          initialValue: '/case-studies/',
          validation: Rule => Rule.required()
        }),
        defineField({
          name: 'buttonText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Read story'
        })
      ]
    }),
    defineField({
      name: 'caseStudies',
      title: 'Case Studies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'company',
              title: 'Company Name',
              type: 'string',
              validation: Rule => Rule.required()
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
              title: 'Background Color',
              type: 'simplerColor',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'link',
              title: 'Case Study Link',
              type: 'string',
              initialValue: '/case-studies/',
              validation: Rule => Rule.required()
            })
          ]
        }
      ],
      validation: Rule => Rule.min(2).max(4)
    }),
    defineField({
      name: 'spacing',
      title: 'Spacing',
      type: 'object',
      fields: [
        defineField({
          name: 'top',
          title: 'Top Padding',
          type: 'number',
          initialValue: 80
        }),
        defineField({
          name: 'bottom',
          title: 'Bottom Padding',
          type: 'number',
          initialValue: 80
        })
      ]
    })
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title: title || 'Case Study Grid',
        subtitle: 'Grid Layout Block'
      }
    }
  }
});