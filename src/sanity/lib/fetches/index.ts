import 'server-only'

import { PageType } from '@/types/page';
import { SettingsType } from '@/types/settings';
import { sanityFetch } from './utils/sanity-fetch';
import { NavigationSettingsType } from '@/types/navigation';
import { pageBySlugQuery } from '../queries/documents/page';
import { generalSettingsQuery } from '../queries/singletons/settings';
import { navigationSettingsQuery } from '../queries/singletons/navigation';

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

export async function fetchNavigationSettings() {
  return sanityFetch<NavigationSettingsType>({
    query: navigationSettingsQuery,
    tags: ['navigationSettings']
  })
}