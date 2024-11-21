const baseQuery = `
  _id,
  _key,
  _type
`

export const heroBlockQuery = `
  _type == "heroBlock" => {
    ${baseQuery},
    heading,
    content[],
    image { 
      asset->{ url }, 
      cornerRadius,
      altText 
    },
  }
`