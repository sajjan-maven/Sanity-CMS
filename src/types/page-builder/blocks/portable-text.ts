import type { PortableTextBlock } from '@portabletext/types';

export type PortableTextBlockType = {
  _id: string;
  _key: string;
  _type: 'portableTextBlock';
  title: string;
  content: PortableTextBlock;
  alignment?: 'left' | 'center' | 'right';
  paddingTop: string;
  paddingBottom: string;
}