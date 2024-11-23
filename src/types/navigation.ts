import { PageType } from "./page";

export type NavigationSettingsType = {
  navbar: {
    navbarType: 'classic' | 'floating';
    navbarMenuItems: MenuItemType[];
  }
} 

export type MenuItemType = {
  _key: string;
  title: string;
  pageReference: PageType;
  isButton: boolean;
}