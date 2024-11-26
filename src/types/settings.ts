export type SettingsType = {
  siteTitle: string;
  copyright: string;
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