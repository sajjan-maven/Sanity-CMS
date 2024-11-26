import { PageType } from "./page";

export type NavigationSettingsType = {
  navbar: {
    navbarType: 'classic' | 'floating';
    navbarMenuItems: MenuItemType[];
  }
  footer: {
    footerColumns: {
      _key: string;
      title: string;
      menuItems: MenuItemType[]
    }[]
  }
} 

export type MenuItemType = {
  _key: string;
  title: string;
  pageReference: PageType;
  isButton?: boolean;
}