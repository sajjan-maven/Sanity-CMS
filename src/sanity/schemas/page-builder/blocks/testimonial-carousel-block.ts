import { defineField, defineType } from 'sanity';
import { FaQuoteLeft } from 'react-icons/fa';

export default defineType({
  name: 'testimonialCarouselBlock',
  title: 'Testimonial Carousel Block',
  type: 'object',
  icon: FaQuoteLeft,
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      initialValue: 'IT teams who have tamed their disconnected environments with Stitchflow',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'text',
              title: 'Testimonial Text',
              type: 'text',
              rows: 4,
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'author',
              title: 'Author Name',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'position',
              title: 'Author Position',
              type: 'string',
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'avatar',
              title: 'Author Avatar',
              type: 'image',
              options: { hotspot: true },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  description: 'Description of the image for accessibility',
                  initialValue: 'Portrait of {author}'
                })
              ],
              validation: Rule => Rule.required()
            }),
            defineField({
              name: 'companyLogo',
              title: 'Company Logo',
              type: 'image',
              options: { hotspot: false },
              fields: [
                defineField({
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  initialValue: '{author}\'s company logo'
                }),
                defineField({
                  name: 'width',
                  title: 'Display Width (px)',
                  type: 'number',
                  initialValue: 150,
                  validation: Rule => Rule.required().min(50).max(300)
                }),
                defineField({
                  name: 'height',
                  title: 'Display Height (px)',
                  type: 'number',
                  initialValue: 40,
                  validation: Rule => Rule.required().min(20).max(100)
                })
              ],
              validation: Rule => Rule.required()
            })
          ],
          preview: {
            select: {
              author: 'author',
              position: 'position',
              media: 'avatar'
            },
            prepare({ author, position, media }) {
              return {
                title: author,
                subtitle: position,
                media
              }
            }
          }
        }
      ],
      validation: Rule => Rule.min(3).required()
    })
  ],
  preview: {
    select: {
      title: 'title',
      testimonialCount: 'testimonials.length'
    },
    prepare({ title, testimonialCount }) {
      return {
        title: title || 'Testimonial Carousel',
        subtitle: `${testimonialCount || 0} testimonials`
      }
    }
  }
});