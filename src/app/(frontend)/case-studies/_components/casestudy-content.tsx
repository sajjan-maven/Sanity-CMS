"use client"
import PortableTextEditor from '@/components/portable-text/portable-text-editor';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function CasestudyContent({ casestudy }: any) {
    const {
        content,
    } = casestudy;

    return (
        <>
            <header className="flex flex-col w-full items-start gap-6 bg-transparent">
                <Link href="/case-studies" className='shadow-sm active:shadow-none flex px-4 py-2.5 text-[#363338] items-center font-medium gap-2 rounded-xl border border-[#54505833]'>
                    <ArrowLeft className="w-4 h-4" />
                    Case studies
                </Link>
            </header>
            <article className="w-full mt-3">
                <PortableTextEditor data={content || []} classNames='casestudyContent max-w-full' />
            </article>
        </>
    )
}
