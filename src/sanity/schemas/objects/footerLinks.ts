import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'footerLinks',
  title: 'Footer Links',
  type: 'object',
  fields: [
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
    }),
    // Logo & Social
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'platform', type: 'string', title: 'Platform' }),
            defineField({ name: 'url', type: 'url', title: 'URL' }),
            defineField({ name: 'icon', type: 'image', title: 'Icon', description: 'Icon dimensions: 30px x 30px' })
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
              media: 'icon'
            }
          }
        }
      ],
    }),
    defineField({
      name: 'backedBy',
      title: 'Backed by',
      type: 'image',
    }),

    // Certifications (AICPA, GDPR, CCPA)
    defineField({
      name: 'certifications',
      title: 'Certifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Label' }),
            defineField({ name: 'icon', type: 'image', title: 'Icon', description: 'Icon dimensions: 68px x 68px' })
          ],
          preview: {
            select: {
              title: 'label',
              media: 'icon'
            }
          }
        }
      ],
    }),

    // Review Badges (Capterra, G2)
    defineField({
      name: 'reviewBadges',
      title: 'Review Badges',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'platform', type: 'string', title: 'Platform' }),
            defineField({ name: 'url', type: 'string', title: 'URL' }),
            defineField({ name: 'icon', type: 'image', title: 'Icon', description: 'Icon dimensions: 113px x 54px' })
          ],
          preview: {
            select: {
              title: 'platform',
              subtitle: 'url',
              media: 'icon'
            }
          }
        }
      ]
    }),

    // Link Sections
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Link Label' }),
            defineField({ name: 'url', type: 'string', title: 'URL' }),
            defineField({
              name: 'badge',
              title: 'Badge',
              type: 'string',
              options: {
                list: [
                  { title: 'New', value: 'new' },
                  { title: 'Popular', value: 'popular' }
                ],
                layout: 'radio'
              }
            })
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            }
          }
        }
      ]
    }),    
    defineField({
      name: 'resources',
      title: 'Resources',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Link Label' }),
            defineField({ name: 'url', type: 'string', title: 'URL' }),
            defineField({
              name: 'badge',
              title: 'Badge',
              type: 'string',
              options: {
                list: [
                  { title: 'New', value: 'new' },
                  { title: 'Popular', value: 'popular' }
                ],
                layout: 'radio'
              }
            })
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            }
          }
        }
      ]
    }),    
    defineField({
      name: 'companys',
      title: 'Companys',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Link Label' }),
            defineField({ name: 'url', type: 'string', title: 'URL' }),
            defineField({
              name: 'badge',
              title: 'Badge',
              type: 'string',
              options: {
                list: [
                  { title: 'New', value: 'new' },
                  { title: 'Popular', value: 'popular' }
                ],
                layout: 'radio'
              }
            })
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            }
          }
        }
      ]
    }),    
    defineField({
      name: 'getStarted',
      title: 'Get Started',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Link Label' }),
            defineField({ name: 'url', type: 'string', title: 'URL' }),
            defineField({
              name: 'badge',
              title: 'Badge',
              type: 'string',
              options: {
                list: [
                  { title: 'New', value: 'new' },
                  { title: 'Popular', value: 'popular' }
                ],
                layout: 'radio'
              }
            })
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            }
          }
        }
      ]
    }),    
    defineField({
      name: 'freeTools',
      title: 'Free Tools',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Link Label' }),
            defineField({ name: 'url', type: 'string', title: 'URL' }),
            defineField({
              name: 'badge',
              title: 'Badge',
              type: 'string',
              options: {
                list: [
                  { title: 'New', value: 'new' },
                  { title: 'Popular', value: 'popular' }
                ],
                layout: 'radio'
              }
            })
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            }
          }
        }
      ]
    }),    
    defineField({
      name: 'customers',
      title: 'Customers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Link Label' }),
            defineField({ name: 'url', type: 'string', title: 'URL' }),
            defineField({
              name: 'badge',
              title: 'Badge',
              type: 'string',
              options: {
                list: [
                  { title: 'New', value: 'new' },
                  { title: 'Popular', value: 'popular' }
                ],
                layout: 'radio'
              }
            })
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            }
          }
        }
      ]
    }),    
    defineField({
      name: 'popularGuides',
      title: 'Popular Guides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string', title: 'Link Label' }),
            defineField({ name: 'url', type: 'string', title: 'URL' }),
            defineField({
              name: 'badge',
              title: 'Badge',
              type: 'string',
              options: {
                list: [
                  { title: 'New', value: 'new' },
                  { title: 'Popular', value: 'popular' }
                ],
                layout: 'radio'
              }
            })
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            }
          }
        }
      ]
    }),
  ]
});