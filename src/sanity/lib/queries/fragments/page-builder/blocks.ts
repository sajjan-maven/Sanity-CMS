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
    mediaType,
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

export const featureCardsBlockQuery = `
  _type == "featureCardsBlock" => {
    ${baseQuery},
    heading,
    features[] {
      title,
      description,
      items,
      image { 
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

export const featuresMinimalBlockQuery = `
  _type == "featuresMinimalBlock" => {
    ${baseQuery},
    heading,
    features
  }
`

export const callToActionBlockQuery = `
  _type == "callToActionBlock" => {
    ${baseQuery},
    heading,
    content
  }
`

export const logoBlockQuery = `
  _type == "logoBlock" => {
    ${baseQuery},
    heading,
    logos[] {
      _key,
      title,
      image { 
        asset->{ url }, 
      },
      link
    }
  }
`
export const testimonialBlockQuery = `
  _type == "testimonialBlock" => {
    ${baseQuery},
    heading,
    testimonial,
    author,
    position,
    avatar { 
      asset->{ url }, 
    },
    logo { 
      asset->{ url }, 
    },
  }
`

export const freeformBlockQuery = `
  _type == "freeformBlock" => {
    ${baseQuery},
    title,
    columnsPerRow,
    columns[] {
      _key,
      _type,
      title,
      items[] {
        _key,
        _type,
        image { 
          asset->{ url }, 
          aspectRatio,
          cornerRadius,
          enableBorder,
          borderStyle,
          altText 
        },
        headingText,
        headingSize,
        richTextContent,
        buttonText,
        buttonVariant,
        buttonType,
      },
    }
  }
`