import { defineQuery } from "next-sanity";
import { pageBuilder } from "../fragments/page-builder";

export const SERVICE_SLUGS_QUERY = defineQuery(`*[_type == "service" && defined(slug.current)] {
  'params': { 'slug': slug.current }
}`);

export const SERVICE_BY_SLUG_QUERY = defineQuery(`*[_type == 'service' && slug.current == $slug][0] {
  _type,
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

export const ALL_SERVICES_QUERY = defineQuery(`*[_type == 'service'] {
  _type,
  title,
  'slug': slug.current,
  ${pageBuilder},
}`);

export const SERVICES_PAGE_QUERY = defineQuery(`*[_type == 'servicesPage'][0] {
  _type,
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