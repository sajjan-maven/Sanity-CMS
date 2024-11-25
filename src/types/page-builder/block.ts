import { FreeformBlockType } from "./blocks/freeform";
import { FeatureBlockType } from "./blocks/features";
import { HeaderBlockType } from "./blocks/header";
import { HeroBlockType } from "./blocks/hero";
import { LogoBlockType } from "./blocks/logos";
import { TestimonialBlockType } from "./blocks/testimonials";
import { FeaturesMinimalBlockType } from "./blocks/features-minimal";

export type BlockType = 
  HeroBlockType |
  HeaderBlockType |
  FreeformBlockType |
  FeatureBlockType |
  FeaturesMinimalBlockType |
  LogoBlockType |
  TestimonialBlockType;