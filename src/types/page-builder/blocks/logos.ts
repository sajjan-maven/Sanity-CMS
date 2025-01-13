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
    size: 'default' | 'large';
    link?: string;
  }[];
  anchorId?: string;
}