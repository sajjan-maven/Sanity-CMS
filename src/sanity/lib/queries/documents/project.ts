import { defineQuery } from "next-sanity";
import { pageBuilder } from "../fragments/page-builder";

export const PROJECT_SLUGS_QUERY = defineQuery(`*[_type == "project" && defined(slug.current)] {
  'params': { 'slug': slug.current }
}`);

export const PROJECTS_PAGE_QUERY = defineQuery(`*[_type == 'projectsPage'][0] {
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

export const PROJECT_PATHS_QUERY = defineQuery(`*[_type == "project" && defined(slug.current)][] {
  'params': { 'slug': slug.current }
}`);

export const PROJECT_BY_SLUG_QUERY = defineQuery(`*[_type == 'project' && slug.current == $slug][0] {
  _id,
  _type,
  title,
  'slug': slug.current,
  category->{
    _id,
    title,
    'slug': slug.current,
  },
  ${pageBuilder},
  "seo": {
    "title": coalesce(seo.title, title, ""),
    "description": coalesce(seo.description,  ""),
    "noIndex": seo.noIndex == true,
    "image": seo.image,
  },
}`);

export const ALL_PROJECTS_QUERY = defineQuery(`*[_type == 'project'] {
  _id,
  _type,
  title,
  'slug': slug.current,
  excerpt,
  category->{
    _id,
    title,
    'slug': slug.current,
  },
  image { 
    asset->{ url }, 
    height,
    altText 
  },
  ${pageBuilder},
}`);

export const ALL_PROJECT_CATEGORIES_QUERY = defineQuery(`*[_type == 'projectCategory'] | order(orderRank asc) {
  _id,
  _type,
  title,
  'slug': slug.current,
}`);

export const PROJECTS_BY_CATEGORY_QUERY = defineQuery(`*[_type == 'project' && category->slug.current == $slug] {
  _id,
  _type,
  _createdAt,
  title,
  'slug': slug.current,
  excerpt,
  category->{
    _id,
    title,
    'slug': slug.current,
  },
  image { 
    asset->{ url }, 
    height,
    altText 
  },
}`);

export const PROJECT_CATEGORY_BY_SLUG_QUERY = defineQuery(`*[_type == 'projectCategory' && slug.current == $slug][0] {
  _id,
  _type,
  title,
  'slug': slug.current,
}`);