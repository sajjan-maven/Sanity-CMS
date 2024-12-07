import React from "react";
import { slugify, truncateText } from "@/lib/utils";
import AnimatedUnderline from "../ui/animated-underline";

export default function TableOfContents({ content }: {
  content: any;
}) {
  return (
    <nav>
      <ul className="space-y-2">
        {content?.map((item: any) => (
          <li key={item?._key} className="relative group w-fit">
            <a href={`#${slugify(item.children[0].text)}`}>
              {truncateText(item.children[0].text, 33)}
            </a>
            <AnimatedUnderline />
          </li>
        ))}
      </ul>
    </nav>
  );
}