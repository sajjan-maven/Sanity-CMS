import { File, Files } from "lucide-react";
import { StructureBuilder } from "sanity/structure";

export const PagesItem = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Pages')
    .icon(Files)
    .child(
      S.list()
        .title('Pages')
        .items([
          HomeItem(S),
          // IndexPages(S),
          // BlogItem(S),
          // CaseStudieItem(S),
          DemoPageItem(S),
          PrivacyItem(S),
          TermsOfServiceItem(S),
          S.divider(),
          PageBuilder(S),
        ])
    )
)
export const HomeItem = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Home')
    .icon(File)
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
    .icon(File)
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
    .icon(File)
    .child(
      S.document()
        .id('termsPage')
        .schemaType('termsPage')
        .documentId('termsPage')
        .title('Terms and Services')
    )
)

export const DemoPageItem = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Demo Page')
    .icon(File)
    .child(
      S.document()
        .id('demoSettings')
        .schemaType('demoSettings')
        .documentId('demoSettings')
        .title('Demo Page')
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
    .icon(Files)
    .child(
      S.documentList()
        .title('Page Builder')
        .filter('_type == "page"')
    )
)



// export const BlogItem = (
//   S: StructureBuilder,
// ) => (
//   S.listItem()
//     .title('Blog')
//     .icon(File)
//     .child(
//       S.document()
//         .id('blogPage')
//         .schemaType('blogPage')
//         .documentId('blogPage')
//         .title('Blog')
//     )
// )

// export const IntegrationsItem = (
//   S: StructureBuilder,
// ) => (
//   S.listItem()
//     .title('Integrations')
//     .icon(File)
// )

// export const CaseStudieItem = (
//   S: StructureBuilder,
// ) => (
//   S.listItem()
//     .title('Case Studies')
//     .icon(File)
//     .child(
//       S.document()
//         .id('casestudiesPage')
//         .schemaType('casestudiesPage')
//         .documentId('casestudiesPage')
//         .title('Case Studies')
//     )
// )

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