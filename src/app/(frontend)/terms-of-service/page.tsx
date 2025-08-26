import { Metadata } from 'next';
import { processMetadata } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import { termsPageQuery } from '@/sanity/lib/queries/documents/terms';
import TermsPage from './components/TermsPage';

export async function generateMetadata(): Promise<Metadata> {
	const { data: page } = await sanityFetch({
		query: termsPageQuery,
		stega: false,
	});

	if (!page) { return {} };

	return processMetadata({ data: page as any });
}

export default async function TermsOfService() {
	const { data: page } = await sanityFetch({
		query: termsPageQuery,
	});

	if (!page) {
		return null;
	}

	return <TermsPage termsData={{ ...page, title: page.title ?? undefined }} />;
}