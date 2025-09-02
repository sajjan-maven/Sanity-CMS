import { defineQuery } from "next-sanity";

export const announcementBarQuery = defineQuery(`*[_type == "announcementBar"][0] {
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
    link,
    excludedRoutes[] {
        path
    }
}`);
