import { File, Folder, LetterText } from "lucide-react";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';

export const CaseStudiesItem = (
    S: StructureBuilder,
    context: StructureResolverContext
) => (
    S.listItem()
        .title('Case Study')
        .icon(Folder)
        .child(
            S.list()
                .title('Case Study')
                .items([
                    CaseStudyHomePage(S),
                    AllCaseStudies(S, context),
                ])
        )
)

export const CaseStudyHomePage = (
    S: StructureBuilder,
) => (
    S.listItem()
        .title('Case Study Home Page')
        .icon(File)
        .child(
            S.document()
                .id('casestudiesPage')
                .schemaType('casestudiesPage')
                .documentId('casestudiesPage')
                .title('Case Studies')
        )
)

export const AllCaseStudies = (
    S: StructureBuilder,
    context: StructureResolverContext
) => (
    orderableDocumentListDeskItem({
        S,
        context,
        icon: LetterText,
        type: 'casestudy',
        title: 'Case Studies',
        id: 'orderable-casestudy'
    })
)