import { 
  heroBlockQuery, 
} from "./blocks";

export const pageBuilder = `
  pageBuilder[] {
    ${heroBlockQuery},
  }
`