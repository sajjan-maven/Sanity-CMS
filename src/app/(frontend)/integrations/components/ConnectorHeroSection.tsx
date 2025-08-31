import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import NewButton from "@/components/ui/newButton";

interface ConnectorHeroSectionProps {
    title: {
        HeroHeading: string;
        Description: string;
        BannerImage?: { url: string };
        BannerImage2?: { url: string };
        ButtonVariant?: string;
        ButtonLink?: string;
        ButtonText?: string;
    };
}

const ConnectorHeroSection: React.FC<ConnectorHeroSectionProps> = ({ title }) => {
    return (
        <div>
            <section className="py-16 bg-[#e3dacf] integration-page">
                <div className="w-full max-w-[1256px] mx-auto">
                    <div className="flex items-center flex-col lg:flex-row">
                        <div className="w-full lg:w-3/5 px-6">
                            <div className="pt-8 lg:pb-24">
                                <div className="max-w-2xl mx-auto">
                                    <div className="grid gap-6 text-center lg:text-left">
                                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                            {title.HeroHeading}
                                        </h1>
                                        <div className="grid gap-8">
                                            <div className="max-w-lg mx-auto lg:mx-0">
                                                <div className="text-lg md:text-xl text-gray-600">
                                                    {title.Description}
                                                </div>
                                            </div>
                                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                                <Link href={title.ButtonLink || "#"}>
                                                    <NewButton
                                                        variant={title.ButtonVariant === "primary" ? "primary" : "secondary"}
                                                        className="mx-auto md:mx-0"
                                                    >
                                                        {title.ButtonText}
                                                        <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200" />
                                                    </NewButton>
                                                </Link>
                                                <div className="hidden">
                                                    <form
                                                        id="wf-form-Waiting-List-Form"
                                                        name="wf-form-Waiting-List-Form"
                                                        data-name="Waiting List Form"
                                                        action="https://stitchflow.us9.list-manage.com/subscribe/post?u=8d5383ffbe429b9724e0f2c7b&amp;id=456e1c6056&amp;f_id=003f27e1f0"
                                                        method="post"
                                                        className="flex justify-center"
                                                        data-wf-page-id="65df97133369ceedecc25f2b"
                                                        data-wf-element-id="9a753ebb-4356-65dc-0612-566e59209a1e"
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            <div className="flex gap-2">
                                                                <input
                                                                    className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                                                    maxLength={256}
                                                                    name="EMAIL"
                                                                    data-name="EMAIL"
                                                                    placeholder="Business email"
                                                                    type="email"
                                                                    id="EMAIL"
                                                                    required
                                                                />
                                                            </div>
                                                            <div>
                                                                <input
                                                                    type="submit"
                                                                    data-wait="Please wait..."
                                                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                                                                    defaultValue="Join pilot"
                                                                />
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/5 flex justify-end">
                            <Image
                                src={'/section-images/Group-427320677.png'}
                                alt="integration hero image with all the company logos"
                                className="lg:hidden w-full max-w-md h-auto"
                                width={646}
                                height={500}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ConnectorHeroSection;
