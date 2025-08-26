import { defineQuery } from "next-sanity";
import { pageBuilder } from "../fragments/page-builder";

//qwer Case study

export const casestudySlugsQuery = defineQuery(`*[_type == "casestudy" && defined(slug.current)] {
  'params': { 'slug': slug.current }
}`);

export const casestudiesPageQuery = defineQuery(`*[_type == 'casestudiesPage'][0] {
  _id,
  _type,
  title,
  'slug': slug.current,
  heroText,
  heroDescription,
  featuredCS->{
    _id,
    _type,
    title,
    'slug': slug.current,
    excerpt,
    image { 
      asset->{ url }, 
      altText 
    },
  },
  ${pageBuilder},
  "casestudies": *[_type == 'casestudy'] | order(orderRank asc) {
    _id,
    _type,
    _createdAt,
    title,
    'slug': slug.current,
    excerpt,
    image { 
      asset->{ url }, 
      altText 
    },
  },
  "seo": {
    "title": coalesce(seo.title, title, ""),
    "description": coalesce(seo.description,  ""),
    "noIndex": seo.noIndex == true,
    "image": seo.image,
  },
}`);

export const casestudyBySlugQuery = defineQuery(`*[_type == 'casestudy' && slug.current == $slug][0] {
  _id,
  _type,
  _createdAt,
  title,
  'slug': slug.current,
  excerpt,
  "tableOfContents": content[style in ["h2"]],
  content[],
  relatedCaseStudies,
  "relatedCasestudies": select(
    relatedCaseStudies == "custom" => customRelatedPosts[]->{ 
      _id,
      _type,
      _createdAt,
      title,
      'slug': slug.current,
      excerpt,
      image { 
        asset->{ url }, 
        altText 
      }
    },
    relatedCaseStudies == "autofill" => *[_type == 'casestudy' && _id != ^._id][0...3]{ 
      _id,
      _type,
      _createdAt,
      title,
      'slug': slug.current,
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

export const allCasestudiesQuery = defineQuery(`*[_type == 'casestudy'] | order(orderRank asc) {
  _id,
  _type,
  title,
  'slug': slug.current,
  excerpt,
  image { 
    asset->{ url }, 
    altText 
  },
}`);

// Query to get all case studies except the featured one
export const casestudiesExcludingFeaturedQuery = defineQuery(`*[_type == 'casestudy' && _id != $featuredId] | order(orderRank asc) {
  _id,
  _type,
  title,
  'slug': slug.current,
  excerpt,
  image { 
    asset->{ url }, 
    altText 
  },
}`);
