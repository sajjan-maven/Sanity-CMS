import Image from "next/image";
import Link from "next/link";

interface HeroSection {
    urlSlug?: string;
    category?: string;
    postedSummary?: string;
    bannerImage?: {
        url: string;
    };
}

interface BlogData {
    id: string;
    blogTitle: string;
    heroSection?: HeroSection;
}

interface BlogHeroSectionProps {
    blogData?: BlogData;
}

const FeaturedBlog = async ({ blogData }: BlogHeroSectionProps) => {
    return (
        <section className="w-full bg-[#f8f5f3] px-6 pt-20 pb-14">
            <div className="max-w-[1256px] mx-auto">
                <div className="text-4xl font-semibold mb-8">
                    <h2>Featured</h2>
                </div>
                {blogData && (
                    <Link
                        href={`/blog/${blogData.heroSection?.urlSlug}`}
                        key={blogData.id}
                        style={{ textDecoration: "none" }}
                        rel="noopener noreferrer"
                    >
                        <div className="w-full max-w-[500px] md:max-w-full mx-auto flex flex-col md:flex-row items-center md:items-start justify-between md:justify-start gap-6">
                            {blogData?.heroSection?.bannerImage?.url && (
                                <div className="w-full lg:max-w-1/2">
                                    <Image
                                        src={blogData.heroSection.bannerImage.url}
                                        alt={blogData.blogTitle || "Banner"}
                                        height={457}
                                        width={590}
                                        className="rounded-4xl"
                                        loading="lazy"
                                    />
                                </div>
                            )}
                            <div className="w-full lg:max-w-1/2 lg:mt-4">
                                <p className="font-semibold text-[#f25c30]">{blogData?.heroSection?.category}</p>
                                <h3 className="text-2xl lg:text-4xl lg:leading-12 font-medium mb-2 mt-1">
                                    {blogData?.blogTitle}
                                </h3>
                                <p className="text-xl text-gray-500">{blogData?.heroSection?.postedSummary}</p>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </section>
    )
}

export default FeaturedBlog