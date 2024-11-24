import { 
  heroBlockQuery, 
  featureBlockQuery,
  logoBlockQuery,
  testimonialBlockQuery,
  freeformBlockQuery,
} from "./blocks";

export const pageBuilder = `
  pageBuilder[] {
    ${heroBlockQuery},
    ${featureBlockQuery},
    ${logoBlockQuery},
    ${testimonialBlockQuery},
    ${freeformBlockQuery}
  }
`