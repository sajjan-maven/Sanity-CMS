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
  portableTextBlockQuery,
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
    ${portableTextBlockQuery},
    ${blogArchiveBlockQuery},
    ${servicesBlockQuery}
  }
`