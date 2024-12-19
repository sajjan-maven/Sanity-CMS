import { groq } from "next-sanity";
import { seo } from "../fragments/seo";
import { pageBuilder } from "../fragments/page-builder";

export const projectPathsQuery = groq`*[_type == "project" && defined(slug.current)][] {
  'params': { 'slug': slug.current }
}`;

export const projectBySlugQuery = groq`*[_type == 'project' && slug.current == $slug][0] {
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
}`

export const allProjectsQuery = groq`*[_type == 'project'] {
  _id,
  _type,
  title,
  'slug': slug.current,
  shortDescription,
  category->{
    _id,
    title,
    'slug': slug.current,
  },
  image { 
    asset->{ url }, 
    cornerRadius,
    height,
    altText 
  },
  ${pageBuilder},
  ${seo}
}`

export const allProjectCategoriesQuery = groq`*[_type == 'projectCategory'] | order(orderRank asc) {
  _id,
  _type,
  title,
  'slug': slug.current,
}`

export const projectsByCategoryQuery = groq`*[_type == 'project' && category->slug.current == $slug] {
  _id,
  _type,
  _createdAt,
  title,
  'slug': slug.current,
  shortDescription,
  category->{
    _id,
    title,
    'slug': slug.current,
  },
  image { 
    asset->{ url }, 
    cornerRadius,
    height,
    altText 
  },
}`