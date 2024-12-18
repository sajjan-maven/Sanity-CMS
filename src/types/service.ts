import { BlockType } from "./page-builder/block";

export type ServiceType = {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;
  image: {
    asset: {
      url: string;
    };
    alt: string;
    caption: string;
    cornerRadius: 'rounded' | 'straight';
  };
  pageBuilder: BlockType[];
  seo: {
    metaTitle: string
    metaDescription: string
    metaKeywords: string
  }
}