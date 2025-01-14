import { sanityFetch } from "@/sanity/lib/live";
import PageBuilder from "@/components/page-builder";
import Container from "@/components/global/container";
import { fetchPageBySlug } from "@/sanity/lib/fetches";
import { generalSettingsQuery } from "@/sanity/lib/queries/singletons/settings";

export default async function Home() {

  const { data: settings } = await sanityFetch({
    query: generalSettingsQuery,
  });

  if (settings.homePage === null) return (
    <Container className="py-16">
      No Homepage Set...
    </Container>
  )
  
  const page = await fetchPageBySlug(settings?.homePage?.slug);

  return(
    <main id="home" className="overflow-hidden">
      <PageBuilder
        blocks={page?.pageBuilder} 
      />
    </main>
  )
}