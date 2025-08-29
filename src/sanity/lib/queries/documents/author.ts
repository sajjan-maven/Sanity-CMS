import { defineQuery } from "next-sanity";

// Query to fetch author by slug including their posts
export const authorBySlugQuery = defineQuery(`*[_type == 'author' && slug.current == $slug][0] {
  _id,
  _type,
  name,
  avatar {
    asset -> {
      url
    }
  },
  bio,
  socials[] {
    platform,
    url,
    customIcon {
      asset -> {
        url
      }
    }
  },
  "posts": *[_type == 'post' && author._ref == ^._id] {
    _id,
    title,
    'slug': slug.current,
    excerpt,
    publishedAt,
    category -> {
      title,
      slug
    },
    image {
      asset -> {
        url
      },
      altText
    }
  }
}`);
