import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'avatarWithDetails',
  title: 'Avatar With Details',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Section Title',
      type: 'string',
    }),
    defineField({
      name: 'avatarList',
      title: 'Avatar List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              name: 'avatar',
              title: 'Avatar',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: Rule => Rule.required(),
            },
            {
              name: 'bio',
              title: 'Bio',
              type: 'text',
              rows: 4,
              validation: Rule => Rule.required(),
            },
            {
              name: 'socialLinks',
              title: 'Social Links',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    {
                      name: 'name',
                      title: 'Platform Name',
                      type: 'string',
                      description: 'e.g., LinkedIn, Twitter, etc.',
                      validation: Rule => Rule.required(),
                    },
                    {
                      name: 'url',
                      title: 'URL',
                      type: 'url',
                      validation: Rule => Rule.required(),
                    },
                    {
                      name: 'icon',
                      title: 'Custom Icon',
                      type: 'image',
                      description: 'Upload custom icon for this platform',
                    },
                  ],
                  preview: {
                    select: {
                      title: 'name',
                      subtitle: 'url',
                      media: 'icon',
                    },
                  },
                },
              ],
            },
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'title',
              media: 'avatar',
            },
          },
        },
      ],
    }),
  ],
})