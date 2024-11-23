import Container from "@/components/global/container";
import PageBuilder from "@/components/page-builder";
import { fetchPageBySlug, fetchSettings } from "@/sanity/lib/fetches";

export const revalidate = 0;

export default async function Home() {

  const settings = await fetchSettings();

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