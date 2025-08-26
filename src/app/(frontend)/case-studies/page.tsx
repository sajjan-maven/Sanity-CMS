import { Metadata } from 'next';
import CasestudyGrid from './_components/casestudy-grid';
import { sanityFetch } from '@/sanity/lib/live';
import { casestudiesPageQuery, casestudiesExcludingFeaturedQuery } from '@/sanity/lib/queries/documents/casestudy';

//qwer Case study

export async function generateMetadata(): Promise<Metadata> {
  const { data: page } = await sanityFetch({
    query: casestudiesPageQuery,
    stega: false
  });

  if (!page) { return {} };

  // Create a simple metadata object for case studies page
  return {
    title: page.title || 'Case Studies',
    description: page.heroDescription || 'Explore our case studies and success stories',
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
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      {page?.heroText && (
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {page.heroText}
          </h1>
          {page.heroDescription && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {page.heroDescription}
            </p>
          )}
        </div>
      )}

      {/* Featured Case Study */}
      {page?.featuredCS && (
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Featured Case Study</h2>
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6">
            <CasestudyGrid
              casestudies={[
                {
                  ...page.featuredCS,
                  title: page.featuredCS.title ?? '',
                  slug: page.featuredCS.slug ?? '',
                  excerpt: page.featuredCS.excerpt ?? '',
                  image: page.featuredCS.image
                    ? {
                      ...page.featuredCS.image,
                      asset: { url: page.featuredCS.image.asset?.url ?? '' },
                      altText: page.featuredCS.image.altText ?? '',
                    }
                    : { asset: { url: '' }, altText: '' },
                },
              ]}
            />
          </div>
        </div>
      )}

      {/* All Case Studies Grid */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">All Case Studies</h2>
        <CasestudyGrid casestudies={casestudies || []} />
      </div>

      {/* Page Builder Content */}
      {page?.pageBuilder && (
        <div className="mt-16">
          {/* Add your page builder component here */}
          {/* <PageBuilder blocks={page.pageBuilder} /> */}
        </div>
      )}
    </div>
  );
}
