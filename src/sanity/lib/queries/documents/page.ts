import { defineQuery } from "next-sanity";
import { pageBuilder } from "../fragments/page-builder";

export const PAGE_SLUGS_QUERY = defineQuery(`*[_type == "page" && defined(slug.current)] {
  'params': { 'slug': slug.current }
}`);

export const PAGE_BY_SLUG_QUERY = defineQuery(`*[_type == 'page' && slug.current == $slug][0] {
  _type,
  _id,
  title,
  'slug': slug.current,
  ${pageBuilder},
  "seo": {
    "title": coalesce(seo.title, title, ""),
    "description": coalesce(seo.description,  ""),
    "noIndex": seo.noIndex == true,
    "image": seo.image,
  },
}`);