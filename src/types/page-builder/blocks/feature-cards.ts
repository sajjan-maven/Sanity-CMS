import { ButtonType } from "@/types/button";

export type FeatureCardsBlockType = {
  _id: string;
  _key: string;
  _type: 'featureCardsBlock';
  heading: string;
  buttons: ButtonType[];
  features: FeatureItem[];
  paddingTop: string;
  paddingBottom: string;
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
  button: ButtonType;
}