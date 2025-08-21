import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { ArrowRightIcon } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full flex items-center justify-center h-screen text-center relative overflow-hidden bg-[#F8F5F3]">
      <div className="absolute left-0 bottom-0 max-w-[300px] md:max-w-[600px] hidden sm:block">
        <Image src="/section-images/Logomark_L.svg" alt="Left Logo" width={405} height={515} />
      </div>
      <div className="absolute right-0 top-0 max-w-[300px] md:max-w-[600px] hidden sm:block">
        <Image src="/section-images/Logomark_R.svg" alt="Right Logo" width={341} height={561} />
      </div>
      <div className="text-center z-20 px-6 relative -mt-20">
        <p className="mb-2.5 text-4xl text-[#94929c]">¯\_(ツ)_/¯</p>
        <h1 className="text-[120px] sm:text-[150px] font-bold text-[#18181b] leading-32 mb-2 md:mb-5">404</h1>
        <p className="text-lg md:text-xl font-medium text-[#94929c] mx-auto mb-8 max-w-[450px]">
          The link you clicked may be broken or the page may have been removed
        </p>
        <Link
          href="/"
          className="cursor-pointer px-4 min-h-10 py-[7px] w-fit mx-auto rounded-xl font-medium flex items-center justify-center whitespace-nowrap transition-all duration-180 ease-in-out transform focus:outline-none shadow-[0px_2px_12px_#54505840,0px_2px_3px_#54505845,inset_0px_-2px_4px_#00000099] bg-[#363338] bg-gradient-to-b from-[#545058] to-[#363338] hover:to-[#020202] active:to-[#1f1e1f] text-white  group active:[&_svg]:translate-x-1.5 hover:[&_svg]:translate-x-0.8"
        >
          Back to homepage
          <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200" />
        </Link>
      </div>
    </div>
  );
}