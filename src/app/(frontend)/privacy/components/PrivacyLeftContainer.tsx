"use client";

import React, {useEffect, useState} from "react";
import {TermsOrPrivacyData} from "@/app/types/termsOrPrivacy";
import {Link} from "react-scroll";

interface PrivacyPolicyProps {
    privacyData: {data: TermsOrPrivacyData};
    activeSection: string;
}

const PrivacyLeftContainer: React.FC<PrivacyPolicyProps> = ({privacyData, activeSection}) => {
    //const router = useRouter();
    const [toc, setToc] = useState<{id: string; title: string}[]>([]);
    const formatSectionId = (sectionTitle: string) =>
        sectionTitle
        .replace(/\*\*/g, "")
        .replace(/[^a-zA-Z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .toLowerCase();

    // const updateUrl = (sectionId: string) => {
    //     router.push(`${pathname}#${sectionId}`, {scroll: false});
    // };
    const handleScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100, // Adjust offset to align properly
                behavior: "smooth",
            });
        }
    };
    // const contentHeadingId = formatSectionId(privacyData?.data?.contentSection?.contentHeading || "");
    useEffect(() => {
        if (privacyData?.data?.contentSection) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(privacyData.data.contentSection, "text/html");
            const h3Elements = doc.querySelectorAll("h3");

            const headings = Array.from(h3Elements).map((h3) => {
                const title = h3.textContent || "";
                return {
                    id: formatSectionId(title),
                    title: title,
                };
            });

            setToc(headings);
        }
    }, [privacyData]);
    // return (
    // <div id="w-node-_72fe14b0-54c0-632f-c510-8a0518b1559e-ecc25f3e">
    //     <div key="content-heading">
    //         <Link
    //             to={contentHeadingId}
    //             smooth={true}
    //             offset={-127}
    //             spy={true}
    //             onClick={() => updateUrl(contentHeadingId)}
    //             className={`fs-toc_link w-inline-block terms-space ${
    //                 activeSection === contentHeadingId ? "active" : ""
    //             }`}
    //         >
    //             <div fs-toc-element="link">{privacyData?.data?.contentSection?.contentHeading}</div>
    //         </Link>
    //     </div>

    //     {privacyData?.data?.contentSection?.listOfContent?.map((section: ListOfContent) => {
    //         const sectionId = formatSectionId(section.listHeading);

    return (
        <div id="w-node-_72fe14b0-54c0-632f-c510-8a0518b1559e-ecc25f3e">
            {toc.map((section) => (
                <Link
                    key={section.id}
                    to={section.id}
                    smooth={true}
                    offset={-127}
                    spy={true}
                    duration={500}
                    // href={`${pathname}#${section.id}`}
                    onClick={() => handleScroll(section.id)}
                    className={`block w-inline-block terms-space ${activeSection === section.id ? "text-[#F25C30] font-semibold hover:text-[#ff3c00]" : "text-gray-800 hover:text-gray-950"}`}
                >
                    <div fs-toc-element="link"> {section.title} </div>
                </Link>
            ))}
        </div>
    );
};

export default PrivacyLeftContainer;
