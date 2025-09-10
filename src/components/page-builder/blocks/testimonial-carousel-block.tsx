import { PageBuilderType } from "@/types";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export type TestimonialCarouselBlockProps = PageBuilderType<"testimonialCarouselBlock">;

export default function TestimonialCarouselBlock(props: TestimonialCarouselBlockProps) {
  const { title, testimonials = [] } = props;

  return (
    <div className="flex justify-center items-center flex-wrap relative">
      <div className="w-full max-w-[1304px] mx-auto px-6">
        <h2 className="font-semibold text-3xl md:text-[40px] text-center leading-[48px] text-[#222222] max-w-5xl mx-auto">
          {title || "IT teams who have tamed their disconnected environments with Stitchflow"}
        </h2>
      </div>

      {/* Carousel */}
      <div className="w-full homePageCarousel">
        <Marquee
          pauseOnHover={true}
          pauseOnClick={true}
          autoFill={true}
          className="mt-14 pb-20 max-w-[3000px] mx-auto"
          speed={50}
        >
          {testimonials?.map((testimonial, index) => (
            <div key={index} className="w-full px-2 lg:px-3 h-full max-w-[400px] md:max-w-[830px]">
              <div className="bg-[#363338] min-h-[500px] md:min-h-[414px] text-white rounded-4xl overflow-hidden p-6 md:p-8 lg:p-10 flex flex-col">
                <blockquote className="flex-grow mb-6">
                  <p className="text-base md:text-lg lg:text-lg leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center mt-[24px]">
                    <div className="rounded-full flex items-center bg-gray-500 justify-center mr-3 md:mr-4 overflow-hidden">
                      <Image
                        src={testimonial?.avatar?.asset?.url || '/section-images/person.png'}
                        alt={testimonial?.avatar?.alt || 'avatar image'}
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm md:text-base">
                        {testimonial.author}
                      </p>
                      <p className="text-xs md:text-sm text-gray-200">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </blockquote>

                <div className="flex flex-col items-start justify-between">
                  {testimonial.companyLogo?.asset?.url && (
                    <Image
                      src={testimonial.companyLogo.asset.url}
                      alt={testimonial.companyLogo.alt || `${testimonial.author}'s company logo`}
                      width={testimonial.companyLogo.width || 150}
                      height={testimonial.companyLogo.height || 40}
                      className="object-contain"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}