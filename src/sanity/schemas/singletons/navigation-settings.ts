import { defineArrayMember, defineField, defineType } from "sanity";
import { fieldsets } from "../misc/fieldsets";
import { fieldGroups } from "../misc/field-groups";

export default defineType({
  name: 'navigationSettings',
  title: 'Navigation Settings',
  type: 'document',
  fieldsets: [ ...fieldsets ],
  groups: [ ...fieldGroups ],
  fields: [
    defineField({
      title: "Navbar Type",
      name: "navbarType",
      type: "string",
      group: 'navbar',
      fieldset: 'navbar',
      options: {
        list: [
          { title: "Classic", value: "classic" },
          { title: "Floating", value: "floating" },
        ],
      },
      initialValue: 'classic',
    }),
    defineField({
      name: 'navbarMenuItems',
      title: 'Menu Items',
      type: 'array',
      group: 'navbar',
      fieldset: 'navbar',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'The title of the menu item.'
            }),
            defineField({
              name: 'pageReference',
              title: 'Page',
              description: 'The page that the menu item will link to.',
              type: 'reference',
              to: [{ type: 'page' }]
            }),
            defineField({
              name: 'isButton',
              title: 'Show as Button',
              type: 'boolean',
              description: 'If checked, the menu item will be shown as a button instead of a link.',
              initialValue: false
            })
          ]
        }),
      ],
    }),
    defineField({
      name: 'footerColumns',
      title: 'Footer Columns',
      type: 'array',
      group: 'footer',
      fieldset: 'footer',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Column Title',
              type: 'string',
            }),
            defineField({
              name: 'menuItems',
              title: 'Menu Items',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                      description: 'The title of the menu item.'
                    }),
                    defineField({
                      name: 'pageReference',
                      title: 'Page',
                      description: 'The page that the menu item will link to.',
                      type: 'reference',
                      to: [{ type: 'page' }]
                    }),
                  ]
                }
              ]
            })
          ]
        })
      ]
    }),
    defineField({
      name: 'footerLegalMenuItems',
      title: 'Legal Menu Items',
      type: 'array',
      group: 'footer',
      fieldset: 'footer',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'The title of the menu item.'
            }),
            defineField({
              name: 'pageReference',
              title: 'Page',
              description: 'The page that the menu item will link to.',
              type: 'reference',
              to: [{ type: 'page' }]
            }),
          ]
        }),
      ],
    }),
  ],
})
