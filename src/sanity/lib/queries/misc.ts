import { defineQuery } from "next-sanity";

// QWER 4
export const sitemapQuery = defineQuery(`
  *[_type in ["page", "post", "project", "service", "blogPage", "projectsPage", "servicesPage"] && defined(slug.current)] {
    "href": select(
      _type == "page" => "/" + slug.current,
      _type == "post" => "/blog/" + slug.current,
      _type == "blogPage" => "/blog",
      _type == "project" => "/projects/" + slug.current,
      slug.current
    ),
    _updatedAt
  }
`)

export const sitemapSettingsQuery = defineQuery(`
  *[_type == "sitemap"][0] {
    addToSitemap,
    removeFromSitemap
  }
`)

export const redirectsQuery = defineQuery(`
  *[_type == "redirect" && isEnabled == true] {
      source,
      destination,
      permanent
  }
`);
