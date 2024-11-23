import { 
  heroBlockQuery, 
  featureBlockQuery,
  logoBlockQuery,
} from "./blocks";

export const pageBuilder = `
  pageBuilder[] {
    ${heroBlockQuery},
    ${featureBlockQuery},
    ${logoBlockQuery}
  }
`