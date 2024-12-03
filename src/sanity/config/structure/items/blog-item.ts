import { FiList, FiFileText } from "react-icons/fi";
import { StructureBuilder } from "sanity/structure";

export const BlogItem = (S: StructureBuilder) =>
  S.listItem()
    .title('Blog')
    .icon(FiFileText)
    .child(
      S.list()
        .title('Blog')
        .items([
          S.listItem()
            .title('Posts')
            .child(
              S.documentList()
              .title('All Posts')
              .filter('_type == "post"')
            ),
          S.listItem()
            .title('Categories')
            .icon(FiList)
            .child(
              S.documentList()
              .title('Post Categories')
              .filter('_type == "postCategory"')
            ),
        ])
    )