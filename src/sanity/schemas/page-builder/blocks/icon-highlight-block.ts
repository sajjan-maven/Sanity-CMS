// schemas/insightsWrapper.js

export default {
    name: 'iconHighlightBlock',
    title: 'Icon Highlight Block',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Section Title',
        type: 'string',
        description: 'The main heading for the section',
      },
      {
        name: 'cards',
        title: 'Insight Cards',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Card Image',
                type: 'image',
                options: {
                  hotspot: true,
                },
              },
              {
                name: 'text',
                title: 'Card Text',
                type: 'text',
                rows: 3,
              },
            ],
            preview: {
              select: {
                title: 'text',
                media: 'image',
              },
            },
          },
        ],
      },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }: any) {
          return {
            title: title,
            subtitle: 'Icon Highlight Block'
          }
        }
      }
  };