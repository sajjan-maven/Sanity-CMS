import React from "react";
import ConnectorGridSection from "./ConnectorGridSection";
import ConnectorFilterSection from "./ConnectorFilterSection";
import ConnectorHeroSection from "./ConnectorHeroSection";

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

const ConnectorPageSec: React.FC<ConnectorPageSecProps> = (props) => {
    return (
        <div className="overflow-hidden">
            <ConnectorHeroSection title={props.data.HeroSection} />
            <div className="bg-[#f8f5f3]">
                <ConnectorFilterSection
                    catogeoryList={props.content.CategorySec}
                    imageList={props.image.ConnectorImageSec}
                />
                <ConnectorGridSection />
            </div>
        </div>
    );
};

export default ConnectorPageSec;
