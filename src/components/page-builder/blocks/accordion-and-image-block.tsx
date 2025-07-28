'use client'
import Image from "next/image";
import { useState } from "react";
import { PageBuilderType } from "@/types";

export type AccordionAndImageBlockProps = PageBuilderType<"accordionAndImageBlock">;

export default function AccordionAndImageBlock(props: AccordionAndImageBlockProps ) {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number | null) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const {
    title,
    description,
    image,
    features = [],
  } = props;

  return (
    <section 
      className="w-full bg-white px-6"
    >
      <div className="flex flex-col lg:flex-row items-start gap-8 justify-between max-w-[1256px] mx-auto">
        <div className="flex flex-col items-start gap-9 w-full lg:max-w-[588px]">
          <div className="flex flex-col w-full items-start gap-2">
            <h2 className="text-[#363338] text-3xl md:text-[40px] font-medium leading-[48px]">
              {title}
            </h2>
            <p className="text-[#7b7481] text-base font-normal leading-6">
              {description}
            </p>
          </div>

          <div className="w-full">
            {features?.map((feature, index) => (
              <button
                key={index}
                onClick={() => toggleAccordion(index)}
                aria-expanded={openAccordion === index}
                className="mb-5 flex flex-col items-start w-full"
              >
                <div className="w-full text-lg font-medium cursor-pointer text-[#363338] flex text-start items-center justify-between">
                  {feature.title}
                  {openAccordion === index ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                      <path d="M17 0.5C20.6877 0.5 22.6297 0.49556 24.2354 0.925781L24.6367 1.04102C28.7572 2.29354 31.9545 5.58582 33.0742 9.76465L33.1494 10.0703C33.5034 11.6201 33.5 13.5429 33.5
                       17C33.5 20.4571 33.5034 22.3799 33.1494 23.9297L33.0742 24.2354C31.9545 28.4142 28.7572 31.7065 24.6367 32.959L24.2354 33.0742C22.6297 33.5044 20.6877 33.5 17 33.5C13.5429 33.5
                       11.6201 33.5034 10.0703 33.1494L9.76465 33.0742C5.58582 31.9545 2.29354 28.7572 1.04102 24.6367L0.925781 24.2354C0.49556 22.6297 0.5 20.6877 0.5 17C0.5 13.3123 0.49556 11.3703 
                       0.925781 9.76465L1.04102 9.36328C2.29354 5.24282 5.58582 2.04552 9.76465 0.925781L10.0703 0.850586C11.6201 0.496596 13.5429 0.5 17 0.5Z" stroke="#564038" stroke-opacity="0.2"/>
                      <path d="M12 16.5H22C22.2761 16.5 22.5 16.7239 22.5 17C22.5 17.2761 22.2761 17.5 22 17.5H12C11.7239 17.5 11.5 17.2761 11.5 17C11.5 16.7239 11.7239 16.5 12 16.5Z" fill="#ACA8B2"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                      <path d="M17 0.5C20.6877 0.5 22.6297 0.49556 24.2354 0.925781L24.6367 1.04102C28.7572 2.29354 31.9545 5.58582 33.0742 9.76465L33.1494 10.0703C33.5034 11.6201 33.5 13.5429 33.5 
                      17C33.5 20.4571 33.5034 22.3799 33.1494 23.9297L33.0742 24.2354C31.9545 28.4142 28.7572 31.7065 24.6367 32.959L24.2354 33.0742C22.6297 33.5044 20.6877 33.5 17 33.5C13.5429 33.5 
                      11.6201 33.5034 10.0703 33.1494L9.76465 33.0742C5.58582 31.9545 2.29354 28.7572 1.04102 24.6367L0.925781 24.2354C0.49556 22.6297 0.5 20.6877 0.5 17C0.5 13.3123 0.49556 11.3703 
                      0.925781 9.76465L1.04102 9.36328C2.29354 5.24282 5.58582 2.04552 9.76465 0.925781L10.0703 0.850586C11.6201 0.496596 13.5429 0.5 17 0.5Z" stroke="#564038" stroke-opacity="0.2"/>
                      <path fillRule="evenodd" clip-rule="evenodd" d="M16.5 17.5V23.5C16.5 23.7761 16.7239 24 17 24C17.2761 24 17.5 23.7761 17.5 23.5V17.5H23.5L23.6006 17.4902C23.8286 17.4437 24 
                      17.2417 24 17C24 16.7239 23.7761 16.5 23.5 16.5H17.5V10.5C17.5 10.2239 17.2761 10 17 10C16.7239 10 16.5 10.2239 16.5 10.5V16.5H10.5L10.3994 16.5098C10.1714 16.5563 10 16.7583 
                      10 17C10 17.2417 10.1714 17.4437 10.3994 17.4902L10.5 17.5H16.5Z" fill="#CCBAA5"/>
                    </svg>
                  )}
                </div>
                {feature.description && (
                  <div 
                    className={`${openAccordion === index ? "block" : "hidden"} pb-4 text-start text-base font-normal leading-6`}
                    aria-labelledby={`accordion-collapse-heading-${index}`}
                  >
                    <ul className="list-disc pl-5 text-[#7b7481] font-normal leading-relaxed">
                      {feature.description.filter(Boolean).map((item: any, i: number) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="w-full">
          {image?.asset?.url && (
            <Image 
              className="mx-auto lg:ml-auto lg:mr-0 rounded-[32px]"
              width={588}
              height={600}
              src={image.asset.url}
              alt={'Product difference illustration'}
            />
          )}
        </div>
      </div>
    </section>
  );
}