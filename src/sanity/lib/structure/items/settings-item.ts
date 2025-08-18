import { Settings } from "lucide-react";
import type { StructureBuilder } from "sanity/structure";

export const SettingsItem = (S: StructureBuilder) =>
  S.listItem()
    .title('Settings')
    .icon(Settings)
    .child(
      S.list()
        .title('Settings')
        .items([
          S.listItem()
            .title('Hide Announcement Bar')
            .child(
              S.document()
                .id('announcementBarSettings')
                .schemaType('announcementBarSettings')
                .documentId('announcementBarSettings')
                .title('Announcement Bar')
            ),
          S.listItem()
            .title('Hide Navigation Bar and Footer')
            .child(
              S.document()
                .id('navbarFooterSettings')
                .schemaType('navbarFooterSettings')
                .documentId('navbarFooterSettings')
                .title('Navbar & Footer')
            ),
          S.divider(),
          S.listItem()
            .title('Marketing')
            .child(
              S.document()
                .id('marketingSettings')
                .schemaType('marketingSettings')
                .documentId('marketingSettings')
                .title('Marketing')
            ),
          S.listItem()
            .title('Redirects')
            .child(
              S.documentList()
                .title('All Redirects')
                .filter('_type == "redirect"')
            ),
          S.divider(),
          S.listItem()
            .title('Blog & Posts')
            .child(
              S.document()
                .id('blogSettings')
                .schemaType('blogSettings')
                .documentId('blogSettings')
                .title('Blog & Posts')
            ),
        ])
    )