import { PageBuilderType } from "@/types";

export type OktaIdpPointersProps = PageBuilderType<"oktaIdpPointers">;

export default function OktaIdpPointers(props: OktaIdpPointersProps) {
    const { title, pointers = [] } = props as OktaIdpPointersProps & {
        pointers?: { text: string }[];
    };

    return (
        <div className="w-full bg-[#F7F5F2]">
            <div className="max-w-[1256px] mx-auto px-4 pb-16">
                {/* Section Title */}
                <h2 className="text-center mx-auto text-2xl md:text-[40px] font-medium max-w-[650px] mb-8 leading-tight md:leading-[48px]">
                    {title || "Stitchflow covers the gaps that disconnected apps create"}
                </h2>

                {/* Pointer List */}
                <div className="max-w-[720px] mx-auto text-xl">
                    {pointers.map((point, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-6 bg-white border px-4 py-2.5 rounded-md border-[#564038]/20 mb-3.5"
                        >
                            {/* Checkmark Icon */}
                            <span className="mt-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="19"
                                    height="18"
                                    viewBox="0 0 19 18"
                                    fill="none"
                                >
                                    <path
                                        opacity="0.2"
                                        d="M9.5 17C13.9183 17 17.5 13.4183 17.5 9C17.5 4.58172 13.9183 1 9.5 1C5.08172 1 1.5 4.58172 1.5 9C1.5 13.4183 5.08172 17 9.5 17Z"
                                        fill="#4E7445"
                                    />
                                    <path
                                        d="M6.16669 9.66667L8.16669 11.6667L12.8334 7"
                                        stroke="#4E7445"
                                        strokeWidth="1.35"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M9.5 17C13.9183 17 17.5 13.4183 17.5 9C17.5 4.58172 13.9183 1 9.5 1C5.08172 1 1.5 4.58172 1.5 9C1.5 13.4183 5.08172 17 9.5 17Z"
                                        stroke="#4E7445"
                                        strokeWidth="1.35"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>
                            <p>{point.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}