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

export type BlogSettingsType = {
  showRelatedPosts: boolean;
  showTableOfContents: boolean;
  showPostsByCategory: boolean;
}