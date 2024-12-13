import type { PortableTextBlock } from '@portabletext/types';
import { AuthorType } from './author';

export type PostType = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  category: PostCategoryType;
  author: AuthorType;
  content: PortableTextBlock;
  excerpt: string;
  tableOfContents: any,
  image: {
    asset: {
      url: string;
    };
    alt: string;
    caption: string;
    cornerRadius: 'rounded' | 'straight';
  };
  relatedPosts: PostType[];
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

