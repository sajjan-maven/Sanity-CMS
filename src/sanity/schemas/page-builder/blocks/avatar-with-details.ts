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
        name: 'spacing',
        title: 'Spacing Options',
        type: 'object',
        fields: [
          {
            name: 'topSpacing',
            title: 'Top Spacing',
            type: 'string',
            description: 'Spacing above the section (desktop)',
            options: {
              list: [
                {title: 'None', value: 'pt-0'},
                {title: 'Small', value: 'pt-8'},
                {title: 'Medium', value: 'pt-16'},
                {title: 'Large', value: 'pt-20'},
                {title: 'X-Large', value: 'pt-24'},
              ],
            },
            initialValue: 'pt-20',
          },
          {
            name: 'topSpacingMobile',
            title: 'Top Spacing (Mobile)',
            type: 'string',
            description: 'Spacing above the section (mobile)',
            options: {
              list: [
                {title: 'None', value: 'pt-0'},
                {title: 'Small', value: 'pt-4'},
                {title: 'Medium', value: 'pt-8'},
                {title: 'Large', value: 'pt-12'},
              ],
            },
            initialValue: 'pt-12',
          },
          {
            name: 'bottomSpacing',
            title: 'Bottom Spacing',
            type: 'string',
            description: 'Spacing below the section (desktop)',
            options: {
              list: [
                {title: 'None', value: 'pb-0'},
                {title: 'Small', value: 'pb-8'},
                {title: 'Medium', value: 'pb-16'},
                {title: 'Large', value: 'pb-20'},
                {title: 'X-Large', value: 'pb-24'},
              ],
            },
            initialValue: 'pb-20',
          },
          {
            name: 'bottomSpacingMobile',
            title: 'Bottom Spacing (Mobile)',
            type: 'string',
            description: 'Spacing below the section (mobile)',
            options: {
              list: [
                {title: 'None', value: 'pb-0'},
                {title: 'Small', value: 'pb-4'},
                {title: 'Medium', value: 'pb-8'},
                {title: 'Large', value: 'pb-12'},
              ],
            },
            initialValue: 'pb-12',
          },
          {
            name: 'headingBottomSpacing',
            title: 'Heading Bottom Spacing',
            type: 'string',
            description: 'Spacing below the heading (desktop)',
            options: {
              list: [
                {title: 'Small', value: 'mb-4'},
                {title: 'Medium', value: 'mb-6'},
                {title: 'Large', value: 'mb-8'},
                {title: 'X-Large', value: 'mb-10'},
              ],
            },
            initialValue: 'mb-6 md:mb-10',
          },
          {
            name: 'headingBottomSpacingMobile',
            title: 'Heading Bottom Spacing (Mobile)',
            type: 'string',
            description: 'Spacing below the heading (mobile)',
            options: {
              list: [
                {title: 'Small', value: 'mb-2'},
                {title: 'Medium', value: 'mb-4'},
                {title: 'Large', value: 'mb-6'},
              ],
            },
            initialValue: 'mb-4',
          },
        ],
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