import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { BriefcaseBusiness } from "lucide-react";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";

export const ServicesItem = (
  S: StructureBuilder, 
  context: StructureResolverContext
) => (
  orderableDocumentListDeskItem({
    S, 
    context, 
    icon: BriefcaseBusiness, 
    type: 'service', 
    title: 'Services', 
    id: 'orderable-services'
  })
)