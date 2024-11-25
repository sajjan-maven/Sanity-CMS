import { 
  heroBlockQuery, 
  featureBlockQuery,
  logoBlockQuery,
  testimonialBlockQuery,
  freeformBlockQuery,
  featuresMinimalBlockQuery,
  featureCardsBlockQuery,
} from "./blocks";

export const pageBuilder = `
  pageBuilder[] {
    ${heroBlockQuery},
    ${featureBlockQuery},
    ${featureCardsBlockQuery},
    ${featuresMinimalBlockQuery},
    ${logoBlockQuery},
    ${testimonialBlockQuery},
    ${freeformBlockQuery}
  }
`