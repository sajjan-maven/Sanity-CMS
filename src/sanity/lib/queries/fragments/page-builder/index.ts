import { 
  heroBlockQuery, 
  headerBlockQuery,
  heroClickthroughBlockQuery,
  featureBlockQuery,
  featureCardsBlockQuery,
  featuresMinimalBlockQuery,
  callToActionBlockQuery,
  logoBlockQuery,
  testimonialBlockQuery,
  freeformBlockQuery,
  portableTextBlockQuery,
  blogArchiveBlockQuery,
  servicesBlockQuery,
  formBlockQuery,
  mediaBlockQuery,
  simpleCardBlockQuery,
  featuredTestimonialBlockQuery,
  comparisonTableBlockQuery
} from "./blocks";

//ABCD Add 5 component name here
export const pageBuilder = `
  pageBuilder[] {
    ${heroBlockQuery},
    ${headerBlockQuery},
    ${featureBlockQuery},
    ${featureCardsBlockQuery},
    ${featuresMinimalBlockQuery},
    ${callToActionBlockQuery},
    ${logoBlockQuery},
    ${testimonialBlockQuery},
    ${freeformBlockQuery},
    ${portableTextBlockQuery},
    ${blogArchiveBlockQuery},
    ${servicesBlockQuery},
    ${formBlockQuery},
    ${mediaBlockQuery},

    ${heroClickthroughBlockQuery},
    ${simpleCardBlockQuery},
    ${featuredTestimonialBlockQuery},
    ${comparisonTableBlockQuery}
  }
`