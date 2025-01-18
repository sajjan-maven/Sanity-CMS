export type MediaBlockType = {
  _id: string;
  _key: string;
  _type: 'mediaBlock';
  backgroundType: 'image' | 'video';
  backgroundWidth: 'full' | 'contained';
  overlayType: 'none' | 'dark';
  dialogType: 'none' | 'video';
  image: {
    asset: {
      url: string;
    };
    alt: string;
  };
  videoUrl?: string;
  anchorId?: string;
}