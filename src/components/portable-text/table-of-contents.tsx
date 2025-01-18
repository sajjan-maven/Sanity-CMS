import React from "react";
import { TableOfContentsType } from "@/types/misc";
import { slugify, truncateText } from "@/lib/utils";
import AnimatedUnderline from "../shared/animated-underline";

export default function TableOfContents({ content }: {
  content: TableOfContentsType[];
}) {
  return (
    <nav aria-label="Table of contents" className="scroll-smooth">
      <ul role="list" className="space-y-2 border-l border-dashed">
        {content?.map((item: TableOfContentsType) => (
          <li key={item?._key}>
            <a 
              href={`#${slugify(item.children[0].text)}`} 
              className="flex items-center gap-2 scroll-smooth focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              <span className="block w-2.5 border-t border-dashed text-gray-300" /> 
              <span className="relative group w-fit">
                {truncateText(item.children[0].text, 33)}
                <AnimatedUnderline />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}