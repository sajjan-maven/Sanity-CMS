import { PageType } from "./page";
import { ButtonType } from "./button";
import { SettingsType } from "./settings";

export type NavigationSettingsType = {
  navbar: {
    navbarMenuItems: MenuItemType[];
  }
  slideOutMenu: {
    showSlideOutMenu: boolean;
    slideOutMenuItems: MenuItemType[];
    slideOutMenuButtons: ButtonType[];
    showCompanyDetailsSlideOutMenu: boolean;
    slideOutMenuSettings: {
      companyEmailAddress: SettingsType['companyEmailAddress'];
      companyPhoneNumber: SettingsType['companyPhoneNumber'];
      companySocialMediaLinks: SettingsType['companySocialMediaLinks'];
    };
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
  linkType: 'internal' | 'external';
  pageReference: PageType;
  pageReferences: PageType[];
  externalUrl?: string;
  isButton?: boolean;
}