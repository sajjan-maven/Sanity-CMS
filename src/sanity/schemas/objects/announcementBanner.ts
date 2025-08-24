import { defineField, defineType } from 'sanity'
import { FiSettings, FiLayout } from "react-icons/fi";

export default defineType({
  name: 'announcementBanner',
  title: 'Announcement Banner',
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
      name: 'show',
      title: 'Show Banner',
      type: 'boolean',
      initialValue: true,
      group: 'settings',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'simplerColor',
      group: 'content',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      group: 'content',
    }),
    defineField({
      name: 'textColor',
      title: 'Text Color',
      type: 'simplerColor',
      group: 'content',
    }),
    defineField({
      name: 'text',
      title: 'Banner Text',
      type: 'string',
      validation: Rule => Rule.required(),
      group: 'content',
    }),
    defineField({
      name: 'linkColor',
      title: 'Link Color',
      type: 'simplerColor',
      group: 'content',
    }),
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'link',
      title: 'Link URL',
      type: 'url',
      group: 'content',
    }),
    defineField({
      name: "excludedRoutes",
      title: "Excluded Routes",
      description: "Pages where the announcement bar should be hidden",
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
});
