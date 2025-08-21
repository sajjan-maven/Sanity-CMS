import React from "react";

interface PrivacyPolicyProps {
	privacyData: {
		title?: string;
	};
}

const PrivacyBanner: React.FC<PrivacyPolicyProps> = ({ privacyData }) => {
	const privacyHeading = privacyData?.title;

	return (
		<section className="w-full bg-[#f8f5f3] px-6 py-20">
			<div className="w-full max-w-[1256px] mx-auto mb-8">
				<div className="h-flex justify-center">
					<div className="max-width-45rem">
						<h1
							id="w-node-ac2b02b3-dffa-e389-6dc7-75e2f9b09780-ecc25f3e"
							className="w-full font-medium text-[#222222] text-[40px] md:text-[64px] text-center leading-12 md:leading-[72px]"
						>
							{privacyHeading}
						</h1>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PrivacyBanner;
