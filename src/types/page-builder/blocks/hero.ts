import type { PortableTextBlock } from '@portabletext/types';

export type HeroBlockType = {
  _id: string;
  _key: string;
  _type: 'heroBlock';
  heading: string;
  content: PortableTextBlock;
  mediaType: 'image' | 'none';
  image: {
    asset: {
      url: string;
    };
    cornerRadius: 'rounded' | 'straight';
    alt: string;
  };
}