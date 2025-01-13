import { groq } from "next-sanity";
import { seo } from "../fragments/seo";
import { pageBuilder } from "../fragments/page-builder";

export const pagePathsQuery = groq`*[_type == "page" && defined(slug.current)][] {
  'params': { 'slug': slug.current }
}`;

export const pageBySlugQuery = groq`*[_type == 'page' && slug.current == $slug][0] {
  _type,
  title,
  'slug': slug.current,
  ${pageBuilder},
  ${seo}
}`