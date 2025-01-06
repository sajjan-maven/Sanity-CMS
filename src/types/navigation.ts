import { ButtonType } from "./button";
import { PageType } from "./page";

export type NavigationSettingsType = {
  navbar: {
    navbarMenuItems: MenuItemType[];
  }
  slideOutMenu: {
    showSlideOutMenu: boolean;
    slideOutMenuItems: MenuItemType[];
    slideOutMenuButtons: ButtonType[];
  }
  footer: {
    footerColumns: {
      _key: string;
      title: string;
      menuItems: MenuItemType[]
    }[];
    footerLegalMenuItems: MenuItemType[];
  }
} 

export type MenuItemType = {
  _key: string;
  title: string;
  menuItemType: 'single' | 'group';
  pageReference: PageType;
  pageReferences: PageType[];
  isButton?: boolean;
}