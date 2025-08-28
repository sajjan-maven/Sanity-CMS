import { Metadata } from 'next';
import CasestudyGrid from './_components/casestudy-grid';
import { sanityFetch } from '@/sanity/lib/live';
import { casestudiesPageQuery, casestudiesExcludingFeaturedQuery } from '@/sanity/lib/queries/documents/casestudy';
import { PageBuilder } from '@/components/page-builder';
import FeaturedCaseStudy from './_components/casestudy-featured';

//qwer Case study

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({
    query: casestudiesPageQuery,
    stega: false
  });

  if (!page) { return {} };

  // Create a simple metadata object for case studies page
  return {
    title: page?.heroText || 'Case Studies',
    description: page?.heroDescription || 'Explore our case studies and success stories',
  };
}

export default async function CaseStudiesPages() {
  // Fetch the case studies page data to get the featured case study
  const { data: page } = await sanityFetch({
    query: casestudiesPageQuery,
    stega: false
  });

  // Fetch all case studies excluding the featured one
  const { data: casestudies } = await sanityFetch({
    query: casestudiesExcludingFeaturedQuery,
    params: {
      featuredId: page?.featuredCS?._id || ''
    }
  });

  return (
    <div className="w-full min-h-screen">
      {(page?.heroText || page?.heroDescription) && (
        <section className="w-full bg-[#e3dad0] py-16 px-6 ">
          <div className="flex flex-col items-center gap-8 max-w-[876px] mx-auto">
            <div className="flex flex-col items-center gap-4 text-center">
              <h1 className="font-semibold text-[40px] leading-[48px] text-[#363338] ">
                {page.heroText}
              </h1>
              <p className="text-lg leading-8 text-[#363338] ">
                {page.heroDescription}
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="w-full px-6 py-20 md:py-40 mx-auto">
        <div className="flex flex-col items-center gap-6 max-w-[1256px] mx-auto case-study-card-container">
          {page?.featuredCS && (
            <FeaturedCaseStudy casestudy={page.featuredCS} />
          )}

          <CasestudyGrid casestudies={casestudies || []} />

          <PageBuilder
            id={page?._id ?? ''}
            type={page?._type ?? ''}
            pageBuilder={page?.pageBuilder ?? []}
          />

        </div>
      </section>
    </div>
  );
}
