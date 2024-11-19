import { groq } from "next-sanity";

export const generalSettingsQuery = groq`*[_type == 'generalSettings'][0] {
  siteTitle,
  homePage->{
    title,
    'slug': slug.current,
  }
}` 