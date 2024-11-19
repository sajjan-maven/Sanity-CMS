import page from "./documents/page";
import generalSettings from "./singletons/general-settings";
import mobileNavigationSettings from "./singletons/mobile-navigation-settings";
import desktopNavigationSettings from "./singletons/desktop-navigation-settings";

const coreSchema = [
  page,
  generalSettings,
  mobileNavigationSettings,
  desktopNavigationSettings,
]

export const schemaTypes = [
  ...coreSchema
]