import Image from "next/image";
import { PostBySlugQueryResult } from "../../../sanity.types";
import Link from "next/link";

type Author = NonNullable<
  NonNullable<PostBySlugQueryResult>
>;

interface AuthorProps {
  author: Author['author'];
}

export default function Author({ author }: AuthorProps) {

  if (!author) return null;

  return (
    <Link
      className="flex gap-2 items-center"
      href={`/blog`}>
      <Image
        src={author?.avatar?.asset?.url ?? ''}
        width={42}
        height={42}
        alt={author.name ?? ''}
        className='rounded-full w-[42px] h-[42px] object-cover'
      />
      <div>
        <div className='text-base font-[500] text-gray-400'>
          {author.name}
        </div>
        <div className='text-sm text-gray-400 font-[400]'>
          {author.position}
        </div>
      </div>
    </Link>
  )
}