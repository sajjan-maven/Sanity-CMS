import Link from 'next/link';
import Image from 'next/image';

export default function CasestudyCard({ casestudy }: any) {
  return (
    <div className="w-full flex flex-col md:flex-row gap-6">
      <Link
        href={`/case-studies/${casestudy?.slug}`}
        key={casestudy._id}
        className="case-study-card flex-1 border border-solid border-[#545058] bg-white rounded-[32px] overflow-hidden cursor-pointer"
      >
        <div className="p-4 md:p-6 pb-0">
          <div
            className="h-[200px] rounded-3xl flex items-center justify-center"
            style={{ backgroundColor: casestudy?.backgroundColor?.value || '#1763f5' }}
          >
            {casestudy?.logo?.asset?.url && (
              <Image
                height={40}
                width={casestudy?.logo.asset.metadata?.dimensions?.width || 133}
                alt={`${casestudy?.company} logo`}
                src={casestudy?.logo.asset.url}
                priority
              />
            )}
          </div>
        </div>
        <div className="flex flex-col items-center px-4 pt-6 pb-8 md:px-8 md:pb-10">
          {casestudy?.cardTitle && (
            <h3 className="font-medium text-[#363338] text-center text-xl">
              {casestudy?.cardTitle}
            </h3>
          )}
          <p className="text-[#7b7481] text-center">
            {casestudy?.cardSummary}
          </p>
        </div>
      </Link>
    </div>
  );
}
