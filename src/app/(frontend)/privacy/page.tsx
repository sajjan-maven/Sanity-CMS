import { Metadata } from 'next';
import { processMetadata } from '@/lib/utils';
import PrivacyPage from "./components/PrivacyPage";
import { sanityFetch } from '@/sanity/lib/live';
import { privacyPageQuery } from '@/sanity/lib/queries/documents/privacy';

export async function generateMetadata(): Promise<Metadata> {
	const { data: page } = await sanityFetch({
		query: privacyPageQuery,
		stega: false,
	});

	if (!page) { return {} };

	return processMetadata({ data: page });
}

export default async function Privacy() {
	const { data: page } = await sanityFetch({
		query: privacyPageQuery,
	});

	return <PrivacyPage privacyData={page} />;
}
