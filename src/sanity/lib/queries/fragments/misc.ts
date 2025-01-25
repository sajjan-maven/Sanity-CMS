export const BASE_QUERY = `
  _id,
  _key,
  _type
`

export const PADDING_QUERY = `
  paddingTop,
  paddingBottom
`

export const BUTTON_QUERY = `
  _key,
  showButton,
  buttonText,
  buttonVariant,
  buttonType,
  buttonWidth,
  buttonFileUrl {
    asset->{ url }
  },
  buttonPageReference->{
    _id,
    _type,
    title,
    "slug": slug.current
  },
  buttonEmailAddress,
  buttonExternalUrl,
  buttonAnchorLocation,
  buttonAnchorId
`