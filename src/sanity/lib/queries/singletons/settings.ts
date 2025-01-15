import { defineQuery } from "next-sanity";

export const generalSettingsQuery = defineQuery(`*[_type == 'generalSettings'][0] {
  siteTitle,
  copyright,
  homePage->{
    title,
    'slug': slug.current,
  }
}`); 

export const blogSettingsQuery = defineQuery(`*[_type == 'blogSettings'][0] {
  showRelatedPosts,
  showTableOfContents,
  showPostsByCategory
}`);