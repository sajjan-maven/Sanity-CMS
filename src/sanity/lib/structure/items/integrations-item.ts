import { Folder, MonitorSmartphone, Tags } from "lucide-react";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

// Dummy file for test
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
                    AllApplications(S),
                    ApplicationCategories(S, context),
                ])
        )
)

export const AllApplications = (
    S: StructureBuilder,
) => (
    S.listItem()
        .title('Applications')
        .icon(MonitorSmartphone)
        .child(
            S.documentList()
                .title('All Integrations')
                .filter('_type == "integrationApplication"')
        )
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