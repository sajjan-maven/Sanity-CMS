import { ButtonType } from '@/types/button';
import type { PortableTextBlock } from '@portabletext/types';

export type HeroBlockType = {
  _id: string;
  _key: string;
  _type: 'heroBlock';
  heading: string;
  content: PortableTextBlock;
  mediaType: 'image' | 'none';
  buttons: ButtonType[];
  image: {
    asset: {
      url: string;
    };
    height: 'full' | 'short';
    alt: string;
  };
  dialogType: 'none' | 'video';
  videoUrl?: string;
  overlayType: 'none' | 'dark';
  bottomCornerRadius: 'rounded' | 'straight';
  anchorId?: string;
}