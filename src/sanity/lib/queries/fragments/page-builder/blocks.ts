const baseQuery = `
  _id,
  _key,
  _type
`

const paddingQuery = `
  paddingTop,
  paddingBottom
`

export const heroBlockQuery = `
  _type == "heroBlock" => {
    ${baseQuery},
    heading,
    showBackButton,
    content[],
    mediaType,
    bottomCornerRadius,
    image { 
      asset->{ url }, 
      cornerRadius,
      altText,
      height 
    },
  }
`

export const headerBlockQuery = `
  _type == "headerBlock" => {
    ${baseQuery},
    heading,
    content[],
    bottomCornerRadius,
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
      _key,
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
    },
    ${paddingQuery}
  }
`

export const featuresMinimalBlockQuery = `
  _type == "featuresMinimalBlock" => {
    ${baseQuery},
    heading,
    features,
    enableBorderTop,
    cornerRadiusTop,
    enableBorderBottom,
    cornerRadiusBottom,
    ${paddingQuery}
  }
`

export const callToActionBlockQuery = `
  _type == "callToActionBlock" => {
    ${baseQuery},
    heading,
    content,
    ${paddingQuery}
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
    eyebrow,
    testimonial->{
      _id,
      name,
      jobTitle,
      company,
      quote,
      avatar { 
        asset->{ url }, 
      },
      logo { 
        asset->{ url }, 
      },
    },
    ${paddingQuery}
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
      spacing,
      alignment,
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
        spacing
      },
    }
  }
`

export const portableTextBlockQuery = `
  _type == "portableTextBlock" => {
    ${baseQuery},
    title,
    content[],
    ${paddingQuery}
  }
`

export const blogArchiveBlockQuery = `
  _type == "blogArchiveBlock" => {
    ${baseQuery},
    heading,
    "categories": *[_type == "postCategory"] {
      _id,
      title,
      "slug": slug.current,
    },
    ${paddingQuery}
  }
`

export const servicesBlockQuery = `
  _type == "servicesBlock" => {
    ${baseQuery},
    heading,
    services[]->{
      _id,
      title,
      shortDescription,
      image { 
        asset->{ url }, 
        aspectRatio,
        cornerRadius,
        enableBorder,
        borderStyle,
        altText 
      },
      "slug": slug.current,
    },
    background,
    topCornerRadius,
    ${paddingQuery}
  }
`