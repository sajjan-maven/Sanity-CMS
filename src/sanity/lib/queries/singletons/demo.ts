import { defineQuery } from "next-sanity";

export const demoSettingsQuery = defineQuery(`*[_type == 'demoSettings'][0] {
  mainHeading,
  benefits[] {
    icon {
      asset->{ url }
    },
    text
  },
  trustedByText,
  testimonialCard {
    quoteText,
    authorName,
    authorTitle,
    authorImage {
      asset->{ url }
    }
  },
  testimonialsHeading,
  testimonialsG2[] {
    name,
    jobTitle,
    company,
    quote,
    avatar {
      asset->{ url }
    },
    logo {
      asset->{ url }
    }
  },
  logos[] {
    asset->{ url }
  },
  demoComponentHeading,
  "seo": {
    "title": coalesce(seo.title, "Schedule a demo | Stitchflow"),
    "description": coalesce(seo.description, "See how Stitchflow helps IT teams discover shadow apps, fix access risks, and reclaim SaaS waste. Schedule a personalized demo today."),
    "noIndex": seo.noIndex == true,
    "image": seo.image,
  },
}`);

export const testimonialsQuery = defineQuery(`*[_type == 'testimonial'] | order(_createdAt desc) {
  _id,
  name,
  jobTitle,
  company,
  quote,
  avatar {
    asset->{ url }
  },
  logo {
    asset->{ url }
  }
}`);
