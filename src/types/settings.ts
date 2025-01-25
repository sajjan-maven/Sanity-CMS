export type SettingsType = {
  siteTitle: string;
  copyright: string;
  siteLogo?: {
    asset: { 
      url: string
    }, 
  };
  homePage: {
    title: string;
    slug: string;
  };
  companyEmailAddress?: string;
  companyPhoneNumber?: string;
  companySocialMediaLinks: {
    _key: string;
    title: string;
    profileUrl: string;
    icon: {
      asset: {
        url: string;
      }
    }
  }[]
}

export type BlogSettingsType = {
  showRelatedPosts: boolean;
  showTableOfContents: boolean;
  showPostsByCategory: boolean;
}