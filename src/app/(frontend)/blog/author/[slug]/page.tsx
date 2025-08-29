import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { sanityFetch } from '@/sanity/lib/live';
import { authorBySlugQuery } from '@/sanity/lib/queries/documents/author';
import Image from 'next/image';
import Link from 'next/link';
import PostCard from '../../_components/post-card';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    // Fetch all authors for static generation
    const { data } = await sanityFetch({
        query: `*[_type == "author" && defined(slug.current)] {
            'params': { 'slug': slug.current }
        }`,
        perspective: "published",
        stega: false,
    });
    return data;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { data: author } = await sanityFetch({
        query: authorBySlugQuery,
        params: await params,
        stega: false,
    });

    if (!author) { return {} };

    return {
        title: author.name,
        description: author.bio,
    };
}

export default async function AuthorPage({ params }: PageProps) {
    const { data: author } = await sanityFetch({
        query: authorBySlugQuery,
        params: await params
    });

    if (author === null) notFound();

    return (
        <>
            <div className='pt-14 md:pt-20'>
                <div className='flex items-center max-w-[1256px] mx-auto relative border-b border-gray-200'>
                    <div className='mb-8 flex flex-col md:flex-row items-center md:items-start justify-center'>
                        <div className='rounded-full overflow-hidden w-[100px] h-auto'>
                            {author.avatar?.asset?.url && (
                                <Image
                                    src={author.avatar?.asset?.url}
                                    alt="Profile Picture"
                                    width={100}
                                    height={100}
                                />
                            )}
                        </div>
                        <div className="ml-0 md:ml-4 max-w-[800px] w-full">
                            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:max-w-[430px]">
                                <h1 className="text-xl md:text-4xl font-medium">{author.name}</h1>
                                {/* <div className={styles.icons}>
                                    {linkedInMedia && (
                                        <Link
                                            href={
                                                linkedInMedia?.mediaLink?.startsWith("http")
                                                    ? linkedInMedia.mediaLink
                                                    : `https://${linkedInMedia?.mediaLink}`
                                            }
                                            target="_blank"
                                        >
                                            <Image src="/author-page/li.svg" alt="LinkedIn" width={24} height={24} />
                                        </Link>
                                    )}
                                    {twitterMedia && (
                                        <Link
                                            href={
                                                twitterMedia?.mediaLink?.startsWith("http")
                                                    ? twitterMedia.mediaLink
                                                    : `https://${twitterMedia?.mediaLink}`
                                            }
                                            target="_blank"
                                        >
                                            <Image src="/author-page/x.svg" alt="Twitter" width={24} height={24} />
                                        </Link>
                                    )}
                                </div> */}
                            </div>
                            <div className='text-center md:text-start text-base mt-2.5'>{author.role}</div>
                            <div className='text-center md:text-start mt-2.5 text-sm text-gray-500'>
                                {author.bio}
                            </div>
                        </div>
                    </div>
                </div>


                {/* <div>
                    <div className={styles.grid}>
                        <Link
                            key={article.id}
                            href={`/blog/${article.heroSection?.urlSlug}`}
                            style={{textDecoration: "none"}}
                            target="_blank"
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={article.heroSection?.bannerImage?.url}
                                    alt={article.heroSection?.bannerImage?.alternativeText || ""}
                                    width={300}
                                    height={180}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <p className={styles.category}>{article?.heroSection?.category}</p>
                                <h3 className={styles.title}>{article?.blogTitle}</h3>
                                <p className={styles.summary}>{article?.heroSection?.postedSummary}</p>
                            </div>
                        </Link>
                    </div>
                </div> */}


                <ul className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6'>
                    {author.posts?.map((post: any) => (
                        <PostCard key={post._id} post={post} />
                    ))}
                </ul>
            </div>
        </>
    );
}
