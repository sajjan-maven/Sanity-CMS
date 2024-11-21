import page from "./documents/page";
import generalSettings from "./singletons/general-settings";
import navigationSettings from "./singletons/navigation-settings";

const coreSchema = [
  page,
  generalSettings,
  navigationSettings,
]

export const schemaTypes = [
  ...coreSchema
]