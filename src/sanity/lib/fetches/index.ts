import 'server-only'

import { PageType } from '@/types/page';
import { BlogSettingsType, SettingsType } from '@/types/settings';
import { sanityFetch } from './utils/sanity-fetch';
import { NavigationSettingsType } from '@/types/navigation';
import { pageBySlugQuery } from '../queries/documents/page';
import { blogSettingsQuery, generalSettingsQuery } from '../queries/singletons/settings';
import { navigationSettingsQuery } from '../queries/singletons/navigation';
import { allPostCategoriesQuery, allPostsQuery, postBySlugQuery, postsByCategoryQuery } from '../queries/documents/post';
import { PostCategoryType, PostType } from '@/types/post';

export async function fetchSettings() {
  return sanityFetch<SettingsType>({
    query: generalSettingsQuery,
    tags: ['generalSettings']
  })
}

export async function fetchBlogSettings() {
  return sanityFetch<BlogSettingsType>({
    query: blogSettingsQuery,
    tags: ['blogSettings']
  })
}

export async function fetchPageBySlug(slug: string) {
  return sanityFetch<PageType>({
    query: pageBySlugQuery,
    params: { slug: slug },
    tags: ['page']
  })
}

export async function fetchNavigationSettings() {
  return sanityFetch<NavigationSettingsType>({
    query: navigationSettingsQuery,
    tags: ['navigationSettings']
  })
}

export async function fetchAllPosts() {
  return sanityFetch<PostType[]>({
    query: allPostsQuery,
    tags: ['post']
  })
}

export async function fetchPostBySlug(slug: string) {
  return sanityFetch<PostType>({
    query: postBySlugQuery,
    params: { slug: slug },
    tags: ['post']
  })
}

export async function fetchPostCategories() {
  return sanityFetch<PostCategoryType[]>({
    query: allPostCategoriesQuery,
    tags: ['postCategory']
  })
}

export async function fetchPostsByCategory(slug: string) {
  return sanityFetch<PostType[]>({
    query: postsByCategoryQuery,
    params: { slug: slug },
    tags: ['post']
  })
}