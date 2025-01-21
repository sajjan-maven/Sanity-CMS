import { AuthorType } from './author';
import { TableOfContentsType } from './misc';
import { BlogSettingsType } from './settings';
import type { PortableTextBlock } from '@portabletext/types';

export type PostType = {
  _id: string;
  _createdAt: string;
  title: string;
  slug: string;
  category: PostCategoryType;
  author: AuthorType;
  content: PortableTextBlock;
  excerpt: string;
  tableOfContents: TableOfContentsType,
  image: {
    asset: {
      url: string;
    };
    alt: string;
    caption: string;
  };
  relatedPosts: PostType[];
  settings: BlogSettingsType;
  categories: PostCategoryType[];
  seo: {
    metaTitle: string
    metaDescription: string
    metaKeywords: string
  }
}

export type PostCategoryType = {
  _id: string;
  title: string;
  categoryColor: {
    value: string;
  };
  slug: string;
}