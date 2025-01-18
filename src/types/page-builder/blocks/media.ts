export type MediaBlockType = {
  _id: string;
  _key: string;
  _type: 'mediaBlock';
  backgroundType: 'image' | 'video';
  backgroundWidth: 'full' | 'contained';
  dialogType: 'none' | 'video';
  image: {
    asset: {
      url: string;
    };
    alt: string;
  };
  anchorId?: string;
}