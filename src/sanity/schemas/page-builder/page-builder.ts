import { defineArrayMember, defineType } from "sanity";

export const pageBuilder = defineType({
  name: 'pageBuilder',
  type: 'array',
  of: [
    // defineArrayMember({ name: 'heroBlock', type: 'heroBlock' }),
    // defineArrayMember({ name: 'headerBlock', type: 'headerBlock' }),
    // defineArrayMember({ name: 'featureCardsBlock', type: 'featureCardsBlock' }),
    // defineArrayMember({ name: 'featuresMinimalBlock', type: 'featuresMinimalBlock' }),
    // defineArrayMember({ name: 'freeformBlock', type: 'freeformBlock' }),
    defineArrayMember({ name: 'portableTextBlock', type: 'portableTextBlock' }),
    // defineArrayMember({ name: 'callToActionBlock', type: 'callToActionBlock' }),
    // defineArrayMember({ name: 'logoBlock', type: 'logoBlock' }),
    // defineArrayMember({ name: 'testimonialBlock', type: 'testimonialBlock' }),
    // defineArrayMember({ name: 'servicesBlock', type: 'servicesBlock' }),
    // defineArrayMember({ name: 'formBlock', type: 'formBlock' }),
    defineArrayMember({ name: 'mediaBlock', type: 'mediaBlock' }),
    //ABCD 7 Add component name to suitable group`
    // run comment: sanity schema extract
    // run comment: sanity typegen generate
    // defineArrayMember({ name: 'heroClickthroughBlock', type: 'heroClickthroughBlock' }),
    defineArrayMember({ name: 'simpleCardBlock', type: 'simpleCardBlock' }),
    defineArrayMember({ name: 'featuredTestimonialBlock', type: 'featuredTestimonialBlock' }),
    defineArrayMember({ name: 'comparisonTableBlock', type: 'comparisonTableBlock' }),
    defineArrayMember({ name: 'testimonialCarouselBlock', type: 'testimonialCarouselBlock' }),
    defineArrayMember({ name: 'heroSectionBlock', type: 'heroSectionBlock' }),
    defineArrayMember({ name: 'stepProcessBlock', type: 'stepProcessBlock' }),
    defineArrayMember({ name: 'clickthroughTopicBlock', type: 'clickthroughTopicBlock' }),
    defineArrayMember({ name: 'stepRightImageBlock', type: 'stepRightImageBlock' }),
    defineArrayMember({ name: 'iconListBlock', type: 'iconListBlock' }),
    defineArrayMember({ name: 'iconListTwoColumnBlock', type: 'iconListTwoColumnBlock' }),
    defineArrayMember({ name: 'iconHighlightBlock', type: 'iconHighlightBlock' }),
    defineArrayMember({ name: 'pricingBlock', type: 'pricingBlock' }),
    defineArrayMember({ name: 'itToolsCardBlock', type: 'itToolsCardBlock' }),
    defineArrayMember({ name: 'socialReviewBlock', type: 'socialReviewBlock' }),
    defineArrayMember({ name: 'accordionAndImageBlock', type: 'accordionAndImageBlock' }),
    defineArrayMember({ name: 'frequentlyAskedQuestionBlock', type: 'frequentlyAskedQuestionBlock' }),
    defineArrayMember({ name: 'joinOurNewsletterBlock', type: 'joinOurNewsletterBlock' }),
    defineArrayMember({ name: 'avatarWithDetails', type: 'avatarWithDetails' }),
    defineArrayMember({ name: 'iconBlock', type: 'iconBlock' }),
    defineArrayMember({ name: 'pngImageBlock', type: 'pngImageBlock' }),
    defineArrayMember({ name: 'oktaIdpHeroSection', type: 'oktaIdpHeroSection' }),
    defineArrayMember({ name: 'oktaIdpWhySaasSection', type: 'oktaIdpWhySaasSection' }),
    defineArrayMember({ name: 'oktaIdpPointers', type: 'oktaIdpPointers' }),
    defineArrayMember({ name: 'oktaIdpSaasManagementActuallyWorks', type: 'oktaIdpSaasManagementActuallyWorks' }),
    defineArrayMember({ name: 'oktaIdpCustomer', type: 'oktaIdpCustomer' }),
    defineArrayMember({ name: 'oktaIdpTraditionalTools', type: 'oktaIdpTraditionalTools' }),
    defineArrayMember({ name: 'oktaIdpFaqSection', type: 'oktaIdpFaqSection' }),
    defineArrayMember({ name: 'oktaIdpCtaSection', type: 'oktaIdpCtaSection' }),
    defineArrayMember({ name: 'samHeroSection', type: 'samHeroSection' }),
    defineArrayMember({ name: 'samCenteredBlock', type: 'samCenteredBlock' }),
    defineArrayMember({ name: 'samCardsBlock', type: 'samCardsBlock' }),
    defineArrayMember({ name: 'samFixTheGapsBlock', type: 'samFixTheGapsBlock' }),
    defineArrayMember({ name: 'samActionBlock', type: 'samActionBlock' }),
    defineArrayMember({ name: 'auditReadinessHeroBlock', type: 'auditReadinessHeroBlock' }),
    defineArrayMember({ name: 'auditReadinessLeftAccordionBlock', type: 'auditReadinessLeftAccordionBlock' }),
    defineArrayMember({ name: 'auditReadinessRightAccordionBlock', type: 'auditReadinessRightAccordionBlock' }),
    defineArrayMember({ name: 'auditReadinessSolutionsListBlock', type: 'auditReadinessSolutionsListBlock' }),
    defineArrayMember({ name: 'disconnectedAppsHeroBlock', type: 'disconnectedAppsHeroBlock' }),
    defineArrayMember({ name: 'disconnectedAppsBrandsBlock', type: 'disconnectedAppsBrandsBlock' }),
    defineArrayMember({ name: 'disconnectedAppsStickyStackBlock', type: 'disconnectedAppsStickyStackBlock' }),
    defineArrayMember({ name: 'disconnectedAppsFeaturesBlock', type: 'disconnectedAppsFeaturesBlock' }),
    defineArrayMember({ name: 'disconnectedAppsSectionWithCardsBlock', type: 'disconnectedAppsSectionWithCardsBlock' }),
    defineArrayMember({ name: 'disconnectedAppsEmpoweredTeamsBlock', type: 'disconnectedAppsEmpoweredTeamsBlock' }),
    defineArrayMember({ name: 'heroBannerWithTagBlock', type: 'heroBannerWithTagBlock' })
  ],
  options: {
    insertMenu: {
      groups: [
        {
          name: 'intro',
          title: 'Intro',
          of: [
            'heroSectionBlock',
            'heroBannerWithTagBlock'
          ]
        },
        {
          name: 'content',
          title: 'Content',
          of: [
            'mediaBlock',
            'portableTextBlock',
            'simpleCardBlock',
            'comparisonTableBlock',
            'stepProcessBlock',
            'clickthroughTopicBlock',
            'stepRightImageBlock',
            'iconListBlock',
            'iconListTwoColumnBlock',
            'iconHighlightBlock',
            'itToolsCardBlock',
            'socialReviewBlock',
            'accordionAndImageBlock',
            'frequentlyAskedQuestionBlock',
            'joinOurNewsletterBlock',
            'avatarWithDetails',
            'iconBlock',
            'pngImageBlock',
            'oktaIdpHeroSection',
            'oktaIdpWhySaasSection',
            'oktaIdpPointers',
            'oktaIdpSaasManagementActuallyWorks',
            'oktaIdpCustomer',
            'oktaIdpTraditionalTools',
            'oktaIdpFaqSection',
            'oktaIdpCtaSection',
            'samHeroSection',
            'samCenteredBlock',
            'samCardsBlock',
            'samFixTheGapsBlock',
            'samActionBlock',
            'auditReadinessHeroBlock',
            'auditReadinessLeftAccordionBlock',
            'auditReadinessRightAccordionBlock',
            'auditReadinessSolutionsListBlock',
            'disconnectedAppsHeroBlock',
            'disconnectedAppsBrandsBlock',
            'disconnectedAppsStickyStackBlock',
            'disconnectedAppsFeaturesBlock',
            'disconnectedAppsSectionWithCardsBlock',
            'disconnectedAppsEmpoweredTeamsBlock'
          ]
        },
        {
          name: 'marketing',
          title: 'Marketing',
          of: [
            'pricingBlock'
          ]
        },
        {
          name: 'socialProof',
          title: 'Social Proof',
          of: [
            'featuredTestimonialBlock',
            'testimonialCarouselBlock'
          ]
        }
      ],
      views: [
        {
          name: 'grid',
          previewImageUrl: (schemaTypeName) => `/sanity/preview-${schemaTypeName}.png`
        },
        { name: 'list' },
      ],
    }
  }
})