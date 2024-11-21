import { PageType } from "./page";

export type NavigationSettingsType = {
  navbar: {
    navbarMenuItems: MenuItemType[]
  }
} 

export type MenuItemType = {
  _key: string;
  title: string;
  pageReference: PageType;
  isButton: boolean;
}