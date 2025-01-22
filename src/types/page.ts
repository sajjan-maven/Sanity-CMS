import { SeoType } from "./seo";
import { BlockType } from "./page-builder/block";

export type PageType = {
  _type: string;
  title: string;
  slug: string;
  pageBuilder: BlockType[];
  seo: SeoType;
}