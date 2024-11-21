export type SettingsType = {
  siteTitle: string;
  logo?: {
    asset: { 
      url: string
    }, 
  };
  homePage: {
    title: string;
    slug: string;
  };
}