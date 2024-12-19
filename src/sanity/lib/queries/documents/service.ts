import { groq } from "next-sanity";
import { seo } from "../fragments/seo";
import { pageBuilder } from "../fragments/page-builder";

export const servicePathsQuery = groq`*[_type == "service" && defined(slug.current)][] {
  'params': { 'slug': slug.current }
}`;

export const serviceBySlugQuery = groq`*[_type == 'service' && slug.current == $slug][0] {
  _type,
  title,
  'slug': slug.current,
  ${pageBuilder},
  ${seo}
}`

export const allServicesQuery = groq`*[_type == 'service'] {
  _type,
  title,
  'slug': slug.current,
  ${pageBuilder},
  ${seo}
}`