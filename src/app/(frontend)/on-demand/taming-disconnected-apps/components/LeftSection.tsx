import React from "react";

interface LeftSectionProps {
  pageData: {
    badge: string | null;
    title: string | null;
    subtitle: string | null;
    description: string[] | null;
    learningPoints: string[] | null;
    keyChallenges: string[] | null;
  };
}

export default function LeftSection({ pageData }: LeftSectionProps) {
  const {
    badge = '',
    title = '',
    subtitle = '',
    description = [],
    learningPoints = [],
    keyChallenges = [],
  } = pageData;

  return (
    <section className="lg:max-w-[50%] my-8 sm:my-[60px] sm:mb-[80px] w-full px-6">
      <div className="flex flex-col items-start gap-5 w-full">
        <div className="bg-white rounded-4xl px-2.5 py-0.5 font-semibold text-[#7b7481] text-base">
          {badge}
        </div>

        <div className="flex flex-col items-start gap-4 w-full">
          <h1 className="font-bold text-[#363338] text-[32px] leading-[43.2px]">
            {title}
          </h1>

          <h2 className="font-semibold text-[#363338] text-lg leading-[28.8px] pb-4">
            {subtitle}
          </h2>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-2.5 w-full">
        {description && description.map((para, idx) => (
          <p key={idx} className="w-full font-normal text-[#363338] text-base pb-4">
            {para}
          </p>
        ))}

        <div className="flex flex-col items-start gap-2.5 w-full pb-2">
          <h3 className="font-semibold text-[#363338] text-base">
            You&apos;ll learn how to
          </h3>

          <ul className="font-normal text-[#363338] text-base leading-[25.6px] list-disc pl-8">
            {learningPoints && learningPoints.map((point, index) => (
              <li key={`learning-point-${index}`}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start gap-2.5 w-full">
          <h3 className="font-semibold text-[#363338] text-base leading-[25.6px]">
            Key challenges covered
          </h3>

          <ul className="font-normal text-[#363338] text-base leading-[25.6px] list-disc pl-8">
            {keyChallenges && keyChallenges.map((challenge, index) => (
              <li key={`challenge-${index}`}>{challenge}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
