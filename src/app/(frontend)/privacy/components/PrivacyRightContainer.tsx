"use client";
import React, {useEffect} from "react";
import PortableTextEditor from "@/components/portable-text/portable-text-editor";

interface PrivacyPolicyProps {
	privacyData: {
		content?: any[] | null;
	};
	onSectionChange: (sectionId: string) => void;
}

const PrivacyRightContainer: React.FC<PrivacyPolicyProps> = ({privacyData, onSectionChange}) => {
	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "-100px 0px -50% 0px",
			threshold: 0.1,
		};

		const observerCallback: IntersectionObserverCallback = (entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					onSectionChange(entry.target.id);
				}
			});
		};

		const observer = new IntersectionObserver(observerCallback, options);
		const sections = document.querySelectorAll("h3[id]");

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	}, [onSectionChange]);

	return (
		<div fs-toc-offsettop="8rem" fs-toc-element="contents" className="blog-rtb text-left w-richtext">
			<div className="terms-content">
				<PortableTextEditor data={privacyData?.content || null} />
			</div>
		</div>
	);
};

export default PrivacyRightContainer;
