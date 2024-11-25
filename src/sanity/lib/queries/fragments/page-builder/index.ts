import { 
  heroBlockQuery, 
  featureBlockQuery,
  logoBlockQuery,
  testimonialBlockQuery,
  freeformBlockQuery,
  featuresMinimalBlockQuery,
  featureCardsBlockQuery,
  callToActionBlockQuery,
} from "./blocks";

export const pageBuilder = `
  pageBuilder[] {
    ${heroBlockQuery},
    ${featureBlockQuery},
    ${featureCardsBlockQuery},
    ${featuresMinimalBlockQuery},
    ${logoBlockQuery},
    ${callToActionBlockQuery},
    ${testimonialBlockQuery},
    ${freeformBlockQuery}
  }
`