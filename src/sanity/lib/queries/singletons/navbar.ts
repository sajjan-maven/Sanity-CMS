import { defineQuery } from "next-sanity";

export const navbarQuery = defineQuery(`*[_type =="navbar"][0]{
  logo {
    src {
      asset->{
        _id,
        url
      }
    },
    alt,
    width,
    height
  },
  menuItems[] {
    name,
    hasDropdown,
    dropdownItems[] {
      title,
      description,
      path
    },
    path
  },
  ctaButton {
    text,
    link,
    variant
  },
  excludedRoutes[] {
    path
  }
}`);