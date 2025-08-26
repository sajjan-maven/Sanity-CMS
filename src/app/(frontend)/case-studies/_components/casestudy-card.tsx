import Link from 'next/link';
import Image from 'next/image';

// Temporary type until Sanity generates it
type Casestudy = {
  _id: string;
  _type: string;
  title: string;
  slug: string;
  excerpt?: string;
  image?: {
    asset?: {
      url: string;
    };
    altText?: string;
  };
};

//qwer Case study

interface CasestudyCardProps {
  casestudy: Casestudy;
}

export default function CasestudyCard({ casestudy }: CasestudyCardProps) {
  return (
    <Link href={`/case-studies/${casestudy.slug}`} className="group">
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        {casestudy.image?.asset?.url && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={casestudy.image.asset.url}
              alt={casestudy.image.altText || casestudy.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
            {casestudy.title}
          </h3>
          {casestudy.excerpt && (
            <p className="text-gray-600 text-sm line-clamp-3">
              {casestudy.excerpt}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
}
