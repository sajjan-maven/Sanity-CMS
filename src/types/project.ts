import { BlockType } from "./page-builder/block";
import { SeoType } from "./seo";

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
  };
  pageBuilder: BlockType[];
  seo: SeoType;
}

export type ProjectCategoryType = {
  _id: string;
  title: string;
  slug: string;
}