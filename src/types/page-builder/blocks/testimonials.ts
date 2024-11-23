export type TestimonialBlockType = {
  _id: string;
  _key: string;
  _type: 'testimonialBlock';
  testimonial: string;
  author: string;
  position: string;
  avatar: {
    asset: {
      url: string;
    }
  };
  company: string;
  logo: {
    asset: {
      url: string;
    }
  };
}