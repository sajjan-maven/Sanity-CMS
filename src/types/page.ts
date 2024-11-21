import { BlockType } from "./page-builder/block";

export type PageType = {
  title: string;
  slug: string;
  pageBuilder: BlockType[];
  seo: {
    metaTitle: string
    metaDescription: string
    metaKeywords: string
  }
}