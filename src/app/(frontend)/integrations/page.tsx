import React, { Suspense } from "react";
import ConnectorPageSec from "./components/ConnectorPageSec";
import { Metadata } from "next";
import { getIntegrationData } from "@/actions/get-integration-data";

interface BannerImage {
    url: string;
}
interface BannerImage2 {
    url: string;
}
interface HeroSection {
    HeroHeading: string;
    Description: string;
    BannerImage?: BannerImage;
    BannerImage2?: BannerImage2;
    ButtonText?: string;
    ButtonLink?: string;
    ButtonVariant?: string;
}

interface ResponseData {
    HeroSection: HeroSection;
}

interface Category {
    id: string;
    CategoryList: string;
    name?: string;
    description?: string;
}

export interface ConnectorImage {
    id: string;
    ImageText?: string;
    ImageTitle?: string;
    CategoryType?: string;
    Image?: BannerImage;
}

interface ContentResponse {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    HeroSection: {
        HeroHeading: string;
        Description: string;
    };
    CategorySec: Category[];
    ConnectorImageSec: ConnectorImage[];
}

interface ImageResponse {
    id: number;
    documentId: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    ConnectorImageSec: ConnectorImage[];
}

interface ConnectorPageSecProps {
    data: ResponseData;
    content: ContentResponse;
    image: ImageResponse;
}

async function getMetadata(): Promise<Metadata> {
    try {
        const integrationData = await getIntegrationData();
        const pageData = integrationData.page;

        const title = pageData?.seo?.title || pageData?.title || "Integration | Stitchflow, Seamless SaaS Management";
        const description = pageData?.seo?.description || "Connect any app—Stitchflow integrates with APIs, CSVs, and more to manage every app in your SaaS stack, including disconnected apps.";

        return {
            title,
            description,
            openGraph: {
                title,
                description,
                type: "website",
                url: "https://www.stitchflow.com/integrations",
                images: pageData?.seo?.image?.asset?.url ? [{ url: pageData.seo.image.asset.url }] : [],
            },
            twitter: {
                title,
                description,
                card: "summary_large_image",
                images: pageData?.seo?.image?.asset?.url ? [pageData.seo.image.asset.url] : [],
            },
            verification: {
                google: "",
            },
            alternates: {
                canonical: "https://www.stitchflow.com/integrations",
            },
        };
    } catch (error) {
        console.error("Error fetching metadata:", error);
        return {
            title: "Integration | Stitchflow, Seamless SaaS Management",
            description:
                "Connect any app—Stitchflow integrates with APIs, CSVs, and more to manage every app in your SaaS stack, including disconnected apps.",
            openGraph: { type: "website" },
            twitter: { card: "summary_large_image" },
            verification: { google: "" },
        };
    }
}

export async function generateMetadata(): Promise<Metadata> {
    return await getMetadata();
}

export default async function IntegrationPage() {
    try {
        const integrationData = await getIntegrationData();

        // Transform Sanity data to match existing component structure
        const pageProps: ConnectorPageSecProps = {
            data: {
                HeroSection: {
                    HeroHeading: integrationData.page?.title || "",
                    Description: integrationData.page?.description || "",
                    ButtonText: integrationData.page?.headerActionButton?.buttonText || "",
                    ButtonLink: integrationData.page?.headerActionButton?.buttonUrl || "",
                    ButtonVariant: integrationData.page?.headerActionButton?.buttonVariant || "",
                },
            },
            content: {
                id: 1,
                documentId: integrationData.page?._id || "integrations",
                createdAt: "",
                updatedAt: "",
                publishedAt: "",
                HeroSection: {
                    HeroHeading: integrationData.page?.title || "",
                    Description: integrationData.page?.description || "",
                },
                CategorySec: integrationData.categories.map((category: any) => ({
                    id: category._id,
                    CategoryList: category.title,
                    name: category.title,
                    description: "",
                })),
                ConnectorImageSec: integrationData.applications.map((app: any) => ({
                    id: app._id,
                    ImageText: app.applicationDesc || "",
                    ImageTitle: app.applicationName,
                    CategoryType: app.category?.title || "",
                    Image: app.image ? { url: app.image.asset.url } : undefined,
                })),
            },
            image: {
                id: 1,
                documentId: integrationData.page?._id || "integrations",
                createdAt: "",
                updatedAt: "",
                publishedAt: "",
                ConnectorImageSec: integrationData.applications.map((app: any) => ({
                    id: app._id,
                    ImageText: app.applicationDesc || "",
                    ImageTitle: app.applicationName,
                    CategoryType: app.category?.title || "",
                    Image: app.image ? { url: app.image.asset.url } : undefined,
                })),
            },
        };

        return (
            <Suspense fallback={<div>Loading...</div>}>
                <div>
                    <ConnectorPageSec {...pageProps} />
                </div>
            </Suspense>
        );
    } catch (error) {
        console.error("Error fetching data:", error);

        const fallbackData: ConnectorPageSecProps = {
            data: {
                HeroSection: {
                    HeroHeading: "",
                    Description: "",
                    BannerImage: undefined,
                    BannerImage2: undefined,
                    ButtonText: "",
                    ButtonLink: "",
                    ButtonVariant: "",
                },
            },
            content: {
                id: 0,
                documentId: "",
                createdAt: "",
                updatedAt: "",
                publishedAt: "",
                HeroSection: {
                    HeroHeading: "",
                    Description: "",
                },
                CategorySec: [],
                ConnectorImageSec: [],
            },
            image: {
                id: 0,
                documentId: "",
                createdAt: "",
                updatedAt: "",
                publishedAt: "",
                ConnectorImageSec: [],
            },
        };

        return (
            <div>
                <ConnectorPageSec {...fallbackData} />
            </div>
        );
    }
}
