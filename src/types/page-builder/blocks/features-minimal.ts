export type FeaturesMinimalBlockType = {
  _id: string;
  _key: string;
  _type: 'featuresMinimalBlock';
  heading: string;
  features: string[];
  enableBorderTop: boolean;
  cornerRadiusTop: 'rounded' | 'straight';
  enableBorderBottom: boolean;
  cornerRadiusBottom: 'rounded' | 'straight';
  paddingTop: string;
  paddingBottom: string;
}