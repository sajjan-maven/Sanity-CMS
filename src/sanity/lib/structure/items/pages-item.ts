import { FileText } from "lucide-react";
import { StructureBuilder } from "sanity/structure";

export const PagesItem = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Pages')
    .icon(FileText)
    .child(
      S.list()
        .title('Pages')
        .items([
          HomeItem(S),
          // IndexPages(S),
          BlogItem(S),
          PageBuilder(S),
          PrivacyItem(S),
          TermsOfServiceItem(S)
        ])
    )
)
export const HomeItem = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Home')
    .child(
      S.document()
        .id('homePage')
        .schemaType('homePage')
        .documentId('homePage')
        .title('Home')
    )
)

export const PrivacyItem = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Privacy Policy')
    .child(
      S.document()
        .id('privacyPage')
        .schemaType('privacyPage')
        .documentId('privacyPage')
        .title('Privacy')
    )
)

export const TermsOfServiceItem = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Terms Of Service')
    .child(
      S.document()
        .id('termsPage')
        .schemaType('termsPage')
        .documentId('termsPage')
        .title('Terms and Services')
    )
)

// export const IndexPages = (
//   S: StructureBuilder,
// ) => (
//   S.listItem()
//     .title('Index Pages')
//     .child(
//       S.list()
//         .title('Index Pages')
//         .items([
//           BlogItem(S),
//           // ProjectsItem(S),
//           // ServicesItem(S)
//         ])
//     )
// )

export const PageBuilder = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Other Pages')
    .child(
      S.documentList()
        .title('Page Builder')
        .filter('_type == "page"')
    )
)

export const BlogItem = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Blog')
    .child(
      S.document()
        .id('blogPage')
        .schemaType('blogPage')
        .documentId('blogPage')
        .title('Blog')
    )
)

export const IntegrationsItem = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Integrations')
)

export const CaseStudieItem = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Case Studies')
)

// export const ServicesItem = (
//   S: StructureBuilder,
// ) => (
//   S.listItem()
//     .title('Services')
//     .child(
//       S.document()
//         .id('servicesPage')
//         .schemaType('servicesPage')
//         .documentId('servicesPage')
//         .title('Services')
//     )
// )

// export const ProjectsItem = (
//   S: StructureBuilder,
// ) => (
//   S.listItem()
//     .title('Projects')
//     .child(
//       S.document()
//         .id('projectsPage')
//         .schemaType('projectsPage')
//         .documentId('projectsPage')
//         .title('Projects')
//     )
// )