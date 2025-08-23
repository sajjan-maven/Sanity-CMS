"use client"
import Link from 'next/link';
import React from 'react';
import Date from '@/components/ui/date';
import Author from '@/components/ui/author';
import { PostBySlugQueryResult } from '../../../../../sanity.types';
import TableOfContents from '@/components/portable-text/table-of-contents';
import PortableTextEditor from '@/components/portable-text/portable-text-editor';
import SocialMediaComponent from '@/components/ui/SocialMediaComponent';
import AuthorDetails from '@/components/ui/AuthorDetails';
// import PostCategories from './post-categories';
// import PostCategories from './post-categories';

type Post = NonNullable<NonNullable<PostBySlugQueryResult>>

interface PostGridProps {
  post: Post;
}

export default function PostContent({ post }: PostGridProps) {

  const {
    title,
    slug,
    _createdAt,
    publishedAt,
    isModified,
    modifiedAt,
    readTime,
    category,
    author,
    content,
    faqs,
    tableOfContents,
    excerpt,
    settings
  } = post;

  const [open, setOpen] = React.useState<number | null>(0)

  return (
    <main>
      <div>
        <Category category={category} />
        <h1 className="text-xl md:text-4xl font-medium mb-2 md:mb-4 max-w-4xl">
          {title}
        </h1>
        <p className='text-gray-600 text-lg max-w-3xl'>
          {excerpt}
        </p>
        <Date publishedAt={publishedAt || _createdAt} isModified={!!isModified} modifiedAt={modifiedAt || undefined} readTime={readTime} />
        <div className="pt-4 flex flex-wrap justify-between items-center">
          <Author author={author} />
          <div className="hidden md:block lg:w-full lg:max-w-[300px] mr-0 ml-auto pt-2 pl-1.5 pr-2">
            <SocialMediaComponent blogUrl={slug || ''} title={title || "Check out this blog!"} />
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-[1fr_300px] w-full gap-8">
        <article className="w-full mt-3">
          <PortableTextEditor data={content} classNames='blogContent max-w-full' />
          {faqs?.length ? (
            <section className="mt-10">
              <h2 className="text-2xl font-semibold mb-4">Frequently asked questions</h2>
              <ul className="divide-y divide-gray-200">
                {faqs.map((f: any, i: number) => (
                  <li key={i} className="py-4">
                    <button
                      className="w-full flex items-start justify-between text-left"
                      onClick={() => setOpen(open === i ? null : i)}
                    >
                      <span className="text-lg font-medium">{f.question}</span>
                      <span className="text-2xl leading-none">{open === i ? '–' : '+'}</span>
                    </button>
                    {open === i && (
                      <div className="mt-3 text-gray-600">
                        <PortableTextEditor data={f.answer || []} />
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
          <AuthorDetails author={author} />
        </article>
        <aside className='hidden lg:block'>
          <div className="sticky top-[110px] min-h-[calc(100vh-110px)] overflow-y-auto mt-3">
            <div className="rounded-4xl bg-[#F8F5F3] shadow-sm p-6">
              <div
                className="font-medium text-[16px] leading-[20px] text-[#363338] mb-4"
                role="heading"
                aria-level={2}
              >
                Contents
              </div>
              {settings?.showTableOfContents && (
                <TableOfContents content={tableOfContents} />
              )}
              {/* {settings?.showPostsByCategory && (
                <PostCategories categories={categories} />
              )} */}
            </div>
          </div>
        </aside>
      </div>
    </main>
  )
}


function Category({ category }: {
  category: Post['category'];
}) {
  return (
    <Link
      href={`/blog/category/${category?.slug}`}
      className='inline-block bg-[#f7f1fe] rounded-4xl mb-4 px-4 py-1 text-[#7b7481]'
    >
      {category?.title}
    </Link>
  )
}