import { BlockType } from "./page-builder/block";
import { SeoType } from "./seo";

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
  };
  pageBuilder: BlockType[];
  seo: SeoType;
}