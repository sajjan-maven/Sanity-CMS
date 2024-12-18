import { defineType } from "sanity";

export const pageBuilder = defineType({
  name: 'pageBuilder',
  type: 'array',
  of: [
    { name: 'heroBlock', type: 'heroBlock' },
    { name: 'headerBlock', type: 'headerBlock' },
    { name: 'featureCardsBlock', type: 'featureCardsBlock' },
    { name: 'featuresMinimalBlock', type: 'featuresMinimalBlock' },
    { name: 'callToActionBlock', type: 'callToActionBlock' },
    { name: 'freeformBlock', type: 'freeformBlock' },
    { name: 'logoBlock', type: 'logoBlock' },
    { name: 'testimonialBlock', type: 'testimonialBlock' },
    { name: 'servicesBlock', type: 'servicesBlock' },
  ],
  options: {
    insertMenu: {
      groups: [
        {
          name: 'intro',
          title: 'Intro',
          of: [ 'heroBlock', 'headerBlock' ]
        },
        {
          name: 'content',
          title: 'Content',
          of: [ 'freeformBlock', 'featureCardsBlock', 'featuresMinimalBlock' ]
        },
        {
          name: 'socialProof',
          title: 'Social Proof',
          of: [ 'logoBlock', 'testimonialBlock' ]
        },
        {
          name: 'marketing',
          title: 'Marketing',
          of: [ 'callToActionBlock', 'servicesBlock' ]
        },
        {
          name: 'socialProof',
          title: 'Social Proof',
          of: [ 'logoBlock', 'testimonialBlock' ]
        }
      ],
      views: [
        { name: 'grid' },
      ]
    }
  }
})