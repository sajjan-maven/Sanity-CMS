"use client";

import React from "react";
import { PageBuilderType } from "@/types";

export type DataTableBlockProps = PageBuilderType<"dataTableBlock">;

export default function DataTableBlock(props: DataTableBlockProps) {
    const { heading, subheading, tableHeaders = [], tableRows = [] } = props;

    return (
        <section className="flex flex-col items-center gap-2.5 py-8 px-4 md:px-8 lg:px-16 relative bg-[#f7f5f2]">
            <div className="max-w-[1238px] w-full mx-auto">
                {/* Heading */}
                {heading && (
                    <h2 className="max-w-[768px] w-full mx-auto font-bold text-[#363338] text-[28px] md:text-5xl text-center mb-4 md:mb-10">
                        {heading}
                    </h2>
                )}

                {subheading && (
                    <p className="text-[#7B7481] w-full max-w-[900px] mx-auto text-base md:text-lg text-center md:mb-6">
                        {subheading}
                    </p>
                )}

                <div className="text-[#ACA8B2] text-base text-center mt-6 md:mt-12 mb-2 block md:hidden">
                    Scroll sideways to view full table →
                </div>

                {/* Table */}
                <div className="relative w-full block bg-white rounded-xl border border-solid border-[#56403833] overflow-auto">
                    <table className="text-sm w-full">
                        <thead className="border-b">
                            <tr className="transition-colors hover:bg-muted/50 border-b border-[#56403833]">
                                {tableHeaders?.map((header: any, index: number) => (
                                    <th
                                        key={index}
                                        className={`h-10 px-2 align-middle font-medium ${header.width || "w-[260px]"} px-6 py-3.5 ${header.id === "feature" ? "text-left" : "text-center"
                                            }`}
                                    >
                                        <span className="font-semibold text-[#363338] text-lg leading-[27px] whitespace-pre-line">
                                            {header.label}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="[&_tr:last-child]:border-0">
                            {tableRows?.map((row: any, index: number) => (
                                <tr
                                    key={index}
                                    className="transition-colors hover:bg-muted/50 border-b border-[#56403833]"
                                >
                                    <td className="px-6 py-3.5">
                                        <div className="p-2 align-middle font-medium text-[#363338] text-base leading-6">
                                            {row.feature}
                                        </div>
                                    </td>
                                    {row.values?.map((cell: any, idx: number) => (
                                        <td key={idx} className="px-6 py-3.5 text-center">
                                            <div
                                                className={`p-2 align-middle font-medium text-base leading-6 whitespace-nowrap ${cell.color}`}
                                            >
                                                {cell.text}
                                            </div>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}