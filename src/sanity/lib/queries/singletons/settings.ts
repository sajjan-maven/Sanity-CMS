import { groq } from "next-sanity";

export const generalSettingsQuery = groq`*[_type == 'generalSettings'][0] {
  siteTitle,
  copyright,
  homePage->{
    title,
    'slug': slug.current,
  }
}` 

export const blogSettingsQuery = groq`*[_type == 'blogSettings'][0] {
  showRelatedPosts,
  showTableOfContents,
  showPostsByCategory
}` 