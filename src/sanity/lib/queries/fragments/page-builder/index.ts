import { 
  heroBlockQuery, 
  featureBlockQuery,
} from "./blocks";

export const pageBuilder = `
  pageBuilder[] {
    ${heroBlockQuery},
    ${featureBlockQuery}
  }
`