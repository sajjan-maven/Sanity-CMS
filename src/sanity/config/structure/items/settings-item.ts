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
            .title('General Settings')
            .child(
              S.document()
              .id('generalSettings')
              .schemaType('generalSettings')
              .documentId('generalSettings')
              .title('General Settings')
            ),
          S.listItem()
            .title('Desktop Navigation')
            .child(
              S.document()
                .id('desktopNavigationSettings')
                .schemaType('desktopNavigationSettings')
                .documentId('desktopNavigationSettings')
                .title('Desktop Navigation')
            ),
          S.listItem()
            .title('Mobile Navigation')
            .child(
              S.document()
                .id('mobileNavigationSettings')
                .schemaType('mobileNavigationSettings')
                .documentId('mobileNavigationSettings')
                .title('Mobile Navigation')
            ),
        ])
    )