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
      .id('announcementBanner')
      .schemaType('announcementBanner')
      .documentId('announcementBanner')
      .title('Announcement Banner')
    )
)