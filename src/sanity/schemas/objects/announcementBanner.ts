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
  ],
});
