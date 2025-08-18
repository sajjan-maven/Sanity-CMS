import { Tag, Folder, MonitorSmartphone } from "lucide-react";
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
                .title('All Posts')
                .filter('_type == "post"')
        )
)

export const ApplicationCategories = (
    S: StructureBuilder,
    context: StructureResolverContext
) => (
    orderableDocumentListDeskItem({
        S,
        context,
        icon: Tag,
        type: 'postCategory',
        title: 'Categories',
        id: 'orderable-post-categories'
    })
)