"use client"

import type React from "react"
import { useState } from "react"
import TermsBanner from "./TermsBanner"
import TermsLeftContainer from "./TermsLeftContainer"
import TermsRightContainer from "./TermsRightContainer"
import { PageBuilder } from "@/components/page-builder"

interface TermsPageProps {
	termsData: {
		_id: string
		_type: string
		title?: string
		content?: any[] | null
		pageBuilder?: any[] | null
	}
}

const TermsPage: React.FC<TermsPageProps> = ({ termsData }) => {
	const [activeSection, setActiveSection] = useState<string>("")
	return (
		<>
			<div>
				<TermsBanner termsData={termsData} />
			</div>
			<section className="pt-12 pb-24 relative px-6">
				<div className="w-full max-w-[1256px] mx-auto mb-8">
					<div className="relative flex justify-between">
						<div className="pr-6 top-28 sticky self-start hidden lg:block w-[30%]">
							<TermsLeftContainer termsData={termsData} activeSection={activeSection} />
						</div>
						<div className="self-start w-full lg:w-[70%]">
							<TermsRightContainer termsData={termsData} onSectionChange={setActiveSection} />
						</div>
					</div>
				</div>
			</section>
			{termsData?.pageBuilder && termsData.pageBuilder.length > 0 && (
				<div className="px-6">
					<div className="w-full max-w-[1256px] mx-auto">
						<PageBuilder pageBuilder={termsData.pageBuilder as any} id={termsData._id} type={termsData._type} />
					</div>
				</div>
			)}
		</>
	)
}

export default TermsPage 