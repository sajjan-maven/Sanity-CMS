import Image from 'next/image'
import Marquee from "react-fast-marquee";
import { sanityFetch } from '@/sanity/lib/live';
import { demoSettingsQuery } from '@/sanity/lib/queries/singletons/demo';

export default async function MarqueeSlider() {
    const { data } = await sanityFetch({
        query: demoSettingsQuery,
        params: {},
    });
    const { logos } = data || {};

    return (
        <Marquee
            pauseOnHover={true}
            autoFill={true}
            speed={80}
            gradient={true}
            gradientColor="#faf9f8"
            gradientWidth={86}
            className="w-full max-w-[578px] mx-auto"
        >
            {logos?.length > 0 && logos.map((logo: any, index: number) => (
                <div key={index} className="w-fit h-20 align-bottom px-6">
                    <Image
                        alt="Company Logo"
                        src={logo.asset.url}
                        width={150}
                        height={40}
                        className="max-w-full h-full flex justify-center items-end"
                    />
                </div>
            ))}
        </Marquee>
    )
}
