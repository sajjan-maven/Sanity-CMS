import { SchemaTypeDefinition } from "sanity";

import generalSettings from "./singletons/general-settings";
import navigationSettings from "./singletons/navigation-settings";
import blogSettings from "./singletons/blog-settings";
import marketingSettings from "./singletons/marketing-settings";
import redirect from "./documents/redirect";
import page from "./documents/page";
import post from "./documents/post";
import postCategory from "./documents/post-category";
import author from "./documents/author";
import testimonial from "./documents/testimonial";
import service from "./documents/service";
import form from "./documents/form";
import project from "./documents/project";
import projectCategory from "./documents/project-category";
import servicesPage from "./singletons/pages/services-page";
import blogPage from "./singletons/pages/blog-page";
import projectsPage from "./singletons/pages/projects-page";
import navbar from "./singletons/navbar";
import footer from "./singletons/footer";

const coreSchema = [
  generalSettings,
  navigationSettings,
  marketingSettings,
  blogSettings,
  redirect,
  page,
  post,
  postCategory,
  author,
  testimonial,
  projectCategory,
  project,
  form,
  blogPage,
  service,
  servicesPage,
  projectsPage,
  navbar,
  footer
];

import { pageBuilder } from "./page-builder/page-builder";
import headerBlock from "./page-builder/blocks/header-block";
import heroBlock from "./page-builder/blocks/hero-block";
import logoBlock from "./page-builder/blocks/logo-block";
import featuresMinimalBlock from "./page-builder/blocks/features-minimal-block";
import featureCardsBlock from "./page-builder/blocks/feature-cards-block";
import callToActionBlock from "./page-builder/blocks/call-to-action-block";
import testimonialBlock from "./page-builder/blocks/testimonial-block";
import portableTextBlock from "./page-builder/blocks/portable-text-block";
import freeformBlock from "./page-builder/blocks/freeform-block";
import servicesBlock from "./page-builder/blocks/services-block";
import formBlock from "./page-builder/blocks/form-block";
import mediaBlock from "./page-builder/blocks/media-block";
import heroClickthroughBlock from "./page-builder/blocks/hero-clickthrough";
import simpleCardBlock from "./page-builder/blocks/simple-card-block";
import featuredTestimonialBlock from "./page-builder/blocks/featured-testimonial-block";
import comparisonTableBlock from "./page-builder/blocks/comparison-table-block";
import testimonialCarouselBlock from "./page-builder/blocks/testimonial-carousel-block";
import heroImageBlock from "./page-builder/blocks/hero-image-block";
import stepProcessBlock from "./page-builder/blocks/step-process-block";
import clickthroughTopicBlock from "./page-builder/blocks/clickthrough-topic-block";
import stepRightImageBlock from "./page-builder/blocks/step-right-image-block";
import iconListBlock from "./page-builder/blocks/icon-list-block";
import iconListTwoColumnBlock from "./page-builder/blocks/icon-list-two-column-block";
import iconHighlightBlock from "./page-builder/blocks/icon-highlight-block";
import pricingBlock from "./page-builder/blocks/pricing-block";

//ABCD 6 Add component name here
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
  formBlock,

  heroClickthroughBlock,
  simpleCardBlock,
  featuredTestimonialBlock,
  comparisonTableBlock,
  testimonialCarouselBlock,
  heroImageBlock,
  stepProcessBlock,
  clickthroughTopicBlock,
  stepRightImageBlock,
  iconListBlock,
  iconListTwoColumnBlock,
  iconHighlightBlock,
  pricingBlock
];

import seoObject from './objects/seo';
import headingObject from './objects/heading';
import richTextObject from './objects/rich-text';
import spacerObject from './objects/spacer';
import videoObject from './objects/video';
import buttonObject from './objects/button';
import singleImageObject from "./objects/single-image";
import callToActionObject from "./objects/call-to-action";
import ctaButton from "./objects/cta-button";
import navDropdownItem from "./objects/nav-dropdownItem";
import navMenuItem from "./objects/nav-menuItem";
import announcementBanner from "./objects/announcementBanner";
import logo from "./objects/logo";
import footerCTA from "./objects/footerCTA";
import footerLinks from "./objects/footerLinks";
import footerCoLinks from "./objects/footerCoLinks";

const objectSchema = [
  seoObject,
  headingObject,
  richTextObject,
  buttonObject,
  singleImageObject,
  spacerObject,
  callToActionObject,
  videoObject,
  ctaButton,
  navDropdownItem,
  navMenuItem,
  announcementBanner,
  logo,
  footerCTA,
  footerLinks,
  footerCoLinks
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...coreSchema,
    ...pageBuilderSchema,
    ...objectSchema
  ],
};