import 'server-only'
import { PageType } from '@/types/page';
import { sanityFetch } from './utils/sanity-fetch';
import { pageBySlugQuery } from '../queries/documents/page';

export async function fetchPageBySlug(slug: string) {
  return sanityFetch<PageType>({
    query: pageBySlugQuery,
    params: { slug: slug },
    tags: ['page']
  })
}