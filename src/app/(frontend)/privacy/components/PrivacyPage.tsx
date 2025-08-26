"use client"

import type React from "react"
import { useState } from "react"
import PrivacyBanner from "./PrivacyBanner"
import PrivacyLeftContainer from "./PrivacyLeftContainer"
import PrivacyRightContainer from "./PrivacyRightContainer"
import { PageBuilder } from "@/components/page-builder"

interface PrivacyPolicyProps {
	privacyData: {
		_id: string
		_type: string
		title?: string
		content?: any[] | null
		pageBuilder?: any[] | null
	}
}

const PrivacyPage: React.FC<PrivacyPolicyProps> = ({ privacyData }: any) => {
	const [activeSection, setActiveSection] = useState<string>("")
	return (
		<>
			<div>
				<PrivacyBanner privacyData={privacyData} />
			</div>
			<section className="pt-12 pb-24 relative px-6">
				<div className="w-full max-w-[1256px] mx-auto mb-8">
					<div className="relative flex justify-between">
						<div className="pr-6 top-28 sticky self-start hidden lg:block w-[30%]">
							<PrivacyLeftContainer privacyData={privacyData} activeSection={activeSection} />
						</div>
						<div className="self-start w-full lg:w-[70%]">
							<PrivacyRightContainer privacyData={privacyData} onSectionChange={setActiveSection} />
						</div>
					</div>
				</div>
			</section>
			{privacyData?.pageBuilder && privacyData.pageBuilder.length > 0 && (
				<div className="px-6">
					<div className="w-full max-w-[1256px] mx-auto">
						<PageBuilder pageBuilder={privacyData.pageBuilder as any} id={privacyData._id} type={privacyData._type} />
					</div>
				</div>
			)}
		</>
	)
}

export default PrivacyPage