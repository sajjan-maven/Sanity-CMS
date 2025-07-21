import { defineQuery} from "next-sanity";

export const announcementBannerQuery = defineQuery(`*[_type == "announcementBanner"][0] {
    show,
    backgroundColor { hex },
    textColor { hex },
    linkColor { hex },
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