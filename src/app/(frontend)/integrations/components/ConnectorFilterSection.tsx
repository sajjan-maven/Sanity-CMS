"use client";

import NewButton from "@/components/ui/newButton";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";

interface Category {
    id: string;
    CategoryList: string;
    name?: string;
    description?: string;
}

interface ConnectorImage {
    id: string;
    ImageText?: string;
    ImageTitle?: string;
    CategoryType?: string;
    Image?: {
        url: string;
    };
}

interface ConnectorFilterSectionProps {
    catogeoryList: Category[];
    imageList: ConnectorImage[];
}

const ConnectorFilterSection: React.FC<ConnectorFilterSectionProps> = ({ catogeoryList, imageList }) => {
    const [imageData, setImageData] = useState<ConnectorImage[]>(imageList);
    const [showIntegrationModal, setShowIntegrationModal] = useState<boolean>(false);
    const [categoryType, setCategoryType] = useState<string>("");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [resetFlag, setResetFlag] = useState(false);
    const [email, setEmail] = useState('');
    const [applicationName, setApplicationName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showThankyou, setShowThankyou] = useState(false);
    const [error, setError] = useState({ email: false, applicationName: false, nullValue: false });

    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };

    // Filter images based on category and search query
    const filterImages = useCallback(() => {
        let filteredData = imageList;

        // Apply category filter
        if (categoryType) {
            filteredData = filteredData.filter(
                (item: ConnectorImage) => item.CategoryType?.toLowerCase() === categoryType.toLowerCase()
            );
        }

        // Apply search filter
        if (searchQuery) {
            filteredData = filteredData.filter((item: ConnectorImage) =>
                item.ImageTitle?.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        setImageData(filteredData);
    }, [categoryType, searchQuery, imageList]);

    useEffect(() => {
        filterImages();
    }, [filterImages]);

    const handleClick = (category: string): void => {
        setResetFlag(true);
        setCategoryType(category);
        setSearchQuery(""); // Clear search when selecting a category
    };

    const handleReset = () => {
        setCategoryType("");
        setSearchQuery("");
        setResetFlag(false);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchQuery(value);
        setCategoryType(""); // Clear category when searching
        if (value) {
            setResetFlag(true);
        } else {
            setResetFlag(false);
        }
    };

    const handleSearchClick = () => {
        setResetFlag(false);
        setCategoryType("");
    };

    const closeModal = () => {
        setShowIntegrationModal(false);
        setShowThankyou(false);
        setEmail("");
        setApplicationName("");
        setError({ email: false, applicationName: false, nullValue: false });
        setIsSubmitting(false);
    };

    const handleIntegrationModalSubmit = async (event: React.MouseEvent) => {
        event.preventDefault();

        if (!email || !applicationName) {
            setIsSubmitting(false);
            setError({ ...error, nullValue: true });
            return;
        }
        if (!email) {
            setError({ ...error, email: true });
            return;
        }
        if (!applicationName) {
            setError({ ...error, applicationName: true });
            return;
        }
        if (!validateEmail(email)) {
            setError({ ...error, email: true });
            return;
        }

        try {
            setIsSubmitting(true);
            const hubspotResponse = await fetch('/api/hubspotform', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fields: {
                        email,
                        application_name: applicationName
                    },
                    pageContext: {
                        pageUri: window.location.href,
                        pageName: "integrations"
                    }
                })
            });

            if (!hubspotResponse.ok) {
                throw new Error('HubSpot submission failed');
            }
            setEmail("");
            setApplicationName("");
            setShowThankyou(true);
            setTimeout(() => {
                setShowIntegrationModal(false);
                setShowThankyou(false);
            }, 3000);
        } catch (error) {
            console.error("Error submitting request:", error);
            setShowThankyou(false);
            alert("There was an error submitting your request. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="w-full bg-[#f7f4f2] py-16">
            <div className="w-full max-w-[1256px] mx-auto px-6">
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-[0.25fr_1fr] auto-cols-fr content-start items-start">
                    <div className="grid gap-4 grid-cols-1">
                        <div className="shadow-sm h-full border border-gray-300 rounded-lg p-4">
                            <div className="flex flex-col h-full">
                                <div className="flex justify-between items-center mb-4">
                                    <h5 className="font-semibold text-gray-900">Categories</h5>
                                    {resetFlag && (
                                        <a
                                            href="#"
                                            onClick={handleReset}
                                            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                        >
                                            Reset
                                        </a>
                                    )}
                                </div>
                                <div className="flex-1 overflow-y-auto">
                                    <div role="list" className="space-y-2">
                                        {catogeoryList.map((category) => (
                                            <div key={category.id} role="listitem" className="w-full">
                                                <a
                                                    href="#"
                                                    className={`block px-3 py-2 text-sm text-gray-700 hover:text-gray-900 hover:bg-[#f4ece4] rounded-md transition-colors ${categoryType === category.CategoryList ? "border-b-2 border-[#e6ded4] bg-[#f4ece4]" : ""}`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleClick(category.CategoryList);
                                                    }}
                                                >
                                                    {category.CategoryList}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block shadow-sm h-full border border-gray-300 rounded-lg p-4">
                            <div className="h-full flex flex-col">
                                <div className="flex-1">
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-600 mb-3">
                                            Don&apos;t see your favorite application?
                                        </p>
                                        <div className="flex items-center gap-2 cursor-pointer text-blue-600 hover:text-blue-800" onClick={() => setShowIntegrationModal(true)}>
                                            <span className="text-sm font-medium">Request integration</span>
                                            <div className="w-4 h-4">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="100%"
                                                    height="100%"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        clipRule="evenodd"
                                                        d="M9.70711 2.79289C9.31658 2.40237 8.68342 2.40237 8.29289 2.79289C7.90237 3.18342 7.90237 3.81658 8.29289 4.20711L11.0858 7H2.5C1.94772 7 1.5 7.44772 1.5 8C1.5 8.55228 1.94772 9 2.5 9H11.0858L8.29289 11.7929C7.90237 12.1834 7.90237 12.8166 8.29289 13.2071C8.68342 13.5976 9.31658 13.5976 9.70711 13.2071L14.2065 8.70774L14.2071 8.70711C14.2093 8.70493 14.2115 8.70274 14.2136 8.70055C14.4038 8.5069 14.4992 8.25507 14.5 8.003M14.2092 7.29502C14.304 7.3904 14.3757 7.50014 14.4241 7.61722C14.3738 7.49593 14.3004 7.38669 14.2092 7.29502ZM9.70711 2.79289L14.2069 7.29269L9.70711 2.79289Z"
                                                        fill="currentcolor"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="grid">
                            <div>
                                <form className="mb-4">
                                    <input
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-transparent outline-gray-400"
                                        maxLength={256}
                                        name="Search"
                                        placeholder="Search for an integration"
                                        type="text"
                                        value={searchQuery}
                                        onChange={handleSearchChange}
                                        onClick={handleSearchClick}
                                        required
                                    />
                                </form>
                            </div>
                            <div>
                                {imageData.length > 0 ? (
                                    <div role="list" className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                        {imageData.map((imageItem) => (
                                            <div key={imageItem.id} role="listitem" className="w-full">
                                                <div className="shadow-sm h-full border border-gray-300 rounded-lg p-6 lg:p-8">
                                                    <div className="flex justify-center mb-4 lg:mb-14">
                                                        {imageItem.Image?.url && (
                                                            <Image
                                                                src={imageItem.Image.url}
                                                                loading="lazy"
                                                                alt={imageItem.ImageTitle ?? ""}
                                                                className="w-10 h-10 object-contain"
                                                                width={40}
                                                                height={40}
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="text-center">
                                                        <h2 className="text-gray-600 mb-2">
                                                            {imageItem.ImageText}
                                                        </h2>
                                                        <div className="text-sm text-gray-600">
                                                            {imageItem.ImageTitle}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div>
                                        <div className="text-center mb-8">
                                            <div className="text-2xl font-semibold text-gray-900 mb-2">Connect any app to Stitchflow</div>
                                            <p className="text-gray-600 max-w-3xl mx-auto text-center">Use our universal connectors to bring in data from any tool, even if it&apos;s not listed here. Get started in minutes with CSV or Google Sheets.</p>
                                        </div>
                                        <div className="grid gap-6 md:grid-cols-2">
                                            <div role="listitem" className="w-full">
                                                <div className="shadow-sm h-full border border-gray-300 rounded-lg p-6">
                                                    <div className="flex justify-center mb-4 lg:mb-14">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16" fill="none">
                                                            <path d="M1 4.2C1 3.0799 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.0799 1 4.2 1H11.8C12.9201 1 13.4802 1 13.908 1.21799C14.2843 1.40973 14.5903 1.71569 14.782 2.09202C15 2.51984 15 3.0799 15 4.2V11.8C15 12.9201 15 13.4802 14.782 13.908C14.5903 14.2843 14.2843 14.5903 13.908 14.782C13.4802 15 12.9201 15 11.8 15H4.2C3.0799 15 2.51984 15 2.09202 14.782C1.71569 14.5903 1.40973 14.2843 1.21799 13.908C1 13.4802 1 12.9201 1 11.8V4.2Z" fill="#0C9222" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M5 12C4.44772 12 4 11.5523 4 11V5C4 4.44772 4.44772 4 5 4H11C11.5523 4 12 4.44772 12 5V11C12 11.5523 11.5523 12 11 12H5ZM7.5 11V8.5H5V11H7.5ZM11 8.5V11H8.5V8.5H11ZM11 7.5V5H8.5V7.5H11ZM7.5 5H5V7.5H7.5V5Z" fill="white" />
                                                        </svg>
                                                    </div>
                                                    <div className="text-center">
                                                        <h2 className="text-gray-600 mb-2">CSV</h2>
                                                        <div className="text-sm text-gray-600">Import custom data</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div role="listitem" className="w-full">
                                                <div className="shadow-sm h-full border border-gray-300 rounded-lg p-6">
                                                    <div className="flex justify-center mb-4 lg:mb-14">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 16 16" fill="none">
                                                            <path d="M1 4.2C1 3.0799 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.0799 1 4.2 1H11.8C12.9201 1 13.4802 1 13.908 1.21799C14.2843 1.40973 14.5903 1.71569 14.782 2.09202C15 2.51984 15 3.0799 15 4.2V11.8C15 12.9201 15 13.4802 14.782 13.908C14.5903 14.2843 14.2843 14.5903 13.908 14.782C13.4802 15 12.9201 15 11.8 15H4.2C3.0799 15 2.51984 15 2.09202 14.782C1.71569 14.5903 1.40973 14.2843 1.21799 13.908C1 13.4802 1 12.9201 1 11.8V4.2Z" fill="#34A853" />
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M7 5V2H5V5H2V7H5L5 14H7L7 7H14V5H7Z" fill="white" />
                                                        </svg>
                                                    </div>
                                                    <div className="text-center">
                                                        <h2 className="text-gray-600 mb-2">Google Sheets</h2>
                                                        <div className="text-sm text-gray-600">Import custom data</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showIntegrationModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65">
                    <div className="w-full max-w-2xl m-6 relative">
                        <div className="bg-[#f7f4f2] rounded-lg shadow-lg w-full px-6 py-8 relative border border-gray-100">
                            <button
                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl font-bold focus:outline-none cursor-pointer"
                                onClick={closeModal}
                                aria-label="Close"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h2 className="text-2xl font-semibold mb-2 text-center">Request a New Integration</h2>
                            <p className="mb-4 text-gray-600 text-center max-w-xl mx-auto">
                                We build what you need, quickly. Tell us what you&apos;re missing, and we&apos;ll have it live in your workspace within weeks.
                            </p>
                            {showThankyou ? (
                                <div className="w-fit mx-auto text-lg font-medium border-2 border-dashed border-amber-200 px-8 py-2 rounded-3xl mt-8">
                                    <p className="text-amber-800 text-center">Thank you for reaching out!</p>
                                </div>
                            ) : (
                                <form>
                                    <div className="mb-4">
                                        <label htmlFor="application_name" className="block text-sm font-medium text-gray-700">
                                            Application Name
                                        </label>
                                        <input
                                            type="text"
                                            name="application_name"
                                            value={applicationName}
                                            onChange={(e) => { setApplicationName(e.target.value); setError({ ...error, applicationName: false, nullValue: false }) }}
                                            placeholder="e.g., Asana, Monday.com"
                                            required
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        />
                                        <p className="mt-2 text-sm text-red-600">
                                            {error.applicationName && "Please enter the application name."}
                                        </p>
                                    </div>
                                    <div className="mb-8">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={(e) => { setEmail(e.target.value); setError({ ...error, email: false, nullValue: false }) }}
                                            placeholder="you@yourcompany.com"
                                            required
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                                        />
                                        <p className="mt-2 text-sm text-red-600">
                                            {error.email && "Please enter a valid email address."}
                                        </p>
                                    </div>
                                    <p className="m-1 text-sm text-red-600">
                                        {error.nullValue && "Please fill in both fields."}
                                    </p>
                                    <div>
                                        <NewButton
                                            variant="secondary"
                                            className="w-full py-2.5"
                                            type="submit"
                                            onClick={handleIntegrationModalSubmit}
                                            disabled={isSubmitting}
                                        >
                                            Submit Request
                                        </NewButton>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ConnectorFilterSection;
