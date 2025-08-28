import React from 'react';
import CasestudyGrid from './casestudy-grid';

export default function RelatedCasestudies({ casestudies }: any) {
    return (
        <section className="flex flex-col w-full items-start gap-14 pt-16 border-t border-[#eee8e1] mb-14">
            <div className="text-4xl w-full text-[#7b7481]">More stories</div>

            <div className="flex flex-col md:flex-row items-start gap-6 w-full">
                <CasestudyGrid casestudies={casestudies} />
            </div>
        </section>
    )
}
