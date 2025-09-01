// import { PageBuilderType } from "@/types";
import PortableTextEditor from "@/components/portable-text/portable-text-editor";

// export type HeroBannerWithTagBlockProps = PageBuilderType<"heroBannerWithTagBlock">;

export default function HeroBannerWithTagBlock(props: any) {

    const { tag, headingBold, headingOrdinary, headingWidth, subheading, subheadingWidth } = props;

    return (
        <section className="relative w-full py-[32px] bg-[#f8f5f3] overflow-hidden">
            <div className="flex flex-col w-full px-6 items-center mx-auto">
                {tag && (
                    <div className="inline-block px-4 py-1 text-sm font-medium text-[#7b7481] bg-[#fff] rounded-full mb-6">
                        {tag}
                    </div>
                )}
                <header>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight mb-8 max-w-[880px] mx-auto"
                        style={{ maxWidth: `${headingWidth}px` }}>
                        {headingBold && <span className="font-bold block">{headingBold}</span>}
                        {headingOrdinary && <span className="font-medium block">{headingOrdinary}</span>}
                    </h1>
                </header>
            </div>
            <div className="relative w-full">
                <div className="relative pt-2 xl:pt-8 lg:mb-0 w-full flex-wrap px-8 pointer-events-none z-[99]">
                    <div className="w-full font-normal mx-auto text-sm md:text-lg text-center md:leading-8 pointer-events-auto text-[#7B7481]"
                        style={{ maxWidth: `${subheadingWidth}px` }}>
                        <PortableTextEditor
                            data={subheading ?? []}
                            classNames='text-center'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
