import { Folder } from "lucide-react";
import { StructureBuilder } from "sanity/structure";

export const NavbarAndFooterItem = (
  S: StructureBuilder, 
) => (
  S.listItem()
    .title('Navbar and Footer')
    .icon(Folder)
    .child(
      S.list()
        .title('Navbar-footer')
        .items([
          NavbarItem(S),
          FooterItem(S),
        ])
    )
)


export const NavbarItem = (
  S: StructureBuilder, 
) => (
  S.listItem()
    .title('Navbar')
    .child(
      S.document()
      .id('navbar')
      .schemaType('navbar')
      .documentId('navbar')
      .title('Navbar')
    )
)

export const FooterItem = (
    S: StructureBuilder, 
  ) => (
    S.listItem()
      .title('Footer')
      .child(
        S.document()
        .id('footer')
        .schemaType('footer')
        .documentId('footer')
        .title('Footer')
      )
  )