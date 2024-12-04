import { groq } from "next-sanity";
import { seo } from "../fragments/seo";

export const postBySlugQuery = groq`*[_type == 'post' && slug.current == $slug][0] {
  _id,
  _type,
  title,
  'slug': slug.current,
  excerpt,
  content[],
  category->{
    _id,
    title,
    'slug': slug.current,
  },
  image { 
    asset->{ url }, 
    cornerRadius,
    altText 
  },
  ${seo}
}`

export const allPostsQuery = groq`*[_type == 'post'] {
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
    cornerRadius,
    altText 
  },
}`

export const allPostCategoriesQuery = groq`*[_type == 'postCategory'] | order(orderRank asc) {
  _id,
  _type,
  title,
  'slug': slug.current,
}`

export const postsByCategoryQuery = groq`*[_type == 'post' && category->slug.current == $slug] {
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
    cornerRadius,
    altText 
  },
}`

