import Image from "next/image";
import Link from "next/link";

interface BlogHeroSectionProps {
    _id: string;
    _type: "post";
    title: string | null;
    slug: string | null;
    excerpt: string | null;
    category: {
        _id: string;
        title: string | null;
        slug: string | null;
    } | null;
    image: {
        asset: {
            url: string | null;
        } | null;
        altText: string | null;
    } | null;
};

interface FeaturedBlogProps {
    featuredBlog: BlogHeroSectionProps;
}

const FeaturedBlog = async ({ featuredBlog }: FeaturedBlogProps) => {
    return (
        <section className="w-full bg-[#f8f5f3] px-6 pt-20 pb-14">
            <div className="max-w-[1256px] mx-auto">
                <div className="text-4xl font-semibold mb-8">
                    <h2>Featured</h2>
                </div>
                {featuredBlog.slug && (
                    <Link
                        href={featuredBlog.slug}
                        style={{ textDecoration: "none" }}
                        rel="noopener noreferrer"
                    >
                        <div className="w-full max-w-[500px] md:max-w-full mx-auto flex flex-col md:flex-row items-center md:items-start justify-between md:justify-start gap-6">
                            {featuredBlog?.image?.asset?.url && (
                                <div className="w-full lg:max-w-1/2">
                                    <Image
                                        src={featuredBlog?.image?.asset?.url}
                                        alt={featuredBlog.title || "Banner"}
                                        height={457}
                                        width={590}
                                        className="rounded-4xl"
                                        loading="lazy"
                                    />
                                </div>
                            )}
                            <div className="w-full lg:max-w-1/2 lg:mt-4">
                                <p className="font-semibold text-[#f25c30]">{featuredBlog?.category?.title}</p>
                                <h3 className="text-2xl lg:text-4xl lg:leading-12 font-medium mb-2 mt-1">
                                    {featuredBlog?.title}
                                </h3>
                                <p className="text-xl text-gray-500">{featuredBlog?.excerpt}</p>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </section>
    )
}

export default FeaturedBlog