import { ButtonType } from "@/types/button";
import type { PortableTextBlock } from '@portabletext/types';

export type FeatureCardsBlockType = {
  _id: string;
  _key: string;
  _type: 'featureCardsBlock';
  heading: string;
  buttons: ButtonType[];
  features: FeatureItem[];
  showCallToAction: boolean;
  callToActionHeading: string;
  callToActionContent: PortableTextBlock;
  callToActionButtons: ButtonType[];
  anchorId?: string;
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