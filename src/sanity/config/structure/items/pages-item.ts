import { Folder } from "lucide-react";
import { StructureBuilder } from "sanity/structure";

export const PagesItem = (S: StructureBuilder) =>
  S.listItem()
    .title("Pages")
    .icon(Folder)
    .child(
      S.documentList()
        .title('Pages')
        .filter('_type == "page"')
      )