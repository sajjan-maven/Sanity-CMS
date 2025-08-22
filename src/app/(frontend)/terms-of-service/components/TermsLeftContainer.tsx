"use client";

import React, {useEffect, useState} from "react";
import {Link} from "react-scroll";

interface TermsProps {
	termsData: {
		content?: any[] | null;
	};
	activeSection: string;
}

const TermsLeftContainer: React.FC<TermsProps> = ({termsData, activeSection}) => {
	const [toc, setToc] = useState<{id: string; title: string}[]>([]);
	const formatSectionId = (sectionTitle: string) =>
		sectionTitle
		.replace(/\*\*/g, "")
		.replace(/[^a-zA-Z0-9\s-]/g, "")
		.trim()
		.replace(/\s+/g, "-")
		.replace(/-+/g, "-")
		.toLowerCase();

	useEffect(() => {
		// Build TOC from Portable Text blocks with style === 'h3'
		const headings: { id: string; title: string }[] = [];
		(termsData?.content || []).forEach((block: any) => {
			if (block?._type === 'block' && block?.style === 'h3') {
				const text = Array.isArray(block.children)
					? block.children.map((c: any) => c.text).join("")
					: '';
				const id = formatSectionId(text);
				headings.push({ id, title: text });
			}
		});
		setToc(headings);
	}, [termsData]);

	const handleScroll = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			window.scrollTo({ top: element.offsetTop - 100, behavior: "smooth" });
		}
	};

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
					onClick={() => handleScroll(section.id)}
					className={`block w-inline-block terms-space mb-4 ${activeSection === section.id ? "text-[#F25C30] font-semibold hover:text-[#ff3c00]" : "text-gray-800 hover:text-gray-950"}`}
				>
					<div fs-toc-element="link"> {section.title} </div>
				</Link>
			))}
		</div>
	);
};

export default TermsLeftContainer; 