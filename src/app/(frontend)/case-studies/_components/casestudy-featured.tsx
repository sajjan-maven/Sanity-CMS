import { Link } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function FeaturedCaseStudy({ casestudy }: any) {
    return (
        <div className="w-full">
            <Link href={`/case-studies/${casestudy?.slug}`} className="case-study-card flex p-4 md:p-6 flex-col gap-6 md:flex-row border border-solid border-[#545058] bg-white rounded-[32px] overflow-hidden">
                <div className="flex-1">
                    <div className="flex-1 flex justify-center items-center h-[400px] py-20 bg-[#3E2E73] rounded-3xl">
                        <Image
                            height={40}
                            width={casestudy?.logo.asset.metadata?.dimensions?.width || 133}
                            alt={`${casestudy?.company} logo`}
                            src={casestudy?.logo.asset.url}
                            priority
                        />
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-xl font-semibold text-[#363338] mt-4">Rula</h2>
                        <p className="text-[#7b7481]">
                            {casestudy?.cardSummary}
                        </p>
                    </div>
                    <div className="cursor-pointer px-4 min-h-10 rounded-xl font-medium flex items-center justify-center whitespace-nowrap transition-all duration-200 ease-in-out transform focus:outline-none border border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] bg-[#f9f8fa] bg-gradient-to-b from-white to-[#f9f8fa] hover:to-[#e9e9e9] active:to-[#d4d4d4] text-[#363338]">Read story</div>
                </div>
            </Link>
        </div>
    )
}

export default FeaturedCaseStudy