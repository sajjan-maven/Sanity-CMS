import { PageBuilderType } from "@/types";
import PortableTextEditor from "@/components/portable-text/portable-text-editor";

// export type HeroBannerWithTagBlockProps = PageBuilderType<"heroBannerWithTagBlock">;

export default function HeroBannerWithTagBlock(props: any) {

    const { tag, headingBold, headingOrdinary, headingWidth, subheading, subheadingWidth } = props;

    return (
        <section className="relative w-full pt-12 md:pt-24 bg-[#f8f5f3] overflow-hidden">
            <div className="flex flex-col w-full px-6 items-center gap-8 mx-auto">
                {tag && (
                    <div className="text-sm font-medium text-[#7B7481] uppercase tracking-wide">
                        {tag}
                    </div>
                )}
                <header>
                    <h1 className="w-full text-[#222222] text-[40px] lg:text-5xl xl:text-[62px] text-center leading-12 xl:leading-[72px] inline-block font-medium"
                        style={{ maxWidth: `${headingWidth}px` }}>
                        {headingBold && <strong>{headingBold}</strong>}
                        {headingOrdinary && <span>{headingOrdinary}</span>}
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
