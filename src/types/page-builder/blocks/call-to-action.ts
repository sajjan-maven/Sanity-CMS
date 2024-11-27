import type { PortableTextBlock } from '@portabletext/types';

export type CallToActionBlockType = {
  _id: string;
  _key: string;
  _type: 'callToActionBlock';
  heading: string;
  content: PortableTextBlock;
  paddingTop: string;
  paddingBottom: string;
}