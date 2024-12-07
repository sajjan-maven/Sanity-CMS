import type { PortableTextBlock } from '@portabletext/types';

export type PostType = {
  _id: string;
  title: string;
  slug: string;
  category: PostCategoryType;
  content: PortableTextBlock;
  excerpt: string;
  tableOfContents: any,
  image: {
    asset: {
      url: string;
    };
    cornerRadius: 'rounded' | 'straight';
    alt: string;
  };
  seo: {
    metaTitle: string
    metaDescription: string
    metaKeywords: string
  }
}

export type PostCategoryType = {
  _id: string;
  title: string;
  slug: string;
}