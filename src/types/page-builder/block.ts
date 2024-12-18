import { FreeformBlockType } from "./blocks/freeform";
import { HeaderBlockType } from "./blocks/header";
import { HeroBlockType } from "./blocks/hero";
import { LogoBlockType } from "./blocks/logos";
import { TestimonialBlockType } from "./blocks/testimonials";
import { FeaturesMinimalBlockType } from "./blocks/features-minimal";
import { FeatureCardsBlockType } from "./blocks/feature-cards";
import { CallToActionBlockType } from "./blocks/call-to-action";
import { ServicesBlockType } from "./blocks/services";

export type BlockType = 
  HeroBlockType |
  HeaderBlockType |
  FreeformBlockType |
  FeatureCardsBlockType |
  FeaturesMinimalBlockType |
  LogoBlockType |
  CallToActionBlockType |
  TestimonialBlockType |
  ServicesBlockType;