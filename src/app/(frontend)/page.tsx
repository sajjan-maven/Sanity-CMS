import { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/live";
import PageBuilder from "@/components/page-builder";
import Container from "@/components/global/container";
import { pageBySlugQuery } from "@/sanity/lib/queries/documents/page";
import { generalSettingsQuery } from "@/sanity/lib/queries/singletons/settings";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {

  const params = await props.params;
  
  const { data: settings } = await sanityFetch({
    query: generalSettingsQuery,
    params,
    stega: false,
  });

  return {
    title: settings?.homePage?.metaTitle ?? settings.homePage?.title,
    description: settings?.homePage?.metaDescription ?? '',
  } satisfies Metadata;
}

export default async function Home() {

  const { data: settings } = await sanityFetch({
    query: generalSettingsQuery,
  });

  if (settings.homePage === null) return (
    <Container className="py-16">
      No Homepage Set...
    </Container>
  )

  const { data: page } = await sanityFetch({ 
    query: pageBySlugQuery, 
    params: { slug: settings?.homePage?.slug },
  });
  
  return(
    <main id="home" className="overflow-hidden">
      <PageBuilder
        blocks={page?.pageBuilder} 
      />
    </main>
  )
}