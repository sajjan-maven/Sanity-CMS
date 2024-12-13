export type TestimonialBlockType = {
  _id: string;
  _key: string;
  _type: 'testimonialBlock';
  heading: string;
  eyebrow: string;
  testimonial: {
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
  };
  paddingTop: string;
  paddingBottom: string;
}