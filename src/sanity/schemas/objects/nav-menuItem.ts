import { FolderIcon } from 'lucide-react';
import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'menuItem',
    title: 'Menu Item',
    type: 'object',
    fields: [
      defineField({
        name: 'name',
        title: 'Menu Item Name',
        type: 'string',
        validation: Rule => Rule.required(),
      }),
      defineField({
        name: 'hasDropdown',
        title: 'Has Dropdown',
        type: 'boolean',
        initialValue: true,
      }),
      defineField({
        name: 'path',
        title: 'Path',
        type: 'string',
        hidden: ({ parent }) => parent?.hasDropdown === true,
        validation: Rule => 
          Rule.custom((path, context) => {
            const parent = context?.parent as { hasDropdown?: boolean } | undefined;
            if (parent?.hasDropdown === false && !path) {
              return 'Path is required when there is no dropdown';
            }
            return true
          })
      }),
      defineField({
        name: 'dropdownItems',
        title: 'Dropdown Items',
        type: 'array',
        of: [{ type: 'dropdownItem' }],
        hidden: ({ parent }) => !parent?.hasDropdown,
      }),
    ],
    preview: {
      select: {
        title: 'name',
        hasDropdown: 'hasDropdown',
      },
      prepare(selection) {
        const { title, hasDropdown } = selection
        return {
          title: title ?? 'No title set. Add one inside this block',
          subtitle: hasDropdown ? 'Dropdown' : 'Link',
        }
      },
    },
  });