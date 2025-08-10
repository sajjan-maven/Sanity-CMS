import Image from "next/image";
import Link from "next/link";
import { PageBuilderType } from "@/types";
import NewButton from "@/components/ui/newButton";

export type CaseStudyGridBlockProps = PageBuilderType<"caseStudyGridBlock">;

export default function CaseStudyGridBlock( props : CaseStudyGridBlockProps ) {
  const { 
    title,
    spacing,
    featuredCaseStudy,
    caseStudies = []
  } = props;

  return (
    <section 
      className="w-full px-6 mx-auto"
      style={{
        paddingTop: `${spacing?.top || 80}px`,
        paddingBottom: `${spacing?.bottom || 80}px`
      }}
    >
      <div className="flex flex-col items-center gap-6 max-w-[1256px] mx-auto case-study-card-container">
        {title && (
          <h2 className="text-3xl font-semibold text-[#363338] text-center mb-8">
            {title}
          </h2>
        )}

        {/* Featured Case Study */}
        {featuredCaseStudy && (
          <div className="w-full">
            <Link 
              href={featuredCaseStudy.link || '/case-studies'} 
              className="case-study-card flex p-4 md:p-6 flex-col gap-6 md:flex-row border border-solid border-[#545058] bg-white rounded-[32px] overflow-hidden"
            >
              <div className="flex-1">
                <div className="flex-1 flex justify-center items-center h-[400px] py-20 rounded-3xl"
                  style={{ backgroundColor: featuredCaseStudy?.backgroundColor?.value || '#1763f5' }}
                >
                  {featuredCaseStudy.logo?.asset?.url && (
                    <Image 
                      width={248} 
                      height={40} 
                      alt={`${featuredCaseStudy.company} logo`} 
                      src={featuredCaseStudy.logo.asset.url} 
                      priority 
                    />
                  )}
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex flex-col gap-4">
                  <h2 className="text-xl font-semibold text-[#363338]">
                    {featuredCaseStudy.company}
                  </h2>
                  <p className="text-[#7b7481]">
                    {featuredCaseStudy.description}
                  </p>
                </div>
                <Link className="mt-2" href={featuredCaseStudy.link || '/case-studies'} passHref>
                  <NewButton variant="primary">
                    {featuredCaseStudy.buttonText || 'Read story'}
                  </NewButton>
                </Link>
              </div>
            </Link>
          </div>
        )}

        {/* Second Row - 2 Cards */}
        {caseStudies && caseStudies.length > 0 && (
          <div className="w-full flex flex-col md:flex-row gap-6">
            {caseStudies.map((study: any, index: number) => (
              <Link
                href={study.link}
                key={index}
                className="case-study-card flex-1 border border-solid border-[#545058] bg-white rounded-[32px] overflow-hidden cursor-pointer"
              >
                <div className="p-4 md:p-6 pb-0">
                  <div
                    className="h-[200px] rounded-3xl flex items-center justify-center"
                    style={{ backgroundColor: study.backgroundColor?.value || '#1763f5' }}
                  >
                    {study.logo?.asset?.url && (
                      <Image
                        height={40}
                        width={study.logo.asset.metadata?.dimensions?.width || 133}
                        alt={`${study.company} logo`}
                        src={study.logo.asset.url}
                        priority
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-center px-4 pt-6 pb-8 md:px-8 md:pb-10">
                  <p className="text-[#7b7481] text-center">
                    {study.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}