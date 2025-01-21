import { ButtonType } from "@/types/button";
import type { PortableTextBlock } from '@portabletext/types';

export type FeaturesMinimalBlockType = {
  _id: string;
  _key: string;
  _type: 'featuresMinimalBlock';
  heading: string;
  content: PortableTextBlock;
  buttons: ButtonType[];
  features: string[];
  enableBorderTop: boolean;
  cornerRadiusTop: 'rounded' | 'straight';
  enableBorderBottom: boolean;
  cornerRadiusBottom: 'rounded' | 'straight';
  anchorId?: string;
  paddingTop: string;
  paddingBottom: string;
}