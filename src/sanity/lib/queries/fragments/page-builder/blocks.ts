import { BASE_QUERY, BUTTON_QUERY, PADDING_QUERY } from "../misc";

export const HERO_BLOCK_QUERY = `
  _type == "heroBlock" => {
    ${BASE_QUERY},
    heading,
    showBackButton,
    content[],
    mediaType,
    bottomCornerRadius,
    buttons[]{
      ${BUTTON_QUERY}
    },
    image { 
      asset->{ url }, 
      altText,
      height 
    },
    dialogType,
    videoUrl,
    overlayType,
    anchorId
  }
`

export const HEADER_BLOCK_QUERY = `
  _type == "headerBlock" => {
    ${BASE_QUERY},
    heading,
    content[],
    bottomCornerRadius,
    anchorId
  }
`

export const FEATURE_BLOCK_QUERY = `
  _type == "featureBlock" => {
    ${BASE_QUERY},
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

export const FEATURE_CARDS_BLOCK_QUERY = `
  _type == "featureCardsBlock" => {
    ${BASE_QUERY},
    heading,
    buttons[]{
      ${BUTTON_QUERY}
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
        ${BUTTON_QUERY}
      },
    },
    anchorId,
    ${PADDING_QUERY}
  }
`

export const FEATURES_MINIMAL_BLOCK_QUERY = `
  _type == "featuresMinimalBlock" => {
    ${BASE_QUERY},
    heading,
    content,
    buttons[] {
      ${BUTTON_QUERY}
    },
    features,
    enableBorderTop,
    cornerRadiusTop,
    enableBorderBottom,
    cornerRadiusBottom,
    anchorId,
    ${PADDING_QUERY}
  }
`

export const CALL_TO_ACTION_BLOCK_QUERY = `
  _type == "callToActionBlock" => {
    ${BASE_QUERY},
    heading,
    content,
    buttons[] {
      ${BUTTON_QUERY}
    },
    anchorId,
    ${PADDING_QUERY}
  }
`

export const LOGO_BLOCK_QUERY = `
  _type == "logoBlock" => {
    ${BASE_QUERY},
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
export const TESTIMONIAL_BLOCK_QUERY = `
  _type == "testimonialBlock" => {
    ${BASE_QUERY},
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
    ${PADDING_QUERY}
  }
`

export const FREEFORM_BLOCK_QUERY = `
  _type == "freeformBlock" => {
    ${BASE_QUERY},
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

export const PORTABLE_TEXT_BLOCK_QUERY = `
  _type == "portableTextBlock" => {
    ${BASE_QUERY},
    title,
    content[],
    alignment,
    anchorId,
    ${PADDING_QUERY}
  }
`

export const BLOG_ARCHIVE_BLOCK_QUERY = `
  _type == "blogArchiveBlock" => {
    ${BASE_QUERY},
    heading,
    "categories": *[_type == "postCategory"] {
      _id,
      title,
      "slug": slug.current,
    },
    anchorId,
    ${PADDING_QUERY}
  }
`

export const SERVICES_BLOCK_QUERY = `
  _type == "servicesBlock" => {
    ${BASE_QUERY},
    heading,
    services[]->{
      _id,
      title,
      shortDescription,
      image { 
        asset->{ url }, 
        aspectRatio,
        altText 
      },
      "slug": slug.current,
    },
    buttons[]{
      ${BUTTON_QUERY}
    },
    background,
    topCornerRadius,
    anchorId,
    ${PADDING_QUERY}
  }
`

export const FORM_BLOCK_QUERY = `
  _type == "formBlock" => {
    ${BASE_QUERY},
    heading,
    content[],
    form->{
      title,
      submitButtonText,
      fields
    },
    anchorId,
    ${PADDING_QUERY}
  }
`

export const MEDIA_BLOCK_QUERY = `
  _type == "mediaBlock" => {
    ${BASE_QUERY},
    backgroundType,
    backgroundWidth,
    image { 
      asset->{ url }, 
      altText,
    },
    overlayType,
    dialogType,
    videoUrl,
    anchorId
  }
`