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
    defineArrayMember({ name: 'heroImageBlock', type: 'heroImageBlock' })
  ],
  options: {
    insertMenu: {
      groups: [
        {
          name: 'intro',
          title: 'Intro',
          of: [ 'heroBlock', 'headerBlock', 'heroClickthroughBlock', 'heroImageBlock' ]
        },
        {
          name: 'content',
          title: 'Content',
          of: [ 'freeformBlock', 'mediaBlock', 'portableTextBlock', 'simpleCardBlock', 'comparisonTableBlock' ]
        },
        {
          name: 'marketing',
          title: 'Marketing',
          of: [ 'featureCardsBlock', 'featuresMinimalBlock', 'callToActionBlock', 'servicesBlock', 'formBlock' ]
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