import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { PostBySlugQueryResult } from '../../../sanity.types';

type Author = NonNullable<
    NonNullable<PostBySlugQueryResult>
>;

interface AuthorProps {
    author: Author['author'];
}

function AuthorDetails({ author }: AuthorProps) {

    // Group social links by platform for easier access
    const socialLinks = {
        twitter: author?.socials?.find(s => s.platform === 'x'),
        linkedin: author?.socials?.find(s => s.platform === 'linkedin'),
        github: author?.socials?.find(s => s.platform === 'github'),
        youtube: author?.socials?.find(s => s.platform === 'youtube'),
        website: author?.socials?.find(s => s.platform === 'website'),
        others: author?.socials?.filter(s => s.platform === 'other')
    };

    return (
        <div className="rounded-3xl bg-[#F8F5F3] shadow-sm p-6 block mt-8 mb-12">
            <div className="flex flex-wrap justify-between items-center relative">
                <Link
                    href={`/blog/author`}
                    className="flex gap-2 items-center"
                >
                    <Image
                        height={100}
                        width={100}
                        src={author?.avatar?.asset?.url || "/images/default-avatar.png"}
                        alt={author?.name || "Author profile"}
                        className="rounded-full h-16 w-16 md:h-[100px] md:w-[100px]"
                        loading="lazy"
                    />
                    <div className="pl-2">
                        <div className="text-xl md:text-3xl text-gray-700 font-medium">{author?.name}</div>
                        <p className="text-lg text-gray-600">{author?.position}</p>
                    </div>
                </Link>

                <div className='absolute sm:static top-0 right-0 flex items-center gap-2'>
                    {socialLinks.linkedin?.url && (
                        <div className='mr-[10px]'>
                            <Link
                                href={socialLinks.linkedin.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn profile"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 20 20">
                                    <path fill="#555" d="M17.0391667,17.0433333 L14.0775,17.0433333 L14.0775,12.4025 C14.0775,11.2958333 14.055,9.87166667 12.5341667,9.87166667 C10.99,9.87166667 10.7541667,11.0758333 10.7541667,12.3208333 L10.7541667,17.0433333 L7.7925,17.0433333 L7.7925,7.5 L10.6375,7.5 L10.6375,8.80083333 L10.6758333,8.80083333 C11.0733333,8.05083333 12.04,7.25916667 13.4841667,7.25916667 C16.485,7.25916667 17.04,9.23416667 17.04,11.805 L17.04,17.0433333 L17.0391667,17.0433333 Z M4.4475,6.19416667 C3.49416667,6.19416667 2.72833333,5.4225 2.72833333,4.47333333 C2.72833333,3.525 3.495,2.75416667 4.4475,2.75416667 C5.3975,2.75416667 6.1675,3.525 6.1675,4.47333333 C6.1675,5.4225 5.39666667,6.19416667 4.4475,6.19416667 Z M5.9325,17.0433333 L2.9625,17.0433333 L2.9625,7.5 L5.9325,7.5 L5.9325,17.0433333 Z M18.5208333,0 L1.47583333,0 C0.66,0 0,0.645 0,1.44083333 L0,18.5591667 C0,19.3558333 0.66,20 1.47583333,20 L18.5183333,20 C19.3333333,20 20,19.3558333 20,18.5591667 L20,1.44083333 C20,0.645 19.3333333,0 18.5183333,0 L18.5208333,0 Z" />
                                </svg>
                            </Link>
                        </div>
                    )}

                    {socialLinks.twitter?.url && (
                        <div className='mr-[10px]'>
                            <Link
                                href={socialLinks.twitter.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Twitter profile"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#000">
                                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                </svg>
                            </Link>
                        </div>
                    )}

                    {socialLinks.github?.url && (
                        <div className='mr-[10px]'>
                            <Link
                                href={socialLinks.github.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub profile"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#333">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                            </Link>
                        </div>
                    )}

                    {socialLinks.website?.url && (
                        <div className='mr-[10px]'>
                            <Link
                                href={socialLinks.website.url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Website"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 24 24" fill="#555">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                                </svg>
                            </Link>
                        </div>
                    )}

                    {socialLinks.others?.map((other, index) => (
                        <div key={index} className='mr-[10px]'>
                            <Link
                                href={other.url || ''}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Other social link"
                            >
                                {other.customIcon?.asset?.url ? (
                                    <Image
                                        src={other.customIcon.asset.url}
                                        alt="Custom social icon"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5"
                                    />
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#555">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                )}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <p className="text-base text-[#363338] mt-4">
                    {author?.bio}
                </p>
            </div>
        </div>
    )
}

export default AuthorDetails