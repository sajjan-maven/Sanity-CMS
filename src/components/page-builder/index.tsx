"use client"
import dynamic from "next/dynamic";
import { ComponentType } from "react";
import { PageBuilderType } from "@/types";
import { createDataAttribute } from "next-sanity";
import { PageBySlugQueryResult } from "../../../sanity.types";
import { dataset, projectId, studioUrl } from "@/sanity/lib/api";

const HeroBlock = dynamic(() => import("./blocks/hero-block"));
const HeaderBlock = dynamic(() => import("./blocks/header-block"));
const FeatureCardsBlock = dynamic(() => import("./blocks/feature-cards-block"));
const TestimonialBlock = dynamic(() => import("./blocks/testimonial-block"));
const LogoBlock = dynamic(() => import("./blocks/logo-block"));
const FreeformBlock = dynamic(() => import("./blocks/freeform-block"));
const PortableTextBlock = dynamic(() => import("./blocks/portable-text-block"));
const CallToActionBlock = dynamic(() => import("./blocks/call-to-action-block"));
const FeaturesMinimalBlock = dynamic(() => import("./blocks/features-minimal-block"));
const ServicesBlock = dynamic(() => import("./blocks/services-block"));
const FormBlock = dynamic(() => import("./blocks/form-block"));
const MediaBlock = dynamic(() => import("./blocks/media-block"));
// new UI components
const HeroClickthroughBlock = dynamic(() => import("./blocks/hero-clickthrough-block"))
const ComparisonTableBlock = dynamic(() => import("./blocks/comparison-table-block"))
const FeaturedTestimonialBlock = dynamic(() => import("./blocks/featured-testimonial-block"))
const SimpleCardBlock = dynamic(() => import("./blocks/simple-cards-block"))
const TestimonialCarouselBlock = dynamic(() => import("./blocks/testimonial-carousel-block"))
const HeroSectionBlock = dynamic(() => import("./blocks/hero-section-block"))
const StepProcessBlock = dynamic(() => import("./blocks/step-process-block"))
const ClickthroughTopicBlock = dynamic(() => import("./blocks/clickthrough-topic-block"))
const StepRightImageBlock = dynamic(() => import("./blocks/step-right-image-block"))
const IconListBlock = dynamic(() => import("./blocks/icon-list-block"))
const IconListTwoColumnBlock = dynamic(() => import("./blocks/icon-list-two-column-block"))
const IconHighlightBlock = dynamic(() => import("./blocks/icon-highlight-block"))
const PricingBlock = dynamic(() => import("./blocks/pricing-block"))
const CaseStudyGridBlock = dynamic(() => import("./blocks/case-study-grid-block"))
const ITToolsCardBlock = dynamic(() => import("./blocks/it-tools-card-block"))
const SocialReviewBlock = dynamic(() => import("./blocks/social-review-block"))
const AccordionAndImageBlock = dynamic(() => import("./blocks/accordion-and-image-block"))
const FrequentlyAskedQuestionBlock = dynamic(() => import("./blocks/frequently-asked-question-block"))
const JoinOurNewsletterBlock = dynamic(() => import("./blocks/join-our-newsletter-block"))
const AvatarWithDetails = dynamic(() => import("./blocks/avatar-with-details-block"))

type PageBlock = NonNullable<
  NonNullable<PageBySlugQueryResult>["pageBuilder"]
>[number];

export type PageBuilderProps = {
  pageBuilder: PageBlock[];
  id: string;
  type: string;
};

const PB_BLOCKS = {
  heroBlock: HeroBlock,
  headerBlock: HeaderBlock,
  featureCardsBlock: FeatureCardsBlock,
  testimonialBlock: TestimonialBlock,
  logoBlock: LogoBlock,
  freeformBlock: FreeformBlock,
  portableTextBlock: PortableTextBlock,
  callToActionBlock: CallToActionBlock,
  featuresMinimalBlock: FeaturesMinimalBlock,
  servicesBlock: ServicesBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  //ABCD 1 Create the UI component inside components > page-builder > blocks
  //ABCD 2 Add component name here to allow page builder to render component
  heroClickthroughBlock: HeroClickthroughBlock,
  simpleCardBlock: SimpleCardBlock,
  featuredTestimonialBlock: FeaturedTestimonialBlock,
  comparisonTableBlock: ComparisonTableBlock,
  testimonialCarouselBlock: TestimonialCarouselBlock,
  heroSectionBlock: HeroSectionBlock,
  stepProcessBlock: StepProcessBlock,
  clickthroughTopicBlock: ClickthroughTopicBlock,
  stepRightImageBlock: StepRightImageBlock,
  iconListBlock: IconListBlock,
  iconListTwoColumnBlock: IconListTwoColumnBlock,
  iconHighlightBlock: IconHighlightBlock,
  pricingBlock: PricingBlock,
  caseStudyGridBlock: CaseStudyGridBlock,
  itToolsCardBlock: ITToolsCardBlock,
  socialReviewBlock: SocialReviewBlock,
  accordionAndImageBlock: AccordionAndImageBlock,
  frequentlyAskedQuestionBlock: FrequentlyAskedQuestionBlock,
  joinOurNewsletterBlock: JoinOurNewsletterBlock,
  avatarWithDetails: AvatarWithDetails
} as const;

type BlockType = keyof typeof PB_BLOCKS;

export function PageBuilder({ pageBuilder, id, type }: PageBuilderProps) {
  return (
    <div
      data-sanity={createDataAttribute({
        id: id,
        type: type,
        dataset: dataset,
        baseUrl: studioUrl,
        path: "pageBuilder",
        projectId: projectId,
      }).toString()}
    >
      {pageBuilder.map((block) => {
        // Type guard to ensure block has _type and _key before using them
        if (
          !block ||
          typeof block !== "object" ||
          !("_type" in block) ||
          !("_key" in block)
        ) {
          return null;
        }
        const type = (block as { _type: string })._type as BlockType;
        const Component = PB_BLOCKS[type] as ComponentType<PageBuilderType<BlockType>>;

        // const Component = PB_BLOCKS[block._type] as ComponentType<PageBuilderType<BlockType>>;
        return (
          <div
            key={`${block._type}-${block._key}`}
            data-sanity={createDataAttribute({
              id: id,
              type: type,
              dataset: dataset,
              baseUrl: studioUrl,
              projectId: projectId,
              path: `pageBuilder[_key=="${block._key}"]`,
            }).toString()}
          >
            <Component {...block} />
          </div>
        );
      })}
    </div>
  );
}