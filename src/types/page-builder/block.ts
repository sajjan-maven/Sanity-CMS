import { HeaderBlockType } from "./blocks/header";
import { HeroBlockType } from "./blocks/hero";
import { LogoBlockType } from "./blocks/logos";
import { TestimonialBlockType } from "./blocks/testimonials";

export type BlockType = 
  HeroBlockType |
  HeaderBlockType |
  LogoBlockType |
  TestimonialBlockType;