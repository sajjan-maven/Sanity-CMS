import dynamic from "next/dynamic";
import { Suspense } from "react";
import { sanityFetch } from '@/sanity/lib/live';
import { demoSettingsQuery } from '@/sanity/lib/queries/singletons/demo';

const DemoForm = dynamic(() => import("./DemoForm"));

export default async function DemoMainComponent() {
    const { data } = await sanityFetch({
        query: demoSettingsQuery,
        params: {},
    });
    const { demoComponentHeading } = data || {};

    return (
        <section className="lg:max-w-[50%] w-full bg-[#E9E2D9] px-6">
            <div className="flex flex-col items-center justify-center gap-4 relative rounded-[32px] w-full h-full py-24 max-w-[455px] mx-auto -mt-10">
                <div className="flex flex-col items-center gap-6 relative w-full">
                    <h2 className="w-full max-w-[455px] text-center font-medium text-[#222222] text-[35px] leading-[47.2px]">
                        {demoComponentHeading || ""}
                    </h2>
                    <Suspense fallback={<div>Loading...</div>}>
                        <DemoForm />
                    </Suspense>
                </div>
            </div>
        </section>
    );
}
