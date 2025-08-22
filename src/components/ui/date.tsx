import { formatDate } from "@/lib/utils";

interface DateProps {
  publishedAt?: string;
  isModified?: boolean;
  modifiedAt?: string;
  readTime?: string | null;
}

export default function Date({ publishedAt, isModified, modifiedAt, readTime }: DateProps) {
  const showModified = Boolean(isModified && modifiedAt);
  const displayDate = showModified ? modifiedAt! : publishedAt;

  if (!displayDate) return null;

  return (
    <div className='text-gray-500 text-sm mt-2 mb-1'>
      <span>
        {showModified ? `Modified on ${formatDate(displayDate)}` : `Published on ${formatDate(displayDate)}`}
        <time dateTime={displayDate} hidden>
          {showModified ? `Modified on ${formatDate(displayDate)}` : `Published on ${formatDate(displayDate)}`}
        </time>
      </span>
      <span className="px-1">|</span>
      <span>
        {readTime || '14 minutes minutes'}
      </span>
    </div>
  )
}