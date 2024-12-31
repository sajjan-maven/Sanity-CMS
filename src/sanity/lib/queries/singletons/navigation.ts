import { groq } from "next-sanity";

export const navigationSettingsQuery = groq`*[_type == 'navigationSettings'][0] {
  "navbar": {
    navbarMenuItems[] {
      _key,
      title,
      pageReference->{
        _id,
        title,
        "slug": slug.current
      },
      pageReferences[]->{
        _id,
        title,
        "slug": slug.current
      },
      menuItemType,
      isButton,
    },
  },
  "slideOutMenu": {
    showSlideOutMenu,
    slideOutMenuItems[] {
      _key,
      title,
      pageReference->{
        _id,
        title,
        "slug": slug.current
      },
    },
  },
  "footer": {
    footerColumns[] {
      _key,
      title,
      menuItems[] {
        _key,
        title,
        pageReference->{
          _id,
          title,
          "slug": slug.current
        },
      }
    },
    footerLegalMenuItems[] {
      _key,
      title,
      pageReference->{
        _id,
        title,
        "slug": slug.current
      },
    },
  }
}` 