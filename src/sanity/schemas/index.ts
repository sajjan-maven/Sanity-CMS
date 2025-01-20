import generalSettings from "./singletons/general-settings";
import navigationSettings from "./singletons/navigation-settings";

import page from "./documents/page";

import { pageBuilder } from "./page-builder/page-builder";
import headerBlock from "./page-builder/blocks/header-block";
import heroBlock from "./page-builder/blocks/hero-block";
import logoBlock from "./page-builder/blocks/logo-block";
import testimonialBlock from "./page-builder/blocks/testimonial-block";
import freeformBlock from "./page-builder/blocks/freeform-block";
import headingObject from './objects/heading';
import richTextObject from './objects/rich-text';
import spacerObject from './objects/spacer';
import videoObject from './objects/video';

import buttonObject from './objects/button';
import singleImageObject from "./objects/single-image";
import featuresMinimalBlock from "./page-builder/blocks/features-minimal-block";
import featureCardsBlock from "./page-builder/blocks/feature-cards-block";
import callToActionBlock from "./page-builder/blocks/call-to-action-block";
import post from "./documents/post";
import postCategory from "./documents/post-category";
import author from "./documents/author";
import testimonial from "./documents/testimonial";
import blogSettings from "./singletons/blog-settings";
import callToActionObject from "./objects/call-to-action";
import faq from "./documents/faq";
import service from "./documents/service";
import servicesPage from "./singletons/pages/services-page";
import blogPage from "./singletons/pages/blog-page";
import servicesBlock from "./page-builder/blocks/services-block";
import portableTextBlock from "./page-builder/blocks/portable-text-block";
import project from "./documents/project";
import projectCategory from "./documents/project-category";
import projectsPage from "./singletons/pages/projects-page";
import formBlock from "./page-builder/blocks/form-block";
import form from "./documents/form";
import mediaBlock from "./page-builder/blocks/media-block";

const coreSchema = [
  page,
  post,
  author,
  form,
  postCategory,
  generalSettings,
  navigationSettings,
  blogSettings,
  blogPage,
  testimonial,
  faq,
  service,
  servicesPage,
  projectsPage,
  project,
  projectCategory
]

const pageBuilderSchema = [
  pageBuilder,
  heroBlock,
  headerBlock,
  featureCardsBlock,
  featuresMinimalBlock,
  freeformBlock,
  portableTextBlock,
  callToActionBlock,
  logoBlock,
  mediaBlock,
  testimonialBlock,
  servicesBlock,
  formBlock
]

const objectSchema = [
  headingObject,
  richTextObject,
  buttonObject,
  singleImageObject,
  spacerObject,
  callToActionObject,
  videoObject
]

export const schemaTypes = [
  ...coreSchema,
  ...pageBuilderSchema,
  ...objectSchema
]