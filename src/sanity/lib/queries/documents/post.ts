import { groq } from "next-sanity";
import { seo } from "../fragments/seo";

export const postBySlugQuery = groq`*[_type == 'post' && slug.current == $slug][0] {
  _id,
  _type,
  _createdAt,
  title,
  'slug': slug.current,
  excerpt,
  "tableOfContents": content[style in ["h2", "h3", "h4", "h5", "h6"]],
  content[],
  category->{
    _id,
    title,
    'slug': slug.current,
  },
  author->{
    _id,
    name,
    username,
    bio,
    avatar { 
      asset->{ url }, 
    },
  },
  image { 
    asset->{ url }, 
    altText,
    caption, 
    cornerRadius,
  },
  ${seo}
}`

export const allPostsQuery = groq`*[_type == 'post'] {
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
  author->{
    _id,
    name,
    username,
    bio,
    avatar { 
      asset->{ url }, 
    },
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

