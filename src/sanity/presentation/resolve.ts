import { defineLocations, PresentationPluginOptions } from 'sanity/presentation';

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    page: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `/${doc?.slug}`,
          },
          { title: 'Page index', href: `/home` },
        ],
      }),
    }),
    post: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `/blog/${doc?.slug}`,
          },
          { title: 'Posts Index', href: `/blog` },
        ],
      }),
    }),
    service: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `/services/${doc?.slug}`,
          },
          { title: 'Services Index', href: `/services` },
        ],
      }),
    }),
    project: defineLocations({
      select: {
        title: 'title',
        slug: 'slug.current',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Untitled',
            href: `/projects/${doc?.slug}`,
          },
          { title: 'Projects Index', href: `/projects` },
        ],
      }),
    }),
  },
}