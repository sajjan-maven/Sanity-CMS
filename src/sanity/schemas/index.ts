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
import announcementbarSettings from "./singletons/announcementbar-settings";
import navbarFooterSettings from "./singletons/navbar-footer-settings";
import homePage from "./singletons/pages/home-page";
import termsPage from "./singletons/pages/terms-page";
import privacyPage from "./singletons/pages/privacy-page";

const coreSchema = [
  generalSettings,
  announcementbarSettings,
  navbarFooterSettings,
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
  footer,
  homePage,
  termsPage,
  privacyPage
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
import heroSectionBlock from "./page-builder/blocks/hero-section-block";
import stepProcessBlock from "./page-builder/blocks/step-process-block";
import clickthroughTopicBlock from "./page-builder/blocks/clickthrough-topic-block";
import stepRightImageBlock from "./page-builder/blocks/step-right-image-block";
import iconListBlock from "./page-builder/blocks/icon-list-block";
import iconListTwoColumnBlock from "./page-builder/blocks/icon-list-two-column-block";
import iconHighlightBlock from "./page-builder/blocks/icon-highlight-block";
import pricingBlock from "./page-builder/blocks/pricing-block";
import caseStudyGridBlock from "./page-builder/blocks/case-study-grid-block";
import itToolsCardBlock from "./page-builder/blocks/it-tools-card-block";
import socialReviewBlock from "./page-builder/blocks/social-review-block";
import accordionAndImageBlock from "./page-builder/blocks/accordion-and-image-block";
import frequentlyAskedQuestionBlock from "./page-builder/blocks/frequently-asked-question-block";
import joinOurNewsletterBlock from "./page-builder/blocks/join-our-newsletter-block";
import avatarWithDetails from "./page-builder/blocks/avatar-with-details-block";
import iconBlock from "./page-builder/blocks/icon-block";
import pngImageBlock from "./page-builder/blocks/png-image-block";

//ABCD 6 Add component name here for recognising schema as page builder block
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
  heroSectionBlock,
  stepProcessBlock,
  clickthroughTopicBlock,
  stepRightImageBlock,
  iconListBlock,
  iconListTwoColumnBlock,
  iconHighlightBlock,
  pricingBlock,
  caseStudyGridBlock,
  itToolsCardBlock,
  socialReviewBlock,
  accordionAndImageBlock,
  frequentlyAskedQuestionBlock,
  joinOurNewsletterBlock,
  avatarWithDetails,
  iconBlock,
  pngImageBlock
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
import table from "./objects/table";

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
  footerCoLinks,
  table
];

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    ...coreSchema,
    ...pageBuilderSchema,
    ...objectSchema
  ],
};