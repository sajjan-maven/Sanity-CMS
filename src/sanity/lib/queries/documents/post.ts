import { defineQuery } from "next-sanity";
import { pageBuilder } from "../fragments/page-builder";

export const postSlugsQuery = defineQuery(`*[_type == "post" && defined(slug.current)] {
  'params': { 'slug': slug.current }
}`);

export const blogPageQuery = defineQuery(`*[_type == 'blogPage'][0] {
  _id,
  _type,
  title,
  'slug': slug.current,
  heroText,
  featuredBlog->{
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
      altText 
    },
  },
  editorsPicks[]->{
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
      altText 
    },
  },
  ${pageBuilder},
  "posts": *[_type == 'post'] | order(publishedAt desc) {
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
      altText 
    },
  },
  "categories": *[_type == "postCategory"] | order(orderRank asc) {
    _id,
    _type,
    title,
    'slug': slug.current,
  },
  "seo": {
    "title": coalesce(seo.title, title, ""),
    "description": coalesce(seo.description,  ""),
    "noIndex": seo.noIndex == true,
    "image": seo.image,
  },
}`);

export const postBySlugQuery = defineQuery(`*[_type == 'post' && slug.current == $slug][0] {
  _id,
  _type,
  _createdAt,
  publishedAt,
  isModified,
  modifiedAt,
  readTime,
  title,
  'slug': slug.current,
  excerpt,
  "tableOfContents": content[style in ["h2"]],
  content[],
  faqs[] {
    question,
    answer
  },
  category->{
    _id,
    title,
    'slug': slug.current,
  },
  author->{
    _id,
    name,
    'slug': slug.current,
    position,
    bio,
    avatar { 
      asset->{ url }, 
    },
    socials[] {
      platform,
      url,
      customIcon {
        asset->{ url },
      },
    }
  },
  relatedPostsType,
  "relatedPosts": select(
    relatedPostsType == "custom" => customRelatedPosts[]->{ 
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
        altText 
      }
    },
    relatedPostsType == "autofill" => *[_type == 'post' && category._ref == ^.category._ref && _id != ^._id][0...3]{ 
      _id,
      _type,
      _createdAt,
      title,
      'slug': slug.current,
      category->{
        _id,
        title,
        'slug': slug.current,
      },
      excerpt,
      image { 
        asset->{ url }, 
        altText 
      }
    },
  ),
  "seo": {
    "title": coalesce(seo.title, title, ""),
    "description": coalesce(seo.description,  ""),
    "noIndex": seo.noIndex == true,
    "image": seo.image,
  },
}`);

export const allPostsQuery = defineQuery(`*[_type == 'post'] | order(_createdAt asc) {
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
    altText 
  },
}`);

// export const paginatedPostsQuery = defineQuery(`*[_type == 'post'] | order(_createdAt asc) [$offset...$offset + $limit] {
//   _id,
//   _type,
//   title,
//   'slug': slug.current,
//   excerpt,
//   category->{
//     _id,
//     title,
//     'slug': slug.current,
//   },
//   image { 
//     asset->{ url }, 
//     altText 
//   },
// }`);


export const paginatedPostsQuery = defineQuery(`
{
  "posts": *[_type == "post"] | order(_createdAt desc) [$offset...$offset + $limit] {
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
      altText 
    },
  },
  "total": count(*[_type == "post"])
}
`);

export const allPostCategoriesQuery = defineQuery(`* [_type == 'postCategory'] | order(orderRank asc) {
  _id,
  _type,
  title,
  'slug': slug.current,
}`);

export const postsByCategoryQuery = defineQuery(`* [_type == 'post' && category -> slug.current == $slug] {
  _id,
  _type,
  title,
  'slug': slug.current,
  excerpt,
  category-> {
  _id,
  title,
  'slug': slug.current,
},
  image {
    asset-> { url },
  altText 
  },
}`);

export const postCategoryBySlugQuery = defineQuery(`* [_type == 'postCategory' && slug.current == $slug][0] {
  _id,
    _type,
    title,
    'slug': slug.current,
} `);

//XYZ Add BlogMainPageQuery add editors choice and featured blog query here