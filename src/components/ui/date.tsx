import { formatDate } from "@/lib/utils";

export default function Date({ date }: { date: string; }) {
  return (
    <span className='text-gray-500 text-sm mt-2 mb-1'>
      {`Published on ${formatDate(date)}`}
      <time dateTime={date} hidden>
        Published on {formatDate(date)}
      </time>
      <time dateTime={date} hidden>
        Modified on {formatDate(date)}
      </time>
    </span>
  )
}