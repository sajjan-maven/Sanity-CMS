import type { PortableTextBlock } from '@portabletext/types';

export type HeaderBlockType = {
  _id: string;
  _key: string;
  _type: 'headerBlock';
  heading: string;
  content: PortableTextBlock;
  bottomCornerRadius: 'rounded' | 'straight';
}