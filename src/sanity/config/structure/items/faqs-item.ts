import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";
import { FileQuestion } from "lucide-react";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";

export const FAQsItem = (
  S: StructureBuilder, 
  context: StructureResolverContext
) => (
  orderableDocumentListDeskItem({
    S, 
    context, 
    icon: FileQuestion, 
    type: 'faq', 
    title: 'FAQs', 
    id: 'orderable-faqs'
  })
)