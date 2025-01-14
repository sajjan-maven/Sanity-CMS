import { client } from '@/sanity/lib/sanity-client'
import type { QueryParams } from '@sanity/client'

export async function sanityFetch<QueryResponse>({ 
  query, 
  params = {} as QueryParams, 
  tags = [] as string[]
}: {
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    next: { tags }
  })
}