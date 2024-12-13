export type TestimonialType = {
  _id: string;
  name: string;
  jobTitle: string; 
  company: string;
  quote: string;
  avatar: {
    asset: {
      url: string;
    }
  };
  logo: {
    asset: {
      url: string;
    }
  };
}