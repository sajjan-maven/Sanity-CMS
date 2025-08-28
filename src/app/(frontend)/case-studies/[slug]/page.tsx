import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import CasestudyContent from '../_components/casestudy-content';
import RelatedCasestudies from '../_components/related-casestudies';
import { casestudyBySlugQuery, casestudySlugsQuery } from '@/sanity/lib/queries/documents/casestudy';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const { data } = await sanityFetch({
        query: casestudySlugsQuery,
        perspective: "published",
        stega: false,
    });
    return data;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { data: caseStudy } = await sanityFetch({
        query: casestudyBySlugQuery,
        params: await params,
        stega: false,
    });

    if (!caseStudy) { return {} };

    return processMetadata({ data: caseStudy });
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { data: caseStudy } = await sanityFetch<any>({
        query: casestudyBySlugQuery,
        params: await params
    });

    if (caseStudy === null) notFound();

    return (
        <main>
            <div className="flex flex-col items-start relative bg-[#f8f5f3]">
                <div className="flex justify-center gap-20 pt-20 pb-32 px-6 max-w-[1272px] mx-auto">
                    <div className="flex flex-col w-[830px] items-start">
                        <CasestudyContent casestudy={caseStudy} />
                        <RelatedCasestudies casestudies={caseStudy.relatedCasestudies || []} />
                    </div>
                </div>
            </div>
        </main>
    )
}
