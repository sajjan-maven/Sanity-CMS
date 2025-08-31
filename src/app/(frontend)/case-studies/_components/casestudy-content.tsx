import React from 'react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import { portableTextComponents } from '@/components/portable-text/portable-text-components';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

const customComponents: PortableTextComponents = {
    ...portableTextComponents,
    block: {
        normal: ({ children }) => {
            if (!children) return <p></p>;

            const processedChildren = React.Children.map(children, (child: any, index) => {
                if (typeof child === 'string' && child.includes('<AdditionalSpace>')) {
                    return (
                        <span key={index}>
                            {child.split('<AdditionalSpace>').map((part: string, i: number) => (
                                <React.Fragment key={i}>
                                    {part}
                                    {i < child.split('<AdditionalSpace>').length - 1 && '\u00A0\u00A0\u00A0'}
                                </React.Fragment>
                            ))}
                        </span>
                    );
                }
                return <span key={index}>{child}</span>;
            });

            return <p>{processedChildren}</p>;
        },
    },
};

export default function CaseStudyContent({ casestudy }: { casestudy: any }) {
    const { content } = casestudy;

    if (!content) return null;

    return (
        <>
            <header className="flex flex-col w-full items-start gap-6 bg-transparent mb-6">
                <Link href="/case-studies" className='shadow-sm active:shadow-none flex px-4 py-2.5 text-[#363338] items-center font-medium gap-2 rounded-xl border border-[#54505833]'>
                    <ArrowLeft className="w-4 h-4" />
                    Case studies
                </Link>
            </header>
            <article className="prose max-w-none casestudyContent">
                <PortableText value={content} components={customComponents} />
            </article>
        </>
    );
}
