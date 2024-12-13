import Image from "next/image";
import { AuthorType } from "@/types/author";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./hover-card";

export default function Author({ author, classNames }: {
  author: AuthorType;
  classNames?: string;
}) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Image
          src={author.avatar.asset.url}
          width={26}
          height={26}
          alt={author.name}
          className='rounded-full'
        />
      </HoverCardTrigger>
      <HoverCardContent className={classNames}>
        <div className='text-sm font-semibold antialiased'>
          {author.name}
        </div>
        <div className='text-sm text-gray-600'>
          @{author.username}
        </div>
        <div className='mt-3 pt-3 border-t border-dashed text-sm text-gray-600'>
          {author.bio}
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}