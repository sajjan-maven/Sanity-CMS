import { Bell } from "lucide-react";
import { StructureBuilder } from "sanity/structure";

export const AnnouncementBanner = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Announcement Banner')
    .icon(Bell)
    .child(
      S.document()
        .id('announcementBannerABC')
        .schemaType('announcementBanner')
        .documentId('announcementBannerABC')
        .title('Announcement Banner')
    )
)