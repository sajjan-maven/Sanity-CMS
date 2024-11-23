import { defineField, defineType } from "sanity";
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
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              description: 'The title of the menu item.'
            },
            {
              name: 'pageReference',
              title: 'Page',
              description: 'The page that the menu item will link to.',
              type: 'reference',
              to: [{ type: 'page' }]
            },
            {
              name: 'isButton',
              title: 'Show as Button',
              type: 'boolean',
              description: 'If checked, the menu item will be shown as a button instead of a link.',
              initialValue: false
            }
          ]
        },
      ],
    }),
  ],
})
