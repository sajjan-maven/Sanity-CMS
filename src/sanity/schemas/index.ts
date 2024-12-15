import generalSettings from "./singletons/general-settings";
import navigationSettings from "./singletons/navigation-settings";

import page from "./documents/page";

import { pageBuilder } from "./page-builder/page-builder";
import headerBlock from "./page-builder/blocks/header-block";
import heroBlock from "./page-builder/blocks/hero-block";
import logoBlock from "./page-builder/blocks/logo-block";
import testimonialBlock from "./page-builder/blocks/testimonial-block";
import featureBlock from "./page-builder/blocks/feature-block";
import freeformBlock from "./page-builder/blocks/freeform-block";
import headingObject from './objects/heading';
import richTextObject from './objects/rich-text';
import spacerObject from './objects/spacer';

import buttonObject from './objects/button';
import singleImageObject from "./objects/single-image";
import featuresMinimalBlock from "./page-builder/blocks/features-minimal-block";
import featureCardsBlock from "./page-builder/blocks/feature-cards-block";
import callToActionBlock from "./page-builder/blocks/call-to-action-block";
import post from "./documents/post";
import postCategory from "./documents/post-category";
import blogArchiveBlock from "./page-builder/blocks/blog-archive-block";
import blogArchivePage from "./singletons/pages/blog-archive-page";
import author from "./documents/author";
import testimonial from "./documents/testimonial";
import blogSettings from "./singletons/blog-settings";
import callToActionObject from "./objects/call-to-action";
import faq from "./documents/faq";

const coreSchema = [
  page,
  post,
  author,
  postCategory,
  generalSettings,
  navigationSettings,
  blogSettings,
  blogArchivePage,
  testimonial,
  faq
]

const pageBuilderSchema = [
  pageBuilder,
  heroBlock,
  headerBlock,
  featureBlock,
  featureCardsBlock,
  featuresMinimalBlock,
  freeformBlock,
  callToActionBlock,
  logoBlock,
  testimonialBlock,
  blogArchiveBlock
]

const objectSchema = [
  headingObject,
  richTextObject,
  buttonObject,
  singleImageObject,
  spacerObject,
  callToActionObject
]

export const schemaTypes = [
  ...coreSchema,
  ...pageBuilderSchema,
  ...objectSchema
]