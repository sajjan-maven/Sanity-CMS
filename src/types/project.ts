import { BlockType } from "./page-builder/block";

export type ProjectType = {
  _id: string;
  title: string;
  slug: string;
  category: ProjectCategoryType;
  excerpt: string;
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

export type ProjectCategoryType = {
  _id: string;
  title: string;
  slug: string;
}