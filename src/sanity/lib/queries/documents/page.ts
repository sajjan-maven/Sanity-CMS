import { seo } from "../fragments/seo";
import { defineQuery } from "next-sanity";
import { pageBuilder } from "../fragments/page-builder";

export const pagePathsQuery = defineQuery(`*[_type == "page" && defined(slug.current)][] {
  'params': { 'slug': slug.current }
}`);

export const pageBySlugQuery = defineQuery(`*[_type == 'page' && slug.current == $slug][0] {
  _type,
  _id,
  title,
  'slug': slug.current,
  ${pageBuilder},
  ${seo}
}`);