import Image from "next/image";
import Link from "next/link";
import { PageBuilderType } from "@/types";

export type ITToolsCardBlockProps = PageBuilderType<"itToolsCardBlock">;

export default function ITToolsCardBlock(props: ITToolsCardBlockProps) {
  const { 
    title,
    backgroundColor,
    spacing,
    tools = []
  } = props;

  return (
    <section 
      className="flex flex-col items-center relative w-full z-[2] px-6"
      style={{
        backgroundColor: backgroundColor?.hex || '#f8f5f3',
        paddingTop: `${spacing?.top || 80}px`,
        paddingBottom: `${spacing?.bottom || 80}px`
      }}
    >
      {title && (
        <h2 className="text-3xl font-semibold text-[#363338] text-center mb-12">
          {title}
        </h2>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 w-full max-w-[1256px]">
        {tools?.filter((tool: any) => tool.url)
          .map((tool: any, index: number) => (
            <div
              key={index}
              className="flex flex-col relative items-start p-6 md:p-8 bg-white rounded-[32px] border border-solid border-[#545058] min-h-[330px]"
            >
              <div
                style={{ backgroundColor: tool.labelBackground?.hex || '#F6A36D' }}
                className="rounded-4xl px-4 py-1 text-white mb-6"
              >
                {tool.label}
              </div>
              
              {tool.comingSoon && (
                <div className="absolute bg-[#514D55] top-4 right-4 px-4 py-2 rounded-xl text-white">
                  Coming soon
                </div>
              )}

              <h3
                style={{ color: tool.labelBackground?.hex || '#F6A36D' }}
                className="font-medium text-3xl pb-6"
              >
                {tool.title}
              </h3>
              
              <p className="text-[#7b7481] mb-[50px]">{tool.description}</p>

              <Link
                href={tool.comingSoon ? '#' : tool.url}
                target={tool.comingSoon ? undefined : "_blank"}
                className={`absolute left-6 bottom-6 md:right-8 w-fit px-4 min-h-10 rounded-xl font-medium flex items-center justify-center whitespace-nowrap transition-all duration-180 ease-in-out transform focus:outline-none border border-[#54505833] shadow-[0px_1px_1px_#5450581a,0px_4px_8px_#54505805,inset_0px_-2px_4px_#0000001f] bg-[#f9f8fa] bg-gradient-to-b from-white to-[#f9f8fa] hover:to-[#e9e9e9] active:to-[#d4d4d4] text-[#363338] ${
                  tool.comingSoon ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'
                }`}
                aria-disabled={tool.comingSoon}
              >
                <span className="font-label-medium text-[#363338] mr-2">
                  {tool.buttonText || 'Use for free'}
                </span>
                {!tool.comingSoon && tool.icon?.asset?.url &&
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 2C5.77614 2 6 2.22386 6 2.5C6 2.77614 5.77614 3 5.5 3H4.7002C4.13189 3 3.73518 3.00019 3.42676 3.02539C3.19984 3.04395 3.04536 3.07473 2.92676 3.11719L2.81934 3.16309C2.57239 3.28891 2.3658 3.48088 2.22168 3.71582L2.16309 3.81934C2.09613 3.95091 2.05009 4.12471 2.02539 4.42676C2.00019 4.73518 2 5.13189 2 5.7002V11.2998C2 11.8681 2.00019 12.2648 2.02539 12.5732C2.05009 12.8753 2.09613 13.0491 2.16309 13.1807L2.22168 13.2842C2.3658 13.5191 2.57239 13.7111 2.81934 13.8369L2.92676 13.8828C3.04536 13.9253 3.19984 13.9561 3.42676 13.9746C3.73518 13.9998 4.13189 14 4.7002 14H10.5C10.9728 14 11.3026 14 11.5605 13.9824C11.8138 13.9651 11.9616 13.9324 12.0742 13.8857L12.208 13.8223C12.5122 13.6594 12.7525 13.3958 12.8857 13.0742L12.918 12.9814C12.9475 12.8806 12.9695 12.7503 12.9824 12.5605C13 12.3026 13 11.9728 13 11.5C13 11.2239 13.2239 11 13.5 11C13.7761 11 14 11.2239 14 11.5C14 11.9589 13.9999 12.3281 13.9795 12.6279C13.9639 12.8563 13.9358 13.0652 13.8779 13.2627L13.8096 13.457C13.5875 13.9928 13.1875 14.4326 12.6807 14.7041L12.457 14.8096C12.2022 14.9151 11.9323 14.9587 11.6279 14.9795C11.3281 14.9999 10.9589 15 10.5 15H4.7002C4.14839 15 3.70429 15 3.3457 14.9707C3.02697 14.9447 2.74209 14.8937 2.47754 14.7803L2.36523 14.7275C1.95378 14.5179 1.60933 14.199 1.36914 13.8076L1.27246 13.6348C1.12163 13.3387 1.05907 13.0186 1.0293 12.6543C0.999999 12.2957 1 11.8516 1 11.2998V5.7002C1 5.14839 0.999999 4.70429 1.0293 4.3457C1.05907 3.98136 1.12163 3.66133 1.27246 3.36523L1.36914 3.19238C1.60933 2.80096 1.95378 2.48211 2.36523 2.27246L2.47754 2.21973C2.74209 2.10629 3.02697 2.05534 3.3457 2.0293C3.70429 2 4.14839 2 4.7002 2H5.5ZM13.5 1C14.3284 1 15 1.67157 15 2.5V6.5C15 6.77614 14.7761 7 14.5 7C14.2239 7 14 6.77614 14 6.5V2.70703L8.35352 8.35352C8.15825 8.54878 7.84175 8.54878 7.64648 8.35352C7.45122 8.15825 7.45122 7.84175 7.64648 7.64648L13.293 2H9.5C9.22386 2 9 1.77614 9 1.5C9 1.22386 9.22386 1 9.5 1H13.5Z" fill="#CCBAA5"/>
                  </svg>
                }
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
}