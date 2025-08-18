'use client';

import React, { useEffect, useState } from "react";
import { slugify } from "@/lib/utils";
import { Link as ScrollLink } from "react-scroll";
import { PostBySlugQueryResult } from "../../../sanity.types";
import { usePathname, useRouter } from "next/navigation";

type Post = NonNullable<
  NonNullable<PostBySlugQueryResult>
>;

interface TableOfContentsProps {
  content: Post['tableOfContents'];
}

export default function TableOfContents({ content }: TableOfContentsProps) {

  // const [isOpen, setIsOpen] = useState(true);
  const contentArray = Array.isArray(content) ? content : [content];
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isManualClick, setIsManualClick] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (sectionId: string) => {
    setIsManualClick(true); // ✅ Track that user clicked manually
    setActiveSection(sectionId);
    // updateUrl(sectionId);

    setTimeout(() => {
      setIsManualClick(false); // ✅ Reset after smooth scroll completes
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isManualClick) return;

      let currentSection = null;
      let lastVisibleSection = null;

      contentArray.forEach((item) => {
        const element = document.getElementById(slugify(item?.children?.[0]?.text ?? ''));
        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 160 && rect.bottom >= 160) {
            currentSection = slugify(item?.children?.[0]?.text ?? '');
          }

          if (rect.top <= 160) {
            lastVisibleSection = slugify(item?.children?.[0]?.text ?? '');
          }
        }
      });

      const isAtTop = window.scrollY === 0;

      const newActiveSection = isAtTop ? null : currentSection || lastVisibleSection;

      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
        if (newActiveSection) {
          // router.push(`${pathname}#${newActiveSection}`, {scroll: false});
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [contentArray, activeSection, isManualClick, pathname, router]);

  return (
    <nav className="flex flex-col gap-3">
      {contentArray?.map((item) => (
        <ScrollLink
          key={slugify(item?.children?.[0]?.text ?? '')}
          to={slugify(item?.children?.[0]?.text ?? '')}
          smooth={true}
          duration={300}
          offset={-100}
          spy={true}
          onClick={() => handleClick(slugify(item?.children?.[0]?.text ?? ''))}
          className={`transition-all text-sm duration-300 cursor-pointer ease-in ${activeSection === slugify(item?.children?.[0]?.text ?? '') ? "font-medium text-[#F25C30]" : "text-gray-600"}`}
        >
          {item?.children?.[0]?.text}
        </ScrollLink>
      ))}
    </nav>
  );
}