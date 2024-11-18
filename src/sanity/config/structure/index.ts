import type { StructureBuilder, StructureResolver, StructureResolverContext } from "sanity/structure";
import { SettingsItem } from "./items/settings-item";

export const structure: StructureResolver = (
  S: StructureBuilder, 
  context: StructureResolverContext
) => (
  S.list()
    .title('Content')
    .items([
      SettingsItem(S),
      S.divider(),
    ])
)