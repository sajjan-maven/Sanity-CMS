import { defineQuery } from "next-sanity";
import { pageBuilder } from "../fragments/page-builder";

export const integrationPageQuery = defineQuery(`
  *[_type == 'page' && slug.current == 'integrations'][0] {
    _id,
    _type,
    title,
    'slug': slug.current,
    ${pageBuilder},
    "seo": {
      "title": coalesce(seo.title, title, ""),
      "description": coalesce(seo.description, ""),
      "noIndex": seo.noIndex == true,
      "image": seo.image,
    },
  }
`);

export const allIntegrationApplicationsQuery = defineQuery(`
  *[_type == 'integrationApplication'] | order(orderRank asc) {
    _id,
    _type,
    applicationName,
    image {
      asset->{ url },
      altText
    },
    category->{
      _id,
      _type,
      title,
      'slug': slug.current,
    },
    addDescription,
    applicationDesc,
  }
`);

export const allIntegrationCategoriesQuery = defineQuery(`
  *[_type == 'integrationCategory'] | order(orderRank asc) {
    _id,
    _type,
    title,
    'slug': slug.current,
  }
`);

export const integrationApplicationsByCategoryQuery = defineQuery(`
  *[_type == 'integrationApplication' && category._ref == $categoryId] | order(orderRank asc) {
    _id,
    _type,
    applicationName,
    image {
      asset->{ url },
      altText
    },
    category->{
      _id,
      _type,
      title,
      'slug': slug.current,
    },
    addDescription,
    applicationDesc,
  }
`);

export const integrationCategoryBySlugQuery = defineQuery(`
  *[_type == 'integrationCategory' && slug.current == $slug][0] {
    _id,
    _type,
    title,
    'slug': slug.current,
  }
`);
