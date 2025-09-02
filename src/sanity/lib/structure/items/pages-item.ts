import { File, Files } from "lucide-react";
import { StructureBuilder } from "sanity/structure";

// QWER 2
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
          WebinarItem(S),
          S.divider(),
          PageBuilderPlatforms(S),
          PageBuilderSolutions(S),
          PageBuilderResources(S),
          PageBuilderCompany(S),
          PageBuilderLanding(S),
          PageBuilder(S),
          S.divider(),
          PrivacyItem(S),
          TermsOfServiceItem(S),
        ])
    )
)
export const HomeItem = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Home Page')
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
    .title('Privacy Policy Page')
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
    .title('Terms Of Service page')
    .icon(File)
    .child(
      S.document()
        .id('termsPage')
        .schemaType('termsPage')
        .documentId('termsPage')
        .title('Terms and Services')
    )
)

export const WebinarItem = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Webinar Page')
    .icon(File)
    .child(
      S.document()
        .id('tamingDisconnectedAppsPage')
        .schemaType('tamingDisconnectedAppsPage')
        .documentId('tamingDisconnectedAppsPage')
        .title('Taming Disconnected Apps')
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

export const PageBuilderPlatforms = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Platforms Page')
    .icon(Files)
    .child(
      S.documentList()
        .title('Platforms Page')
        .filter('_type == "page" && pageType == "platform"')
    )
)

export const PageBuilderSolutions = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Solutions Page')
    .icon(Files)
    .child(
      S.documentList()
        .title('Solutions Page')
        .filter('_type == "page" && pageType == "solution"')
    )
)

export const PageBuilderResources = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Resources Page')
    .icon(Files)
    .child(
      S.documentList()
        .title('Resources Page')
        .filter('_type == "page" && pageType == "resource"')
    )
)

export const PageBuilderCompany = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Company Pages')
    .icon(Files)
    .child(
      S.documentList()
        .title('Company Pages')
        .filter('_type == "page" && pageType == "company"')
    )
)

export const PageBuilderLanding = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Landing Pages')
    .icon(Files)
    .child(
      S.documentList()
        .title('Landing Page')
        .filter('_type == "page" && pageType == "landing"')
    )
)

export const PageBuilder = (
  S: StructureBuilder,
) => (
  S.listItem()
    .title('Other Pages')
    .icon(Files)
    .child(
      S.documentList()
        .title('Other Pages')
        .filter('_type == "page" && !defined(pageType)')
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