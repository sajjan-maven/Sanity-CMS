import NewButton from "@/components/ui/newButton";
import { PageBuilderType } from "@/types";
import { CheckIcon } from "lucide-react";

export type PricingBlockProps = PageBuilderType<"pricingBlock">;

export default function PricingBlock(props: PricingBlockProps) {
  const { title, freePilotCard, afterPilotCard, backgroundColor } = props;

  return (
    <section className="flex flex-col items-center overflow-hidden pb-10 bg-[#f7f5f2]" style={{ background: backgroundColor?.hex || '#FFF'}}>
      <h2 className="text-center pb-4 text-xl font-medium">{title}</h2>
      <div className="flex flex-col w-full items-center gap-20 px-4 py-5">
        <div className="flex flex-col items-center gap-10 w-full">
          <div className="flex flex-col md:flex-row items-center justify-center relative w-full">
            {/* Free Pilot Card */}
            <div className="flex flex-col w-full md:max-w-[560px] items-start gap-7 p-[30px] z-[1] bg-white rounded-2xl border border-solid border-[#e0d5c8] shadow-2xl">
              <div className="p-0 w-full">
                <div className="flex flex-col w-full items-center gap-2">
                  <h2 className="font-bold text-[40px] leading-[52px] text-[#363338] text-center">
                    {freePilotCard?.title}
                  </h2>
                  <p className="font-normal text-[#363338] text-base text-center leading-6">
                    {freePilotCard?.subtitle}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-4 py-6 w-full">
                  {freePilotCard?.features?.map((feature: any, index: number) => (
                    <div key={index} className="flex items-start gap-4 w-full">
                      <CheckIcon className="w-6 h-6 text-[#363338]" />
                      <span className="font-medium text-[#363338] text-base leading-6">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {freePilotCard?.buttonLink && <NewButton
                  variant="secondary"
                  className="w-full"
                  onClick={() => window.location.href = freePilotCard?.buttonLink || ''}
                >
                  {freePilotCard?.buttonText}
                </NewButton>}
              </div>
            </div>

            {/* After Free Pilot Card */}
            <div className="flex flex-col w-full md:max-w-[495px] md:-ml-10 mt-5 md:mt-0 items-start gap-3.5 py-8 md:py-20 z-0 bg-[#f0ebe4] rounded-2xl border border-solid border-[#e0d5c8]">
              <div className="p-0 w-full">
                <div className="flex flex-col w-full items-center gap-2">
                  <h3 className="font-semibold text-[#363338] text-2xl text-center tracking-[-0.96px] leading-[33.6px]">
                    {afterPilotCard?.title}
                  </h3>
                  <p className="font-normal text-[54px] leading-[70.2px] text-[#363338] text-center">
                    <span className="font-bold">${afterPilotCard?.price}</span>
                    <span className="font-medium text-[32px] leading-[41.6px]">
                      {afterPilotCard?.priceUnit}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}