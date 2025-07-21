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
} from "./blocks";

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
    //ABCD Add 5 component name here
    ${heroClickthroughBlockQuery},
  }
`