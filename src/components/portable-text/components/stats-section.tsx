import { PortableText } from '@portabletext/react';
import { portableTextComponents } from '../portable-text-components';

export default function StatsSection({ data }: {
    data: {
        topFullWidthData?: Array<{
            value: any[];
            description: string;
        }>;
        leftSideData?: Array<{
            value: any[];
            description: string;
        }>;
        rightSideData?: Array<{
            value: any[];
            description: string;
        }>;
        bottomFullWidthData?: Array<{
            value: any[];
            description: string;
        }>;
    }
}) {
    const {
        topFullWidthData = [],
        leftSideData = [],
        rightSideData = [],
        bottomFullWidthData = []
    } = data;

    return (
        <div className="w-full bg-gradient-to-b from-[#F7F5F2] to-[#E0D5C8] border border-[#56403833] rounded-[32px] mb-14 px-8 py-6 lg:px-12 lg:py-10">
            {topFullWidthData.length > 0 && (
                <div>
                    {topFullWidthData.map((stat, index) => (
                        <div key={index} className="border-b py-4 lg:pr-8 first:pt-0 border-[#56403833]">
                            <div className="text-3xl font-medium text-[#694D43]">
                                <PortableText value={stat.value} components={portableTextComponents} />
                            </div>
                            <p className="font-normal text-base leading-6 lg:pr-10">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            )}
            {(leftSideData.length > 0 || rightSideData.length > 0) && (
                <div className={`md:flex items-center ${bottomFullWidthData.length > 0 ? 'border-b border-[#56403833]' : 'pb-6'}`}>
                    {leftSideData.length > 0 && (
                        <div className="flex flex-col space-y-4 w-full md:border-r border-[#56403833]">
                            {leftSideData.map((stat, index) => (
                                <div key={index} className={`border-b pb-4 lg:pr-8 md:last:border-0 border-[#56403833] ${topFullWidthData.length > 0 ? 'first:pt-4' : 'first:pt-0'}`}>
                                    <div className="text-3xl font-medium text-[#694D43]">
                                        <PortableText value={stat.value} components={portableTextComponents} />
                                    </div>
                                    <p className="font-normal text-base leading-6 lg:pr-10">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                    {rightSideData.length > 0 && (
                        <div className="flex flex-col space-y-4 w-full md:max-w-[300px]">
                            {rightSideData.map((stat, index) => (
                                <div key={index} className="border-b md:pl-7 pb-4 last:border-0 border-[#56403833] first:pt-4 md:first:pt-0">
                                    <div className="text-3xl font-medium text-[#694D43]">
                                        <PortableText value={stat.value} components={portableTextComponents} />
                                    </div>
                                    <p className="font-normal text-base leading-6 pr-4">
                                        {stat.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
            {bottomFullWidthData.length > 0 && (
                <div>
                    {bottomFullWidthData.map((stat, index) => (
                        <div key={index} className="border-b last:border-b-0 py-4 lg:pr-8 md:last:pb-0 md:last:border-0 border-[#56403833]">
                            <div className="text-3xl font-medium text-[#694D43]">
                                <PortableText value={stat.value} components={portableTextComponents} />
                            </div>
                            <p className="font-normal text-base leading-6 lg:pr-10">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
