import { baseQuery, buttonQuery, paddingQuery } from "../misc";

export const heroBlockQuery = `
  _type == "heroBlock" => {
    ${baseQuery},
    heading,
    showBackButton,
    content[],
    mediaType,
    bottomCornerRadius,
    buttons[]{
      ${buttonQuery}
    },
    image { 
      asset->{ url }, 
      cornerRadius,
      altText,
      height 
    },
    anchorId
  }
`

export const headerBlockQuery = `
  _type == "headerBlock" => {
    ${baseQuery},
    heading,
    content[],
    bottomCornerRadius,
    anchorId
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
    },
    anchorId
  }
`

export const featureCardsBlockQuery = `
  _type == "featureCardsBlock" => {
    ${baseQuery},
    heading,
    buttons[]{
      ${buttonQuery}
    },
    features[] {
      _key,
      title,
      description,
      items,
      image { 
        asset->{ url },
      },
      button {
        ${buttonQuery}
      },
    },
    anchorId,
    ${paddingQuery}
  }
`

export const featuresMinimalBlockQuery = `
  _type == "featuresMinimalBlock" => {
    ${baseQuery},
    heading,
    buttons[] {
      ${buttonQuery}
    },
    features,
    enableBorderTop,
    cornerRadiusTop,
    enableBorderBottom,
    cornerRadiusBottom,
    anchorId,
    ${paddingQuery}
  }
`

export const callToActionBlockQuery = `
  _type == "callToActionBlock" => {
    ${baseQuery},
    heading,
    content,
    buttons[] {
      ${buttonQuery}
    },
    anchorId,
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
      size,
      link
    },
    anchorId
  }
`
export const testimonialBlockQuery = `
  _type == "testimonialBlock" => {
    ${baseQuery},
    heading,
    eyebrow,
    testimonials[]->{
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
    anchorId,
    cornerRadiusTop,
    cornerRadiusBottom,
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
        buttonPageReference->{
          _id,
          title,
          "slug": slug.current
        },
        buttonExternalUrl,
        spacing
      },
    },
    anchorId,
    border
  }
`

export const portableTextBlockQuery = `
  _type == "portableTextBlock" => {
    ${baseQuery},
    title,
    content[],
    alignment,
    anchorId,
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
    anchorId,
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
    buttons[]{
      ${buttonQuery}
    },
    background,
    topCornerRadius,
    anchorId,
    ${paddingQuery}
  }
`

export const formBlockQuery = `
  _type == "formBlock" => {
    ${baseQuery},
    heading,
    content[],
    form->{
      title,
      submitButtonText,
      fields
    },
    anchorId,
    ${paddingQuery}
  }
`