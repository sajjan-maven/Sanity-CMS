import { defineQuery} from "next-sanity";

export const announcementBannerQuery = defineQuery(`*[_type == "announcementBanner"][0] {
    show,
    icon {
        asset->{
            url,
        }
    },
    text,
    linkText,
    link
  }
`);