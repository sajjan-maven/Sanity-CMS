import { defineQuery } from "next-sanity";

export const footerCTAQuery = defineQuery(`*[_type == "footer"][0] {
  footerCTA {
    title,
    description,
    ctaButton {
      text,
      link,
      variant
    },
    desktopImage {
      src {
        asset->{
          url
        }
      },
      alt,
      width,
      height
    },
    mobileImage {
      src {
        asset->{
          url
        }
      },
      alt,
      width,
      height
    }
  },
  footerCTAexcludedRoutes[] {
    path
  }
}`);
