import { seo } from "../fragments/seo";
import { defineQuery } from "next-sanity";
import { pageBuilder } from "../fragments/page-builder";

export const servicePathsQuery = defineQuery(`*[_type == "service" && defined(slug.current)][] {
  'params': { 'slug': slug.current }
}`);

export const serviceBySlugQuery = defineQuery(`*[_type == 'service' && slug.current == $slug][0] {
  _type,
  title,
  'slug': slug.current,
  ${pageBuilder},
  ${seo}
}`);

export const allServicesQuery = defineQuery(`*[_type == 'service'] {
  _type,
  title,
  'slug': slug.current,
  ${pageBuilder},
  ${seo}
}`);

export const servicesPageQuery = defineQuery(`*[_type == 'servicesPage'][0] {
  _type,
  title,
  'slug': slug.current,
  ${pageBuilder},
  ${seo}
}`);