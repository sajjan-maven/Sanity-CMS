import { groq } from "next-sanity";

export const navigationSettingsQuery = groq`*[_type == 'navigationSettings'][0] {
  "navbar": {
    navbarType,
    navbarMenuItems[] {
      _key,
      title,
      pageReference->{
        _id,
        title,
        "slug": slug.current
      },
      isButton,
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