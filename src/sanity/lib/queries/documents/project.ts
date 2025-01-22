import { seo } from "../fragments/seo";
import { defineQuery } from "next-sanity";
import { pageBuilder } from "../fragments/page-builder";

export const projectSlugsQuery = defineQuery(`*[_type == "project" && defined(slug.current)] {
  'params': { 'slug': slug.current }
}`);

export const projectsPageQuery = defineQuery(`*[_type == 'projectsPage'][0] {
  _type,
  title,
  'slug': slug.current,
  ${pageBuilder},
  ${seo}
}`);

export const projectPathsQuery = defineQuery(`*[_type == "project" && defined(slug.current)][] {
  'params': { 'slug': slug.current }
}`);

export const projectBySlugQuery = defineQuery(`*[_type == 'project' && slug.current == $slug][0] {
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
  ${seo}
}`);

export const allProjectsQuery = defineQuery(`*[_type == 'project'] {
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
  ${seo}
}`);

export const allProjectCategoriesQuery = defineQuery(`*[_type == 'projectCategory'] | order(orderRank asc) {
  _id,
  _type,
  title,
  'slug': slug.current,
}`);

export const projectsByCategoryQuery = defineQuery(`*[_type == 'project' && category->slug.current == $slug] {
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