import { defineQuery } from "next-sanity";

export const OG_IMAGE_QUERY = defineQuery(`
  *[_id == $id][0]{
    title,
  }    
`);