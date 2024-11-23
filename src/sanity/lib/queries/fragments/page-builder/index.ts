import { 
  heroBlockQuery, 
  featureBlockQuery,
  logoBlockQuery,
  testimonialBlockQuery,
} from "./blocks";

export const pageBuilder = `
  pageBuilder[] {
    ${heroBlockQuery},
    ${featureBlockQuery},
    ${logoBlockQuery},
    ${testimonialBlockQuery}
  }
`