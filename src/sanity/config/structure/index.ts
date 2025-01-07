import type { StructureBuilder, StructureResolver, StructureResolverContext } from "sanity/structure";
import { SettingsItem } from "./items/settings-item";
import { PagesItem } from "./items/pages-item";
import { BlogItem } from "./items/blog-item";
import { TestimonialsItem } from "./items/testimonials-item";
import { FAQsItem } from "./items/faqs-item";
import { ServicesItem } from "./items/services-item";
import { ProjectsItem } from "./items/projects-item";
import { FormsItem } from "./items/forms-item";

export const structure: StructureResolver = (
  S: StructureBuilder, 
  context: StructureResolverContext
) => (
  S.list()
    .title('Content')
    .items([
      S.divider(),
      SettingsItem(S),
      S.divider(),
      PagesItem(S),
      S.divider(),
      ServicesItem(S, context),
      ProjectsItem(S, context),
      BlogItem(S, context),
      S.divider(),
      FAQsItem(S, context),
      TestimonialsItem(S, context),
      S.divider(),
      FormsItem(S),
      S.divider(),
    ])
)