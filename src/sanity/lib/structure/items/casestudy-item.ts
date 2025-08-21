import { Folder } from "lucide-react";
import { Star } from "lucide-react";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

export const CaseStudiesItem = (
    S: StructureBuilder,
    context: StructureResolverContext
) => (
    orderableDocumentListDeskItem({
        S,
        context,
        icon: Folder,
        type: 'casestudies',
        title: 'Case Studies',
        id: 'orderable-casestudies'
    })
)