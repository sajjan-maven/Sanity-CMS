import { defineQuery } from "next-sanity";

export const generalSettingsQuery = defineQuery(`*[_type == 'generalSettings'][0] {
  siteTitle,
  copyright,
  homePage->{
    title,
    'slug': slug.current,
    "seo": {
      "title": coalesce(seo.title, title, ""),
      "description": coalesce(seo.description,  ""),
      "noIndex": seo.noIndex == true
    },
  }
}`); 

export const blogSettingsQuery = defineQuery(`*[_type == 'blogSettings'][0] {
  showRelatedPosts,
  showTableOfContents,
  showPostsByCategory
}`);