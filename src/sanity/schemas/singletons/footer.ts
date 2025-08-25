import { defineField, defineType } from 'sanity';
import { FiSettings, FiLayout } from "react-icons/fi";

export default defineType({
  name: 'footer',
  title: 'Footer Settings',
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
      name: 'footerCTA',
      title: 'Footer CTA',
      type: 'footerCTA',
      group: 'content',
    }),
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'footerLinks',
      group: 'content',
    }),
    defineField({
      name: 'footerCoLinks',
      title: 'Footer Corporate Links',
      type: 'footerCoLinks',
      group: 'content',
    }),
    defineField({
      name: "footerExcludedRoutes",
      title: "Footer Exclusion Route",
      description: "Pages where the Footer should be hidden",
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
    defineField({
      name: "footerCTAexcludedRoutes",
      title: "CTA Section Excluded In Footer",
      description: "Pages where the Footer CTA should be hidden",
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
        title: 'Footer Settings',
      }
    },
  },
})