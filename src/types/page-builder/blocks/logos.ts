export type LogoBlockType = {
  _id: string;
  _key: string;
  _type: 'logoBlock';
  heading: string;
  logos: {
    _key: string;
    title: string;
    image: {
      asset: {
        url: string;
      }
    };
    link?: string;
  }[];
}