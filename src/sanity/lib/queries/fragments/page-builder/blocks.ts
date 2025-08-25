import { baseQuery, buttonQuery, mediaQuery, paddingQuery } from "../misc";

export const heroBlockQuery = `
  _type == "heroBlock" => {
    ${baseQuery},
    heading,
    content[],
    mediaType,
    bottomCornerRadius,
    buttons[]{
      ${buttonQuery}
    },
    image { 
      height,
      ${mediaQuery}
    },
    dialogType,
    videoUrl,
    overlayType,
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

export const heroClickthroughBlockQuery = `
  _type == "heroClickthroughBlock" => {
    ${baseQuery},
    heading,
    subheading,
    headingWidth,
    subheadingWidth
  }
`
export const simpleCardBlockQuery = `
  _type == "simpleCardBlock" => {
    ${baseQuery},
    title,
    cards[] {
      title,
      description,
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      backgroundColor {
        value
      }
    }
  }
`
export const featuredTestimonialBlockQuery = `
  _type == "featuredTestimonialBlock" => {
    ${baseQuery},
    quote,
    author {
      name,
      position,
      avatar {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      }
    },
    quoteIcon {
      asset->{
        url
      },
      alt
    },
    backgroundColor {
      value
    }
  }
`

export const comparisonTableBlockQuery = `
  _type == "comparisonTableBlock" => {
    ${baseQuery},
    _key,
    _type,
    title,
    leftColumn {
      title,
      icon {
        asset->{
          url
        },
        alt
      }
    },
    rightColumn {
      title,
      icon {
        asset->{
          url
        },
        alt
      },
      backgroundColor {
        value
      }
    },
    rows[] {
      leftText,
      rightText
    }
  }
`
export const testimonialCarouselBlockQuery = `
  _type == "testimonialCarouselBlock" => {
    ${baseQuery},
    _key,
    _type,
    title,
    testimonials[] {
      text,
      author,
      position,
      avatar {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        alt
      },
      companyLogo {
        asset->{
          url
        },
        alt,
        width,
        height
      }
    }
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
        ${mediaQuery}
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
        ${mediaQuery}
      },
      button {
        ${buttonQuery}
      },  
    },
    showCallToAction,
    callToActionHeading,
    callToActionContent,
    callToActionButtons[] {
      ${buttonQuery}
    },
    anchorId,
    ${paddingQuery}
  }
`

export const featuresMinimalBlockQuery = `
  _type == "featuresMinimalBlock" => {
    ${baseQuery},
    heading,
    content,
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
        ${mediaQuery}
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
        ${mediaQuery}
      },
      logo { 
        ${mediaQuery}
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
          aspectRatio,
          ${mediaQuery}
        },
        heading,
        headingText,
        headingTag,
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
        ${mediaQuery}
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

export const mediaBlockQuery = `
  _type == "mediaBlock" => {
    ${baseQuery},
    backgroundType,
    backgroundWidth,
    image { 
      ${mediaQuery}
    },
    overlayType,
    dialogType,
    videoUrl,
    anchorId
  }
`

export const heroSectionBlockQuery = `
  _type == "heroSectionBlock" => {
    ${baseQuery},
    _key,
    _type,
    title,
    titleWidth,
    description,
    descriptionWidth,
    showButton,
    button {
      text,
      link,
      variant,
      buttonBelowSpacing
    },
    showImage,
    image {
      asset->{
        url,
        metadata {
          dimensions
        }
      },
      height,
      width
    },
    modifySpacing,
    spacing {
      topSpacing,
      bottomSpacing,
      titleBelowSpacing,
      descriptionBelowSpacing,
      imageBelowSpacing
    },
    backgroundColor {
      value
    }
  }
`

export const stepProcessBlockQuery = `
  _type == "stepProcessBlock" => {
    ${baseQuery},
    _key,
    _type,
    heading,
    subheading,
    steps[] {
      number,
      title,
      description,
      badgeColor {
        value
      },
      image {
        asset->{
          url,
          metadata {
            dimensions
          }
        },
        width,
        height
      }
    },
    borderColor {
      value
    },
    backgroundColor {
      value
    }
  }
`

export const clickthroughTopicBlockQuery = `
  _type == "clickthroughTopicBlock" => {
    ${baseQuery},
    _key,
    _type,
    useCases[] {
      title,
      description,
      backgroundColor {
        value
      },
      embedUrl,
    },
    sectionBackgroundColor {
      value
    }
  }
`

export const stepRightImageBlockQuery = `
  _type == "stepRightImageBlock" => {
    ${baseQuery},
    _key,
    _type,
    title,
    steps[] {
      number,
      title
    },
    footnote,
    image {
      asset->{
        url,
        metadata {
          dimensions
        }
      },
      alt
    },
    badgeColor {
      value
    },
    backgroundGradient {
      topColor {
        value
      },
      bottomColor {
        value
      }
    }
  }
`

export const iconListBlockQuery = `
  _type == "iconListBlock" => {
    ${baseQuery},
    _key,
    _type,
    heading,
    features[] {
      title,
      icon {
        asset->{
          url
        }
      }
    },
    backgroundColor {
      value
    },
  }
`

export const iconListTwoColumnBlockQuery = `
  _type == "iconListTwoColumnBlock" => {
    ${baseQuery},
    _key,
    _type,
    heading,
    features[] {
      title,
      description,
      icon {
        asset->{
          url
        }
      }
    },
    backgroundColor {
      value
    },
  }
`

export const iconHighlightBlockQuery = `
  _type == "iconHighlightBlock" => {
    ${baseQuery},
    _key,
    _type,
    title,
    cards[]{
      text,
      image {
        asset->{
          url,
        }
      }
    },
    backgroundColor {
      value
    },
  }
`
export const pricingBlockQuery = `
  _type == "pricingBlock" => {
    ${baseQuery},
    _key,
    _type,
    title,
    pricingBlockReference->{
      _id,
      freePilotCard{
        title,
        subtitle,
        features,
        buttonText,
        buttonLink
      },
      afterPilotCard{
        title,
        price,
        priceUnit
      },
      backgroundColor{
        value
      }
    }
  }
`

export const caseStudyGridBlockQuery = `
  _type == "caseStudyGridBlock" => {
    ${baseQuery},
    _key,
    _type,
    title,
    spacing {
      top,
      bottom
    },
    hasFeaturedCard,
    featuredCaseStudy {
      company,
      description,
      link,
      buttonText,
      backgroundColor {
        value
      },
      logo {
        asset->{
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        }
      }
    },
    caseStudies[] {
      company,
      description,
      link,
      backgroundColor {
        value
      },
      logo {
        asset->{
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        }
      }
    }
  }
`

export const itToolsCardBlockQuery = `
  _type == "itToolsCardBlock" => {
    ${baseQuery},
    _key,
    _type,
    title,
    backgroundColor {
      value
    },
    spacing {
      top,
      bottom
    },
    tools[] {
      label,
      title,
      description,
      url,
      comingSoon,
      buttonText,
      labelBackground {
        value
      }
    }
  }
`

export const socialReviewBlockQuery = `
  _type == "socialReviewBlock" => {
    ${baseQuery},
    _key,
    _type,
    title,
    background {
      color {
        value
      },
      gradient
    },
    spacing {
      top,
      bottom
    },
    avatarImage {
      asset->{
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    },
    comments[] {
      username,
      content,
      width
    }
  }
`

export const accordionAndImageBlockQuery = `
  _type == "accordionAndImageBlock" => {
    ${baseQuery},
    _key,
    _type,
    title,
    sectionTitle,
    description,
    spacing {
      top,
      bottom
    },
    image {
      asset->{
        url,
      }
    },
    features[] {
      title,
      description
    }
  }
`

export const frequentlyAskedQuestionBlockQuery = `
  _type == "frequentlyAskedQuestionBlock" => {
    ${baseQuery},
    title,
    faqs[] {
      question,
      answer
    }
  }
`

export const joinOurNewsletterBlockQuery = `
  _type == "joinOurNewsletterBlock" => {
    ${baseQuery},
    title,
    description,
    placeholder,
    buttonText,
    successMessage,
    processingText,
    spacing {
      top,
      bottom
    },
    backgroundColor {
      value
    },
    successBorderColor {
      value
    },
    successTextColor {
      value
    }
  }
`

export const avatarWithDetailsQuery = `
  _type == "avatarWithDetails" => {
    ${baseQuery},
    _key,
    _type,
    sectionTitle,
    spacing {
      topSpacing,
      topSpacingMobile,
      bottomSpacing,
      bottomSpacingMobile,
      headingBottomSpacing,
      headingBottomSpacingMobile
    },
    avatarList[]{
      name,
      title,
      avatar {
        asset->{
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        }
      },
      bio,
      socialLinks[]{
        name,
        url,
        icon {
          asset->{
            url,
            metadata {
              dimensions {
                width,
                height
              }
            }
          }
        }
      }
    }
  }
`

export const iconBlockQuery = `
  _type == "iconBlock" => {
    ${baseQuery},
      title,
      icons[] {
      logo { asset->{url} },
      altText,
      width,
      height
    },
  }
`
export const pngImageBlockQuery = `
  _type == "pngImageBlock" => {
    ${baseQuery},
    hasFeaturedCard,
    featuredCard {
      image { asset->{url} },
      altText,
      title,
      description,
      bgColor { value }
    },
    cards[] {
      image { asset->{url} },
      altText,
      title,
      description,
      bgColor { value }
    },
    sectionBgColor { value }
  }
`
export const oktaIdpHeroSectionQuery = `
  _type == "oktaIdpHeroSection" => {
    ${baseQuery},
    _key,
    _type,
    title,
    subtitle,
    description,
    heroImage {
      alt,
      width,
      height,
      asset->{
        url,
        metadata {
          dimensions {
            width,
            height
          }
        }
      }
    },
    marqueeImages[] {
      width,
      height,
      asset {
        alt,
        asset->{
          url,
          metadata {
            dimensions {
              width,
              height
            }
          }
        }
      }
    }
  }
`
export const oktaIdpWhySaasSectionQuery = `
  _type == "oktaIdpWhySaasSection" => {
    ${baseQuery},
    _key,
    _type,
    title,
    lineImage {
      alt,
      width,
      height,
      asset->{
        url,
        metadata { dimensions { width, height } }
      }
    },
    cards[] {
      mainHeading,
      description,
      image {
        alt,
        width,
        height,
        asset->{
          url,
          metadata { dimensions { width, height } }
        }
      }
    }
  }
`
export const oktaIdpPointersQuery = `
  _type == "oktaIdpPointers" => {
    ${baseQuery},
    _key,
    _type,
    title,
    pointers[] {
      text
    }
  }
`
export const oktaIdpSaasManagementActuallyWorksQuery = `
  _type == "oktaIdpSaasManagementActuallyWorks" => {
    ${baseQuery},
    _key,
    _type,
    title,
    topLineImage {
      alt,
      width,
      height,
      asset->{
        url,
        metadata { dimensions { width, height } }
      }
    },
    sections[] {
      mainTitle,
      subTitle,
      image {
        alt,
        width,
        height,
        asset->{
          url,
          metadata { dimensions { width, height } }
        }
      }
    },
    bottomLineImage {
      alt,
      width,
      height,
      asset->{
        url,
        metadata { dimensions { width, height } }
      }
    },
  }
`
export const oktaIdpCustomerQuery = `
  _type == "oktaIdpCustomer" => {
    ${baseQuery},
    _key,
    _type,
    title,
    cards[] {
      _key,
      mainHeading,
      description,
      name,
      designation,
      image {
        alt,
        width,
        height,
        asset->{
          url,
          metadata { dimensions { width, height } }
        }
      },
      avatarImage {
        alt,
        width,
        height,
        asset->{
          url,
          metadata { dimensions { width, height } }
        }
      },
      impact[] {
        _key,
        contractCount,
        contractDesc,
        reductionRate,
        reductionDesc
      }
    }
  }
`
export const oktaIdpTraditionalToolsQuery = `
  _type == "oktaIdpTraditionalTools" => {
    _key,
    _type,
    traditionalTools[] {
      list,
      listIcon {
        alt,
        asset->{
          url,
          metadata {
            dimensions { width, height }
          }
        }
      }
    },
    stitchflowTools[] {
      list,
      listIcon {
        alt,
        asset->{
          url,
          metadata {
            dimensions { width, height }
          }
        }
      }
    }
  }
`;
export const oktaIdpFaqSectionQuery = `
  _type == "oktaIdpFaqSection" => {
    _key,
    _type,
    heading,
    faqs[] {
      question,
      answer
    }
  }
`;
export const oktaIdpCtaSectionQuery = `
  _type == "oktaIdpCtaSection" => {
    _key,
    _type,
    heading,
    description,
    buttonText,
    avatarImage {
      alt,
      width,
      height,
      asset->{
        url,
        metadata { dimensions { width, height } }
      }
    }
  }
`;
export const samHeroSectionQuery = `
  _type == "samHeroSection" => {
    _key,
    _type,
    title,
    description,
    heroImage {
      alt,
      width,
      height,
      asset->{
        url,
        metadata { dimensions { width, height } }
      }
    },
    backedByImage {
      alt,
      width,
      height,
      asset->{
        url,
        metadata { dimensions { width, height } }
      }
    },
    marqueeImages[] {
      width,
      height,
      asset {
        alt,
        asset->{
          url,
          metadata { dimensions { width, height } }
        }
      }
    }
  }
`;
export const samCenteredBlockQuery = `
  _type == "samCenteredBlock" => {
    _key,
    _type,
    badge,
    title,
    description,
    buttonText
  }
`;
export const samCardsBlockQuery = `
  _type == "samCardsBlock" => {
    _key,
    _type,
    tagline,
    heading,
    highlightedText,
    description,
    cards[] {
      tagline,
      heading,
      description,
      image {
        alt,
        width,
        height,
        asset->{
          url,
          metadata { dimensions { width, height } }
        }
      }
    }
  }
`;
export const samFixTheGapsBlockQuery = `
  _type == "samFixTheGapsBlock" => {
    _key,
    _type,
    tagline,
    heading,
    description,
    accordionItems[] {
      heading,
      subheading,
      button,
      image {
        alt,
        asset-> { url, metadata { dimensions { width, height } } }
      },
      icon {
        alt,
        asset-> { url }
      },
      subsections[] {
        title,
        desc
      }
    }
  }
`;
export const samActionBlockQuery = `
  _type == "samActionBlock" => {
    _key,
    _type,
    tagline,
    heading,
    highlightedText,
    description,
    videoUrl
  }
`;

//ABCD 3 Create schema for component in sanity > schemas > page-builder > blocks
//ABCD 4 Add component query here