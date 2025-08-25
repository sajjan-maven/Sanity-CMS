import { File, LetterText, Folder, Users, Tags } from "lucide-react";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

export const BlogItem = (
  S: StructureBuilder,
  context: StructureResolverContext
) => (
  S.listItem()
    .title('Blog')
    .icon(Folder)
    .child(
      S.list()
        .title('Blog')
        .items([
          BlogHome(S),
          AllPosts(S),
          PostCategories(S, context),
          Authors(S)
        ])
    )
)

export const BlogHome = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Blog Home Page')
    .icon(File)
    .child(
      S.document()
        .id('blogPage')
        .schemaType('blogPage')
        .documentId('blogPage')
        .title('Blog')
    )
)

export const AllPosts = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Blog Posts')
    .icon(LetterText)
    .child(
      S.documentList()
        .title('All Posts')
        .filter('_type == "post"')
    )
)

export const PostCategories = (
  S: StructureBuilder,
  context: StructureResolverContext
) => (
  orderableDocumentListDeskItem({
    S,
    context,
    icon: Tags,
    type: 'postCategory',
    title: 'Blog Categories',
    id: 'orderable-post-categories'
  })
)

export const Authors = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Blog Authors')
    .icon(Users)
    .child(
      S.documentList()
        .title('Authors')
        .filter('_type == "author"')
    )
)