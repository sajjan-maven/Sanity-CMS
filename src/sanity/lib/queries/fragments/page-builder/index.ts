import { 
  heroBlockQuery, 
  headerBlockQuery,
  featureBlockQuery,
  logoBlockQuery,
  testimonialBlockQuery,
  freeformBlockQuery,
  featuresMinimalBlockQuery,
  featureCardsBlockQuery,
  callToActionBlockQuery,
  blogArchiveBlockQuery,
  servicesBlockQuery,
} from "./blocks";

export const pageBuilder = `
  pageBuilder[] {
    ${heroBlockQuery},
    ${headerBlockQuery},
    ${featureBlockQuery},
    ${featureCardsBlockQuery},
    ${featuresMinimalBlockQuery},
    ${logoBlockQuery},
    ${callToActionBlockQuery},
    ${testimonialBlockQuery},
    ${freeformBlockQuery},
    ${blogArchiveBlockQuery},
    ${servicesBlockQuery}
  }
`