"use client";

import NewButton from "@/components/ui/newButton";
import Image from "next/image";
import React, { useState, useEffect } from "react";

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
    const [imageFlag, setImageFlag] = useState(false);
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

    const handleClick = (category: string): void => {
        setResetFlag(true);
        setCategoryType(category);
    };

    const handleReset = () => {
        setCategoryType("");
        setResetFlag(false);
        setImageFlag(true);
    };

    useEffect(() => {
        const fetchDataAsync = async (): Promise<void> => {
            try {
                if (imageList) {
                    setImageFlag(false);
                    if (categoryType) {
                        const filteredData = imageList.filter(
                            (item: ConnectorImage) => item.CategoryType?.toLowerCase() === categoryType.toLowerCase()
                        );
                        setImageData(filteredData);
                    } else {
                        setImageData(imageList);
                    }
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchDataAsync();
    }, [categoryType, imageFlag]);

    const handleSearchClick = () => {
        setResetFlag(false);
        setCategoryType("");
    };

    const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value.toLowerCase().trim();
        const filteredData = imageList.filter((item: ConnectorImage) => item.ImageText?.toLowerCase().includes(value));
        if (value) {
            setImageData(filteredData);
        } else {
            setImageFlag(true);
        }
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
        <section className="w-full bg-[#f8f5f3] px-6 py-16">
            <div className="w-full max-w-6xl mx-auto">
                <div className="grid gap-4 grid-cols-1 lg:grid-cols-[0.25fr_1fr] auto-cols-fr content-start items-start">
                    <div id="w-node-_67f7b985-244f-872d-797e-7858cccb8c85-ecc25f2b" className="grid gap-4 grid-cols-1">
                        <div
                            id="w-node-_5c112243-9f78-26a2-e39c-15eef8525446-ecc25f2b"
                            className="tags-wrapper cc-new-one shadow-sm h-full border border-gray-300"
                        >
                            <div className="hp-wrap cc-grow">
                                <div
                                    id="w-node-_381b8541-62dd-3873-e3af-45927b8a1324-ecc25f2b"
                                    className="filters-top-wrap"
                                >
                                    <h5 id="w-node-c130dd44-b335-39aa-16ec-f382ef8e5c9c-ecc25f2b" className="font-semibold">Categories</h5>
                                    {resetFlag && (
                                        <a
                                            href="#"
                                            onClick={handleReset}
                                            className="reset-link jetboost-active-show-2bmw"
                                        >
                                            Reset
                                        </a>
                                    )}
                                </div>
                                <div className="collection-list-wrapper jetboost-filter-2bmw w-dyn-list">
                                    <div role="list" className="int-category-cl cc-verticle-one w-dyn-items">
                                        {catogeoryList.map((category) => (
                                            <div key={category.id} role="listitem" className='filter-ci w-dyn-item'>
                                                <a
                                                    href="#"
                                                    className={`fs-toc_link int-tags jetboost-filter-trigger ${categoryType === category.CategoryList ? "border-b" : ""} cc-no-break w-inline-block`}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        handleClick(category.CategoryList);
                                                    }}
                                                >
                                                    <div fs-toc-element="link" className="text-block-2" />
                                                    {category.CategoryList}
                                                </a>
                                                <div className="w-embed">
                                                    <input
                                                        type="hidden"
                                                        className="jetboost-list-item"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cta-wrapper secoundary-cta int-page hidden lg:block cc-smaller shadow-sm h-full border border-gray-300">
                            <div className="content-wrapper">
                                <div className="w-layout-grid hp-wrap gap--625">
                                    <div
                                        id="w-node-_9323d208-a43d-aa73-7c82-e1f3b868c06b-ecc25f2b"
                                        className="hp-wrap gap--25"
                                    >
                                        <p
                                            id="w-node-_4062a537-f2cf-a8d4-3e72-3a59b603b855-ecc25f2b"
                                            className="request-section-text"
                                        >
                                            Don’t see your favorite application?
                                        </p>
                                        <div
                                            id="w-node-f59dc8c2-5294-f2e9-d898-7b8ef41464eb-ecc25f2b"
                                            className="button-wrapper left-justify"
                                        >
                                            <div className="flex items-center gap-1 cursor-pointer" onClick={() => setShowIntegrationModal(true)}>
                                                <div className="text-block-8 text-blue-700">Request integration</div>
                                                <div className="button-arrow w-embed">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="auto"
                                                        height="auto"
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

                                            {showIntegrationModal && <div className="modal">
                                                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 ">
                                                    <div className="w-full max-w-2xl m-6 relative">
                                                        <div className="bg-[#eee9e2] rounded-lg shadow-lg w-full px-6 py-8 relative border-gray-100">
                                                            <button
                                                                className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl font-bold focus:outline-none cursor-pointer"
                                                                onClick={() => { closeModal() }}
                                                                aria-label="Close"
                                                            >
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                                </svg>
                                                            </button>
                                                            <h2 className="text-2xl font-semibold mb-2 text-center">Request a New Integration</h2>
                                                            <p className="mb-4 text-gray-600 text-center max-w-xl mx-auto">
                                                                We build what you need, quickly. Tell us what you&lsquo;re missing, and we&lsquo;ll have it live in your workspace within weeks.
                                                            </p>
                                                            {showThankyou
                                                                ? <div className="w-fit mx-auto text-lg font-medium border-2 border-dashed border-[#D3C3B2] px-8 py-2 rounded-3xl mt-8">
                                                                    <p className="text-[#3D3123] text-center">Thank you for reaching out!</p>
                                                                </div>
                                                                :
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
                                                                            className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm p-2"
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
                                                                            className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm p-2"
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
                                                                </form>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="w-node-_24f6938e-bcf8-1af8-957f-de80d0ffb8c5-ecc25f2b">
                        <div
                            id="w-node-_70e3e803-016e-eb0c-4bf9-0edc42054879-ecc25f2b"
                            className="w-layout-grid hp-wrap"
                        >
                            <div
                                id="int-search"
                                className="int-search-fb jetboost-filter-none-2bmw w-node-b25ab81d-c219-bc8e-d124-c595830210b9-ecc25f2b w-form"
                            >
                                <form
                                    id="wf-form-Search-form"
                                    name="wf-form-Search-form"
                                    data-name="Search form"
                                    method="get"
                                    data-wf-page-id="65df97133369ceedecc25f2b"
                                    data-wf-element-id="b25ab81d-c219-bc8e-d124-c595830210ba"
                                >
                                    <input
                                        className="int-search-input jetboost-list-search-input-w81q w-input w-full mb-4 shadow"
                                        maxLength={256}
                                        name="Search"
                                        data-name="Search"
                                        placeholder="Search for an integration"
                                        type="text"
                                        id="Search"
                                        onKeyUp={handleKeyUp}
                                        onClick={handleSearchClick}
                                        required
                                    />
                                    <input
                                        type="submit"
                                        data-wait="Please wait..."
                                        className="hide w-button"
                                        defaultValue="Submit"
                                    />
                                </form>
                                {/* <div className="w-form-done">
                                    <div>Thank you! Your submission has been received!</div>
                                </div>
                                <div className="w-form-fail">
                                    <div>Oops! Something went wrong while submitting the form.</div>
                                </div> */}
                            </div>
                            <div
                                id="w-node-_9fd45663-0861-cb9b-116d-d551a5d19fad-ecc25f2b"
                                className="jetboost-list-wrapper-w81q jetboost-list-wrapper-2bmw w-dyn-list"
                            >
                                {imageData.length > 0 ? (
                                    <div id="connectors" role="list" className="integration-cl w-dyn-items">
                                        {imageData.map((imageItem) => (
                                            <div key={imageItem.id} role="listitem" className="w-dyn-item">
                                                <div
                                                    id="w-node-_5e74b06d-9fc5-d902-ae2e-42b11ea55572-ecc25f2b"
                                                    className="int-card-div cc-v-stretch shadow-sm h-full border border-gray-300"
                                                >
                                                    <div className="logo-frame">
                                                        {imageItem.Image?.url && (
                                                            <Image
                                                                src={imageItem?.Image?.url ?? ""}
                                                                loading="lazy"
                                                                alt={imageItem?.ImageText ?? ""}
                                                                className="int-logo "
                                                                width={80}
                                                                height={80}
                                                            />
                                                        )}
                                                    </div>

                                                    <div className="md:mt-10 center-align gap">
                                                        <h2
                                                            id="w-node-_8d5e95e9-bf46-82e8-2903-ee957cef1df4-ecc25f2b"
                                                            className="h4"
                                                        >
                                                            {imageItem?.ImageText}
                                                        </h2>
                                                        <div className="w-layout-grid hp-wrap gap-0-5 text-center mb-text-left">
                                                            <div
                                                                id="w-node-d2bd237b-d8c8-66c0-9a19-2595d38c3906-ecc25f2b"
                                                                className="smallest-para text-lightslategrey"
                                                            >
                                                                {imageItem?.ImageTitle}
                                                            </div>
                                                            <div
                                                                id="w-node-_609dac25-c49c-ee59-68a8-47ec7b1a99b6-ecc25f2b"
                                                                className="w-layout-grid hp-wrap"
                                                            >
                                                                <div
                                                                    id="w-node-ad279624-4141-b9d0-bb03-00ba16a14c50-ecc25f2b"
                                                                    className="smallest-para text-lightslategrey w-dyn-bind-empty"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-embed">
                                                    <input
                                                        type="hidden"
                                                        className="jetboost-list-item"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div>
                                        <div className="empty-state w-dyn-empty">
                                            <div className="text-2xl font-semibold text-center pb-2">Connect any app to Stitchflow</div>
                                            <p>Use our universal connectors to bring in data from any tool, even if it&lsquo;s not listed here. Get started in minutes with CSV or Google Sheets.</p>
                                        </div>
                                        <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full md:max-w-[580px] mx-auto">
                                            <div role="listitem" className="w-full">
                                                <div
                                                    id="w-node-_5e74b06d-9fc5-d902-ae2e-42b11ea55572-ecc25f2b"
                                                    className="int-card-div cc-v-stretch shadow-sm h-full border border-gray-300"
                                                >
                                                    <div className="logo-frame">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16" fill="none">
                                                            <path d="M1 4.2C1 3.0799 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.0799 1 4.2 1H11.8C12.9201 1 13.4802 1 13.908 1.21799C14.2843 1.40973 14.5903 1.71569 14.782 2.09202C15 2.51984 15 3.0799 15 4.2V11.8C15 12.9201 15 13.4802 14.782 13.908C14.5903 14.2843 14.2843 14.5903 13.908 14.782C13.4802 15 12.9201 15 11.8 15H4.2C3.0799 15 2.51984 15 2.09202 14.782C1.71569 14.5903 1.40973 14.2843 1.21799 13.908C1 13.4802 1 12.9201 1 11.8V4.2Z" fill="#0C9222" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5 12C4.44772 12 4 11.5523 4 11V5C4 4.44772 4.44772 4 5 4H11C11.5523 4 12 4.44772 12 5V11C12 11.5523 11.5523 12 11 12H5ZM7.5 11V8.5H5V11H7.5ZM11 8.5V11H8.5V8.5H11ZM11 7.5V5H8.5V7.5H11ZM7.5 5H5V7.5H7.5V5Z" fill="white" />
                                                        </svg>
                                                    </div>

                                                    <div className="md:mt-10 center-align gap">
                                                        <h2
                                                            id="w-node-_8d5e95e9-bf46-82e8-2903-ee957cef1df4-ecc25f2b"
                                                            className="h4"
                                                        >
                                                            CSV
                                                        </h2>
                                                        <div className="w-layout-grid hp-wrap gap-0-5 text-center mb-text-left">
                                                            <div
                                                                id="w-node-d2bd237b-d8c8-66c0-9a19-2595d38c3906-ecc25f2b"
                                                                className="smallest-para text-lightslategrey"
                                                            >
                                                                Import custom data
                                                            </div>
                                                            <div
                                                                id="w-node-_609dac25-c49c-ee59-68a8-47ec7b1a99b6-ecc25f2b"
                                                                className="w-layout-grid hp-wrap"
                                                            >
                                                                <div
                                                                    id="w-node-ad279624-4141-b9d0-bb03-00ba16a14c50-ecc25f2b"
                                                                    className="smallest-para text-lightslategrey w-dyn-bind-empty"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div role="listitem" className="w-full">
                                                <div className="w-embed">
                                                    <input
                                                        type="hidden"
                                                        className="jetboost-list-item"
                                                        defaultValue=""
                                                    />
                                                </div>
                                                <div
                                                    id="w-node-_5e74b06d-9fc5-d902-ae2e-42b11ea55572-ecc25f2b"
                                                    className="int-card-div cc-v-stretch shadow-sm h-full border border-gray-300"
                                                >
                                                    <div className="logo-frame">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 16 16" fill="none">
                                                            <path d="M1 4.2C1 3.0799 1 2.51984 1.21799 2.09202C1.40973 1.71569 1.71569 1.40973 2.09202 1.21799C2.51984 1 3.0799 1 4.2 1H11.8C12.9201 1 13.4802 1 13.908 1.21799C14.2843 1.40973 14.5903 1.71569 14.782 2.09202C15 2.51984 15 3.0799 15 4.2V11.8C15 12.9201 15 13.4802 14.782 13.908C14.5903 14.2843 14.2843 14.5903 13.908 14.782C13.4802 15 12.9201 15 11.8 15H4.2C3.0799 15 2.51984 15 2.09202 14.782C1.71569 14.5903 1.40973 14.2843 1.21799 13.908C1 13.4802 1 12.9201 1 11.8V4.2Z" fill="#34A853" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5V2H5V5H2V7H5L5 14H7L7 7H14V5H7Z" fill="white" />
                                                        </svg>
                                                    </div>

                                                    <div className="md:mt-10 center-align gap">
                                                        <h2
                                                            id="w-node-_8d5e95e9-bf46-82e8-2903-ee957cef1df4-ecc25f2b"
                                                            className="h4"
                                                        >
                                                            Google Sheets
                                                        </h2>
                                                        <div className="w-layout-grid hp-wrap gap-0-5 text-center mb-text-left">
                                                            <div
                                                                id="w-node-d2bd237b-d8c8-66c0-9a19-2595d38c3906-ecc25f2b"
                                                                className="smallest-para text-lightslategrey"
                                                            >
                                                                Import custom data
                                                            </div>
                                                            <div
                                                                id="w-node-_609dac25-c49c-ee59-68a8-47ec7b1a99b6-ecc25f2b"
                                                                className="w-layout-grid hp-wrap"
                                                            >
                                                                <div
                                                                    id="w-node-ad279624-4141-b9d0-bb03-00ba16a14c50-ecc25f2b"
                                                                    className="smallest-para text-lightslategrey w-dyn-bind-empty"
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="w-embed">
                                                    <input
                                                        type="hidden"
                                                        className="jetboost-list-item"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div
                                id="w-node-_35dce718-cf7c-0684-a09c-e4336797415c-ecc25f2b"
                                className="pagination-wrapper hide"
                            >
                                <a href="#" className="pegitation-lb jetboost-pagination-prev-qo4d w-button">
                                    Previous
                                </a>
                                <a href="#" className="pegitation-lb jetboost-pagination-next-qo4d w-button">
                                    Next
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-contain hide">
                <div className="content-wrapper">
                    <div className="tags-grid">
                        <div id="w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10a3-ecc25f2b" className="tags-wrapper">
                            <a
                                href="#"
                                className="all-integration-btn jetboost-filter-none-2bmw cc-active-style jetboost-inactive-show-2bmw w-inline-block"
                            >
                                <div fs-toc-element="link">All</div>
                            </a>
                            <a
                                href="#"
                                className="all-integration-btn jetboost-filter-none-2bmw jetboost-active-show-2bmw w-inline-block"
                            >
                                <div fs-toc-element="link">All</div>
                            </a>
                            <div className="collection-list-wrapper jetboost-filter-2bmw w-dyn-list">
                                <div role="list" className="int-category-cl w-dyn-items">
                                    <div role="listitem" className="filter-ci w-dyn-item">
                                        <a
                                            href="#"
                                            className="fs-toc_link int-tags jetboost-filter-active cc-no-break w-inline-block"
                                        >
                                            <div fs-toc-element="link" className="w-dyn-bind-empty" />
                                        </a>
                                        <div className="w-embed">
                                            <input type="hidden" className="jetboost-list-item" defaultValue="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-dyn-empty">
                                    <div>No items found.</div>
                                </div>
                            </div>
                        </div>
                        <div
                            id="int-search"
                            className="int-search-fb jetboost-filter-none-2bmw w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10b3-ecc25f2b w-form"
                        >
                            <form
                                id="wf-form-Search-form"
                                name="wf-form-Search-form"
                                data-name="Search form"
                                method="get"
                                data-wf-page-id="65df97133369ceedecc25f2b"
                                data-wf-element-id="b91da641-a7d3-b2a9-70f4-cd12f77e10b4"
                            >
                                <input
                                    className="int-search-input jetboost-list-search-input-w81q w-input"
                                    maxLength={256}
                                    name="Search-2"
                                    data-name="Search 2"
                                    placeholder="Search for a connector"
                                    type="text"
                                    id="Search-2"
                                    required
                                />
                                <input
                                    type="submit"
                                    data-wait="Please wait..."
                                    className="hide w-button"
                                    defaultValue="Submit"
                                />
                            </form>
                            <div className="w-form-done">
                                <div>Thank you! Your submission has been received!</div>
                            </div>
                            <div className="w-form-fail">
                                <div>Oops! Something went wrong while submitting the form.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content-wrapper mt-3">
                    <div className="w-layout-grid hp-wrap gap-1-25">
                        <div
                            id="w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10bf-ecc25f2b"
                            className="w-layout-grid hp-wrap gap-4-37"
                        >
                            <div
                                id="w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10c0-ecc25f2b"
                                className="jetboost-list-wrapper-w81q jetboost-list-wrapper-2bmw w-dyn-list"
                            >
                                <div id="connectors" role="list" className="integration-cl w-dyn-items">
                                    {imageList?.map((imageItem) => (
                                        <div key={imageItem.id} role="listitem" className="w-dyn-item">
                                            <div
                                                id="w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10c3-ecc25f2b"
                                                className="int-card-div"
                                            >
                                                <div className="logo-frame">
                                                    {imageItem?.Image?.url && (
                                                        <Image
                                                            src={imageItem.Image.url}
                                                            loading="lazy"
                                                            alt={imageItem.ImageText ?? ""}
                                                            className="int-logo "
                                                            width={80}
                                                            height={80}
                                                        />
                                                    )}
                                                </div>
                                                <div className="w-layout-grid hp-wrap gap-0-5 text-center mb-text-left">
                                                    <h2
                                                        id="w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10c7-ecc25f2b"
                                                        className="h4 w-dyn-bind-empty"
                                                    >
                                                        {imageItem.ImageText}
                                                    </h2>
                                                    <div
                                                        id="w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10c8-ecc25f2b"
                                                        className="smallest-para text-lightslategrey"
                                                    >
                                                        {imageItem.ImageTitle}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-embed">
                                                <input
                                                    type="hidden"
                                                    className="jetboost-list-item"
                                                    defaultValue=""
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="w-dyn-empty">
                                    <div>No items found.</div>
                                </div>
                            </div>
                            <div
                                id="w-node-b91da641-a7d3-b2a9-70f4-cd12f77e10ce-ecc25f2b"
                                className="pagination-wrapper hide"
                            >
                                <a href="#" className="pegitation-lb jetboost-pagination-prev-qo4d w-button">
                                    Previous
                                </a>
                                <a href="#" className="pegitation-lb jetboost-pagination-next-qo4d w-button">
                                    Next
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectorFilterSection;
