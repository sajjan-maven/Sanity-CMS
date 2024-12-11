import type { PortableTextBlock } from '@portabletext/types';

export type PostType = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  category: PostCategoryType;
  author: PostAuthorType;
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

export type PostAuthorType = {
  _id: string;
  name: string;
  username: string;
  bio: string;
  avatar: {
    asset: {
      url: string;
    };
  };
}