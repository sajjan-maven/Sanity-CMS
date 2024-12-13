import { Folder } from "lucide-react";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";

export const PagesItem = (
  S: StructureBuilder, 
) => (
  S.listItem()
    .title('Pages')
    .icon(Folder)
    .child(
      S.list()
        .title('Pages')
        .items([
          CorePages(S),
          PageBuilder(S),
        ])
    )
)

export const CorePages = (
  S: StructureBuilder, 
) => (
  S.listItem()
    .title('Core Pages')
    .child(
      S.list()
        .title('Core Pages')
        .items([
          BlogArchiveItem(S)
        ])
    ) 
)

export const PageBuilder = (
  S: StructureBuilder, 
) => (
  S.listItem()
    .title('Page Builder')
    .child(
      S.documentList()
      .title('Page Builder')
      .filter('_type == "page"')
    ) 
)

export const BlogArchiveItem = (
  S: StructureBuilder, 
) => (
  S.listItem()
    .title('Blog Archive')
    .child(
      S.document()
      .id('blogArchivePage')
      .schemaType('blogArchivePage')
      .documentId('blogArchivePage')
      .title('Blog Archive')
    )
)