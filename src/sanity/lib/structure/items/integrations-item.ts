import { File, Folder, MonitorSmartphone, Tags } from "lucide-react";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

export const IntegrationsItem = (
    S: StructureBuilder,
    context: StructureResolverContext
) => (
    S.listItem()
        .title('Integrations')
        .icon(Folder)
        .child(
            S.list()
                .title('Integrations')
                .items([
                    IntegrationsHome(S),
                    AllApplications(S, context),
                    ApplicationCategories(S, context),
                ])
        )
)

export const IntegrationsHome = (
    S: StructureBuilder,
) => (
    S.listItem()
        .title('Integrations Home Page')
        .icon(File)
        .child(
            S.document()
                .id('integrationsPage')
                .schemaType('integrationsPage')
                .documentId('integrationsPage')
                .title('Integrations')
        )
)

// export const AllApplications = (
//     S: StructureBuilder,
// ) => (
//     S.listItem()
//         .title('Applications')
//         .icon(MonitorSmartphone)
//         .child(
//             S.documentList()
//                 .title('All Integrations')
//                 .filter('_type == "integrationApplication"')
//         )
// )

export const AllApplications = (
    S: StructureBuilder,
    context: StructureResolverContext
) => (
    orderableDocumentListDeskItem({
        S,
        context,
        icon: MonitorSmartphone,
        type: 'integrationApplication',
        title: 'Applications',
        id: 'orderable-integration-applications'
    })
)

export const ApplicationCategories = (
    S: StructureBuilder,
    context: StructureResolverContext
) => (
    orderableDocumentListDeskItem({
        S,
        context,
        icon: Tags,
        type: 'integrationCategory',
        title: 'Categories',
        id: 'orderable-integration-categories'
    })
)