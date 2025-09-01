import { Metadata } from "next";
import { processMetadata } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import Container from "@/components/global/container";
import { PageBuilder } from "@/components/page-builder";
import { homePageQuery } from "@/sanity/lib/queries/singletons/home-page";
import Image from "next/image";
import HomePageEmailCapture from "@/components/ui/HomePageEmailCapture";

export async function generateMetadata(): Promise<Metadata> {
  const { data: homePage } = await sanityFetch({
    query: homePageQuery,
    stega: false,
  });

  if (!homePage) return {};

  return processMetadata({ data: homePage });
}

export default async function Home() {
  const { data: homePage } = await sanityFetch({
    query: homePageQuery,
  });

  if (!homePage) return (
    <Container className="py-16">
      No Homepage Set...
    </Container>
  );

  return (
    <div id="home">
      <section className="relative w-full pt-12 md:pt-24 bg-[#f8f5f3] overflow-hidden">
        <div className="flex flex-col w-full px-6 items-center gap-8 mx-auto">
          <header>
            <h1 className="w-full text-[#222222] text-[40px] lg:text-5xl xl:text-[62px] text-center leading-12 xl:leading-[72px] inline-block font-medium"
              style={{ maxWidth: `${homePage.headingWidth}px` }}>
              {homePage.heading}
            </h1>
          </header>
        </div>
        <div className="relative w-full">
          <div className="relative pt-2 xl:pt-8 lg:mb-0 w-full flex-wrap px-8 pointer-events-none z-[99]">
            <div className="w-full font-normal mx-auto text-sm md:text-lg text-center md:leading-8 pointer-events-auto text-[#7B7481]"
              style={{ maxWidth: `${homePage.subheadingWidth}px` }}>
              <p>{homePage.subheading}</p>
            </div>
            <HomePageEmailCapture />
          </div>
          <div className="relative lg:-mt-[155px] xl:-mt-[170px] z-0">
            <div className="relative hidden lg:block">
              <Image
                className="object-cover mx-auto"
                alt="Background layer"
                src="/section-images/hero_layer-1.svg"
                width={1728}
                height={1034}
                priority
              />
              <Image
                className="object-cover mx-auto absolute inset-0"
                alt="Middle layer 1"
                src="/section-images/hero_layer-2.svg"
                width={1728}
                height={1034}
                priority
              />
              <Image
                className="object-cover mx-auto absolute inset-0"
                alt="Middle layer 2"
                src="/section-images/hero_layer-3.svg"
                width={1728}
                height={1034}
                priority
              />
            </div>
            <div className="lg:absolute pt-6 lg:pt-14 xl:pt-4 lg:top-[52.523%] lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/2 w-full max-w-[1728px] mx-auto pointer-events-none z-40">
              <div className="w-full px-4 lg:px-0 lg:max-w-[60.34%] mx-auto">
                <div className="w-full pb-[72.832%] min-[647px]:pb-[64.7%] rounded-md relative hero-section-box-shadow">
                  <iframe
                    src={homePage.clickthrough}
                    title="Stitchflow Homepage"
                    frameBorder="0"
                    allowFullScreen
                    allow="clipboard-write"
                    className="absolute inset-0 w-full h-full pointer-events-auto"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PageBuilder
        id={homePage._id}
        type={homePage._type}
        pageBuilder={homePage.pageBuilder ?? []}
      />
    </div>
  );
}
