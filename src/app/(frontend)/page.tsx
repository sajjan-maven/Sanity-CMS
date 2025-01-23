import { Metadata } from "next";
import { processMetadata } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import PageBuilder from "@/components/page-builder";
import Container from "@/components/global/container";
import { PAGE_BY_SLUG_QUERY } from "@/sanity/lib/queries/documents/page";
import { GENERAL_SETTINGS_QUERY } from "@/sanity/lib/queries/singletons/settings";

export async function generateMetadata(): Promise<Metadata> {
  const { data: settings } = await sanityFetch({
    query: GENERAL_SETTINGS_QUERY,
    stega: false,
  });

  const page = settings.homePage;

  if (!page) { return {} };

  return processMetadata({ data: page });
}

export default async function Home() {

  const { data: settings } = await sanityFetch({
    query: GENERAL_SETTINGS_QUERY,
  });

  if (settings.homePage === null) return (
    <Container className="py-16">
      No Homepage Set...
    </Container>
  )

  const { data: page } = await sanityFetch({ 
    query: PAGE_BY_SLUG_QUERY, 
    params: { slug: settings?.homePage?.slug },
  });
  
  return(
    <div id="home">
      <PageBuilder blocks={page?.pageBuilder} />
    </div>
  )
}