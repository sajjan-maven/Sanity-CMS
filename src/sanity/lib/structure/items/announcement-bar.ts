import { Bell } from "lucide-react";
import { StructureBuilder } from "sanity/structure";

export const AnnouncementBar = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Announcement Bar')
    .icon(Bell)
    .child(
      S.document()
        .id('announcementBar')
        .schemaType('announcementBar')
        .documentId('announcementBar')
        .title('Announcement Bar')
    )
)