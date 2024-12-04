"use client"
import Link from 'next/link';
import Container from '@/components/global/container';
import { BlogArchiveBlockType } from '@/types/page-builder/blocks/blog-archive';

export default function BlockArchiveBlock(props: BlogArchiveBlockType) {

  const { categories, paddingTop, paddingBottom } = props

  return (
    <section className='xl:px-10 pattern-bg'>
      <Container 
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className='border-x border-dashed'
      >
        <div className='h-[20rem]'>
          <Categories categories={categories} />
        </div>
      </Container>
    </section>
  )
}

function Categories({ categories }: {
  categories: {
    _id: string;
    title: string;
    slug: string;
  }[]
}) {
  return (
    <ul className='flex items-center justify-start gap-3'>
      <li>
        <Link 
          href={`/blog`}
          className='py-2 px-3.5 rounded-full border border-black bg-black text-white'
        >
          All Posts
        </Link>
      </li>
      {categories.map((category) => (
        <li key={category._id}>
          <Link 
            href={`/category/${category.slug}`}
            className='py-2 px-3.5 border border-transparent hover:border-gray-200 rounded-full hover:bg-white/40 backdrop-blur-md transition-all duration-300'
          >
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}

