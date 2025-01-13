import { ButtonType } from '@/types/button';
import type { PortableTextBlock } from '@portabletext/types';

export type CallToActionBlockType = {
  _id: string;
  _key: string;
  _type: 'callToActionBlock';
  heading: string;
  content: PortableTextBlock;
  buttons: ButtonType[];
  anchorId?: string;
  paddingTop: string;
  paddingBottom: string;
}