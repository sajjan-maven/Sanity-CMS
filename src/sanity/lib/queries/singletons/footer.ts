import { defineQuery } from "next-sanity";

export const footerQuery = defineQuery(`*[_type == "footer"][0] {
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
  footerLinks {
    companyLogo {
      asset->{
        url,
      }
    },
    backedBy {
      asset->{
        url,
      }
    },
    socialLinks[] {
      platform,
      url,
      icon {
          asset->{
              url,
          }
      }
    },
    certifications[] {
      label,
      icon {
          asset->{
              url,
          }
      }
    },
    reviewBadges[] {
      url,
      icon {
          asset->{
              url,
          }
      }
    },
    platform[] {
      label,
      url,
      badge
    },
    resources[] {
      label,
      url,
      badge
    },
    companys[] {
      label,
      url,
      badge
    },
    getStarted[] {
      label,
      url,
      badge
    },
    freeTools[] {
      label,
      url,
      badge
    },
    customers[] {
      label,
      url,
      badge
    },
    popularGuides[] {
      label,
      url,
      badge
    },
  },
  footerCoLinks {
    companyNameMark {
      asset->{
        url,
      }
    },
    copyright,
    coLinks[] {
      label,
      url
    },
    businessEmail,
  },
  footerExcludedRoutes[] {
    path
  },
  footerCTAexcludedRoutes[] {
    path
  }
}`);
