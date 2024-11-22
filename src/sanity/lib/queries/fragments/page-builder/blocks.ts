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

export const featureBlockQuery = `
  _type == "featureBlock" => {
    ${baseQuery},
    heading,
    features[] {
      title,
      description,
      icon { 
        asset->{ url }, 
      },
      pageReference->{
        _id,
        title,
        "slug": slug.current
      },
    }
  }
`