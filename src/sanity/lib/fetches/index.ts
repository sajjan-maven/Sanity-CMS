import 'server-only'
import { sanityFetch } from './utils/sanity-fetch';
import { pageBySlugQuery } from '../queries/documents/page';
import { PageType } from '@/types/page';
import { SettingsType } from '@/types/settings';
import { generalSettingsQuery } from '../queries/singletons/settings';

export async function fetchSettings() {
  return sanityFetch<SettingsType>({
    query: generalSettingsQuery,
    tags: ['generalSettings']
  })
}

export async function fetchPageBySlug(slug: string) {
  return sanityFetch<PageType>({
    query: pageBySlugQuery,
    params: { slug: slug },
    tags: ['page']
  })
}