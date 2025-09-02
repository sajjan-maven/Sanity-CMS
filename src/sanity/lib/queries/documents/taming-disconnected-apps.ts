import { defineQuery } from "next-sanity";

export const tamingDisconnectedAppsPageQuery = defineQuery(`*[_type == "tamingDisconnectedAppsPage"][0] {
  _id,
  _type,
  badge,
  title,
  subtitle,
  description[],
  learningPoints[],
  keyChallenges[],
  formThumbnail{
    asset->{
      _id,
      url
    }
  },
  videoId,
  seo {
    title,
    description,
    noIndex,
    image,
  }
}`);
