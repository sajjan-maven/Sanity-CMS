import { defineQuery } from "next-sanity";
import { pageBuilder } from "../fragments/page-builder";

export const homePageQuery = defineQuery(`*[_type == "homePage"][0] {
  _id,
  _type,
  heading,
  headingWidth,
  subheading,
  subheadingWidth,
  clickthrough,
  emailCapture,
  ${pageBuilder},
  "seo": {
    "title": coalesce(seo.title, heading, ""),
    "description": coalesce(seo.description, ""),
    "noIndex": seo.noIndex == true,
    "image": seo.image,
  },
}`);
