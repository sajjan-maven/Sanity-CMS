import { Users } from "lucide-react";
import { fieldsets } from "../misc/fieldsets";
import { defineField, defineType } from "sanity";
import { fieldGroups } from "../misc/field-groups";

export default defineType({
  name: 'author',
  title: 'Authors',
  type: 'document',
  icon: Users,
  fieldsets: [...fieldsets],
  groups: [...fieldGroups],
  fields: [
    defineField({
      name: 'avatar',
      title: 'Avatar',
      description: 'Size should be 250x250 pixels',
      type: 'image',
    }),
    defineField({
      name: 'name',
      title: 'Author Name',
      type: 'string',
      validation: rule => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Define Author Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: rule => rule.required()
    }),
    defineField({
      name: 'position',
      title: 'Designation (Job Title)',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      rows: 4,
      validation: rule => rule.required()
    }),
    defineField({
      name: 'socials',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  { title: 'X', value: 'x' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'GitHub', value: 'github' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'Website', value: 'website' },
                  { title: 'Other', value: 'other' }
                ],
                layout: 'dropdown'
              }
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
              validation: Rule => Rule.uri({
                scheme: ['http', 'https', 'mailto', 'tel']
              })
            },
            // Conditional field for custom icon
            {
              name: 'customIcon',
              title: 'Custom Icon',
              type: 'image',
              description: 'Upload a custom icon for this social platform',
              // Only show this field when platform is 'other'
              hidden: ({ parent }) => parent?.platform !== 'other'
            },
          ],
          preview: {
            select: {
              platform: 'platform',
              url: 'url',
            },
            prepare({ platform, url }) {
              return {
                title: platform ? `${platform.charAt(0).toUpperCase() + platform.slice(1)}` : 'Social Link',
                subtitle: url,
              }
            }
          }
        }
      ]
    }),
  ]
})

//XYZ add position and social links here