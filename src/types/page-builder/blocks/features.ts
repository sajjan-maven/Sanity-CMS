import { PageType } from "@/types/page";

export type FeatureBlockType = {
  _id: string;
  _key: string;
  _type: 'featureBlock';
  heading: string;
  features: FeatureItem[]
}

export type FeatureItem = {
  _key: string;
  title: string;
  description: string;
  icon: {
    asset: {
      url: string;
    }
  };
  pageReference: PageType;
}