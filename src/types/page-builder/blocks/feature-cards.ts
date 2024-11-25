import { PageType } from "@/types/page";

export type FeatureCardsBlockType = {
  _id: string;
  _key: string;
  _type: 'featureCardsBlock';
  heading: string;
  features: FeatureItem[]
}

export type FeatureItem = {
  _key: string;
  title: string;
  description: string;
  items: string[];
  image: {
    asset: {
      url: string;
    }
  };
  pageReference: PageType;
}