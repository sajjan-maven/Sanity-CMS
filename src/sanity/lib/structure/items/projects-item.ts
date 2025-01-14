import { FiList, FiFileText } from "react-icons/fi";
import { StructureBuilder, StructureResolverContext } from "sanity/structure";
import { orderableDocumentListDeskItem} from '@sanity/orderable-document-list';

export const ProjectsItem = (
  S: StructureBuilder, 
  context: StructureResolverContext
) => (
  S.listItem()
    .title('Projects')
    .icon(FiFileText)
    .child(
      S.list()
        .title('Projects')
        .items([
          AllProjects(S),
          ProjectCategories(S, context),
        ])
    )
)

export const AllProjects = (
  S: StructureBuilder, 
) => (
  S.listItem()
    .title('Projects')
    .child(
      S.documentList()
      .title('All Projects')
      .filter('_type == "project"')
    ) 
)

export const ProjectCategories = (
  S: StructureBuilder, 
  context: StructureResolverContext
) => (
  orderableDocumentListDeskItem({
    S, 
    context, 
    icon: FiList, 
    type: 'projectCategory', 
    title: 'Categories', 
    id: 'orderable-project-categories'
  })
)