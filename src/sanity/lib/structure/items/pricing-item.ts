import { IndianRupee } from "lucide-react";
import { StructureBuilder } from "sanity/structure";

export const PricingItem = (
    S: StructureBuilder,
) => (
    S.listItem()
        .title('Pricing')
        .icon(IndianRupee)
        .child(
            S.document()
                .id('pricingItemABC')
                .schemaType('pricingItem')
                .documentId('pricingItemABC')
                .title('Pricing')
        )
)