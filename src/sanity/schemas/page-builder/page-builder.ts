import { defineArrayMember, defineType } from "sanity";

export const pageBuilder = defineType({
  name: 'pageBuilder',
  type: 'array',
  of: [
    defineArrayMember({ name: 'heroBlock', type: 'heroBlock' }),
    defineArrayMember({ name: 'headerBlock', type: 'headerBlock' }),
    defineArrayMember({ name: 'featureCardsBlock', type: 'featureCardsBlock' }),
    defineArrayMember({ name: 'featuresMinimalBlock', type: 'featuresMinimalBlock' }),
    defineArrayMember({ name: 'freeformBlock', type: 'freeformBlock' }),
    defineArrayMember({ name: 'portableTextBlock', type: 'portableTextBlock' }),
    defineArrayMember({ name: 'callToActionBlock', type: 'callToActionBlock' }),
    defineArrayMember({ name: 'logoBlock', type: 'logoBlock' }),
    defineArrayMember({ name: 'testimonialBlock', type: 'testimonialBlock' }),
    defineArrayMember({ name: 'servicesBlock', type: 'servicesBlock' }),
    defineArrayMember({ name: 'formBlock', type: 'formBlock' }),
    defineArrayMember({ name: 'mediaBlock', type: 'mediaBlock' }),
    //ABCD 7 Add component name to suitable group
    defineArrayMember({ name: 'heroClickthroughBlock', type: 'heroClickthroughBlock' }),
    defineArrayMember({ name: 'simpleCardBlock', type: 'simpleCardBlock' }),
    defineArrayMember({ name: 'featuredTestimonialBlock', type: 'featuredTestimonialBlock' }),
    defineArrayMember({ name: 'comparisonTableBlock', type: 'comparisonTableBlock' }),
    defineArrayMember({ name: 'testimonialCarouselBlock', type: 'testimonialCarouselBlock' }),
    defineArrayMember({ name: 'heroSectionBlock', type: 'heroSectionBlock' }),
    defineArrayMember({ name: 'stepProcessBlock', type: 'stepProcessBlock' }),
    defineArrayMember({ name: 'clickthroughTopicBlock', type: 'clickthroughTopicBlock' }),
    defineArrayMember({ name: 'stepRightImageBlock', type: 'stepRightImageBlock' }),
    defineArrayMember({ name: 'iconListBlock', type: 'iconListBlock' }),
    defineArrayMember({ name: 'iconListTwoColumnBlock', type: 'iconListTwoColumnBlock'}),
    defineArrayMember({ name: 'iconHighlightBlock', type: 'iconHighlightBlock'}),
    defineArrayMember({ name: 'pricingBlock', type: 'pricingBlock'}),
    defineArrayMember({ name: 'caseStudyGridBlock', type: 'caseStudyGridBlock'}),
    defineArrayMember({ name: 'itToolsCardBlock', type: 'itToolsCardBlock'})
  ],
  options: {
    insertMenu: {
      groups: [
        {
          name: 'intro',
          title: 'Intro',
          of: [ 'heroBlock', 'headerBlock', 'heroClickthroughBlock', 'heroSectionBlock' ]
        },
        {
          name: 'content',
          title: 'Content',
          of: [ 'freeformBlock', 'mediaBlock', 'portableTextBlock', 'simpleCardBlock', 'comparisonTableBlock', 'stepProcessBlock', 'clickthroughTopicBlock', 'stepRightImageBlock', 'iconListBlock', 'iconListTwoColumnBlock', 'iconHighlightBlock', 'caseStudyGridBlock', 'itToolsCardBlock' ]
        },
        {
          name: 'marketing',
          title: 'Marketing',
          of: [ 'featureCardsBlock', 'featuresMinimalBlock', 'callToActionBlock', 'servicesBlock', 'formBlock', 'pricingBlock' ]
        },
        {
          name: 'socialProof',
          title: 'Social Proof',
          of: [ 'logoBlock', 'testimonialBlock', 'featuredTestimonialBlock', 'testimonialCarouselBlock' ]
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