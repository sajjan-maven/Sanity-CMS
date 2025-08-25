import { defineField, defineType } from 'sanity'
import { FiSettings, FiLayout } from "react-icons/fi";

export default defineType({
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  groups: [
    {
      name: 'settings',
      title: 'Settings',
      icon: FiSettings,
    },
    {
      name: 'content',
      title: 'Content',
      icon: FiLayout,
      default: true,
    },
  ],
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'logo',
      group: 'content',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [{ type: 'menuItem' }],
      group: 'content',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ctaButton',
      title: 'Call to Action Button',
      type: 'ctaButton',
      group: 'content',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "excludedRoutes",
      title: "Excluded Routes",
      description: "Pages where the Navbar should be hidden",
      type: "array",
      of: [
        {
          type: "object",
          name: "routeExclusion",
          title: "Route Exclusion",
          fields: [
            defineField({
              name: "path",
              title: "Path",
              description: "Enter the route path (e.g., /about or /contact)",
              type: "string",
              validation: (Rule) => [
                Rule.required().error("Path is required"),
                Rule.regex(/^\/[a-zA-Z0-9\-_\/]*$/, {
                  name: "path",
                  invert: false,
                }).error("Path must start with / and contain only valid URL characters"),
              ],
            }),
            defineField({
              name: "note",
              title: "Internal Note",
              description: "Optional note about why this route is excluded",
              type: "string",
            }),
          ],
          preview: {
            select: {
              path: "path",
              note: "note",
            },
            prepare({ path, note }) {
              return {
                title: path || "Untitled path",
                subtitle: note,
              };
            },
          },
        },
      ],
      group: 'settings',
      validation: (Rule) => Rule.unique(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Header Configuration',
      };
    },
  },
});