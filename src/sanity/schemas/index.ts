import generalSettings from "./singletons/general-settings";
import navigationSettings from "./singletons/navigation-settings";

import page from "./documents/page";

import { pageBuilder } from "./page-builder/page-builder";
import headerBlock from "./page-builder/blocks/header-block";
import heroBlock from "./page-builder/blocks/hero-block";
import logoBlock from "./page-builder/blocks/logo-block";
import testimonialBlock from "./page-builder/blocks/testimonial-block";
import featureBlock from "./page-builder/blocks/feature-block";

const coreSchema = [
  page,
  generalSettings,
  navigationSettings,
]

const pageBuilderSchema = [
  pageBuilder,
  heroBlock,
  headerBlock,
  featureBlock,
  logoBlock,
  testimonialBlock
]

export const schemaTypes = [
  ...coreSchema,
  ...pageBuilderSchema
]