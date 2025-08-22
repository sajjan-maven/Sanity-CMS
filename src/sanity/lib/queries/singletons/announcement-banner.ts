import { defineQuery} from "next-sanity";

export const announcementBannerQuery = defineQuery(`*[_type == "announcementBanner"][0] {
    show,
    backgroundColor { value },
    textColor { value },
    linkColor { value },
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

export const announcementBarSettingsQuery = defineQuery(`*[_type == "announcementBarSettings"][0] {
    excludedRoutes[] {
        path,
        note
    }
  }
`);