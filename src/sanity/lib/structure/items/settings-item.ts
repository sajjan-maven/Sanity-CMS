import { ScanText, Settings, Shuffle, Tv, Video, Wrench } from "lucide-react";
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
            .title('Hide Navbar | Footer')
            .icon(Wrench)
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
            .icon(Tv)
            .child(
              S.document()
                .id('marketingSettings')
                .schemaType('marketingSettings')
                .documentId('marketingSettings')
                .title('Marketing')
            ),
          S.listItem()
            .title('Redirects')
            .icon(Shuffle)
            .child(
              S.documentList()
                .title('All Redirects')
                .filter('_type == "redirect"')
            ),
          S.divider(),
          S.listItem()
            .title('Blog & Posts')
            .icon(ScanText)
            .child(
              S.document()
                .id('blogSettings')
                .schemaType('blogSettings')
                .documentId('blogSettings')
                .title('Blog & Posts')
            ),
        ])
    )