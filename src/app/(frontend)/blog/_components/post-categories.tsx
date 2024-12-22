"use client"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { PostCategoryType } from "@/types/post";

export default function PostCategories({ categories }: {
  categories: PostCategoryType[]
}) {
  return (
    <ul className='py-4 mt-16 mb-12 flex items-center justify-start gap-2 border-y border-dashed backdrop-blur-md backdrop-opacity-50'>
      <li>
        <CategoryLink
          href={`/blog`}
        >
          All Posts
        </CategoryLink>
      </li>
      {categories.map((category) => (
        <li key={category._id}>
          <CategoryLink
            href={`/blog/category/${category.slug}`}
            category={category}
          >
            {category.title}
          </CategoryLink>
        </li>
      ))}
    </ul>
  )
}

function CategoryLink({ href, category, children }: {
  href: string;
  category?: PostCategoryType;
  children: React.ReactNode;
}) {

  const pathname = usePathname();

  const isActive = category 
    ? pathname === `/blog/category/${category.slug}`
    : pathname === '/blog';

  return (
    <Link 
      href={href}
      className={cn('py-2 px-3.5 rounded-full border border-transparent backdrop-blur-md transition-all duration-300', {
        'border-black bg-black text-white': isActive,
        'hover:bg-neutral-100': !isActive
      })}
    >
      {children}
    </Link>
  )
}