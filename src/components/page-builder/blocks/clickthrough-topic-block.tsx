import { PageBuilderType } from "@/types";
import React from "react";

export type ClickthroughTopicBlockProps = PageBuilderType<"clickthroughTopicBlock">;

export default function ClickthroughTopicBlock(props: ClickthroughTopicBlockProps) {
  const {
    useCases = [],
    sectionBackgroundColor
  } = props;

  return (
    <div
      className="flex flex-col items-center justify-center pb-20 md:pb-32"
      style={{ backgroundColor: `${sectionBackgroundColor?.value}` || '#F8F5F3' }}
    >
      {useCases?.map((useCase: any, index: number) => {
        return (
          <section
            key={index}
            className="inline-flex flex-col items-center justify-center gap-6 md:gap-20 pt-14 md:pt-40 px-6 w-full"
          >
            <div className="w-full max-w-[1080px] mx-auto">
              <div className="flex flex-col items-center gap-2 max-w-[878px] mx-auto pb-10 md:pb-20">
                <h2 className="font-semibold text-[#363338] text-3xl md:text-[40px] text-center md:leading-[48px]">
                  {useCase.title}
                </h2>
                <p className="font-normal text-[#7b7481] text-base text-center leading-6">
                  {useCase.description}
                </p>
              </div>

              <div
                className={`flex flex-col gap-2 px-2 py-4 min-[445px]:p-4 min-[677px]:p-16 rounded-2xl md:rounded-[48px] border-none`}
                style={{ backgroundColor: useCase.backgroundColor?.value }}
              >
                <div
                  className="relative pb-[72.439%] min-[776px]:pb-[64.788%] h-0 w-full"
                >
                  <iframe
                    src={useCase.embedUrl}
                    title={useCase.title}
                    frameBorder="0"
                    allowFullScreen
                    allow="clipboard-write"
                    className="absolute top-0 left-0 w-full h-full"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}