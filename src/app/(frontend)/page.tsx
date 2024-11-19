import Container from "@/components/global/container";
import { fetchPageBySlug, fetchSettings } from "@/sanity/lib/fetches";

export default async function Home() {

  const settingsData = await fetchSettings();

  if (settingsData.homePage === null) return (
    <Container className="py-16">
      No Homepage Set...
    </Container>
  )
  
  const pageData = await fetchPageBySlug(settingsData?.homePage?.slug);

  const [ page ] = await Promise.all([settingsData, pageData])
    
  return(
    <Container className="py-16">
      {page.homePage.title}
    </Container>
  )
}